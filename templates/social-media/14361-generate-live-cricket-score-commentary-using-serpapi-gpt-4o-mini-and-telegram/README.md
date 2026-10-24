# 📱 Generate live cricket score commentary using SerpAPI, GPT-4o-mini, and Telegram

> ⚡ **135 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 📘 Description
 This workflow is a real-time AI-powered cricket commentary bot that continuously monitors live match data and converts it into short, expert-style insights. It fetches live cricket scores every few seconds, extracts key match details, generates commentary using AI, and delivers updates instantly to Telegram. It also includes fail-safe mechanisms via email and Slack alerts to ensure reliability. 

## ⚙️ Step-by-Step Flow
1. Every 10 Seconds Trigger (Schedule)
2.  Runs continuously at a 10-second interval to keep match updates near real-time. 
3. Fetch Live Cricket Score (SerpAPI Node)
4.  Queries Google for live India cricket match data using SerpAPI. 
5. Extract Latest Match Data (Function Node)
6.  Pulls structured match details: 
 - Team names 
 - Scores 
 - Match result/status 
 - Tournament 
7. Skip If No Match Result (IF Node)
8.  Prevents unnecessary processing when no valid match data is available. 
9. Generate AI Match Commentary (OpenAI GPT-4o-mini)
10.  Transforms raw match data into structured insights: 
 - Match summary 
 - Key turning point 
 - Best performance 
 - Tactical insight
 - Maintains expert tone and concise commentary style. 
11. Send Commentary to Telegram (Telegram Node)
12.  Delivers formatted commentary instantly to a Telegram chat using Markdown. 
13. Email Alert on AI Failure (Gmail Node)
14.  If AI generation fails: 
 - Sends an email alert 
 - Ensures manual follow-up 
15. Error Trigger → Slack Alert
16. Catches any workflow-level failures and sends alerts to a Slack channel for monitoring. 

## 🧩 Prerequisites
 • SerpAPI credential (for live scores)
 • OpenAI API (GPT-4o-mini)
 • Telegram Bot + chat ID
 • Gmail OAuth2 (for failure alerts)
 • Slack API (optional for error monitoring) 

## 💡 Key Benefits
 ✔ Near real-time cricket updates (10s interval)
 ✔ AI-generated expert commentary (not raw scores)
 ✔ Automated delivery to Telegram
 ✔ Failure-safe alerts via email + Slack
 ✔ Fully hands-off live match tracking 

## 👥 Perfect For
-  Cricket Telegram channels and communities
-  Sports commentary automation systems
-  Live score notification bots
-  Fan engagement platforms for real-time updates

## 🔗 Nodes Used

Function, Slack, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
