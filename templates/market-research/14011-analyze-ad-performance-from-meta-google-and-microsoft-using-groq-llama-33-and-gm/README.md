# 📊 Analyze ad performance from Meta, Google and Microsoft using Groq Llama 3.3 and Gmail

> ⚡ **50 views** · 📊 [Market Research & Insights](../)

## Description

## How it works
This workflow automatically generates a detailed AI-powered 
campaign performance report across Meta, Google and Microsoft 
Ads and emails it to your team every month.

It reads campaign data from three tabs in a Google Sheet 
(Google, Meta, Microsoft), merges all rows, and passes them 
to a Code node that calculates KPIs and builds a structured 
prompt. Groq AI (Llama 3.3 70B) then analyzes the data and 
generates expert insights. A second Code node combines the 
KPIs and AI analysis into a full HTML email with platform 
tables, charts, benchmarks and recommendations — sent 
automatically via Gmail.

## Setup steps
1. Create a Google Sheet with 3 tabs: Google, Meta, Microsoft
2. Paste your monthly ad exports into the matching tab
3. Connect your Google account in the 3 Sheets nodes and 
   select the correct tab in each
4. Add your Groq API key in the HTTP Request node header
5. Connect your Gmail account in the Send node and set your 
   recipient email
6. Activate — the workflow runs automatically on schedule

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
