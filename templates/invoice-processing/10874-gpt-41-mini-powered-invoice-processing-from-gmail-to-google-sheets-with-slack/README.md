# 🧾 GPT-4.1-mini Powered Invoice Processing from Gmail to Google Sheets with Slack

> ⚡ **78 views** · 🧾 [Invoice Processing](../)

## Description

AI-Powered Invoice Processing from Gmail to Google Sheets with Slack Approval
This workflow completely automates your invoice processing pipeline. It triggers when a new invoice email arrives in Gmail, uses AI to extract key data from the PDF attachment, logs it in a Google Sheet, and sends a request to Slack with simple links for one-click approval or rejection.
Who's it for?
This template is perfect for small business owners, finance teams, freelancers, and anyone looking to eliminate the manual work of processing invoices. It saves hours of data entry, reduces human error, and streamlines the approval process.
How it works
Trigger: The workflow starts when an email with a specific subject (e.g., "Invoice") arrives in Gmail.
Extraction: It automatically downloads the first PDF attachment from the email and extracts all its text content.
AI Processing: The extracted text is sent to an AI model, which intelligently identifies and pulls out key details: invoice number, issue date, company name, total amount, and due date.
Logging: This structured data is appended as a new row in your Google Sheet. The status is automatically set to "pending". The full, raw text from the PDF is also saved for easy verification.
Approval Request: A formatted message is sent to a designated Slack channel. This message includes the key invoice details and two unique links: one to approve and one to reject the invoice.
Handle Response: When a user clicks either the "Approve" or "Reject" link, the corresponding Webhook in the workflow is triggered.
Update Sheet: The workflow finds the correct row in the Google Sheet using the invoice number and updates its status to "approved" or "rejected".
Confirmation: A final confirmation message is sent to the Slack channel, closing the loop and informing the team of the action taken.
How to set up
Credentials: Add your credentials for Gmail, OpenAI, Google Sheets, and Slack in the designated nodes.
Gmail Trigger: In the "1. New Invoice Email Received" node, change the search query q from "incoice" to the keyword you use for invoice emails (e.g., "invoice").
Google Sheets: In the three Google Sheets nodes ("6. Log Invoice...", "9a. Update Status to Approved", and "9b. Update Status to Rejected"), enter your Google Sheet ID and the name of the sheet.
Slack: In the three Slack nodes ("7. Send Approval Request...", "10a. Send Approval Confirmation", and "10b. Send Rejection Confirmation"), enter your Slack Channel ID.
Webhook URLs:
First, activate the workflow using the toggle in the top-right corner.
Open the "Webhook (Approve)" node, go to the Production URL tab, and copy the URL.
Paste this URL into the "7. Send Approval Request to Slack" node, replacing the https://YOUR_WEBHOOK_BASE_URL/webhook/approval part of the approval link.
Repeat this process for the "Webhook (Reject)" node and the rejection link.
Activate Workflow: Ensure the workflow is active for the Webhooks to work continuously.
How to customize
AI Prompt: You can modify the prompt in the "5. Extract Invoice Data with AI" node to extract different or additional fields to match your specific invoice formats.
Slack Messages: Feel free to customize the text in all three Slack nodes to better fit your team's tone and communication style.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
