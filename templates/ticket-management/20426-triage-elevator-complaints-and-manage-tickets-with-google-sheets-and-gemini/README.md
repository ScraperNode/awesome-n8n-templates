# 🎫 Triage elevator complaints and manage tickets with Google Sheets and Gemini

> ⚡ **6 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/CPAekWNslrc

This workflow receives elevator complaints and technician service reports via webhooks, looks up and updates records in Google Sheets, uses Gemini to triage issues and extract structured diagnostics, then notifies technicians via WhatsApp and clients via Gmail while keeping tickets, service logs, and parts inventory in sync.

## How it works
1. Receives an elevator complaint via a POST webhook and looks up the elevator record and recent service history in Google Sheets.
2. Uses Google Gemini to classify the complaint severity (P1–P3), required technician skill level, and a technician-ready summary.
3. Selects an available technician from a Google Sheets technician roster based on skill level, territory, and current workload, then generates a ticket ID, SLA deadline, and dispatch message.
4. Appends a new ticket to the Google Sheets Tickets sheet, updates the elevator’s current status in the registry, and either marks the technician “On Job” and sends the dispatch via WhatsApp plus a confirmation email via Gmail, or emails an unassigned-ticket alert when no technician is available.
5. Receives a technician report via a second POST webhook, retrieves the ticket, elevator details, and parts catalog from Google Sheets, and sends the technician notes to Google Gemini to extract root cause, work performed, parts used, safety flags, and closure status.
6. Appends a service log in Google Sheets, updates the elevator registry (status and maintenance dates), updates/close the ticket, frees the technician back to “Available,” and emails the client a service update.
7. Decrements inventory quantities for any catalog-matched parts used and sends a Gmail reorder alert when stock falls at or below the defined reorder threshold.

## Setup
1. Create a Google Sheets service account credential in n8n and ensure the target spreadsheet contains the required tabs/columns (Elevators, Technicians, Tickets, Service_Logs, Inventory_Parts) and is shared with the service account email.
2. Add a Google Gemini (Google PaLM) API credential for the two AI steps (triage and technician-note extraction).
3. Add a WhatsApp Business Cloud credential and set the correct Phone Number ID and technician recipient number(s) for dispatch messages.
4. Add a Gmail OAuth2 credential and update the sender account and recipient fields used for client confirmations, service updates, and low-stock/reorder alerts.
5. Copy the two webhook URLs (complaint intake and technician report) and configure your intake form/app and technician reporting method to POST the expected fields (elevator_id/complaint_text and ticket_id/notes/technician_id).

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, WhatsApp Business Cloud, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
