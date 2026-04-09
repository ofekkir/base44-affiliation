"""What's growing? Stacked area (monthly template creation) + cumulative lines for top categories."""
import json
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from collections import defaultdict
from datetime import datetime

with open("templates-dense.json") as f:
    templates = json.load(f)

cat_count = defaultdict(int)
for t in templates:
    for c in t["categories"]:
        cat_count[c] += 1

valid_cats = {c for c in cat_count if cat_count[c] >= 5}

# Monthly creation counts per category
monthly = defaultdict(lambda: defaultdict(int))
for t in templates:
    dt = datetime.fromisoformat(t["created_date"].replace("Z", "+00:00"))
    month_key = dt.strftime("%Y-%m")
    for c in t["categories"]:
        if c in valid_cats:
            monthly[month_key][c] += 1

months = sorted(monthly.keys())
all_cats = sorted(valid_cats, key=lambda c: cat_count[c], reverse=True)

# Pick top 8 categories for readability
top_cats = all_cats[:8]
rest_label = "Other"

fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(14, 10))

# --- Stacked area: monthly creation ---
data = {}
for c in top_cats:
    data[c] = [monthly[m].get(c, 0) for m in months]
data[rest_label] = [sum(monthly[m].get(c, 0) for c in all_cats if c not in top_cats) for m in months]

labels = top_cats + [rest_label]
arrays = [data[l] for l in labels]
colors = plt.cm.tab10(np.linspace(0, 1, len(labels)))

ax1.stackplot(range(len(months)), *arrays, labels=labels, colors=colors, alpha=0.85)
ax1.set_xticks(range(0, len(months), max(1, len(months) // 12)))
ax1.set_xticklabels([months[i] for i in range(0, len(months), max(1, len(months) // 12))], rotation=45, fontsize=8)
ax1.set_ylabel("Templates Created")
ax1.set_title("Monthly Template Creation by Category", fontsize=13, fontweight="bold")
ax1.legend(loc="upper left", fontsize=7, ncol=3)
ax1.spines["top"].set_visible(False)
ax1.spines["right"].set_visible(False)

# --- Cumulative lines for top 8 ---
for i, c in enumerate(top_cats):
    cumulative = np.cumsum([monthly[m].get(c, 0) for m in months])
    ax2.plot(range(len(months)), cumulative, label=c, color=colors[i], linewidth=2)

ax2.set_xticks(range(0, len(months), max(1, len(months) // 12)))
ax2.set_xticklabels([months[i] for i in range(0, len(months), max(1, len(months) // 12))], rotation=45, fontsize=8)
ax2.set_ylabel("Cumulative Templates")
ax2.set_title("Cumulative Growth — Top Categories", fontsize=13, fontweight="bold")
ax2.legend(loc="upper left", fontsize=7, ncol=2)
ax2.spines["top"].set_visible(False)
ax2.spines["right"].set_visible(False)

plt.tight_layout()
plt.savefig("04_growth_trends.png", dpi=150)
print("Saved 04_growth_trends.png")
