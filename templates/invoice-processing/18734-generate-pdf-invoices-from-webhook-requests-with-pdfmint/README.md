# 🧾 Generate PDF invoices from webhook requests with PDFMint

> ⚡ **15 views** · 🧾 [Invoice Processing](../)

## Description

## Generate PDF invoices from webhook data with PDFMint

**Who's it for**
Anyone whose shop, billing system or internal tool can POST JSON and needs a finished PDF invoice back in the same request — without running a headless browser, and without a template editor to log into.

**How it works**
1. **Receive invoice data** accepts a POST with the customer, the line items and the currency.
2. **Set your company details** is the one node you edit: company name, address, VAT rate, payment terms and footer note.
3. **Check the request is complete** rejects a request that has no customer or no line items *before* a PDF is rendered, so a broken payload gets a readable 422 instead of an invoice that says "undefined".
4. **Calculate line totals and VAT** does the arithmetic in one place: per-line amounts, subtotal, VAT at your rate, grand total, and the due date derived from your payment terms. The HTML stays a layout, not a calculator.
5. **Render the invoice as PDF** builds the document with PDFMint. The layout is plain HTML and CSS inside the node, so you change the design by editing markup.
6. **Did the render succeed?** checks the render result. On success **Return the PDF** answers the original request with the file; if PDFMint could not be reached or refused the job, **Explain what went wrong** and **Return the error as JSON** answer with an error status (422 for a bad payload, 500 when the render itself fails) and the reason. The caller always gets an answer.

**How to set up**
- Add a PDFMint credential (free plan: 10 documents a month, no card).
- Open **Set your company details** and put in your own company name, address, VAT rate and payment terms.
- Activate the workflow and POST to the production webhook URL.

**Requirements**
- A PDFMint API key from pdf.mintapis.com (free plan: 10 documents a month, no card). This template uses a community node — it installs on **n8n Cloud** and on **self-hosted n8n**.

**How to customize**
Edit the HTML in **Render the invoice as PDF** for your own branding — line items are looped in one expression, so any number of rows works. Set `vat_percent` to `0` if you do not charge VAT. Swap **Return the PDF** for a Gmail, Drive or S3 node to deliver the invoice instead of returning it.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
