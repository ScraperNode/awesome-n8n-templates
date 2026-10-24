# ⚡ Track remote n8n AI jobs and tailor resumes with Groq, RapidAPI and Telegram

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

Never miss a **high-match job opportunity** again. This workflow automatically hunts for **remote AI and automation roles** (specifically targeting n8n, Python, and AI stack), analyzes them using AI to filter out fluff, and **alerts you instantly** via Telegram while maintaining a database in Google Sheets.

## Who’s it for
- **Automation Engineers** looking for n8n-specific roles.
- **AI Developers** seeking remote opportunities in the Indian market.
- **Job Seekers** who want to save time on manual searches and fluff analysis.

## **How it works**
1. **Schedule**: The workflow triggers automatically (configured for weekly, can be set to daily).
2. **Job Search**: It queries the JSearch API via RapidAPI to find remote "AI workflow automation (n8n)" roles in India posted within the last week.
3. **Filtration**: An IF node filters the results to ensure only jobs explicitly mentioning "n8n" in the description proceed.
4. **AI Analysis**: Each job is sent to an AI Agent (via Groq). The AI extracts a concise tech stack, specific automation experience required, and key benefits, stripping away the recruitment fluff.
5. **Data Storage**: The analyzed details are appended to a Google Sheet for long-term tracking.
6. **Instant Alert**: High-match roles are sent to your Telegram bot with a direct application link.

## Set up steps
1. **RapidAPI**: Create a free account on RapidAPI, subscribe to "JSearch," and replace the x-rapidapi-key in the Fetch Remote Jobs node.
2. **Google Sheets**: Create a sheet with columns: Job Title, Company, Tech Stack, Job Type, and Apply Link. Connect your Google account.
3. **Groq**: Obtain a free API key from Groq Cloud and connect it to the Groq Chat Model node.
4. **Telegram**: Create a bot via @BotFather, get your Chat ID via @userinfobot, and update the Alert Telegram node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Docs, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
