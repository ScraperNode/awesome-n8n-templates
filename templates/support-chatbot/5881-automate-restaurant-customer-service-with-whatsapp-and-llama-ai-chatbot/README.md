# 💬 Automate restaurant customer service with WhatsApp and Llama AI chatbot

> ⚡ **27,109 views** · 💬 [Support Chatbots](../)

## Description

An intelligent WhatsApp-based chatbot designed for restaurants to automate customer interactions related to table bookings, menu inquiries, opening hours, services, and offers. Built using the n8n automation platform and powered by an AI language model, this solution streamlines communication, boosts efficiency, and improves customer satisfaction.

## Objectives

* Automate replies to common customer queries on WhatsApp
* Handle table booking requests with confirmation
* Provide menu item details, pricing, and dietary information
* Share restaurant timing, location, and service availability
* Promote offers and handle promotional queries
* Operate 24/7 without manual intervention
* Store bookings and conversations for reporting and analytics

## Workflow Summary

### Step 1: Message Reception

**Node:** WhatsApp Trigger (Webhook or API-based)
**Function:** Listens for incoming customer messages.

### Step 2: Intent Recognition

**Node:** AI Query Processor (e.g., OpenAI API)
**Function:** Detects customer intent (e.g., booking, menu, timing).

### Step 3: Conditional Routing

**Node:** Switch or IF Node
**Function:** Routes flow based on detected intent:

* General information (menu, timing, services)
* Table booking

### Step 4A: Respond to General Info Queries

**Node:** AI Response or Static Reply Node
**Function:** Returns relevant information (menu, timing, address, etc.).

### Step 4B: Process Booking Requests

**Nodes:**

* **Collect Booking Details** (via chatbot interactions)
* **Store Booking Info** (to DB or Google Sheets)
* **Send Booking Confirmation** (to customer)

### Step 5: Context Management

**Node:** Set/Update Customer Data
**Function:** Maintains conversation state and tracks follow-up messages.

## Database or Google Sheet Columns for Table Booking

| Column Name       | Description                                     |
| ----------------- | ----------------------------------------------- |
| reservation\_id   | Unique reservation identifier                   |
| guest\_name       | Full name of the guest                          |
| contact\_number   | Customer’s WhatsApp or mobile number            |
| email             | (Optional) Email address                        |
| booking\_date     | Reservation date (YYYY-MM-DD format)            |
| booking\_time     | Reservation time (HH\:MM format)                |
| party\_size       | Number of guests                                |
| table\_id         | (Optional) Table number or identifier           |
| special\_requests | Allergies, seating preferences, etc.            |
| status            | Booking status: Confirmed / Cancelled / Pending |
| created\_at       | Timestamp when booking was made                 |
| updated\_at       | Timestamp when booking was last modified        |

## Prerequisites

* Verified WhatsApp Business Account with API access
* n8n instance (Cloud or self-hosted)
* Access to an AI service (e.g., OpenAI, Claude)
* Google Sheets, Airtable, MySQL, or other DB integration

## Setup Instructions

1. **Connect WhatsApp API** using webhook or third-party WhatsApp provider (e.g., 360Dialog, Twilio).
2. **Integrate AI** using HTTP Request or OpenAI node for response generation.
3. **Create Data Store** (Google Sheet, Airtable, or MySQL) with defined booking columns.
4. **Design Workflow in n8n** with intent detection, conditional logic, and response nodes.
5. **Test End-to-End** by sending different WhatsApp queries and checking logs and stored data.

## Example Conversation

**Customer:** “Can I book a table for 2 people tomorrow at 8 PM?”
**Bot:** “Sure. Please provide your name and contact number to confirm the reservation for 2 people at 8:00 PM tomorrow.”
**\[Booking details are saved, and a confirmation is sent.]**

## Benefits

* Fully automated customer interaction
* Supports real-time table reservations
* Accurate and quick responses
* Scales without increasing staff effort
* Operates 24/7
* Centralized booking data for analytics

## Analytics and Reporting

Track key performance metrics such as:

* Number of bookings per day/week
* Average response time
* Customer satisfaction scores (via feedback node)
* Popular menu items or query types
* Booking conversion rates

## Security and Compliance

* End-to-end encrypted WhatsApp messages
* Role-based access to sensitive data
* Compliance with data protection regulations (e.g., GDPR)
* Secure API integrations and storage solutions

## Conclusion

This WhatsApp chatbot serves as a reliable, AI-powered digital front desk for restaurants. Built using n8n and scalable components, it automates customer support, manages bookings, and enhances operational efficiency while offering a seamless customer experience.

## 🔗 Nodes Used

Postgres, WhatsApp Business Cloud, AI Agent, Ollama Chat Model, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
