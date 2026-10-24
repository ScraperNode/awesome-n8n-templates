# 🔬 Compare personal grocery inflation to US CPI with Gemini and Telegram

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts grocery receipt photos via an n8n form or Telegram, uses Google Gemini to extract and normalize line items, calculates a personal month-to-month inflation rate, pulls the matching official CPI series from the US BLS API, and returns a report (optionally with an ElevenLabs voice note).

## How it works
1. Receives receipt photos or commands from an n8n Form trigger or a Telegram bot trigger.
2. For uploaded images, uses Google Gemini to extract the store, purchase date, and purchasable line items into structured data.
3. Checks previously saved receipt lines in an n8n Data Table to reuse known product mappings, and uses a Google Gemini agent to assign consistent product keys to any new line-item texts.
4. Calculates unit prices, saves/upserts the normalized receipt lines to the Data Table, and fetches the official CPI time series from the US BLS Public Data API for the configured series.
5. Computes a spending-weighted personal inflation rate between the two most recent months with receipts and compares it to the official index change for the same months.
6. Uses Google Gemini to write an “economist’s note” from the precomputed results and optionally generates an audio version via the ElevenLabs text-to-speech API.
7. Builds a formatted HTML report for form submissions or a Telegram message (plus optional voice note) and sends the response back to the originating channel.

## Setup
1. Add a Google Gemini (Google AI Studio) credential for the Gemini chat model used to read receipts and write the report.
2. (Optional) Add an ElevenLabs HTTP Header Auth credential (xi-api-key) and set the voice/model settings if you want audio notes.
3. (Optional) Add Telegram bot credentials (BotFather token) and configure the Telegram trigger/send nodes if you want Telegram intake and replies.
4. Review and adjust the settings values (BLS series ID, label, currency symbol, fallback official rate, narrator prompt, and ElevenLabs voice/model IDs) to match your use case.
5. Run the workflow once to let it create the receipt_economist_lines n8n Data Table automatically, then test with the sample household or upload receipts from at least two different months.

## Requirements
- Gemini API key; n8n with Data Tables (the table is created on the first run). ElevenLabs and Telegram are optional.

## Customization
- In **Settings**, change the BLS series, currency or narrator voice. For another country, point the official-index HTTP Request node at its statistics office and adjust the Calculate node.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
