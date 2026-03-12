# 🤝 Sync HighLevel CRM to Google Sheets with GPT-4o daily reports via Gmail

> ⚡ **120 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 📘 Description:
 This workflow automates a complete CRM → Sheets → AI → Email reporting pipeline for HighLevel opportunities.
 It fetches fresh opportunity data from HighLevel, validates and normalizes every record, syncs all structured opportunities into a Google Sheet, merges them into a single dataset, and then uses GPT-4o to generate a clean, Gmail-friendly HTML report summarizing all opportunities for the day.
 Finally, it emails the formatted report directly to the sales inbox—creating a fully automated, zero-touch Daily Opportunity Insight System.
 Invalid or incomplete CRM entries are logged automatically, ensuring data hygiene and auditability.

## ⚙️ What This Workflow Does (Step-by-Step)

▶️ When Clicking ‘Execute Workflow’ (Manual Trigger)
 Starts the daily reporting pipeline manually or on schedule.

📥 Fetch Opportunities from HighLevel CRM
 Retrieves the latest opportunities (limit = 5) from HighLevel along with company, contact, source, and pipeline metadata.
 Acts as the primary CRM input.

🔍 Validate Opportunity Data Payload (IF Node)
 Checks whether each record contains a valid id.
 ✅ Valid → proceed to extraction and normalization
 ❌ Invalid → sent to Google Sheets for cleanup

⚠️ Log Invalid Opportunities to Google Sheets
 Saves corrupt or incomplete CRM payloads into an error sheet.
 Supports CRM maintenance and future corrective actions.

🧾 Extract Key Fields from HighLevel Data (Code Node)
 Pulls only essential fields from each opportunity:
 id, name, company, email, phone, source, assignedTo, pipelineId, stageId, tags, monetaryValue, and timestamps.
 Produces a simplified, uniform data structure.

🛠 Normalize Opportunity Structure (Code Node)
 Cleans and standardizes each opportunity’s schema:
 ensures consistent field naming, fills contact info when nested, resolves pipeline/stage fields, and finalizes structure for sheet update.

📊 Update Opportunity Records in Google Sheets
 Upserts (append/update) each opportunity into the ghl database tab of sample_leads_50.
 Matching key: id
 Keeps HighLevel CRM and Google Sheets fully synced.

🧩 Merge All Opportunities into a Single JSON Array
 Combines every normalized opportunity into one array named opportunities.
 This consolidated payload is passed to GPT-4o for table generation.

🧠 Configure GPT-4o Model (Azure OpenAI)
 Initializes GPT-4o as the AI engine responsible for generating the final HTML summary.

📄 Generate Daily Opportunity Summary Report (AI Agent)
 GPT-4o transforms the merged opportunity dataset into a structured HTML report:
<h2>Daily Opportunity Summary</h2>
A short descriptive paragraph
A full-width Gmail-friendly table with padded cells
Header background #f5f5f5
Columns in fixed order:
Name, Company, Email, Phone, Source, Pipeline ID, Stage ID, Value, Created At
All nulls replaced with “–”
 Output is pure HTML—no markdown.

📧 Send Daily Opportunity Summary via Gmail
 Emails the final HTML report to the internal sales inbox with subject:
“Daily Opportunity Report – Summary of New Leads”
 Optimized for Gmail + Outlook rendering.

## 🧩 Prerequisites
HighLevel OAuth connection
Azure OpenAI GPT-4o credentials
Google Sheets OAuth (Techdome account)
Gmail API connection for report delivery

## 💡 Key Benefits
 ✅ Automatic syncing of HighLevel CRM opportunities into Sheets
 ✅ AI-generated HTML dashboards without manual formatting
 ✅ Clean, readable daily insights for sales teams
 ✅ Built-in error logging for bad CRM records
 ✅ Zero manual intervention required after setup

## 👥 Perfect For
Sales & Growth Teams using HighLevel CRM
Operations teams maintaining CRM hygiene
Agencies needing daily pipeline visibility
Organizations wanting automated AI-generated opportunity summaries

## 🔗 Nodes Used

Google Sheets, Gmail, HighLevel, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
