# 🔬 Detect contract compliance violations with Notion, Google Sheets and Groq

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to compare procurement transactions in Google Sheets against active contract terms stored in Notion, flags pricing/SLA/volume violations with calculated leakage, and uses Groq LLM analysis to generate corrective recommendations that are logged back to Google Sheets.

## How it works
1. Runs every day at 6:00 AM on a schedule.
2. Retrieves all active contract records from a Notion database.
3. Pulls recent procurement transactions from Google Sheets and compares each transaction to the matching contract SKU to detect pricing overcharges, SLA breaches, volume threshold issues, or missing contracts, calculating per-transaction leakage.
4. Appends compliant transactions to a dedicated Google Sheets tab for audit tracking.
5. For violations, loads historical violation logs from Google Sheets and calculates vendor/SKU recurrence counts and cumulative leakage to estimate total impact.
6. Processes each current violation through Groq Chat to produce a structured impact assessment, urgency, and corrective recommendation.
7. Appends the violation details, calculated leakage, and AI recommendation to the Google Sheets “Violation Logs” audit sheet.

## Setup
1. Add Notion credentials and select the Notion database that contains your contract records, including fields for SKU, agreed price, SLA days, volume threshold, contract ID, and an “Active” status.
2. Add Google Sheets credentials and set the spreadsheet and sheet tabs used for input transactions, compliant transaction logging, and violation logging.
3. Add a Groq API credential for the LangChain Groq Chat model used to generate structured recommendations.
4. Ensure your Google Sheets transaction columns match the workflow’s expected headers (for example: Transaction ID, Date, Vendor, Item SKU, Quantity Purchased, Unit Price Paid, and Actual Delivery Days).

## Additional info
## How To Customize Nodes

* **Adjusting Violation Thresholds:** Open the `Compare Terms vs Actuals` node. You can modify the JavaScript to include a tolerance buffer (e.g., only flagging price overcharges if they exceed the contracted rate by more than 2%).
* **Customizing AI Output:** The `Enforce JSON Schema` node strictly structures the AI's response (Impact Analysis, Action Category, Urgency, Recommendation). You can add new schema fields here, such as a drafted email response to the vendor.
* **Visual Canvas Organization:** You can improve workspace readability for your team by styling the sticky notes with low-saturation, sensory-friendly color palettes and utilizing dark charcoal text to clearly map out compliance routing paths without overwhelming the reader.


## Add‑ons

To expand the functionality of this workflow, consider adding:

* **Vendor Email Automation:** Add a Gmail or Outlook node after the AI Analysis to automatically email the vendor a "Notice of Contract Violation" based on the AI's recommendation.
* **ERP Integration:** Replace Google Sheets with HTTP Request nodes to pull daily transactions and log compliance statuses directly into ERP systems like NetSuite or SAP Ariba.
* **Ticketing System Sync:** Connect Jira or ServiceNow to automatically open a resolution ticket for any violation flagged with a "High" urgency by the AI.


## Use Case Examples

This workflow handles multiple procurement scenarios simultaneously. Primary use cases include:

* **Price Overcharge Detection:** A supplier invoices $12 per unit instead of the contracted $10. The workflow catches the discrepancy, calculates total leakage based on volume, and alerts the buyer to request a credit memo.
* **SLA/Late Delivery Breach:** A critical shipment arrives in 14 days, but the contract mandates a maximum of 10 days. The workflow flags the SLA breach so procurement can enforce late-delivery penalties.
* **Volume Threshold Exceeded:** A buyer accidentally orders 5,000 units on a contract capped at 2,000 units per month. The workflow detects the overage and advises management to renegotiate terms or hold the excess inventory.
* **Repeat Offender Identification:** A vendor continually overcharges by small amounts over several months. The AI analyzes the historical logs, identifies the recurring pattern, calculates cumulative impact, and recommends a systemic supplier review.
* *(There can be many more variations of this workflow by simply adjusting the JavaScript variance rules or adding additional AI evaluation criteria!)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Workflow misses contract matches** | Naming discrepancies between Notion and Google Sheets. | Check for trailing spaces or case-sensitivity issues. The `Compare Terms vs Actuals` node requires an exact text match on the SKU fields. |
| **Code node returns `NaN` for leakage** | Quantity or Price fields in Google Sheets are formatted as text. | Ensure numeric columns in Google Sheets are strictly formatted as numbers, or update the JS code to parse strings into floats. |
| **AI Node times out or throws schema errors** | Groq API rate limits reached or unexpected LLM output. | Verify your Groq API credentials. If the model fails to parse JSON, consider switching to a different supported model like Llama 3 within the Groq node. |
| **Slack alerts are not sending** | Incorrect Channel ID or missing app permissions. | Re-authenticate the Slack node and ensure the n8n bot is invited to the target channel. |


## Need Help?

Building reliable, automated compliance engines requires a deep understanding of data validation, API integration and custom business logic.

If you need assistance configuring your Notion databases, customizing the JavaScript leakage formulas, integrating this workflow into your native ERP system or building similar supply chain automations, please [contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html). Our team of technical integration experts can help you design, scale and maintain tailored automation workflows for your entire business.

## 🔗 Nodes Used

Google Sheets, Notion, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
