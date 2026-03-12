# 🧾 Generate custom branded PDF invoices from QuickBooks and email to clients

> ⚡ **40 views** · 🧾 [Invoice Processing](../)

## Description

Automated QuickBooks Invoice to Custom PDF & Email

This n8n workflow automates the entire QuickBooks invoicing process — from creation to delivery. When a new invoice is generated in QuickBooks Online, it automatically fetches the data, applies your company branding, converts it into a professional multi-page PDF via Gotenberg, and emails it directly to your client.

Key Features:

⚡ Fully Automated: Triggers instantly on new QuickBooks invoices.

🧾 Custom Branding: Adds your logo and signature from public URLs.

🎨 Modern PDF Design: Clean, professional multi-page layout with smart totals and “Page X of Y” footers.

📧 Automatic Emailing: Sends the final PDF in a formatted email to your customer.

Requirements:
QuickBooks Online, n8n instance, Gotenberg (HTML→PDF converter), and public URLs for logo/signature.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, QuickBooks Online, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
