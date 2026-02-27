# Agent Instructions

## Integration Test

- **integ test は必ず実際にデプロイして実行すること。dry run（スナップショット更新のみ）は禁止。**
- `npx integ-runner --update-on-failed --no-clean` のように `--update-on-failed` フラグを使い、実際に AWS 環境にデプロイして検証する。
- スナップショットの差分確認だけで済ませてはいけない。
