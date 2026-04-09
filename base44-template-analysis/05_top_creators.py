"""Who to partner with? Top 15 creators by usage + top 15 by revenue."""
import json
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
from collections import defaultdict

with open("templates-dense.json") as f:
    templates = json.load(f)

creator_usage = defaultdict(int)
creator_revenue = defaultdict(float)
creator_templates = defaultdict(int)

for t in templates:
    name = t["creator_name"]
    creator_usage[name] += t["usage"]
    creator_templates[name] += 1
    if t["is_paid"] and t["price_usd"] and t["total_sales"]:
        creator_revenue[name] += t["price_usd"] * t["total_sales"]

# Top 15 by usage
top_usage = sorted(creator_usage.items(), key=lambda x: x[1], reverse=True)[:15]
# Top 15 by revenue (exclude $0)
top_rev = sorted([(k, v) for k, v in creator_revenue.items() if v > 0],
                 key=lambda x: x[1], reverse=True)[:15]

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 8))

# --- Usage chart ---
names_u = [n for n, _ in reversed(top_usage)]
vals_u = [v for _, v in reversed(top_usage)]
colors_u = ["#E74C3C" if n == "Base44 App" else "#4C72B0" for n in names_u]
bars1 = ax1.barh(names_u, vals_u, color=colors_u, edgecolor="white")
for bar, name in zip(bars1, names_u):
    w = bar.get_width()
    ax1.text(w + max(vals_u) * 0.01, bar.get_y() + bar.get_height() / 2,
             f"{w:,.0f}  ({creator_templates[name]}t)",
             va="center", fontsize=8)
ax1.set_xlabel("Total Usage")
ax1.set_title("Top 15 Creators by Usage", fontsize=13, fontweight="bold")
ax1.xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, _: f"{x/1000:.0f}K"))
ax1.spines["top"].set_visible(False)
ax1.spines["right"].set_visible(False)

# --- Revenue chart ---
if top_rev:
    names_r = [n for n, _ in reversed(top_rev)]
    vals_r = [v for _, v in reversed(top_rev)]
    colors_r = ["#E74C3C" if n == "Base44 App" else "#27AE60" for n in names_r]
    bars2 = ax2.barh(names_r, vals_r, color=colors_r, edgecolor="white")
    for bar, name in zip(bars2, names_r):
        w = bar.get_width()
        ax2.text(w + max(vals_r) * 0.01, bar.get_y() + bar.get_height() / 2,
                 f"${w:,.0f}  ({creator_templates[name]}t)",
                 va="center", fontsize=8)
    ax2.set_xlabel("Estimated Revenue (USD)")
    ax2.set_title("Top 15 Creators by Revenue", fontsize=13, fontweight="bold")
    ax2.xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, _: f"${x/1000:.0f}K" if x >= 1000 else f"${x:.0f}"))
    ax2.spines["top"].set_visible(False)
    ax2.spines["right"].set_visible(False)
else:
    ax2.text(0.5, 0.5, "No revenue data", ha="center", va="center", transform=ax2.transAxes)

plt.suptitle("Red = Base44 App (official)", fontsize=9, color="#E74C3C", y=0.01)
plt.tight_layout()
plt.savefig("05_top_creators.png", dpi=150)
print("Saved 05_top_creators.png")
