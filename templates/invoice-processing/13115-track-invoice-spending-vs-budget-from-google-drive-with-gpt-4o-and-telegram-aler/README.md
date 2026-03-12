# 🧾 Track invoice spending vs budget from Google Drive with GPT-4o and Telegram alerts

> ⚡ **45 views** · 🧾 [Invoice Processing](../)

## Description

# Invoice Budget Tracker

Drop invoices to Google Drive and let AI handle the rest - OCR extraction, automatic categorization, budget tracking, and Telegram alerts when spending reaches thresholds.

## ✨ Key Features

- **📄 Invoice OCR** - Extracts data from PDF/image invoices automatically
- **🤖 AI Categorization** - Detects document type (skips contracts, delivery acts) and categorizes real invoices
- **💰 Budget Tracking** - Set monthly budgets per category, track spending in real-time
- **🔔 Smart Alerts** - Get notified when category spending reaches 80%+ of budget
- **📁 Auto-Organization** - Files renamed and sorted into monthly folders
- **🔄 Deduplication** - SHA256 hash prevents duplicate processing
- **📈 Scheduled Reports** - Weekly progress (Fridays) and monthly summaries (10th)
- **💬 Telegram Control** - Manage budgets via natural language chat

## 🎯 How It Works

1. **Drop invoice** to Google Drive watched folder:
   - PDF invoices
   - Image scans (JPG, PNG)

2. **AI processes automatically** (hourly):
   - OCR extracts text via Ainoflow
   - AI detects if it's actually an invoice (skips contracts, receipts, etc.)
   - Extracts: vendor, amount, date, invoice number
   - Categorizes based on service provided
   - Checks for duplicates

3. **Get organized**:
   - File renamed: `[2026-01-15] - Vendor (INV-123, 150.00 EUR).pdf`
   - Moved to monthly folder: `/Invoices/2026-01/`
   - Budget updated, alerts sent if threshold reached

4. **Manage budgets via Telegram**:
   - "Set budget Software 500"
   - "Show budgets"
   - "Budget status"

## 📋 Expense Categories

Software, Marketing, Travel, Office, Professional Services, Infrastructure, Vehicle, Other

## 🔧 Setup Requirements

- **Google Drive** — [OAuth setup](https://docs.n8n.io/integrations/builtin/credentials/google/) for file operations
- **Telegram Bot** — [Create bot](https://blog.n8n.io/create-telegram-bot/) for notifications and budget management
- **OpenRouter** — [Get API key](https://openrouter.ai/) for AI processing
- **Ainoflow** — [Sign up](https://www.ainoflow.io/signup) for OCR and JSON storage

## 🏗️ Workflow Architecture

| Section | Description |
|---------|-------------|
| **Document Processing** | Hourly scan → OCR → AI categorization → Budget tracking → File organization |
| **Budget Management** | Telegram bot for budget CRUD via AI Agent with MCP storage |
| **Weekly Report** | Friday summary of current month progress |
| **Monthly Report** | 10th of month detailed report for previous month |
| **Data Reset** | Manual trigger to delete all invoice data (requires approval) |

## 💬 Usage Examples

### Invoice Processing
```
📄 Drop "invoice_aws.pdf" to /Invoices/
→ ✅ AWS | 150.00 EUR | Software
→ File: [2026-01-15] - AWS (INV-2026-01, 150.00 EUR).pdf
→ Moved to: /Invoices/2026-01/

📄 Drop "contract.pdf" to /Invoices/
→ ⚠️ Skipped: This is a service agreement, not an invoice
→ File renamed: [REVIEW] - contract.pdf
```

### Budget Management (Telegram)
```
"Set budget Software 500"
→ ✅ Budget set: Software - €500/month

"Show budgets"
→ 📋 Monthly Budgets:
   • Software: €500
   • Marketing: €1000
   Total: €1500/month

"Budget status"
→ 📊 January 2026:
   • Software: €150/€500 (30%) ✅
   • Marketing: €850/€1000 (85%) ⚠️
```

### Scheduled Reports
```
📅 Weekly (Friday):
→ 📊 Week Summary:
   Processed: 12 invoices
   Total: €2,450
   Top: Software €800, Marketing €650

📅 Monthly (10th):
→ 📈 January 2026 Report:
   Total: €4,200 (28 invoices)
   [████████░░] Software 80%
   [██████░░░░] Marketing 60%
```

## 📦 Data Storage

Invoices stored in Ainoflow JSON Storage by month (key = SHA256 hash):
```json
{
  "vendor": "Amazon Web Services",
  "vendor_normalized": "AWS",
  "amount": 150.00,
  "currency": "EUR",
  "date": "2026-01-15",
  "invoice_number": "INV-2026-01",
  "category": "Software",
  "file_id": "1BxiMVs0XRA5nFMd...",
  "processed_at": "2026-01-15T10:30:00Z"
}
```

## ⚠️ Important Notes

- **Run /start first** - Registers your chat_id, locks bot to you
- **Document type detection** - Contracts, delivery acts, receipts are skipped automatically
- **Budget alerts at 80%** - Only triggers if budget is set for category
- **Duplicates detected** - Same file won't be processed twice (SHA256 hash)
- **Data Reset is permanent** - Requires manual approval
- **Single currency** - All invoices assumed same currency (no conversion)

## 🛠️ Customization

### Categories
Edit **SetDefaults** node → `allowed_categories`
Then send /start to re-register with new categories

### Processing Thresholds
Edit **WorkflowConfig** node:
- `alert_threshold` - Budget alert % (default: 0.8)
- `review_prefix` - Failed files prefix (default: "[REVIEW] - ")
- `duplicate_prefix` - Duplicate prefix (default: "[DUPLICATE] - ")

### AI Models
Swap OpenRouter models in Gpt4oCategorizer and Gpt4oBudgetAgent nodes

## 💼 Need Customization?

Want to adapt this template for your business? Custom integrations, multi-user support, or enterprise deployment?

**Contact us at [Ainova Systems](https://ainovasystems.com/)** - We build AI automation solutions for businesses.

---

**Tags:** `google-drive`, `invoice-processing`, `budget-tracking`, `ai-agent`, `ocr`, `telegram`, `openrouter`, `mcp-tools`, `business-automation`

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
