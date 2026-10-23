# 📊 Compare physical vs digital 24K gold costs and returns with GoldAPI, IBJA, Groq and Google Sheets

> ⚡ **105 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Gold Investment Intelligence: Physical vs. Digital 24K Cost & Return Analysis

This high-performance n8n workflow automates the complex task of comparing gold investment types in the Indian market. By pulling live data from the **GoldAPI** (Digital) and the **IBJA** (Physical benchmark), it calculates the "Landed Cost" including GST and making charges to provide a data-driven "Buy/Wait" verdict powered by a **Groq-hosted LLM**.

Stop manually calculating gold spreads across different platforms. This workflow fetches real-time 24K gold rates, applies localized taxes (3% GST) and industry-standard fees (3-8%), analyzes global market sentiment via Yahoo Finance RSS and logs a professional investment report to Google Sheets. It transforms raw data into an actionable "Efficiency Score" using AI.

### Quick Implementation Steps:

1.  **Import** the JSON file into your n8n canvas.
2.  **Get API Key:** Sign up at GoldAPI.io and paste your token into the "Get Digital Price" header.
3.  **Connect AI:** Add your Groq API credentials to the "Groq Chat Model" node.
4.  **Prepare Sheet:** Create a Google Sheet with these headers: `Date`, `Digital_Price`, `Physical_Price`, `Arbitrage`, `Sentiment` and `Efficiency_Score`.
5.  **Authorize:** Link your Google account in the "Add Report" node and select your spreadsheet.


## What It Does

This workflow acts as a 24/7 Quantitative Financial Analyst specialized in the gold market. It eliminates the "hidden cost" surprise by calculating the absolute final price an investor pays out-of-pocket for 1 gram of 24K gold. It doesn't just look at the ticker price; it factors in the 3% GST applicable in India, platform spreads for digital gold apps and making charges for physical coins/bars.

Beyond raw arithmetic, the workflow contextually understands the global landscape. By scraping the latest commodity headlines from Yahoo Finance, the integrated AI Agent determines if the current market vibe is "Greedy," "Neutral," or "Fearful." It then synthesizes the price gap and the news into a single "Efficiency Score" (1-100), telling you exactly how favorable the buying conditions are today.

Finally, it maintains a permanent investment ledger. Every execution logs the data into a Google Sheet and formats a clean report ready to be sent to messaging apps, ensuring you never miss a buying opportunity when the "Arbitrage" (the price difference) favors one medium over the other.


## Who’s It For

* **Retail Investors:** Who want to know if it's cheaper to buy gold on a digital app or from a local jeweler today.
* **Financial Advisors:** Who need automated, data-backed daily gold market sentiment reports for their clients.
* **Gold Enthusiasts:** Tracking the price variance (Arbitrage) between digital and physical assets to optimize their portfolio.
* **FinTech Developers:** Looking for a professional blueprint on how to combine Web Scraping, Financial APIs and LLMs in n8n.


## Requirements

* [n8n Instance (supporting LangChain nodes)](https://n8n.partnerlinks.io/om1efg2qgvwi).
* **GoldAPI Token:** Free or Paid API key from GoldAPI.io.
* **Groq API Key:** To power the AI analysis (supports Llama 3 or Mixtral models).
* **Google Account:** For logging data into Google Sheets.
* **Internet Access:** To scrape the IBJA (India Bullion and Jewellers Association) website.


## How It Works & Set Up

### Step 1: Data Collection

The workflow starts with a **Manual Trigger** (can be changed to a **Schedule Trigger** for daily runs). It fetches the live 1-gram digital gold price in INR via an HTTP Request to GoldAPI. Simultaneously, it scrapes the official IBJA website to extract the physical benchmark rate using the CSS selector `#GoldRatesCompare999`.

### Step 2: The Math (Landed Costs)

The **Comparator** node uses JavaScript to apply real-world fees:

* **Digital:** Adds 3% GST and a 3% platform spread.
* **Physical:** Adds 3% GST and 8% making charges (standard for coins).
* It then determines which is cheaper and calculates the exact difference.

### Step 3: Market Context

The workflow pulls the top 3 most recent gold market headlines from Yahoo Finance. These are bundled together so the AI can read them in one go.

### Step 4: AI Analysis & Output

The **AI Agent** takes the math and the news headlines. It outputs a structured JSON verdict containing:

* **Arbitrage Check:** A one-sentence summary of the best deal.
* **Sentiment:** A label (Greedy/Neutral/Fearful).
* **Efficiency Score:** A rating out of 100.

### Step 5: Logging

The data is formatted into a readable message and appended as a new row in your designated Google Sheet.


## How To Customize Nodes

* **Adjust Fees:** If your local jeweler charges 10% instead of 8%, simply open the **Comparator** node and change the `1.08` value in the code.
* **Change AI Model:** In the **Groq Chat Model** node, you can switch between different models (e.g., Llama-3-70b vs 8b) depending on your speed and accuracy needs.
* **Update Selectors:** If the IBJA website updates its design, you can update the CSS Selector in the **Extract Physical Price** node to point to the new data location.


## Add-ons

* **WhatsApp/Telegram Notifications:** Add a node after "Message Format" to send the daily report directly to your phone.
* **Email Summary:** Use the Gmail or Outlook node to send a weekly summary of the best buying days to your inbox.
* **Price Drop Alert:** Add an **IF Node** to only trigger the workflow if the gold price drops by more than 2% in a single day.


## Use Case Examples

* **Automated Savings:** Set the workflow to run every morning at 10 AM to decide where to put your daily savings.
* **Jewelry Business Tool:** Use the data to show customers that your physical prices are competitive compared to digital market apps.
* **Market Research:** Use the Google Sheet history to track how "Sentiment" affects the price of gold over several months.
* **Arbitrage Trading:** Identify moments when digital gold is significantly undervalued compared to physical benchmarks.
* **Wealth Management:** Proactively notify clients when the "Efficiency Score" hits 90+, indicating a prime buying opportunity.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Digital Price = 0 or Error** | API Key is missing or expired. | Check the "Get Digital Price" node; ensure the token is in the headers. |
| **Physical Price Extraction Fails** | Website structure changed. | Verify the URL and the CSS selector `#GoldRatesCompare999` on IBJA. |
| **AI Agent gives generic response** | Prompt is too vague or news is missing. | Ensure the "Data Array" node is successfully bundling headlines. |
| **Google Sheets won't append** | Missing columns or incorrect ID. | Ensure headers (`Date`, `Sentiment`, etc.) match exactly in your sheet. |


## Need Help?

Need assistance setting up your GoldAPI credentials, customizing the making charges or adding custom notifications to this workflow? We can help you build and scale your automation ideas.

**[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html)** to help you customize this workflow or build similar AI-powered financial tools for your business.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
