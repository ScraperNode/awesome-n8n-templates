# 🎬 Create LinkedIn posts and Twitter threads from Telegram with Groq AI

> ⚡ **101 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns Telegram text or voice notes into a ready-to-publish LinkedIn post (and copyable Twitter thread text) using Groq (Whisper + Llama), publishes the LinkedIn post via LinkedIn, and sends the formatted results back to the user in Telegram.

## How it works
1. Triggers when a new Telegram message is received.
2. If the message starts with /start, it sends a Telegram welcome message with usage instructions.
3. If the message is a voice note, it downloads the audio file from Telegram, renames it to .ogg, and transcribes it using Groq Whisper.
4. If the message is text (or after transcription), it sends the raw idea to Groq Llama to generate a JSON payload containing LinkedIn post text, an image prompt, and a formatted Telegram message with the LinkedIn post and Twitter thread.
5. It parses the LLM response into structured fields (falling back to plain text if parsing fails).
6. It publishes the generated post to LinkedIn and then sends the formatted “tap-to-copy” message back to the originating Telegram chat.

## Setup
1. Create a Telegram bot, connect Telegram credentials in n8n, and enable the Telegram Trigger so Telegram can send updates to your workflow.
2. Add Groq API authentication for the HTTP requests (Whisper transcription and Llama chat completions).
3. Connect your LinkedIn OAuth2 credentials and set the target LinkedIn person ID used for posting.
4. Review and adjust the Groq model names and the prompt content to match your desired writing style and output format.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
