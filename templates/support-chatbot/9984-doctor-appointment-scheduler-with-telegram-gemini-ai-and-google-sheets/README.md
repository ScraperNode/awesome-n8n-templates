# 💬 Doctor appointment scheduler with Telegram, Gemini AI, and Google Sheets

> ⚡ **1,202 views** · 💬 [Support Chatbots](../)

## Description

## AI Doctor’s Appointment Scheduler – Process Flow

### User Interaction via Telegram:
The user sends a text or voice message through Telegram requesting a doctor’s appointment.

### Input Processing:
The AI agent receives and interprets the user’s message to identify the doctor’s name, preferred date, and time.

### Doctor Information Retrieval:
The agent accesses the doctor’s details stored in Google Sheets (or an Excel file).

### Schedule Verification:
It checks the doctor’s availability for the requested date and time using the doctor’s schedule ledger or database.

### Availability Response:
If the doctor is already booked, the agent informs the user and suggests alternative available slots.

If the doctor is available, the agent proceeds to confirm the appointment details with the user.

### Appointment Confirmation & Booking:
Once the user confirms, the agent records the appointment details in the Excel sheet (or Google Sheet).

### Confirmation Notification:
The agent sends a confirmation message to the user through Telegram, summarizing the appointment details (doctor name, date, and time).

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
