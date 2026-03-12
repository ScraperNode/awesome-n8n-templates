# 🎣 Monitor Reddit for sales opportunities with GPT-4o and create Asana tasks

> ⚡ **97 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

![image.png](fileId:3851)
## 📊 Description
Automate sales opportunity discovery by continuously analyzing Reddit discussions for real buying intent using AI. 🔍🤖 This workflow runs every two hours, searches Reddit posts via Google, evaluates each discussion with a conservative AI model, and determines whether it represents a genuine sales opportunity. High-quality opportunities are enriched with intent level, problem summary, confidence score, and recommended next action—then automatically converted into Asana tasks with real-time Google Chat alerts. Ideal for sales and growth teams looking to capture demand signals without manual monitoring. 🚀📊

## 🔁 What This Template Does
1️⃣ Runs automatically every 2 hours using a scheduled trigger. ⏰
 2️⃣ Searches Google for Reddit posts containing buying-intent keywords. 🔍
 3️⃣ Extracts Reddit titles, snippets, and post URLs from search results. 🌐
 4️⃣ Processes each Reddit post individually to avoid batching issues. 🔄
 5️⃣ Uses an AI agent to analyze intent based strictly on post text. 🤖
 6️⃣ Determines whether the post is a real sales opportunity. 🚦
 7️⃣ Classifies intent level as High, Medium, or Low. 📊
 8️⃣ Summarizes the core problem and suggests a reasonable next action. 📝
 9️⃣ Assigns a confidence score (0–100) for opportunity strength. 🎯
 🔟 Routes opportunities based on intent level.🔀
 1️⃣1️⃣ Creates Asana tasks for qualified leads with full AI context attached. 📋
 1️⃣2️⃣ Sends real-time Google Chat alerts for sales visibility. 💬
 1️⃣3️⃣ Triggers Gmail alerts automatically if any workflow error occurs. 🚨

## ⭐ Key Benefits
✅ Discovers real buyer intent from organic Reddit conversations
 ✅ Eliminates manual Reddit scanning and lead qualification
 ✅ Uses conservative AI logic to avoid false positives
 ✅ Automatically turns insights into actionable sales tasks
 ✅ Provides confidence scores and problem summaries for context
 ✅ Keeps sales teams informed with instant Google Chat alerts

## 🧩 Features
- Scheduled Reddit discovery via Google Search (SerpApi)
- AI-based opportunity detection using GPT-4o-mini
- Strict structured JSON output for reliable automation
- Intent-based routing (Low / Medium / High)
- Automated Asana task creation with detailed notes
- Google Chat alerts for real-time notifications
- Gmail-based error handling
Scalable batch-safe processing

## 🔐 Requirements
- SerpApi API key
- OpenAI API key (GPT-4o-mini recommended)
- Asana OAuth2 credentials
- Google Chat OAuth2 credentials
- Gmail OAuth2 credentials (for error alerts)

## 🎯 Target Audience
- B2B sales and outbound teams
- Growth and demand-generation teams
- SDR and lead qualification teams
- SaaS founders monitoring market demand
- RevOps and automation teams

## 🔗 Nodes Used

Asana, Cron, Gmail, Google Chat, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
