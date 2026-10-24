# 🔧 Monitor engineering health across ClickUp, GitHub and APM with WhatsApp

> ⚡ **6 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every 30 minutes to pull delivery, code, CI/CD, security, and production monitoring signals from ClickUp, GitHub, a security scanner API, and an APM/monitoring API, calculates a 0–100 Engineering Health Score, and sends WhatsApp alerts with an acknowledgement and recheck loop.

## How it works
1. Runs every 30 minutes (or on manual test) to start a health check.
2. Fetches open tasks from ClickUp, open pull requests and GitHub Actions runs from GitHub, plus security findings and production metrics from your security scanner and APM/monitoring HTTP endpoints.
3. Combines these signals into one dataset and calculates per-pillar scores (Delivery, Code, CI/CD, Security, Production) and an overall Engineering Health Score with a summary message.
4. Correlates cross-system risk patterns (for example, overdue work tied to failing CI or critical findings alongside elevated production errors) and counts the correlated issues.
5. Routes by overall status to either send a WhatsApp critical alert, send a WhatsApp degraded notice, or just log the run when healthy.
6. For critical alerts, waits for an acknowledgement via a resume webhook, reminds until acknowledged, waits a recovery grace period, re-fetches monitoring signals, recomputes the score, and either sends an escalation message if still critical or confirms recovery on WhatsApp.

## Setup
1. Add credentials for ClickUp API, GitHub API, HTTP Header Auth for your security scanner API, HTTP Header Auth for your APM/monitoring API, and WhatsApp Business Cloud for the WhatsApp nodes.
2. Update the configuration values (ClickUp team/list IDs, GitHub repo owner/name, security and monitoring API URLs, WhatsApp phone number ID and recipient, and the critical/degraded thresholds).
3. Copy the resume URL from the incident acknowledgement wait step and configure your on-call/incident tool to call it with an `acknowledged=true` payload when the alert is acknowledged.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
