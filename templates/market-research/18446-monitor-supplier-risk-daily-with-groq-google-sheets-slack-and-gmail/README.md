# 📊 Monitor supplier risk daily with Groq, Google Sheets, Slack and Gmail

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily at 9 AM to assess supplier risk using Google Sheets KPIs, Google News RSS headlines, OpenSanctions screening, and currency rates, then uses Groq LLM analysis to alert via Slack/Gmail, log results to Google Sheets, and email an executive briefing.

## How it works
1. Runs every day at 9 AM and reads the supplier master list (including KPI fields) from Google Sheets.
2. Loops through each supplier and pulls external signals from Google News RSS, OpenSanctions search results, and a USD exchange-rate feed.
3. Extracts the top headlines from the RSS XML and compiles the supplier’s KPIs plus external signals into a single dossier.
4. Uses Groq LLM to generate a sentiment risk score, summary, mitigation actions, and an early-warning level from the combined dossier.
5. Calculates a weighted composite risk score from the LLM score plus delay and rejection KPIs, then categorizes the supplier as High/Medium/Low risk.
6. For High risk, uses Groq LLM to draft an urgent mitigation strategy, then sends a Slack alert and a detailed Gmail alert to procurement.
7. For Medium risk, sends a Gmail watchlist notification, logs all supplier outcomes to a Google Sheets audit tab, and then emails a daily executive briefing summarizing today’s logged results.

## Setup
1. Connect credentials for Google Sheets, Groq, Slack, and Gmail (Google) in n8n.
2. Update the Google Sheets document and sheet tabs so the supplier master contains fields like “Supplier Name”, “Delay Rate (%)”, “Rejection Rate (%)”, and “Category”, and create a “Risk_Audit_Logs” tab for appended logs.
3. Set or replace the OpenSanctions API Authorization header value in the HTTP request and adjust the news query keywords if needed.
4. Configure the Slack recipient (user or channel) and the Gmail recipient addresses/subjects for high-risk alerts, watchlist notifications, and the daily executive report.

## Additional info
## How To Customize Nodes

* **Adjusting Risk Weights:** Locate the `Calculate Final Risk Score` node. You can modify the `sentimentWeight`, `delayWeight`, and `rejectionWeight` constants to fit your business logic.
* **Modifying AI Prompts:** Open the `Analyze Sentiment & Risk` or `Generate Mitigation Strategy` agents to change the "Persona" or the specific questions the AI asks.
* **Changing Thresholds:** The `Route by Risk Level` switch node is currently set to "High", "Medium", and "Low". You can add more granular levels (e.g., "Critical") by adding new output rules.


## Add‑ons

* **ERP Integration:** Replace the Google Sheets fetch node with an SAP or Oracle connector to pull live vendor data.
* **Multi-Language Support:** Add a translation node before the AI analysis if you are monitoring regional news in non-English speaking markets.
* **SMS Alerts:** Connect a Twilio node to the "High Risk" path for instant text notifications for off-duty managers.


## Use Case Examples

* **Global Shipping Monitoring:** Detecting port strikes or regional conflicts that might impact a specific supplier's delivery timeline.
* **Financial Health Tracking:** Using currency volatility and news sentiment to predict if a vendor is facing bankruptcy.
* **Compliance Auditing:** Automatically checking all active vendors against global sanction lists every 24 hours.
* **Performance-Based Sourcing:** Using the risk logs to decide which suppliers to renew and which to phase out based on a year of "Audit Logs".
* **Executive Transparency:** Providing leadership with a hands-off daily report that highlights only the most critical supply chain threats.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow fails at Start** | Missing Google Sheet headers | Ensure "Supplier Name" and "Category" exist in your sheet. |
| **AI Output is empty** | Groq API quota reached | Check your Groq dashboard or swap to a larger model like `gpt-oss-120b`. |
| **No News Found** | Search query too specific | Loosen the RSS URL parameters in the "Fetch Supplier News" node. |
| **Report not sending** | Gmail OAuth expired | Re-connect your Google credentials in the n8n settings. |


## Need Help?

Setting up automated risk agents can be complex, especially when balancing AI prompts and external API integrations. If you need assistance configuring these **Add-Ons**, customizing the risk logic or building similar business automations, **WeblineIndia** is here to help. Contact us to [hire n8n developers](https://www.weblineglobal.com/hire/n8n-developers/) for building a robust, custom-tailored automation strategy for your enterprise.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
