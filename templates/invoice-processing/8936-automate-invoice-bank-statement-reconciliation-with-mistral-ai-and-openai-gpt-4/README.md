# 🧾 Automate invoice-bank statement reconciliation with Mistral AI and OpenAI GPT-4

> ⚡ **963 views** · 🧾 [Invoice Processing](../)

## Description

**Cash Reconciliation with AI**

This template automates daily cash reconciliation by comparing your open invoices against bank statement transactions. Instead of manually scanning statements line by line, the workflow uses AI to:

1. Match transactions to invoices and assign confidence scores
2. Flag unapplied or review-needed payments
3. Produce a reconciliation table with clear metrics (match %, unmatched count, etc.)

The end result: faster cash application, fewer errors, and better visibility into your cash flow.

**Good to know**

1. Each AI transaction match call will consume credits from your OpenAI account. Check OpenAI pricing for costs.
2. OCR is used to extract data from PDF bank statements, so you’ll need a Mistral OCR API key.
3. This workflow assumes invoices are stored in an Excel or CSV file. You may need to tweak column names to match your file headers.

**How it works**

1. Import files:The workflow pulls your invoice file (Excel/CSV) and daily bank statement (from OneDrive, Google Drive, or local storage).
2. Extract and normalize data: OCR is applied to bank statements if needed. Both data sources are cleaned and aligned into comparable formats.
3. AI matching: The AI agent compares statement transactions against invoice records, assigns a confidence score, and flags items that require manual review.
4. Reconciliation output:A ready-made table shows matched invoices (with amounts and confidence), unmatched items, and summary stats.

**How to use**

1. Start with the manual trigger node to test the flow. Once validated, replace it with a schedule trigger to run daily.
2. Adjust thresholds (like date tolerances or amount variances) in the code nodes to fit your business rules.
3. Review the reconciliation table each day most of the work is automated, you just handle exceptions.

**Requirements**

1. OpenAI API key
2. Mistral OCR API key (for PDF bank statements)
3. Microsoft OneDrive API key and Microsoft Excel API key
4. Access to your invoice file (Excel/CSV) and daily bank statement source

**Setup steps**

**Connect accounts**:
Enter your API keys (OpenAI, Mistral OCR, OneDrive, Excel).

**Configure input nodes**: 

1. Point the Excel/CSV node to your invoice file.
2. Connect the Get Bank Statement node to your statement storage.

**Configure AI agent**: Add your OpenAI API credentials to the AI node.

**Customize if needed**

1. Update column mappings if your file uses different headers.
2. Adjust matching thresholds and tolerance logic.

## 🔗 Nodes Used

Microsoft Excel 365, Microsoft OneDrive, AI Agent, OpenAI Chat Model, Mistral AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
