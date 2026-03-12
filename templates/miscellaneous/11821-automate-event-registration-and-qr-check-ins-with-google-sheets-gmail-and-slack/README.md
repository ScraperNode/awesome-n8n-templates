# 🔧 Automate event registration and QR check-ins with Google Sheets, Gmail, and Slack

> ⚡ **165 views** · 🔧 [Miscellaneous](../)

## Description

Who is this for?
This template is ideal for event organizers, conference managers, and community teams who need an automated participant management system. Perfect for workshops, conferences, meetups, or any event requiring registration and check-in tracking.
What this workflow does
This workflow provides end-to-end event management with two main flows:
Registration Flow:
⦁	Receives participant registration via webhook
⦁	Generates unique ticket ID and stores in Google Sheets
⦁	Creates QR code using the QR Code node
⦁	Sends confirmation email with QR code attached
Check-in Flow:
⦁	Scans and decodes QR code at venue entrance
⦁	Validates ticket against participant database
⦁	Blocks duplicate check-ins with clear error messages
⦁	Sends Slack notification for VIP arrivals
⦁	Returns real-time attendance statistics
Setup
1.	Create a Google Sheet with columns: Ticket ID, Event ID, Name, Email, Ticket Type, Registered At, Checked In, Check-in Time
2.	Connect your Google Sheets and Gmail credentials
3.	Configure Slack for VIP notifications
4.	Set up the webhook URLs in your registration form
Requirements
⦁	Google Sheets (participant database)
⦁	Gmail account (confirmation emails)
⦁	Slack workspace (VIP notifications)
How to customize
⦁	Add capacity limits by checking row count before registration
⦁	Modify QR code size and format in the QR Code node
⦁	Add additional ticket types beyond VIP/standard
⦁	Integrate with payment systems for paid events

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
