# 🔬 Track RSS events with OpenAI GPT-4.1-mini, Google Sheets, and Outlook

> ⚡ **97 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This automated pipeline monitors an RSS feed, leverages an OpenAI chat model to extract event details into structured JSON, logs the data to Google Sheets, and triggers real-time email notifications via Microsoft Outlook.

## How it works
1. Trigger: An RSS node polls the specified feed every minute to detect new entries.
2. Batching: A Loop node isolates each RSS item to ensure accurate, individual processing without data overlap.
3. AI Extraction: An AI Agent, powered by OpenAI, extracts the event title, date, URL, and description, formatting the output strictly as JSON.
4. Sanitization: A custom JavaScript Code node cleans the LLM response by stripping markdown blocks and parsing the JSON object.
5. Database Logging: The Google Sheets node maps the parsed keys and appends a new row for the event.
6. Alerting: An Outlook node dispatches an automated notification email, and the loop continues for the next item.

## Setup
1. Configure the RSS Feed Trigger by pasting your target feed URL.
2. Add your OpenAI API credentials to the OpenAI Chat Model node (verify your specific model identifier, e.g., gpt-4o-mini
3. Authenticate the Google Sheets node via OAuth and select your destination spreadsheet and worksheet.
4. Connect your Microsoft Outlook account and update the recipient email address in the final node to ensure alerts reach the right inbox.

## Requirements
- Active OpenAI API account with available credits,Google account for Sheets integration,Microsoft Outlook account for sending outbound emails and a valid target RSS Feed URL.

## Customization
- Cost Optimization: Increase the polling interval in the RSS Trigger (e.g., from every minute to every 15 minutes) to save on OpenAI API costs.
Prompt Engineering: Modify the AI Agent prompt to extract different fields (like author or categories) depending on your specific RSS feed structure.
Alternative Notifications: Swap the Microsoft Outlook node for a Gmail, Slack, or Discord node if your team prefers a different communication channel.

## 🔗 Nodes Used

Google Sheets, Microsoft Outlook, AI Agent, OpenAI Chat Model, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
