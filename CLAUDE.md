# CLAUDE.md

## Rules of Engagement

- **One feature at a time**: No parallel WIP without explicit agreement.
- **Iterative**: Working thin slice > complete-but-broken.
- **No over-engineering**: Skip abstractions until needed twice.
- **No secrets in repo**: `.env` only, never commit API keys.
- **No deprecated direct deps**: Never add a deprecated package as a direct dependency. Transitive deprecated deps are acceptable.
- When you create or discover new files, update the Folder Structure section.

## Folder Structure

```
/
├── CLAUDE.md
├── /plans     ← implementation plans, committed alongside code
└── /context   ← spun out when 3+ related session learnings accumulate
```

## Note-Taking

After each task, log any correction, preference, or pattern learned.
Add a dated one-liner here under "Session learnings"; if 3+ related notes
accumulate, move them to a new `/context/YYYY-MM-DD-topic.md` file and link it.
Keep this file under 100 lines.

**Format**: `"[observation] (learned M/D)"`

### Session learnings
