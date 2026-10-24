# ⚒️ Monitor KPI anomalies with Postgres, Slack, Gmail, GitHub and Claude

> ⚡ **15 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects daily KPIs in Postgres, builds robust baselines, detects anomalies each morning, and then investigates them with an OpenRouter (Claude) agent using Postgres and GitHub tools before routing alerts to Slack, GitHub Issues, and Gmail, plus a weekly precision report.

## How it works
1. Runs nightly at 01:00 (or manually) to read enabled metric definitions from Postgres, execute each metric’s SQL, and store yesterday’s observation.
2. Recomputes per-metric baselines in Postgres using a 28-day median and MAD (plus day-of-week medians), records baseline coverage, and posts a Slack warning if some metrics lack enough history to be scored.
3. Runs daily at 07:00 to pull yesterday’s KPI values joined with baseline stats and metric metadata from Postgres.
4. Scores each KPI move into a robust z-score, applies direction and minimum-change rules, filters to anomalies, and suppresses duplicates based on recent open incidents and a per-run incident cap.
5. For each admitted anomaly, creates an incident record in Postgres, has an OpenRouter (Claude) agent query Postgres and GitHub for supporting evidence, and discards the explanation if it fails an evidence/consistency check.
6. Updates the incident with the investigation outcome, then routes notifications by severity to Slack (and for critical alerts also files a GitHub Issue and emails the metric owner for acknowledgement).
7. Accepts alert dispositions via a header-authenticated webhook and writes the result back to Postgres, and every Monday sends a Gmail + Slack report summarizing alert precision and recommending z-threshold adjustments.

## Setup
1. Set up the required Postgres database schema and tables (for example: kpi_metrics, kpi_observations, kpi_baselines, kpi_incidents, and related reporting tables) and populate kpi_metrics with enabled metrics and their metric_sql.
2. Add Postgres credentials for all database steps, Slack access token credentials for alerting, GitHub access token credentials for listing pull requests and creating issues, Gmail credentials for sending emails and approvals, and an OpenRouter credential for the Claude model.
3. Replace placeholders like ALERT_SLACK_CHANNEL and DATA_ONCALL_EMAIL in the workflow’s settings nodes with your real Slack channel(s) and on-call/owner email addresses.
4. If you use the disposition endpoint, copy the webhook URL for the Disposition Webhook, configure its header-auth authentication in your feedback source, and post only the supported dispositions (confirmed, false_positive, wont_fix).
5. Run the nightly collection for at least 14 days (or backfill kpi_observations) so baselines have enough history before expecting anomaly scoring.

## 🔗 Nodes Used

GitHub, Postgres, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
