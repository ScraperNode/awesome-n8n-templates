# 🧾 Sync AWS billing invoices with FreeAgent and PostgreSQL tracking

> ⚡ **14 views** · 🧾 [Invoice Processing](../)

## Description

Automatically retrieve AWS invoices and create corresponding bills in FreeAgent, marking them as paid. This workflow eliminates manual data entry for AWS billing.

## What It Does

1. Fetches invoices from AWS Invoicing API for the previous month
2. Filters invoices by issue date to ensure only new ones are processed
3. Checks PostgreSQL database for previously processed invoices
4. Creates a bill in FreeAgent with correct dates and amounts
5. Marks the bill as paid with a bank transaction explanation
6. Records the invoice in the database to prevent future duplication

## Prerequisites

- AWS account with Invoicing API access
- FreeAgent account with OAuth API access
- PostgreSQL database (you could modify to use n8n Data Table?)
- AWS IAM user with `invoicing:ListInvoiceSummaries` permission

## Quick Setup Checklist

- [ ] Create PostgreSQL table (see below)
- [ ] Add PostgreSQL credentials in n8n
- [ ] Set up FreeAgent OAuth2 credentials
- [ ] Update AWS access key and secret key in "Generate AWS Signature" node
- [ ] Update AWS account ID in "Calculate Last Month" node
- [ ] Get and update FreeAgent contact ID for AWS
- [ ] Get and update FreeAgent category ID (cloud services/hosting)
- [ ] Get and update FreeAgent bank account ID
- 
## Configuration Required

This template has placeholders that you need to replace:

### In Code Nodes
- `YOUR_AWS_ACCESS_KEY_ID` - Your AWS access key
- `YOUR_AWS_SECRET_ACCESS_KEY` - Your AWS secret key  
- `YOUR_AWS_ACCOUNT_ID` - Your 12-digit AWS account number
- `YOUR_CONTACT_ID` - FreeAgent contact ID for AWS
- `YOUR_CATEGORY_ID` - FreeAgent category for cloud services
- `YOUR_BANK_ACCOUNT_ID` - FreeAgent bank account for payments

### Credentials to Add
- PostgreSQL database credentials (3 nodes)
- FreeAgent OAuth2 credentials (2 nodes)

## Use Cases

- **Freelancers & Consultants**: Automatically track AWS infrastructure costs
- **Small Businesses**: Streamline bookkeeping for cloud expenses
- **Agencies**: Manage multiple AWS accounts with separate workflows
- **Accountants**: Reduce manual data entry for client AWS bills

## Database Schema

The workflow uses a PostgreSQL table to track processed invoices - To initially create the table you need to run :

```sql
CREATE TABLE aws_invoices_processed (
    id SERIAL PRIMARY KEY,
    aws_invoice_id VARCHAR(255) UNIQUE NOT NULL,
    freeagent_invoice_url TEXT NOT NULL,
    billing_period VARCHAR(7) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) NOT NULL,
    processed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Customization

- **VAT Rate**: Default is 20% (UK), adjust in "Prepare FreeAgent Bill" node
- **Schedule**: Modify cron expression in "Schedule Trigger" node
- **Description Format**: Customize invoice description in code nodes
- **Multi-Account**: Duplicate workflow for each AWS account

## Notes

- AWS dates are reversed: DueDate is earlier than IssuedDate, so the workflow swaps these
- All amounts are processed in the currency specified by AWS
- The "DELETE Test Record" node is disabled by default - use for testing only

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
