# ⚡ Manage Telegram task reminders with Claude and n8n data tables

> ⚡ **397 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow turns Telegram into a personal task manager by using Anthropic Claude to create, update, list, and delete tasks stored in an n8n Data Table, while also sending scheduled daily task summaries and automatically rolling forward overdue recurring tasks.

## How it works
1. Triggers when a new Telegram message arrives and checks whether the sender’s Telegram user ID is authorized.
2. If authorized, sends the message and conversation context to Anthropic Claude, which decides whether to read, add, update, or delete tasks in an n8n Data Table and asks for confirmation before updates or deletions.
3. Sends Claude’s response back to the user in Telegram.
4. Runs at 9am, 2pm, and 6pm to prompt Claude to fetch pending tasks from the n8n Data Table and send a summary reminder via Telegram.
5. Runs at 1am to prompt Claude to find tasks that are past due and update their due dates to the current day.

## Setup
1. Create a Telegram bot with @BotFather, add Telegram API credentials in n8n, and start a chat with the bot.
2. Add an Anthropic API credential for the Claude chat model used by the workflow.
3. Create an n8n Data Table named “Tasks” with columns taskname, duedate, Priority, Notes, and Recurrence, then link the Data Table tool nodes to that table.
4. Set the authorized Telegram user ID in the authorization check and replace the placeholder chat ID in the Telegram “send message” step with your Telegram chat ID.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Schedule Trigger, AI Agent, Anthropic Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
