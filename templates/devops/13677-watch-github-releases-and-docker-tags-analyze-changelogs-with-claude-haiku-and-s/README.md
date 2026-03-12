# ⚙️ Watch GitHub releases and Docker tags, analyze changelogs with Claude Haiku, and send update digests to Slack, Discord, Telegram, and ntfy

> ⚡ **18 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## This n8n template monitors your self-hosted apps for new releases across GitHub and container registries, uses Claude AI to analyze changelogs, and delivers color-coded update digests to Discord, Telegram, Slack, and ntfy.

Stop finding out about updates after something breaks. Claude reads every changelog and tells you exactly what changed, what might break, and how urgent the update is — with a ready-to-run Docker update command for each release.

**Good to know**

- Estimated cost is $0.01–0.03 per daily run using Claude Haiku. See [Anthropic pricing](https://www.anthropic.com/pricing) for current rates.
- PostgreSQL logging is included but optional — the core workflow runs without a database using n8n's built-in static data for version tracking.
- Test mode is ON by default. Your first run pushes a sample release through the full pipeline (AI analysis, formatting, delivery) so you can verify everything works before going live.

## How it works

- Schedule trigger runs daily at 8 AM and builds a watchlist from your manually configured repos plus optional docker-compose auto-detection
- Checks GitHub Releases API for repos and Docker Hub/GHCR tag APIs for container images. Pre-releases and RC/beta tags are automatically filtered out
- Compares each release against the last known version stored in workflow static data to detect what's genuinely new
- Claude Haiku reads each changelog and returns a structured summary with breaking change detection, CVE/security scanning, migration steps, and urgency classification (critical/recommended/optional)
- Alert rules route critical and security updates to instant alerts, while everything else batches into a single daily digest sorted by urgency
- Formatted messages are delivered to your enabled channels with color-coded embeds, Docker update commands, and links to full release notes
- Release history is optionally logged to PostgreSQL for tracking update timelines

## How to use

- Add your Anthropic API key as an n8n credential, open the Configure Watcher node to set your channel URLs, and edit the Build Repo Watchlist node to add your repos — that's the minimum to get running
- Click "Test workflow" to push a sample release through the full pipeline and verify delivery
- Set `test_mode` to `false` and toggle Active — the workflow checks daily and only alerts when new releases are found

## Requirements

- Anthropic API key ([setup guide](https://nxsi.io/guides/anthropic-api-key))
- At least one delivery channel: Discord webhook ([setup guide](https://nxsi.io/guides/discord-webhook)), Telegram bot, Slack app, or ntfy topic
- Optional: GitHub Personal Access Token for higher API rate limits ([setup guide](https://nxsi.io/guides/github-personal-access-token))
- Optional: PostgreSQL for release history logging

## Customizing this workflow

- Add or remove repos and container registries in the Build Repo Watchlist code node — pre-loaded with 10 popular self-hosted apps
- Enable docker-compose auto-detection to automatically build your watchlist from a compose file URL or pasted content
- Set per-repo alert rules including urgency overrides, instant alert flags, and channel routing
- Adjust the schedule, swap delivery channels, or add additional registries

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Telegram, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
