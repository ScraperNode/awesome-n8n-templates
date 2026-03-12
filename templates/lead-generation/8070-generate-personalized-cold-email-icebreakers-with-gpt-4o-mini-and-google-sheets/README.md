# 🎣 Generate personalized cold email icebreakers with GPT-4O-mini and Google Sheets

> ⚡ **674 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
This workflow helps you supercharge your cold email campaigns by enriching leads in Google Sheets with AI-generated personalization.  
For every lead in your sheet, the workflow:  
1. Fetches rows from Google Sheets  
2. Loops through each lead one by one  
3. Uses OpenAI to generate:  
   - A personalized cold email icebreaker  
   - A shortened version of the company name  
4. Saves the results back into your Google Sheet  

The result: a lead list that’s instantly ready for highly personalized cold outreach.  

## Setup steps
1. Connect your **Google Sheets account** and select the sheet with your leads.  
   - Your sheet should have columns like: first name, last name, company name, industry, city, etc.  
   - Adjust the column mapping in the “Update Row in Sheet” node to match your sheet’s structure.  
2. Connect your **OpenAI account** in the “Message a Model” node.  
3. Optionally, tweak the AI prompt to match your preferred tone of voice for icebreakers.  
4. Click **Execute Workflow** whenever you want to enrich your sheet with new personalized content.  

## Requirements
- OpenAI account (API key)  
- Google Sheets account with a lead list  
- n8n instance (self-hosted or cloud)

## 🔗 Nodes Used

Google Sheets, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
