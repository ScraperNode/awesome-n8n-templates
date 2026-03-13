# 📊 Monitor competitor campaigns weekly using BrowserAct, OpenRouter, Google Sheets and Slack

> ⚡ **101 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Automate competitor campaign monitoring using BrowserAct & Openrouter

This workflow acts as an automated marketing analyst. It runs weekly to scrape competitor landing pages, compare them against historical data to detect changes in pricing, messaging, or offers, and delivers a strategic intelligence report to your Slack channel.

## Target Audience
Marketing managers, product strategists, and e-commerce owners who need to track competitor moves without manual checking.

## How it works
1. **Scheduled Scan**: The workflow triggers automatically every week.
2. **Retrieve Targets**: It fetches a list of competitor URLs from a **Google Sheet**.
3. **Scrape & Compare**:
    * It loops through each URL.
    * **BrowserAct** scrapes the live page content.
    * An **AI Agent** (using OpenRouter/GPT-5) compares the live data with the *previous* week's data stored in the sheet. It detects price changes, new bundles, or messaging shifts.
4. **Update Database**: The new data is saved to the Google Sheet for next week's comparison.
5. **Generate Report**: A final **AI Agent** aggregates all the findings into a high-level summary, highlighting only significant changes (e.g., "High Severity" updates).
6. **Notify Team**: The report is formatted for **Slack** and posted to your marketing channel.

## How to set up
1. **Configure Credentials**: Connect your **BrowserAct**, **Google Sheets**, **Slack**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Competitor Campaign Monitoring (Huel)** template is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a Google Sheet with columns for `Page URL` and fields to store historical data (e.g., `last_scrape_data`).
4. **Configure Slack**: Add your Slack Channel ID to the **Send a message** node.
5. **Activate**: Turn on the workflow to start the weekly monitoring cycle.

## Requirements
* **BrowserAct** account with the **Competitor Campaign Monitoring (Huel)** template.
* **Google Sheets** account.
* **Slack** account.
* **OpenRouter** account (or compatible LLM credentials).

## How to customize the workflow
1. **Change Frequency**: Adjust the **Weekly Trigger** to run daily or monthly depending on how fast your competitors move.
2. **Monitor Different Elements**: Modify the system prompt in the **Analyze the pages** agent to look for specific keywords like "Black Friday" or "Limited Time."
3. **Add Email Alerts**: Add a **Gmail** node to send the report to stakeholders who aren't on Slack.

## Need Help?
* [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [How to Track Web Changes & Get Slack Notifications with n8n](https://youtu.be/roIRCG3DryU)

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
