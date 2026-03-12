# 🎫 Zendesk ticket summarizer with Pinecone, OpenAI, and Slack

> ⚡ **283 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Zendesk Ticket Summarizer with Pinecone, OpenAI, and Slack

This workflow automates the process of summarizing recent Zendesk support tickets and sharing key insights in a Slack channel. It is ideal for support teams who want daily, AI-generated overviews of customer issues without manually reviewing each ticket.

**How it works**

* Daily Trigger: The workflow runs every day at 10am.
* Fetch Tickets: It retrieves all Zendesk tickets created in the last 24 hours (optionally filtered by brand).
* Vector Storage: Tickets are stored in a Pinecone vector database, with relevant fields and metadata.
* AI Summarization: An AI agent (using OpenAI) analyzes the tickets, identifies main complaints, and counts how many tickets mention each issue.
* Slack Notification: The summary is posted to a specified Slack channel for your team to review.


**Setup Instructions**

1. Configure your Zendesk, Pinecone, OpenAI, and Slack credentials in the respective nodes.
2. Set your Pinecone index and namespace in both Pinecone nodes.
3. Adjust the Zendesk query if you want to filter by a specific brand.
4. Set the Slack channel ID where you want to receive the summaries.


**Use case**
Get daily, actionable insights from your Zendesk tickets, helping your team quickly spot trends and recurring issues.

## 🔗 Nodes Used

Slack, Zendesk, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
