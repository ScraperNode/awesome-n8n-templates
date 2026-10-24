# 🔬 Audit procurement compliance with Google Sheets, Google Gemini, and Gmail

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This scheduled workflow audits procurement transactions from Google Sheets against regulatory rules, generates a batch compliance report with Google Gemini, logs transaction-level alerts and reports back to Google Sheets, and emails the AI-generated audit summary via Gmail.

## How it works
1. Runs on a schedule to start a new procurement compliance audit cycle.
2. Reads procurement transactions and regulatory rules from separate tabs in Google Sheets and enriches each transaction with audit metadata and policy thresholds.
3. Evaluates each transaction against all rules to detect violations (GDPR, SOX/financial, labor law, anti-bribery, contract management, and due diligence), calculates risk scoring, and produces both transaction-level results and a batch summary.
4. Sends the batch summary to Google Gemini to generate a structured narrative audit report.
5. Routes transaction-level results so non-compliant items are logged to a Compliance_Alerts tab while all items are appended to an Audit_Reports tab in Google Sheets.
6. Stores the AI batch report in an AI_Batch_Reports tab and sends the formatted batch audit report to the configured recipient using Gmail.

## Setup
1. Connect Google Sheets credentials for reading procurement/rules tabs and writing to the Compliance_Alerts, Audit_Reports, and AI_Batch_Reports tabs.
2. Add Google Gemini (PaLM) API credentials for the Gemini chat model used to generate the batch audit narrative.
3. Add Gmail credentials and set the alert email recipient value used as the email “send to” address.
4. Update the Google Sheets document ID and tab names if you are not using the provided spreadsheet structure.
5. Review and customize policy settings (high-risk countries, due diligence threshold, and SLA day values) in the audit metadata configuration before activating the workflow.

## Additional info
## How To Customize Nodes

- **Edit Fields - Enrich Audit Metadata** — change `alert_email_recipient`, `high_risk_countries`, `due_diligence_threshold_usd`, and the three SLA day fields here to update the workflow's behavior without touching any code.
- **Fetch Procurement Data** / **Fetch Regulatory Rules** — swap the `documentId` and `sheetName` values to point at a different spreadsheet or tab, or add filters under "options" if you only want to audit a subset of transactions.
- **Code - Compliance Engine** — this node contains the actual rule logic. You can add new compliance checks (for example, a new regulation category) by adding another `if` block that follows the same pattern as the existing GDPR, SOX, Labor Law, Anti-Bribery, Contract Management, and Due Diligence checks.
- **IF - Non-Compliance Detected** — adjust the condition if you want a different field, or a combination of fields, to decide whether an alert is logged.
- **Generate AI Compliance Audit Report** — edit the prompt text to change the report structure, tone, or the sections the AI is asked to produce.
- **Google Gemini Chat Model** — swap the `modelName` parameter if you'd rather use a different Gemini model, or replace this node with another LangChain chat model node if you prefer a different AI provider.
- **Email Compliance Audit Report** — edit the HTML in the `message` field to restyle the email, or add more recipients.
- **Google Sheets - Log Compliance Alert**, **Google Sheets - Store Audit Report**, **Store AI Batch Report** — add or remove mapped columns if your sheet structure is different from the template.


## Add-ons

- Add a **Slack** or **Microsoft Teams** node after **IF - Non-Compliance Detected** to post real-time alerts to a compliance channel for Critical or High risk findings.
- Add a **PDF generation** step (such as an HTML-to-PDF node) right after **Generate AI Compliance Audit Report** so the audit report can be attached to the email as a file, rather than only shown inline.
- Connect a **Looker Studio** or **Google Data Studio** dashboard directly to the `Audit_Reports` and `Compliance_Alerts` tabs for a live compliance dashboard.
- Add a second **IF** node after **Code - Compliance Engine** to automatically create a task in a project management tool (such as Asana or Jira) for every transaction flagged with `escalation_required: Yes`.
- Add a **translation** step before the email is sent if your compliance team operates across multiple regions and languages.


## Use Case Examples

1. **Quarterly procurement audits** — Run the workflow at the start of every quarter to produce a compliance snapshot for the prior quarter's procurement activity, ready for an internal audit committee meeting.
2. **GDPR vendor due diligence** — Automatically flag any supplier marked as processing personal data who hasn't signed a Data Processing Agreement, before a data protection authority asks the same question.
3. **SOX financial controls** — Catch large contracts that exceed your board-approval threshold but were never escalated, before they become a finding in your annual financial audit.
4. **Modern slavery / labor law monitoring** — Identify outsourced or contracted labor suppliers who are missing a current labor compliance certificate, supporting your modern slavery statement.
5. **Contract renewal management** — Use the Contract Management check to get advance warning of contracts expiring within 30 days, reducing the risk of unplanned service disruption.

These are just five starting points — the same engine can be adapted to almost any recurring procurement or third-party risk review your organization runs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Workflow runs but no rows appear in `Audit_Reports` | The Google Sheets credential on **Google Sheets - Store Audit Report** isn't authorized, or `documentId` / `sheetName` point at the wrong sheet | Re-authenticate the Google Sheets OAuth2 credential and confirm the `documentId` and `sheetName` match your spreadsheet |
| No email is received | `alert_email_recipient` in **Edit Fields - Enrich Audit Metadata** is blank or incorrect, or the Gmail credential needs re-authorization | Check the value in **Edit Fields - Enrich Audit Metadata**, and reconnect the Gmail OAuth2 credential on **Email Compliance Audit Report** |
| AI audit report is empty or missing | The Google Gemini API credential is missing, expired, or rate-limited | Reconnect the credential on **Google Gemini Chat Model** and check your Gemini API usage limits |
| Every transaction shows as "Non-Compliant" unexpectedly | Column headers in `Procurement_Transactions` or `Regulatory_Rules` don't match the names expected by **Code - Compliance Engine** | Compare your sheet headers against the Requirements section above and correct any mismatched column names |
| Workflow runs but produces duplicate rows in the sheets | The schedule on **Initiate Scheduled Compliance Audit** is set to run more often than intended, or the workflow was triggered manually while also active on a schedule | Review the schedule interval, and avoid manual test runs while the workflow is active in production |
| High-risk countries or thresholds aren't being applied | Values in `high_risk_countries`, `due_diligence_threshold_usd`, or the `sla_days_*` fields in **Edit Fields - Enrich Audit Metadata** are formatted incorrectly | Make sure `high_risk_countries` is a comma-separated list with no extra spaces issues, and numeric fields contain plain numbers |
| **Merge Procurement & Rules** never outputs anything | One of **Fetch Procurement Data** or **Fetch Regulatory Rules** returned zero rows | Check that both sheet tabs actually contain data rows, not just headers |


## Need Help?

Setting up OAuth2 credentials, customizing the compliance rules inside **Code - Compliance Engine**, wiring up one of the add-ons above or adapting this workflow for a completely different use case can take a bit of trial and error the first time around. If you'd like a hand getting this running smoothly or a similar automation built around your own procurement, compliance or audit process, then our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** are happy to help; from initial setup and configuration to building custom workflows from scratch. Feel free to reach out and we'll help you get the most out of this automation.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
