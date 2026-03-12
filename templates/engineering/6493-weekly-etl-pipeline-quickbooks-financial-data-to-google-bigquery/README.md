# ⚒️ Weekly ETL pipeline: QuickBooks financial data to Google BigQuery

> ⚡ **562 views** · ⚒️ [Engineering](../)

## Description

This template sets up a weekly ETL (Extract, Transform, Load) pipeline that pulls financial data from QuickBooks Online into Google BigQuery. It not only transfers data, but also cleans, classifies, and enriches each transaction using your own business logic.

### Who It's For
- **Data Analysts & BI Developers**  
  Need structured financial data in a warehouse to build dashboards (e.g., Looker Studio, Tableau) and run complex queries.
- **Financial Analysts & Accountants**  
  Want to run custom SQL queries beyond QuickBooks’ native capabilities.
- **Business Owners**  
  Need a permanent, historical archive of transactions for reporting and tracking.

### What the Workflow Does
#### 1. Extract  
Fetches transactions from the previous week every Monday from your QuickBooks Online account.
#### 2. Transform  
Applies custom business logic:
- Cleans up text fields  
- Generates stable transaction IDs  
- Classifies transactions (income, expense, internal transfer)
#### 3. Format  
Prepares the cleaned data as a bulk-insert-ready SQL statement.
#### 4. Load  
Inserts the structured and enriched data into a Google BigQuery table.

### Setup Guide
#### 1. Prepare BigQuery
- Create a dataset (e.g., `quickbooks`) and table (e.g., `transactions`)
- The table schema must match the SQL query in the "Load Data to BigQuery" node
#### 2. Add Credentials
- Add QuickBooks Online and Google BigQuery credentials to your n8n instance
#### 3. Configure Business Logic
- Open the `Clean & Classify Transactions` node
- Update the JavaScript arrays:
  - `internalTransferAccounts`
  - `expenseCategories`
  - `incomeCategories`
- Ensure these match your QuickBooks Chart of Accounts exactly
#### 4. Configure BigQuery Node
- Open the `Load Data to BigQuery` node
- Select the correct Google Cloud project
- Ensure the SQL query references the correct dataset and table
#### 5. Activate the Workflow
- Save and activate it  
- The workflow will now run weekly

### Requirements
- A running n8n instance (Cloud or Self-Hosted)  
- A QuickBooks Online account  
- A Google Cloud Platform project with BigQuery enabled  
- A BigQuery table with a matching schema

### Customization Options
- **Change Schedule**: Modify the schedule node to run daily, monthly, or at a different time  
- **Adjust Date Range**: Change the date macro in the `Get Last Week's Transactions` node  
- **Refine Classification Rules**: Add custom logic in the `Clean & Classify Transactions` node to handle specific edge cases

## 🔗 Nodes Used

QuickBooks Online, Google BigQuery, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
