# 📈 Track investor behavior with NewsAPI, Gemini, Groq and Slack alerts

> ⚡ **20 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow captures an investor’s buy/sell action via an n8n Form, pulls related market news from NewsAPI, uses Google Gemini to generate a one-line behavioral reflection, sends it via Gmail and Slack, stores it in an n8n Data Table, and posts a weekly Slack summary using Groq.

## How it works
1. Receives an investment action submission (buy/sell, reason, and market name) through an n8n Form.
2. Fetches recent related news from NewsAPI based on the selected market and aggregates article descriptions into a single summary.
3. Stores the form submission in an n8n Data Table and merges it with the aggregated news summary.
4. Uses Google Gemini (via an AI Agent) to generate a short, supportive behavioral insight and sends it through Gmail and to a Slack channel.
5. Parses the AI output and updates the corresponding Data Table row with the generated instant feedback.
6. Runs weekly on a schedule, pulls the last seven entries from the Data Table, and uses Groq to generate a concise behavioral pattern report that is posted to Slack.

## Setup
1. Create or select an n8n Data Table for storing submissions and feedback, and ensure it includes an instant_feedback column (and market_type if you want it stored).
2. Add credentials for NewsAPI (HTTP Header auth), Google Gemini (PaLM API), Gmail OAuth2, Slack OAuth, and Groq.
3. Update the NewsAPI query (q) mapping if you want different keywords than the selected market name.
4. Set the target Slack channel and confirm the Gmail “send to” address (currently errorcommits@mailinator.com) matches your needs.
5. Publish the form and share the form URL with users, and confirm the weekly schedule timing matches your desired reporting cadence.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, n8n Form Trigger, Google Gemini Chat Model, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
