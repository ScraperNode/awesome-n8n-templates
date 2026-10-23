# 📊 Triage supplier capacity risk with Groq, Gmail, Slack, and Google Sheets

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to pull supplier performance data from an HTTP endpoint, calculate fulfillment and delay risk metrics, use Groq (Llama 3.3) to classify supplier risk and generate mitigation actions, then notify via Gmail and Slack and log outcomes to Google Sheets.

## How it works
1. Runs every day at the scheduled time.
2. Fetches supplier performance data from an HTTP API and stops if the supplier has no orders.
3. Normalizes the supplier fields and calculates fulfillment rate, delay, rule-based flags, and a risk score.
4. Sends the metrics to Groq (Llama 3.3) to classify risk (Low/Medium/High) with a reason and confidence, then merges the AI result with the computed metrics (falling back to the rule-based classification if parsing fails).
5. If the AI risk is Medium, Groq generates three mitigation actions and the workflow fetches backup supplier options from an HTTP API, then combines both into a single alert payload.
6. Sends the mitigation actions by Gmail email and Slack message, then appends a “high risk” audit row to Google Sheets.
7. If the AI risk is not Medium, appends a “no alert sent” audit row to Google Sheets with the assessed risk details.

## Setup
1. Add Groq API credentials for the two Groq Chat nodes used for risk classification and mitigation action generation.
2. Replace the mock HTTP URLs with your real supplier performance and backup-supplier data endpoints (or ensure the mock endpoint returns the expected fields such as supplier, orders, delivered, avg_delay_days, category, and region).
3. Add Gmail OAuth2 credentials and set the recipient(s) in the Gmail node.
4. Add Slack OAuth2 credentials and select the target Slack workspace and channel.
5. Add Google Sheets OAuth2 credentials and update the spreadsheet/document and sheet selection used to append the audit log rows.
6. Review and adjust the risk thresholds (risk_threshold, min_fulfillment, max_delay) and the daily schedule time to match your operational requirements.

## Additional info
##  How To Customize Nodes

- **Initialize Risk Config**
  - Modify thresholds based on business needs.

- **HTTP Request Nodes**
  - Replace mock API with real ERP or supplier system.

- **AI Prompts**
  - Customize:
    - Risk classification logic
    - Recommendation style

- **Slack Node**
  - Change channel ID or message format.

- **Gmail Node**
  - Modify subject and email template.

- **Google Sheets**
  - Add more columns like region, category, or delay.


##  Add-ons (Enhancements)

- Add **SMS alerts** using Twilio
- Integrate with **ERP systems (SAP, Oracle)**
- Add **dashboard (Power BI / Tableau)**
- Store logs in **database instead of Google Sheets**
- Add **multi-supplier batch processing**
- Include **historical trend analysis**


##  Use Case Examples

1. Detect suppliers with declining delivery performance  
2. Prevent supply chain disruptions before they occur  
3. Automate vendor risk monitoring for large enterprises  
4. Improve procurement decision-making with AI insights  
5. Reduce dependency by suggesting backup suppliers  

There can be many more use cases depending on your business needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | API URL incorrect | Update HTTP Request node with valid endpoint |
| Workflow stops at validation | Missing fields in API response | Ensure `supplier`, `orders`, `delivered` exist |
| AI output parsing fails | Invalid JSON from AI | Check prompt or fallback logic |
| No alerts sent | Risk condition not met | Verify IF condition node logic |
| Gmail not sending emails | wrong credentials or permissions | Reconnect Gmail OAuth |
| Slack message not delivered | Wrong channel ID | Verify Slack configuration |
| Google Sheets not logging | गलत sheet mapping | Check column mapping and access |


##  Need Help?

If you need help setting up this workflow, customizing nodes or [building advanced automation solutions](https://www.weblineindia.com/process-automation-solutions.html), feel free to reach out.

Our [n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) can assist you with:

- End-to-end workflow setup  
- AI integration and optimization  
- Custom automation solutions  
- Enterprise-grade workflow scaling  

Let us help you turn your business processes into smart automation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
