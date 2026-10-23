# 🔬 Log Québec Law 25 confidentiality incidents with forms, Data Tables and email

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow captures Québec Law 25 confidentiality incidents via n8n Forms, stores them in an n8n Data Table register, sends daily email reminders for incidents needing action, and supports manual export of the register to an Excel file.

## How it works
1. Staff submit a protected n8n Form to record a confidentiality incident with key Law 25 register details.
2. The workflow validates dates and counts, generates a unique incident reference, calculates the 5‑year retention date, and sets an initial status based on the risk conclusion.
3. It creates the n8n Data Table register if needed, saves the incident entry, and shows a confirmation page with the reference and next-step guidance (including notification requirements when serious injury risk is indicated).
4. Staff use a second protected n8n Form to add notice dates, public notice or delay reasons, append additional mitigation measures, and optionally close the incident.
5. The workflow looks up the incident in the n8n Data Table, merges the updates, blocks closure when required fields are missing (for serious injury risk or unassessed risk), updates the register row, and shows the update result.
6. Every morning at 8:00, the workflow scans the register and emails the privacy officer a summary of incidents with notices due, incidents unassessed past the configured threshold, and entries past their retention date.
7. On manual run, it fetches all register entries and converts them into an Excel (.xlsx) file for download.

## Setup
1. Ensure your n8n instance has Data Tables enabled, since the workflow creates and stores entries in the "law25_incident_register" table.
2. Configure an SMTP (or other) email-sending credential for the Email Send node so the daily reminders can be delivered.
3. Update the Settings values for the reminder email recipient, sender address, and the number of days before unassessed incidents are flagged.
4. Activate the workflow and share the two n8n Form URLs (record incident, update/close incident) with authenticated staff who should be able to submit and maintain register entries.

## Requirements
- n8n with Data Tables (built in). An email node (SMTP, Gmail or Outlook) for the daily reminders. No paid service and no AI model needed.

## Customization
- Change the reminder hour, the days an incident may stay unassessed in Settings, and the categories of personal information offered in the first form.

## Additional info
Legal references verified against the official consolidated texts on LegisQuebec: Act respecting the protection of personal information in the private sector (P-39.1, updated to April 7, 2026), sections 3.5 to 3.8, and the Regulation respecting confidentiality incidents (A-2.1, r. 3.1, updated to April 15, 2026), sections 3, 5, 7 and 8. The Act sets no fixed number of days for the notices: it requires them promptly. A record-keeping tool, not legal advice.

## 🔗 Nodes Used

Send Email, Schedule Trigger, n8n Form Trigger, Convert to File, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
