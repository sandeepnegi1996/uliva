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
- Implement only the phase the user asks for unless explicitly instructed otherwise.
- Do not add future-proofing or speculative architecture unless required.

## Read first, then edit

- Inspect relevant files before changing code.
- Preserve existing project structure, style, and conventions.
- Patch, don't rewrite — a small exact patch is better than a full file rewrite.

## Validate the smallest relevant proof

- Run the smallest verification command that checks actual behavior.
- Prefer targeted validation over broad checks.
- Run build or lint only when relevant.

## Refactor policy

- No cleanup, formatting-only changes, or rename-driven refactors unless required.
- No unrelated file edits, no cosmetic churn, no speculative improvements.
- Leave adjacent code untouched when not part of the current fix.

## Acceptance standard

- Match the request closely; remain easy to review, diff, and validate.
- Split multiple logical changes into separate steps.
