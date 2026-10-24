# 🎣 Capture and manage Telegram sales leads with Groq and Postgres

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Capture leads as fast as you can talk. Send a Telegram voice note, typed line, or business-card photo. AI turns it into a structured lead, Database checks for duplicates, and one tap confirms. A daily 8:30 digest tells you who needs a follow-up.

## How it works
1. Triggers on incoming Telegram messages/button taps or runs daily at 08:30 (cron) to generate a follow-up digest and clean up expired pending confirmations.
2. Normalizes each Telegram update, checks the sender against an allowed chat ID list, and replies with the chat ID if the sender is unauthorized.
3. Converts the input into text by transcribing Telegram voice notes with Groq Whisper, reading business-card images with Groq Vision, or using the typed message as-is.
4. Sends the text to Groq Chat Completions to extract lead details (contact, company, need, budget, urgency, follow-up date, and stage update) and validates/normalizes the result.
5. Searches Postgres for up to three likely matching leads and sends a Telegram confirmation message with inline buttons to update an existing lead, save a new lead, or cancel.
6. When you tap a button, claims the pending note from Postgres, creates or updates the lead and logs the interaction in Postgres, and replies in Telegram with the saved lead status, stage, score, and follow-up date.
7. For /today or the scheduled run, queries Postgres for due/overdue follow-ups and cold leads and sends a formatted digest to Telegram.

## Setup
1. Create a Telegram bot with BotFather, add the Telegram Trigger/Telegram nodes credentials, and message the bot once to capture your chat ID and add it to ALLOWED_CHAT_IDS in the Config node.
2. Add a Groq API key as HTTP Header Auth for the Groq HTTP Request nodes (Whisper transcription and chat completions for extraction/vision).
3. Set up a Postgres database with the required tables/functions (leads, interactions, pending_notes, and compute_lead_score) and configure the Postgres credentials in all Postgres nodes.
4. Review and adjust the Config node values (TIMEZONE, COLD_AFTER_DAYS, and Groq model IDs/prompts) to match your locale and preferred models.

## 🔗 Nodes Used

HTTP Request, Postgres, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
