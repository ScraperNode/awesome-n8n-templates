# 📊 AI industry trend monitor 24/7 across X, Gmail, and websites using GPT-5

> ⚡ **55 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Overview of the n8n Workflow

This n8n workflow automates the daily monitoring of trends across X (Twitter), newsletters, and websites. It runs on a schedule, fetches data from configured sources in Google Sheets, processes it using AI agents for extraction and analysis (including browser automation and web search), and appends relevant updates to a Google Sheets database. The workflow handles data aggregation, filtering for recency, and deduplication, ensuring users receive concise, actionable insights on topics like AI news or market opportunities.

---

## How it Works

• The workflow triggers daily, pulling configuration from Google Sheets (e.g., X accounts, newsletters, websites).
• It scrapes recent X posts, fetches newsletter emails via Gmail, and browses websites using an AI agent to extract updates.
• All data is aggregated, analyzed by an AI agent (with optional web research for context), and filtered for relevance.
• Extracted data points (name, description, source, date) are saved to Google Sheets for easy review.

---

## Set Up Steps

Setup takes about 15-30 minutes, focused on credentials and API keys. Detailed node guidance is in the workflow's sticky notes—clone it, add credentials, and test. The workflow is plug-and-play once imported; only edit prompts or sources as needed.

---

### ⚙️ AI Trend Listener: Monitor Updates 24/7

Automate daily scanning of X (Twitter), newsletters, and websites for trends, saving key updates to Google Sheets.

### 🧑‍💻 Author: LeeWei

---

### 🚀 Steps to Connect:

1.  **Google Sheets Setup**
    - Duplicate the template sheet.
    - Add OAuth2 credentials in n8n for read/write access to the sheet.
    - Populate the X, Newsletters, and Websites tabs with your sources (e.g., usernames, email filters, URLs).

2.  **Apify Integration (for X Scraping)**
    - Sign up at [apify.com](https://www.apify.com?fpr=mj2xxm) and generate an API token.
    - Paste the token into the **`HTTP Request`** node's credentials (header auth: Authorization Bearer).
    - Test with a sample X account to fetch recent posts.

3.  **Gmail Setup (for Newsletters)**
    - Create OAuth2 credentials in n8n with scopes for reading emails (`gmail.readonly`).
    - Connect to the **`Gmail`** nodes; ensure your newsletters are in the inbox.
    - 💡 Filter for specific senders in the Newsletters sheet tab.

4.  **Airtop Browser Automation**
    - Register at [airtop.ai](https://airtop.ai), generate an API key, and create a profile.
    - Paste the key into the **`Airtop`** nodes' credentials.
    - The browser agent handles website navigation—test with a sample URL.

5.  **OpenAI API Key**
    - Generate a key at [platform.openai.com](https://platform.openai.com).
    - Paste it into the **`OpenAI`** (or equivalent chat model) nodes.
    - Use for AI agents analyzing data; select a model like GPT-4 for best results.

6.  **Perplexity AI (for Web Research)**
    - Sign up at [perplexity.ai/api](https://www.perplexity.ai/api) and get an API key.
    - Paste it into the **`Perplexity AI`** tool node.
    - Enables context gathering during analysis—use sparingly for cost.

---

## Plug and Play Instructions

Clone the workflow JSON directly into n8n—all nodes (schedules, agents, aggregators, HTTP requests) are pre-wired and ready. No re-setup needed beyond the steps above. Key editable fields (found in sticky notes):

- **Your Instructions Node: Browser Prompt**  
  Customize the website extraction (default: "Search all the latest AI news from this page and its child pages"). Example: Change to "Find new real estate listings" for market-specific monitoring.

- **Your Instructions Node: Analysis Prompt**  
  Adjust the AI filtering criteria (default: Focuses on AI developments). Example: Add rules for crypto signals or finance news exclusion/inclusion.

- **Google Sheets Nodes (Get X Accounts, Get Newsletters, Get Websites)**  
  Update the sheet IDs or tabs if using a custom duplicate; add more sources directly in the sheet.

- **Schedule Trigger Node**  
  Change the daily time (default: 6 AM) or frequency for more frequent runs.

- **Filter Node (for Tweets)**  
  Tweak the 24-hour recency check if monitoring longer periods.

Test with the default AI focus: Run manually and check the Data Points sheet for updates.

---

## Potential Customizations

- **Add More Sources**: Expand Google Sheets tabs for new categories (e.g., Reddit via HTTP) and add aggregation branches.
- **Switch AI Models**: Replace OpenAI with another provider in the chat model nodes.
- **Enhance Output**: Add notifications (e.g., Slack node) after saving to Sheets.
- **Scale Monitoring**: Increase Apify maxItems or add loops for larger datasets.

---

## Considerations and Improvements

- **Rate Limits**: Apify and Perplexity have usage caps; monitor for heavy queries. Airtop starts with free credits (10,000).
- **Data Volume**: Handles moderate sources; for high-volume, batch process or filter stricter.
- **Privacy**: Data passes through third-party APIs—avoid sensitive topics.
- **Enhancements**: Integrate email notifications for urgent trends or add deduplication logic for cross-source overlaps.

This workflow keeps you ahead in fast-moving fields like AI or markets, delivering daily insights without manual checking. Questions? Test it in n8n!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
