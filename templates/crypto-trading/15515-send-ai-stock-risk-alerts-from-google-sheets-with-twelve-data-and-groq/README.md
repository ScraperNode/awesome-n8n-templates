# 📈 Send AI stock risk alerts from Google Sheets with Twelve Data and Groq

> ⚡ **81 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Google Sheets + Twelve Data + Groq AI Stock Risk Alert Workflow

&gt; Smart Stock Risk Alerts in Minutes

This workflow automatically reads your stock portfolio from Google Sheets, fetches real-time prices via API, calculates risk metrics (price drops and volatility) and sends AI-generated email alerts **only when risks are detected**. It helps you stay informed without being overwhelmed by unnecessary notifications.

### Quick Implementation Steps

1. Connect your **Google Sheets** account and prepare your portfolio sheet.
2. Add your **Twelve Data API key** in the HTTP Request node.
3. Connect your **Gmail account** for sending alerts.
4. Configure thresholds in the **Edit Fields – Config & Thresholds** node.
5. Set up a **Cron (Schedule Trigger)** instead of manual execution.
6. [Run the workflow and monitor alerts](https://n8n.partnerlinks.io/om1efg2qgvwi).


## What It Does

This workflow automates stock portfolio monitoring by combining spreadsheet data, real-time market prices and AI-powered summaries. It reads your portfolio data from Google Sheets and processes each stock by fetching its current market price through an external API.

Once the data is enriched, the workflow calculates key risk indicators such as percentage price change and volatility. Based on predefined thresholds, it flags stocks that may require attention. Instead of sending raw data, it uses an AI model to generate a clean, human-readable summary.

The workflow ensures efficiency by sending alerts **only when necessary**, reducing noise and helping you focus on meaningful risks.


## Who It's For

- Retail investors tracking personal portfolios  
- Financial analysts monitoring stock risks  
- Traders who want automated alerts  
- Anyone using Google Sheets for stock tracking  
- Users looking to integrate AI into financial workflows  


## Requirements

To use this workflow, you need:

- [**n8n account** (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- **Google Sheets account** (OAuth2 connection required)
- **Gmail account** (OAuth2 connection required)
- **Twelve Data API key** (mandatory)
- **Groq API access** (for AI summary generation)


## How It Works & Setup Guide

### Step 1: Prepare Google Sheets

- Use a sheet named: `Portfolio`
- Range: `A:E`
- Required columns (in order):

| Column | Field Name   | Description |
|--------|-------------|-------------|
| A      | symbol      | Stock ticker (e.g., AAPL) |
| B      | avg_price   | Average purchase price |
| C      | quantity    | Number of shares |
| D      | sector      | Industry sector |
| E      | notes       | Optional notes |


### Step 2: Connect Google Sheets

- Open **Read Portfolio from Google Sheets** node  
- Authenticate using Google OAuth2  
- Ensure:
  - Sheet ID is correct
  - Range is set to `Portfolio!A:E`


### Step 3: Configure API (MANDATORY)

⚠️ **This is a required setup step. The workflow will NOT work without it.**

- Open **Fetch Stock Prices** node  
- Update URL:

    ``` https://api.twelvedata.com/price?symbol={{$json.symbol}}&apikey=YOUR_API_KEY ```

- Replace `YOUR_API_KEY` with your Twelve Data API key  


### Step 4: Configure Email Alerts (MANDATORY)

⚠️ You must configure the recipient email manually.

- Open **Send Risk Alert Notification** node  
- Set:
  - `sendTo` → your email address  
  - Subject is already set: `Daily Stock Risk Alert`


### Step 5: Configure Thresholds

- Open **Edit Fields – Config & Thresholds** node  
- Default values:
  - `drop_threshold = -5` → triggers alert if price drops ≥ 5%
  - `volatility_threshold = 3` → triggers alert if volatility ≥ 3%

Adjust these based on your risk tolerance.


### Step 6: Enable Scheduling

The workflow is designed for scheduled execution.

- Replace **Manual Trigger** with **Cron Node**
- Example schedule:
  - Daily at 9 AM
  - Every hour during market hours


### Step 7: Execute Workflow

- Run once manually for testing  
- Activate workflow for automation  


## How It Works (Flow Summary)

1. Reads portfolio data from Google Sheets  
2. Adds configuration thresholds  
3. Loops through each stock  
4. Fetches real-time prices (with delay to avoid rate limits)  
5. Merges portfolio + price data  
6. Computes:
   - Price change %
   - Volatility  
7. Flags risky stocks  
8. Filters only flagged items  
9. Formats data into readable text  
10. Uses AI (Groq model) to generate summary  
11. Sends email alert  


## How To Customize Nodes

- **Edit Fields – Config & Thresholds**  
  Adjust sensitivity of alerts  

- **Wait 8 Seconds Before request**  
  Modify delay based on API rate limits  

- **Compute Risk Logic**  
  Add new conditions (e.g., stop-loss, sector-based alerts)

- **Generate Risk Summary**  
  Customize prompt for different tone or format  

- **Send Risk Alert Notification**  
  Change subject or email structure  


## Add-ons (Extend This Workflow)

- Add **Slack/Telegram alerts** instead of email  
- Store alerts in a **database (PostgreSQL / Airtable)**  
- Add **historical tracking & charts**  
- Integrate **multiple APIs for redundancy**  
- Add **portfolio performance analytics dashboard**  
- Enable **multi-user alerts**  


## Use Case Examples

1. **Daily Portfolio Monitoring**  
   
Automatically receive alerts for risky stocks each day  

2. **Intraday Risk Tracking**  
   
Run hourly to track sudden market movements  

3. **High Volatility Detection**  
   
Identify stocks with unstable price behavior  

4. **Loss Prevention Alerts**  
   Get notified when stocks drop beyond safe thresholds  

5. **Sector-Based Monitoring**  
   Track risk exposure across industries  

There can be many more use cases depending on how you customize thresholds and logic.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|----------|
| No data fetched from Google Sheets | Incorrect sheet ID or range | Verify Sheet ID and `Portfolio!A:E` |
| API not returning prices | Missing API key | Add `apikey` in HTTP Request node |
| Workflow stops unexpectedly | API rate limit | Increase wait time |
| No email received | `sendTo` field empty | Add recipient email |
| No alerts triggered | Thresholds too strict | Adjust drop/volatility values |
| AI summary not generated | Groq API issue | Check API credentials |
| Incorrect risk calculation | Data format issue | Ensure numeric values in sheet |


## Need Help?

If you need assistance with:

- Setting up this workflow  
- Customizing risk logic  
- Adding advanced features  
- Integrating additional APIs  
- Building similar automation workflows  

We’re here to help!

👉 Contact our [n8n developes at **WeblineIndia**](https://n8n.partnerlinks.io/om1efg2qgvwi) for expert support in building scalable, AI-powered automation solutions tailored to your needs.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
