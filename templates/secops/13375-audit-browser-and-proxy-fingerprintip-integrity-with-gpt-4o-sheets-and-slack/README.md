# 🔒 Audit browser and proxy fingerprint/IP integrity with GPT-4o, Sheets and Slack

> ⚡ **7 views** · 🔒 [SecOps & Security Automation](../)

## Description

# Audit browser & Proxies fingerprint and IP integrity to Slack reports

## Introduction

This workflow performs a comprehensive security audit on your web scraping infrastructure to detect potential IP leaks or bot detection flags. It iterates through a list of fingerprinting services and guarded websites using BrowserAct, uses AI to analyze the diagnostic data for anomalies (like mismatched User-Agents or leaked WebRTC IPs), and logs the results to Google Sheets before delivering a final "Go/No-Go" report to Slack.

## Target Audience

Web scraping developers, DevOps engineers, and security analysts who need to verify that their automation infrastructure is not being flagged as a bot.

## How it works

1. **Initialization:** The workflow starts by clearing a designated Google Sheet to prepare for a fresh audit.
2. **Target Definition:** A **Set** node defines a list of diagnostic URLs (e.g., BrowserScan, IPQualityScore) and specific guarded websites (e.g., Footlocker) to test.
3. **Looping:** A **Split In Batches** node iterates through each URL one by one.
4. **Data Extraction:** The **BrowserAct** node visits each URL.  It executes the "Bot Detection Check" template to extract raw fingerprint data, headers, and access logs.
5. **Forensic Analysis:** An **AI Agent** (using OpenRouter/GPT-4o) acts as a security analyst. It parses the raw scraping output to identify specific red flags, such as "WebDriver" leaks, IP blacklisting, or CAPTCHA blocks.
6. **Logging:** The individual analysis for each site is appended to a **Google Sheet**.
7. **Aggregation:** Once all sites are checked, the workflow fetches all rows from the Google Sheet.
8. **Final Verdict:** A second **AI Agent** reviews the aggregate data to generate a master report, calculating a success rate and identifying consistency issues across different checks.
9. **Notification:** The final formatted report is sent to a **Slack** channel.

## How to set up

1. **Configure Credentials:** Connect your **BrowserAct**, **OpenRouter**, **Google Sheets**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct:** Ensure you have the **Bot Detection Check** template saved and active in your BrowserAct library.
3. **Setup Google Sheet:** Create a new Google Sheet. (See headers below).
4. **Define Targets:** Open the **Define Target URLs** node and populate the array with the detection services you wish to test.
5. **Configure Guarded Sites:** Open the **Add guarded test step** node if you wish to change the specific e-commerce or protected site being tested (default is Footlocker).
6. **Select Slack Channel:** Update the **Send Report** node to point to your desired Slack channel.

## Google Sheet Headers

To use this workflow, create a Google Sheet with the following header in the first row:

* `Result`

## Requirements

* **BrowserAct Account:** Required to perform the browser-based checks. You must have the **Bot Detection Check** template.
* **OpenRouter Account:** Required for the GPT-4o model to perform the forensic analysis.
* **Google Sheets:** Used as a temporary database to store logs during the loop.
* **Slack Account:** Used to receive the final audit report.

## How to customize the workflow

1. **Add Email Alerts:** Add a **Gmail** or **SendGrid** node after the final AI Agent to email the report to stakeholders if the "Scorecard" falls below a certain threshold.
2. **Deepen the Analysis:** Modify the System Prompt in the **Analyze the site results** node to check for specific custom headers or headers required by your target websites.
3. **Rotate Proxies:** If the report returns a "Fail," you could extend the workflow to trigger a proxy rotation API (like Bright Data or IPRoyal) automatically.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [How to Test Your Proxies for n8n: AI-Powered Fingerprint & Bot Check](https://youtu.be/64cKXeY52NQ)

## 🔗 Nodes Used

Google Sheets, Slack, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
