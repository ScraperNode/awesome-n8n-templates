# ⚒️ Send weekly GitHub digests to Telegram with Qwen via OpenRouter

> ⚡ **12 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly or on demand via Telegram commands (/report, /issues, /prs, /status) to fetch all your GitHub repositories and events, summarizes the last 7 days using an OpenRouter-hosted Qwen model, and sends a multi-part engineering digest to your Telegram chat. No dashboards, no manual reporting.

## How it works
1. Runs on a weekly schedule (Monday 9 AM) or triggers when a Telegram message containing `/report`, `/issues`, `/prs`, or `/status` is received.
2. Fetch all repositories - Pulls your complete repo list from GitHub via the User Repos API. Filters out archived repos automatically.
3. Fetch events per repo — Calls the GitHub Events API for each repository (up to 100 recent events per repo).
4. Filter and aggregate — Groups events by repo, counts activity by type (commits, issues, PRs, releases), tracks contributors, and detects stale repos.
5. Route based on activity — A Switch node handles three paths: has activity (generate report), all repos failed (send API error alert), or no activity (silent stop).
6. AI-powered report generation — Sends aggregated stats to Qwen 3 via OpenRouter. The AI generates structured, human-readable reports with highlights, per-repo details, weekly insights, and next-week priorities.
7. Command-aware output — `/report` generates a full 4-part weekly digest. `/issues` lists open issues. `/prs` shows PR status. `/status` gives a quick health check with emoji indicators.
8. Multi-message delivery — Reports are split into multiple Telegram messages to stay within the 4096-character limit and improve readability on mobile devices.
9. Fallback resilience — If the AI model fails, a code node formats raw stats without AI. If all GitHub repos fail to fetch, an error alert is sent to Telegram. The user always gets feedback.

## Setup
1.  Create a GitHub Fine-grained Personal Access Token: Settings → Developer settings → Fine-grained tokens. Permissions: Contents (Read-only). Scope it to the repositories you want to monitor. Or use a Classic PAT with the repo scope.
2. Create a Telegram bot with @BotFather, add a Telegram Bot API credential in n8n, and obtain the target chat ID.
3. Create an OpenRouter API key and configure an OpenAI-compatible credential in n8n with base URL `https://openrouter.ai/api/v1` for the Qwen model call. (or use any OpenAI-compatible endpoint).
4.  In n8n, add credentials: Header Auth (GitHub token) + Telegram Bot API + OpenAI API (OpenRouter).
5.  In "Fetch GitHub Repositories" and "Retrieve GitHub Events" nodes: assign the GitHub Header Auth credential.
6. In "Send Messages to Telegram" and "Send Error Alert" nodes: set your Telegram chat ID.
7. In "OpenAI Report Model" node: assign your OpenRouter (OpenAI-compatible) credential.
8. Activate the workflow. Send `/report` to your Telegram bot to test.

## Requirements
- n8n instance (self-hosted or cloud)
- GitHub Personal Access Token (Fine-grained with Contents Read-only, or Classic with repo scope)
- Telegram Bot token + chat ID
- OpenRouter API key (or any OpenAI-compatible endpoint)
- GitHub account with at least one repository

## Customization
- Filter repos: If you have more than 100 repositories, the GitHub User Repos API returns paginated results. Add a Code node between "Fetch GitHub Repositories" and "Retrieve GitHub Events" to handle pagination, or filter to specific repos:
- `var myRepos = ['owner/repo1', 'owner/repo2'];items = items.filter(function(item) {return myRepos.indexOf(item.json.full_name) !== -1;});`
- Change schedule: Edit the cron in "Weekly Digest Trigger". Daily at 9am = every day, Friday 5pm = every Friday, Twice a week = Monday and Thursday.
- Swap the LLM: Change the model in "OpenAI Report Model" to any OpenRouter-supported model (GPT-4o, Claude, Gemini) or point to a self-hosted model by changing the base URL in the credential.
- Change output channel: Replace "Send Messages to Telegram" with Discord, Slack, Notion, or Email nodes. The report format works across all platforms.
- Add more commands: Edit "Parse Telegram Command" to accept new commands (e.g., `/releases`, `/contributors`). Add the new command logic in the LLM prompt under a new MODE section.
- Single message mode: Remove the `|||` splitting logic in "Format Telegram Messages" and concatenate all report parts into one message.

## Additional info
Perfect for indie hackers, solo developers, open-source maintainers, and small engineering teams who want a lightweight weekly engineering report without expensive analytics tools or Jira setups.

WHY THIS APPROACH

Why not GitHub Insights?
GitHub Insights shows raw metrics on a dashboard you have to visit. This workflow creates a human-readable engineering digest delivered directly to your Telegram — you don't need to leave your chat app to know what happened.

Token-efficient by design
Repository activity is aggregated and compressed into a stats summary before being sent to the LLM. Only counts, not raw event payloads, reach the model. This reduces token usage and API cost significantly.

No vector DB, no embeddings, no extra subscription
The AI model does summarization, not retrieval. Stats are computed in code, structured into a prompt, and turned into readable text. Simple means cheap, reliable, and easy to debug.

Activity, not incidents
The health check uses traffic-light emojis to indicate development activity levels — green means actively developing, red means stale. This is an engineering velocity indicator, not an incident monitor.

Human stays in the loop
The AI reports and summarizes. It does not close issues, assign people, or make decisions. A human reviews the digest and decides what to act on.

WHAT'S NEXT

Social media auto-post — Repurpose the weekly digest into a LinkedIn or Twitter post with a Telegram approval button before publishing.
Obsidian sync — Push each report as a Markdown file to your Obsidian vault via Git. Build a searchable second brain of your project history.
Unified weekly report — Aggregate GitHub + Gmail + Google Calendar + WakaTime (coding time) + Notion tasks into a single report. All sources have n8n integrations available.
Error knowledge base — Extract bug patterns from issues, append to a JSON knowledge base. Feed into a RAG chatbot for future Q&A.
Multi-channel delivery — Send the same report to Telegram + Email + Discord + Slack simultaneously.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
