# 📈 Track equity sector rotation with Google Sheets, Yahoo Finance, Groq and Gmail

> ⚡ **341 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Sector Rotation Tracker & Alert System of Equity Market

This workflow automates the tracking of stock market sector rotation. It fetches a list of active stocks from Google Sheets, pulls their last 5 days of market data from Yahoo Finance and calculates momentum and sector strength using custom code. It then compares this current data against historical data to detect capital rotation signals. Finally, an AI Agent (powered by Groq's Llama-3 model) acts as a financial analyst to interpret the shifts and sends an automated Gmail alert if a high-confidence bullish trend is detected.

### Quick Implementation Steps

Don't want to read the details? Follow these quick steps to get started:

1. **Connect Credentials:** Authenticate your Google Sheets, Gmail and Groq API accounts in n8n.
2. **Setup Google Sheets:** Create a Google Sheet with two tabs. "Sheet1" needs an `active` column set to `true` for stocks you want to track. "Sheet2" is used to store daily historic data.
3. **Update Sector Map:** Open the **Group By Sector** code node and update the `sectorMap` with your specific stock symbols and their corresponding sectors.
4. **Configure Email:** Open the **Send Email Alert** node and enter your destination email address.
5. **Test and Run:** Click "Test Workflow" to ensure data flows correctly, then activate it to run on your schedule!


## What It Does

The Stock Sector Rotation Tracker acts as your personal automated quantitative analyst. It starts by pulling a predefined watchlist of active stocks from a connected Google Sheet. Using Yahoo Finance's API, it retrieves the daily closing prices and trading volumes over the past 5 days for each stock.

Once the raw data is gathered, a series of custom JavaScript nodes process the information. It calculates 1-day, 3-day and 5-day returns, assigns momentum scores and evaluates volume ratios. The stocks are then grouped into their respective market sectors (e.g., IT, Banking, Auto) to calculate an aggregate "Sector Strength Score." This score is compared against historical data saved from previous days to determine if money is rotating into or out of a specific sector.

To add a layer of human-like intelligence, the compiled data is sent to an AI Agent powered by Groq. The AI acts as an institutional equity researcher, providing a concise summary, explaining the possible reasons for the market movement and assigning a trading bias (Bullish, Bearish or Neutral) along with a confidence score out of 10. If the AI identifies a strong bullish signal, a detailed email alert is instantly dispatched via Gmail.


## Who It's For

* **Retail Investors & Day Traders** 

Looking for automated daily watchlists and momentum alerts without paying for expensive terminal subscriptions.

* **Financial Analysts & Wealth Managers** 

Needing an automated way to track institutional capital flows and sector rotation over time.

* **Quant Enthusiasts** 

Wanting a foundation to build custom algorithmic trading indicators using n8n and AI.


## Requirements to Use This Workflow

To successfully run this workflow, you will need:

* [An active n8n account (Cloud or Self-Hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi).
* A Google Account to access Google Sheets (for data storage) and Gmail (for sending alerts).
* A free Groq API key to power the Llama 3 AI model.
* A basic understanding of stock symbols (tickers) as used on Yahoo Finance (e.g., `INFY.NS` or `AAPL`).


## How It Works & Set Up

### Step 1: Prepare Your Google Sheets

You need a Google Spreadsheet with two specific tabs.

* **Tab 1 (Watchlist):** Must include columns for stock symbols and an `active` column (set to `true` or `false`).
* **Tab 2 (Historic Data):** Must include columns for `date`, `sector`, `sector_strength_score`, `trend`, `rotation_signal` and `score_change`. 

### Step 2: Configure Credentials in n8n

* **Google Sheets & Gmail:** Set up OAuth2 credentials for your Google account. Connect these to the Google Sheets nodes and the final Gmail node.
* **Groq API:** Generate an API key from the Groq console and add it to the **Insights from Model** node.

### Step 3: Update Stock and Sector Mappings

* Open the **Group By Sector** code node.
* Modify the `sectorMap` JavaScript object to match the stock symbols in your Google Sheet. For example, change `"INFY.NS": "IT"` to match your desired ticker and sector.

### Step 4: Review AI and Email Thresholds

* The workflow uses an **If** node named **Check if Bullish**. By default, it sends an email if the AI Action is exactly `Bullish` OR if the AI Confidence score is greater than `7`. You can adjust these thresholds based on how strict you want your alerts to be.


## How To Customize Nodes

* **Modify the Timeframe** 

In the **Get stocks Data** node, the Yahoo Finance URL ends with `?range=5d&interval=1d`. You can change this to `1mo` (1 month) or interval to `1wk` (1 week) to track macro trends instead of short-term momentum.

* **Tweak the Math Formula**

The **Calculate Stock Returns** code node assigns weights to different days (e.g., 1-day return is weighted at 50%, 3-day at 30%). You can easily adjust these multipliers to fit your personal trading strategy.

* **Change the AI Prompt**

Open the **Prepare AI Insights Prompt** code node or the **AI Analyzer** agent node to rewrite the AI's instructions. You can ask it to adopt a different persona, like a conservative dividend investor, rather than a momentum trader.


## Add-ons

Want to take this workflow to the next level? Here are a few ideas:

* **Slack / Discord Integration**

Replace or supplement the Gmail node with a Slack or Discord node to push alerts directly to a trading community channel.

* **SMS Notifications**

Add a Twilio node to get instant text messages when a high-confidence rotation signal fires.

* **Multiple AI Perspectives**

Add a secondary AI node (like OpenAI's GPT-4o or Anthropic's Claude 3.5) to analyze the same data, then use an IF node to only send an alert if *both* models agree on a Bullish trend.


## Use Case Examples

1. **Daily Morning Briefing**

Schedule the workflow to run 30 minutes before the market opens to get a fresh perspective on where capital moved the previous day.

2. **Swing Trading Assistant**

Use the automated "ROTATION_IN" signals to build a shortlist of swing trade opportunities before the broader market catches on.

3. **Portfolio Rebalancing**

Track sector strength over weeks or months to decide when to rebalance a long-term retirement portfolio from lagging sectors to leading ones.

4. **Institutional Capital Flow Tracking**

Identify "volume boosts" alongside price momentum to spot hidden institutional buying in specific market sectors.

5. **Educational Paper Trading**

Forward the AI insights to a journal or note-taking app (like Notion) to learn how data-driven momentum aligns with actual market performance over time.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Yahoo Finance HTTP Request Fails** | Rate limits or invalid ticker symbol. | Check that the symbols in your Google Sheet exactly match Yahoo Finance tickers (e.g., adding `.NS` for Indian stocks). Add a longer batching interval in the HTTP node settings. |
| **No Data Moving Past "Group By Sector"** | `sectorMap` doesn't match incoming symbols. | Open the **Group By Sector** node and ensure the ticker names in your code exactly match the tickers coming from the API. |
| **AI Node Throws JSON Parse Error** | The AI responded with conversational text instead of strict JSON. | The **Parse AI Output** node has a fallback to catch this, but you can improve reliability by emphasizing `Respond ONLY in valid JSON format` in the AI Agent's system prompt. |
| **Google Sheets Node "Cannot find sheet"** | Document ID or Sheet ID mismatch. | Re-select your specific Spreadsheet and Worksheet directly from the dropdown menus inside the Google Sheets nodes. |
| **Emails Are Not Sending** | The IF node condition is not being met or Gmail authentication expired. | Check the execution logs. If the AI is returning a confidence of 6, it won't send. Re-authenticate your Google account if the node shows an OAuth error. |


## Need Help?

Building financial automation workflows can be complex and tweaking momentum formulas or AI prompts sometimes requires a bit of trial and error. If you need assistance setting up this workflow, customizing the JavaScript nodes, integrating additional trading APIs or building entirely new automation systems tailored to your business, our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) are here to help! 

[Reach out to **WeblineIndia** for expert n8n consulting, development and support to turn your automation ideas into reality.](https://www.weblineindia.com/contact-us.html)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
