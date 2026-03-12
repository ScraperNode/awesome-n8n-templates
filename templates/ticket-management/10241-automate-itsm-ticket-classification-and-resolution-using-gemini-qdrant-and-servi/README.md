# 🎫 Automate ITSM ticket classification and resolution using Gemini, Qdrant and ServiceNow

> ⚡ **2,054 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who’s it for
This template is ideal for IT support teams, internal helpdesk automation engineers, and developers building intelligent ticketing systems. It helps streamline ITSM workflows by automatically classifying user queries, retrieving relevant knowledge base entries, and triggering incident creation in ServiceNow.

## How it works / What it does
This workflow uses Google Gemini and Qdrant to power an intelligent ITSM assistant. When a user submits a query via chat:

The Text Classifier categorizes the input as an Incident, Request, or Other.
Based on the category:

Incidents are automatically logged in ServiceNow.
Requests trigger an HTTP call (e.g., for provisioning or access).
Other queries are routed to an AI Agent that searches the FAQBase in Qdrant and responds contextually.


The Gemini LLM enriches responses and summaries.
The Qdrant Vector Store retrieves semantically similar answers from a pre-embedded FAQ knowledge base.
The Summarization Chain condenses incident details for better tracking.

Sticky notes are used throughout the workflow to document each node’s purpose and improve maintainability.

### How to set up

Connect your Google Gemini API, Qdrant, and ServiceNow credentials.
Populate the FAQBase collection in Qdrant with your ITSM knowledge base.
Deploy the webhook to receive chat inputs.
Test the flow using the Manual Trigger node.
Customize the classifier categories and Gemini prompts as needed.


## Requirements

Google Gemini API access
Qdrant vector database with embedded FAQ data
ServiceNow account with API access
n8n instance with LangChain nodes installed


## How to customize the workflow

Modify the Text Classifier categories to suit your organization’s ticket types.
Add more FAQ entries to Qdrant for broader coverage.
Replace the HTTP Request node with integrations relevant to your ITSM tools.
Adjust the Gemini prompts to reflect your tone and support style.
Extend the workflow with Slack, Teams, or email notifications for ticket updates.

## 🔗 Nodes Used

HTTP Request, ServiceNow, AI Agent, Summarization Chain, Simple Memory, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
