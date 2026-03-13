# 🧾 Automated financial document processing with Google Gemini OCR

> ⚡ **1,100 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## AI-Powered Financial Document Processing with Google Gemini

This comprehensive workflow automates the complete financial document processing pipeline using AI. Upload invoices via chat, drop expense receipts into a folder, or add bank statements - the system automatically extracts, categorizes, and organizes all your financial data into structured Google Sheets.

## What this workflow does

**Processes three types of financial documents automatically:**

- **Invoice Processing**: Upload PDF invoices through a chat interface and get structured data extraction with automatic file organization
- **Expense Management**: Monitor a Google Drive folder for new receipts and automatically categorize expenses using AI
- **Bank Statement Processing**: Extract and organize transaction data from bank statements with multi-transaction support
- **Financial Analysis**: Query all your financial data using natural language with an AI agent

## Key Features

- **Multi-AI Persona System**: Four specialized AI personas (Mark, Donna, Victor, Andrew) handle different financial functions
- **Google Gemini Integration**: Advanced document understanding and data extraction from PDFs
- **Smart Expense Categorization**: Automatic classification into 17 business expense categories using LLM
- **Real-time Monitoring**: Continuous folder watching for new documents with automatic processing
- **Natural Language Queries**: Ask questions about your financial data in plain English
- **Automatic File Management**: Intelligent file naming and organization in Google Drive
- **Comprehensive Error Handling**: Robust processing that continues even when individual documents fail

## How it works

### Invoice Processing Flow
1. User uploads PDF invoice via chat interface
2. File is saved to Google Drive "Invoices" folder
3. Google Gemini extracts structured data (vendor, amounts, line items, dates)
4. Data is parsed and saved to "Invoice Records" Google Sheet
5. File is renamed as "{Vendor Name} - {Invoice Number}"
6. Confirmation message sent to user

### Expense Processing Flow
1. User drops receipt PDF into "Expense Receipts" Google Drive folder
2. System detects new file within 1 minute
3. Google Gemini extracts expense data (merchant, amount, payment method)
4. OpenRouter LLM categorizes expense into appropriate business category
5. All data saved to "Expenses Recording" Google Sheet

### Bank Statement Processing Flow
1. User uploads bank statement to "Bank Statements" folder
2. Google Gemini extracts multiple transactions from statement
3. Custom JavaScript parser handles various bank formats
4. Individual transactions saved to "Bank Transactions Record" Google Sheet

### Financial Analysis
1. Enable the analysis trigger when needed
2. Ask questions in natural language about your financial data
3. AI agent accesses all three spreadsheets to provide insights
4. Get reports, summaries, and trend analysis

## What you need to set up

### Required APIs and Credentials
- **Google Drive API** - For file storage and monitoring
- **Google Sheets API** - For data storage and retrieval
- **Google Gemini API** - For document processing and data extraction
- **OpenRouter API** - For expense categorization (supports multiple LLM providers)

### Google Drive Folder Structure
Create these folders in your Google Drive:
- "Invoices" - Processed invoice storage
- "Expense Receipts" - Drop zone for expense receipts (monitored)
- "Bank Statements" - Drop zone for bank statements (monitored)

### Google Sheets Setup
Create three spreadsheets with these column headers:

**Invoice Records Sheet:**
Vendor Name, Invoice Number, Invoice Date, Due Date, Total Amount, VAT Amount, Line Item Description, Quantity, Unit Price, Total Price

**Expenses Recording Sheet:**
Merchant Name, Transaction Date, Total Amount, Tax Amount, Payment Method, Line Item Description, Quantity, Unit Price, Total Price, Category

**Bank Transactions Record Sheet:**
Transaction ID, Date, Description/Payee, Debit (-), Credit (+), Currency, Running Balance, Notes/Category

## Use Cases

- **Small Business Accounting**: Automate invoice and expense tracking for bookkeeping
- **Freelancer Financial Management**: Organize client invoices and business expenses
- **Corporate Expense Management**: Streamline employee expense report processing
- **Financial Data Analysis**: Generate insights from historical financial data
- **Bank Reconciliation**: Automate transaction recording and account reconciliation
- **Tax Preparation**: Maintain organized records with proper categorization

## Technical Highlights

- **Expense Categories**: 17 predefined business expense categories (Cost of Goods Sold, Marketing, Payroll, etc.)
- **Multi-format Support**: Handles various PDF layouts and bank statement formats
- **Scalable Processing**: Processes multiple documents simultaneously
- **Error Recovery**: Continues processing even when individual documents fail
- **Natural Language Interface**: No technical knowledge required for financial queries
- **Real-time Processing**: Documents processed within minutes of upload

## Benefits

- **Time Savings**: Eliminates manual data entry from financial documents
- **Accuracy**: AI-powered extraction reduces human error
- **Organization**: Automatic file naming and categorization
- **Insights**: Query financial data using natural language
- **Compliance**: Maintains organized records for accounting and audit purposes
- **Scalability**: Handles growing document volumes without additional overhead

This workflow transforms tedious financial document processing into an automated, intelligent system that grows with your business needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
