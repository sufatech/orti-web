---
name: design-review
description: Audit, critique and polish web UI (the studio panel, hub pages, landing pages) against written design rules before anything ships. Use after every UI change and when a screen looks generic or "AI-made".
---

# Design review (rules from Impeccable)

The rule files in `reference/` come from Paul Bakaus's Impeccable (Apache-2.0, see LICENSE; copied from github.com/pbakaus/impeccable at 6743a34, 2026-10-27). Only the written rules were taken. **The Impeccable launcher and its downloaded binary are deliberately not installed**: wherever a reference file says to run `scripts/impeccable <verb>`, skip that step and apply the written rules by reading the code and looking at screenshots yourself.

## How to review a screen
1. Take screenshots at 1440 and 390 px (and dark mode) of the screen you changed.
2. Read `reference/craft-floor.md` and `reference/audit.md`, then the files that fit the problem: `critique.md` (overall judgement), `polish.md` (final pass), `typeset.md` (type), `colorize.md` (colour), `layout.md`/`shape.md` (structure), `harden.md` (states, errors, empty, loading), `adapt.md` (responsive), `quieter.md` / `bolder.md` (tone), `mode-operate.md` (app/admin UIs like the panel).
3. Write findings as: what is wrong, where (file, component), which rule, the fix. Rank by how much they hurt the person using the screen.
4. Hand the findings to whoever writes the code (Gemini or a subagent) and review the result again with the same rules.

## House context
- The studio panel is an operator tool (mode: operate): calm, dense enough to work, no decoration that does not carry information.
- Brand colour comes from the project; neutrals and type scale from `panel/src/design/tokens.css`.
- Motion: follow the `emil-design-eng`, `review-animations` and `improve-animations` skills (Emil Kowalski, MIT, copied at 2d22863).
