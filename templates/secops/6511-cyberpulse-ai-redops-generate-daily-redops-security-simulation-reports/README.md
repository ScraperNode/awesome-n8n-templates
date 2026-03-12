# 🔒 CYBERPULSE AI RedOps: generate daily RedOps security simulation reports

> ⚡ **79 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Description
Automatically compiles a daily HTML report of all RedOps simulations (Modules 1–5), summarizing offensive activity, response logs, and module effectiveness. Designed for GRC teams, Red/Purple teams, and internal auditors — no manual formatting required.

## Who’s It For:
Red Teams running daily simulations

Purple Teams reviewing impact and response

CISOs, SOCs, or compliance teams requiring summaries

## How It Works:
Trigger manually or on schedule (e.g., daily cron)

Reads simulation logs from a shared Google Sheet

Filters data by time or module

Formats data into an HTML summary table

Sends email with report or uploads to Drive/S3

## Requirements:
Gmail or SMTP node for email

Google Sheets connected (OAuth)

### Google Sheet Requirements:
- Columns: `Date`, `Module`, `Action`, `Result`, `Status`
- One row per offensive simulation log
- Make sure headers are in the first row


Unified log format for RedOps Modules 1–5

## File Templates:
RedOps_AutoReport_Log_Template.xlsx

email	module	payload	status	response	timestamp

## Customization Tips:
Set filtering timeframe (24h, 7d) in JavaScript node

Modify the table style in the HTML generator

Connect to PDF node or S3 for exporting to other tools

## Ethics & Compliance:
This workflow is designed for internal reporting only. It does not simulate attacks or initiate actions.
Use for audit logs, red team reviews, and awareness tracking only.

## Setup Instructions

1. Copy the provided Google Sheet template (linked in File Templates).
2. Fill in your RedOps logs (columns: date, module, action, result, status).
3. Connect Google Sheets node using OAuth credentials.
4. In the Gmail node:
   - Set recipient email (use `your_email@example.com` as a placeholder).
   - Choose HTML output from the summary table.
5. Trigger via Cron node (daily) or manually.
6. Optional: Connect Drive or S3 node to store a backup.


Supports:

NIST 800-53 AU-6, AU-12

ISO 27001 A.16.1.6

ACSC Essential Eight reporting practices

🔗 Part of the CYBERPULSE RedOps Suite
🌐 https://cyberpulsesolutions.com
📧 info@cyberpulsesolutions.com

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
