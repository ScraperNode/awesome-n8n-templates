# 🎬 Send scheduled IELTS grammar, writing and reading practice via Telegram with Gemini AI

> ⚡ **221 views** · 🎬 [Content Creation & Video](../)

## Description

## 🚀 Overview

This workflow automatically generates IELTS practice content using AI and sends it to Telegram on a schedule.

It covers three key IELTS skills:
- 🧠 Grammar Practice (Monday)
- ✍️ Writing Task (Wednesday)
- 📘 Reading Practice (Friday)

The workflow is designed to deliver structured, clean, and readable exercises directly to your Telegram chat.

---

## ⚙️ How it works

1. The Schedule Trigger runs the workflow on specific days
2. The "Select Test by Day" node determines which practice to generate
3. AI generates structured IELTS content in JSON format
4. The output is parsed and formatted into readable messages
5. Long messages are split into chunks
6. The content is sent to Telegram

---

## 🧩 Features

- AI-powered IELTS content generation
- Clean JSON parsing and formatting
- Telegram-ready message delivery
- Automatic scheduling by day
- Supports multiple IELTS skills in one workflow

---

## 🛠 Setup

1. Create a Telegram Bot via @BotFather
2. Copy your Bot Token
3. Add Telegram credentials in n8n
4. Add your AI credentials (Gemini or OpenAI)
5. Replace the Chat ID in the "Send" nodes with your own

---

## 📩 Telegram Setup

To get your Chat ID:
1. Send a message to your bot
2. Open:
   https://api.telegram.org/bot&lt;TOKEN&gt;/getUpdates
3. Copy the `chat.id`

---

## ⚠️ Important Notes

- This workflow uses a fixed Chat ID for scheduled messages
- Make sure to replace the Chat ID before running
- Do not hardcode sensitive credentials
- Ensure the AI output format remains consistent (JSON)

---

## 💡 Customization

You can easily customize:
- Topics and difficulty level
- Message format
- Schedule timing
- Add new modules (e.g., Speaking, Vocabulary)

---

## 🎯 Use Cases

- IELTS learners who want daily practice
- Teachers sharing exercises with students
- Automated English learning systems
- AI-powered educational bots

---

## 🚀 Creator Note

This workflow demonstrates how to combine AI generation, structured parsing, and messaging automation into a scalable learning system.

Feel free to adapt and extend it for your own use case.

## 🔗 Nodes Used

Telegram, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
