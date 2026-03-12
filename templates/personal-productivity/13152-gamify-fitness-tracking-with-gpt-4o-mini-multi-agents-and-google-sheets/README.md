# ⚡ Gamify fitness tracking with GPT-4o-mini multi-agents and Google Sheets

> ⚡ **39 views** · ⚡ [Personal Productivity](../)

## Description

Title:
Gamify fitness tracking with AI multi-agents and Google Sheets
## Overview
This template transforms fitness tracking into a gamified pirate adventure using AI multi-agents. It scores your health activities and assigns a dynamic "Bounty" reward.

## How it works
1. **Fetch Data**: Retrieves your current "Bounty" from Google Sheets.
2. **AI Analysis**: A central AI Scorer evaluates your report (meals, workouts, or injuries) and assigns a score from 0-100.
3. **Logic**: JavaScript calculates the bounty increase based on the AI's score.
4. **Routing**: The Switch node routes you to a specialized agent (Chef, Samurai, Doctor, or Navigator).
5. **Logging**: Saves the conversation to Google Sheets for progress tracking.

## Setup steps
1. **Google Sheets**: Create a sheet with two tabs:
   - `Profile` (Columns: ID, Total_Bounty)
   - `Log` (Columns: Date, Crew, Inquiry, Response)
2. **Spreadsheet ID**: Replace `YOUR_SPREADSHEET_ID` in all 6 Google Sheets nodes.
3. **Credentials**: Connect your Google Sheets and AI (OpenRouter/OpenAI) accounts.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
