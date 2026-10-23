# 📱 Optimize Klaviyo campaign send times and email reports with Gmail

> ⚡ **99 views** · 📱 [Social Media & Email Marketing](../)

## Description

How it works

Every Monday at 8 AM, the workflow pulls all sent email campaigns from Klaviyo for the past 90 days
It fetches open rate and click rate for each campaign, then groups results by audience segment and send hour
Time slots with at least 3 campaigns are ranked by average open rate
A formatted HTML report is emailed showing your best-performing send times, broken down per audience — with medal icons for the top 3 slots

Set up steps

Add your Klaviyo API key to the Header Auth credential — takes about 2 minutes
Connect your Gmail account to the two Gmail nodes (report delivery + error alerts)
In both Gmail nodes, update the Send To field to your preferred email address
(Optional) Open the Config node to adjust the lookback window (default: 90 days) or the minimum campaigns-per-slot threshold (default: 3)
Activate the workflow — it will run automatically every Monday, or trigger it manually anytime from the canvas

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
