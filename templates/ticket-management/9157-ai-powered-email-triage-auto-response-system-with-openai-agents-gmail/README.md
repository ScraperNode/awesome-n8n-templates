# 🎫 Ai-powered email triage & auto-response system with OpenAI agents & Gmail

> ⚡ **921 views** · 🎫 [Ticket Management & Triage](../)

## Description

# AI Email Dispatcher: Classify, Process, and Route Emails with Multiple Agents

This n8n template automatically classifies incoming emails (Sales, Support, Internal, Finance, Promotions) and routes them to a dedicated **OpenAI LLM Agent** for processing. Depending on the category, the agent will then:

* **Internal/Customer Support:** Draft a reply and send it.
* **Sales/Finance/Promotions:** Generate a summary, notification, or draft reply for a human to review.

This is the ultimate workflow for managing a high volume of emails, ensuring every message gets a fast, appropriate, and structured AI-powered response or initial analysis.

## How it works

* The **Gmail Trigger** node monitors your inbox for unread emails.
* The **Text Classifier** node uses AI to read the email body and subject to categorize it as Internal, Customer Support, Sales, Promotions, or Admin/Finance.
* The workflow then uses a **Split In Batches** node and multiple **If** nodes to send the email data to a specific, specialized **OpenAI Agent** (LLM node) based on the classification.
* Each AI Agent has a custom system prompt (e.g., "Customer Support Agent," "Promotions Analyst") to ensure it processes the email with the right rules, tone, and output format.
* Finally, the workflow either automatically **replies** via Gmail (for Internal and Support) or creates a **draft/summary** and sends a **notification** (for Sales, Finance, and Promotions) for human review.

## Set up steps

Setting up the accounts and nodes should take about **10–15 minutes**.

1.  **Gmail Account:** You'll need to set up two Gmail credentials for the workflow:
    * One for the **Gmail Trigger** to watch for new unread emails.
    * A second one for the **Gmail** action nodes to label, draft, and reply to messages.
2.  **OpenAI Account:** Connect your **OpenAI API Key** to the five different LLM Agent nodes.
3.  **Telegram/Slack:** Set up your Telegram or Slack credentials to receive the 'New Sales Opportunity' and 'New Finance' notifications.
4.  **Labels in Gmail:** Before activating the workflow, make sure you have created the necessary labels in your Gmail account for the classifier (Internal, Customer Support, Promotions, Admin/Finance, Sales Opportunity).
5.  **Review Agent Prompts:** The instructions and logic for each AI Agent are in the system messages. You might want to review and customize these prompts to match your specific business rules and tone.

## Requirements

* **Gmail** Account
* **OpenAI** Account (or another LLM provider for the agents)
* **Telegram** (or Slack/other notification tool of your choice)

## Customising this workflow

You can easily adapt this template to suit your needs!

* **New Categories:** Modify the **Text Classifier** node to add or remove categories (e.g., "Job Applications," "Partnerships"). You would then add a new LLM Agent and routing logic for the new category.
* **Different LLMs:** You can swap the OpenAI nodes for any other LLM service supported by n8n, such as **Gemini** or **Anthropic Claude**, by simply changing the node type or model ID.
* **More Actions:** Instead of just sending a notification to Telegram, you could modify the logic to create a task in **ClickUp**, a lead in **Salesforce**, or an entry in a **Google Sheet** when a "Sales Opportunity" email is identified. 📬✨

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Gmail, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
