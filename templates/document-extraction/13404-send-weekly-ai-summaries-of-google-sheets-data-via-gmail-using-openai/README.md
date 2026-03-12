# 🔬 Send weekly AI summaries of Google Sheets data via Gmail using OpenAI

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**How it works**

- Runs automatically on a weekly schedule (every Monday at 9am by default).
- Reads all rows from a Google Sheets spreadsheet containing your data.
- Aggregates the data and sends it to OpenAI to generate a concise summary report.
- Formats the report with a date-stamped subject line.
- Emails the summary to your chosen recipient via Gmail.
- Logs every sent report to a separate spreadsheet for tracking.

Turn your raw spreadsheet data into a professional weekly digest without lifting a finger.

**Setup steps**

- **Estimated setup time:** 10 minutes
- Adjust the Schedule Trigger for your preferred day and time.
- Connect your Google Sheets account and set the data spreadsheet ID and sheet name.
- Connect your OpenAI API credentials.
- Set the recipient email address in the Send Report Email node.
- Connect your Gmail account for sending.
- Create a "Report Log" sheet with columns: date, subject, sent_at.
- Activate the workflow.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
