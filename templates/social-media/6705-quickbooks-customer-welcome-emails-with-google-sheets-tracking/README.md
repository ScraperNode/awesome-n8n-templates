# 📱 QuickBooks customer welcome emails with Google Sheets tracking

> ⚡ **181 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Automated QuickBooks New Customer Welcome Emails

This workflow provides a robust solution for QuickBooks users looking to automate their new customer onboarding process. It solves the time-consuming and error-prone task of manually sending welcome emails by creating a fully automated system that ensures every new customer receives a timely, personalized, and professional welcome.

The workflow periodically checks your QuickBooks Online account for new entries. To prevent sending duplicate emails to existing customers, it cleverly uses a Google Sheet as a simple database, tracking every customer who has already been contacted. This makes the process reliable and safe to run on an automated schedule.

This template was crafted with care by the team at **Elegant Biztech** to help you build stronger customer relationships through smart automation.

## How the Workflow Operates

1.  **Scheduled Trigger:** The workflow initiates on a customizable schedule (e.g., every hour).
2.  **Fetch Data:** It simultaneously fetches all customer data from your QuickBooks account and the list of already-processed customer IDs from your Google Sheet.
3.  **Find New Customers:** It compares the two lists to isolate only the new customers who have not yet been processed.
4.  **Log New Customers:** For each new customer found, the workflow performs two logging actions:
    *   It appends their full details (Name, Company, Email, etc.) to a "log" sheet for your records.
    *   It adds their unique Customer ID to the "tracking" sheet to ensure they are not emailed again in the future.
5.  **Craft Personalized Email:** A `Email Template` node dynamically generates a beautiful, responsive HTML email, personalized with the customer's name, company, and location details.
6.  **Send Welcome Email:** The final node sends the uniquely crafted email to the new customer.

## Prerequisites

Before you begin, please ensure you have the following:
*   An active n8n instance.
*   A QuickBooks Online account with API access.
*   A Google account.
*   An email service (e.g., SMTP, Gmail, Outlook) connected to n8n as credentials.

## Step-by-Step Setup Guide

Follow these instructions carefully to configure the workflow for your use.

### 1. Create the Google Sheet
This workflow requires a Google Sheet with two specific tabs to function as its database.

1.  Create a new Google Sheet.
2.  Rename the first tab to **`Processed IDs`**. In cell **A1**, create the header: `CustomerIds`.
3.  Create a second tab and name it **`New Customer Logs`**. In row 1, create the following headers: `Customer_Name`, `Company_Name`, `Email_ID`, `Phone_No`, `Customer_ID`.

### 2. Connect Your Accounts
You must authenticate your accounts in the designated nodes.

*   **`Get many Customers` node:** Select this node and connect your QuickBooks Online credentials.
*   **`Read Old Customers` node:** Connect your Google Sheets account credentials here. This will be automatically used by the other Google Sheets nodes.
*   **`Send Personalized Welcome Email` node:** Connect the credentials for the email account you wish to send from.

### 3. Configure the Google Sheets Nodes
Point the workflow to the correct sheet and tabs you just created.

*   **`Read Old Customers` node:**
    *   In the **Document ID** field, select your new Google Sheet.
    *   In the **Sheet Name** field, select the **`Processed IDs`** tab.
*   **`Log New Customer Details` node:**
    *   Verify the **Document ID** field is correctly set to your Google Sheet.
    *   In the **Sheet Name** field, select the **`New Customer Logs`** tab.
*   **`Log New Customer ID for Tracking` node:**
    *   Verify the **Document ID** is correct.
    *   In the **Sheet Name** field, select the **`Processed IDs`** tab.

### 4. Customize the Email Template
Personalize the welcome email to match your brand.

1.  Open the **`Code`** node.
2.  Inside the code editor, find and replace these four placeholder values:
    *   **Your Logo URL:** Replace the placeholder link with a public URL to your company's logo.
    *   **Your Website Link:** Replace the placeholder with a link to your website's dashboard or homepage.
    *   **Your Support Email:** Replace the `mailto:` link with your company's support email.
    *   **Your Company Name:** Update the company name in the copyright footer.
3.  Next, select the **`Send Personalized Welcome Email`** node and update the **Subject** field with your company's name.

### 5. Activate the Workflow
1.  Open the **`Scheduler`** node to set the schedule for how often you want the workflow to run.
2.  **Save** the workflow.
3.  Click the **Active** toggle at the top right of the screen.

Your automated welcome email system is now live! For questions or to explore more custom solutions, visit us at [elegantbiztech.com](https://www.elegantbiztech.com).

## 🔗 Nodes Used

Send Email, Google Sheets, QuickBooks Online, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
