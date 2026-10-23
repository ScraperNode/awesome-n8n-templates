# 🤝 Score property deals, alert investors, and log CRM KPIs with Google Sheets, email, and Telegram

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow qualifies below-market-value UK property leads by valuing them with Land Registry and Zoopla data, enriches owner details via Land Registry, Companies House, a skip-trace API, generates an investor pack PDF, alerts matched investors by email and Telegram, and logs weekly CRM KPIs to Google Sheets.

## How it works
1. Receives a qualified deal from an upstream workflow and reads an investor registry from Google Sheets.
2. Matches the deal to investors based on budget, preferred strategies, yield targets, and target areas.
3. Builds a personalised deal alert message and sends it to matched investors via email (SMTP) and Telegram.
4. Runs every Monday at 08:00 to read all CRM leads from Google Sheets.
5. Calculates pipeline and financial KPIs (lead volume, stages, conversion rates, discounts, yields, and equity) and appends the results to a KPI_History dashboard sheet in Google Sheets.

## Setup
1. Create a Google Sheets OAuth connection and set the spreadsheet ID (GOOGLE_SHEET_ID) for the investor registry, CRM leads (Raw_Leads), and KPI dashboard (KPI_History).
2. Add SMTP credentials for email alerts and configure the sender domain (EMAIL_DOMAIN) and any required reply-to handling.
3. Add Telegram credentials and set the target chat/channel for posting alerts.
4. If you use the valuation, skip-trace, and pack-generation sub-workflows this template calls, set their workflow IDs (WORKFLOW_ID_ALERTS, WORKFLOW_ID_SKIP_TRACE, WORKFLOW_ID_OFFER_PACK) and configure their required API keys (OS_API_KEY, HTML2PDF_API_KEY, SKIP_TRACE_API_URL, SKIP_TRACE_API_KEY, and Zoopla/Land Registry access as needed).
5. Confirm the weekly schedule cron expression (0 8 * * 1) and timezone match your reporting requirements.

## Additional info
Data Protection & Compliance Notice — Read Before Use

This workflow performs skip tracing — looking up property owner identity and contact details via Land Registry title search, Companies House, and a third-party skip-trace API — in order to enable direct outreach to property owners who have not requested contact.

This activity is subject to UK GDPR, the Data Protection Act 2018, and PECR (Privacy and Electronic Communications Regulations). Before deploying this workflow, you are responsible for ensuring your use of it complies with these obligations, including:

Lawful basis: Identify and document your lawful basis for processing owner personal data (commonly "legitimate interests" for BMV sourcing) and complete a legitimate interests assessment (LIA) if relying on that basis.
Transparency: Owners you contact are entitled to know how their data was obtained and used — your outreach should reflect this, and you should be able to provide it on request.
Direct marketing rules: If outreach constitutes direct marketing under PECR, additional consent or soft opt-in requirements may apply depending on the contact method (email, SMS, calls).
Data minimisation and retention: Only enrich and store the owner data you need for this purpose, and set a retention period rather than keeping it indefinitely.
Third-party data sources: Confirm your use of Land Registry data, Companies House data, and the third-party skip-trace API complies with each provider's own terms of use and licensing conditions — some restrict resale, bulk use, or certain downstream applications.
Individual rights: Be prepared to handle subject access, objection, or erasure requests from property owners regarding data obtained this way.

This template does not include compliance safeguards (consent tracking, suppression lists, retention automation) — these are the buyer's responsibility to add if required for their jurisdiction and use case.

Disclaimer of liability: This template is sold "as is," without warranty of any kind. The seller is not responsible for regulatory breaches, data protection violations, complaints, fines, or any other loss or damage resulting from the use, misuse, or misconfiguration of this workflow. By purchasing and deploying this workflow, you accept full responsibility for ensuring your use of skip-traced data complies with applicable law in your jurisdiction.

This is not legal advice. If you are unsure of your obligations under UK GDPR or PECR for this use case, consult a qualified data protection professional or solicitor before going live.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Telegram, Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
