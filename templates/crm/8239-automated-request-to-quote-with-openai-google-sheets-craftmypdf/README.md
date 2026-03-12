# 🤝 Automated request-to-quote with OpenAI, Google Sheets & CraftMyPDF

> ⚡ **135 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 📄 What this workflow does
- Turns a simple form submission into a polished, priced PDF quote—automatically.
- Captures lead details via Form: Request a Quote.
- Loads your Google Sheets catalog (SKUs, price, stock, min qty, etc.).
- Uses OpenAI to select SKUs and build a strict JSON quote (respects in_stock and min_qty, optional discount ≤10%).
- Maps data in a Code node to compute line totals, discount, VAT, and a unique invoice_number; validates/falls back due_date.
- Renders a branded PDF via CraftMyPDF, fetches the file link, and emails the customer the quote.


## 👤 Who is this for
- SMBs and sales teams needing instant quotes from website forms.
- Ops teams managing catalogs in Sheets who want LLM-assisted SKU selection.
- Agencies/shops that must generate consistent, branded PDFs and email them automatically.


## ✅ Requirements
- A self-hosted n8n instance.
- Google Sheets catalog with (recommended) columns: sku, name, uom, unit_price, currency, in_stock (TRUE/FALSE), min_qty, lead_time_days, notes.
- Connected credentials: Google Sheets OAuth2, OpenAI (or compatible), CraftMyPDF, SMTP.
- A CraftMyPDF template whose fields match the Code node output (invoice_number, items[], gross_total, etc.). CraftMyPDF provides a drag-and-drop editor and PDF Generation API that work well with n8n.


## ⚙️ How to set up
- Import the workflow JSON into n8n.
- In Google Sheets: Products, set real documentId/sheetName (IDs) and connect OAuth.
- In LLM node, keep or change model (default gpt-4.1-mini), and keep the “JSON-only” system prompt.
- In Create a PDF, set your CraftMyPDF templateId.
- In Email: Send Quote, set fromEmail and SMTP credentials.
- Submit a test form; verify LLM JSON → PDF render → email delivery.
- (Optional) Adjust defaults in the Code node: vat_pct (default 10), payment_terms, currency fallback, and valid_days.


## 🧩 CraftMyPDF template — quick guide (UI)
- Create & open a template: Log in → Manage Templates → New Template (choose blank or a starter) → Edit to open the editor. The editor has four core tabs: Designer, Preview, Data, Settings.
- Paste sample JSON: Go to the Data tab and paste a sample that mirrors what n8n will send (e.g., includes invoice_number, client, items[]). This JSON powers the editor’s auto-complete and live preview.
- Bind fields fast: In Designer, use Data Fields to drag pre-bound text/image components that auto-insert expressions from your JSON—much quicker than manual binding.
- Add line items: For repeating rows like items[], use Simple Table (set Data Source to {{data.items}}, then in each column use {{row.field}}, e.g., {{row.description}}, {{row.quantity}}, {{row.unit_price}}, {{row.total}}).
- Use expressions: Anywhere you need dynamic text, enter {{ data.&lt;field&gt; }}—for example {{data.invoice_number}}, {{data.client}}, {{data.gross_total}}. Preview the result and/or generate a real PDF from the Preview tab.
- Finish & integrate: Save the template, note its Template ID, and use it in the n8n CraftMyPDF node. You can return to the editor anytime to tweak layout/styles; the next workflow run will use the updated design. The editor and API are built for reusable templates.


## 🔁 How it works
- Trigger → Form submission captures: Full Name, Email, Company, Requirements, Budget Min/Max, Need By, Notes.
- Catalog Load → Sheets node returns rows; passed to the LLM as JSON.
- LLM Quote → Model selects SKUs/qty, pricing, discount (≤10%), terms, and returns VALID JSON only.
- Code Mapping → Parses JSON (strips code fences if present), computes discounts/VAT/totals, assigns invoice_number (Q-YYYYMMDD-ABCDE), and validates due_date (falls back to today + valid_days).
- PDF Render → CraftMyPDF generates the branded quote and returns a file URL.
- Delivery → HTTP node fetches the file; SMTP node emails the customer with dynamic subject and totals.


## 💡 About Margin AI
[Margin AI](https://marginai.co/) is your AI Service Companion. We help organizations design intelligent, human-centric automation — from content pipelines and branding workflows to customer insights and sales enablement. Our tailored AI solutions scale marketing, operations, and creative processes with ease.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
