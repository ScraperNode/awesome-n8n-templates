# 🎣 Automate lead qualification & routing with GPT-4o-mini, Google Sheets & HighLevel CRM

> ⚡ **467 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Description
Automatically qualify and route new leads from a Google Sheet into your CRM with AI-powered scoring and instant sales notifications. Turn raw form submissions into prioritized opportunities—effortlessly. ⚡

## What This Template Does
- Monitors a Google Sheet for new form submissions. 📄
- Uses Azure OpenAI (GPT-4o-mini) to analyze lead details (value, stage, company) and generate action items. 🤖
- Parses the AI response into clean JSON for structured processing. 🗂️
- Saves qualified lead data and AI-generated action items into a Lead Status sheet for tracking. 💾
- Categorizes leads into Hot, Warm, or Cold based on AI scoring. 🔥❄️
- Creates/updates the contact in HighLevel CRM. 📇
- Sends an email notification to the assigned sales rep with lead details and priority. 📧

## Key Benefits
- Save time with automated lead qualification instead of manual checks. ⏱️
- Ensure consistent Hot/Warm/Cold scoring across all leads. ✅
- Centralize lead data in both Google Sheets and CRM for tracking. 📊
- Keep sales teams aligned with instant notifications. 🚀
- Fully no-code configurable and customizable for your business logic. 🧩

## Features
- Google Sheets Trigger for new form rows. 📥
- AI Agent with Azure OpenAI (GPT-4o-mini) for lead scoring. 🧠
- JSON parsing node to clean AI output. ✂️
- Lead logging to “Lead Status” sheet. 📊
- Function node to categorize leads by score. 🎯
- CRM sync with HighLevel to update/create contact records. 🔗
- SMTP email notification to sales reps. ✉️

## Requirements
- n8n instance (cloud or self-hosted). 🧰
- Google Sheet with headers: Lead Name, Lead Email, Lead Contact No., Company Name, Opportunity Value, Stage of Lead; shared with n8n Google account. 📑
- Azure OpenAI access with a GPT-4o-mini deployment. ☁️
- HighLevel CRM account connected via OAuth. 📇
- SMTP email account configured in n8n. 📧

## Target Audience
- Sales teams handling inbound leads. 📈
- Agencies managing multiple client pipelines. 🤝
- Founders/startups wanting quick qualification and CRM sync. 🚀
- Ops teams needing reliable reporting of lead qualification. 🗂️

## Step-by-Step Setup Instructions (Concise)
- Create a Google Sheet with required headers; share with n8n account. 📋
- Configure the Google Sheets Trigger with the sheet’s Document ID. 🔐
- Connect your Azure OpenAI credentials and link to the AI Agent node. 🧠
- Assign your HighLevel CRM account credentials. 📇
- Set up SMTP credentials for the email send node. ✉️
- Import the workflow, update node configs, and run a test submission. ▶️

## Security Best Practices
- Share Google Sheets only with the n8n Google account (Editor). 🔒
- Keep API keys and credentials encrypted in n8n, not hardcoded. 🛡️
- Validate AI outputs before saving to CRM (via the parse node). ✅
- Regularly back up your Lead Status sheet and CRM data. 📂

## 🔗 Nodes Used

Send Email, Function, Google Sheets, HighLevel, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
