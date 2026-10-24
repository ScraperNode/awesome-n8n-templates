# 🔧 Deliver entropy-based yes/no oracle answers via Telegram with OpenAI and Sheets

> ⚡ **2 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow listens for Telegram messages (text or voice), transcribes voice notes with OpenAI, computes an entropy-based yes/no verdict via sub-workflows, then replies with an OpenAI TTS audio message, sends an HTML “certificate,” logs to Google Sheets, runs compliance log, and triggers a Tapo light flash via HTTP.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Detects whether the incoming message is text or a voice note, rejecting unsupported message types.
3. If the message is a voice note, downloads the audio from Telegram and transcribes it with OpenAI; otherwise it uses the text as-is.
4. Validates and normalizes the question, sends an acknowledgement back to Telegram, and waits briefly before processing.
5. Calls two sub-workflows to analyze the question’s “spiritual weight” and to gather multiple external entropy signals, then combines them into a final entropy score and decision index.
6. Calls a formatting sub-workflow to generate the final oracle verdict and TTS script, then fans out to parallel outputs.
7. Generates an OpenAI TTS audio reply and sends it to Telegram, creates an HTML certificate and sends it as a Telegram document, appends a log row to Google Sheets, calls an EU AI Act compliance-logging sub-workflow, and posts an HTTP request to trigger a Tapo light flash.

## Setup
1. Create a Telegram bot with BotFather and add a Telegram API credential in n8n, then start a chat with the bot so it can receive messages.
2. Add an OpenAI API credential for Whisper transcription and TTS, and ensure the workflow has access to the configured OpenAI models.
3. Configure the referenced sub-workflows (Spiritual Weight Analyser, Chaos Engine, Oracle Output Formatter, and EU AI Act Compliance Logger) or replace their workflow IDs with your own.
4. Add a Google Sheets OAuth2 credential, replace the Google Sheet document ID, and ensure the target sheet tab (for example, “OracleLog”) exists with compatible columns.
5. Set the HTTP endpoint used for the Tapo light controller (for example, your Cloudflare Tunnel URL) so the POST request can reach your local Tapo automation.

## Additional info
This is the main workflow submission for the Flow for Gold 2026 competition. There are several other workflows that link to this.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Execute Sub-workflow, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
