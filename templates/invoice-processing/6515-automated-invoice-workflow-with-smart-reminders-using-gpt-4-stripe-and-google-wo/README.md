# 🧾 Automated invoice workflow with smart reminders using GPT-4, Stripe, and Google Workspace

> ⚡ **133 views** · 🧾 [Invoice Processing](../)

## Description

### How It Works ⚙️

This workflow is a sophisticated, end-to-end solution that automates the entire billing lifecycle, from invoice creation to intelligent payment reminders and status tracking. It's designed to give you complete control over your cash flow without the manual effort.

1.  **Smart Invoice Creation**: The workflow is triggered when new billing data is added to your **Google Sheets**. It then uses a **Google Docs** template to automatically create a professional, personalized PDF invoice. Optionally, it can use **OpenAI** to generate a detailed description.
2.  **Payment Monitoring**: An `HTTP Request` node integrates with a payment gateway's API (e.g., **Stripe**, **Midtrans**) to check the real-time payment status of the invoice.
3.  **Intelligent Reminders**: Based on the payment status check, an `If` node determines whether to send a reminder. It sends polite, pre-due date reminders and more urgent post-due reminders only if the invoice remains unpaid.
4.  **Multi-Channel Alerts**: If an invoice becomes overdue, the workflow sends an internal alert to your team's **Slack** channel, ensuring you're always aware of potential cash flow issues.
5.  **Automated Status Updates**: The system automatically updates the status of the invoice in your **Google Sheets** database (e.g., `Sent`, `Overdue`, `Paid`), providing a real-time dashboard of your finances.

### How to Set Up 🛠️

1.  **Import the Workflow**: Copy the provided workflow JSON and import it into your n8n instance.
2.  **Configure Credentials**:
    * **Google Sheets**: Add your OAuth2 credential.
    * **Google Docs**: Add your OAuth2 credential.
    * **Gmail**: Add your OAuth2 credential.
    * **OpenAI (Optional)**: Add your API Key.
    * **Slack**: Add your Bot Token credential.
    * **Stripe/Midtrans (or other payment gateway)**: Add your API Key credential for the HTTP Request node.
3.  **Customize Workflow Nodes**:
    * **Node 1 (`Google Sheets Trigger`)**: Select your billing data spreadsheet and sheet name.
    * **Node 3 (`Google Docs`)**: Replace the placeholder `[YOUR GOOGLE DOCS INVOICE TEMPLATE ID]` with your own template ID.
    * **Node 6 (`HTTP Request`)**: Replace the API URL with your payment gateway's endpoint for checking invoice status.
    * **Nodes 8 & 10 (`Gmail` & `Slack`)**: Replace the email addresses and Slack channel ID placeholders.
4.  **Save & Activate**: Once all settings and credentials are configured, save the workflow and click the "Inactive" toggle in the top-right corner to make it live.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Google Docs, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
