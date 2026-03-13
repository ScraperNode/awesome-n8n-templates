# 🔬 Automate payment gateway & database transaction reconciliation with Google Sheets

> ⚡ **124 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## How it works

This workflow fully automates the reconciliation process between your Local Database transactions and Payment Gateway transactions. It compares both data sources, identifies mismatches, categorizes discrepancies, logs them into Google Sheets, generates a final summary, and sends an automated reconciliation report to your finance team. This ensures accurate, consistent, and error-free financial reporting without manual work.

## Key Features

- Automatic data extraction from two Google Sheets
- Transaction comparison with result categorization
- Duplicate detection
- Real-time discrepancy logging
- Summary generation and storage
- Automated email reporting
- Zero manual effort required

## Setup Steps
#### 1. Connect Required Credentials 


You must connect the following credentials:
Google Sheets (Service Account or OAuth)
Email SMTP (Gmail or custom)

#### 2. Replace Default Values

Update the workflow with:
Your Google Sheet IDs
Your tab/sheet names
SMTP email, sender, and recipient
Optional: Custom domain or business branding

#### 3. Customize Email Template

 
Modify subject, message body, or formatting style based on your reporting standards.

#### 4. Adjust Trigger

You may choose:
Manual Trigger
Cron Trigger for daily/weekly reconciliation
Webhook Trigger integrated with your system

## Detailed Process Flow

#### 1. Fetch Local & Payment Gateway Transactions

The workflow reads all transaction records from the Local Database Sheet and Payment Gateway Sheet.

#### 2. Compare both Transactions

Using the compare operation, the workflow splits result into
  a. Valid Transactions
  b. Invalid Transactions
  c. Amount Differences Transactions
  d. Missing Transactions

#### 3. Duplicate Transaction Detection

The workflow scans local transactions to detect duplicate transaction and logs them seperately

#### 5. Logging Transactions

Each category is appended to its respective Google Sheet:
- DuplicateData
- AmountDifference
- DataNotInsert
- Reconciliation Summary
- RealData

#### 6. Count all categories

The workflow counts:

- Number of valid transactions
- Number of invalid transactions
- Number of missing transactions
- Number of Amount mismatch transactions

The final summary row is appended to a dedicated Reconciliation Summary Sheet.

#### 7. Send Final Email Report

The finance team receive a email of final summary report.


## Final Output

At the end the workflow, you get:

- Fully categorized reconciliation logs
- Complete Summary Stored Sheets
- Email Report
- Clean audit ready data

## 🔗 Nodes Used

Send Email, Google Sheets, Schedule Trigger, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
