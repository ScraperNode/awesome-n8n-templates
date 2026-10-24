# 🧾 Re-check EU VAT numbers on Stripe invoices with VIES and notify finance via Gmail

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow triggers when Stripe drafts an invoice, re-checks the customer’s EU VAT number against the EU Commission’s VIES API, updates Stripe’s tax treatment or holds the draft when needed, writes the VIES result into invoice metadata, and emails finance via Gmail.

## How it works
1. Triggers on Stripe’s `invoice.created` event and de-duplicates events so each invoice is processed only once.
2. Loads your VAT policy settings (seller country/VAT number, retry rules, and notification email) and fetches the latest Stripe Customer details for the invoice.
3. Classifies the invoice as a cross-border EU VAT check, a reverse-charge state to stop/flag without VIES, or a non-applicable case based on the customer’s address, VAT ID, and current Stripe tax settings.
4. For cross-border EU cases, sends the VAT number to the EU VIES REST API, interprets the response (including optional name matching), and retries after a wait while holding the draft if VIES is temporarily unavailable.
5. Decides whether to confirm reverse charge, remove reverse charge, or hold the draft (for invalid VAT under Stripe Tax, name mismatches, or VIES errors) and prepares updates for Stripe.
6. Updates Stripe by adjusting the customer’s tax treatment when applicable, writing the VIES proof and decision into the invoice metadata (and toggling auto-finalization when the invoice is held/unheld), then emails finance via Gmail when the decision isn’t a “quiet” confirmation.

## Setup
1. Connect a Stripe account credential with permission to read customers and update customers/invoices, and ensure Stripe is sending invoice events to this n8n workflow.
2. Connect a Gmail OAuth2 credential for sending notification emails.
3. In the VAT Rules step, set your seller country, seller VAT number (to receive a VIES consultation number), finance email address, and any optional rules like name-match threshold and retry/hold behavior.

## Requirements
- A Stripe account. Test mode is fine while you try it out.
- A Gmail account to send the short note to your finance team.
- Your own EU VAT number, so the EU check gives you an official reference number for your records.
- Internet access to the EU's free VAT checking service (VIES). n8n Cloud already has it.
- Nothing else: no AI and no paid add-ons.

## Customization
- All settings are in the VAT Rules step: your own country, and which countries count as EU customers.
- Company-name check: if names often differ a little (for example "Ltd" and "Limited"), lower the match level, or let a mismatch through with a note instead of stopping the invoice.
- Want a person to approve every change? Turn on the option that holds every invoice whose VAT treatment changes.
- Choose how long to keep retrying when the EU service is down before the invoice is held for a person.
- Send the finance note to Slack or Microsoft Teams instead by swapping the Gmail step.

## Additional info
Why this exists: Stripe checks a customer's EU VAT number only once, when it is first added. If that business later closes or loses its VAT number, Stripe keeps sending it invoices without VAT (the "reverse charge" rule), and you end up owing the VAT that was never charged. This workflow asks the EU's official service again every time Stripe prepares a new invoice, before the invoice goes out.

What it will not do: it never deletes anything and never sends an invoice on its own. It only changes a customer's VAT status when the answer is clear. Anything unclear, such as a company name that does not match or the EU service being down, pauses the draft invoice so a person can look at it. If you use reverse charge inside your own country (for example for building work), it only flags that for a person.

Good to know: Germany and Spain do not share company names through the EU service, and Greek names come back in Greek letters, so for those customers only the number is checked, and the proof written onto the invoice says so. The EU service can be slow at busy times, so some invoices may wait for a retry.

## 🔗 Nodes Used

HTTP Request, Stripe Trigger, Gmail, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
