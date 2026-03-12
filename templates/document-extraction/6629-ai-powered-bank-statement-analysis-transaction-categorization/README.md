# 🔬 AI-powered bank statement analysis & transaction categorization

> ⚡ **4,216 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# How it works

This workflow automatically processes bank statements from various formats and extracts structured transaction data with intelligent categorization using AI.

## Key Steps

1. **File Upload** - Accepts bank statements via webhook upload (PDF, Excel, CSV formats).
2. **Smart Format Detection** - Automatically routes files to appropriate processors (PDF text extraction or spreadsheet parsing).
3. **AI-Powered Extraction** - Uses GPT-4 to extract account details, transactions, and balances from statement data.
4. **Data Processing & Categorization** - Cleans, validates, and automatically categorizes transactions into expense categories.
5. **Database Storage** - Saves processed data to PostgreSQL database for analysis and reporting.
6. **API Response** - Returns structured summary with transaction counts, expense totals, and category breakdowns.

## Set up steps

**Setup time: 8-12 minutes**

1. **Configure OpenAI credentials** - Add your OpenAI API key for AI-powered data extraction.
2. **Set up PostgreSQL database** - Connect your PostgreSQL database and create the required table structure.
3. **Configure webhook endpoint** - The workflow provides a `/upload-statement` endpoint for file uploads.
4. **Customize transaction categories** - Modify the AI prompt to include your preferred expense categories.
5. **Test the workflow** - Upload a sample bank statement to verify the extraction and categorization process.
6. **Set up database table** - Ensure your PostgreSQL database has a `bank_statements` table with appropriate columns.

## Features

- **Multi-format support**: PDF, Excel, CSV bank statements
- **AI-powered extraction**: GPT-4 extracts account details and transactions
- **Automatic categorization**: Expenses categorized as groceries, dining, gas, shopping, utilities, healthcare, entertainment, income, fees, or other
- **Data validation**: Cleans and validates transaction data with error handling
- **Database storage**: PostgreSQL integration for data persistence
- **API responses**: Clean JSON responses with transaction summaries and category breakdowns
- **Smart routing**: Automatic format detection and appropriate processing paths

## 🔗 Nodes Used

Postgres, Spreadsheet File, Webhook, OpenAI, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
