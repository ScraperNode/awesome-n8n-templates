# ⚙️ Monitor engineering health with ClickUp, GitHub, security and APM APIs, and WhatsApp

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 30 minutes to pull delivery, code, CI/CD, security, and production monitoring signals from ClickUp, GitHub, a security scanner API, and an APM endpoint, computes a 0–100 Engineering Health Score, and sends WhatsApp alerts with an acknowledgement-and-recheck loop for critical states.

## How it works
1. Runs on a 30-minute schedule (or manually for testing) and loads configuration values such as ClickUp list IDs, GitHub repo details, API endpoints, WhatsApp sender/recipient, and health thresholds.
2. Fetches open tasks from ClickUp, open pull requests and recent GitHub Actions workflow runs from GitHub, plus security findings and monitoring metrics from your security scanner and APM APIs.
3. Combines the retrieved signals and calculates per-pillar scores (Delivery, Code, CI/CD, Security, Production) and an overall 0–100 Engineering Health Score with a formatted WhatsApp-ready status message.
4. Correlates cross-system risks (for example, overdue work that also has failing CI on a related branch, or critical findings alongside elevated production errors) and includes them in the run output.
5. Routes by overall status: sends a critical WhatsApp alert and waits for an acknowledgement, sends a degraded WhatsApp notice, or logs the run without notifying when healthy.
6. For critical incidents, waits for acknowledgement, enforces a recovery grace period, re-fetches monitoring signals, recomputes health, and then either escalates via WhatsApp if still critical or sends a recovery confirmation and closes the incident.

## Setup
1. Add credentials for ClickUp API, GitHub API, and HTTP Header Auth for both your security scanner API and your monitoring/APM API.
2. Add WhatsApp Business Cloud credentials and ensure the WhatsApp phone number ID and recipient phone number are available for the WhatsApp send actions.
3. Update the configuration values for ClickUp team/list IDs, GitHub repo owner/name, security and monitoring API URLs, WhatsApp identifiers, and the critical/degraded score thresholds.
4. Copy the resume webhook URL from the incident acknowledgement wait step and configure your on-call or acknowledgement source to call it with an `acknowledged=true` payload.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
