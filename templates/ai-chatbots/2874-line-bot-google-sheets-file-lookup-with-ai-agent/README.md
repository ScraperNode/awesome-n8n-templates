# 🤖 LINE BOT - Google Sheets file lookup with AI agent

> ⚡ **1,031 views** · 🤖 [AI Chatbots & Agents](../)

## Description

This workflow integrates LINE BOT, AI Agent (GPT), Google Sheets, and Google Drive to enable users to search for file URLs using natural language. The AI Agent extracts the filename from the message, searches for the file in Google Sheets, and returns the corresponding Google Drive URL via LINE BOT.

- Supports natural language queries 
(e.g., "Find file 1.pdf for me")
- AI-powered filename extraction
- Google Sheets Lookup for file URLs
- Auto-response via LINE BOT

![image.png](fileId:934)

## How to Use This Template

**1. Download & Import**
- Copy and save the Template Code as a .json file.
- Go to n8n Editor → Click Import → Upload the file.

**2. Update Required Fields**
- Replace YOUR_GOOGLE_SHEET_ID with your actual Google Sheet ID.
- Replace YOUR_LINE_ACCESS_TOKEN with your LINE BOT Channel Access Token.

**3. Activate & Test**
- Click Execute Workflow to test manually.
- Set Webhook URL in LINE Developer Console.

## Features of This Template
- Supports Natural Language Queries (e.g., “Find file 1.pdf for me”)
- AI-powered filename extraction using OpenAI (GPT-4/3.5)
- Real-time file lookup in Google Sheets
- Automatic LINE BOT Response
- Fully Automated Workflow

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
