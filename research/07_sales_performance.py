"""Where does money actually flow? Revenue by category + price-vs-sales scatter."""
import json
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
import numpy as np
from collections import defaultdict

with open("templates-dense.json") as f:
    templates = json.load(f)

cat_revenue = defaultdict(float)
cat_count = defaultdict(int)
for t in templates:
    for c in t["categories"]:
        cat_count[c] += 1
        if t["is_paid"] and t["price_usd"] and t["total_sales"]:
            cat_revenue[c] += t["price_usd"] * t["total_sales"]

valid_cats = {c for c in cat_count if cat_count[c] >= 5}

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 8))

# --- Revenue by category ---
rev_cats = sorted([(c, cat_revenue[c]) for c in valid_cats if cat_revenue[c] > 0],
                  key=lambda x: x[1])
if rev_cats:
    names = [c for c, _ in rev_cats]
    vals = [v for _, v in rev_cats]
    ax1.barh(names, vals, color="#27AE60", edgecolor="white")
    for i, (n, v) in enumerate(rev_cats):
        ax1.text(v + max(vals) * 0.01, i, f"${v:,.0f}", va="center", fontsize=8)
    ax1.set_xlabel("Total Revenue (USD)")
    ax1.set_title("Revenue by Category", fontsize=13, fontweight="bold")
    ax1.xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, _: f"${x/1000:.0f}K" if x >= 1000 else f"${x:.0f}"))
else:
    ax1.text(0.5, 0.5, "No revenue data", ha="center", va="center", transform=ax1.transAxes)
ax1.spines["top"].set_visible(False)
ax1.spines["right"].set_visible(False)

# --- Price vs Sales scatter (paid templates only) ---
paid = [t for t in templates if t["is_paid"] and t["price_usd"] and t["price_usd"] > 0]
prices = [t["price_usd"] for t in paid]
sales = [t["total_sales"] for t in paid]
usages = [t["usage"] for t in paid]

# Size by usage (log scale for visibility)
sizes = [max(10, np.log1p(u) * 8) for u in usages]

scatter = ax2.scatter(prices, sales, s=sizes, c=usages, cmap="YlOrRd",
                      edgecolors="#333", linewidth=0.5, alpha=0.7,
                      norm=plt.matplotlib.colors.LogNorm(vmin=max(1, min(u for u in usages if u > 0)),
                                                          vmax=max(usages)))
cbar = plt.colorbar(scatter, ax=ax2, label="Usage (installs)")
cbar.ax.tick_params(labelsize=8)

# Label outliers (top 5 by revenue)
paid_with_rev = [(t, t["price_usd"] * t["total_sales"]) for t in paid if t["total_sales"] > 0]
paid_with_rev.sort(key=lambda x: x[1], reverse=True)
for t, rev in paid_with_rev[:5]:
    ax2.annotate(t["name"][:25], (t["price_usd"], t["total_sales"]),
                 textcoords="offset points", xytext=(5, 5), fontsize=7,
                 arrowprops=dict(arrowstyle="-", color="#999", lw=0.5))

ax2.set_xlabel("Price (USD)")
ax2.set_ylabel("Total Sales")
ax2.set_title("Price vs Sales (size/color = usage)", fontsize=13, fontweight="bold")
ax2.spines["top"].set_visible(False)
ax2.spines["right"].set_visible(False)

plt.tight_layout()
plt.savefig("07_sales_performance.png", dpi=150)
print("Saved 07_sales_performance.png")
