# 🎣 Qualify inbound leads with Gemini and send scored summaries to Telegram

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives lead data via a webhook, uses Google Gemini through an n8n AI Agent to score and classify the lead (hot/warm/cold) with structured output, then formats and sends the results to a Telegram chat and returns a JSON response to the caller.

## How it works
1. Receives a POST request with a JSON payload through an n8n webhook endpoint.
2. Validates the request body, extracts an optional Telegram chatId from common fields, and serializes the payload into an analysis prompt.
3. Sends the prompt to a LangChain-based AI Agent backed by Google Gemini, which extracts lead fields, assigns a score, and classifies the lead using a structured schema.
4. Formats the AI results into an HTML-rich message including summary, classification, score, key signals, and recommended next action.
5. Sends the formatted lead report to Telegram and returns a 200 JSON response with the classification and score (or a 500 JSON response if processing fails).

## Setup
1. Add a Google Gemini (PaLM) API credential and select it in the Google Gemini Chat Model node.
2. Add a Telegram bot credential, then set the target Telegram chat ID in the Send to Telegram node (for example, a fixed group chat ID).
3. Activate the workflow, copy the webhook URL from the Webhook node, and configure your form/CRM/app to POST lead JSON to that endpoint.

## Requirements
- Telegram bot token — create one via @BotFather (https://t.me/botfather) and add it as an n8n credential (Telegram account)
- Google Gemini API key — add it as an n8n credential (Google Gemini API) — or swap for any other Chat Model node (OpenAI, Groq, Anthropic, etc.)
- A Telegram group or chat ID (see "Additional info" below for how to get one)

## Customization
- Use any AI model — replace Google Gemini with OpenAI, Groq, Anthropic, Ollama, or Mistral. Just create the corresponding credential and swap the node. The Structured Output Parser works with any.
- Change the webhook path — edit the Webhook node's "path" field. Default is /lead-qualifier.
- Edit the lead scoring prompt — the system prompt is fully customizable. Tune the scoring rules, change the language, or add your own business logic.
- Route to any Telegram destination — hardcode a fixed chat ID, or keep it dynamic by passing chatId in the payload.
- Add auth to the webhook — enable header or basic auth on the Webhook node for production use.
- Connect the error output — wire the dotted error output of any node to "Respond Error" to return a clean 500 JSON on failures.

## Additional info
• The workflow is stateless — it processes one payload at a time with no conversation memory. No session data is stored.
• The webhook accepts any JSON payload — no specific fields are required beyond a valid JSON body. Missing fields are gracefully handled as "No especificado".
• To get your Telegram group's chat ID: add @getidsbot to the group, send any message, and it will reply with the ID (a negative number starting with -100). Then remove the bot. Or visit https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates after sending a message to the group.
• Tested with Gemini 2.5 Flash but compatible with any LLM provider supported by n8n's Chat Model nodes.

## 🔗 Nodes Used

Webhook, Telegram, AI Agent, OpenAI Chat Model, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
