# 🧾 Send automated payment reminders for Xero invoices via Outlook email

> ⚡ **130 views** · 🧾 [Invoice Processing](../)

## Description

## Who's this for

Small business owners, finance teams, accountants, and bookkeepers who use Xero for invoicing and want to improve cash flow by automating payment reminders. If you're spending time manually following up on unpaid invoices or struggling with late payments, this workflow eliminates the manual effort and ensures consistent, timely communication with customers while maintaining a complete audit trail.

## What it does

This workflow automatically monitors all invoices in your Xero account and sends friendly payment reminders to customers when invoices are approaching their due date. It runs daily at noon, checks every invoice, calculates how many days until payment is due, sends personalized email reminders for invoices due within 7 days, and logs each reminder activity back into Xero's invoice history. The automation ensures no invoice slips through the cracks, reduces the administrative burden of accounts receivable management, and maintains professional customer relationships through polite, timely reminders—all while keeping your Xero records up to date with reminder tracking.

## How it works

The workflow executes automatically every day at 12 PM and follows this process:

- Triggers the daily check using the Schedule Trigger node
- Fetches all invoices from your Xero account using the Xero API integration
- Filters out invoices that are already marked as "PAID" to avoid sending unnecessary reminders
- Calculates the number of days remaining until each unpaid invoice is due using a JavaScript code node
- Identifies invoices that are due within the next 7 days (customizable threshold)
- Sends personalized email reminders to customers via Microsoft Outlook, including invoice number, due date, and amount
- Logs the reminder activity back into Xero's invoice history with the date sent and days until due
- Creates a complete audit trail in Xero showing when reminders were sent for each invoice

The workflow only sends reminders for invoices meeting the criteria, so customers aren't bombarded with unnecessary emails. The Xero history logging ensures your team can see at a glance which customers have been reminded and when, preventing duplicate reminders and providing accountability.

## Requirements

- Xero account with API access enabled (available to all Xero users at no additional cost)
- Microsoft Outlook or Office 365 account for sending email reminders
- Valid email addresses configured for all customers in your Xero contact records
- n8n instance (self-hosted or cloud) with credentials configured for:
  - Xero OAuth2 connection (used twice: once for fetching invoices, once for logging history)
  - Microsoft Outlook OAuth2 connection

## Setup instructions

**1. Enable Xero API access**

Ensure your Xero account has API access enabled. This is available by default for all Xero accounts. You'll need administrator access to create the API connection.

**2. Configure n8n credentials**

In your n8n instance, set up OAuth2 credentials for:
- **Xero:** Follow n8n's Xero credential documentation to authorize access to your Xero organization. Make sure the credentials have permission to both read invoices and write to invoice history.
- **Microsoft Outlook:** Set up OAuth2 connection to allow n8n to send emails on your behalf

**3. Assign credentials to nodes**

Open the workflow and assign your configured credentials to these nodes:
- "Fetch All Xero Invoices" → Select your Xero credential
- "Send Email Reminder to Customer" → Select your Microsoft Outlook credential
- "Log Reminder in Xero History" → Select your Xero credential (same as above)

**4. Customize the email template**

Edit the "Send Email Reminder to Customer" node to personalize the message:
- Update the sender name and signature
- Add your company branding or logo
- Include payment instructions or online payment links
- Adjust the tone to match your customer communication style
- Add any legal disclaimers or terms if required
- Customize the subject line if needed

**5. Adjust the reminder threshold (optional)**

By default, reminders are sent for invoices due within 7 days. To change this:
- Open the "Calculate Days Until Due" code node
- Find the line: `isDueSoon: diffDays &lt;= 7 && diffDays &gt;= 0`
- Change `7` to your preferred number of days (e.g., `14` for two weeks notice)

**6. Test the workflow**

Before enabling the daily schedule:
- Use the manual trigger to test with your actual Xero data
- Verify that invoices are fetched correctly
- Check that the date calculations are accurate
- Send a test email to yourself to review the message format
- Confirm the reminder is logged in Xero's invoice history
- Verify only qualifying invoices trigger reminders

**7. Activate the workflow**

Once testing is complete, activate the workflow. It will run automatically every day at noon (or your customized schedule time).

## 🔗 Nodes Used

HTTP Request, Xero, Microsoft Outlook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
