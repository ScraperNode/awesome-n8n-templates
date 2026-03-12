# 🔬 Sync Zendesk how-to tickets to Google Sheets knowledge base

> ⚡ **176 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description:
Keep your customer knowledge base up to date with this n8n automation template. The workflow connects Zendesk with Google Sheets, automatically fetching tickets tagged as “howto,” enriching them with requester details, and saving them into a structured spreadsheet.

 This ensures your internal or public knowledge base reflects the latest customer how-to queries—without manual copy-pasting. Perfect for customer support teams, SaaS companies, and service providers who want to streamline documentation workflows.

## What This Template Does (Step-by-Step)
 ⚡ Manual Trigger or Scheduling
-  Run the workflow manually for testing/troubleshooting, or configure a schedule trigger for daily/weekly updates.
📥 Fetch All Zendesk Tickets
-  Connects to your Zendesk account and retrieves all available tickets.
🔍 Filter for "howto" Tickets Only
-  Processes only tickets that contain the “howto” tag, ensuring relevance.
👤 Enrich User Data
-  Fetches requester details (name, email, profile info) to provide context.
📊 Update Google Sheets Knowledge Base
-  Saves ticket data—including Ticket No., Description, Status, Tag, Owner Name, and Email.
 ✔️ Smart update prevents duplicates by matching on description.
🔁 Continuous Sync
-  Each new or updated “howto” ticket is synced automatically into your knowledge base sheet.

## Key Features
 🔍 Tag-based filtering for precise categorization
 📊 Smart append-or-update logic in Google Sheets
 ⚡ Zendesk + Google Sheets integration with OAuth2
 ♻️ Keeps knowledge base fresh without manual effort
 🔐 Secure API credential handling

## Use Cases
 📖 Maintain a live “how-to” guide from real customer queries
 🎓 Build self-service documentation for support teams
 📩 Monitor and track recurring help topics
 💼 Equip knowledge managers with a ready-to-export dataset

## Required Integrations
- Zendesk API (for ticket fetch + user info)
- Google Sheets (for storing/updating records)

## Why Use This Template?
 ✅ Automates repetitive data entry
 ✅ Ensures knowledge base accuracy & freshness
 ✅ Reduces support team workload
 ✅ Easy to extend with more tags, filters, or sheet logic

## 🔗 Nodes Used

Send Email, Google Sheets, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
