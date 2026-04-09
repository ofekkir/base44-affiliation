"""Where are underserved niches? Scatter: supply (template count) vs demand (total usage) with quadrant lines."""
import json
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from collections import defaultdict

with open("templates-dense.json") as f:
    templates = json.load(f)

cat_usage = defaultdict(int)
cat_count = defaultdict(int)
for t in templates:
    for c in t["categories"]:
        cat_usage[c] += t["usage"]
        cat_count[c] += 1

cats = {c for c in cat_count if cat_count[c] >= 5}

names = sorted(cats)
supply = [cat_count[c] for c in names]
demand = [cat_usage[c] for c in names]

fig, ax = plt.subplots(figsize=(12, 9))
ax.scatter(supply, demand, s=120, c="#4C72B0", edgecolors="white", linewidth=0.8, zorder=5)

for i, name in enumerate(names):
    ax.annotate(name, (supply[i], demand[i]),
                textcoords="offset points", xytext=(8, 4), fontsize=8,
                arrowprops=dict(arrowstyle="-", color="#999", lw=0.5) if len(name) > 15 else None)

# Quadrant lines at medians
med_supply = np.median(supply)
med_demand = np.median(demand)
ax.axvline(med_supply, color="#ccc", ls="--", lw=1, zorder=1)
ax.axhline(med_demand, color="#ccc", ls="--", lw=1, zorder=1)

# Quadrant labels
props = dict(fontsize=9, color="#888", fontstyle="italic")
ax.text(0.02, 0.98, "HIGH DEMAND\nLOW SUPPLY\n(Opportunity!)", transform=ax.transAxes, va="top", **props)
ax.text(0.98, 0.98, "HIGH DEMAND\nHIGH SUPPLY\n(Competitive)", transform=ax.transAxes, va="top", ha="right", **props)
ax.text(0.02, 0.02, "LOW DEMAND\nLOW SUPPLY\n(Niche)", transform=ax.transAxes, **props)
ax.text(0.98, 0.02, "LOW DEMAND\nHIGH SUPPLY\n(Saturated)", transform=ax.transAxes, ha="right", **props)

ax.set_xlabel("Supply (number of templates)")
ax.set_ylabel("Demand (total usage)")
ax.set_title("Opportunity Gap — Supply vs Demand by Category", fontsize=14, fontweight="bold")
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)
plt.tight_layout()
plt.savefig("03_opportunity_gap.png", dpi=150)
print("Saved 03_opportunity_gap.png")
