# 📊 Analyze Meta ads daily with Google Gemini and Google Sheets

> ⚡ **137 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

# Analyze Meta ads with Gemini and Google Sheets

**Stop manually exporting CSVs and start automating your marketing insights.**

This workflow is designed for Marketing Agencies, Freelancers, and Media Buyers who want to keep a daily pulse on their Meta (Facebook/Instagram) Ads performance without logging into Ads Manager.

It doesn't just scrape data; it uses **Google Gemini AI** to act as a virtual data analyst. It reviews your campaigns, identifies winning/losing creatives, and writes strategic suggestions for both your agency team and your clients.

### 🚀 What this workflow does
1. **Extracts Data:** Wakes up every morning (6:00 AM) to fetch yesterday's Ad and Campaign performance from the **Facebook Graph API**.
2. **Cleans & Filters:** Automatically ignores paused or zero-spend campaigns to keep your reports clean.
3. **Structuring:** Uses a Code node to group Ads intelligently under their respective Ad Sets and Campaigns.
4. **AI Analysis:** Sends the structured data to **Google Gemini**. The AI analyzes CTR, CPC, and Spend to identify the "Best Performing Ad" and "Worst Performing Ad" per Ad Set.
5. **Reporting:**
   - Saves raw **Campaign Data** to Google Sheets.
   - Saves raw **Ad Data** to Google Sheets.
   - Saves **AI-Generated Insights** (Client & Agency suggestions) to a dedicated sheet.
6. **Error Handling:** If anything breaks (e.g., API token expiry), it instantly sends you an alert via **Gmail** with the error details.

### 💡 Key Features
- **Zero-Spend Filter:** Keeps your spreadsheet tidy by excluding inactive ads.
- **Hierarchical Data Processing:** Groups data logically so the AI understands the context of your tests.
- **Dual-Perspective Insights:** The AI generates two types of advice:
  - *For the Client:* Simple, performance-based updates.
  - *For the Agency:* Technical optimization tips (e.g., "Pause Ad B, Scale Ad A").
- **Robust Error Monitoring:** Includes a dedicated error workflow to notify you of failures.

### 🛠️ Prerequisites
To use this template, you will need:
- **Meta/Facebook Developer App:** A System User Access Token with `ads_read` permission.
- **Google Cloud Console Project:** Enabled APIs for Google Sheets, Gmail, and Vertex AI (Gemini).
- **Google Sheet:** A sheet with three tabs: `Campaigns`, `Ads`, and `AI_Insights`.

### 📝 Setup Instructions
1. **Configure Credentials:** Connect your Facebook Graph API and Google accounts in n8n.
2. **Set Configuration Node:** Open the "Set Configuration" node and paste your `Ad Account ID` and `Email Address` for error alerts.
3. **Link Google Sheet:** Open the three Google Sheets nodes and select your spreadsheet file.
4. **Activate:** Turn on the workflow and let it run daily!

---

**Need help setting this up or want a custom automation for your agency?**
I specialize in building agentic workflows for consultants and agencies.

📧 **Contact me:** bakdaulet.mph@gmail.com

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
