# 📊 Monitor news risk with Google News, Groq (Llama 3), and Gmail alerts

> ⚡ **91 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI-Powered News Risk Monitoring & Alert System 
*(Google News + Groq + Gmail)*

---

This workflow acts as an automated, proactive monitoring system that separates "market noise" from actual "market risk". Instead of flooding your inbox with every single news mention about a company or topic, it uses artificial intelligence (Llama 3 via Groq) to act as a virtual risk analyst. The AI reviews recent Google News articles, categorizes the risk as Low, Medium or High and only sends you an email alert when the risk is significant (Medium or High). 


### Fast Track Setup

1. **Prepare your Data:** Create a Google Sheet named "Risk Keywords" and list your target companies or terms under a "Keyword" column.
2. **Connect Credentials:** Add your Google Sheets, Groq API and Gmail credentials to your n8n instance.
3. **Configure Nodes:** Select your specific spreadsheet in the "Fetch Risk Keywords" node and update the "Gmail Alert Dispatcher" node with your recipient email address.
4. **Run:** Trigger the workflow manually to start receiving your filtered risk alerts.


## What It Does

This workflow automates the tedious process of monitoring the news for potential business risks. It begins by fetching a customized list of keywords — such as company names, competitors or industry terms — from a Google Sheet. It then processes these keywords one by one, using an iterator to safely manage the flow of data.

For each keyword, the workflow scrapes the top 4 most recent articles from a Google News RSS feed. To ensure the system doesn't overwhelm the AI service with too many requests at once, it introduces a brief 2-second rate-limit delay. 

Once the news data is collected, an AI Agent uses Llama 3 (via Groq) to read the headline and snippet of each article. The AI is instructed to determine the risk level and provide a one-sentence reason for its decision. The workflow then filters out any "Low" risk news, bundles the "Medium" and "High" risk alerts together, formats them into a clean text summary and emails the final report directly to you.


## Who’s It For

* **Investors and Traders:** Who need to monitor sudden negative news about stocks in their portfolio without reading every minor press release.
* **Risk Management Professionals:** Who must keep an eye on supply chain disruptions, regulatory changes or macroeconomic indicators like inflation.
* **Public Relations (PR) Teams:** Who want instant alerts when a client or their own brand is mentioned in a potentially damaging context.
* **Business Owners and Executives:** Who need to monitor competitor struggles or industry shifts that could impact their strategic planning.


## Requirements to use this workflow

To successfully run this workflow, you will need:
* [An active n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi
 ).
* A Google account to create the "Risk Keywords" Google Sheet.
* Google Sheets credentials configured within n8n.
* A Groq API key to power the Llama 3 AI analysis.
* Gmail credentials configured within n8n to send the final alerts.


## How It Works & Set Up

Follow these step-by-step instructions to configure and use the workflow:

1. **Set Up the Google Sheet:**

   * Create a new Google Sheet and name it exactly "Risk Keywords".
   * In the first tab (Sheet1), create a header row and name the first column "Keyword".
   * Fill the rows below with the terms you want to monitor (e.g., "Tesla", "Nvidia", "Inflation Rate").

2. **Configure n8n Credentials:**

   * Go to your n8n credentials page and ensure you have active connections for Google Sheets (OAuth2) and Gmail (OAuth2).
   * Create a new credential for the Groq API and input your secret API key.

3. **Adjust the Google Sheets Node:**

   * Open the "Fetch Risk Keywords" node.
   * Use the dropdown menus to select your "Risk Keywords" document and "Sheet1".

4. **Adjust the AI Node:**

   * Open the "Llama 3 (via Groq)" node and ensure your Groq credential is selected.

5. **Configure the Email Destination:**

   * Open the "Gmail Alert Dispatcher" node.
   * Find the "Send To" field and replace "RECIPIENT_EMAIL_HERE" with your actual email address.


## How To Customize Nodes

* **Top 4 Articles Filter (Limit Node):** 

Currently, the workflow only analyzes the top 4 recent articles to save API costs and time. You can open this node and change the `maxItems` value to 10 or 20 if you want a broader scan.

* **API Rate-Limit Delay (Wait Node):** 

The workflow pauses for 2 seconds between batches. If you are using a free tier API with strict limits, you can increase this wait time to 5 or 10 seconds.

* **Risk Analysis Agent (Agent Node):** 

You can open this node to tweak the AI's system message. For example, you can tell the AI to look specifically for "financial risk" or "reputational damage" rather than general risk.


## Add‑ons

You can easily extend this workflow to make it even more powerful:

* **Schedule Trigger:** Replace the manual "Start" node with a Schedule Trigger to run this scan automatically every morning at 8:00 AM or every hour.
* **Slack or MS Teams Integration:** Instead of sending a Gmail alert, you can swap the Gmail node for a Slack or Microsoft Teams node to push high-risk alerts directly to a company channel.
* **Database Logging:** Add an Airtable or Notion node right before the email dispatcher to keep a historical log of all high-risk events over time.


## Use Case Examples

Here are a few ways this workflow can be utilized in the real world:

1. **Supply Chain Monitoring:** 

Add keywords for your key suppliers or global shipping routes (e.g., "Suez Canal disruption"). Get alerted immediately if a medium or high risk threatens your inventory.

2. **Competitor Watchlist:** 

Track your top 5 competitors. If a competitor faces a high-risk situation (like a lawsuit or product recall), you are notified and can capitalize on the market shift.

3. **PR Crisis Prevention:** 

Input your own brand names and executive names. Catch negative press (high risk) the moment it hits Google News so your team can draft a response quickly.

4. **Macroeconomic Tracking:** 

Monitor terms like "interest rate hike", "housing market crash" or "recession". Automatically filter out opinion pieces and only get alerted to high-risk factual reports.

*(Note: There are countless other use cases for this workflow depending on the keywords and AI prompt you choose!)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow fails at the Groq AI node** | API Rate Limits exceeded or invalid API Key. | Check your Groq dashboard to ensure your API key is correct and you haven't hit your rate limit. Increase the wait time in the "API Rate-Limit Delay" node. |
| **No emails are being sent** | All news was categorized as "Low" risk. | This is normal behavior! If you want to test the email, temporarily bypass the "Filter High/Medium Risk" node or add a highly controversial keyword to your sheet. |
| **Email formatting looks broken** | The AI outputted invalid JSON data. | The "Format Alert Email" code node is designed to handle errors. However, to prevent this, you can refine the prompt in the "Risk Analysis Agent" to be stricter about JSON formatting. |
| **Google Sheets node fails** | Incorrect document selected or permissions issue. | Re-authenticate your Google account in n8n credentials and ensure the sheet is exactly named "Risk Keywords". |


## Need Help?

Building and customizing automated workflows can sometimes be tricky, especially when integrating AI and dealing with complex data structures. Whether you need help setting up this exact News Risk Alert workflow, customizing it with the Add-ons mentioned above or building an entirely new automation tailored to your business needs, our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia are here to help! 

Please feel free to [contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html) for expert assistance.

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
