# 📈 Compare gold and equity performance with Google Sheets, Groq, QuickChart and Gmail

> ⚡ **2,479 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Gold vs Equity Performance Comparison Tracker with Visual Insights

This automated n8n workflow evaluates the historical performance of gold against equity markets. It extracts daily price data from Google Sheets, calculates comparative returns and uses an AI agent to generate actionable investment insights. Finally, it creates a visual performance chart and emails a smartly formatted HTML report—triggering a high-priority alert if the performance gap exceeds a defined threshold.


### Quick Implementation Steps

1. **Import the Workflow:** Upload the downloaded JSON file into your n8n workspace.
2. **Connect Credentials:** Authenticate your Google Sheets, Gmail and Groq API accounts in their respective nodes.
3. **Map Your Data:** Select your specific Google Sheet documents for both the Gold and Equity data fetching nodes.
4. **Set Your Parameters:** Open the `Set Analysis Parameters` node to define your target date range and performance gap threshold.
5. **Execute:** Click "Test Workflow" to generate and receive your first automated financial comparison report.


## What It Does

This workflow acts as an automated financial analyst. It begins by pulling day-by-day pricing for two distinct assets—Gold and Equity—from standard Google Sheets. A custom script then merges this data, ensuring dates match up perfectly while filtering out any information outside of your target date window. Once the data is aligned, the workflow calculates the percentage returns for both assets and determines the exact performance difference.

Instead of just presenting raw numbers, the workflow passes these calculated metrics to an advanced AI Agent powered by Llama-3. The AI is prompted to step into the role of an investment advisor, evaluating the numbers to declare a "winner," providing realistic market context and suggesting a strategic portfolio allocation (e.g., 60% Equity / 40% Gold) based strictly on the provided data. 

To wrap it all up, the system generates a dynamic line chart URL using QuickChart.io. It packages the chart, the raw numbers and the AI's written insights into a clean HTML email. If one asset drastically outperforms the other (based on a threshold you set), the system routes the email as a special "ALERT". Finally, it logs a summary of the report back into a fresh Google Sheet for long-term record keeping.


## Who’s It For

This workflow is perfect for 
- financial analysts, 
- portfolio managers, 
- wealth advisors, 
- and self-directed investors 

who want to automate their market tracking. It is highly beneficial for teams that need consistent, data-backed comparative reporting without the manual labor of crunching spreadsheet numbers and drafting summaries every week.


## Requirements to Use This Workflow

* An active **n8n instance** (compatible with self-hosted version 2.1.5 or newer).
* A **Google Workspace account** to authenticate both Google Sheets and Gmail nodes.
* A **Groq API account** to power the Llama-3 language model for AI insights.
* A **Google Sheet** populated with daily historical prices for Gold and Equity.


## How It Works & Set Up

**1. Define Your Analysis Scope**

Start at the `Set Analysis Parameters` node. Here, you will define the `startDate`, `endDate` and the `threshold` percentage. This threshold is the performance gap required to trigger an urgent alert rather than a standard report.

**2. Ingest the Market Data**

The workflow branches into two Google Sheets nodes (`Fetch Gold Prices` and `Fetch Equity Prices`). You will need to select your Google account credentials and point these nodes to the specific worksheets containing your date and price columns.

**3. Merge and Calculate**

The `Merge Market Data` node uses JavaScript to combine both data streams into a single timeline. The subsequent `Calculate Performance Metrics` node does the math, calculating the total percentage return for both assets over your chosen timeframe.

**4. Generate AI Insights**

The `Generate AI Investment Insights` Langchain agent takes the calculated returns and sends them to the Groq language model. Make sure your Groq credentials are active in the attached `Insights` model node. The AI outputs a structured JSON response containing the market summary and allocation advice.

**5. Charting and Delivery**

While the AI processes text, the `Generate Chart` node transforms the price arrays into a QuickChart visual. Everything is combined in the `Generate Final Report` node, which builds the HTML structure. Finally, the `Check Performance Gap` node decides whether to trigger the `Send Report Email` or the `Send Alert Email`.


## How To Customize Nodes

* **Set Analysis Parameters:** 

Update this node before every manual run to target different weeks, months or quarters.

* **Generate AI Investment Insights:** 

Open the system prompt options in this node to change the AI's "personality." You can ask it to be more conservative, aggressive or to focus strictly on macroeconomic trends.

* **Generate Chart:** 

Open the JavaScript code in this node to customize the aesthetics. You can change line colors, adjust the line tension or switch the chart type from `"line"` to `"bar"`.

* **Email Nodes:** 

Customize the HTML body or change the target email addresses. You can add CCs or BCCs for broader team distribution.


## Add‑ons

* **Slack / Discord Integration:** 

Swap the Gmail nodes for messaging app nodes to drop these reports directly into a company finance channel.

* **Live Data APIs:** 

Replace the Google Sheets fetch nodes with direct HTTP requests to Yahoo Finance or Alpha Vantage to pull real-time market data on the fly.

* **PDF Generation:** 

Add a tool to convert the generated HTML payload into a polished PDF document, making it easier to attach to client emails.


## Use Case Examples

1.  **Weekly Wealth Management Reporting:** 

Automatically send weekly asset comparison summaries to high-net-worth clients to keep them informed on their portfolio balances.

2.  **Automated Wealth Plan Generator:** 

Feed the AI's allocation advice from this workflow directly into a broader wealth-planning system to calculate user eligibility and adjust debt-to-equity ratios.

3.  **Market Volatility Alerts:** 

Run this workflow daily on a schedule. If safe-haven assets (Gold) suddenly spike in comparison to risk assets (Equity), your team receives an immediate warning to adjust trading strategies.

4.  **Crypto vs. Traditional Markets:** 

Repurpose the workflow by simply changing the input sheets to compare Bitcoin performance against traditional S&P 500 index funds.

5.  **Real Estate vs. Stocks:** 

Adjust the data sources to compare local housing market indices against stock market growth over a multi-year period.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow fails at "Fetch Prices" nodes** | Google Sheets credentials expired or Sheet ID is incorrect. | Re-authenticate your Google OAuth2 credentials and ensure you have selected the correct document and sheet tab from the node dropdowns. |
| **"Invalid JSON from AI" error** | The Groq LLM returned conversational text (like "Here is your data:") instead of raw JSON. | Open the `Generate AI Investment Insights` node and ensure the system prompt strictly demands "Output ONLY valid JSON." You may also need to adjust the temperature setting on the Llama model. |
| **Chart image is broken in email** | The data arrays are empty or the QuickChart URL exceeded character limits. | Verify that the `Merge Market Data` node successfully matched dates for both assets. If comparing years of data, consider calculating weekly averages instead of daily to shorten the URL string. |
| **No emails are being received** | Gmail node misconfigured or blocked by Google security. | Check the Gmail credential connection. Ensure the recipient email address is valid and check your spam folder. |
| **Google Sheets history not updating** | The `Store Report History` node is mapping to the wrong column headers. | Ensure your destination Google Sheet has exact column headers for "Date", "Winner", "Summary" and "Report" as defined in the node's schema. |


## Need Help?

Running into hurdles getting this workflow perfectly tuned for your specific financial datasets? Whether you need help configuring the Groq AI prompts, adjusting the custom JavaScript parsing logic or building out more advanced add-ons like dynamic API integrations, our [n8n automation team](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia is here to assist. 

Feel free to reach out and [contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html) for expert n8n consultation. We can help you troubleshoot, customize and build the perfect automation architecture tailored to your exact business needs.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
