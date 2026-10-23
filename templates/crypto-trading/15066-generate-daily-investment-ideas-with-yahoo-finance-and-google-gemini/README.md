# 📈 Generate daily investment ideas with Yahoo Finance and Google Gemini

> ⚡ **923 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# AI-Powered Daily Investment Idea Generator via Yahoo Finance & Gemini

This workflow serves as your personal quantitative analyst. It automatically fetches your active watchlist, grabs real-time prices and breaking news from Yahoo Finance and uses Google Gemini AI to analyze the data and highlight the top 2 to 3 daily investment opportunities. 

**Quick Implementation Steps:**

1. **Import the Workflow:** Copy the provided JSON and paste it directly into your n8n canvas.
2. **Set Up Credentials:** Add your Google Gemini API key to the `Google Gemini Chat Model` node.
3. **Configure Data Tables:** Ensure you have two n8n Data Tables ready—one for your Watchlist and one for the Daily Ideas output. 
4. **Activate:** Toggle the workflow to "Active" so the Schedule Trigger runs automatically at 8:00 AM every day.


## What It Does

This automated system takes the manual labor out of daily market research. Every morning, a Schedule Trigger wakes the workflow up and immediately connects to your internal n8n Data Table to pull a list of financial assets (like crypto or stocks) that you actively want to monitor. 

Once the watchlist is loaded, the workflow loops through each ticker individually. It sends direct requests to public Yahoo Finance endpoints to gather the most recent trading prices, market charts and top news headlines. A packaging node neatly formats this raw data so that nothing gets lost or overwritten as the loop continues through your entire list.

After all tickers are processed, the workflow bundles the packaged data into a comprehensive market report. This report is handed off to a Google Gemini AI Agent equipped with a strict financial analyst prompt. The AI evaluates the news sentiment and catalysts, identifies the most compelling investment setups and formats them into a clean JSON structure. Finally, a code node processes the AI's output and logs the finalized ideas directly into your database for easy reading.


## Who It's For

This workflow is perfect for day traders, crypto enthusiasts, financial analysts and data-driven investors. If you spend hours every morning reading news headlines and checking stock prices to find the best trading setups, this automation acts as an invaluable, time-saving assistant.


## Requirements to use this workflow

To successfully run this workflow, you will need:

* An [active account of **n8n**](https://n8n.partnerlinks.io/om1efg2qgvwi) (must support Advanced AI nodes and internal Data Tables).
* A **Google Gemini API Key** (or an alternative LLM like Groq/OpenAI, if you choose to swap the model node).
* Active internet access to reach the **Yahoo Finance API** endpoints.
* Two pre-configured **n8n Data Tables** to handle the input (Watchlist) and output (Daily Ideas).


## How It Works & Set Up

Setting up this workflow involves understanding the data flow and configuring your environment to prevent execution errors.

**1. Data Table Schemas**

For smooth data retrieval and storage, your n8n Data Tables must be structured correctly:

* **Input Table (Watchlist):** Must contain a `Status` column (used to filter for "Active" items) and a `Ticker` column (e.g., BTC-USD, AAPL).
* **Output Table (Daily Ideas):** Must contain four string columns exactly matching the AI's output: `Ticker`, `Idea_Title`, `Catalyst_Summary` and `Conviction_Level`.

**2. Yahoo Finance API Considerations**

The workflow utilizes public, undocumented Yahoo Finance endpoints (`query1.finance.yahoo.com` and `query2.finance.yahoo.com`). While these do not require an explicit API key, they are subject to strict rate limits. Making hundreds of rapid, back-to-back requests can result in a temporary IP ban (HTTP 429 errors). Keep your active watchlist size manageable (under 50 items) or introduce a brief Wait node inside the loop if you are processing massive lists.

**3. Execution Flow**

* The **Schedule Trigger** initiates the run at 8 AM.
* The **Get Tickers from Watchlist** node filters your database for "Active" assets.
* The **Loop Over Items** node pushes one ticker at a time to the **HTTP Request** nodes.
* The **Packager** node maps the complex Yahoo JSON responses into clean variables (`Price Data`, `News Data`).
* The **Bundler** aggregates the items into a single array.
* The **AI Agent** reads the aggregated array and generates a JSON string of recommendations.
* The **Array of Data** node sanitizes the AI output, stripping away markdown backticks so the final **DB-Table Daily Ideas** node can easily insert the rows.


## How To Customize Nodes

* **Change the Schedule:** 

Double-click the `Schedule Trigger` to adjust the run time or switch to a completely different trigger (like a Webhook or manual trigger).

* **Modify the AI Prompt:** 

Open the `AI Agent` node and tweak the System Message. You can ask the AI to act more aggressively, focus entirely on negative sentiment or output additional JSON keys like `Risk_Level`.

* **Swap AI Models:** 

If you prefer OpenAI or Anthropic, simply delete the `Google Gemini Chat Model` node and connect your preferred language model to the AI Agent.

* **Adjust Data Packaging:** 

Open the `Packager` node to extract different data points from the Yahoo Finance payload, such as trading volume or publisher names.


## Add‑ons

To make this automation even more powerful, you can also consider these extensions:

* **The Gold Intelligence Engine Integration:** 

Use this workflow as a foundational data feeder. Pass the refined output table into a larger, multi-agent intelligence engine that cross-references these daily ideas with macroeconomic indicators.

* **Slack and Notion Delivery:** 

Add nodes at the end of the workflow to automatically format the AI's top picks into a message, sending it directly to a Slack channel and logging it permanently into a structured Notion database.

* **Automated Trading Webhooks:** 

Connect the final output to a broker's webhook (like Alpaca or Binance) to automatically execute micro-trades based on the AI's high-conviction ideas.


## Use Case Examples

This workflow framework can be adapted for several valuable scenarios. There can be many more such use cases of this workflow depending on your creative requirements:

1.  **Crypto Market Briefings:** 

Feed the system top coin tickers (BTC, ETH, SOL) to get a daily breakdown of the crypto landscape before you start trading.

2.  **Earnings Call Sentinel:** 

Update the watchlist to track companies releasing earnings reports on a specific week, allowing the AI to summarize the sentiment immediately following the news.

3.  **Commodities Monitoring:** 

Track assets like Gold, Silver and Oil to capture macroeconomic shifts and global catalysts.

4.  **Portfolio Risk Management:** 

Feed your current holdings into the watchlist. Ask the AI to flag only the *negative* news, acting as an early warning system for your investments.

5.  **Forex Pair Tracking:** 

Monitor major currency pairs and global financial news to predict daily currency fluctuations.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **HTTP 429 Too Many Requests** | Yahoo Finance is rate-limiting your IP address due to rapid polling. | Add a "Wait" node inside the loop (e.g., 2 seconds) to slow down the requests or reduce your total active watchlist size. |
| **JSON Parsing Error in Code Node** | The AI included conversational text or formatting that broke the `JSON.parse()` command. | Review the prompt in the `AI Agent` to ensure it enforces strict JSON formatting. Consider lowering the AI temperature setting. |
| **Empty Output Table** | The Data Table ID is incorrect or the column names do not perfectly match the schema. | Verify your Data Table ID in the final node and ensure your table columns exactly read: `Ticker`, `Idea_Title`, `Catalyst_Summary` and `Conviction_Level`. |
| **Missing Yahoo Data** | The Ticker symbol provided from the watchlist is not recognized by Yahoo Finance. | Ensure symbols match Yahoo's exact format (e.g., use `BTC-USD` instead of just `BTC`). |


## Need Help?

Building robust financial workflows and fine-tuning AI agents can sometimes get complicated, especially when integrating multiple APIs or dealing with complex data schemas. 

So if you need assistance configuring your data tables, customizing the AI prompts or building advanced add-ons to integrate this into your broader systems, please feel free to reach out to our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) experts at WeblineIndia.

## 🔗 Nodes Used

HTTP Request, AI Agent, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
