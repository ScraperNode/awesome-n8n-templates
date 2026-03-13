# 🎬 Scrape Trustpilot reviews using Bright Data & GPT-4o-mini for winning ad copy

> ⚡ **1,061 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## 🔍 Competitor Review Scraper & Ad Copy Generator
(Trustpilot + Bright Data + GPT-4o-mini)

### 📌 Who It's For
Marketers, business owners, and agencies looking to:

- Analyze competitor pain points

- Generate high-impact Facebook ad copy
 
- Automate manual data processing

### 🧩 How It Works
This n8n-based workflow combines Bright Data, Google Sheets, and OpenAI to scrape, process, and transform Trustpilot reviews into ready-to-use ad copy.

🔹 Step-by-Step Breakdown
1. Trigger (Manual Form Submission)
Input required:

Competitor’s Trustpilot URL

Review timeframe (30d, 3m, 6m, 12m)

2. Fetch Reviews

Calls Bright Data’s Dataset API with URL & timeframe

Polls until snapshot is ready

3. Retrieve & Store

Extracts all reviews

Saves them into a structured Google Sheet

4. Filter & Aggregate

Filters to only 1–2 star reviews

Summarizes common negative feedback

5. Generate Ad Copy

Sends the summary to OpenAI GPT-4o-mini

Produces 3 variations of ad copy targeting pain points

6. Distribute Insights

Sends ad copy + summary via email to the marketing team

### ✅ Requirements

-LLM Account 
-Google Sheets - Copy this sheet:
https://docs.google.com/spreadsheets/d/1Zi758ds2_aWzvbDYqwuGiQNaurLgs-leS9wjLWWlbUU/edit?gid=0#gid=0

-Bright Data account

### ⚙️ Setup Instructions
**Step 1: Google Sheets
**
Copy this Google Sheets template

Do not change column headers

**Step 2: n8n Credential Setup
**
Google Sheets: OAuth2

Bright Data: Authorization Header

OpenAI: API Key for GPT-4o-mini

**Step 3: Import Workflow
**
Import the .json file into n8n

Configure your sheet + dataset ID

Adjust GPT prompts as needed

**Step 4: Run the Workflow
**
Trigger via form

Receive ad copy + review insights via email

### 🧠 Tips & Best Practices
- Bright Data snapshots may take time — polling is handled

- Focusing on 1–2 star reviews yields the most actionable pain points

- You can customize GPT-4o-mini prompts for tone or vertical

### 💬 Support & Feedback
Need help or customization?

📧 Email: Yaron@nofluff.online
📺 YouTube: @YaronBeen
🔗 LinkedIn: linkedin.com/in/yaronbeen

📚 Bright Data Docs: docs.brightdata.com/introduction

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
