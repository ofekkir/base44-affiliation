"""Which categories have more 'winners'? Log histogram + per-category box plots."""
import json
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from collections import defaultdict

with open("templates-dense.json") as f:
    templates = json.load(f)

usages = [t["usage"] for t in templates if t["usage"] > 0]
cat_usages = defaultdict(list)
cat_count = defaultdict(int)
for t in templates:
    for c in t["categories"]:
        cat_count[c] += 1
        if t["usage"] > 0:
            cat_usages[c].append(t["usage"])

valid_cats = sorted([c for c in cat_count if cat_count[c] >= 5],
                    key=lambda c: np.median(cat_usages[c]) if cat_usages[c] else 0, reverse=True)

fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(14, 10))

# --- Log histogram of all usage ---
log_usages = np.log10(np.array(usages))
ax1.hist(log_usages, bins=50, color="#4C72B0", edgecolor="white", alpha=0.85)
median_u = np.median(usages)
mean_u = np.mean(usages)
ax1.axvline(np.log10(median_u), color="#E74C3C", ls="--", lw=2, label=f"Median: {median_u:.0f}")
ax1.axvline(np.log10(mean_u), color="#F39C12", ls="--", lw=2, label=f"Mean: {mean_u:.0f}")
ax1.set_xlabel("Usage (log10 scale)")
ax1.set_ylabel("Number of Templates")
ax1.set_title("Usage Distribution (log scale) — Extreme Long Tail", fontsize=13, fontweight="bold")
ax1.legend()
ax1.spines["top"].set_visible(False)
ax1.spines["right"].set_visible(False)

# --- Per-category box plots (log scale) ---
data = [np.log10(np.array(cat_usages[c])) if cat_usages[c] else [] for c in valid_cats]
data = [d for d in data if len(d) > 0]
labels = [c for c in valid_cats if cat_usages[c]]

bp = ax2.boxplot(data, vert=False, tick_labels=labels, patch_artist=True, widths=0.6,
                 boxprops=dict(facecolor="#AED6F1", edgecolor="#2C3E50"),
                 medianprops=dict(color="#E74C3C", linewidth=2))
ax2.set_xlabel("Usage (log10 scale)")
ax2.set_title("Usage Distribution by Category (log scale)", fontsize=13, fontweight="bold")
ax2.spines["top"].set_visible(False)
ax2.spines["right"].set_visible(False)

plt.tight_layout()
plt.savefig("06_usage_distribution.png", dpi=150)
print("Saved 06_usage_distribution.png")
