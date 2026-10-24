# 🔬 Turn vague work requests into scoped briefs with adaptive Forms and Gemini

> ⚡ **13 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs every morning, reads a renewals register from Google Sheets, calculates time-to-expiry and notice deadlines, uses Google Gemini to draft a short owner briefing, then sends Gmail alerts based on urgency and posts urgent items to Slack while stamping the row to prevent repeat alerts.

## How it works
1. Runs daily at 08:00 on a schedule trigger.
2. Reads the “Renewals” register from Google Sheets.
3. Calculates days until expiry, computes the notice-period deadline, assigns an urgency stage (90/30/7-day windows), and skips items already alerted at the same stage.
4. Uses Google Gemini to generate a concise renewal briefing with the decision required, deadline, next steps, and appropriate urgency.
5. Sends the briefing to the item owner via Gmail with a subject line matching the urgency window.
6. For urgent items, also posts key details to a selected Slack channel.
7. Updates the Google Sheets row with the latest alert stage so the same reminder does not repeat.

## Setup
1. Connect credentials for Google Sheets, Google Gemini (PaLM) API, Gmail, and Slack.
2. Create a Google Sheets workbook with a “Renewals” sheet and columns like Item, Type, Vendor, Expiry Date, Annual Cost, Owner (email), Notice Period Days, and Last Alert Stage.
3. Select the target spreadsheet and “Renewals” sheet in both Google Sheets steps and map the update so it writes the current alert stage back to the correct row.
4. Choose the Slack channel to notify for urgent renewals (for example, #operations).

## 🔗 Nodes Used

Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
