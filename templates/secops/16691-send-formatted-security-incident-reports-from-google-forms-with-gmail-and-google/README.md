# 🔒 Send formatted security incident reports from Google Forms with Gmail and Google Sheets

> ⚡ **3 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow watches a Google Forms responses spreadsheet, formats each new security incident into a clean report, emails it via Gmail to a manager, and appends the incident data to an archive sheet in Google Sheets.

## How it works
1. Triggers when a new row is added to the Google Sheets tab that stores Google Form responses.
2. Loads basic settings such as the manager email address, company name, and the target spreadsheet URL.
3. Extracts and renames key form fields (date, site/client, agent name, start/end time, intervention type, description, follow-up) and adds a timestamp.
4. Sends a formatted HTML incident report email via Gmail to the configured manager address.
5. Appends the formatted incident record to an archive tab in Google Sheets for tracking and reporting.

## Setup
1. Connect Google Sheets OAuth2 credentials and set the correct spreadsheet ID and responses sheet tab in the trigger.
2. Connect Gmail OAuth2 credentials for the Gmail account that sends the incident report emails.
3. In the configuration step, set `responsable_email`, `societe_nom`, and replace `YOUR_SHEET_ID_HERE`/`sheetUrl` with your real Google Sheets URL.
4. Ensure the form response column names match the workflow mappings (for example: “Date”, “Site / client”, “Nom de l'agent”, “Heure de debut”, “Heure de fin”, “Type d'intervention”, “Description”, “Suite donnee”).
5. Choose the archive sheet/tab in the Google Sheets append step (the sheet ID) where incidents should be stored.

## 🔗 Nodes Used

Google Sheets, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
