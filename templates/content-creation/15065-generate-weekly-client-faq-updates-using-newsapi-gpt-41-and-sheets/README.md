# 🎬 Generate weekly client FAQ updates using NewsAPI, GPT-4.1 and Sheets

> ⚡ **12 views** · 🎬 [Content Creation & Video](../)

## Description

# Auto FAQ Generator for Clients using NewsAPI, OpenAI GPT-4.1 and Google Sheets

This workflow automatically generates **weekly client-ready investment FAQs** by combining **market news (NewsAPI)** and **portfolio data (Google Sheets)** using **OpenAI GPT-4.1**. The final FAQs are structured and saved back into Google Sheets.


### Quick Implementation Steps

1. Import the workflow into n8n
2. Add your **NewsAPI API key** in the HTTP Request node
3. Connect your **Google Sheets account**
4. Ensure your sheet has required columns: `Client Name` `Asset` `Investment Amount` `Current Value` `Last Week Value` `Risk Level`  `Sector`
5. Add your **OpenAI API key**
6. Create a destination sheet with columns: `Q1–A5`
7. Activate the workflow

That’s it! Your FAQs will be generated every Monday at 8 AM.
 

## What It Does

This workflow automates the process of generating **weekly investment FAQs** for clients by combining real-time market insights with portfolio performance data. It ensures that financial advisors or teams can deliver consistent, relevant and easy-to-understand updates without manual effort.

It pulls the latest **tech-focused market news** using NewsAPI and combines it with structured portfolio data stored in Google Sheets. The workflow then analyzes portfolio trends such as **high-risk assets** and **declining investments** to enrich the context.

Using OpenAI, the workflow generates **5 practical and client-friendly FAQs**, each with a short, one-line answer. These FAQs are then structured and saved into a Google Sheet, making them easy to reuse, share or distribute.


## Who’s It For

- Financial advisors and wealth managers  
- Investment firms and portfolio managers  
- Fintech startups  
- Client relationship teams  
- Anyone managing client portfolios and communications  


## Requirements

To use this workflow, you will need:

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- **NewsAPI account** (https://newsapi.org/)  
- **OpenAI API key**
- **Google Sheets account**

### Required Google Sheets Structure

#### 📥 Input Sheet (Portfolio Data)

Must include these exact column headers:
- `Client Name`
- `Asset`
- `Investment Amount`
- `Current Value`
- `Last Week Value`
- `Risk Level`
- `Sector`

#### 📤 Output Sheet (FAQs)

Create a sheet with the following columns:
- `Q1`, `A1` ,`Q2`, `A2`,`Q3`, `A3`, `Q4`, `A4`, `Q5`, `A5`


## How It Works & Set Up

### 1. Schedule Trigger

- Node: **Weekly Portfolio & News Trigger**
- Runs every **Monday at 8:00 AM**
- You can modify timing as needed

### 2. Fetch Market News

- Node: **Fetch Market News (HTTP Request)**
- Endpoint: `https://newsapi.org/v2/top-headlines`
- Query Parameters:
  - `sources=techcrunch`
  - `apiKey=YOUR_API_KEY`

**Action Required:** Add your NewsAPI key manually

### 3. Check News Availability

- Node: **IF Node**
- Checks whether news articles exist
- If yes → formats top 5 articles  
- If no → uses fallback message

### 4. Format News

- Node: **Format Top News**
- Extracts top 5 headlines and descriptions
- Node: **Fallback News Message**
- Used when no news is available: "No major market news this week. Focus on portfolio performance"

### 5. Fetch Portfolio Data

- Node: **Fetch Portfolio Data (Google Sheets)**
- Connect your Google account
- Select your portfolio sheet

### 6. Format Portfolio Summary

- Node: **Set Node**
- Combines all rows into readable format:
Client Name	| Asset | Investment Amount | Current Value | Last Week Value | 	Risk Level	| Sector

### 7. Analyze Portfolio

- Node: **Code Node**
- Calculates:
- Number of **high-risk assets**
- Number of **assets losing value**

### 8. Merge Data

- Node: **Merge Node**
- Combines:
- News data
- Portfolio summary & analysis

### 9. Generate FAQs using AI

- Node: **OpenAI**
- Model: `gpt-4.1-nano`

**Action Required:** Add your OpenAI API credentials

- AI generates:
- Exactly **5 FAQs**
- Focus on trends, risks, opportunities
- Simple one-line answers

### 10. Extract Structured Output

- Node: **Set Node**
- Uses regex to extract:
- Q1–Q5
- A1–A5

### 11. Save FAQs to Google Sheets

- Node: **Google Sheets (Append)**
- Writes structured FAQs into output sheet

Ensure your sheet has columns: `Q1–A5`


## How To Customize Nodes

- **Change News Source**
	- Modify `sources=techcrunch` to another provider

- **Adjust AI Output Style**
	- Edit prompt in OpenAI node
	- Example: longer answers, different tone

- **Change Schedule**
	- Update trigger node (daily, weekly, etc.)

- **Modify Portfolio Analysis**
	- Update Code node logic for deeper insights


## Add-ons

- Send FAQs via Email (Gmail/SMTP node)
- Push data to dashboards (Notion, Airtable)
- Send alerts via Slack or Microsoft Teams
- WhatsApp or SMS notifications
- Add historical comparison (week-over-week trends)


## Use Case Examples

1. Weekly investor update emails  
2. Portfolio performance summaries for clients  
3. Internal advisory team insights  
4. Automated client reporting systems  
5. Fintech app content generation  

*There can be many more use cases depending on how you extend the workflow.*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|----------|
| No news data fetched | Missing or invalid NewsAPI key | Add valid API key in HTTP node |
| Empty FAQs | OpenAI credentials missing | Configure OpenAI API key |
| FAQs not structured properly | AI output format changed | Ensure prompt format is unchanged |
| Google Sheets not updating | Incorrect sheet or permissions | Reconnect credentials and verify sheet |
| Portfolio data not showing | Incorrect column names | Ensure exact headers are used |
| Workflow not triggering | Schedule inactive | Activate workflow |


## Need Help?

If you need assistance with:

- Setting up this workflow  
- Customizing AI prompts  
- Adding advanced automation features  
- Integrating with your business tools  

[We’re here to help!](https://www.weblineindia.com/hire-n8n-developers/)

Contact **WeblineIndia** for expert support in building and scaling automation workflows tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
