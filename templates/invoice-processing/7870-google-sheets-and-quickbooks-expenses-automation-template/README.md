# 🧾 Google Sheets and QuickBooks expenses automation template

> ⚡ **506 views** · 🧾 [Invoice Processing](../)

## Description

## Automatically Upload Expenses to QuickBooks from Google Sheets

## What It Does
This n8n workflow template automates the process of uploading categorized expenses from Google Sheets into QuickBooks Online. It leverages your Google Sheets data to create expense entries in QuickBooks with minimal manual effort, streamlining the accounting process.

## Prerequisites
- **QuickBooks Online Credential**: Set up your QuickBooks Online connection in n8n for expense creation.
- **Google Sheets Credential**: Set up your Google Sheets connection in n8n to read and write data.

## How It Works
1. **Refresh Google Sheets Data**: The workflow will first refresh the list of vendors and chart of accounts from your Google Sheets template.
2. **Import Bank Transactions**: Open the provided Google Sheets template and copy-paste your transactions from your online banking CSV file.
3. **Categorize Transactions**: Quickly categorize the transactions in Google Sheets, or assign this task to a team member.
4. **Run the Workflow**: Once the transactions are categorized, run the workflow again, and each expense will be created automatically in QuickBooks Online.

## Example Use Cases
- **Small Business Owners**: Automatically track and upload monthly expenses to QuickBooks Online without manually entering data.
- **Accountants**: Automate the transfer of bank transactions to QuickBooks, streamlining the financial process.
- **Bookkeepers**: Quickly categorize and upload business expenses to QuickBooks with minimal effort.

## Setup Instructions
1. **Connect Your Google Sheets and QuickBooks Credentials**:  
   - In n8n, connect your Google Sheets and QuickBooks accounts. Follow the credential setup instructions for both services.

2. **Setup the Google Sheets Node**:  
   - Link the specific Google Sheet that contains your expense data. Make sure the sheet includes the correct columns for transactions, vendors, and accounts.

3. **Setup the QuickBooks Node**:  
   - Configure the QuickBooks Online node to create expense entries in QuickBooks from the data in your Google Sheets.

4. **Setup the HTTP Node for API Calls**:  
   - Use the HTTP node to make custom API calls to QuickBooks

5. **Configure the QuickBooks Realm ID**:  
   - Obtain the QuickBooks Realm ID from your QuickBooks Online Developer account to use for custom API calls. This ensures the workflow targets the correct QuickBooks instance.

## How to Use
1. **Import Transactions**:  
   - Copy and paste your bank transactions from the CSV into the provided Google Sheets template.

2. **Categorize Transactions**:  
   - Manually categorize the transactions in the sheet, or delegate this task to another person to ensure they’re correctly tagged (e.g., Utilities, Office Supplies, Travel).

3. **Run the Workflow**:  
   - Execute the workflow to automatically upload the categorized expenses into QuickBooks.

4. **Verify in QuickBooks**:  
   - After the workflow runs, log into QuickBooks Online to confirm the expenses have been created and categorized correctly.

## Free Google Sheets Template
To get started quickly, download my **free Google Sheets template** that includes pre-configured sheets for bank transactions, vendors, and chart of accounts. This template will make it easier for you to import and categorize your expenses before running the n8n workflow.

[Download the Free Google Sheets Template](https://docs.google.com/spreadsheets/d/1dmkXHeMghVp5AHrdyU1vrwjUHWNaoDfkk9UOuG-SNKI/edit?usp=sharing)

## Customization Options
- **Category Mapping**: Customize how categories in Google Sheets are mapped to QuickBooks expense types.
- **Additional API Calls**: Add custom API calls if you need extra functionality, such as creating custom reports or syncing additional data.
- **Notifications**: Configure email or Slack notifications to alert you when the expenses have been successfully uploaded.

## Why It's Useful
- **Time-Saving**: Automatically upload and categorize expenses in QuickBooks without needing to enter them manually.
- **Error Reduction**: Minimize human error by automating the process of uploading and categorizing transactions.
- **Efficiency**: Connects Google Sheets to QuickBooks, making it easy to manage expenses in one place without having to toggle between multiple apps.
- **Accuracy**: Syncs data between Google Sheets and QuickBooks in a structured, automated way for consistent and reliable financial reporting.
- **Flexibility**: Allow external users or lower-permission employees to categorize financial transactions without providing direct access to QBO

## 🔗 Nodes Used

Google Sheets, HTTP Request, QuickBooks Online

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
