# 🤝 Send bulk MercadoPago payment links from Google Sheets via Gmail, WhatsApp, or Telegram

> ⚡ **92 views** · 🤝 [CRM & Sales Operations](../)

## Description

**HOW IT WORKS**

Reads customer + product rows from a Google Sheet, generates a
unique MercadoPago payment link for each row using "*Create
Payment Link*", writes the link back to the sheet, and then
delivers it to the customer through the channel specified per
row (Email via Gmail, WhatsApp via the native WhatsApp Business
Cloud node, or Telegram). An IF filter skips rows that already
have a link, so the workflow is idempotent and safe to re-run.
A Switch node routes each row to the chosen channel, and a
final Google Sheets node marks the row as sent.

**SET UP STEPS**
1. Get your MercadoPago Access Token ([credentials](credentials) doc).
2. Create a Google Sheet with the headers provided in the
   template's sticky note (a sample CSV ships with the
   template).
3. Import the template into n8n.
4. Create credentials for MercadoPago, Google Sheets, and the
   channels you plan to use (Gmail OAuth, WhatsApp Business
   Cloud, Telegram Bot).
5. Select your Google Sheet document and sheet name in the
   "Read Sheet" node.
6. Disable the channel branches you won't use.
7. Click Execute Workflow.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
