# ⚡ Generate weekly grocery lists in Notion with automated email notifications

> ⚡ **171 views** · ⚡ [Personal Productivity](../)

## Description

## Who’s it for
Busy homemakers, creators, and anyone who wants a simple, no-cost way to plan weekly meals and get a ready-to-shop grocery list—without extra apps.

## What it does
Runs on a weekly Cron schedule, generates a grocery list, creates rows in your Notion database (Ingredient, Quantity, Status), and emails the list (optional Telegram confirmation). It includes a Notion connection check, detailed error notifications (email and optional Telegram), a success email with timestamp, and optional persistent logging to a Notion “Logs” database.

## Requirements
- Notion account + integration connected to your database  
- SMTP credentials for the Email node  
- (Optional) Telegram bot and chat ID for alerts  
- (Optional) Notion log database if you want persistent logs

## How to set up
1. Import the workflow and open **Set: Configuration** to fill:
   - `fromEmail`, `emailTo`, `notifyEmail`, `notionDb`, `telegramChatId`  
   - (Optional) `logToNotion` (true/false), `notionLogDb`
2. In Notion, create a DB with properties:
   - **Ingredient** (Title), **Quantity** (Rich text), **Status** (Select: “To Buy”)
3. Attach your **Notion** and **SMTP** credentials (and Telegram if used).
4. Run once to test, then set Cron to your preferred weekly time.

## How to customize
- Edit the recipe/grocery items in the Code node.
- Change the Cron schedule (test with “Every minute,” then revert to weekly).
- Enable Telegram alerts, and/or turn on Notion logging for audit trails.

## 🔗 Nodes Used

Cron, Send Email, Telegram, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
