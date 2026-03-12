# 🧾 Generate PDF invoices with line item support from Airtable using Google Sheets

> ⚡ **13 views** · 🧾 [Invoice Processing](../)

## Description

Stop manually copy-pasting client data into Word templates. This workflow automates the entire invoicing process, handling complex line items, VAT calculations, PDF generation, and CRM syncing in under 20 seconds.

It is designed to solve the **"Admin Trap"** by connecting your database (Airtable) to your document generator (Google Drive/Docs) via a Webhook trigger.

#### ⚡ What this workflow does
**Receives Data:** Listens for a Webhook (compatible with frontends like Lovable, Softr, or standard forms) containing the Client ID and a list of Services.

**Splits Line Items:** Uses a "Split In Batches" logic to iterate through multiple services/products, ensuring every line item is recorded individually.

**Database Sync:** Creates a parent "Invoice" record and links child "Service" records in Airtable.

**Generates PDF:** Populates a Google Doc/Sheet template with dynamic client data and service rows, then exports it as a PDF.

**Files & Links:** Uploads the PDF to a designated Google Drive folder and attaches the file URL back to the specific Invoice record in Airtable.

#### 🛠 Setup Requirements
##### 1. Airtable Base Structure

You need three linked tables to make this work:

**Clients:** Stores Address, VAT Number, and Email.

**Invoices:** The master record containing Date, Total Amount, and the Invoice PDF attachment field.

**Services:** Stores individual line items (Value, Units, VAT Amount) linked to the Invoices table.

##### 2. Google Drive Template

Create a Google Doc or Sheet.

Use *{{variable_name}}* placeholders for Client Name, Address, and Invoice ID.

Ensure you have a section for line items that matches the automation loop.

#### 💡 Use Case
Perfect for freelancers, agencies, and founders who want to trigger invoices from a dashboard or dropdown menu without manually calculating VAT or typing out addresses.

### 👋 Need help building this? Want to automate & scale your business?

I help founders automate their "boring work" so they can focus on sales.

- https://www.linkedin.com/in/sergiomedinah/
- https://sergio-medina.com/

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
