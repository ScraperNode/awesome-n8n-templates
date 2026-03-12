# ⚡ View fantasy football roster details with Sleeper API and Telegram chatbot

> ⚡ **228 views** · ⚡ [Personal Productivity](../)

## Description

# Sleeper NFL Team Chatbot Starter

A Telegram chatbot built to look up your fantasy football team in the Sleeper app and return your roster details, player names, positions, and team info.

This starter workflow is perfect for users who want a simple, conversational way to view their Sleeper team in-season or pre-draft.

---

## What It Does

When a user types their **Sleeper username** into Telegram, this workflow:
1. Extracts the username from Telegram
2. Pulls their **Sleeper User ID**
3. Retrieves their **Leagues** and selects the first one (by default)
4. Pulls the full league **Rosters**
5. Finds the **matching roster** owned by that user
6. Uses `player_id`s to **look up full player info** from a connected database (e.g. Airtable or Google Sheets)
7. Returns a clean list of **player names, positions, and teams** via Telegram

---

## Requirements

To get this running, you’ll need:

- A **Telegram bot** (set up through BotFather)
- A Sleeper Fantasy Football account
- A synced **player database** that matches `player_id` to full player details (we recommend using the companion template: **Sleeper NFL Players Daily Sync**)

---

## Setup Instructions

1. **Import the workflow** into your n8n instance
2. Add the required **credentials**:
   - Telegram (API Key from BotFather)
   - Airtable (or replace with another database method like Google Sheets or HTTP request to a hosted JSON file)
3. Trigger the workflow by sending your **exact Sleeper username** to the bot
4. Your full team roster will return as a formatted message

&gt; If the user is in multiple Sleeper leagues, the current logic returns the **first league found**. 

---

## Example Output

```
You have 19 players on your roster:
Cam Akers (RB - NO), Jared Goff (QB - DET), ...
```

---

## Customization Notes

- Replace **Telegram Trigger** with any other input method (webhook, form input, etc.)
- Replace **Airtable node** with Google Sheets, SQL DB, or even a local file if preferred
- You can **hardcode a Sleeper username** if you're using this for a single user


---

## Related Templates

- [Sleeper NFL Players Daily Sync](#) (syncs `player_id` to player name, position, team)
-Create Player Sync first then either integrate it to this template or reate a subworkflow from it & use most recent data set.


---

## Difficulty Rating & Comment (from the author)

- 3 out of 10 if this ain't you're first rodeo, respectfully. Just a little bit more work on adding the Players Sync as your data table & knowing how to GET from Sleeper.
- If you use Sleeper for fantasy football, lets go win some games!

---

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
