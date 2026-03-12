# 🎫 Automate customer support with Mintlify documentation & Zendesk AI agent

> ⚡ **1,394 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n workflow automates support ticket handling with AI-driven classification, response generation, and safety checks. Responses are based solely on your Mintlify documentation, ensuring accuracy, consistency, and reduced manual effort in customer support.

**✅ Trigger: New Ticket Received**
The workflow is triggered whenever a new support ticket is created.

**🔍 Check for Assignee**
If the ticket is already assigned to a human agent, the bot does nothing and exits.
If the ticket is unassigned, the bot continues processing.

**🔢 Bot Response Count Check**
The workflow checks how many times the bot has already responded to this ticket.
If the bot has replied more than 3 times, it stops and waits for a human to take over.
This prevents endless loops and flags potentially complex cases for review.

**🧠 AI-Based Ticket Categorization**
An AI model analyzes the ticket content and classifies it into one of the following categories:
1. 🧾 Billing → Sends a predefined billing-related message.
2. 📢 Advertising → Automatically deletes the ticket.
3. 🚨 Fraud → Sends a predefined fraud-related message.
4. ❓ Other → Proceeds to generate a dynamic response.

**🤖 Mintlify Integration**
For tickets categorized as "Other", the customer’s question is sent to the Mintlify API, which returns a documentation-based answer.

**✍️ AI Response Formatter**
The raw response from Mintlify is passed to an AI model that:
Summarizes and rewrites the answer in a clear, friendly tone
Limits the response to 120 words
Adds conversational elements like “Hi,” “Thanks,” and a proper closing

**🛡️ AI Confidence Filter**
A second AI model reviews the formatted response to ensure it sounds confident and accurate.
It looks for uncertainty phrases like:
- “I’m not sure”
- “I don’t have enough information”
- “It depends…”
If the response is flagged as uncertain, the workflow stops and waits for a human agent to respond.

**📤 Send Response & Update Ticket**
If the response passes the confidence check:
The reply is sent to the customer
The ticket status is updated to “Pending”

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
