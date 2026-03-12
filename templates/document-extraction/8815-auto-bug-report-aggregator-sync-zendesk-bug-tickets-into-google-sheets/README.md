# 🔬 Auto bug report aggregator: Sync Zendesk bug tickets into Google Sheets

> ⚡ **78 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description:
Stay on top of product issues with this n8n automation template that centralizes bug reports from Zendesk into a Google Sheets dashboard. The workflow filters only tickets tagged as “bug,” enriches them with reporter details, and updates a single source of truth for developers, QA teams, and support staff.
 Perfect for product managers, SaaS companies, and agile teams that need full visibility into bug trends and customer impact without wasting time on manual data entry.

## What This Template Does (Step-by-Step)
 ⚡ Manual Trigger or Scheduling
-  Run on-demand after releases or bug triage meetings, or set up a schedule to auto-run daily/weekly.
📥 Fetch All Zendesk Tickets
-  Retrieves tickets from your Zendesk account with full metadata.
🔍 Filter Bug Reports Only
-  Processes only tickets tagged as “bug” to ensure relevance.
👤 Add Reporter Details
-  Enriches bug reports with requester’s name, email, and profile data for impact tracking.
📊 Update Google Sheets Bug Tracker
-  Stores bug details including Ticket No., Description, Status, Reporter Info, and Tags.
 ✔️ Smart update avoids duplicates by using description as a unique key.
🔁 Continuous Bug Aggregation
-  Ensures all relevant bug reports are tracked and kept up-to-date in one central place.

## Key Features
 🔍 Tag-based bug filtering
 📊 Centralized bug dashboard in Google Sheets
 ⚡ Zendesk + Google Sheets integration with OAuth2
 ♻️ Real-time sync with deduplication logic
 🔐 Secure API credential handling

## Use Cases
 🐞 Track and prioritize product bugs from customer reports
 📊 Give QA and dev teams a shared bug dashboard
 📩 Identify high-impact bugs based on affected customers
 📈 Monitor bug frequency and trends for release planning

## Required Integrations
- Zendesk API (for ticket fetch + user info)
- Google Sheets (for storing/updating bug tracker)

## Why Use This Template?
 ✅ Centralizes bug visibility for all teams
 ✅ Saves hours of manual spreadsheet updates
 ✅ Improves prioritization with customer context
 ✅ Scales easily with more tags or categories
 ✅ Keeps bug tracking transparent across stakeholders

## 🔗 Nodes Used

Google Sheets, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
