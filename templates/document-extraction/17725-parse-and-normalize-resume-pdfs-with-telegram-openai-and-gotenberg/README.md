# 🔬 Parse and normalize resume PDFs with Telegram, OpenAI, and Gotenberg

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts resume PDFs sent to a Telegram bot, extracts their text, uses OpenAI to parse the content into a structured JSON schema, reformats it into HTML sections, converts the HTML to a PDF via Gotenberg, and sends the normalized PDF back to the user.

## How it works
1. Triggers when a new Telegram message is received by the bot.
2. Validates the sender’s Telegram chat ID and ignores unauthorized users or the /start command.
3. Downloads the attached PDF from Telegram and extracts its text.
4. Uses OpenAI to extract resume details into structured JSON and auto-fixes any schema mismatches.
5. Formats the parsed resume sections (personal info, employment history, education, projects, volunteering, and technologies) into HTML.
6. Sends the HTML to a Gotenberg endpoint to render a PDF and returns the generated PDF to the user in Telegram.

## Setup
1. Add Telegram bot credentials for the Telegram Trigger and Telegram nodes used to download files and send documents.
2. Replace the authorized Telegram chat ID check (currently set to 0) with your own chat ID.
3. Add an OpenAI API credential for the OpenAI chat model nodes.
4. Ensure a reachable Gotenberg instance is running and update the HTML-to-PDF URL if it differs from http://gotenberg:3000/forms/chromium/convert/html.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, OpenAI Chat Model, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
