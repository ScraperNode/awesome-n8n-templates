# 👥 Onboard employees from Google Forms with Slack, Jira, and GitHub access

> ⚡ **874 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
1. New Google Form response triggers the workflow
2. Checks if employee was already onboarded (prevents duplicates)
3. Adds user to department-specific Slack channel
4. If in Software department, grants GitHub repo access
5. Invites user to Jira and creates an onboarding task
6. Updates Google Sheet status to "Completed"

## Set up steps
Estimated setup time: 10-15 minutes

1. Connect Google Sheets (2 min) - Update sheet ID in trigger and update nodes
2. Configure Slack (3 min) - Add channel IDs and admin user ID to Code node config
3. Set up Jira (3 min) - Add project keys and component IDs to Code node config
4. Configure GitHub (2 min) - Add org name and repo names to Code node config

Detailed setup instructions are included in the sticky notes within the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Jira Software, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
