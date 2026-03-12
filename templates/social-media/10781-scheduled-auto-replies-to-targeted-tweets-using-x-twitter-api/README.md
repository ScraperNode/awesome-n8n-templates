# 📱 Scheduled auto-replies to targeted tweets using X (Twitter) API

> ⚡ **259 views** · 📱 [Social Media & Email Marketing](../)

## Description

## What it does

This workflow automates your X (Twitter) engagement by acting as an auto-responder. It runs on a schedule, searches for new tweets based on a specific query (like a hashtag, keyword, or mention), and automatically sends a reply.

## How it works

1.  **Schedule Trigger:** Runs the workflow automatically at your chosen interval (e.g., every 15 minutes).
2.  **Search Tweets (HTTP):** Uses the X (Twitter) API v2 to find recent tweets matching your search query.
3.  **Error & Success Handling:**
    * If the search is successful, it proceeds to prepare a reply.
    * It includes error handling for common issues like **Rate Limits** or if **No Tweets** are found.
4.  **Send Reply (HTTP):** Posts the reply to the tweet.
5.  **Duplicate Check:** Includes logic to check if a reply has already been sent to avoid spamming.

## How to set up

1.  **Credentials:** You must have an X (Twitter) Developer Account (v2). Add your credentials to n8n.
2.  **Search Node:** In the "Search Tweets" node, update the `query` parameter with your own search terms (e.g., `#n8n` or `from:username`).
3.  **Reply Node:** In the "Prepare Reply" node, customize the text you want to send.
4.  **Activate:** Set your desired schedule in the "Schedule Trigger" node and activate the workflow.

## Requirements

* An active n8n instance.
* An X (Twitter) Developer Account with Elevated (v2) access.
* X (Twitter) API v2 credentials.

## How to customize the workflow

* **Change Schedule:** Modify the "Schedule Trigger" to run more or less frequently.
* **Dynamic Replies:** Enhance the "Prepare Reply" node with an AI node (like OpenAI) to generate unique replies instead of static text.
* **Add Filters:** Add an "IF" node after "Search Tweets" to filter out tweets you don't want to reply to.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
