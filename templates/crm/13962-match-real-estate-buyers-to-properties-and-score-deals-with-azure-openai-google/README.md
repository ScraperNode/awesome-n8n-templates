# 🤝 Match real estate buyers to properties and score deals with Azure OpenAI, Google Sheets, Drive and Gmail

> ⚡ **119 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 📊 Description
Automate your entire real estate sales pipeline with an AI-powered deal-making agent that captures buyer leads, matches them with suitable properties, delivers property decks, and predicts deal closing probability. 🏠🤖 This workflow intelligently deduplicates incoming leads, compares buyer preferences with available listings, and automatically sends relevant property brochures. It also analyzes buyer engagement to predict deal success and recommend next actions for your sales team. The result is a fully automated real estate sales assistant that saves time, improves lead management, and increases deal conversion rates.

## What This Template Does
📥 Capture buyer leads via a webhook from forms, landing pages, or CRM systems.
🤖 Check for duplicate leads using an AI agent that compares new entries against CRM records.
📊 Store verified leads in Google Sheets for structured pipeline tracking.
🔍 Match buyers with properties using AI to compare preferences with the property database.
📂 Retrieve property decks from Google Drive based on matched property details.
📧 Send personalized property brochures directly to the buyer via Gmail.
📝 Log buyer interactions back to Google Sheets for visibility and tracking.
⏰ Run periodic deal analysis using a Cron trigger to evaluate buyer engagement.
📈 Predict closing probability and generate deal stage insights with an AI scoring agent.
📩 Notify the sales team with recommended follow-up actions and deal priorities.

## Key Benefits
✅ Automates the entire real estate lead-to-deal workflow
 ✅ Eliminates duplicate leads with AI-powered CRM checks
 ✅ Instantly matches buyers with relevant property listings
 ✅ Automatically delivers property brochures to prospects
 ✅ Predicts deal closing probability for smarter sales prioritization
 ✅ Keeps sales teams updated with actionable insights and follow-ups

## Features
- AI-powered lead deduplication agent
- Intelligent property matching using buyer preferences
- Google Sheets CRM for buyer and property tracking
- Automated property deck retrieval from Google Drive
- Automated Gmail email delivery to buyers
- AI deal scoring agent predicting closing probability
- Scheduled sales intelligence reports using Cron triggers
- Modular design allowing easy LLM replacement or CRM integration

## Requirements
- Azure OpenAI API credentials
- Google Sheets OAuth connection
- Google Drive OAuth connection
- Gmail OAuth connection
- n8n instance (self-hosted or cloud)

## Target Audience
🏢 Real estate agencies and brokerages
📈 Property sales teams managing multiple leads
🧑‍💻 Real estate automation builders using n8n
🚀 PropTech startups building AI-driven sales workflows

## 🔗 Nodes Used

Cron, Google Sheets, Webhook, Gmail, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
