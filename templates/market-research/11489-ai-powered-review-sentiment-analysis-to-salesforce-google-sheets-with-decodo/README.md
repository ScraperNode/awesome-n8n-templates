# 📊 AI-powered review sentiment analysis to Salesforce & Google Sheets with Decodo

> ⚡ **40 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does

This workflow scrapes **customer reviews from Trustpilot**, analyzes them with AI, and keeps both **Salesforce** and **Google Sheets** automatically updated with customer sentiment insights.

It uses **Decodo** to reliably extract review content from Trustpilot, processes the text with **OpenAI**, and orchestrates everything using **n8n**.


👉 [Deocodo](Decodo)



## How it works (high level)

1. Reads **Trustpilot review URLs** and **Salesforce Account IDs** from Google Sheets  
2. Scrapes Trustpilot reviews using **Decodo**  
3. Uses AI to summarize sentiment, trends, and key positives/negatives  
4. Generates **two outputs in parallel**


## Outputs generated

### 1. Salesforce Account update
The workflow updates an **existing Salesforce Account** by writing the AI-generated sentiment summary into a **custom text field** (e.g. `recent_trend_summary__c`).

This brings external customer feedback directly into Salesforce, allowing teams to work with real market perception inside the CRM.

### 2. Google Sheets analytics dataset
At the same time, structured review metrics are stored in Google Sheets:
- Ratings and sentiment distribution  
- Top positive and negative keywords  
- Trend summaries over time  

This creates a reusable dataset for dashboards and reporting.


## How to configure it (general)

- **Google Sheets**: add review URLs + Salesforce Account IDs  
- **[Decodo](Decodo)**: add your API key to scrape Trustpilot reliably  
   
- **OpenAI**: add your API key for AI analysis  
- **Salesforce**:
  - Create a custom **Text (255)** field on Account  
  - Connect Salesforce credentials in n8n  
  - Only existing Accounts are updated

## 🔗 Nodes Used

Google Sheets, Salesforce, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
