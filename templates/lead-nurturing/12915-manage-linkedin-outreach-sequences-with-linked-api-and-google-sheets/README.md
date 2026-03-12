# 💬 Manage LinkedIn outreach sequences with Linked API and Google Sheets

> ⚡ **108 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Automate your LinkedIn outreach with this n8n workflow powered by [Linked API](https://linkedapi.io). Sends connection requests, monitors acceptance, delivers your pre-written messages, and follows up automatically – all tracked in Google Sheets.

 ## How it works

  1. **Connection phase** – Sends connection requests to leads with status `NEW`, respects daily limits
  2. **Monitoring** – Checks if connections were accepted, expired, or declined
  3. **Messaging** – Sends your pre-written messages (up to 3) after connection is accepted
  4. **Follow-up** – Automatically follows up if no reply, marks leads as `NO_RESPONSE` after timeout
  5. **Tracking** – All statuses and timestamps are saved to Google Sheets

  ## Setup steps

  1. **Copy the [Google Sheet template](https://docs.google.com/spreadsheets/d/141fJskisAQ7H8AxtojQ7LZrnd14EOyB26RdDq5aczEU/copy)**

  2. **Connect credentials:**
     - Google Sheets (OAuth2)
     - Linked API ([get key here](https://app.linkedapi.io/accounts))

  3. **Configure** `DOCUMENT_LINK` in the Config node (paste your spreadsheet URL)

  4. **Add leads** with `Status` = `NEW` and fill in `Message 1`, `Message 2`, `Message 3`

  5. **Activate** the workflow

## Configuration

| Setting | Default | Description |
|---------|---------|-------------|
| DOCUMENT_LINK | – | URL to your Google Sheet |
| SHEET_NAME | Leads | Name of the sheet with leads |
| DAILY_CONNECTION_LIMIT | 25 | Max connection requests per day |
| HOURS_TO_CHECK_IF_CONNECTION_ACCEPTED | 24 | Check frequency for connection acceptance |
| HOURS_TO_CHECK_IF_REPLIED | 4 | Check frequency for message replies |
| HOURS_DELAY_AFTER_CONNECTION_ACCEPTED | 24 | Delay before first message |
| DAYS_DELAY_BETWEEN_MESSAGES | 2 | Delay between follow-ups |
| DAYS_WAIT_FOR_CONNECTION_ACCEPTANCE | 10 | Timeout for connection requests |
| DAYS_WAIT_AFTER_LAST_MESSAGE | 4 | Days to wait after last message before marking as no response |

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
