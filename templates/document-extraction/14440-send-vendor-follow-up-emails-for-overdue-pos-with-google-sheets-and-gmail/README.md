# 🔬 Send vendor follow-up emails for overdue POs with Google Sheets and Gmail

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Chasing vendors for overdue Purchase Orders (POs) is a manual, repetitive task that eats up hours of procurement time. This workflow automates that entire process—intelligently.

It doesn't just send emails; it batches multiple overdue orders into a single message per vendor and includes a 7-day "anti-spam" cooldown to ensure you aren't nagging your suppliers every single day.

🎯 The Problem
Manually checking spreadsheets for overdue dates is slow.

Sending individual emails for every single PO is annoying for vendors.

It’s hard to track when you last asked for an update.

🚀 The Solution
This workflow:

Syncs your PO Log with your Vendor Contact database.

Filters for orders that are past due, incomplete, and haven't been followed up on in the last week.

Aggregates all overdue items for one vendor into a single, professional email.

Logs the follow-up date back to your Google Sheet automatically.

🛠️ How to Set Up
1. Google Sheets Preparation
You need two sheets (or two tabs):

PO Log: Must contain columns for PO Number, Vendor ID, Delivery Date, Delivery Status, and Last Follow-up Date.

Vendor Base: Must contain Vendor ID, Supplier Name, and Supplier Email.

2. Node Configuration
Read PO / Read Vendors: Connect your Google Sheets account and select your specific spreadsheet files.

Filter + Normalize: This Javascript node handles different date formats. If your sheet uses a specific format (e.g., DD/MM/YYYY), ensure it matches the logic in this node.

Send Email: Connect your Gmail account. You can customize the Subject and Body in the Group by Vendor node logic.

Update PO Sheet: Ensure the "Matching Column" is set to PO Number so the workflow knows which row to update after the email is sent.

3. Schedule
The Trigger is set to 9:00 AM daily. You can change this to weekly or a specific day depending on your procurement cycle.

💡 Customization Tips
Cooldown Period: Change the 7 in the Filter + Normalize code to 3 or 14 if you want more or less frequent follow-ups.

Email Branding: Add your company signature or a CC to your own procurement inbox in the Send Email node.

Slack Integration: Instead of Gmail, you could easily swap the final node for a Slack or Microsoft Teams message if you communicate with vendors via shared channels.

📦 Requirements
Google Sheets account.

Gmail account (or any SMTP/Email provider).

Columns in your sheets must match the names used in the Merge and Code nodes.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
