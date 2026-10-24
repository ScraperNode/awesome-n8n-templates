# 📊 Benchmark procurement prices and flag overpricing with Google Sheets, Groq, and Slack

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This scheduled workflow benchmarks internal procurement prices from Google Sheets against historical averages, enriches each item with Google News RSS trend signals, and uses Groq (Llama 3.3) to assess pricing risk, recommend target ranges and negotiation tactics, alerting high-risk items in Slack and logging results back to Google Sheets.

## How it works
1. Runs daily at 09:00 on a schedule.
2. Reads procurement purchase records from a Google Sheets worksheet and groups them by item to identify the latest purchase and prior history.
3. Calculates benchmark metrics per item (weighted average price, variance percentage, and simple internal price trend) from the historical purchases.
4. For each item, pulls recent Google News RSS headlines for “item price + region” and classifies a market trend signal from the top headlines.
5. Merges the internal benchmark metrics with the market trend and sends the combined context to Groq for a structured JSON risk assessment, target price range, timing advice, and negotiation strategy.
6. Flags items where variance exceeds 5% or Groq returns a High risk level, sends a formatted Slack alert for those items, and appends every item’s report to a Google Sheets reporting tab.

## Setup
1. Connect Google Sheets OAuth and set the correct spreadsheet and worksheet for input (Procurement_Data) and output (Benchmark_Reports), ensuring the input columns include item, last_purchase_date, price_internal, quantity, category, supplier, contract_type, region, and target_price_last.
2. Add a Groq API credential and confirm the selected model is available in your Groq account.
3. Connect Slack OAuth and choose the user or channel that should receive overpricing alerts.
4. Adjust the schedule time and the overpricing threshold logic (variance_pct > 5% or High risk) to match your procurement policy.
5. If needed, tune the Google News RSS query format (keywords and region) to better fit your item naming conventions.

## Additional info
## How To Customize Nodes

- Schedule Node → Change frequency
- Google Sheets Nodes → Update sheet IDs and schema
- AI Node → Modify prompt and rules
- RSS Node → Adjust search keywords
- IF Node → Change risk thresholds
- Slack Node → Replace with Email, Teams, etc.


## Add-ons You can Add

- Email alerts
- BI dashboards (Power BI / Looker Studio)
- ERP integrations
- Supplier scoring
- Contract renewal automation
- Multi-region benchmarking


## Use Case Examples

1. Detect overpriced procurement items
2. Improve supplier negotiations
3. Monitor regional price trends
4. Optimize procurement cost efficiency
5. Support budgeting decisions

There can be many more use cases depending on business needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | Incorrect Google Sheet ID | Verify sheet and permissions |
| Workflow not triggering | Schedule issue | Check trigger timing |
| AI parsing fails | Invalid JSON | Enforce strict JSON output |
| No Slack alerts | Credentials issue | Reconnect Slack |
| No market news | Weak query | Improve keywords |
| Wrong calculations | Data format issue | Ensure numeric fields |


## Need Help?

If you need help setting up or customizing this workflow, our [n8n workflow development team](https://www.weblineglobal.com/hire/n8n-developers/) can assist you with:

- Workflow customization
- AI-powered procurement automation
- System integrations
- Advanced dashboards

[Reach out WeblineIndia to build scalable, intelligent automation](https://www.weblineindia.com/contact-us.html) tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, RSS Read, Slack, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
