# 🔬 Log food safety temperatures with DeepSeek and GPT email reports to Sheets, Telegram and Discord

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Food safety logs that fill themselves in. This workflow takes temperature readings from your kitchen team, has an AI agent judge each one against safe storage zones, logs everything to Google Sheets, and pings the team on Telegram and Discord whenever something is at risk, with a weekly safety summary in the owner's inbox.

*Last updated: September 2026.*

## Quick Overview
This workflow receives food safety temperature readings through a webhook, asks an AI agent to judge each reading against safe storage zones, logs every reading to Google Sheets, and alerts the kitchen team on Telegram and Discord when food is at risk or a reading is invalid. It also nudges the team when no readings arrive during the day, and sends a weekly AI-written safety summary to the owner by email.

## How it works
1. Receives a temperature reading via a POST webhook (food/temp) with zone, temp, unit, staff, and notes.
2. Normalizes the reading into an ID, zone, temperature, unit, staff, and timestamp.
3. Validates the reading: the zone must be a known storage zone and the temperature must be a number between 0 and 220. Invalid readings are logged to an "Errors" sheet and the team gets a Telegram alert.
4. Builds the safety context (zone label, temperature in Fahrenheit, and display value) and sends it to an AI agent that rates the reading as safe, at risk, or critical with the issue and the corrective action.
5. Parses the AI verdict and appends the reading with its status to the "Temperature Log" sheet in Google Sheets.
6. When a reading is not safe, sends an at-risk alert to the team on Telegram and to a Discord channel with the temperature, the issue, and the suggested corrective action.
7. Every day at 12:00, checks whether any readings were logged today and nudges the team on Telegram when the log is empty.
8. Every Monday at 08:00, reads the last week of readings, calculates the weekly stats (total readings, at-risk count, and zones affected), and asks an AI agent to write a short safety report that is delivered to the owner by Gmail.

## Setup
1. Connect your Google Sheets account and select the spreadsheet that holds the "Temperature Log" and "Errors" sheets.
2. Add your OpenAI credentials on the safety assessment and weekly report model nodes.
3. Add a Telegram credential and replace the placeholder chat ID in the alert and nudge nodes with your own chat.
4. Add your Discord credential and pick the channel that should receive at-risk alerts.
5. Add your Gmail credential and replace the recipient in the weekly report node with your own address.
6. POST a test reading to the food/temp webhook to confirm the validation, log, and alert paths.

### Quick Answers
**What happens if a temperature reading is invalid?**
The zone must be a known storage zone and the temperature a number between 0 and 220. Invalid readings are logged to an Errors sheet and the team gets a Telegram alert.

**Who gets alerted when food is at risk?**
At-risk readings go to the team on Telegram and to a Discord channel with the temperature, the issue, and the suggested corrective action.

**What if nobody logs a reading?**
Every day at 12:00 the workflow checks whether any readings were logged and nudges the team on Telegram when the log is empty.

**How does the owner stay informed?**
Every Monday at 08:00 an AI agent writes a short safety report from the last week of readings and Gmail delivers it to the owner.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Discord, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
