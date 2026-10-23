# 🎫 Send CSAT WhatsApp surveys after qualifying calls with NUACOM

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow listens to NUACOM call events, tags qualifying calls with a CSAT label, sends a WhatsApp CSAT survey using WhatsApp via NUACOM, and stores the call ID and phone number in an n8n Data Table for response tracking.

## How it works
1. Receives a call event from NUACOM.
2. Checks that the call duration is greater than 60 seconds and that the call is not already tagged as CSAT.
3. Waits 15 seconds, then adds the CSAT tag to the NUACOM call.
4. Sends a NUACOM WhatsApp template message to the caller’s phone number.
5. Inserts the caller number, NUACOM call ID, and a default “Customer_Responded = false” flag into an n8n Data Table.
6. Separately, triggers on NUACOM call tag updates and, when the CSAT tag is added (manually or during a call), optionally waits 2 hours and then sends the same WhatsApp CSAT message.

## Setup
1. Add a NUACOM API credential and ensure the NUACOM triggers can receive events for call updates and tag changes.
2. Update the CSAT tag ID, WhatsApp sender number, template ID, and template variables used for the NUACOM WhatsApp message.
3. Create or select an n8n Data Table and confirm it includes columns for Phone_Number, NUACOM_Call_ID, and Customer_Responded.

## 🔗 Nodes Used

Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
