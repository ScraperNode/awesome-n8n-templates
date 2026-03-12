# 🔬 Generate Daily E-Commerce Order Reports with Supabase, GPT-4.1 and Gmail

> ⚡ **2,178 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow automates the generation and delivery of a daily order summary via email. It leverages an AI Agent to fetch and summarize e-commerce order data from the last 24 hours stored in Supabase, providing a concise overview of the daily business operations.

### How it works

- **Scheduled Trigger:** The workflow is triggered every day at 8 AM.
- **Sender Email Configuration:** A manual step allows you to set the sender's email address.
- **AI Agent:** An AI Agent node acts as the central intelligence, interacting with various tools to gather and process data.
- **Supabase Data Fetching:** The AI Agent calls "Get Orders," "Get Order Items," "Get Clients," and "Get Products" tables to retrieve relevant e-commerce data from your Supabase database.
- **OpenAI Chat Model:** An OpenAI Chat Model with the 4.1 model is integrated to help the AI Agent understand and summarize the fetched data into a human-readable format.
- **Gmail Summary:** Finally, the workflow sends a summarized report to your specified email address using the "Send Gmail Summary" node.

### Set up steps

This setup will take approximately 15-20 minutes.

1.  **Download the workflow:** Download this workflow and import it into your n8n instance.
2.  **Configure the Daily 8am trigger:** Ensure the "Daily 8am" trigger is active and set to your desired timezone.
3.  **Set Sender Email:** In the "Set Sender Email" node, manually enter the email address you wish to use as the sender for the daily reports.
4.  **Configure AI Agent:**
    - **Chat Model:** Connect your OpenAI Chat Model credential.
    - **Memory & Tools:** Ensure all the necessary nodes ("Get Orders", "Get Order Items", "Get Clients", "Get Products", "Send Gmail Summary") are correctly linked to the AI Agent. In our workflow we call data from 4 tables in Supabase.
5.  **Configure Supabase Database Connections:**
    - For each of the "Get Orders," "Get Order Items," "Get Clients," and "Get Products" nodes, you will need to configure your Supabase credentials to access your e-commerce database.
    - Select the tables (e.g., `orders`, `order_items`, `clients`, `products`) that you want the AI agent to pull data from in your Supabase schema.
6.  **Configure Gmail Credentials:** In the "Send Gmail Summary" node, connect your Gmail account credentials to allow n8n to send emails on your behalf.
7.  **Test the workflow:** Run the workflow manually to ensure all connections are working correctly and the email summary is generated as expected.

### Requirements

- **n8n instance:** An active n8n instance (self-hosted or cloud).
- **Supabase Account:** A Supabase account with your e-commerce order data accessible.
- **OpenAI API Key:** An OpenAI API key for the Chat Model.
- **Gmail Account:** A Gmail account credentials to send the daily summaries.

### Need help?
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.

## 🔗 Nodes Used

Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
