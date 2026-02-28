# Agent Instructions

## Pull Requests

- **All PR titles, descriptions, comments, and commit messages must be written in English.**

## Integration Test

- **Integration tests must always be deployed and executed against a real AWS environment. Dry runs (snapshot-only updates) are NOT allowed.**
- Use `npx integ-runner --update-on-failed --no-clean` with the `--update-on-failed` flag to deploy and verify in an actual AWS environment.
- Never settle for just verifying snapshot diffs.
