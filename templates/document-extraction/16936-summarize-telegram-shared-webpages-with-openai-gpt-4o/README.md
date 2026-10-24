# 🔬 Summarize Telegram-shared webpages with OpenAI GPT-4o

> ⚡ **37 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow listens for Telegram messages containing a URL, fetches and cleans the webpage content, summarizes it with an OpenAI chat model, and replies in the same Telegram chat with a formatted summary including key points and action items.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Extracts the first http/https URL from the message text and captures the sender’s chat ID.
3. If no valid URL is found, sends an error message back to the same Telegram chat.
4. If a valid URL is found, fetches the webpage HTML and extracts the title and cleaned body text while removing common boilerplate elements.
5. Truncates the extracted text to a configurable maximum length and sends the title, URL, and text to OpenAI to generate a structured JSON summary.
6. Formats the JSON into Telegram HTML (title, source link, summary, key points, and insights/action items) and sends it back to the original chat.

## Setup
1. Create a Telegram bot and add a Telegram API credential in n8n, then select it in both the Telegram Trigger and the send-message steps.
2. Add an OpenAI API credential in n8n and select it for the OpenAI chat model used for summarization.
3. Activate the workflow and send a Telegram message to your bot containing a webpage link starting with http:// or https://.
4. Optionally adjust the configuration values for the OpenAI model, maximum page text size, and whether to include the raw URL in the summarization prompt.

## Additional info
## Summarize webpages shared in Telegram

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/How-to-Install-n8n-on-Hermes-Agent-Course-Prompts-3983d6550fd9810c8da8dcaf0f93d271)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DRFIRASS). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DRFIRASS)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
