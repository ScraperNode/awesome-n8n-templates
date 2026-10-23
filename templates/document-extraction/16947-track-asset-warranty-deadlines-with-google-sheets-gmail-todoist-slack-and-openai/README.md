# 🔬 Track asset warranty deadlines with Google Sheets, Gmail, Todoist, Slack, and OpenAI

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to read an asset register from Google Sheets, calculate warranty expiry dates, and escalate upcoming deadlines via Gmail, Slack, and Todoist, while using OpenAI to draft vendor negotiation emails for high-value assets and updating expired items back in the sheet.

## How it works
1. Runs every day at 08:30.
2. Reads all assets from a Google Sheets register and calculates each item’s warranty expiry date and days remaining from the purchase date and warranty months.
3. For already-expired assets, updates the Google Sheets register to set the status to “warranty expired.”
4. For assets expiring within 7 days, posts an urgent Slack message and creates a Todoist task due on the warranty expiry date.
5. For assets expiring within 30 days, emails the asset owner via Gmail asking them to choose whether to extend, replace, or let the warranty lapse.
6. For 30-day warnings where the asset value is at least 2000, uses OpenAI to draft a vendor warranty-extension negotiation email and saves it as a Gmail draft for review.

## Setup
1. Create a Google Sheets asset register with columns for asset, owner_email, purchase_date, warranty_months, vendor, value, and status.
2. Add credentials for Google Sheets, Gmail, Slack, Todoist, and OpenAI (Chat Model).
3. Select the correct Google Sheets document and sheet in both the read and update steps, and ensure the asset column is suitable as a unique matching key for updates.
4. Set the Slack channel (for example #it-assets) and choose the Todoist project where deadline tasks should be created.
5. Adjust the high-value threshold (default 2000) if you want negotiation drafts to trigger at a different asset value.

## 🔗 Nodes Used

Google Sheets, Slack, Todoist, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
