# ⚒️ Detect and explain KPI anomalies with Postgres, Slack, GitHub, Gmail and Claude

> ⚡ **4 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects daily KPI values in Postgres, builds robust baselines, detects anomalies, and routes alerts to Slack, GitHub, and Gmail with an OpenRouter (Claude) investigation summary, plus a feedback webhook and a weekly precision report.

## How it works
1. Runs on demand or nightly at 01:00 to load enabled metric definitions from Postgres, execute each metric’s SQL, and store yesterday’s observation in a kpi_observations table.
2. Recomputes per-metric baselines in Postgres using a 28-day median and MAD (plus day-of-week medians) and logs baseline coverage, posting a Slack warning when metrics have too little history to score.
3. Runs daily at 07:00 to fetch yesterday’s observations joined with baseline and registry settings from Postgres and calculates robust z-scores, severity, and skip reasons to identify true anomalies.
4. Suppresses duplicate alerts by checking recent open/acknowledged incidents in Postgres and enforcing a per-run incident cap, logging suppressed alerts for auditability.
5. For each new incident, creates an incident record in Postgres and uses an OpenRouter (Claude) agent with Postgres and GitHub tools to investigate, then validates the explanation against evidence and updates the incident accordingly.
6. Routes the incident by severity: posts to Slack (critical and warning), creates a GitHub issue and sends a Gmail acknowledgement request for critical incidents, and records notification status back in Postgres.
7. Accepts incident dispositions via a header-authenticated webhook, validates the payload, updates the incident in Postgres, and responds with success or a 400 error.
8. Runs weekly (Mondays 08:00) to query alert outcomes from Postgres, compute precision and threshold-change recommendations, then sends an HTML email via Gmail and posts a summary to Slack.

## Setup
1. Provide Postgres credentials and ensure the required tables exist (kpi_metrics, kpi_observations, kpi_baselines, kpi_incidents, kpi_segment_observations, and related run/alert tables referenced by the queries).
2. Populate kpi_metrics with enabled metrics (including metric_sql, z_threshold, min_abs_change, direction, owners, and optional repo_owner/repo_name) and ensure each metric_sql returns a single numeric value.
3. Add Slack credentials and replace the ALERT_SLACK_CHANNEL placeholders in the channel selectors used for thin-baseline warnings, anomaly alerts, and the weekly report.
4. Add GitHub and Gmail credentials, and set DATA_ONCALL_EMAIL (and any per-metric owner_email values) used for acknowledgement emails and weekly report delivery.
5. Configure the Disposition Webhook header authentication and copy the production webhook URL into your alert-response tooling so it can POST incident_id, disposition (confirmed/false_positive/wont_fix), note, and actor.
6. Backfill or run nightly collection for at least 14 days (21 days for day-of-week baselines) before relying on detection, since metrics with insufficient history are not scored.

## 🔗 Nodes Used

GitHub, Postgres, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
