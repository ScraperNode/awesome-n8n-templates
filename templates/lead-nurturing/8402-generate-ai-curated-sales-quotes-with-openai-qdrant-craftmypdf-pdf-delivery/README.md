# 💬 Generate AI-curated sales quotes with OpenAI, Qdrant & CraftMyPDF PDF delivery

> ⚡ **129 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## 👀 Short Description
Turn form submissions into AI-curated quotes with SKU selection straight from Qdrant, branded PDF generation, and automatic email—now streamlined for quoting only (FAQ removed). (Improved from the previous workflow: [Automated Request-to-Quote System with OpenAI, Google Sheets & CraftMyPDF Email Delivery](https://n8n.io/workflows/8239-automated-request-to-quote-system-with-openai-google-sheets-and-craftmypdf-email-delivery/))



## 🎉What’s new vs. the old version
- Products now come directly from Qdrant (no Google Sheets catalog in the loop).
- Focused quote-only flow — removed FAQ/RAG nodes for a leaner, faster pipeline.
- Agent enforces a JSON-only contract, keeping pricing/stock grounded in Qdrant payloads.
- Easier to maintain; fewer moving parts and lower token usage.


## 📄 What this workflow does
- Captures lead details via Form: Request a Quote.
- Searches your Qdrant collection (products) for relevant SKUs by keyword, use-case, features, and budget hints.
- An AI Agent (OpenAI) selects in-stock SKUs, respects min_qty, and returns a strict JSON quote (optional discount ≤ 10%).
- A Code step computes line totals, discount, VAT, generates a unique invoice_number (e.g., Q-YYYYMMDD-ABCDE), and validates or falls back the due_date.
- CraftMyPDF renders a branded PDF; the file is fetched and SMTP emails the quote to the customer.


## 👤 Who this is for
- SMBs and sales teams needing instant, accurate quotes from website forms.
- Ops teams storing product data in Qdrant and wanting AI-assisted SKU selection.
- Agencies or shops that must generate consistent, branded PDFs and send them automatically.


## ✅ Requirements
- Self-hosted n8n instance.
- Qdrant collection (default: products) with payload fields:
-  sku, name, uom, unit_price, currency, in_stock (true/false), min_qty, handle/url, features.
- Connected credentials: OpenAI (or compatible), Qdrant API, CraftMyPDF, SMTP.
- A CraftMyPDF template aligned with the Code node output (invoice_number, items[], gross_total, etc.).


## ⚙️ How to set up
1. Import the workflow JSON into n8n.
2. In Qdrant Vector Store (Products), set collection=products and your Qdrant API credentials.
3. In Sales Quote Agent, keep or change the model (default gpt-4.1-mini) and the JSON-only system prompt.
4. In Create a PDF, set your CraftMyPDF templateId.
5. In Email: Send Quote, set fromEmail and SMTP credentials.
6. Submit a test form; verify: Agent JSON → PDF render → email delivery.
7. (Optional) Adjust defaults in the Code node: vat_pct (default 10), payment_terms, currency fallback, valid_days.


## 🔁 How it works (end-to-end)
1. Trigger → Form captures: Full Name, Email, Company, Requirements, Budget Min/Max, Need By, Notes.
2. Product Search → Agent calls PRODUCTS_QDRANT to retrieve relevant SKUs and payload fields from Qdrant.
3. Agent Quote → Selects SKUs and qty, applies pricing and ≤10% discount.


## 💡 About Margin AI
[Margin AI](https://marginai.co/) is your AI Service Companion. We help organizations design intelligent, human-centric automation — from content pipelines and branding workflows to customer insights and sales enablement. Our tailored AI solutions scale marketing, operations, and creative processes with ease.

## 🔗 Nodes Used

Send Email, HTTP Request, AI Agent, Embeddings OpenAI, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
