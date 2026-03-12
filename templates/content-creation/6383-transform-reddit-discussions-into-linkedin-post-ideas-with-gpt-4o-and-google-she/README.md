# 🎬 Transform Reddit discussions into LinkedIn post ideas with GPT-4o and Google Sheets

> ⚡ **1,050 views** · 🎬 [Content Creation & Video](../)

## Description

## Who’s it for  
This workflow is for **marketers, founders, and content strategists** who want to identify **business opportunities** by analyzing Reddit discussions. It’s ideal for **B2B, SaaS, and tech professionals** looking for fresh LinkedIn post ideas or trend insights.

## How it works / What it does  
This workflow automatically:  
1. **Fetches Reddit posts & comments** based on a selected subreddit and keyword.  
2. **Extracts pain points & insights** using OpenAI (ChatGPT) to identify key frustrations and trends.  
3. **Generates LinkedIn post ideas** with headlines, hooks, and CTAs tailored for professional audiences.  
4. **Saves all results into Google Sheets** for easy tracking, editing, and sharing.

It uses AI to turn unstructured Reddit conversations into actionable content marketing opportunities.

## How to set up  
1. Clone this workflow in your n8n instance.  
2. **Configure credentials**:  
   - **Reddit OAuth2** (for fetching posts & comments)  
   - **OpenAI API key** (no hardcoding—use credentials in n8n)  
   - **Google Sheets OAuth2** (for output)  
3. Run the workflow or trigger it using the built-in **Form Trigger** (provide subreddit & keyword).  
4. Check the generated **Google Sheet** for analyzed insights and post suggestions.

## Requirements  
- n8n (self-hosted or cloud)  
- Reddit account with API credentials  
- OpenAI API key (GPT-4o recommended)  
- Google Sheets account  

## How to customize the workflow  
- Change the **AI prompt** to adjust tone or depth of insights.  
- Add filtering logic to target posts with higher engagement.  
- Modify the Google Sheets output schema to include custom fields.  
- Extend it with Slack/Email notifications to instantly share top insights.

## 🔗 Nodes Used

Google Sheets, Reddit, Filter, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
