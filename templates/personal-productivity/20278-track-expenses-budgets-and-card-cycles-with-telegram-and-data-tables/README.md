# ⚡ Track expenses, budgets and card cycles with Telegram and Data Tables

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow lets you track expenses by sending messages or receipt photos to a Telegram bot, stores records in an n8n Data Table, and provides budget status, credit-card statement cycle summaries, due-date reminders, and monthly CSV exports back to Telegram.

## How it works
1. Triggers when a new Telegram message arrives or every morning at 08:00 on a schedule.
2. Parses the Telegram text or photo caption to detect amount, note, category, month, optional card tag (for payment method), and optional receipt photo file ID.
3. If the message is an expense entry, saves it to the n8n Data Table and replies in Telegram with a confirmation plus current-month category budget progress and the relevant card statement total/close/due dates (if a card is used).
4. If the message is a command, reads the sender’s expenses from the Data Table and returns either a month-by-category report with month-over-month comparison, a budget overview, or credit-card cycle/statement/due-date details in Telegram.
5. If the command is /export, formats the selected month’s expenses as a CSV file and sends the CSV document to the Telegram chat.
6. If the command is /undo, deletes the most recently created expense for that chat and confirms the removal in Telegram.
7. On the daily schedule, scans all stored expenses to find chats with card statements due soon and sends Telegram reminders when the due date is within the configured reminder window.

## Setup
1. Create a Telegram bot with @BotFather, add a Telegram API credential in n8n, and select it in each Telegram Trigger/Send node.
2. Create an n8n Data Table named expenses with columns chat_id, category, note, month, spent_at, payment, receipt_file_id (string) and amount (number).
3. Update the Config values for currency/locale/timezone, category keywords, monthly budgets, and your cards (tag, name, closingDay, dueDay) plus reminderDaysBefore.
4. Activate the workflow and ensure your n8n instance is reachable via a public HTTPS URL so Telegram can deliver webhook updates to the Telegram trigger.

## Requirements
- n8n with Data Tables (n8n Cloud or self-hosted, tested on n8n 2.30)
- A Telegram bot token from @BotFather (free)
- A public HTTPS URL for the Telegram webhook (n8n Cloud, or self-hosted behind a tunnel or reverse proxy)
- No OpenAI or other paid API key needed

## Customization
- Add your own categories and keywords in Config (categoryKeywords); messages can also use #category tags
- Set a monthly budget per category in Config (budgets)
- Add as many credit cards as you like, each with its own closingDay and dueDay, and change reminderDaysBefore
- Change currency, locale and timezone (e.g. USD / en-US); turn off smallNumbersAreThousands if "50" should mean 50, not 50,000
- Change the reminder time in the "Every morning 08:00" Schedule node

## Additional info
Amounts like 50k, 1.2tr, 120.000 or 12.50 are parsed in code, so there is no AI cost per message. Each Telegram chat keeps its own data, so one bot can serve a family or a small team. Statement math handles short months (closing day 31 = last day of the month) and back-dated expenses ("@25/09"). Tested end-to-end on a real n8n server with 16 scenarios: adding expenses, budgets at 80% and over 100%, /cards, /budget, /report, /export to CSV, /undo and the morning due-date reminder. Only need simple tracking without cards and budgets? Use the free template "Track Telegram expenses with Data Tables and monthly reports".

## 🔗 Nodes Used

Telegram, Telegram Trigger, Schedule Trigger, Convert to File, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
