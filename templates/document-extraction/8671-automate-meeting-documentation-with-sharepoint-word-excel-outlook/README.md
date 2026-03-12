# 🔬 Automate meeting documentation with SharePoint, Word, Excel & Outlook

> ⚡ **2,948 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What this template does
Receives meeting data via a webform, cleans/structures it, fills a Word **docx** template, uploads the file to **SharePoint**, appends a row to **Excel 365**, and sends an **Outlook** email with the document attached.

---

## Good to know
- Uses a community node: [**DocxTemplater**](https://www.npmjs.com/package/n8n-nodes-docxtemplater) to render the DOCX from a template. Install it from the Community Nodes catalog. 
- The template context is the workflow item JSON. In your `docx` file, use placeholders.
- Includes a minimal HTML form snippet (outside n8n) you can host anywhere. Replace the placeholder **WEBHOOK_URL** with your Webhook URL before testing.
- Microsoft nodes require Azure app credentials with correct permissions (SharePoint, Excel/Graph, Outlook).

---

## How it works
1. **Webhook** — Receives meeting form JSON (POST).
2. **Code (Parse Meeting Data)** — Parses/normalizes fields, builds semicolon‑separated strings for attendees/absentees, and flattens discussion points / action items.
3. **SharePoint (Download)** — Fetches the DOCX template (e.g., `meeting_minutes_template.docx`).
4. **Merge** — Combines template binary + JSON context by position.
5. **DocxTemplater** — Renders `meeting_{{now:yyyy-MM-dd}}.docx` using the JSON context.
6. **SharePoint (Upload)** — Saves the generated DOCX to a target folder (e.g., `/Meetings`).
7. **Microsoft Excel 365 (Append)** — Appends a row to your sheet (Date, Time, Attendees, etc.).
8. **Microsoft Outlook (Send message)** — Emails the generated DOCX as an attachment.

---

## Requirements
- Community node **DocxTemplater** installed
- Microsoft 365 access with credentials for:
  - **SharePoint** (download template + upload output)
  - **Excel 365** (append to table/worksheet)
  - **Outlook** (send email)
- A Word template with placeholders matching the JSON keys

---
- ## Need Help
🔗 [LinkedIn – Wessel Bulte](https://www.linkedin.com/in/wessel-bulte/)

## 🔗 Nodes Used

Webhook, Microsoft Excel 365, Microsoft Outlook, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
