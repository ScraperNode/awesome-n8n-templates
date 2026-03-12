# 📊 Monitor lost backlinks with DataForSEO, Google Sheets and Gmail

> ⚡ **28 views** · 📊 [Market Research & Insights](../)

## Description

![Monitor lost backlinks with DataForSEO and get email reports.png](fileId:4561)

With this n8n automation, you no longer need to manually audit backlinks every day. The workflow connects directly to the DataForSEO Backlinks API to pull recently lost backlinks for your domain or specific URL.

On each run, it generates a clean Google Sheets report containing lost backlinks along with key metrics such as referring source URL, referring domain, spam score, domain rating (DR), anchor text, and dofollow/nofollow status.

Once updated, the workflow automatically emails you or your team a link to the report, making it easy to recover high-value lost links, detect technical issues causing link drops and monitor backlink stability over time.

## Who’s it for
This workflow is perfect for SEO teams, link-building specialists, and website owners who want a fully automated way to keep their backlink losses under control.

## What it does
The workflow mautomatically detects recently lost backlinks and generates a structured report in Google Sheets to help you proactively manage backlink losses and maintain a strong profile.

## How it works
Triggers automatically according to the set schedule.

Pulls recently lost backlinks using the DataForSEO Backlinks API.

Creates or updates a Google Sheets report with the latest data.

Sends an automated email with the report link.

## Requirements
- DataForSEO account and API credentials 
- Google Sheets connection in n8n
- Gmail connection in n8n

## Customization
You can easily customize this workflow by tracking specific URLs, changing the number of backlinks analyzed, selecting additional backlink details for your report, saving daily reports in other tools, sending alerts to Slack instead of email, or changing how often the workflow runs.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
