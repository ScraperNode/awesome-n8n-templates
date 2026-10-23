# 🧾 Process emailed PDF invoices into QuickBooks bills with OpenAI

> ⚡ **556 views** · 🧾 [Invoice Processing](../)

## Description

# AI Invoice Processor for QuickBooks - Email to Bill with PDF Attachment

Automatically processes vendor invoices received by email, creates QuickBooks bills with full details, and attaches the original PDF.

## Who is this for?

- Small/medium businesses using QuickBooks Online
- Bookkeepers processing 20+ invoices/month
- Accounting firms managing multiple clients
- Anyone tired of manually entering invoice data into QuickBooks

## What it does

1. **Monitors Gmail** for new emails with PDF attachments (every 15 minutes)
2. **Extracts text** from the PDF using n8n's built-in PDF parser
3. **AI classification** - determines if the PDF is actually an invoice (skips receipts, contracts, etc.)
4. **AI data extraction** - pulls structured data: vendor name, invoice number, amount, currency, dates, and line items
5. **Vendor lookup** - searches QuickBooks for the vendor by name
6. **Creates a Bill** in QuickBooks with all extracted data (amount, description, dates)
7. **Attaches the original PDF** to the bill for reference
8. **Sends confirmation email** back to the sender with bill details

## Error handling

- **Not an invoice?** Silently skipped - no noise
- **AI can't extract valid data?** Email sent to AP team with error details
- **Vendor not found in QuickBooks?** Email sent to AP team with vendor name and action steps

## Setup (5 minutes)

### Prerequisites
- Gmail account (OAuth2)
- OpenAI API key
- QuickBooks Online account (OAuth2)

### Steps

1. **Import the workflow** into your n8n instance
2. **Connect credentials:**
   - Gmail OAuth2
   - OpenAI API
   - QuickBooks OAuth2
3. **Edit the Config node** with your values:
   - `realmId` - your QuickBooks Company ID (Settings → Account)
   - `apTeamEmail` - where error notifications go
   - `defaultExpenseAccountId` - your QB expense account ID (see below)
4. **Activate the workflow**

### How to find your Expense Account ID

1. Log in to QuickBooks Online
2. Go to Settings (gear icon) → Chart of Accounts
3. Find an expense account (e.g. "Office Supplies", "Professional Services")
4. Hover → click **View register** (or **Run report**)
5. Look at the URL for `accountId=XX` or `account=XX`
6. That number is your `defaultExpenseAccountId`

### Sandbox vs Production

If using QuickBooks Sandbox, update the Upload PDF to Bill node URL from:
```
https://quickbooks.api.intuit.com/v3/company/...
```
to:
```
https://sandbox-quickbooks.api.intuit.com/v3/company/...
```

## Technical details

### AI extraction schema

The AI extracts these fields from each invoice PDF:

| Field | Type | Example |
|-------|------|---------|
| `is_invoice` | boolean | `true` |
| `vendor_name` | string | "Acme Corp" |
| `invoice_number` | string | "INV-2024-001" |
| `amount` | number | 1500.00 |
| `currency` | string | "USD" |
| `due_date` | string | "2024-12-31" |
| `txn_date` | string | "2024-12-01" |
| `line_items` | array | [{description, amount, quantity}] |

### Binary data flow

PDF binary data is lost after the AI extraction step (LangChain nodes don't preserve binary). The attachment pipeline solves this by referencing the binary from the Config node using `$('Config').item.binary.attachment_0` - a named reference that works regardless of the connection path.

### Force Inline Binary (n8n v2 quirk)

n8n v2 stores binary data as database streams. QuickBooks' `/upload` API requires `Content-Length` in multipart uploads, which streams can't provide. A Code node converts binary streams to inline base64 before upload.

### Nodes used

- Gmail Trigger (polling)
- Extract from File (PDF)
- Information Extractor (LangChain + OpenAI)
- QuickBooks Online (vendor search, bill creation)
- HTTP Request (PDF upload to bill)
- Gmail (confirmation & error emails)
- Code nodes (data transformation)
- IF nodes (routing logic)

## Limitations

- **Single line item per bill** - the native QuickBooks node supports only one line item. All extracted line items are combined into the description field with invoice number.

## 🔗 Nodes Used

HTTP Request, Gmail, QuickBooks Online, Gmail Trigger, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
