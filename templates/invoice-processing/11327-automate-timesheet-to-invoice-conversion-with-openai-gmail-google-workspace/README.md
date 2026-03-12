# 🧾 Automate timesheet to invoice conversion with OpenAI, Gmail & Google Workspace

> ⚡ **74 views** · 🧾 [Invoice Processing](../)

## Description

This workflow converts emailed timesheets into structured invoice rows in Google Sheets and stores them in the correct Google Drive folder structure.

It:

- Listens to Gmail for timesheet attachments  
- Runs OCR and AI parsing  
- Looks up Customer and PO data from a Google Sheet  
- Organizes files in Client → Employee → Year folders  
- Reuses an existing invoice sheet or creates a new one and writes the invoice row  

---

## Quick Implementation Steps

1. Import the workflow JSON into your n8n instance.  
2. Set up credentials for:
   - Gmail  
   - Google Drive  
   - Google Sheets  
   - OpenAI  
3. Check the OCR HTTP node:  
   - Default URL: `https://universal-file-to-text-extractor.vercel.app/extract`  
4. Configure "Get Customer Info From PO Sheet" with:
   - Spreadsheet ID  
   - Correct sheet and column names  
5. Confirm Gmail Trigger filter:  
   - `has:attachment (filename:timesheet OR subject:timesheet)` and unread only  
6. Ensure your Client Invoices root folder exists in Google Drive.  
7. Test once with a sample timesheet email.  
8. Activate the workflow.

---

## What It Does

- Reads unread Gmail messages with timesheet attachments.  
- Splits and processes each attachment separately.  
- Sends files to OCR and converts them to text.  
- Uses OpenAI to extract:
  - Employee Name  
  - Client Name  
  - Week Start and End Dates  
  - Total Billable Hours  
  - Current Year  
- Looks up Customer and PO data from a Google Sheet:
  - Account Number  
  - PO Number  
  - Item Name  
  - Folder Name  
  - Invoice range  
  - Due Date offset  
- Builds or finds:
  - Client folder  
  - Employee folder  
  - Year folder  
- Either:
  - Appends to an existing sheet for that employee and period, or  
  - Creates a new sheet, sets timezone, moves it into the right folder, and adds the invoice row  

---

## Who Is It For

- Agencies and consultancies billing from emailed timesheets  
- Finance or ops teams managing many clients and employees in Google Workspace  
- Service providers that keep one sheet per employee per period  
- Anyone who wants to stop manually reading timesheets and filling invoice sheets

---

## Requirements

- n8n instance  
- Gmail account with timesheet emails  
- Google Drive and Google Sheets  
- OpenAI API key  
- OCR API endpoint (or the default one)  
- Customer POs Google Sheet with:
  - Email  
  - Customer Account Number  
  - PO Number  
  - Item  
  - Folder Name  
  - Invoice range  
  - Due Date Calculation  

---

## How It Works

### 1. Email Intake and Loop

- Gmail Trigger  
  - Polls every minute  
  - Filter: unread + has attachment + timesheet in file name or subject  
- Split Binary Attachments  
  - Creates one item per attachment  
- Loop: Process Each Attachment  
  - Handles each timesheet file in sequence  

### 2. OCR and AI Parsing

- Extract Text from Attachment  
  - Sends binary file to OCR endpoint  
  - Returns plain text  
- Extract Timesheet Data (OpenAI)  
  - Reads the text and outputs strict JSON with:
    - Employee Name  
    - Client Name  
    - Week Starting Date  
    - Week Ending Date  
    - Total Working Hours  
- Set Timesheet JSON Fields  
  - Normalizes and stores:
    - Employee Name  
    - Total Billable hours  
    - Week Start Date and Week End Date  
    - Client Name  
    - Current Year  

### 3. Customer and PO Lookup

- Get Customer Info From PO Sheet  
  - Looks up sender email  
  - Pulls:
    - Customer Account Number  
    - PO Number  
    - Item  
    - Folder Name  
    - Invoice range  
    - Due Date Calculation  

### 4. Drive Folder Discovery

- Search: Client Invoices Folder  
  - Finds the main invoices root folder  
- Search or create:
  - Client folder using Client Name  
  - Employee folder using Folder Name from PO sheet  
- Search: Year Folder  
  - Looks for folder matching Current Year  
- If Year Folder does not exist:
  - Create Year Folder or Create Current Year Folder  
- Set: Invoice Range  
  - Stores invoice range and Year Folder id  

### 5. File Naming and Sheet Search

- Set: File Name from Start and End Based Date Range  
  - Builds:
    - File Name (Start Date Based)  
    - File Name (End Date Based)  
  - Handles weekly and 15 days invoice logic  
- Search: File By Start Date Name  
- Search: File By End Date Name  
- Merge: Combine Folder Search Results  
  - Merges both search results  
- If: Invoice Range is 15 Days  
  - Uses custom 2 week window for file naming  
- Set Invoice Date and Due Date Days  
  - Invoice Date from week end  
  - Due Date from week end plus offset  

### 6. Reuse vs Create Sheet

- If: File Already Exists  
  - If found  
    - Go to Append: Final Row to Existing Sheet  
  - If not found  
    - Go to Sheets: Create Sheet  

#### New Sheet Path

- Sheets: Create Sheet  
  - Creates new spreadsheet with generated name  
- HTTP Request (create sheet)  
  - Sets spreadsheet timezone to America/New_York  
- Drive: Move Sheet To Final Folder  
  - Moves spreadsheet into the Year Folder  
- Set: Empty Row Structure  
  - Prepares JSON structure for invoice row  
- Sheets: Append Row1  
  - Writes the first invoice row  
- Set: Spreadsheet (ID and Name)  
  - Stores id and name  
- Append: Final Row to Existing Sheet  
  - Ensures row is appended with full mapping  

#### Existing Sheet Path

- Set: Spreadsheet (ID and Name)  
  - Uses found spreadsheet  
- Append: Final Row to Existing Sheet  
  - Appends new row with:
    - Customer Account Number  
    - Invoice Date  
    - Due Date  
    - PO Number  
    - Item and columns  
    - Total billable hours as Quantity  
    - Description with week period  

---

## How To Set Up

### 1. Import and Credentials

- Import JSON in n8n  
- Set credentials for:
  - Gmail Trigger  
  - Google Drive nodes  
  - Google Sheets nodes  
  - OpenAI node  
  - OCR HTTP node if needed  

### 2. Customer POs Sheet

- In Get Customer Info From PO Sheet:
  - Set Spreadsheet ID  
  - Confirm column names  
- Make sure each employee email row has:
  - Customer Account Number  
  - PO Number  
  - Item  
  - Folder Name  
  - Invoice range  
  - Due Date Calculation  

### 3. Drive and Gmail

- Confirm Client Invoices root folder exists  
- Confirm Gmail Trigger:
  - Query string  
  - Poll schedule  

### 4. Test

- Send a sample timesheet email  
- Run the workflow once manually  
- Check:
  - Folder structure  
  - Created or reused sheet  
  - Invoice row content  

### 5. Activate

- Turn workflow ON once tests are successful.

---

## How To Customize

- Swap the OpenAI model in Extract Timesheet Data.  
- Change prompt to extract extra fields such as project, cost center, or approval status.  
- Replace OCR endpoint with another service if needed.  
- Change folder naming rules in Set and Create folder nodes.  
- Adjust file naming rules for different billing periods.  
- Add validation steps to handle:
  - Missing name  
  - Zero hours  
  - Invalid dates  
- Extend the PO sheet and invoice sheet with:
  - Hourly rate  
  - Currency  
  - Tax codes  

---

## Use Case Examples

- Weekly consulting invoices from signed timesheets.  
- Contractor billing for staffing agencies.  
- Internal cross charging between departments using timesheet reports.  
- Creating a clean, auditable history of timesheets and related invoice lines.

---

## Troubleshooting Guide

| Issue | Possible Solution |
|-------|-------------------|
| No rows are created | Check Gmail Trigger is active and the filter matches the email. Confirm email is unread and has attachments. |
| OCR returns empty or error | Check OCR URL, status code, and supported file types. Log the response body. |
| Wrong or missing dates or hours | Review OpenAI prompt and a sample output. Ensure JSON keys in Set Timesheet JSON Fields match the AI output. |
| Folders not found or created | Confirm the Client Invoices root exists and that Client Name and Folder Name text matches what the workflow expects. |
| Files in wrong year folder | Check Current Year extraction and Year Folder search logic. |
| Duplicate sheets for same period | Check file naming code and Drive search nodes for exact match on names. |
| Due Date incorrect | Confirm Due Date Calculation in PO sheet and date math formats in Set and append nodes. |

---

###  **Need Help or More Workflows?**
Want to customize this workflow for your business or integrate it with your existing tools?  
Our team at **Digital Biz Tech** can tailor it precisely to your use case  from automation logic to AI-powered enhancements.  

 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)    
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
