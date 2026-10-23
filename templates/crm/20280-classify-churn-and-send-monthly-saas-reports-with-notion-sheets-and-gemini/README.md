# 🤝 Classify churn and send monthly SaaS reports with Notion, Sheets and Gemini

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow monitors cancellation records in Notion, checks related payment-failure (dunning) history in Google Sheets to classify churn as involuntary or voluntary, logs each result to a churn log sheet, and then runs a monthly rollup that summarizes churn with Google Gemini and emails the report via Gmail.

## How it works
1. Triggers every minute when a new cancellation event is detected in a Notion database.
2. Normalizes the cancellation payload into a customer ID, cancellation date, and plan revenue, then looks up matching dunning history for that customer in Google Sheets.
3. Calculates whether the dunning start date occurred before the cancellation and within a 60-day window.
4. Classifies the cancellation as Involuntary when a valid dunning record exists, otherwise as Voluntary, and appends the churn event (including plan, dates, revenue, and notes) to a Google Sheets churn log.
5. Runs on a monthly schedule, fetches all rows from the churn log in Google Sheets, and aggregates the prior month’s involuntary/voluntary counts and lost revenue.
6. Sends the aggregated metrics to Google Gemini to generate a short JSON-formatted executive summary and emails the formatted HTML report through Gmail.

## Setup
1. Connect your Notion credentials and select the cancellation database used by the Notion trigger.
2. Connect your Google Sheets credentials and update the document/sheet IDs for both the dunning history lookup sheet and the churn classification log sheet.
3. Ensure your dunning history sheet includes at least “Customer ID” and “Dunning Start Date” columns and your churn log sheet includes the output columns used for appending.
4. Add a Google Gemini (PaLM) API credential for the LLM node and adjust the prompt/schema if you want different report fields.
5. Connect your Gmail credentials and set the email recipients and subject/body content for the executive report.

## Additional info
## How To Customize Nodes

* **Adjust Dunning Time Window:** Open the `Validate Dunning Window` code node and update `diffDays <= 60` to your preferred window size (e.g., `30` or `45` days).
* **Modify AI Prompt:** Select the `Generate AI Narrative` node to adjust the tone, language, or specific analytical questions answered in the summary.
* **Change Schedule Interval:** Update the `Trigger: Monthly Rollup` schedule settings if you prefer weekly or quarterly summaries.
* **Customize Email Design:** Edit the HTML block in `Email Executive Report` to match your company's branding, color palette, or logos.


## Add‑ons

* **Stripe / Chargebee Integration:** Replace the Notion trigger with direct webhook listeners from payment providers to eliminate manual data entry.
* **Slack / Microsoft Teams Alerts:** Add a messaging node after `Log Churn Event` to broadcast high-value cancellation alerts immediately.
* **Automated Dunning Win-Back Workflows:** Route involuntary churn events into automated email sequences via Customer.io or HubSpot to retry failed cards.


## Use Case Examples

1. **Payment Failure Recovery Audit:** Identify exact revenue amounts lost to expired or declined credit cards versus voluntary cancellations.
2. **SaaS Executive Board Reporting:** Generate monthly automated AI summaries for leadership without manual spreadsheet consolidation.
3. **Product vs. Billing Issue Segmentation:** Isolate churn caused by product dissatisfaction from churn caused by payment gateway issues.
4. **Customer Success Priority Routing:** Trigger outreach tasks for high-MRR customers who experienced voluntary cancellations.
5. **Billing Gateway Performance Monitoring:** Track trends in involuntary churn across different payment processors or regional currencies.

(Note: There can be many more such use cases of this workflow depending on your specific business, payment stack, and retention strategies.)


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Notion Trigger Not Firing** | Invalid database ID or missing integration permissions in Notion. | Ensure the Notion integration is shared with your cancellation database and has active read permissions. |
| **Dunning Check Fails** | Customer ID mismatch between Notion and Google Sheets. | Verify that the Customer ID format in Notion matches the Customer ID column in your dunning sheet. |
| **Code Node Date Errors (`NaN`)** | Missing, invalid, or non-ISO date strings in the incoming payload. | Ensure `Cancellation Date` and `Dunning Start Date` are passed as standard ISO (`YYYY-MM-DD`) date strings. |
| **Gemini JSON Schema Validation Error** | AI response failed to produce strict JSON matching the requested schema. | Confirm your Google Gemini API key is active and that the schema properties (`report_title`, `summary`) are unmodified. |
| **Gmail Report Not Delivered** | Missing recipient email address or expired Gmail OAuth2 credentials. | Open the `Email Executive Report` node, specify a valid `Send To` email address, and re-authenticate your Gmail connection. |


## Need Help?

Setting up automated financial metric pipelines and configuring LLM chains requires precise field mapping and robust error handling. If you need assistance configuring this workflow, customizing integrations or developing custom automation solutions for your business, [contact WeblineIndia](https://www.weblineindia.com/contact-us.html). Our expert team can help you build and scale tailored n8n workflows for your operations.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Notion Trigger, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
