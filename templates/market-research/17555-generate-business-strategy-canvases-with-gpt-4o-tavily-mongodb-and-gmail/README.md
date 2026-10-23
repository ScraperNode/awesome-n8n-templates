# 📊 Generate business strategy canvases with GPT-4o, Tavily, MongoDB and Gmail

> ⚡ **66 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs a chat-based AI consultant that researches your market with Tavily, generates a Business Model Canvas, Lean Canvas, and/or SWOT analysis, converts the results into a multi-sheet Excel file, and emails it to you via Gmail while keeping conversation context in MongoDB.

## How it works
1. Receives a new message in an n8n Chat session and passes it to an OpenAI (GPT-4o) agent.
2. Uses MongoDB-backed chat memory and Tavily web search/research to ask targeted questions and build research-backed canvas content during the conversation.
3. Detects when the agent signals completion by including the marker [CANVAS_READY] in its chat output.
4. Extracts the confirmed canvas details from the full conversation into a structured JSON format using OpenAI with a strict schema parser.
5. Generates an Excel (.xlsx) workbook with one sheet per selected canvas plus a positioning/next-steps sheet.
6. Sends the Excel file as a Gmail attachment and posts a short confirmation message back in the chat.

## Setup
1. Add an OpenAI API credential (GPT-4o) for both the canvas-generation agent and the structured data extraction step.
2. Provide a Tavily API key and replace the hardcoded key in both HTTP requests to https://api.tavily.com/search.
3. Add a MongoDB credential and ensure the database N8N_Business_model_canvas_generator exists (or update the database name in the chat memory configuration).
4. Add a Gmail OAuth2 credential and set the recipient address/logic for where the generated canvases should be emailed.
5. Test the n8n Chat trigger in your environment and confirm the chat UI/webhook configuration is reachable before activating the workflow.

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, Chat Trigger, MongoDB Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
