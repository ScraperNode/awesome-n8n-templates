# ⚙️ Host your own uptime monitoring with scheduled triggers

> ⚡ **28,690 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This n8n workflow demonstrates how to build a simple uptime monitoring service using scheduled triggers.

Useful for webmasters with a handful of sites who want a cost-effective solution without the need for all the bells and whistles.

## How it works
* Scheduled trigger reads a list of website urls in a Google Sheet every 5 minutes
* Each website url is checked using the HTTP node which determines if the website is either in the UP or DOWN state.
* An email and Slack message are sent for websites which are in the DOWN state.
* The Google Sheet is updated with the website's state and a log created.
* Logs can be used to determine total % of UP and DOWN time over a period.

## Requirements
* Google Sheet for storing websites to monitor and their states
* Gmail for email alerts
* Slack for channel alerts

## Customising the workflow

Don't use Google Sheets? This can easily be exchanged with Excel or Airtable.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
