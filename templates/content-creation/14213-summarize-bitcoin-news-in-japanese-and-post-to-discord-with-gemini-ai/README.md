# 🎬 Summarize Bitcoin news in Japanese and post to Discord with Gemini AI

> ⚡ **90 views** · 🎬 [Content Creation & Video](../)

## Description

Automate your Bitcoin content pipeline by turning the latest CoinDesk headlines into structured Japanese summaries posted to Discord every six hours — completely hands-free.
Who is this for
Crypto traders, Discord community managers, and content creators who want to keep their audience updated on Bitcoin news without writing posts manually. No coding required.
What this workflow does
On a six-hour schedule, the workflow fetches the three newest articles from the CoinDesk RSS feed. Each article is sent to Google Gemini 2.5 Flash via a Basic LLM Chain node. A Structured Output Parser then extracts the AI response into four clean fields: a one-line Japanese summary, a brief AI commentary, the article URL, and hashtags. The structured post is delivered to a Discord channel via webhook. Each post is also saved to Google Sheets for auditing, and a Slack notification confirms every successful run.
How to set up

Open the Set config values node and fill in your Google Sheet ID, Discord Webhook URL, and hashtags.
Add your Google Gemini API credential to the Gemini 2.5 Flash node (free tier works).
In Discord, go to your channel settings → Integrations → Webhooks, create a new webhook, and paste the URL into Set config values.
Connect your Google Sheets OAuth2 credential and set the target sheet name.
Add your Slack credential and update the channel ID in the Notify Slack node.
Activate the workflow — it will run automatically every six hours.

Requirements

Google Gemini API key (free tier works)
Discord server with webhook permission
Google Sheets OAuth2 credential
Slack API credential

How to customize

Swap the RSS URL in Set config values to follow Ethereum, Solana, or any crypto feed.
Edit the prompt inside Basic LLM Chain to change language or post style.
Update the hashtags in Set config values.
Adjust the posting interval in the Schedule Trigger node (default: every 6 hours).
Add a Filter node between RSS and LLM to post only articles matching specific keywords.

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Discord, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
