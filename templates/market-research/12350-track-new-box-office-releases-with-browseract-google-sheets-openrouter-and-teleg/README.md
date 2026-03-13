# 📊 Track new box office releases with BrowserAct, Google Sheets, OpenRouter and Telegram

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Track new box office releases from BrowserAct to Google Sheets & Telegram

This workflow acts as an automated movie tracker that monitors box office data, filters out movies you have already seen or tracked, and sends formatted updates to your Telegram. It leverages BrowserAct for scraping and an AI Agent to deduplicate entries against your database and format the content for delivery.

## Target Audience
Movie enthusiasts, cinema news channel administrators, and data analysts tracking entertainment trends.

## How it works
1. **Fetch Data**: The workflow runs on a schedule (e.g., every 15 minutes) to fetch the latest movie data using **BrowserAct**.
2. **Load Context**: It retrieves your existing movie history from **Google Sheets** to identify which titles are already tracked.
3. **AI Processing**: An **AI Agent** (powered by OpenRouter) compares the new list against the existing database to remove duplicates. It then formats the valid new entries, extracting stats like "Opening Weekend" and generating an HTML-formatted Telegram post.
4. **Update Database**: The workflow appends the new movie details (Budget, Cast, Links) to **Google Sheets**.
5. **Notify**: It sends the pre-formatted HTML message directly to your **Telegram** chat.

## How to set up
1. **Configure Credentials**: Connect your **BrowserAct**, **Google Sheets**, **OpenRouter**, and **Telegram** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Box Office Trifecta** template is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a new Google Sheet with the required headers (listed below).
4. **Select Spreadsheet**: Open the **Get row(s) in sheet** and **Append row in sheet** nodes to select your specific spreadsheet.
5. **Configure Notification**: Open the **Send a text message** node and enter your Telegram Chat ID (e.g., `@channelname` or a numeric ID).

## Google Sheet Headers
To use this workflow, create a Google Sheet with the following headers:
* Name
* Budget
* Opening_Weekend
* Gross_Worldwide
* Cast
* Link
* Summary

## Requirements
* **BrowserAct** account with the **Box Office Trifecta** template.
* **Google Sheets** account.
* **OpenRouter** account (or credentials for a compatible LLM like Gemini or Claude).
* **Telegram** Bot Token.

## How to customize the workflow
1. **Adjust Filtering Logic**: Modify the system prompt in the **Scriptwriter** node to change how movies are filtered (e.g., only track movies with a budget over $100M).
2. **Change Output Channel**: Replace the Telegram node with a **Discord** or **Slack** node if you prefer those platforms.
3. **Enrich Data**: Add an **HTTP Request** node to fetch the movie poster image and send it as a photo message instead of just text.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Automated Box Office Movie Channel: n8n, IMDb & Telegram 🎬](https://youtu.be/OFuBm6epqdY)

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
