"""Where is the demand? Horizontal bar chart of total usage per category."""
import json
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
from collections import defaultdict

with open("templates-dense.json") as f:
    templates = json.load(f)

cat_usage = defaultdict(int)
cat_count = defaultdict(int)
for t in templates:
    for c in t["categories"]:
        cat_usage[c] += t["usage"]
        cat_count[c] += 1

# Filter minor categories (<5 templates)
cats = {c: cat_usage[c] for c in cat_usage if cat_count[c] >= 5}
sorted_cats = sorted(cats.items(), key=lambda x: x[1])

names = [c for c, _ in sorted_cats]
values = [v for _, v in sorted_cats]

fig, ax = plt.subplots(figsize=(12, max(6, len(names) * 0.45)))
bars = ax.barh(names, values, color="#4C72B0", edgecolor="white", linewidth=0.5)

# Annotate with template count
for bar, name in zip(bars, names):
    w = bar.get_width()
    ax.text(w + max(values) * 0.01, bar.get_y() + bar.get_height() / 2,
            f"{w:,.0f}  ({cat_count[name]} templates)",
            va="center", fontsize=8, color="#333")

ax.set_xlabel("Total Usage (installs)")
ax.set_title("Category Demand — Total Usage per Category", fontsize=14, fontweight="bold")
ax.xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, _: f"{x/1000:.0f}K" if x >= 1000 else f"{x:.0f}"))
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)
plt.tight_layout()
plt.savefig("01_category_demand.png", dpi=150)
print("Saved 01_category_demand.png")
