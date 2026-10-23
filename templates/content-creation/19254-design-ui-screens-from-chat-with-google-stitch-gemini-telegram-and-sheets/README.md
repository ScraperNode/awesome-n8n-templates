# 🎬 Design UI screens from chat with Google Stitch, Gemini, Telegram and Sheets

> ⚡ **34 views** · 🎬 [Content Creation & Video](../)

## Description

Turn a UI idea into screens from chat. This workflow takes design requests from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) chat or Telegram, loads the user's last prompt from Google Sheets to keep context, and uses a Gemini agent with Google Stitch MCP tools to create and iterate on UI screens, replying in markdown (web chat) or Telegram-safe HTML.

*Last updated: September 2026.*

## Quick overview
This workflow accepts UI design requests from an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) chat or Telegram, looks up the user’s last prompt in Google Sheets, and uses Google Gemini plus Google Stitch MCP tools to create and iterate on UI screens, replying in markdown (web chat) or Telegram-safe HTML.

## How it works
1. Receives a message from the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) chat interface or from a Telegram bot.
2. Normalizes the incoming text into a single format with a per-user session ID and rejects empty or very short prompts with a help hint.
3. Loads the user’s previous prompt from a Google Sheets “ProjectMemory” tab and prepends it to the new request to maintain continuity for returning users.
4. Uses a Google Gemini–powered agent to call Google Stitch MCP tools (create/get/list projects, list/get screens, and generate screens from text) and optionally uses Perplexity for web research.
5. Routes the response back to the user, converting markdown into Telegram-supported HTML for Telegram messages and sending markdown directly to the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) chat.
6. Appends the latest prompt and metadata to Google Sheets for future context, and on failures sends an admin alert in Telegram and logs the error to a Google Sheets “ErrorLog” tab.

## Setup
1. Add a Telegram bot credential, enable the Telegram trigger webhook, and set ADMIN_TELEGRAM_CHAT_ID for admin error alerts.
2. Provide Google Sheets OAuth credentials, create a sheet with “ProjectMemory” (session_id, channel, last_prompt, logged_at) and “ErrorLog” (session_id, error_message, logged_at) tabs, and set STITCH_PROJECT_MEMO_SHEET to the sheet URL.
3. Add an HTTP Header Auth credential with your Google Stitch API key (for example, in the X-Goog-Api-Key header) and attach it to the Stitch MCP tool nodes.
4. Add Google Gemini credentials for both the design agent and the Telegram HTML formatter, and add a Perplexity credential if you want web research enabled.

### Quick Answers
**Where can I send design requests from?**
From the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) chat interface or a Telegram bot. Replies come back as markdown in web chat or Telegram-safe HTML.

**Does it remember my previous design requests?**
Yes. The last prompt is stored in the Google Sheets “ProjectMemory” tab and prepended to your next request, so returning users keep continuity.

**What happens if something goes wrong?**
An admin alert is sent to Telegram and the error is logged to the Google Sheets “ErrorLog” tab.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
