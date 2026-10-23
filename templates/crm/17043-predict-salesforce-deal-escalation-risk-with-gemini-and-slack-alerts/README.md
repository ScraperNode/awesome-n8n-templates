# 🤝 Predict Salesforce deal escalation risk with Gemini and Slack alerts

> ⚡ **14 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow pulls open Salesforce opportunities and their last-30-days activities, uses Google Gemini to predict escalation risk per deal, then flags high-risk opportunities in Salesforce and notifies a Slack user.

## How it works
1. Starts manually and fetches open opportunities and recent Salesforce Task activities from the last 30 days.
2. Merges opportunities with their related activities and builds a per-deal context including amount, probability, type, activity list, and whether all activities are completed.
3. Batches the deals and skips ones that have 100% probability and active/completed engagement, then waits briefly between remaining items to reduce API load.
4. Sends each deal context to Google Gemini to classify risk (high/medium/low), identify specific risk flags, and return a one-line summary as JSON.
5. Cleans and validates the Gemini response by stripping formatting, parsing JSON safely, and normalizing invalid risk levels to “unknown.”
6. For deals marked as high risk, updates the Salesforce opportunity description with the risk details and sends a formatted alert message to a specified Slack user.

## Setup
1. Add Salesforce OAuth2 credentials and ensure the workflow has access to read Opportunities and query Tasks (and update Opportunities).
2. Add a Google Gemini (PaLM) API credential and confirm the selected model ID (for example, models/gemini-2.5-flash) is available in your account.
3. Add Slack OAuth2 credentials and set the target recipient (user) for the alert message.
4. Review the Salesforce query for recent activities and the opportunity update field mapping to match your Salesforce schema and escalation process.

## Additional info
## Add-Ons & Enhancements

- Add **Email Notifications** for high-risk deals  
- Store results in **Google Sheets or a database**  
- Add **Dashboard (Power BI or Tableau)** for visualization  
- Use a **Scheduled Trigger** for automated daily scans  
- Add **Medium Risk Alerts** for early warnings  


## Use Case Examples

1. **Enterprise Sales Monitoring**  
   Identify high-risk enterprise deals before escalation.

2. **Pipeline Health Tracking**  
   Continuously monitor deal quality and engagement.

3. **Sales Manager Alerts**  
   Notify managers instantly about risky deals.

4. **Customer Success Alignment**  
   Detect delivery or stakeholder risks early.

5. **Revenue Forecast Protection**  
   Reduce chances of deal slippage or loss.

There can be many more use cases depending on how this workflow is extended.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data from Salesforce | Incorrect credentials or permissions | Reconnect Salesforce account and verify API access |
| AI response parsing fails | Invalid JSON from Gemini | Check prompt and ensure strict JSON output |
| Slack message not sent | Incorrect Slack OAuth setup | Re-authenticate Slack node |
| Workflow runs slow | Large dataset | Reduce batch size or optimize queries |
| Deals not updating | Incorrect Opportunity ID mapping | Verify mapping in update node |
| All deals marked unknown | AI response format issue | Check Clean & Validate node logic |


## Need Help?

If you need assistance with setting up this workflow, customizing nodes or [building advanced automation solutions](https://www.weblineindia.com/process-automation-solutions.html), feel free to reach out.

**WeblineIndia** specializes in building scalable n8n workflows, AI integrations and business automation systems tailored to your needs. Whether it is enhancing this workflow or creating a completely new automation pipeline, expert help is available.

## 🔗 Nodes Used

Slack, Salesforce, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
