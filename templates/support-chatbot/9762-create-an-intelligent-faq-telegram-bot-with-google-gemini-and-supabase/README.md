# 💬 Create an intelligent FAQ Telegram bot with Google Gemini and Supabase

> ⚡ **333 views** · 💬 [Support Chatbots](../)

## Description

Overview This template creates a smart FAQ bot on Telegram, powered by Google Gemini for intelligent answers and Supabase to store user data. The workflow can distinguish between new and existing users.

How It Works

Trigger: The workflow starts when a user sends any message to the Telegram Bot.

Check User: It looks up the user's chat_id in a Supabase telegram_users table.

Route (New vs. Existing):

New User (True Path): If the user is not found, the workflow saves their chat_id to Supabase and sends a one-time welcome message.

Existing User (False Path): If the user exists, the workflow proceeds to the AI step.

Generate Answer: It loads a predefined FAQ context and combines it with the user's question. This is sent to Google Gemini via the AI Agent node.

Send Response: The AI-generated answer is sent back to the user on Telegram.

Setup Instructions

Telegram:

Connect your Telegram credentials to the Telegram Trigger and both Send a text message nodes.

Supabase:

Connect your Supabase credentials to the Find user in DB and Create a row nodes.

You MUST have a table named telegram_users.

This table MUST have a column named chat_id (type: text or varchar).

Google Gemini:

Connect your Google Gemini (Palm API) credentials to the Google Gemini Chat Model node.

(REQUIRED) Customization:

Open the Set FAQ Context node and change its contents with Questions (Q) and Answers (A) that are appropriate for your bot.

Change the text in the Send a text message (Welcome Message) node as you want.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Supabase, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
