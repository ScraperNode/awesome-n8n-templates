# 📊 X (Twitter) brand sentiment analysis with Gemini AI & Slack alerts

> ⚡ **127 views** · 📊 [Market Research & Insights](../)

## Description

This workflow is the AI analysis and alerting engine for a complete social media monitoring system. It's designed to work with data scraped from X (formerly Twitter) using a tool like the **Apify Tweet Scraper**, which logs the data into a Google Sheet. The workflow then automatically analyzes new tweets with Google Gemini and sends tailored alerts to Slack.

## How it works
This workflow automates the analysis and reporting part of your social media monitoring:
* **tweet Hunting:** It finds tweets for the query entered in the set node and  passes the data to the google sheets  
* **Fetches New Tweets:** It gets all new rows from your Google Sheet that haven't been processed yet (it looks for "Notmarked" in the 'action taken' column).
* **Prepares for AI:** It combines the data from all new tweets into a single, clean prompt for the AI to analyze.
* **AI Analysis with Gemini:** It sends the compiled data to Google Gemini, asking for a full summary report *and* a separate, machine-readable JSON list of any urgent items.
* **Splits the Response:** The workflow intelligently separates the AI's text summary from the JSON data for urgent alerts.
* **Sends Notifications:**
    * The high-level summary is sent to a general Slack channel (e.g., `#brand-alerts`).
    * Each urgent item is sent as a separate, detailed alert to a high-priority Slack channel (e.g., `#urgent`).

## Set up steps
It should take about **5-10 minutes** to get this workflow running.

1.  **Prerequisite - Data Source:** Ensure you have a Google Sheet being populated with tweet data. For a complete automation, you can set up a new google sheet with the same structure for saving the tweets data and  run the Tweet Scraper on a schedule.
2.  **Configure Credentials:** Make sure you have credentials set up in your n8n instance for **Google Sheets**, **Google Gemini (PaLM) API**, and **Slack**.
3.  **Google Sheets Node ("Get row(s) in sheet"):**
    * Select your Google Sheet containing the tweet data.
    * Choose the specific sheet name from the dropdown.
    * Ensure your sheet has a column named `action taken ` so the filter works correctly.
4.  **Google Gemini Chat Model Node:** Select your Google Gemini credential from the dropdown.
5.  **Slack Nodes ("Send a message" & "Send a message1"):**
    * In the first Slack node, choose the channel for the summary report.
    * In the second Slack node, choose the channel for urgent alerts.
6.  **Save and Activate:** Once configured, save your workflow and turn it on!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
