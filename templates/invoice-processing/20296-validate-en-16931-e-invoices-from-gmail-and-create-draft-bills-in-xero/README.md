# 🧾 Validate EN 16931 e-invoices from Gmail and create draft bills in Xero

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
German businesses must accept e-invoices (XRechnung or ZUGFeRD), but Xero cannot read them. This reads them straight from your Gmail, checks they are correct, and turns the good ones into Xero draft bills for you to approve.

## How it works
1. It watches your Gmail inbox for new emails with an XML or PDF attachment.
2. It reads the invoice data, either from the XML file or from the data hidden inside a ZUGFeRD PDF.
3. It checks the invoice against the main EU e-invoice rules: invoice number, dates, supplier details, VAT on every line, and that all the amounts add up.
4. If something is wrong, it replies to the supplier and says exactly what to fix.
5. Anything unusual goes to a person: plain PDFs, credit notes, other currencies, or a VAT rate your Xero does not have.
6. Good invoices are booked one at a time. The supplier is found in Xero by VAT number or added, and the same bill is never booked twice.
7. It creates a draft bill with the right VAT rate on each line and attaches the invoice data to it.
8. It compares Xero's totals with the invoice. If they differ, your bookkeeper gets an email. The email is then marked as read so it is handled only once.

## Setup
1. Connect your Gmail account, and connect Xero through a Xero developer app, using the redirect address shown in the n8n Xero credential.
2. In Xero, make sure purchase tax rates exist for the VAT rates you receive, for example 19% and 7% in Germany.
3. Open 'E-Invoice Policy' and enter your bookkeeper's email and the Xero expense account code to book to. If you use several Xero organisations, enter the right one's name.

## Requirements
- A Gmail account and a Xero organisation. No other services or paid tools.

## Customization
- In 'E-Invoice Policy' you can turn supplier replies off, change the date until which plain PDFs are still accepted, the rounding tolerance, or your base currency.

## Additional info
Bills are only created as drafts; nothing is approved or paid. Xero cannot store XML files, so the invoice is attached as an unchanged text copy, and the original stays in Gmail.

## 🔗 Nodes Used

HTTP Request, Xero, Gmail, Stop and Error, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
