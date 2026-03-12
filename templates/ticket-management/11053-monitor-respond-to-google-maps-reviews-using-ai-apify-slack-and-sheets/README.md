# 🎫 Monitor & respond to Google Maps reviews using AI, Apify, Slack, and Sheets

> ⚡ **335 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow automates reputation management for physical stores (restaurants, retail, clinics) by monitoring Google Maps reviews, analyzing them with AI, and drafting professional replies.

It acts as a 24/7 customer support assistant, ensuring you never miss a negative review and saving hours of manual writing time.

## Who is this for?
- **Store Managers & Owners:** Keep track of customer sentiment without manually checking Google Maps every day.
- **Marketing Agencies:** Automate local SEO reporting and response drafting for multiple clients.
- **Customer Support Teams:** Get instant alerts for negative feedback to resolve issues quickly.

## How it works
1. **Schedule:** Runs every 24 hours (customizable) to fetch the latest data.
2. **Scrape:** Uses **Apify** to retrieve the latest reviews from a specific Google Maps URL.
3. **Filter:** Checks the **Google Sheet** database to identify only new reviews and avoid duplicates.
4. **AI Analysis:** An **AI Agent** (via OpenRouter/OpenAI) analyzes the review text to:
   - Generate a short summary.
   - Draft a polite, context-aware reply based on the star rating (e.g., apologies for low stars, gratitude for high stars).
5. **Alert:** Sends a **Slack** notification.
   - **Low Rating (&lt;4 stars):** Alerts a specific channel (e.g., #customer-support) with a warning.
   - **High Rating:** Alerts a general channel (e.g., #wins) to celebrate.
6. **Save:** Appends the review details, AI summary, and draft reply to the Google Sheet.

## Requirements
- **n8n:** Cloud or self-hosted (v1.0+).
- **Apify Account:** To run the *Google Maps Reviews Scraper*.
- **Google Cloud Platform:** Enabled Google Sheets API.
- **Slack Workspace:** A webhook URL or OAuth connection.
- **OpenRouter (or OpenAI) API Key:** For the LLM generation.

## How to set up
1. **Google Sheets:** Create a new sheet with the following headers in the first row:
   `reviewId`, `publishedAt`, `reviewerName`, `stars`, `text`, `ai_summary`, `ai_reply`, `reviewUrl`, `output`, `publishedAt date`.
2. **Configure Credentials:** Set up your accounts for Google Sheets, Apify, Slack, and OpenRouter within n8n.
3. **Edit the "CONFIG" Node:**
   - `MAPS_URL`: Paste the full Google Maps link to your store.
   - `SHEET_ID`: Paste the ID found in your Google Sheet URL.
   - `SHOP_NAME`: Your store's name.
4. **Slack Nodes:** Select the appropriate channels for positive and negative alerts.

## How to customize
- **Change the AI Persona:** Open the **AI Agent** node and modify the "System Message" to match your brand's tone of voice (e.g., casual, formal, or witty).
- **Adjust Alert Thresholds:** Edit the **If Rating &lt; 4** node to change the criteria for what constitutes a "negative" review (e.g., strictly &lt; 3 stars).
- **Multi-Store Support:** You can loop this workflow over a list of URLs to manage multiple locations in a single execution.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
