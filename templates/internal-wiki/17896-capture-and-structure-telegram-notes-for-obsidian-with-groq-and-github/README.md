# 📖 Capture and structure Telegram notes for Obsidian with Groq and GitHub

> ⚡ **90 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow captures Telegram voice notes or text messages, uses Groq (Whisper and Llama) to transcribe and structure them, converts the result into an Obsidian-ready Markdown note, commits it into a GitHub-hosted vault, and replies in Telegram with the saved note details.

## How it works
1. Triggers when a new Telegram message is received.
2. If the message starts with /start, it sends a welcome message back in Telegram.
3. If the message is a voice note, it downloads the audio from Telegram, renames the file from .oga to .ogg, and sends it to Groq Whisper for transcription.
4. It sends the resulting transcript (or the original Telegram text message) to Groq Llama to extract a structured JSON note with a folder, title, summary, ideas, questions, links, and tags.
5. It converts the structured JSON into Obsidian Markdown with YAML frontmatter, computes the target vault path based on the selected folder and date, and base64-encodes the content.
6. It creates or updates the Markdown file in a GitHub repository via the GitHub Contents API.
7. It posts a confirmation message to Telegram with the note title, summary hook, open-question count, and the saved vault path.
8. The flow is inspired by LLM-Wiki from Andrej Karpathy. 

## Setup
1. Create a Telegram bot, add Telegram API credentials in n8n, and start a chat with the bot so it can receive messages.
2. Add an HTTP Header Auth credential for Groq and set the Authorization header to your Groq API key for both the transcription and chat-completions requests.
3. Add an HTTP Header Auth credential for GitHub with a token that has repo write access, and update the repository owner/name and vault path in the GitHub request URL if you are not using Progressive-Programmer/obsidian-vault.
4. Ensure your Obsidian vault repository contains the folders used by the workflow (01 Inbox, 02 Ideas, 03 Open Questions, and 04 MOCs/MOC) or adjust the folder mapping and wikilink paths in the Markdown formatting code.
5. Activate the workflow and use the Telegram trigger webhook provided by n8n (or polling, depending on your Telegram setup) so Telegram can deliver messages to it.

## Additional info
This workflow is to capture the though trail and help you organise and retrieve your ideas. The workflow is inspired by LLM-Wiki from Andrej Karpathy.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
