# 🔬 Automatically update Amazon transaction memos in YNAB with AI & Gmail

> ⚡ **150 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/YNAB_logo.svg/115px-YNAB_logo.svg.png)

Who it's for
------------

This workflow is ideal for YNAB users who frequently shop on Amazon and want their transaction memos to automatically show itemized purchase details. It's especially helpful for people who import bank transactions into YNAB and want to keep purchase records tidy without manual entry.

How it works
------------

The workflow triggers on a set schedule, via a webhook, or manually. It retrieves all unapproved transactions from your YNAB budget, filters for Amazon purchases with empty memo fields, and processes each transaction individually. Using Gmail, it searches for matching Amazon emails (within ±5 days of the transaction date) and sends the email data to an AI agent powered by OpenAI. The AI extracts product names and prices, generating a concise memo line (up to 499 characters). If no valid purchase info is found, a fallback message is added instead. A 5-second delay prevents API rate limiting.

How to set up
-------------

1.  Connect your YNAB account with valid API credentials.
2.  Connect Gmail with OAuth2 authentication.
3.  Add your OpenAI (or other LLM) API credentials.
4.  Configure the schedule trigger or use manual/webhook start.
5.  Run the workflow and monitor execution logs in n8n.

Requirements
------------

-   YNAB API credentials
-   Gmail OAuth2 connection
-   OpenAI API key (or another compatible AI model)

How to customize
----------------

You can change the AI model (e.g., Gemini or Claude) or add HTML-to-Markdown conversion to lower token costs. Adjust the wait node delay to fit your API rate limits or modify the email date range for greater accuracy.

**Security note:** Never store or share API keys or personal email data directly in the workflow. Use credential nodes to manage sensitive information securely.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
