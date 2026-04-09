"""Where do users pay? Stacked bar (free/paid ratio) + box plot of prices."""
import json
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from collections import defaultdict

with open("templates-dense.json") as f:
    templates = json.load(f)

cat_free = defaultdict(int)
cat_paid = defaultdict(int)
cat_prices = defaultdict(list)
cat_count = defaultdict(int)

for t in templates:
    for c in t["categories"]:
        cat_count[c] += 1
        if t["is_paid"]:
            cat_paid[c] += 1
            if t["price_usd"]:
                cat_prices[c].append(t["price_usd"])
        else:
            cat_free[c] += 1

cats = sorted([c for c in cat_count if cat_count[c] >= 5],
              key=lambda c: cat_paid[c] / max(cat_count[c], 1), reverse=True)

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, max(6, len(cats) * 0.45)))

# --- Stacked bar: free vs paid ---
free_vals = [cat_free[c] for c in cats]
paid_vals = [cat_paid[c] for c in cats]
y = np.arange(len(cats))

ax1.barh(y, paid_vals, color="#E74C3C", label="Paid")
ax1.barh(y, free_vals, left=paid_vals, color="#95A5A6", label="Free", alpha=0.7)

for i, c in enumerate(cats):
    total = cat_count[c]
    pct = cat_paid[c] / total * 100 if total else 0
    ax1.text(total + 2, i, f"{pct:.0f}% paid", va="center", fontsize=8)

ax1.set_yticks(y)
ax1.set_yticklabels(cats)
ax1.set_xlabel("Number of Templates")
ax1.set_title("Free vs Paid Templates by Category", fontsize=13, fontweight="bold")
ax1.legend(loc="lower right")
ax1.spines["top"].set_visible(False)
ax1.spines["right"].set_visible(False)

# --- Box plot: price distribution ---
cats_with_prices = [c for c in cats if len(cat_prices[c]) >= 3]
price_data = [cat_prices[c] for c in cats_with_prices]

if price_data:
    bp = ax2.boxplot(price_data, vert=False, tick_labels=cats_with_prices,
                     patch_artist=True, widths=0.6,
                     boxprops=dict(facecolor="#AED6F1", edgecolor="#2C3E50"),
                     medianprops=dict(color="#E74C3C", linewidth=2))
    ax2.set_xlabel("Price (USD)")
    ax2.set_title("Price Distribution (categories with 3+ paid)", fontsize=13, fontweight="bold")
    ax2.spines["top"].set_visible(False)
    ax2.spines["right"].set_visible(False)
else:
    ax2.text(0.5, 0.5, "Not enough paid data", ha="center", va="center", transform=ax2.transAxes)

plt.tight_layout()
plt.savefig("02_revenue_potential.png", dpi=150)
print("Saved 02_revenue_potential.png")
