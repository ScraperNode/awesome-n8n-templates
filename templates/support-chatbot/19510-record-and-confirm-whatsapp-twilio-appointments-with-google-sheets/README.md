# 💬 Record and confirm WhatsApp (Twilio) appointments with Google Sheets

> ⚡ **6 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow uses Google Sheets and Twilio WhatsApp to send daily appointment reminders for tomorrow’s bookings and to process incoming WhatsApp replies to confirm or cancel appointments, updating the appointment status in Google Sheets and notifying the business on cancellations.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Reads the “Citas” sheet in Google Sheets and keeps only appointments scheduled for tomorrow, not marked as “Cancelada”, and with an empty “RecordatorioEnviado” field.
3. Formats a WhatsApp reminder message and sends it to each customer via the Twilio Messages API.
4. If Twilio returns a success status, updates the matching row in Google Sheets to set “RecordatorioEnviado”; otherwise appends the error details to an “Errores” sheet.
5. Receives inbound WhatsApp replies via a webhook configured in Twilio and normalizes the sender phone number and message text.
6. If the reply matches a confirmation or cancellation keyword, updates the appointment “Estado” in Google Sheets and replies to the customer via Twilio, and for cancellations also sends a WhatsApp alert to the business number.
7. If the reply is not recognized, asks the customer to respond with SI or NO and returns “OK” to the webhook request.

## Setup
1. Add a Google Sheets OAuth credential and set the Spreadsheet ID in all Google Sheets steps, ensuring a “Citas” sheet exists with columns Nombre, Telefono, Fecha (YYYY-MM-DD), Hora, Estado, and RecordatorioEnviado.
2. Create an “Errores” sheet in the same spreadsheet with columns Fecha, Telefono, and Detalle.
3. Add Twilio credentials using HTTP Basic Auth (Account SID as username and Auth Token as password) and set TWILIO_ACCOUNT_SID (or replace the placeholder in the Twilio API URL).
4. Configure the Twilio WhatsApp Sandbox or WhatsApp Business number, update the Twilio “From” number if needed, and paste the workflow’s production webhook URL into Twilio’s inbound message webhook.
5. Replace the business notification recipient (“PON_EL_NUMERO_DEL_NEGOCIO”) with the real WhatsApp number to alert on cancellations.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
