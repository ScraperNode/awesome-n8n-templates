# 💬 Enhance customer support with RAG-powered AI

> ⚡ **1,297 views** · 💬 [Support Chatbots](../)

## Description

This workflow automates customer support across multiple channels (Email, Live Chat, WhatsApp, Slack, Discord) using AI-powered responses enhanced with Retrieval Augmented Generation (RAG) and your product documentation. It intelligently handles incoming queries, provides instant and context-aware answers, and escalates complex or negative-sentiment cases to your human support team. All interactions are logged and categorized for easy tracking and reporting.

---

## Key Features

- **Omnichannel Support:** Handles customer queries from Email, Live Chat, WhatsApp, Slack, and Discord.
- **AI-Powered Answers:** Uses RAG to generate accurate, context-aware responses based on your product documentation.
- **Automatic Escalation:** Detects low-confidence or negative-sentiment cases and escalates them to your human support team.
- **Conversation Logging:** Automatically logs and categorizes all conversations for future analysis.
- **Weekly Reporting:** Sends automated weekly summaries and metrics to your support team.

---

## How It Works

1. **Trigger:** The workflow starts when a new message is received on any supported channel.
2. **Normalization:** Incoming messages are normalized into a common format for unified processing.
3. **Context Management:** Conversation history is fetched and merged with the new query for better AI context.
4. **AI Response:** The workflow uses RAG to generate a response, referencing your product documentation.
5. **Confidence & Sentiment Analysis:** The response is scored for confidence and sentiment.
6. **Escalation Logic:** If the response is low-confidence or negative, the workflow escalates the case to your support team and creates a ticket.
7. **Response Delivery:** The answer (or escalation notice) is sent back to the customer on the original channel.
8. **Logging & Reporting:** All interactions are logged, categorized, and included in weekly reports.

---

## Configuration

1. **Connect Your Channels:** Set up triggers for each channel you want to support (Email, Webhook, WhatsApp, Slack, Discord).
2. **Add Your Documentation:** Integrate your product documentation source (e.g., Google Docs, Notion, or a knowledge base) for the RAG model.
3. **Configure AI Model:** Set your preferred AI provider and model (e.g., OpenAI, Azure OpenAI, etc.).
4. **Set Escalation Rules:** Adjust confidence thresholds and escalation logic to fit your support workflow.
5. **Integrate Support Tools:** Connect your ticketing system (e.g., Zendesk) and reporting tools (e.g., Google Sheets, Slack).
6. **Test the Workflow:** Send test queries from each channel to ensure correct routing, AI responses, and escalation.

---

## Use Cases

- Provide instant, accurate answers to customer questions 24/7.
- Reduce manual workload for your support team by automating common queries.
- Ensure complex or sensitive cases are quickly escalated to human agents.
- Gain insights into support trends with automated logging and weekly reports.

---

## Requirements

- n8n version 2.0.2 or later
- Accounts and credentials for your chosen channels and AI provider
- Access to your product documentation in a supported format

---

## Notes

- Please review and customize the workflow to fit your company’s privacy and data handling policies.
- For best results, keep your product documentation up to date and well-structured.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Google Sheets, Slack, Webhook, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
