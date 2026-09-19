<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI Working Rules for This Repository

## Keep changes precise and minimal

- Work on the smallest possible scope that satisfies the current request.
- Do not bundle unrelated edits, cleanup, refactors, or extra features into the same change.
- Prefer a single targeted change over a broad rewrite.
- If a task can be completed in 1-2 files, do not expand into many files without a clear need.

## One task at a time

- Address only the exact request in front of you.
- Do not start multiple phases, features, or refactors in a single pass.
- If the user asks for a phase, implement only that phase unless explicitly instructed otherwise.
- Do not add future-proofing or speculative architecture unless it is required by the task.

## Read first, then edit

- Inspect the relevant files before changing code.
- Limit changes to the files required to solve the current problem.
- Preserve the existing project structure, style, and conventions.
- Avoid rewriting whole files when a small, exact patch is enough.

## Validate the smallest relevant proof

- After changes, run the smallest verification command that checks the actual behavior.
- Prefer targeted validation over broad, noisy checks.
- If a build or lint check is relevant, run it; otherwise do not add unnecessary validation steps.

## Refactor policy

- Do not perform cleanup, formatting-only changes, or rename-driven refactors unless required.
- No unrelated file edits, no cosmetic churn, no speculative improvements.
- Leave adjacent code untouched when it is not part of the current fix.

## Acceptance standard

- The final result should match the request closely and remain easy to review.
- Changes should be easy to diff, easy to explain, and easy to validate.
- If more than one logical change is needed, split them into separate steps instead of shipping them together.
