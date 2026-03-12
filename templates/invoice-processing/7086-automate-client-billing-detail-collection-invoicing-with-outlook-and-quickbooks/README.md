# 🧾 Automate client billing detail collection & invoicing with Outlook and QuickBooks

> ⚡ **589 views** · 🧾 [Invoice Processing](../)

## Description

## Ask Client for Billing Details and Automatically Generate an Invoice in QuickBooks

## What It Does
This workflow allows you to quickly generate and send invoices by collecting missing billing details from clients through an automated form and email sequence. It integrates Microsoft Outlook and QuickBooks Online to handle the full billing flow: from request to invoice, reducing manual data entry and time wasted switching between apps.

Perfect for freelancers, service providers, or teams that want to streamline invoicing without going back and forth with clients.

## Prerequisites
- Microsoft Outlook credential  
- QuickBooks Online OAuth2 credential

## How It Works
1. **Trigger:** Manually start the workflow by filling out a form with the client’s email, invoice amount, description, and product.
2. **Send Request Email:** A pre-written email is sent to the client asking them to provide their billing details.
3. **Collect Info:** The client submits their billing name and address via a hosted form.
4. **Add/Find Client in QuickBooks:** If the client doesn't exist, a new record is created; otherwise, the existing client is used.
5. **Generate Invoice:** A QuickBooks invoice is created using the submitted info and selected product.
6. **Send Invoice:** The invoice is automatically emailed to the client using QuickBooks' native interface.

## Example Use Cases
- Freelancers requesting billing info before sending an invoice  
- Small businesses invoicing new clients without manual QuickBooks entry  
- Sales or ops teams who want to request billing info via email with just a few clicks  
- Automating follow-up for new customer onboarding or service requests

## Setup Instructions
- Connect your Outlook and QuickBooks credentials  
- Add your products to the dropdown list in the `Enter Client Details` node  
  ⚠️ Make sure the product names **exactly match** the items in QuickBooks  
- Select the tax code in the `Create A New Invoice` node
- Customize the email message in the `Send Invoice Request` Outlook node to reflect your brand voice

## How to Use
- Copy the public URL from the `Enter Client Details` node (this way you don't have to trigger the workflow manually inside n8n) 
- Each time you need to invoice a client, open the form and fill in:
  - Client’s email  
  - Product/service name  
  - Invoice amount and description  
- The client receives an email prompting them to fill in their billing info  
- Once submitted, the system creates and sends a QuickBooks invoice automatically

## Customization Options
- Add support for multiple line items  
- Automatically send reminder emails if the form isn't completed within a day  
- Add internal logging (Google Sheets, Airtable, etc.) for sent/paid invoices

## Why It's Useful
This workflow removes friction from your billing process. Instead of chasing clients for info and copying data into QuickBooks, you send one email and automation does the rest. It saves time, reduces errors, and makes invoicing feel seamless — while still keeping you in control.

## 🔗 Nodes Used

Microsoft Outlook, QuickBooks Online, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
