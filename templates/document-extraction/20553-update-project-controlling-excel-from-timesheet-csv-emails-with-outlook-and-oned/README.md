# 🔬 Update project controlling Excel from timesheet CSV emails with Outlook and OneDrive

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow checks Microsoft Outlook for unread emails with a project controlling Excel template and a timesheet CSV, uploads the template to OneDrive, fills in actual person-days and deviations via Microsoft Graph Excel APIs, updates a cumulative sheet, and replies with the updated workbook.

## How it works
1. Runs every 5 minutes and fetches the latest unread Microsoft Outlook email that has attachments.
2. Downloads the attachments, identifies the Excel template and the timesheet CSV by filename keywords, and errors if either file is missing.
3. Uploads the Excel template to Microsoft OneDrive and uses the Microsoft Graph Excel API to detect the used range and dynamically generate the required month/name/plan/actual ranges.
4. Reads the template’s PLAN and existing IST values and parses the CSV to aggregate hours per person per month and convert them to person-days (hours ÷ 8).
5. Matches CSV names to template names, calculates plan-vs-actual deviations and a traffic-light status for the current reported month, and prepares cell updates including a monthly IST sum formula.
6. Writes updated IST values (and missing/incorrect formulas) back into the template cell-by-cell via Microsoft Graph, and updates the “Kumulgrundlage” sheet by adding or correcting the current month’s cumulative values in an Excel workbook session.
7. Generates a text summary, re-downloads the updated workbook from OneDrive, replies to the original email in Outlook with the updated file attached (including any collected processing errors), and marks the original email as read.

## Setup
1. Add Microsoft Outlook OAuth2 credentials with permission to read messages, download attachments, send replies, and mark messages as read.
2. Add Microsoft OneDrive OAuth2 credentials with permission to upload files and edit Excel workbooks via the Microsoft Graph API.
3. Ensure the incoming email contains exactly two attachments (an .xlsx template and a timesheet .csv) and adjust the filename keyword logic in the attachment identification code if your naming differs.
4. Confirm the Excel template contains worksheets named “Ressourcenverbrauch” and “Kumulgrundlage” with months in columns D–J and two rows per person (PLAN then IST), followed by summary rows.
5. Ensure the CSV uses a semicolon delimiter and includes the columns “Name”, “Datum” (DD.MM.YYYY), and “Zeit [h]” with comma decimal separators, or update the CSV parsing/aggregation logic accordingly.

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
