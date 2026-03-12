# 🎣 Extract employee emails from company domains with BrowserAct and Google Sheets

> ⚡ **19 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Extract employee emails from company domains using Human-in-the-Loop scraping using BrowserAct

This workflow automates the process of enriching company data by scraping employee emails and positions from company websites. It processes a list of URLs from a Google Sheet, handles anti-bot measures (CAPTCHAs) by alerting you via Telegram to solve them manually before resuming, and saves the verified data back to your sheet.

## Target Audience

Sales development representatives (SDRs), lead generation agencies, and recruiters needing verified contact info.

## How it works

1. **Read List**: The workflow reads a list of company URLs from a **Google Sheet**.
2. **Scrape Data**: It loops through each URL and triggers **BrowserAct** to scrape the site for team pages or contact info.
3. **Check Status**:
* **Finished**: If scraping is successful, it parses the data (Name, Email, Position).
* **Paused**: If a CAPTCHA is detected, the workflow sends a **Telegram** alert. It pauses execution until you verify the CAPTCHA in the browser, then resumes automatically.
* **Failed**: If scraping fails, it logs an error.


4. **Save Data**: Extracted emails and names are appended to a new tab in the Google Sheet specific to that company.
5. **Notify**: Once a company is processed, a **Slack** notification is sent.

## How to set up

1. **Configure Credentials**: Connect your **Google Sheets**, **BrowserAct**, **Telegram**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Company Domain to Email Enrichment** template is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a Google Sheet with a column named `Company url` and populate it with target domains.
4. **Configure Notifications**:
* Open the **Send a message** node (Slack) and select your target channel.
* Open the **Alert User** and **Remind user** nodes (Telegram) and ensure your Chat ID is correct.


5. **Activate**: Run the workflow manually to start processing the list.

## Requirements

* **BrowserAct** account with the **Company Domain to Email Enrichment** template.
* **Google Sheets** account.
* **Telegram** account (Bot Token).
* **Slack** account.

## How to customize the workflow

1. **Change Data Source**: Replace the Google Sheet input with an **Airtable** or **HubSpot** node to pull domains from your CRM.
2. **Enrich Data**: Add a **Clearbit** or **Hunter.io** node after scraping to cross-reference found emails.
3. **Modify Alerts**: Change the Telegram alerts to **Email** or **SMS** (via Twilio) if preferred.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Scale Your Lead Gen! 🚀 Automate Email Extraction with n8n & Browseract](https://youtu.be/_7FlHGfwzWo)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
