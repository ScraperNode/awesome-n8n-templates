# 📱 Automated quiz delivery from Google Sheets to Telegram with status tracking

> ⚡ **688 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview
This workflow automates quiz delivery from a Google Sheet directly into a Telegram group. It ensures that quizzes are posted one by one as polls, and once a quiz is sent, its status in the sheet is automatically updated to prevent duplication. If no pending quiz is available, the workflow notifies a separate Telegram channel to refill the sheet.

## Target Audience
This template is designed for teachers, community managers, and Telegram group admins who want an easy way to run quizzes, trivia games, or knowledge checks without manual posting.

## Problem It Solves
Manually sending quizzes is repetitive and prone to mistakes (like re-posting the same question). This template ensures quizzes are sent in order, tracked, and managed automatically with minimal human effort.

## Requirements
- An active Google account with Google Sheets enabled  
- A Telegram bot token (via [BotFather](https://core.telegram.org/bots#botfather))  
- Chat IDs for both the quiz group and the notification group  

## Google Sheet Structure
Create a sheet with the following columns:  
quiz_number | question | option_a | option_b | option_c | option_d | status

- **status**: Use 🟨 for pending quizzes, ✅ once completed  

## Setup Instructions
1. Copy the workflow into your n8n instance.  
2. Add your Google Sheets credentials.  
3. Replace the `YOUR_SHEET_ID` placeholder with your sheet ID.  
4. Set environment variables:  
   - `TELEGRAM_BOT_TOKEN`  
   - `TELEGRAM_CHAT_ID` (for the group)  
   - `TELEGRAM_NOTIFY_CHAT_ID` (for refill notifications)  
5. Run the workflow.  

## Customization Options
- Adjust the sheet name if not using “Sheet1”  
- Change emoji markers (🟨 / ✅) to your preferred system  
- Modify the Telegram notification message

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
