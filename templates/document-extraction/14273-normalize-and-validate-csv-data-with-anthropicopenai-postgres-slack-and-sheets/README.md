# 🔬 Normalize and validate CSV data with Anthropic/OpenAI, Postgres, Slack and Sheets

> ⚡ **111 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview
This workflow automates CSV data processing from upload to database insertion.

It accepts CSV files via webhook, uses AI to detect schema and standardize columns, cleans and validates the data, and stores it in Postgres. Errors are logged separately, and notifications are sent for visibility.

---

## How It Works

1. **CSV Upload**
   A webhook receives CSV files for processing.

2. **Validation**
   The workflow checks if the uploaded file is a valid CSV format. Invalid files are rejected with an error report.

3. **Data Extraction**
   The CSV is parsed into structured rows for further processing.

4. **Schema Detection**
   AI analyzes the data to:
   - Infer column types  
   - Normalize column names  
   - Detect inconsistencies  

5. **Data Normalization**
   Values are cleaned and converted into proper formats (numbers, dates, booleans), with optional unit standardization.

6. **Data Quality Validation**
   The workflow checks:
   - Type mismatches  
   - Missing values  
   - Statistical outliers  

7. **Conditional Processing**
   - Clean data → prepared and inserted into Postgres  
   - Errors → detailed report generated  

8. **Database Insert**
   Valid data is stored in the configured Postgres table.

9. **Error Logging**
   Errors are logged into Google Sheets for tracking and debugging.

10. **Notifications**
   A Slack message is sent with processing results.

---

## Setup Instructions

1. Configure the webhook endpoint for CSV uploads
2. Set your Postgres table name in the configuration node
3. Add Anthropic/OpenAI credentials for schema detection
4. Connect Slack for notifications
5. Connect Google Sheets for error logging
6. Configure error threshold settings
7. Test with sample CSV files
8. Activate the workflow

---

## Use Cases

- Cleaning and standardizing messy CSV data  
- Automating ETL pipelines  
- Preparing data for analytics or dashboards  
- Validating incoming data before database storage  
- Monitoring data quality with error reporting  

---

## Requirements

- n8n instance with webhook access  
- Postgres database  
- OpenAI or Anthropic API access  
- Slack workspace  
- Google Sheets account  

---

## Notes

- You can customize schema rules and normalization logic in the Code node.
- Adjust error thresholds based on your data tolerance.
- Extend validation rules for domain-specific requirements.
- Replace Postgres or Sheets with other storage systems if needed.

## 🔗 Nodes Used

Google Sheets, Postgres, Slack, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
