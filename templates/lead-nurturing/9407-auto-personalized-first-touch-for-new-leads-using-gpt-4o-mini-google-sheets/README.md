# 💬 Auto-personalized first touch for new leads using GPT-4o-mini & Google Sheets

> ⚡ **56 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Description
Generate personalized first-touch messages for every new lead — automatically. This workflow researches each company using AI, crafts a natural opener referencing their mission or focus, and writes the result back to your Google Sheet. Perfect for SDRs, founders, and marketers who want outreach personalization without the manual work. ✨

## What This Template Does
- Fetches lead data from Google Sheets (e.g., company, geography, category). 📄
- Uses Azure OpenAI GPT-4o-mini to research each company’s mission, focus, and audience. 🧠
- Generates a 2-sentence personalized message tailored for outreach. 💬
- Parses AI output into structured fields (company info + message). 🧩
- Writes the personalized message back to the original sheet for tracking. 💾
- Runs in batches to process leads one by one efficiently. 🔁

## Key Benefits
- Create authentic, tailored messages for every lead — instantly. 🚀
- Save hours of manual research and copywriting. ⏱️
- Keep all personalization data centralized in Google Sheets. 📊
- Scalable and repeatable for any lead list. ♻️
- Uses cost-efficient GPT-4o-mini for fast responses. ⚡

## Features
- Manual or scheduled trigger to process new leads. ▶️
- Google Sheets integration for lead data input/output. 🔗
- AI research and personalization via Azure OpenAI GPT-4o-mini. 🤖
- Structured JSON parsing for clean, usable output. ✨
- Automatic update to the “Personalised message” column in your sheet. 💬
- Visual documentation with sticky notes for clarity. 🗒️

## Requirements
- n8n instance (cloud or self-hosted). 🧰
- Google Sheet with columns: Account, Geography, Category, Personalised message. 📑
- Azure OpenAI API connection (GPT-4o-mini). ☁️
- Google Sheets OAuth credentials linked to n8n. 🔐

## Target Audience
- SDRs and sales teams scaling personalized outreach. 🎯
- B2B marketers automating LinkedIn or email personalization. 💌
- Founders or agencies building warm first-touch messages for prospects. 🤝

## Step-by-Step Setup Instructions (Concise)
- Prepare a Google Sheet with required columns. 📋
- Connect Google Sheets credentials in n8n. 🔑
- Add your Azure OpenAI connection and set model to GPT-4o-mini. 🧠
- Import and test the workflow with a few sample leads. 🧪
- Adjust message tone or structure in the system prompt if needed. 🧩
- Run manually or schedule the workflow for automation. ⏰

## Security Best Practices
- Share your Google Sheet only with the n8n service account (Editor access). 🔒
- Keep API keys and credentials stored securely in n8n. 🛡️
- Validate AI outputs before using them in outreach tools. ✅
- Regularly back up your sheet and clean old data. 🧹

## 🔗 Nodes Used

Google Sheets, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
