# 🎬 Generate AI songs from Telegram prompts with OpenAI and Suno

> ⚡ **147 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow listens for Telegram messages containing a song idea, uses OpenAI to expand the idea into a Suno-ready prompt, submits a generation request to the Suno API, polls until the track is ready, and then sends the finished audio and details back to the user in Telegram.

## How it works
1. Triggers when a user sends a message to your Telegram bot.
2. Captures the message text and chat ID, applies default generation settings, and sends an acknowledgment message back on Telegram.
3. Uses OpenAI to rewrite the short idea into a concise, Suno-optimized music prompt based on your style preferences.
4. Submits the enriched prompt to the Suno API to start generating a song.
5. Waits for a configured interval, checks the Suno generation status, and repeats polling until the status is SUCCESS.
6. Sends the generated audio URL to the user as a Telegram audio message and follows up with a completion message including the title and duration.

## Setup
1. Create and select a Telegram Bot credential for the Telegram trigger and the Telegram send-audio/message steps.
2. Add an OpenAI API credential for the OpenAI chat model used to enrich the prompt.
3. Create an HTTP Header Auth credential for the Suno API (for example, an Authorization: Bearer <token> header) and select it on both Suno HTTP requests.
4. In the Configuration step, set the Suno base URL/model, polling interval, callback URL, and any defaults like instrumental/custom mode and style preferences.

## Additional info
## Generate AI songs from Telegram prompts with Suno

# 📥 [Open full documentation on Notion](https://automatisation.notion.site/Course-support-Generate-AI-songs-from-Telegram-prompts-with-Suno-3963d6550fd981ed9082ee9df600f442)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
