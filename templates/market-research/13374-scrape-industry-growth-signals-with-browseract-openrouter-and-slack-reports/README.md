# 📊 Scrape industry growth signals with BrowserAct, OpenRouter, and Slack reports

> ⚡ **28 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Scrape industry growth signals from BrowserAct to Slack reports

## Introduction

This workflow automates the monitoring of market growth signals, such as funding rounds, for specific target industries. It scrapes data using BrowserAct, uses AI to filter and format the results for the current month, and delivers a consolidated report directly to Slack.

## Target Audience

Account-Based Marketing (ABM) managers, sales development representatives (SDRs), and venture capital researchers looking to track competitor or prospect activity.

## How it works

1. **Scheduling:** A **Schedule Trigger** initiates the workflow once a month to gather recent data.
2. **Configuration:** A **Set** node defines the `Target_Industry` variable (e.g., "Property Management"), which controls what data acts as a signal.
3. **Data Extraction:** The **BrowserAct** node runs the "ABM Signal Monitor" template to scrape raw company data and growth lists from the web.
4. **AI Analysis:** An **AI Agent** (powered by **OpenRouter/GPT-4o**) processes the raw text. It filters companies to ensure they match the target industry and have funding dates within the current month.
5. **Data Structuring:** The AI formats the valid leads into a structured JSON report, splitting the data if the list exceeds Slack's character limits.
6. **Data Splitting:** A **Split Out** node separates the message array into individual items to ensure reliable delivery.
7. **Notification:** A **Slack** node posts the curated "Growth Signal Report" to a specified channel.

## How to set up

1. **Configure Credentials:** Connect your **BrowserAct**, **OpenRouter**, and **Slack** accounts in the n8n credentials section.
2. **Prepare BrowserAct:** Ensure you have the **ABM Signal Monitor** template saved in your BrowserAct account.
3. **Define Industry:** Open the **Set Target Industry** node and update the `value` field to the specific industry you want to track (e.g., "Fintech", "Healthcare").
4. **Select Slack Channel:** Open the **Send the report to the channel** node and select the specific Slack channel where you want the report to appear.

## Requirements

* **BrowserAct Account:** You must have the **ABM Signal Monitor** template active in your library.
* **OpenRouter Account:** Required to access the GPT-4o model for data filtering and formatting.
* **Slack Account:** Required for receiving the final reports.

## How to customize the workflow

1. **Change the Trigger Frequency:** Update the **Monthly Trigger** node to run weekly or daily if you require more frequent updates on market signals.
2. **Modify the AI Logic:** Edit the System Message in the **AI Agent** node to change the filtering criteria (e.g., filter by hiring volume instead of funding).
3. **Add a Database:** Insert a **Google Sheets** or **Notion** node before the Slack step to archive the growth signals for long-term tracking.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [🚀 Automate ABM Sales Signals: Track Startup Funding with n8n & AI](https://youtu.be/6v3BZ7fw0sI)

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
