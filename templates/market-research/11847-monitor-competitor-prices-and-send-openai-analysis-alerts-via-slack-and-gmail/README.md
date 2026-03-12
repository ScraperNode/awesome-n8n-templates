# 📊 Monitor competitor prices and send OpenAI analysis alerts via Slack and Gmail

> ⚡ **25 views** · 📊 [Market Research & Insights](../)

## Description

## Competitor Price Monitoring with AI-Powered Alerts

### What this workflow does

This workflow automatically monitors competitor product prices on a scheduled basis, detects meaningful price changes, and delivers actionable alerts enriched with AI-powered competitive analysis.

It compares current and historical price datasets, identifies increases, decreases, new products, and removals, and uses AI to assess market impact and recommend strategic actions. Alerts are intelligently routed to Slack or Email based on urgency, while all results are logged for auditing and trend analysis.

This template is ideal for pricing teams, product managers, and competitive intelligence workflows that require timely, data-driven insights without manual monitoring.

---

### How it works

1. **Scheduled execution**
   - Runs on a configurable cron schedule (default: every 6 hours).
   - Initializes a monitoring session with timestamps and tracking IDs.

2. **Price data collection**
   - Fetches current competitor pricing via HTTP APIs.
   - Retrieves previous price snapshots from Google Sheets.

3. **Data normalization & comparison**
   - Normalizes current and historical data into a unified schema.
   - Uses the **Compare Datasets** node to detect:
     - New products
     - Removed products
     - Price increases or decreases
     - Unchanged prices

4. **Change evaluation**
   - Calculates percentage price changes.
   - Classifies severity:
     - **Urgent**: ≥ 10% change
     - **Routine**: 5–10% change
     - **No alert**: &lt; 5% or unchanged

5. **AI-powered analysis**
   - An AI agent evaluates competitive impact.
   - Generates concise recommendations (match, hold, differentiate).
   - Justifies urgency based on market implications.

6. **Smart alert routing**
   - Urgent changes are sent to Slack.
   - Routine updates are sent via Email.
   - All alerts and runs are logged in Google Sheets.

7. **Historical storage**
   - Updates price history for future comparisons.
   - Maintains a complete monitoring audit trail.

---

### Setup requirements

Before activating the workflow, configure the following:

- Replace the competitor price API endpoint with your own data source.
- Define product identifiers consistently (SKU, product ID, etc.).
- Configure Google Sheets documents and sheet names for:
  - Price history
  - Alert logs
  - Monitoring logs
- Adjust alert thresholds or schedules as needed.

---

### Required credentials

This workflow requires the following credentials to be set up in n8n:

- **HTTP Header Auth** (for competitor price APIs)
- **OpenAI** (for AI-based price analysis)
- **Slack** (urgent alerts)
- **Gmail** (routine email notifications)
- **Google Sheets** (price history and logging)

---

### Customization ideas

- Add additional alert channels (Microsoft Teams, Discord, Webhooks).
- Extend AI analysis with competitor positioning or elasticity insights.
- Monitor multiple regions or currencies.
- Add dashboards using BI tools connected to Google Sheets.
- Trigger downstream pricing or promotion workflows automatically.

---

### Who this is for

- Pricing & revenue operations teams  
- E-commerce and SaaS product managers  
- Competitive intelligence analysts  
- Growth and strategy teams needing real-time market awareness  

---

This template provides an end-to-end, scalable foundation for AI-assisted competitive price monitoring—turning raw price changes into actionable business decisions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
