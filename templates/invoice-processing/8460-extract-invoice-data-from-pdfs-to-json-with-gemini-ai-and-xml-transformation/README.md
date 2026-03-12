# 🧾 Extract invoice data from PDFs to JSON with Gemini AI and XML transformation

> ⚡ **1,302 views** · 🧾 [Invoice Processing](../)

## Description

This n8n workflow converts invoices in PDF format into a **structured, ready-to-use JSON**, using **AI and XML transformation** — without writing any code.

#### 🚀 How it works

1. **Upload form** → The user uploads a PDF file.
2. **Text extraction** → The PDF content is extracted as plain text.
3. **XML schema definition** → A standard invoice structure is defined with fields such as:

   * Invoice number
   * Customer and issuer details
   * Items with description, quantity, and price
   * Totals and taxes
   * Bank account details
4. **AI (Gemini)** → The model rewrites the PDF text into a **valid XML** following the predefined schema.
5. **XML cleanup** → Removes extra tags, line breaks, and unnecessary formatting.
6. **JSON conversion** → The XML is transformed into a clean, structured JSON object, ready for integrations, APIs, or storage.

#### ✨ Benefits

* Transforms **unstructured PDFs** into **normalized JSON data**.
* No coding required, only n8n nodes.
* Scalable to different invoice formats with minimal adjustments.
* Leverages AI to interpret complex textual content.

#### 🛠️ Use cases

* Automating invoice data capture.
* Integration with ERPs, CRMs, or databases.
* Generating financial reports from PDFs.

## 🔗 Nodes Used

n8n Form Trigger, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
