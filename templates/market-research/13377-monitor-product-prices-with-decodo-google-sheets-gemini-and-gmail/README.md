# 📊 Monitor product prices with Decodo, Google Sheets, Gemini and Gmail

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Categories:** Business Automation, E-commerce, Intelligence, AI
This workflow automates high-frequency price tracking across e-commerce platforms. It combines the data-handling power of the Decodo node with the intelligence of Google Gemini to eliminate manual price checks. It is for businesses seeking real-time market intelligence.
**Benefits**
1. Total Automation: Handles data sourcing, and email notifications without human help.
2. Intelligent Extraction: Uses AI to analyze the full page content.
3. Precision Alerting: Triggers notifications when a product's price meets or falls below the "Desired Price."
4. Scalable Architecture: Processes large batches of products.

**How It Works**
1. Scheduled Data Retrieval: The Schedule Trigger pulls a list of URLs and target prices from Google Sheets.
2. Raw Data Processing: Data flows through a Decodo node.
3. Full-Body Extraction: The workflow captures the entire body of the webpage.
4. AI-Driven Analysis: An AI Agent, powered by Google Gemini, analyzes the text to identify the product name and price.
5. Regex Data Cleaning: A JavaScript node uses Regular Expressions to sanitize the AI's response.
6. Smart Comparison & Alerting: An If Node compares the live price against the "Desired Price." If the condition is met, an automated alert is sent via Gmail.

**Requirements**
1. n8n Instance
2. Google Account
3. Google Gemini API Key
4. Decodo Credentials

**How to Use**
- Setup your Spreadsheet: Create a Google Sheet with columns for the product link and "Desired price."
- Authenticate Nodes: Connect your Google Sheets, Gmail, and Gemini credentials within n8n.
- Configure Parameters: Ensure the If node correctly references the "Desired price" column from your Google Sheet output.
- Deploy: Activate the workflow. The system will now run automatically, monitoring the list and notifying of deals.

**Business Use Cases**
- Retail Arbitrage Agencies: Spot price drops on supplier sites to maximize profit margins.
- Competitor Intelligence: Monitor rival pricing strategies.
- Procurement Departments: Automate the "buy" signal for raw materials when they hit a specific price point.
- E-commerce Managers: Track MAP (Minimum Advertised Price) compliance.
- Revenue Potential
- Increased Margins: Buy inventory at the lowest prices.
- Market Leadership: React faster than competitors to market-wide price shifts.
- Service Offering: Provide "Price Watch" services for e-commerce clients.

**Difficulty Level:** 
- Intermediate
- Estimated Setup Time: 40 min
- Monthly Operating Cost: Low (based on Gemini API tokens)

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
