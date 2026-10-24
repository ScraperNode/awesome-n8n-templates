# 🔬 Monitor new template releases with OpenAI and log insights to Telegram and Google Sheets

> ⚡ **45 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to check the public n8n Templates API for newly published templates in a chosen category, generates improvement suggestions with OpenAI, logs each new template to Google Sheets, and sends a Telegram digest (with an optional all-clear message when nothing new is found).

## How it works
1. Runs every day at 9 AM on a schedule.
2. Fetches the latest templates for the configured category from the n8n Templates API.
3. Extracts key metadata for each template and compares template IDs against a stored “seen” list to detect newly published items.
4. For each new template, sends its details to an OpenAI chat model to generate 4–6 business-focused improvement tips.
5. Appends one row per new template (including the AI tips and metadata) to a Google Sheets spreadsheet.
6. Builds a combined digest of all new templates and posts it to a Telegram chat, or sends an optional all-clear message when no new templates are found.

## Setup
1. Add an OpenAI API credential and select the model to use for the analysis.
2. Add a Google Sheets OAuth credential, then choose the target spreadsheet and sheet tab and ensure the header columns match the fields being appended.
3. Add a Telegram bot credential, set your Telegram chat ID in the configuration, and ensure the bot can post to that chat.
4. Update the configuration values (template category, number of templates to check, output language, and whether to report when none are new) and adjust the schedule time if needed.

## Additional info
## Monitor new n8n templates and send AI improvement tips to Telegram and Google Sheets

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Monitor-new-n8n-templates-and-send-AI-improvement-tips-to-Telegram-and-Google-Sheets-3983d6550fd981dc8c7fd6c9de879375)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
