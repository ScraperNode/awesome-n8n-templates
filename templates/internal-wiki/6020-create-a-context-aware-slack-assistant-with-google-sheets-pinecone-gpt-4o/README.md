# 📖 Create a context-aware Slack assistant with Google Sheets, Pinecone & GPT-4o

> ⚡ **322 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This advanced n8n automation template empowers your Slack bot to act as an intelligent assistant: when a user asks a question or requests a suggestion (by mentioning the bot), it automatically retrieves the user’s historical data and previous interactions from both Google Sheets and Pinecone. Using GPT-4o, the bot analyzes past updates, status reports, and context to generate a personalized, context-aware response—directly in Slack.
Perfect for teams seeking instant, data-driven support, this workflow transforms your Slack bot into a smart knowledge assistant that references your own organizational history to provide relevant answers and suggestions.

**What This Template Does (Step-by-Step)**

**Slack Bot Mention Trigger**
- Listens for message or app_mention events where a user asks a question or requests a suggestion.
- Captures the message body and user ID.

**User Profile & Data Fetch**

- Uses the Slack API to retrieve the user’s profile.
- Queries Google Sheets and Pinecone to collect the user’s historical updates and interactions.

**Contextual AI Lookup**
- GPT-4o reviews the user’s past status reports, messages, and activity.
- Synthesizes a contextually relevant answer or suggestion based on prior data.

**Personalized Response Generation**

- The bot replies in Slack with a tailored answer, referencing the user’s previous updates and current context.

**Auto-Fix & Schema Validation**
- Ensures the generated response is well-structured and matches your organization’s data schema.

**Document Update (Optional)**
- Optionally logs the new interaction or suggestion back to Pinecone for future reference.

**Required Integrations**
- Slack Bot with channels:history, app_mentions:read, and users.profile:read
- Google Sheets OAuth2 (for lead or user status records)
- Pinecone Vector Store (for storing user status documents)
- Azure OpenAI or OpenAI GPT-4o (for document generation and merging)
- Cohere API (optional) for reranking relevance in vector search

**Ideal For**
- Remote teams running async daily standups
- People ops tracking onboarding or churn signals
- Founders building internal GPT-powered tools
- Managers consolidating Slack-based updates across teams
- Teams wanting a Slack bot that provides personalized answers and suggestions based on past activity
- Managers and team members seeking quick, AI-powered support and insights from their own work history
- Organizations aiming to leverage internal data for smarter, context-aware assistance in Slack

## 🔗 Nodes Used

Slack, AI Agent, Auto-fixing Output Parser, Structured Output Parser, Pinecone Vector Store, Embeddings Azure OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
