# 🧾 Automated payment reminders with grouped QuickBooks invoices via email

> ⚡ **266 views** · 🧾 [Invoice Processing](../)

## Description

# Automated QuickBooks Payment Reminders with Dynamic Invoice Tables

This workflow provides a powerful solution for businesses using QuickBooks Online to automate their payment reminder process. It solves the time-consuming and manual task of chasing late payments by creating a fully automated system that ensures every customer with an outstanding balance receives a timely, professional, and consolidated reminder email.

The workflow periodically fetches all unpaid invoices from your QuickBooks account. Its core strength lies in its ability to group multiple outstanding invoices for a single customer into one email, presenting them in a clean, easy-to-read table. This improves clarity for your customers, reduces email clutter, and significantly increases the likelihood of prompt payment.

This template was crafted with care by the team at **Prompt-Wizards** to help you streamline your finances and build stronger customer relationships through smart automation.

## How the Workflow Operates

1.  **Scheduler:** The workflow initiates on a customizable schedule (e.g., every day at 9 AM).
2.  **Get Unpaid Invoices:** It fetches all invoices from your QuickBooks account that have an outstanding balance greater than zero and were created within a specified date range.
3.  **Get Customer Wise Invoice list:** This Code node intelligently processes the list of invoices and groups them by customer name, preparing the data for email generation.
4.  **Invoice Template:** This Code node dynamically generates a beautiful, responsive HTML email for each customer, complete with a personalized greeting, an invoice table, and the total amount due.
5.  **Send Reminder Email:** The final node sends the uniquely crafted email to the customer's billing address on file.

## Prerequisites

Before you begin, please ensure you have the following:
*   An active n8n instance.
*   A QuickBooks Online account with API access.
*   An email service (e.g., SMTP, Gmail, Outlook) connected to n8n as credentials.

## Step-by-Step Setup Guide

Follow these instructions carefully to configure the workflow for your business in under 5 minutes.

### 1. Connect Your QuickBooks Account
You must authenticate your QuickBooks account to allow n8n to fetch invoice data.

*   Select the **`Get Unpaid Invoices`** node.
*   In the **Credentials** section on the right, either select your existing QuickBooks account from the dropdown or click **Create New** to connect your account.
*   *(Optional)*: In the **Options** section of this node, you can adjust the `TxnDate` filter. It is pre-set to look at invoices from the last 90 days. You can change this date range to suit your needs.

### 2. Personalize the Email Template
Personalize the email to match your brand and include your payment information.

1.  Open the **`Invoice Template`** node.
2.  Inside the code editor, find and replace these two placeholder values:
    *   **Your Payment Link:** On **line 115**, find `href="https://your-payment-portal-link.com"` and replace the placeholder URL with a link to your actual payment portal or website.
    *   **Your Company Details:** On **line 120**, find `<p>Your Company Name | ...` and replace the placeholder text with your real company name and address in the email footer.

### 3. Configure Your Email Account
You must connect the email account you want to send reminders from.

*   Select the **`Send Reminder Email`** node.
*   In the **Credentials** section, select your email account (e.g., Gmail, Outlook) or create a new connection.
*   The `To Address`, `Subject`, and `HTML` fields are already configured with expressions to work automatically. **No changes are needed here!**

### 4. Activate the Workflow
1.  Open the **`Scheduler`** node to set the schedule for how often you want the workflow to run.
2.  **Save** the workflow using the button at the top.
3.  Click the **Active** toggle at the top right of the screen.

Your automated payment reminder system is now live!!!

For questions or to explore more custom solutions, visit us at [Elegant Biztech](https://www.elegantbiztech.com/) or contact us at [sales@elegantbiztech.com](mailto:sales@elegantbiztech.com).

## 🔗 Nodes Used

Send Email, QuickBooks Online, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
