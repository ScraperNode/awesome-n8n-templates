# 🎣 Monitor Lis Pendens real estate filings via Telegram, BrowserAct and Gemini

> ⚡ **48 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Monitor real estate filings via Telegram, BrowserAct and Gemini

This workflow transforms your Telegram bot into an automated real estate monitoring tool. Send a message like "Check filings for the last 5 days," and the bot will scrape the official county clerk site for "Lis Pendens" (pre-foreclosure) filings, format the messy legal data into a readable report, and deliver it directly to your chat.

## Target Audience
Real estate investors, wholesalers, and agents looking for pre-foreclosure leads.

## How it works
1. **Understand Request**: The workflow receives your Telegram message. An **AI Agent** classifies it: are you chatting, or asking for real estate data?
2. **Calculate Dates**: If you don't specify a date range, the workflow automatically calculates a default window (e.g., Today minus 5 days) to search for recent filings.
3. **Scrape Records**: **BrowserAct** executes a background task to search the public records site using the calculated dates and scrapes all matching "Lis Pendens" filings.
4. **Format Data**: A second **AI Agent** processes the raw legal text. It cleans up party names, extracts file numbers, and formats everything into a clean HTML list with download links.
5. **Deliver Report**: The bot splits the report into multiple messages (if necessary) and sends them to your **Telegram** chat.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, **Google Gemini**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Texas Foreclosure Leads** template is saved in your BrowserAct account.
3. **Configure Telegram**: Create a bot via BotFather and add the API token to your Telegram credentials.
4. **Activate**: Turn on the workflow.
5. **Test**: Send "Check filings" to your bot to start the search.

## Requirements
* **BrowserAct** account with the **Texas Foreclosure Leads** template.
* **Telegram** account (Bot Token).
* **Google Gemini** & **OpenRouter** accounts.

## How to customize the workflow
1. **Change Search Query**: Modify the **BrowserAct** template to search for different document types (e.g., "Divorce Decrees" or "Probate").
2. **Adjust Date Range**: Update the **From_Date** node to search for a longer period (e.g., -30 days).
3. **Filter Results**: Add logic to the **Generate response** agent to only show filings from specific banks or attorneys.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [⚖️ How to Scrape Lis Pendens Records Automatically (Texas Real Estate)](https://youtu.be/Q2zUXDDhD8w)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
