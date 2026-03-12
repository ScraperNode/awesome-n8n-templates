# 📊 Summarize Google Play Store reviews with GPT-4-mini, Pinecone & Slack alerts

> ⚡ **1,296 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automatically fetches reviews for one or more Google Play Store apps, summarizes the feedback using OpenAI, stores and manages review data with Pinecone, and posts the summary to a Slack channel. It is designed for product teams, community managers, or anyone who wants to keep track of app sentiment and review trends without manually reading each review.

**Features:**

- Fetches daily reviews for specified Google Play Store app bundle IDs using a Google Service Account.
- Stores reviews in a Pinecone vector database for efficient retrieval and summarization.
- Uses OpenAI to generate a summary, including:
  - Positive and negative review highlights
  - Star rating breakdown and average rating
  - Total number of reviews processed
- Posts the summary to a Slack channel of your choice.
- Supports both daily and weekly triggers.
- Automatically clears old reviews from the vector store weekly to keep data fresh.

**Setup Instructions:**

- Add your Google Play app bundle IDs in the “Set the bundle ids” node.
- Configure your Google Service Account, Pinecone, OpenAI, and Slack credentials.
- Set your preferred Slack channel in the “Send to Slack channel” node.
- Enable the workflow and customize the schedule as needed.

**Use Cases:**

- Monitor app sentiment and user feedback trends.
- Share review insights with your team in Slack.
- Automate reporting for product or support teams.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
