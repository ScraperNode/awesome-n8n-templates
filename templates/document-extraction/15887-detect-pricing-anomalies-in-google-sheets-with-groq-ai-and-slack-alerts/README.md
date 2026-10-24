# 🔬 Detect pricing anomalies in Google Sheets with Groq AI and Slack alerts

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Data Quality Checker

This workflow automatically monitors pricing data in Google Sheets, detects anomalies such as missing values or sudden spikes/drops, generates AI-based short explanations for flagged rows, updates the sheet with status and reason and sends Slack alerts for critical issues.

**Quick Implementation Steps:**

1. Prepare your Google Sheet with columns: `price`, `previous_price`, `status`, `reason`, `row_number`.
2. Connect n8n with your **Google Sheets**, **Slack** and **Groq AI** credentials.
3. Trigger the workflow manually or via webhook.
4. Each row is processed to detect anomalies and generate a reason using AI.
5. Flagged rows are updated in Google Sheets and a Slack alert is sent automatically.


## What It Does

The **Data Quality Checker** workflow is designed to help you maintain accurate pricing data effortlessly. It fetches data from Google Sheets, evaluates each row for anomalies and ensures that unusual changes in prices do not go unnoticed.

It automatically flags rows with missing values, sudden spikes or sudden drops in price. The workflow uses a Groq AI model to generate concise explanations for any anomalies found, providing actionable insights directly in your sheet.

For rows without issues, it marks the status as `OK` with a standard reason. A Slack alert is sent for flagged data to keep teams informed in real-time, preventing unnoticed errors and enabling faster corrective actions.


## Who It's For

- Data analysts monitoring pricing or inventory data.
- E-commerce managers tracking product price fluctuations.
- Finance teams validating large datasets for inconsistencies.
- Operations teams needing automated anomaly detection with alerts.

This workflow suits anyone who relies on timely, accurate data and wants automated anomaly detection and reporting.


## Requirements to Use This Workflow

- [**n8n account** (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi).
- **Google Sheets account** with read/write access to the target sheet.
- **Slack workspace** with a channel for alerts.
- **Groq AI account** for anomaly explanation generation.
- Sheet structure: columns `price`, `previous_price`, `status`, `reason`, `row_number`.


## How It Works & Setup Guide

1. **Prepare Google Sheet**

   - Ensure your sheet has `price`, `previous_price`, `status`, `reason`, `row_number`.
   - Populate initial pricing data.

2. **Connect Credentials in n8n**

   - Add **Google Sheets OAuth2** for reading and updating the sheet.
   - Add **Slack** API credentials to send alerts.
   - Add **Groq AI** credentials for AI reasoning.

3. **Trigger the Workflow**

   - Use a **manual trigger** or configure a webhook to run automatically.

4. **Process Data**

   - The workflow fetches data from Google Sheets.
   - `SplitInBatches` node ensures each row is processed individually.
   - `Check Price Issues` node checks for missing values or sudden changes.

5. **Anomaly Handling**

   - `If` node determines whether an anomaly exists.
   - For flagged rows, AI generates a short reason (`Generate Issue Reason`).
   - `Prepare Flag Data` formats data for updating the sheet.

6. **Update & Alert**

   - `Update Flagged Row` writes flagged status and reason back to Google Sheets.
   - `Update Normal Row` writes `OK` status for rows with no issues.
   - `Send Slack Alert` sends real-time notifications for flagged anomalies.


## How To Customize Nodes

- **Google Sheets nodes:** update `documentId` and `sheetName` to match your own sheets.
- **Slack node:** change `channelId` and alert text to match your workspace and notification style.
- **AI node:** adjust the prompt in `Generate Issue Reason` to change explanation style or length.
- **Code node:** modify the logic in `Check Price Issues` to define what constitutes a spike or drop.


## Add-ons

- Connect to **email notifications** instead of Slack.
- Extend AI logic to suggest corrective actions.
- Include **historical trend analysis** in Google Sheets for better insights.
- Integrate with **other data sources** like CSV or databases.


## Use Case Examples

1. **E-commerce pricing validation:** Automatically detect and explain unusual price changes for hundreds of products.

2. **Inventory data verification:** Ensure stock values and price adjustments are accurate daily.

3. **Finance anomaly detection:** Detect sudden cost or rate fluctuations in financial datasets.

4. **Market monitoring:** Track competitor pricing changes with automated alerts.

5. **General data quality assurance:** Any dataset requiring automated checks for missing or inconsistent values.

This workflow is flexible and can be adapted to other types of tabular data beyond pricing.


## Troubleshooting Guide

| Issue                    | Possible Cause                          | Solution                                                  |
| ------------------------ | --------------------------------------- | --------------------------------------------------------- |
| Workflow not triggering  | Trigger node not active                 | Enable the manual or webhook trigger                      |
| Data not fetched         | Wrong `documentId` or `sheetName`       | Verify Google Sheets node settings and credentials        |
| Slack alert not sent     | Invalid channel ID or credentials       | Update Slack credentials and ensure channel ID is correct |
| AI reasoning fails       | Groq API issues or prompt misconfigured | Check Groq AI credentials and review the prompt text      |
| Wrong anomaly detection  | Code logic in `Check Price Issues`      | Adjust thresholds or conditions in the code node          |
| Sheet updates not saving | Google Sheets permission issue          | Ensure OAuth2 account has write access to the sheet       |


## Need Help?

If you face issues setting up this workflow, customizing nodes or integrating add-ons, our [n8n automation team](https://www.weblineglobal.com/hire/n8n-developers/) can help. We specialize in building and optimizing n8n workflows for automation, data quality and alerting. 

[Contact us to implement this workflow, enhance it or create custom automation solutions tailored to your business needs](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, Slack, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
