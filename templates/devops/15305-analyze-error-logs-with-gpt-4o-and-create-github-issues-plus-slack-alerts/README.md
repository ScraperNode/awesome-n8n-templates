# ⚙️ Analyze error logs with GPT-4o and create GitHub issues plus Slack alerts

> ⚡ **53 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Analyze error logs with AI and auto-create GitHub issues with fix suggestions

---

## Who is this for

DevOps engineers, SREs, and development teams who want to automate error monitoring and reduce mean time to resolution (MTTR). Ideal for teams using GitHub for issue tracking and Slack for incident response.

## What this workflow does

This workflow automates the entire error management lifecycle - from log ingestion to GitHub issue creation and Slack notification - using GPT-4o-powered root cause analysis. When an application error log is received, it parses the payload, checks for duplicates against existing GitHub issues, generates a structured root cause analysis with fix suggestions, creates a formatted GitHub Issue, and routes Slack notifications by severity. A 30-minute Wait node prevents notification flooding.

## How to set up

1. Add your GitHub Personal Access Token (repo scope) credential
2. Add your OpenAI API credential to the AI analysis node
3. Add your Slack OAuth2 credential (chat:write scope) to all Slack nodes
4. Configure n8n Variables: `GITHUB_OWNER` and `GITHUB_REPO`
5. Update Slack channel names (#incident / #dev-alerts) to match your workspace
6. Activate the workflow and copy the webhook URL for your application logger

## Requirements

- GitHub repository with Personal Access Token (repo scope)
- OpenAI API account with GPT-4o access
- Slack workspace with OAuth2 app installed
- Two Slack channels: one for critical incidents, one for general dev alerts

## How to customize

Adjust the duplicate detection score threshold (default 60) in the Code node. Modify the GPT-4o prompt to focus on specific error categories. The Wait node duration (30 minutes) can be tuned to match your alerting policy.

---

## Key features

- Scoring-based duplicate detection (no extra API calls required)
- GPT-4o structured JSON output with graceful fallback parser
- Severity-based Slack routing (`#incident` vs `#dev-alerts`)
- Dynamic GitHub labels: `bug`, `auto-generated`, environment, and `critical`
- n8n Variables used for GitHub owner and repo - no hardcoded values

---

## Node List

| # | Node Name | Type | Purpose |
|---|-----------|------|---------|
| 1 | Webhook for Error Logs | Webhook | Accepts error log payload via HTTP POST |
| 2 | Parse and Enrich Log | Code | Normalizes level, extracts error type, builds duplicate search keyword |
| 3 | Search GitHub Issues | GitHub | Fetches open issues labeled `bug,auto-generated` from the target repo |
| 4 | Score GitHub Issue Duplicates | Code | Scores each issue for similarity; flags duplicates at threshold ≥ 60 |
| 5 | Check for Duplicates | If | Routes to skip path (true) or analysis path (false) |
| 6 | Notify Duplicate to Slack | Slack | Posts link to existing issue when duplicate detected |
| 7 | Respond with Duplicate Status | Respond to Webhook | Returns 200 OK JSON acknowledgment for duplicate path |
| 8 | OpenAI Error Analysis | OpenAI | GPT-4o analyzes root cause and returns structured JSON fix suggestions |
| 9 | Build GitHub Issue Body | Code | Parses AI JSON and builds Markdown issue body with tables and code blocks |
| 10 | Create GitHub Issue | GitHub | Creates GitHub issue with title, body, and dynamic labels |
| 11 | If Critical Error | If | Checks isCritical flag to route Slack notification channel |
| 12 | Post Critical Alert to Slack | Slack | Posts @here alert to #incident with full error details |
| 13 | Post Error Summary to Slack | Slack | Posts summary to #dev-alerts with GitHub issue link |
| 14 | Wait 30 Minutes | Wait | Enforces 30-minute cooldown to prevent notification flooding |

**Total: 14 nodes (+ 6 Sticky Notes)**

---

## Sticky Note Compliance

| # | Sticky Note Title | Color | Role |
|---|-------------------|-------|------|
| 1 | Main Sticky Note (Overview) | Yellow | Workflow overview, How it works, Setup steps, Customization |
| 2 | Receive and parse log | White | Covers webhook reception and log parsing |
| 3 | Check for duplicate GitHub issues | White | Covers GitHub search and duplicate scoring |
| 4 | Handle duplicates and notify | White | Covers duplicate branch (notification + webhook response) |
| 5 | Analyze error and suggest fixes | White | Covers AI analysis and issue creation |
| 6 | Send alerts and summarize | White | Covers severity check, Slack notifications, and wait |

All sticky notes use H2 headings (`## `) and follow n8n public guidelines.

---

## Webhook payload schema

```json
{
  "service": "payment-api",
  "level": "CRITICAL",
  "message": "NullPointerException at PaymentProcessor.java:142",
  "stack_trace": "java.lang.NullPointerException...",
  "environment": "production",
  "timestamp": "2025-01-15T09:23:45Z",
  "trace_id": "abc-123-xyz",
  "endpoint": "/api/v2/payments",
  "http_method": "POST",
  "status_code": 500,
  "user_id": "user_98765"
}
```

**Required fields:** `service`, `level`, `message`
**Optional fields:** All others - missing values are handled gracefully with fallbacks.

---

## How duplicate detection works

| Match condition | Points |
|-----------------|--------|
| Service name found in issue title | +40 |
| Error type found in issue title | +40 |
| Keyword overlap (words &gt; 4 chars) | +5 per word (max +20) |

**Threshold:** Score ≥ 60 → duplicate detected → skip issue creation, notify Slack.

---

## Tags

`ai` `gpt-4` `openai` `github` `slack` `error-monitoring` `devops` `automation`

## 🔗 Nodes Used

GitHub, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
