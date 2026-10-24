# 🔬 Send fleet document expiry alerts from Google Sheets via Gmail

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every weekday at 8:00 AM, reads a fleet register from Google Sheets, checks vehicle document dates for expiries within the next 30 days (or already expired), and sends an HTML summary email via Gmail to the fleet manager.

## How it works
1. Runs every weekday at 8:00 AM on a schedule.
2. Reads all rows from a Google Sheets fleet spreadsheet.
3. Checks Insurance, MOT/Inspection, Road Tax, and Service dates per vehicle and flags items that are expired or due within 30 days (marking ≤7 days as urgent).
4. If no expiries are found, the workflow stops without sending notifications.
5. Builds an HTML email report that summarizes counts by status and lists all flagged vehicles and document types.
6. Sends the report via Gmail to the configured fleet manager email address with a subject line highlighting expired and urgent counts.

## Setup
1. Add Google Sheets credentials and replace `YOUR_GOOGLE_SHEET_ID` with your fleet spreadsheet ID.
2. Ensure your Google Sheet contains columns for Plate, Model, Driver, Insurance Date, MOT Date, Road Tax Date, and Service Date using a consistent date format (for example, YYYY-MM-DD).
3. Add Gmail credentials and set the recipient address in the Gmail node (for example, `fleet.manager@yourcompany.com`).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
