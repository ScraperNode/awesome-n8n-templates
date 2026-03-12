# 🧾 Extract, validate, and log email invoices from Gmail to Google Sheets with GPT-4

> ⚡ **58 views** · 🧾 [Invoice Processing](../)

## Description

Inbox2Ledger is an end-to-end **n8n template** that turns a noisy finance inbox into a clean, structured ledger. It fetches emails, uses AI guardrails to keep only finance-relevant messages, extracts invoice/receipt fields via an OCR-style agent, validates and auto-categorizes each expense, generates a unique case ID, and appends the result to a Google Sheet for accounting or downstream automations.

---

## Key Features

- **Trigger**: Form submission or scheduled fetch (sample *On form submission* node included)
- **AI Filter**: Guardrail node determines whether an email is finance-related (payments, invoices, receipts)
- **Keyword Filter**: Filters common invoice/bill/payment subject keywords
- **Extraction**: Language-model agent returns normalized JSON:
  - `vendor_name`
  - `invoice_date` (YYYY-MM-DD)
  - `invoice_id`
  - `total_amount`
  - `tax_amount`
  - `currency`
  - `items_summary`
  - `vendor_tax_id`
- **Validation**: Code node checks required fields and amount formats; flags extraction errors
- **Categorization**: Rule-based expense categorizer (software & hosting, subscriptions, travel, payroll, etc.) with MCC/vendor fallbacks
- **Output**: Appends structured rows to a Google Sheet with mapped columns:
  - `invoice_id`, `vendor_name`, `invoice_date`, `total_amount`, `currency`,
    `tax_amount`, `gl_category`, `approval_status`, `timestamp`, `case_id`,
    `items_summary`, `vendor_tax_id`, `processed_at`
- **High Accuracy**: Low false-positive rate using combined AI guardrails + subject filtering
- **Quick Setup**: Example nodes and credentials pre-configured in the template

---

## Included Nodes & Flow Highlights

**On form submission (date picker trigger)**  
→ **Get Email Content (Gmail)**  
→ **Guardrail: Is Finance? (LangChain Guardrails)**  
→ **IF (Guardrail Passed)**  
→ **Filter Finance Keywords**  
→ **AI Agent (Email OCR)**  
→ **Validate Extraction**  
→ **Check for Errors**  
→ **Apply Finance Rules**  
→ **Log to Invoices Sheet (Google Sheets)**  

*(Full node list and configuration included in the template.)*

---

## Requirements & Credentials

- **Gmail OAuth2 (read access)** — for fetching emails  
- **OpenAI API key (or compatible LLM)** — for guardrails & extraction  
- **Google Sheets OAuth2** — to append rows to the invoice sheet  

**Recommended**: Use the Google Sheet ID included in the template, or replace it with your own Sheet ID and `gid`.

---

## Quick Setup Guide
👉 [Demo & Setup Video](https://drive.google.com/file/d/1OeDKjgO0a9yXMMShGTO08JGJDzvc9wl8/view?usp=sharing)
1. Import the template into **n8n**
2. Connect and authorize credentials: Gmail, Google Sheets, OpenAI (or preferred LLM)
3. Update the Google Sheet ID / sheet `gid` if using your own sheet
4. *(Optional)* Adjust the Guardrail `topicalAlignment` threshold or filter keywords
5. Test using the form trigger or a single email, then enable the workflow

---

## Configuration Tips

- The extraction agent outputs a **strict JSON schema** — keep it for reliable downstream mapping
- Use a **low LLM temperature (0.2)** for deterministic extraction
- For non-USD currencies, ensure your accounting system supports the `currency` field or add a conversion step
- For high-volume inboxes, enable batching or rate-limit the Gmail node to avoid API quota issues

---

## Privacy & Security

- This template processes real email content and financial data — store credentials securely
- Restrict access to the n8n instance to authorized users only
- Review data-retention policies if using a hosted LLM service

---

## Example Use Cases

- Auto-log vendor invoices from email into an accounting Google Sheet
- Build an audit trail with case IDs for finance teams
- Preprocess incoming receipts before forwarding to AP tools or ERPs

---

## Tags (Recommended)

`finance`, `invoices`, `email`, `ai`, `ocr`, `google-sheets`, `automation`, `accounting`, `n8n-template`

## 🔗 Nodes Used

Google Sheets, Gmail, Filter, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
