# 🔬 Extract web page data from Gmail links and save to Google Sheets

> ⚡ **186 views** · 🔬 [Document Extraction & Analysis](../)

## Description

How it works

This workflow automatically extracts specific data from received emails and saves it into a Google Sheets document for easy tracking and analysis.

It connects to a Gmail account, searches for emails received within a defined date range from a specific sender, opens links inside those emails, extracts data from the linked pages (such as case ID, patient name, birth date, complaint, and location), processes and cleans the information using custom JavaScript logic, and finally saves the structured results into a Google Sheet.

Setup steps

Connect Gmail using OAuth2 credentials.

Adjust the date filters and sender email in the “Search Emails” node.

Customize the CSS selectors in the HTML extraction nodes to match the desired elements from your email or linked page.

Open the Code node and modify the logic if you need to calculate or transform additional fields.

Link your Google Sheets account and specify the spreadsheet and sheet name where the results will be appended.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
