# 📊 Summarize Apple App Store reviews with Pinecone, GPT-4 Mini & Slack

> ⚡ **323 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow automates the process of collecting, storing, and summarizing customer reviews from the Apple App Store for multiple apps. It fetches daily reviews, stores them in a Pinecone vector database, and generates a weekly summary using OpenAI, which is then posted to a Slack channel.

**Key Features**

- Fetches daily customer reviews for a list of Apple App Store apps using the App Store Connect API.
- Stores reviews in Pinecone, with separate namespaces for each app and automatic weekly cleanup.
- Uses OpenAI to generate a summary of reviews, including positive/negative highlights and average star rating.
- Posts the summary to a specified Slack channel every week.


**How to use**

- Set your Apple App Store app IDs and names in the provided Set nodes.
- Configure your Apple API, Pinecone, OpenAI, and Slack credentials.
- Adjust the schedule triggers as needed for daily fetching and weekly summarization.
- Deploy the workflow to automate review monitoring and reporting for your apps.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
