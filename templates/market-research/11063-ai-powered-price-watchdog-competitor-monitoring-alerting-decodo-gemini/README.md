# 📊 AI-powered price watchdog: competitor monitoring & alerting (Decodo & Gemini)

> ⚡ **260 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Never miss a competitor price change again.**

This advanced workflow automates the most difficult aspect of market monitoring: intelligently extracting structured pricing data from complex, dynamic competitor websites and comparing it against your historical baseline. It sends instant, conditional alerts only when a significant price shift is detected.

The workflow uses **Decodo** for dynamic scraping, **Gemini** for reliable data parsing, and **Google Sheets** for robust historical state management.

### ✨ Key Features
* **AI-Powered Extraction:** Uses **Gemini 2.5 Flash** to analyze raw, noisy website HTML and output a clean JSON array of plan names, prices, and features, bypassing brittle CSS selectors.
* **Historical Comparison:** Automatically retrieves the price from the previous workflow run and calculates the percentage difference (diff) for every single plan item.
* **Edge Case Handling:** Includes specific code logic to prevent errors and flag crucial events like a **"Free-to-Paid"** plan transition (division by zero).
* **Conditional Alerting:** Sends immediate Slack notifications only when the price change exceeds your predefined percentage threshold.
* **State Management:** Uses Google Sheets to automatically **shift data** (Current Price $\rightarrow$ Old Price) to maintain the historical baseline for the next scheduled execution.

### ⚙️ How it Works (The Monitoring Loop)

1.  **Setup & Sourcing:** The workflow is executed on a schedule, defining the global alert threshold and retrieving the list of target URLs from a Google Sheet.
2.  **Scraping (Dynamic):** **Decodo** runs with **JavaScript rendering ON** to fetch the complete, dynamic HTML of the pricing page.
3.  **AI Structuring:** **Gemini** receives the raw HTML and uses a strict System Prompt to extract a clean JSON array of all pricing plans.
4.  **Comparison & Calculation:** A **Code Node** parses the current plan list and the list from the previous run (stored in Sheets). It calculates the percentage change for every matching plan.
5.  **Alert Decision:** An **If Node** checks the calculated change against the threshold. If the condition is met, the filtered alert proceeds to Slack.
6.  **Data Shift & Log:** The final **Sheets Update** node shifts the current plan data to the "Last Plans" column and moves the previous "Last Plans" to the "Old Plans" column, setting the new baseline for the next scheduled check.
---

### 📥 Decodo Node Installation

The Decodo node is used three times in this workflow for precision scraping and searching.

1.  **Find the Node:** Click the **+** button in your n8n canvas.
2.  **Search:** Search for the **`Decodo`** node and select it.
3.  **Credentials:** When configuring the first Decodo node, use your API key.

🎁 Get a free Web Scraping API subscription here 👉🏻 [https://visit.decodo.com/X4YBmy](https://visit.decodo.com/X4YBmy)

-----
### 🛠️ Setup Instructions

1.  **Credentials:** Obtain API keys for **Decodo** (using the coupon below), **Google Sheets**, and **Slack**.
2.  **Google Sheets Setup:** Create a sheet with the following required columns for tracking (one row per URL):
    * `Name`
    * `URL`
    * `Old Plans` (JSON String)
    * `Last Plans` (JSON String)
    * `Updated At` (Date)
3.  **Global Configuration:** Open the **`Config: Alert Parameters`** node to set your `alert_threshold` (e.g., `10`).

I understand. To complete the final template description for your **Competitor Price Monitoring** workflow, here is the dedicated **How to Adapt the Template** section, focusing on functional changes a user can make for advanced monitoring.

***

### ➕ How to Adapt the Template

The workflow is currently configured for maximum efficiency and stability. To expand its functionality or change its dependencies, you can implement the following adaptations:

* **Change Database for Storage:** Replace the **Google Sheets** nodes with **Airtable** or **Notion** nodes for historical storage. Since your comparison logic relies on the JSON string being saved and retrieved, you will only need to change the read/write operations (the Code logic remains the same).
* **Change Alert Channel:** Easily swap the **Slack** node with a **Gmail**, **Discord**, or **Pushover** node to deliver critical price alerts to a different team or application.
* **Dynamic Thresholds:** Modify the **`Config: Alert Parameters`** to include separate fields for price *increases* (e.g., `alert_increase_threshold`) and price *decreases* (e.g., `alert_decrease_threshold`), allowing you to track competitor sales differently than price hikes.
* **Advanced Price Filtering:** Adjust the code logic in **`Code: Isolate Pricing Section`** to target specific currency symbols (e.g., `€`, `£`) or to filter out prices that appear to be marked as promotional (e.g., text containing "SALE" or "Discount").
* **Add Advanced Alert Reporting:** Instead of sending a simple Slack message, use the full list of `price_diffs` (which contains all plans) to generate a consolidated daily **CSV report** or a professional **HTML email** summarizing all movements, even those below the alert threshold.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
