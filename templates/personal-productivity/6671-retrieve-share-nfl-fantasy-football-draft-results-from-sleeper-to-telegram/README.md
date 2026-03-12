# ⚡ Retrieve & share NFL Fantasy Football draft results from Sleeper to Telegram

> ⚡ **182 views** · ⚡ [Personal Productivity](../)

## Description

# Sleeper NFL Draft Results to Telegram

Easily retrieve and send your Sleeper fantasy football draft picks to Telegram with this plug-and-play n8n workflow template.

---

## What This Workflow Does

This workflow allows you to:
- Accept a `/team {username}` command via Telegram
- Use the Sleeper API to:
  - Get the user’s ID from their username
  - Find the most recent NFL draft associated with that user
  - Fetch all the picks made in that draft
- Filter only the picks made by that user
- Format the data into a readable message
- Send back a Telegram message with full pick results including:
  - Round, draft slot, overall pick
  - Player name, position, and team

---

## Requirements

- **Sleeper Fantasy Football account** with at least one completed draft
- **Telegram Bot** created via [BotFather](https://t.me/BotFather)
- **n8n instance** with:
  - `Telegram Trigger` credentials set up
  - Access to external HTTP requests (Sleeper API)

---

## Setup Instructions

1. **Import the Template** into your n8n instance.
2. **Add Telegram Credentials**:
   - Go to `Credentials` &gt; `Telegram API`
   - Add your bot token
   - Replace `REPLACE_WITH_YOUR_TELEGRAMAPI_CREDENTIAL` in the workflow
3. **Customize**:
   - Optional: Modify the `/team` command trigger
   - Optional: Adjust formatting of the Telegram message

---

## Example Telegram Response

```
Your draft results
From 2024 Your City Here (dynastyppr) season!

Here are your picks:
• Round 1, Pick 4: (4 overall) Christian McCaffrey (RB - SF)
• Round 2, Pick 21: (21 overall) Garrett Wilson (WR - NYJ)
• Round 3, Pick 28: (28 overall) Travis Etienne (RB - JAX)
```

---

## Notes

- This workflow defaults to the first Sleeper league/draft returned — you can enhance logic to let users select from multiple leagues.
- Draft year is hardcoded to `2024`. Update for future seasons as needed.
- Does **not require** Airtable or Google Sheets.

---

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
