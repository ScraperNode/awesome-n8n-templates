# 📊 Query GA4 data with Google Gemini AI in a Slack channel

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

![ScalolabsTN4.jpg 1.jpeg](fileId:4096)

This workflow integrates Google Analytics 4 (GA4) with Slack, enabling users to query their website data using natural language inside a dedicated Slack channel. An AI Agent interprets user queries, fetches relevant reports from GA4, and responds in Slack as a reply.

How it works
When a user sends a message in a specified Slack channel, the workflow is triggered. The message is filtered to remove @bot mentions, and then passed to an AI Agent. The AI Agent, powered by a Google Gemini Chat Model and utilizing conversational memory (to have back-and-forth with user on follow up questions, limit of 10), determines if the user's query requires data from Google Analytics 4. If so, it leverages a pre-configured GA4 tool to fetch the necessary report (e.g., page views, users, conversions for a specific date range). Finally, the AI Agent's response, containing the requested data, is sent back to the original Slack channel as a reply.

Setup Steps
Slack Trigger: Configure the Slack API credential and specify the channel n8n should monitor for new messages.

Credentials: Create and configure the following credentials in n8n:

Slack API: For sending and receiving messages.

Google Analytics 4: For accessing GA4 reports. Requires a Google Cloud Project with the Analytics Data API enabled and a Service Account Key (JSON).

Google Gemini Chat Model: For the AI Agent's intelligence. Requires an API key from Google AI Studio.

AI Agent System Prompt: Craft a robust system prompt for the AI agent. This prompt should define the agent's role, constraints (e.g., "do not estimate or lie on data, if GA4 is unavailable, inform so"), and guidance on mapping natural language metrics/dimensions to GA4 equivalents (e.g., "when the user mentions 'leads', they mean 'conversions' in GA4").

Slack Reply: Ensure the final Slack "Send a message" node is configured to reply to the original channel, providing the data in a clear, concise format.

## 🔗 Nodes Used

Slack, AI Agent, Simple Memory, Google Gemini Chat Model, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
