# 🔬 Weekly Facebook ads performance reports with AI-powered analysis & Gmail delivery

> ⚡ **982 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who’s it for
Perfect for **marketing agencies** that manage multiple Facebook ad accounts and want to automate their weekly reporting. It eliminates manual data collection, analysis, and client updates by delivering a ready-to-share PDF report.

## How it works
Every Monday, the workflow:
1. Fetches the previous week’s campaign metrics from the Facebook Graph API.  
2. Formats and summarizes each campaign’s performance using OpenAI.  
3. Merges all summaries into one comprehensive report with insights and next-week suggestions.  
4. Converts the report into a polished PDF using any PDF generation API.  
5. Sends the final PDF report automatically to the client via Gmail.

## How to set up
1. Connect your **Facebook**, **OpenAI**, and **Gmail** accounts in n8n.  
2. Add credentials for your preferred PDF generator (e.g., PDFCrowd, Placid, etc.).  
3. Open the “Set Node” to customize recipient email, date range, or report text.  

## Requirements
- Facebook Graph API access token  
- OpenAI API key  
- Gmail credentials  
- API key for your PDF generation service  

## How to customize
You can modify the trigger day, personalize the report design, or include additional analytics such as ROAS, CPC, or conversion data for deeper insights.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
