# ⚙️ Monitor website uptime with Google Sheets and Gmail alerts

> ⚡ **37 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Webpage Down Detector automatically monitors your website pages and alerts you if any go down. This workflow saves time, prevents silent downtime, and keeps your website reliable.

**How it works:**

- Fetches all webpage links from a Google Sheet daily

- Checks the status of each page to see if it’s still up

- Compiles a list of pages that are down or unreachable

- Sends the list to you so you can quickly fix the issues

- Ensures you don’t have to monitor dozens (or hundreds) of pages manually

**You need to configure**
- Your own Google Sheets
- Your Gmail account

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
