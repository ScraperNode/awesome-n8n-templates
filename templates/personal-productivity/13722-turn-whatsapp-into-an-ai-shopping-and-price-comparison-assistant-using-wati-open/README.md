# ⚡ Turn WhatsApp into an AI shopping and price comparison assistant using Wati, OpenAI, Serper, and Google Sheets

> ⚡ **5 views** · ⚡ [Personal Productivity](../)

## Description

Elevate your shopping experience with an AI-driven personal assistant that lives right in your WhatsApp. This template automates the entire lifecycle of a shopping list—from intelligent intake and live web price comparisons to proactive daily deal alerts—by combining WATI, OpenAI, Serper (Google Search), and Google Sheets.

---

## 🎯 What This Workflow Does

Turns WhatsApp into a high-powered price engine across three independent pipelines:

### 📥 Pipeline A: Intelligent Intake
When a user sends a list (e.g., `list: milk 2L, eggs 12`), OpenAI parses every item into structured categories, quantities, and units before saving them to the Google Sheets master list.

### 🔍 Pipeline B: Live Price Engine
When a user types `compare`, the bot triggers a real-time web search via Serper. OpenAI then analyzes the search results to pick the absolute best deal and alternative stores, sending back a formatted "Comparison Card" with links.

### 📬 Pipeline C: Proactive Deal Alerts
A scheduled trigger runs daily at 8 AM, scanning your saved items for price drops. If it finds a saving of ≥ 10%, it automatically pings the user with a personalized deal alert.

---

## ✨ Key Features

- **Semantic Parsing:** OpenAI understands natural language lists, so you don't have to follow strict formatting.
- **Live Search Integration:** Uses the Serper API to fetch actual live prices from major Indian retailers in seconds.
- **Automated UI:** Uses custom emojis and visual bar charts to group items by category (e.g., 🥦 Produce, 🥛 Dairy) for easy mobile viewing.
- **Duplicate Prevention:** The "Savings Tracker" logic de-duplicates items so you only ever see the latest, most relevant price for any product.
- **Maintenance Commands:** Simple keywords like `clear` allow users to reset their list and start fresh.

---

## 💼 Perfect For

- **Savvy Shoppers:** Finding the lowest prices on groceries and electronics without manual searching.
- **Budget-Conscious Households:** Tracking long-term price trends for recurring household purchases.
- **E-commerce Researchers:** Monitoring competitor pricing and deals automatically.
- **Teams:** Sharing a centralized shopping list that updates with live market data.

---

## 🔧 What You'll Need

### Required Integrations

- **WATI** – To handle all WhatsApp triggers and message delivery.
- **OpenAI API** – For item classification and deal extraction.
- **Serper.dev** – To perform high-speed Google Shopping searches.
- **Google Sheets** – As your primary database for lists and deals.

---

## 🚀 Quick Start

1. **Import Template** – Copy the JSON and import it into your n8n instance.
2. **Set Credentials** – Connect your WATI, OpenAI, Serper, and Google Sheets accounts.
3. **Configure Sheets** – Ensure your Google Sheet has two tabs:

   **Shopping List:**  
   `phone`, `item`, `qty`, `unit`, `category`, `addedAt`, `listid`, `username`, `Status`

   **Deals:**  
   `listid`, `phone`, `item`, `price`, `originalPrice`, `storeName`, `savingPct`, `Currency`, `url`, `summary`, `confidence`, `alternatives`, `foundAt`, `alertSent`

4. **Test the Flow** – Send `list: 1kg rice, milk 2L` to your WATI number.
5. **Run Comparison** – Reply `compare` to see the AI find the best deals live!

---

## 📈 Expected Results

- 15–25% savings on monthly groceries by consistently identifying the cheapest reputable retailer.
- Zero search time: The AI searches the entire web for you in the background.
- Automated alerts: Never miss a price drop on items you actually need.
- Centralized organization: A tidy, categorized list that replaces messy paper notes or fragmented chat messages.

---

Ready to shop smarter? Import this template and connect your Serper account to start saving today!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
