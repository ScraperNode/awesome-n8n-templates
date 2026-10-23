# 📈 Generate daily stock market insights with Alpha Vantage, Google Gemini AI and Slack

> ⚡ **217 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Automated Daily Stock Market Insight Generator

&gt; Alpha Vantage, Google Gemini AI and Slack Integration

---

This n8n workflow provides an end-to-end solution for automated financial analysis. By combining real-time market data with generative AI, it transforms raw stock numbers into actionable narrative insights delivered directly to your team's communication hub.

Stay ahead of the market without manual research. This workflow fetches the day's top-performing and underperforming stocks, identifies the "winner" of the day, pulls the latest news headlines for that specific company and uses **Google Gemini AI** to write a professional summary of *why* the market moved the way it did.

### High-Speed Setup Guide

1.  **API Keys:** Get a free API key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key) and [Google AI Studio](https://aistudio.google.com/).
2.  **Credentials:** Input these keys into the **HTTP Request** nodes and the **Google Gemini Chat Model** node.
3.  **Slack Connection:** Connect your Slack account in the final node and select your desired channel or user.
4.  [**Activate:** Switch the workflow to **Active** and trigger it manually or via a schedule](https://n8n.partnerlinks.io/om1efg2qgvwi).


## What It Does

This automation acts as a digital financial analyst that works 24/7. It begins by querying the **Alpha Vantage API** to retrieve a list of the "Top Gainers and Losers." Instead of just passing raw data, it uses a custom logic gate to calculate the overall market sentiment—determining if the day was "Bullish" (positive) or "Bearish" (negative) based on the average percentage moves.

Once the top-performing stock is identified, the workflow performs "Deep Research." It isolates that stock's ticker symbol and searches for the most recent news headlines related to it. This ensures that the final report isn't just about numbers, but about the real-world events (like earnings calls or product launches) driving those numbers.

Finally, all this gathered context is fed into **Google Gemini**. The AI processes the market sentiment, the stock performance and the news headlines to draft a concise, 3-4 line professional report. This report is then automatically formatted and posted to a **Slack** channel, keeping you and your team informed without ever leaving your chat app.


## Who It's For

* **Day Traders & Investors:** Get a quick summary of market leaders at the closing bell.
* **Financial News Outlets:** Automate the "Daily Recap" section of your reports or social media feeds.
* **Portfolio Managers:** Monitor significant moves in the market to identify new opportunities.
* **Business Operations Teams:** Stay informed on market trends that might affect your industry.


## Requirements

* [**n8n Account:** (Cloud or Self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi).
* **Alpha Vantage API Key:** Used for market data and news.
* **Google Gemini API Key:** Used for AI analysis (can be swapped for OpenAI/Anthropic).
* **Slack Workspace:** With permissions to add an n8n integration.


## How It Works & Setup Guide

The workflow is divided into three logical groups to ensure data integrity and ease of use.

### Step 1: Data Acquisition & Prep

* **Node:** *Fetch Market Data* & *Calculate Market Sentiment*.
* **Setup:** Open the "Fetch Market Data" node and replace the `apikey` value with your Alpha Vantage key. The JavaScript code in the following node automatically calculates the average move of the top 10 stocks to determine the daily sentiment.

### Step 2: Research & Sanitization

* **Node:** *Sanitize Stock Ticker* & *Get Ticker News Context*.
* **Setup:** The workflow identifies the #1 gainer. The "Sanitize" node ensures the ticker is clean (removing symbols like `^`) so the News API doesn't error out. It then pulls the top 3 headlines to provide "The Why."

### Step 3: AI Analysis & Delivery

* **Node:** *Generate Financial Insight* & *Post to Portfolio Channel*.
* **Setup:** Connect your **Google Gemini** credentials. The AI is given a "System Message" that instructs it to act as a financial analyst.
* **Slack Setup:** In the "Post to Portfolio Channel" node, click on the **User** or **Channel** dropdown to select where the report should be sent.


## How To Customize Nodes

* **Change the AI Provider:** If you prefer OpenAI, delete the *Google Gemini Chat Model* node and replace it with the *OpenAI Chat Model* node. Connect it to the *Generate Financial Insight* agent.

* **Adjust Sentiment Logic:** You can edit the code in the *Calculate Market Sentiment* node to change how "Bullish" or "Bearish" is defined (e.g., based on a specific index instead of gainers/losers).

* **Filter News:** You can adjust the *Keep Top 3 Headlines* node to keep more or fewer articles depending on how much detail you want the AI to analyze.


## Add‑ons

* **Email Reports:** Add a **Gmail** or **Outlook** node at the end to send the same report to your email subscribers.

* **Database Logging:** Add a **PostgreSQL** or **Google Sheets** node to keep a historical record of daily market sentiment for long-term trend analysis.

* **Multi-Stock Analysis:** Duplicate the "Research" branch to analyze both the Top Gainer *and* the Top Loser in the same report.


## Use Case Examples

1.  **Morning Briefings:** Schedule the workflow to run 30 minutes after market open to see early movers.

2.  **Competitor Tracking:** Modify the search to look for specific tickers of competitors and alert Slack when they have high volatility.

3.  **Content Creation:** Use the AI-generated summary as a draft for a "Daily Market Update" LinkedIn post.

4.  **Portfolio Hedge Alerts:** Set the sentiment logic to trigger a "High Alert" message if the average loser move exceeds -10%.

5.  **Educational Tool:** Use the news context to learn which types of headlines (e.g., FDA approvals, CEO changes) drive the biggest price swings.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **API Rate Limit Error** | Alpha Vantage free tier allows limited calls per minute. | The "API Rate Limit Guard" (Wait node) is included; increase the wait time if errors persist. |
| **Empty News Context** | The top gainer might be a new or obscure ticker with no recent news. | The workflow will still run, but the AI will have less context. Try increasing the news search window. |
| **Slack Message Not Sent** | Incorrect Channel ID or User ID. | Re-select the destination in the Slack node dropdown menu. |
| **AI Output is Too Long** | The prompt instructions are being ignored. | Edit the "System Message" in the AI Agent node to explicitly state a word count limit. |


## Need Help?

Need assistance setting up your API keys or want to customize this workflow with advanced add-ons? We are here to help! 

**WeblineIndia** specializes in [building complex business process automations](https://www.weblineindia.com/process-automation-solutions.html) that save time and reduce overhead. 

**[Contact WeblineIndia to Build Your Custom Automation](https://www.weblineindia.com/contact-us.html)**

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
