# 📈 Extract key earnings insights from Google News RSS and send alerts to Slack with Gemini Pro

> ⚡ **30 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# AI Earnings Analyst
&gt; RSS to Slack Automation via Gemini & n8n

---

This workflow automates the tedious task of monitoring financial news by converting raw Google News RSS feeds into structured, actionable insights. Using **Gemini Pro**, it scans the latest earnings headlines to extract Revenue Trends, Guidance and Surprises, logging them into a database and alerting your **Slack** channel only when significant financial data is detected.


### Rapid Deployment Guide

1.  [**Import** the JSON file into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2.  **Configure RSS:** Open the *Fetch: Google News RSS* node and update the `q=` parameter with your specific stock tickers or company names.
3.  **Connect AI:** Add your Google AI (Gemini) API key to the *Model: Gemini Pro* node.
4.  **Set Database:** Ensure the *Database: Log Results* node is pointed to your preferred n8n Data Table.
5.  **Enable Alerts:** Authenticate your Slack account in the *Send a message* node and pick your target channel.
6.  **Execute:** Click "Execute Workflow" to pull your first batch of high-signal earnings data.


## What It Does

The **Earnings News → Key Takeaways Extractor** acts as a 24/7 digital financial analyst. Instead of manually scrolling through news aggregators or reading lengthy press releases, this workflow proactively hunts for news related to quarterly results. It doesn't just pass along links; it "reads" the content using Large Language Models (LLMs) to identify the specific numbers that move markets.

The workflow is designed with a "High-Signal" philosophy. It includes a specialized logic filter that distinguishes between a simple announcement (e.g., "Company X to report earnings next week") and actual results (e.g., "Company X beats revenue by 10%"). By filtering out the noise, it ensures that your Slack notifications remain valuable and free of clutter.

Finally, the workflow provides a dual-layer output. Every article processed is archived in a centralized database for historical record-keeping, while the most critical "market-moving" updates are pushed instantly to your communication platform. This ensures you never miss a beat during a busy earnings season.


## Who It's For

* **Equity Analysts & Investors:** Stay ahead of market swings by getting structured data the second it hits the wire.
* **Portfolio Managers:** Monitor dozens of companies simultaneously without manual oversight.
* **Financial Journalists:** Automate the discovery of "surprises" and "beats" to prioritize story writing.
* **Corporate Strategy Teams:** Keep a pulse on competitor performance and market sentiment in real-time.


## Requirements to use this workflow

* [**n8n account**](https://n8n.partnerlinks.io/om1efg2qgvwi)
* **Google AI API Key:** To access the Gemini Pro model.
* **Slack Workspace:** An app or webhook integration to receive alerts.
* **n8n Data Table:** A table created within n8n to log the extracted results.


## How It Works & Setup Guide

The workflow is divided into three distinct layers: Data Acquisition, AI Intelligence and Governance/Delivery.

### Step 1: Data Acquisition

The **Fetch: Google News RSS** node pulls the latest news based on a search query. By default, it looks for "company earnings" or "quarterly results."

* **Configuration:** You can modify the URL in this node to target specific companies by adding `q=APPLE+earnings` or similar search terms.

* **Precondition:** The **Filter: Top 5 Articles** node is set to limit the batch size, preventing excessive API usage and ensuring you only process the most recent news.

### Step 2: Intelligence Engine

The raw RSS data is in XML format, which is hard for machines to read. The **Parser** converts this to JSON and the **Prompt Builder** packages the headline and link into a structured request for the AI.

* **AI Extraction:** The **AI: Extract Key Takeaways** node uses Gemini Pro to categorize data into three fields: *Revenue Trend, Guidance* and *Surprises*.

### Step 3: Governance & Delivery

Before any notification is sent, the **Formatter** cleans the AI text. The data is then saved to the **Database: Log Results** node.

* **The Filter:** The **High-Signal Filter** checks if the AI found actual numbers. If the Revenue Trend returns "Not available," the workflow stops there, keeping your Slack quiet. If data exists, it sends a formatted message to Slack including a link to the original article.


## How To Customize Nodes

* **Change the AI Model:** You can swap the *Model: Gemini Pro* node with OpenAI (GPT-4o) or Anthropic (Claude) by replacing the sub-node within the LangChain block.
* **Adjust Filter Sensitivity:** Change the logic in the **High-Signal Filter** to trigger based on specific keywords like "Surplus" or "Loss."
* **Modify Output Format:** Update the **Prompt Builder** to ask the AI for different metrics, such as "Dividend Announcements" or "CEO Quotes."


## Add‑ons

* **Email Summaries:** Add a Gmail node at the end of the loop to send a daily "Morning Report" of all logged results.
* **Sentiment Scoring:** Add a second AI node to give every headline a numerical sentiment score (1-10) to visualize market trends over time.
* **Multi-Source Fetching:** Connect other financial APIs like Yahoo Finance or Alpha Vantage for even deeper data verification.


## Use Case Examples

* **Competitor Tracking:** Set the RSS query to your top 5 competitors to get instant alerts on their fiscal health.
* **Sector Monitoring:** Use broad queries like "Semiconductor Earnings" to track an entire industry.
* **Crisis Management:** Monitor for keywords like "Loss" or "Restructuring" to catch negative news early.
* **Investment Research:** Build a database of "Guidance" vs "Actuals" over several quarters by letting the workflow run on a schedule.
* **Internal Reporting:** Automate the collection of earnings data for weekly executive briefings.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **No data in Slack** | The High-Signal Filter is blocking "empty" news. | Check the *Database: Log Results* node to see if articles are being processed but filtered out. |
| **AI Node Error** | Invalid or expired Google AI API Key. | Verify your credentials in the *Model: Gemini Pro* node and ensure billing is active. |
| **RSS Fetch Failed** | Google News URL format is incorrect. | Open the URL in a browser to ensure it returns a valid XML feed. |
| **Database Error** | The n8n Data Table ID does not match. | Re-select your table in the *Database: Log Results* node mapping. |


## Need Help?

Building complex financial automations can be tricky. If you need a hand setting up this workflow, customizing the AI prompts or building a completely bespoke business process, we are here to help!

**[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html)** today to speak with our n8n experts and take your business automation to the next level.

## 🔗 Nodes Used

HTTP Request, Slack, Filter, Basic LLM Chain, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
