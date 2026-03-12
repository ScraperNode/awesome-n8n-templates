# 📱 Automated Twitter brand promotion with Anthropic Claude AI & Google Sheets reporting

> ⚡ **514 views** · 📱 [Social Media & Email Marketing](../)

## Description

## This n8n workflow promotes your brand/company/platform by mentioning it in Twitter comments. The responses look human-like, the workflow is robust and designed to avoid bans.

#### Good to know
The workflow is configured to maximize efficiency while minimizing costs and ensuring your Twitter account won't get banned or shadow-banned. Generating more than 17 comments per day would require a paid Twitter subscription plan.

### How it works
- The User sets a keyword that would be used to find relevant Posts. An AI Agent analyzes each Post and writes a response, promoting User's Brand.
- After each reponse is submitted, the result is  logged in a Report Table for tracking and convenience.

### Set up steps
- Set your target keyword and start the workflow.
- Detailed instructions and tutorials can be found in the workflow's sticky notes.

### Requirements
- Twitter and Google accounts.
- twitterapi.io subscription (used to overcome official Twitter API limitaions).
- Anthropic subscription (GPT models are also supported, but I personally recommend using Anthropic Claude Sonnet 4 for text generation).

## 🔗 Nodes Used

Google Sheets, HTTP Request, X (Formerly Twitter), Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
