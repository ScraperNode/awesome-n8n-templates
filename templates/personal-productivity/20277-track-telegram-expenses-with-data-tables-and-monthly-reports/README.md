# ⚡ Track Telegram expenses with Data Tables and monthly reports

> ⚡ **14 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow logs expenses sent as Telegram messages into an n8n Data Table and responds with confirmations, monthly spending reports by category, an undo option, and a help menu, all without external databases or AI services.

## How it works
1. Triggers when your Telegram bot receives a new message.
2. Parses the message to detect a command (/report, /undo, /help) or extract an expense amount, category (from keywords or a #tag), note, and month.
3. When an expense is detected, saves a normalized row to the n8n Data Table named `expenses` and sends a formatted confirmation back in Telegram.
4. When `/report` is sent (optionally with `YYYY-MM`), fetches that month’s rows for the sender’s chat ID from the `expenses` Data Table, aggregates totals by category, and sends a monthly summary back in Telegram.
5. When `/undo` is sent, retrieves the most recent expense row for the sender’s chat ID, deletes it from the `expenses` Data Table, and posts the undo result in Telegram.
6. When `/help` is sent or no amount is found, sends usage examples and available commands back in Telegram.

## Setup
1. Create a Telegram bot with @BotFather and add a Telegram API credential in n8n, then select it on the Telegram Trigger and Telegram send-message nodes.
2. Create an n8n Data Table named `expenses` with columns `chat_id` (string), `amount` (number), `category` (string), `note` (string), `month` (string), and `spent_at` (string).
3. Update the configuration values for `currency`, `locale`, `timezone`, and (optionally) `categoryKeywords` and `smallNumbersAreThousands` to match your formatting and categorization needs.
4. Activate the workflow and ensure your n8n instance is reachable over public HTTPS so Telegram can deliver trigger updates.

## Requirements
- An n8n version with Data Tables (Cloud or self-hosted; tested on n8n 2.30) and a Telegram bot token from @BotFather. No OpenAI key and no external database needed.

## Customization
- Edit categoryKeywords in the "Prepare Configuration Settings" node to match how you talk about money — first match wins, and typing #category in a message always overrides. Set smallNumbersAreThousands to false if "50" should mean 50 rather than 50,000.

## Additional info
Amounts are parsed in code, so the workflow runs at $0: it understands 50k, 1.5tr, 2m, 120.000, 1,250,000 and 12.50. Every query is filtered by Telegram chat ID, so several people can share one bot.

Need credit-card statement cycles (what lands on which statement and when it's due), morning due-date reminders, category budgets with alerts, month-over-month reports and CSV export? Search "Expense Tracker PRO" on n8n.io or see my creator page for the PRO version.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
