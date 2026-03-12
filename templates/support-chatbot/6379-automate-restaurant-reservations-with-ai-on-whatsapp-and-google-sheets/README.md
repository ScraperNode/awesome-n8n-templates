# 💬 Automate restaurant reservations with AI on WhatsApp and Google Sheets

> ⚡ **5,947 views** · 💬 [Support Chatbots](../)

## Description

Streamline restaurant reservations on WhatsApp

## Overview

This n8n template automates table bookings via WhatsApp, letting users request, confirm, and manage reservations without manual intervention. It leverages AI to parse messages, apply group discounts, check availability, and send natural confirmations—all within a single, reusable workflow.

## Key Features

* **AI‑powered parsing & responses**: Extracts guest name, date, time, and party size from free‑form WhatsApp messages and generates friendly confirmations..
* **Availability lookup**: Integrates with Google Sheets, Airtable, or MySQL to verify slot availability in real time.
* **Automated reminders**: Optionally schedules follow‑up messages 24 hours before the booking.
* **Modular design**: Swap triggers, storage, or messaging nodes to fit your infrastructure.

## How It Works

1. **Trigger**: Incoming WhatsApp message via WhatsApp Business Cloud API.
2. **Parse & Validate**: AI Function node extracts intent and guest details.
4. **Calculate Discount**: Custom Function node computes group discount.
5. **Compose Confirmation**: Open Ai text model generates a personalized response.
6. **Send Message**:Request node posts back to WhatsApp.
7. **Optional Reminder**: Wait node + HTTP Request for pre‑booking follow‑up.

## Requirements

* WhatsApp Business Cloud API access
* n8n Cloud or self‑hosted instance
* Reservation datastore (Google Sheets, Airtable, MySQL)
* Open ai  key for AI text generation

## Customization Tips

* **Menu Attachments**: Add media nodes to send PDFs or images.
* **Alternate Slot Suggestions**: Use AI to propose new times if a slot is full.
* **Upsell Offers**: Follow up with add‑on suggestions (e.g., wine pairings).
* **Localization**: Extend prompts for multilingual support.
![Screenshot 20250724 161418.png](fileId:1853)

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
