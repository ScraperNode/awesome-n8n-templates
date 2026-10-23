# 🎬 Generate English–Polish vocabulary quizzes with Google Sheets and Groq

> ⚡ **142 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Tool useful for any language exams.
It is a chat-based workflow that  uses Google Sheets in Structure English|your language that using free Groq model (Llama 3.3) generate lists of 10 words that you need to provide answer based on your while model helps

## How it works
1. Receives a chat message as the trigger input.
2. Checks whether the message contains the word “generate” to decide if it should create a new quiz set or continue the current session.
3. When “generate” is included, reads vocabulary rows (English and your language columns) from a specified Google Sheets range.
4. Randomly shuffles the rows, selects 10 pairs, and formats them as a clean list of {english, your-language} objects.
5. Sends the user message and the selected word pairs to a Groq Llama 3.3 chat model that runs the quiz conversation.
6. Uses a buffer memory window to keep recent chat context so the agent can track which words are answered and which still need guesses.

## Setup
1. Connect Google Sheets OAuth credentials and set the correct spreadsheet URL, sheet name, and range that contains “English word” and “your language words” columns.
2. Add Groq API credentials and confirm the selected model (llama-3.3-70b-versatile) is available in your Groq account.
3. Activate the workflow and start the chat, sending a message containing “generate” to pull a new randomized set of 10 words from Google Sheets.

## 🔗 Nodes Used

Google Sheets, AI Agent, Simple Memory, Chat Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
