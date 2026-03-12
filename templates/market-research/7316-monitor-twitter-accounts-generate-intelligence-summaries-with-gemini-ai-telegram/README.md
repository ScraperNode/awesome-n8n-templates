# 📊 Monitor Twitter accounts & generate intelligence summaries with Gemini AI & Telegram

> ⚡ **1,023 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automates the process of monitoring Twitter accounts for intelligence gathering. It fetches new tweets from specified accounts via RSS, uses a powerful AI model (Google Gemini) to analyze the content based on your custom prompts, and sends formatted alerts to a Telegram chat for high-priority findings.

Key Features:

Scheduled Execution: Runs automatically at your desired interval.

Dynamic Configuration: Manage which Twitter accounts to follow and what AI prompts to use directly from a Postgres database.

AI-Powered Analysis: Leverages Google Gemini to extract summaries, keywords, and assign an importance level to each tweet.

Duplicate Prevention: Keeps track of the last processed tweet to ensure you only get new updates.

Customizable Alerts: Sends well-structured and easy-to-read notifications to Telegram.

Setup Required:

Postgres Database: Set up a table to store your configuration (see the Sticky Note in the workflow for the required schema).

RSSHub: You need access to an RSSHub instance to convert Twitter user timelines into RSS feeds.

Credentials: Add your credentials for Postgres, Google AI (Gemini), and your Telegram Bot in n8n.

Configuration: Update the placeholder values in the RSS and Telegram nodes (e.g., your RSSHub URL, your Telegram Chat ID).

## 🔗 Nodes Used

Postgres, RSS Read, Telegram, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
