# 🔬 Automate monthly finance reports with Google Sheets, GPT-4 analysis and Gmail

> ⚡ **3,581 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works ⚙️

This workflow is designed to streamline your monthly financial reporting, turning raw transaction data into actionable insights automatically. Here's a step-by-step breakdown of its operation:

1.  **Trigger (Cron Node):** ⏰ The workflow kicks off automatically on a pre-defined schedule, typically the 1st day of every month, ensuring timely report generation without manual intervention.
2.  **Get Finance Transactions (Google Sheets):** 📊 The first functional node connects to your designated Google Sheet. It reads all the transaction data from the specified range (e.g., 'FinanceSummary!A:E'), acting as the primary data input for the report.
3.  **Filter Previous Month Transactions (Function):** 🧹 Once the data is retrieved, this custom JavaScript function meticulously filters out only those transactions that occurred in the complete previous month. This ensures your report is always focused on the most relevant, recently concluded period.
4.  **Generate AI Financial Insights (OpenAI):** 🧠 The filtered transaction data is then passed to OpenAI's GPT-4 model. Here, the AI acts as your personal finance assistant, analyzing the data to:
    * Calculate the total income.
    * Calculate the total expense.
    * Generate 3 concise, key financial insights in bullet points, helping you quickly grasp the financial health and trends.
5.  **Send Monthly Finance Report Email (Gmail):** 📧 Finally, all the processed information comes together. This node constructs a comprehensive email, embedding:
    * A table summarizing all the previous month's transactions.
    * The valuable AI-generated total income, total expense, and key insights.
    The email is then automatically sent to your designated finance recipients, delivering the report directly to their inbox.

## Set Up Steps 🚀

Follow these steps carefully to get your "Finance Monthly Report with AI Insight" workflow up and running:

1.  **Import Workflow JSON:**
    * Open your n8n instance.
    * Click on 'Workflows' in the left sidebar.
    * Click the '+' button or 'New' to create a new workflow.
    * Click the '...' (More Options) icon in the top right.
    * Select 'Import from JSON' and paste the provided workflow JSON code.

2.  **Configure Credentials:**
    * **Google Sheets Node ("1. Get Finance Transactions"):**
        * Click on this node.
        * Under 'Authentication', select your existing Google Sheets OAuth2 credential or click 'Create New' to set one up.
        * **Important:** Replace `&lt;YOUR_GOOGLE_SHEET_ID_HERE&gt;` in the 'Sheet ID' field with the actual ID of your Google Sheet.
    * **OpenAI Node ("3. Generate AI Financial Insights"):**
        * Click on this node.
        * Under 'Authentication', select your existing OpenAI API Key credential or create a new one if you haven't already.
    * **Gmail Node ("4. Send Monthly Finance Report Email"):**
        * Click on this node.
        * Under 'Authentication', select your existing Gmail OAuth2 credential or create a new one.

3.  **Customize Email Details:**
    * **Gmail Node ("4. Send Monthly Finance Report Email"):**
        * Replace `&lt;YOUR_SENDER_EMAIL_HERE&gt;` with the email address you want the report to be sent *from*.
        * Replace `&lt;YOUR_RECIPIENT_EMAIL_HERE&gt;` with the email address(es) you want the report to be sent *to* (multiple emails can be separated by commas).
        * You can also adjust the 'Subject' if needed.

4.  **Add & Configure Cron Trigger:**
    * Click the '+' icon at the very beginning of the workflow (where it says "first step...").
    * Search for "Cron" and select the 'Cron' node.
    * **Connect:** Drag a connection from the Cron node to "1. Get Finance Transactions (Google Sheets)".
    * **Schedule:** Configure the Cron node to your desired monthly schedule. For example:
        * Set 'Mode' to 'Every Month'.
        * Set 'On Day of Month' to '1' (to run on the first day of each month).
        * Set 'At Time' to a specific time (e.g., '09:00' for 9 AM).

5.  **Review and Activate:**
    * Thoroughly review all node configurations to ensure all placeholders are replaced and settings are correct.
    * Click the 'Save' button in the top right corner.
    * Finally, toggle the 'Inactive' switch to 'Active' to enable your workflow. 🟢 Your automated monthly finance report is now live!

**Troubleshooting Tip:** If the workflow fails, check the 'Executions' tab in n8n for detailed error messages. Common issues include incorrect sheet IDs, invalid API keys, or data format mismatches in your Google

## 🔗 Nodes Used

Function, Google Sheets, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
