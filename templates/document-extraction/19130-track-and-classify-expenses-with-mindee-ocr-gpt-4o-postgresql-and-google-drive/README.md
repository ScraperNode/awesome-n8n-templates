# 🔬 Track and classify expenses with Mindee OCR, GPT-4o, PostgreSQL and Google Drive

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects receipt uploads via an n8n form, extracts expense details with Mindee OCR, enriches and classifies the expense using OpenAI, stores the receipt in Google Drive, saves the final record to PostgreSQL, and sends Slack alerts plus a daily analytics summary.

## How it works
1. Receives an expense submission through an n8n form with a receipt file and optional amount and notes.
2. Validates that the receipt file exists, then uploads the file to Google Drive and enqueues it for OCR processing in Mindee.
3. Polls Mindee for the OCR result, extracts key fields (merchant, amount, date, category, receipt number, and raw text), and alerts in Slack if OCR fails.
4. Checks that required fields (merchant and amount) were extracted and sends a Slack alert for manual review when the receipt data is incomplete.
5. Sends the extracted receipt data to OpenAI to classify the expense (final category, business vs personal, expense type, and confidence), then blocks low-confidence results.
6. Combines the OCR data, AI classification, and Google Drive receipt URL, checks PostgreSQL for duplicates by receipt number and amount, and either alerts in Slack or inserts the expense record into PostgreSQL and posts a success message.
7. Runs daily on a schedule to query PostgreSQL for spending analytics and posts a dashboard-style summary to Slack.

## Setup
1. Create and connect credentials for Mindee (HTTP header auth), OpenAI, Slack, Google Drive OAuth, and a PostgreSQL database.
2. Create a PostgreSQL `expenses` table with columns used by the insert (amount, user_id, merchant, currency, expense_date, category, subcategory, ai_category, business_or_personal, expense_type, confidence, receipt_number, raw_text, receipt_url).
3. Set the Google Drive folder destination for uploads and ensure the workflow has permission to write to that folder.
4. Update the Slack channel selections for failure/duplicate alerts and for successful processing and daily dashboard messages.
5. If needed, adjust the Mindee `model_id` and the daily schedule time to match your OCR model and reporting cadence.

## Additional info
## Use Case Examples

### 1. Employee Expense Automation

Employees upload receipts and finance teams automatically receive categorized expense records without manual entry.

### 2. Freelancer Expense Tracking

Freelancers can automatically organize personal and business expenses for tax preparation.

### 3. Startup Finance Operations

Startups can centralize expense management, receipt storage, and spending analytics in a single workflow.

### 4. AI-Powered Bookkeeping

Accounting teams can reduce manual categorization using AI-based expense classification.

### 5. Expense Audit & Compliance

Organizations can maintain secure receipt archives with searchable OCR text and structured database records.

Additional use cases can include:

- reimbursement systems,
- travel expense management,
- procurement monitoring,
- finance analytics automation,
- and AI-driven expense intelligence platforms.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| OCR extraction fails | Invalid Mindee API credentials | Verify API key and HTTP Header Auth configuration |
| Receipt upload fails | Unsupported file type or missing binary data | Ensure the form uploads valid image or PDF files |
| AI classification fails | Invalid OpenAI credentials or malformed JSON response | Verify API credentials and AI response parsing |
| Expense not saved | PostgreSQL connection issue | Check database credentials and table schema |
| Duplicate expenses not detected | Missing receipt number or amount | Improve OCR extraction or modify duplicate query |
| Google Drive upload fails | OAuth permissions issue | Reconnect Google Drive credentials |
| Slack alerts not sent | Invalid Slack credentials or channel configuration | Reconfigure Slack API integration |
| Analytics dashboard empty | No expense records in database | Ensure expenses are successfully inserted |
| Workflow stops unexpectedly | OCR validation failure | Review Slack alerts and node execution logs |
| Confidence score too low | Poor OCR quality or unclear receipt image | Upload higher-quality receipt images |


## Need Help?

If you need help with:

- workflow setup,
- PostgreSQL configuration,
- AI integrations,
- OCR customization,
- analytics dashboards,
- approval systems,
- or advanced automation features,

our n8n development team at **WeblineIndia** can help you customize and scale this workflow according to your business requirements.

Whether you want:

- custom AI workflows,
- enterprise automation,
- finance process automation,
- or intelligent document processing systems,

this workflow can be extended into a complete production-ready expense management platform.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Google Drive, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
