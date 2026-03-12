# 🔧 Retrieve deadlock game match statistics and send to Telegram

> ⚡ **166 views** · 🔧 [Miscellaneous](../)

## Description

Deadlock Match Stats Bot is an automated workflow for n8n designed to send detailed player statistics from the most recent Deadlock match directly to Telegram. When the user sends the /match command to the Telegram bot, the workflow performs the following steps:

Loads the HTML content of the player's profile page from deadlocktracker.gg using a preconfigured Steam ID.

Extracts the most recent match ID using a regular expression from the embedded JavaScript data.

Loads the HTML page for the specified match.

Parses the match page using cheerio to extract relevant data for each player, including their nickname, selected hero, and current rank.

Formats the collected information into a single message and sends it to the Telegram chat that issued the command.

## 🔗 Nodes Used

Function, HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
