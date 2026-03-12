# 💬 Cost-free email follow-up sequence with Google Sheets and Gmail

> ⚡ **100 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Simple But Powerful Email Automation for Everyone: No AI, No API Costs!
This n8n workflow template, "Email Outreach Automation," is designed to help you set up an automated email outreach system using tools you might already be familiar with: Google Sheets and Google Docs.

At its core, this workflow is a sequence of steps that n8n follows to send personalized emails to a list of contacts. The best part? It's built to be incredibly cost-effective, meaning **you won't need to pay for any external API services or AI subscriptions** to make it work. This makes it an ideal starting point for anyone new to automation or looking to manage their budget.

## How Does This Workflow Work?

Think of this n8n workflow as a digital assistant that handles your email outreach from start to finish. Here's a simplified breakdown of what happens behind the scenes:

1.  **Your Contact List (Google Sheet):** The workflow starts by reading your contact information (like names, emails, and company details) from a Google Sheet. This is where you'll keep all the people you want to email.

2.  **Email Content (Google Docs):** Instead of writing each email individually, you'll create email templates in Google Docs. The workflow can then pull the content from these documents and personalize it for each recipient. This means you can use placeholders like `{{firstname}}` or `{{company}}` in your Google Doc, and the workflow will automatically replace them with the correct information for each person.

3.  **Smart Email Sequencing:** The workflow is designed to send a series of emails to each contact. It keeps track of which email was sent last to each person in your Google Sheet. This ensures that your contacts receive the emails in the correct order and don't get the same email twice.

4.  **Sending Emails (Gmail or SMTP):** Once the workflow has the contact's details and the personalized email content, it uses your Gmail account (or any other SMTP service you configure) to send the email. It even includes a 


built-in delay to avoid hitting email sending limits.

5.  **Updating Your Records:** After sending an email, the workflow updates your Google Sheet to record which email was sent and when. This helps you keep track of your outreach efforts and ensures that contacts who have completed the email sequence are not emailed again.

## Key Features for Beginners:

*   **No Coding Required:** While n8n involves visual programming, you don't need to write complex code to use this workflow. It's pre-built and ready for you to configure with your Google Sheet and Google Doc IDs.
*   **Free to Use (No Hidden Costs):** This is a major advantage! Unlike many other email automation tools that charge per email or require expensive API keys, this workflow leverages free services. You can run your campaigns without worrying about unexpected bills.
*   **Easy Configuration:** The workflow includes a "Settings" node where you can easily input your Google Sheet and Google Doc IDs, as well as your email subjects. This centralizes all your important settings in one place.
*   **Built-in Safeguards:** Features like the "Filter passes only unprocessed contacts" and "Has contact completed email sequence?" nodes ensure that you only email the right people at the right time, preventing accidental re-sends.
*   **Scalable:** As you get more comfortable, you can easily expand this workflow to handle more contacts or more complex email sequences. It's a great foundation for learning more about automation.

## What You'll Need to Get Started:

*   An n8n instance (you can run it locally, use a cloud provider, or n8n.cloud)
*   A Google account (for Google Sheets and Google Docs)
*   A Gmail account (or SMTP credentials for sending emails)

This workflow is your entry point into efficient and affordable email automation. It's designed to be straightforward for beginners while offering powerful capabilities. Get ready to automate your outreach and see the results!

# Setup Guide:
[Sample Google Doc](https://docs.google.com/document/d/1GJhr5QotZV6kJhPlIIr8xpT3OpKKvMOWfrrQGjK9bjI/edit?usp=copy)
[Sample Google Sheet](https://docs.google.com/spreadsheets/d/1ZT58lL34HQjyI0It6LGbtbDuChxM7LpFW-R6dCxeook/edit?usp=copy)

Need Help?

Reach me: https://www.linkedin.com/in/gerald-akhidenor-1ab1a45/ 

Work with me: https://dominixai.com/ 

My website: https://jobmonkey.dev 

My email: denorgerald@gmail.com 

This guide will walk you through the process of setting up and running the Email Outreach Automation. This powerful workflow allows you to automate personalized email campaigns using n8n, Google Sheets, and Google Docs, all without incurring any API or AI subscription costs. Follow these steps to get your automated outreach up and running.

## Prerequisites

Before you begin, ensure you have the following:

- **An n8n Instance:** This can be a local installation, a self-hosted server, or an n8n.cloud account. If you don't have one, you can find installation instructions on the official n8n website [1].

- **A Google Account:** You will need this to create and manage your Google Sheets (for contacts) and Google Docs (for email templates).

- **A Gmail Account (or SMTP Credentials):** This workflow uses Gmail by default for sending emails. If you prefer to use another email service, you will need its SMTP credentials.

## Step 1: Import the Workflow into n8n

1. **Download the Workflow:** Ensure you have the `EmailOutreachAutomation.json` file downloaded to your computer.

1. **Open n8n:** Log in to your n8n instance.

1. **Import:** In the n8n dashboard, click on the **"Workflows"** tab in the left sidebar. Then, click the **"New"** button (or the `+` icon) and select **"Import from JSON"**.

1. **Upload the File:** A dialog box will appear. Click **"Browse"** or drag and drop the `EmailOutreachAutomation.json` file into the designated area. Click **"Import"**.

1. **Save the Workflow:** Once imported, the workflow will open in the editor. Click the **"Save"** button (usually located in the top right corner) to save your new workflow.

## Step 2: Prepare Your Google Sheet for Contacts

This workflow uses a Google Sheet as your contact database. You need to create a new Google Sheet and populate it with your contact information. The workflow expects specific column headers to function correctly.

1. **Create a New Google Sheet:** Go to Google Sheets (sheets.google.com) and create a new blank spreadsheet.

1. **Name Your Sheet:** Give your spreadsheet a descriptive name (e.g., "JobMonkey Email List").

1. **Add Required Columns:** In the first row of your sheet, add the following column headers exactly as they appear below (case-sensitive):
  - `firstname`
  - `lastname`
  - `email`
  - `company`
  - `last_email_sent` (This column will be updated by the workflow to track the last email sent to each contact. Leave it blank initially.)
  - `last_email_date` (This column will be updated by the workflow with the date the last email was sent. Leave it blank initially.)
  - `processed` (This column will be updated by the workflow to mark contacts as processed. Leave it blank initially.)

1. **Populate with Data:** Fill in your contact data under the respective columns. Ensure the `email` column contains valid email addresses.

1. **Get Your Google Sheet ID:** The Google Sheet ID is part of the URL when you open your spreadsheet. It's the long string of characters between `/d/` and `/edit`. Copy this ID; you will need it in Step 4.

## Step 3: Prepare Your Google Docs Email Templates

This workflow sends a sequence of up to 9 emails. You will create a separate Google Doc for each email in your sequence. The workflow uses placeholders in these documents to personalize the emails.

1. **Create New Google Docs:** Go to Google Docs (docs.google.com) and create a new blank document for each email you plan to send (e.g., "Email 1 Template", "Email 2 Template", etc.). The workflow is configured for up to 9 emails, but you can use fewer.

1. **Write Your Email Content:** Write the content for each email in its respective Google Doc. You can use the following variables (placeholders) which the workflow will automatically replace with data from your Google Sheet:
  - `{{firstname}}`
  - `{{lastname}}`
  - `{{company}}`
  - `{{email}}`

1. **Get Your Google Doc IDs:** For each Google Doc, copy its ID from the URL. It's the long string of characters between `/d/` and `/edit`. You will need these IDs in Step 4.

## Step 4: Configure the 'Settings' Node in n8n

This is the most crucial step for customizing the workflow. The 'Settings' node holds all the essential IDs and subjects for your campaign.

1. **Open the Workflow:** In n8n, open the `Email Outreach JobMonkey copy` workflow you imported.

1. **Locate the 'Settings' Node:** Find the node named **"Settings"** (it's usually near the top, connected to the 'Schedule Trigger'). Double-click it to open its configuration.

1. **Update 'googlesheetid':**
  - Find the assignment named `googlesheetid`.
  - Replace the existing `value` with the Google Sheet ID you copied in Step 2.

1. **Update 'googledocid_X' and 'emailsubject_X':**
  - For each email in your sequence (e.g., `googledocid_1`, `googledocid_2`, etc.), replace the `value` with the corresponding Google Doc ID you copied in Step 3.
  - Similarly, for each `emailsubject_X`, update the `value` with the subject line you want for that specific email.

1. **Close the 'Settings' Node:** Click **"Done"** or close the node configuration.

## Step 5: Configure Email Sending Credentials (Gmail or SMTP)

The workflow uses a 'Send a message' node (Gmail node) to send emails. You need to provide your Gmail credentials or configure an SMTP service.

### Option A: Using Gmail (Recommended for Simplicity)

1. **Locate the 'Send a message' Node:** Find the node named **"Send a message"** (it's a Gmail node) in the workflow. Double-click it.

1. **Add Gmail Account:** Under the 'Credentials' section, click **"Add new"** next to `gmailOAuth2`.

1. **Connect to Google:** A new window will open, prompting you to connect your Google account. Follow the on-screen instructions to grant n8n access to send emails on your behalf. Select the Gmail account you wish to use for sending.

1. **Save Credentials:** Once connected, save the credentials.

1. **Close the Node:** Click **"Done"** or close the node configuration.

### Option B: Using an SMTP Service (Advanced)

If you prefer to use a different email service via SMTP:

1. **Replace the 'Send a message' Node:** Delete the existing **"Send a message"** (Gmail) node.

1. **Add a New SMTP Node:** Search for and add an **"SMTP"** node to your workflow. Connect it in place of the deleted Gmail node.

1. **Configure SMTP Credentials:** Double-click the new SMTP node. You will need to provide your SMTP host, port, username, and password. Consult your email provider's documentation for these details.

1. **Map Fields:** Ensure the `To`, `Subject`, and `Message` fields in the SMTP node are correctly mapped to the data coming from the previous nodes (e.g., `={{ $(\'Loop Over Items\').item.json.email }}` for the recipient email, `={{ $(\'Settings\').item.json[\'emailsubject_\' + $(\'Determine Email Number\').item.json.emailNumber] }}` for the subject, and `={{ $json.html }}` for the message body).

1. **Close the Node:** Click **"Done"** or close the node configuration.

## Step 6: Configure the Schedule Trigger (Optional but Recommended)

The 'Schedule Trigger' node determines when your workflow will run automatically. By default, it's set to run at 6 AM, 12 PM, and 6 PM.

1. **Locate the 'Schedule Trigger' Node:** Find the node named **"Schedule Trigger"** (it's the very first node in the workflow). Double-click it.

1. **Adjust Schedule:** You can modify the schedule to fit your needs. For example, to run daily at 9 AM, you would set the hour to `9`.

1. **Close the Node:** Click **"Done"** or close the node configuration.

## Step 7: Activate and Test Your Workflow

Once all configurations are complete, it's time to activate and test your workflow.

1. **Activate the Workflow:** In the top right corner of the n8n editor, toggle the **"Active"** switch to `ON`.

1. **Test Manually (Optional but Recommended):** To perform a test run without waiting for the schedule, click the **"Execute Workflow"** button (usually a play icon) in the top right corner. This will run the workflow once.

1. **Monitor Execution:** After execution, check the 'Executions' tab in n8n to see the status of your workflow runs. You can also check your Google Sheet to see if the `last_email_sent` and `processed` columns have been updated, and check your email outbox to confirm emails were sent.

## Important Considerations

- **Email Sending Limits:** Be aware of the sending limits of your email provider (e.g., Gmail has a daily sending limit). The workflow includes a 'Wait' node to help space out emails, but adjust it (`amount` parameter in the 'Wait' node) if you encounter issues.

- **Google API Quotas:** While this workflow avoids paid API subscriptions, Google services do have free usage quotas. For very high volumes, you might eventually hit these, but for typical outreach, this should not be an issue.

- **Error Handling:** The workflow has basic error handling. If you encounter issues, check the 'Executions' tab in n8n for error messages, which can help you diagnose problems.

- **Customization:** Feel free to explore and customize other nodes in the workflow as you become more familiar with n8n. For example, you can adjust the 'Limits the number of emails per run' node to control how many emails are sent in each execution.

By following these steps, you will have a fully functional, automated email outreach system that is both powerful and cost-effective. Happy automating!

## 🔗 Nodes Used

Google Sheets, Gmail, Google Docs, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
