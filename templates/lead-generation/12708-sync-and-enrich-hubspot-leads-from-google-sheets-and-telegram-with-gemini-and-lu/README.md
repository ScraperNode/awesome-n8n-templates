# 🎣 Sync and enrich HubSpot leads from Google Sheets and Telegram with Gemini and Lusha

> ⚡ **283 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automates lead ingestion from Google Sheets and Telegram, leveraging Gemini AI and Lusha for intelligent matching and deep data enrichment. By normalizing incoming data into a standard structure, it uses custom fuzzy logic to identify existing HubSpot records—preventing duplicates and ensuring your CRM stays clean with validated contact and company details.

**Key Features:**

**Agnostic Intake:** Seamlessly processes leads from structured Google Sheets or raw Telegram messages parsed by Gemini AI.

**Intelligent Matching:** Custom JS engine performs two-tier matching (hard & fuzzy) to save Lusha credits and keep CRM data integrity.

**Deep Enrichment:** Automatically triggers Lusha API to find missing emails and update firmographic data like revenue and industry.

**Automated Sync:** Closes the loop by notifying the team on Telegram and updating the spreadsheet status once a lead is processed.

**Setup Instructions:**

1. Connect your HubSpot, Lusha, Gemini, Google Sheets, and Telegram credentials.

2. Input your Spreadsheet ID in the 'Trigger' and 'Acknowledge' nodes.

3. Adjust the similarity threshold in the 'Switch Logic' node (default 80) based on your data needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, HubSpot, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
