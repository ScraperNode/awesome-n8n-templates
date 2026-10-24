# ⚡ Send daily AI-personalized inspirational quotes with OpenAI and Gmail

> ⚡ **49 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow teaches n8n basics by fetching a daily quote from ZenQuotes, personalizing it with OpenAI, and emailing it via Gmail, with extra manual branches for practicing API calls and field mapping.

## How it works
1. Runs manually to fetch a random inspirational quote from the ZenQuotes API and displays the quote and author.
2. Runs every day at 7am on a schedule.
3. Loads your configuration values (recipient email, language, model, subject, and coaching style) and fetches a fresh quote from the ZenQuotes API.
4. Sends the quote and author to OpenAI to generate a short 3–4 sentence coaching note in your chosen language.
5. Emails the quote and AI-generated message to the configured recipient using Gmail.
6. Runs an optional manual practice branch that fetches a ZenQuotes quote and a programming joke from JokeAPI, then prompts you to map the fields into a clean output.

## Setup
1. Add an OpenAI API credential in the OpenAI step and ensure the selected model ID (default: gpt-4o-mini) is available in your account.
2. Add a Gmail OAuth2 credential for the Gmail send step.
3. In the Configuration step, set `send_to` to your recipient email address and adjust `output_language`, `email_subject`, `ai_model`, and `coaching_style` as needed.
4. If desired, change the schedule time from 7am to your preferred delivery hour.

## Additional info
# Learn n8n basics by sending AI-personalized quotes to your inbox with OpenAI and Gmail

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Learn-n8n-basics-by-sending-AI-personalized-quotes-to-your-inbox-with-OpenAI-and-Gmail-39e3d6550fd981cca505db607c951c89)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
