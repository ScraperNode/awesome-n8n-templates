# 🔬 Send weekly AI portfolio reports with Google Sheets, Gmail and Groq

> ⚡ **12 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Weekly Client Report Generator

This workflow automatically generates weekly portfolio reports for clients using their investment data from Google Sheets. It calculates profit, growth and other key metrics, formats a professional report, sends it via Gmail and updates the client’s status in the sheet.

**Quick Steps to Start:**

1. Prepare your Google Sheet with columns: Client, Email, Invested, Current Value, Status.
2. [Connect your Google Sheets and Gmail accounts in n8n](https://n8n.partnerlinks.io/om1efg2qgvwi).
3. Start the workflow manually.
4. The workflow fetches client data, calculates metrics, generates the AI report, formats it in HTML, sends emails and updates the sheet automatically.


## What It Does

The Weekly Client Report Generator streamlines weekly client communications for investment portfolios. Using client data from Google Sheets, it calculates total investment, profit and growth for each client. The workflow uses AI to generate a concise, professional report including a summary, key highlights, risk analysis and future outlook.

Reports are automatically formatted in HTML for easy readability and emailed via Gmail. The Google Sheet is updated to mark each client’s report as “Sent,” providing a clear tracking system. A wait node is included to ensure smooth processing and act as a safeguard against Gmail sending limits.

By automating these steps, the workflow saves time, reduces manual errors and ensures consistent, high-quality client reporting.


## Who It's For

- Financial advisors and portfolio managers who send weekly client reports.
- Small businesses managing multiple clients and investments.
- Anyone needing automated, personalized reporting using Google Sheets, AI and email.


## Requirements to Use This Workflow

- [An active n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
- Google Sheets account with a prepared client sheet.
- Gmail account for sending reports.
- Groq AI or other AI integration configured in n8n for report generation.


## How It Works & Setup Guide

**Step 1 – Prepare Google Sheet**

- Columns needed: Client, Email, Invested, Current Value, Status.

**Step 2 – Connect Accounts**

- Add credentials in n8n for Google Sheets and Gmail.

**Step 3 – Start Workflow**

- Trigger the workflow manually using the Start workflow node.

**Step 4 – Fetch and Process Client Data**

- Data is pulled from Google Sheets.
- Clients are processed in batches to ensure accurate calculations.

**Step 5 – Calculate Metrics & Generate Report**

- The workflow computes profit and growth for each client.
- AI generates a simple, professional report summarizing performance, key highlights, risks and future outlook.

**Step 6 – Format Report**

- The report is converted into HTML for better readability in emails.

**Step 7 – Send Email & Update Sheet**

- The wait node (Pause Before Sending Emai`) acts as a safeguard to manage sending limits.
- Gmail node sends the report.
- Google Sheets is updated to mark the report as “Sent.”


## How To Customize Nodes

- **Google Sheets Node:** Update the document ID and sheet name if your client sheet changes.
- **AI Report Node:** Modify the prompt to adjust report style, length or additional sections.
- **Email Node:** Change subject, sender or template to fit your branding.
- **Wait Node:** Adjust wait duration to manage email rate limits.


## Add-ons (Optional Enhancements)

- Add Slack or Teams notifications when a report is sent.
- Include charts or graphs generated from client data.
- Track client engagement by logging email opens.
- Integrate with other CRM tools for enriched client data.


## Use Case Examples

1. Weekly investment portfolio updates for individual clients.
2. Automated reporting for financial advisory firms managing multiple clients.
3. Sending performance summaries for mutual funds or stock portfolios.
4. Tracking report delivery status for compliance and audit purposes.
5. Any scenario requiring batch email reporting based on spreadsheet data.

There can be more custom use cases depending on your business needs.


## Troubleshooting Guide

### Issue: Workflow doesn’t start

- Possible Cause: Manual trigger not executed
- Solution: Click the Start workflow node to trigger the workflow

### Issue: Emails not sent

- Possible Cause: Gmail credentials not connected or sending limits exceeded
- Solution: Reconnect Gmail account and increase wait time in the wait node

### Issue: Reports show incorrect data

- Possible Cause: Google Sheet columns mismatch
- Solution: Ensure the sheet has correct column names: Client, Email, Invested, Current Value, Status

### Issue: AI report not generated

- Possible Cause: AI credentials missing or API issues
- Solution: Verify Groq AI credentials and check API quota

### Issue: Workflow stops unexpectedly

- Possible Cause: Node errors or incorrect batch configuration
- Solution: Check execution logs and ensure batch size is properly configured


## Need Help?

If you need assistance setting up, customizing or extending this workflow, our [n8n workflow developers at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/) can help you:

- Configure AI nodes for your reporting style.
- Integrate additional add-ons like charts, Slack notifications or CRM systems.
- Build similar automated workflows tailored to your business needs.

[Contact WeblineIndia for expert support and workflow customization](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
