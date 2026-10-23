# 🧾 Send Mercado Pago billing links and reminders with Google Sheets and Gmail

> ⚡ **29 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Google Sheets billing queue, creates Mercado Pago payment links for new invoices, emails customers via Gmail, and logs sent links back to Google Sheets, while also handling Mercado Pago webhook notifications to remove paid invoices and sending daily reminder emails for unpaid ones.

## How it works
1. Checks the “A Enviar” tab in Google Sheets every minute for invoice rows marked as ready to send.
2. For each matching invoice, creates a Mercado Pago payment preference/link with an expiration date and a notification URL.
3. Emails the Mercado Pago payment link to the customer using Gmail.
4. Appends the invoice details and generated payment link to the “Enviados” tab in Google Sheets, then deletes the processed row from “A Enviar”.
5. Receives Mercado Pago payment notifications via a webhook, fetches the merchant order details from the Mercado Pago API, and verifies that all recorded payments are approved.
6. When payment is approved, finds the matching invoice in the “Enviados” tab and deletes it to clear paid invoices.
7. Runs daily at the configured time, loads all still-pending invoices from the “Enviados” tab, and resends the stored payment link to each customer via Gmail.

## Setup
1. Add credentials for Google Sheets, Gmail, and Mercado Pago (API access for both the Mercado Pago node and the HTTP Request call).
2. Create or update a Google Sheets file with two tabs named “A Enviar” and “Enviados” and the columns Nome, Email, Preço, and Enviado.
3. Replace `YOUR_N8N_PRODUCTION_WEBHOOK_URL_HERE` in the Mercado Pago payment-link creation step with the production URL of the workflow webhook and register the same URL in your Mercado Pago notification/webhook settings.
4. Update the Google Sheets document ID/sheet IDs and the daily reminder schedule time to match your environment.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
