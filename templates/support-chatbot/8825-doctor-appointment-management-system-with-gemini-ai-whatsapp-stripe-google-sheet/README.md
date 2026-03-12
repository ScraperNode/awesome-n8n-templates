# 💬 Doctor appointment management system with Gemini AI, WhatsApp, Stripe & Google Sheets

> ⚡ **6,432 views** · 💬 [Support Chatbots](../)

## Description

WhatsApp AI Assistant for Clinic Appointment Booking
Automate your entire appointment lifecycle with an intelligent AI assistant that lives on WhatsApp. This workflow empowers any clinic or independent practitioner to manage bookings, take payments, and send reminders without manual intervention, using Google Sheets as a simple database.

This template handles everything from the initial booking conversation to sending the final reminder, allowing you to focus on your patients, not your schedule.

## Features
🤖 Conversational AI Booking: A Google Gemini-powered agent guides patients through booking, rescheduling, and canceling appointments in a natural, friendly chat.

🗓️ Smart Scheduling: The AI checks for available slots based on your working hours and existing appointments in Google Sheets, preventing double-bookings.

🔔 Automated Reminders: A daily trigger automatically sends WhatsApp reminders to patients for their appointments on that day, reducing no-shows.

💳 Seamless Payments: Integrated with Stripe to handle online payments. The workflow sends a confirmation message upon successful payment.

📊 Centralized Management: Uses a single Google Sheet with separate tabs for Patients, Appointments, and Configuration, making it easy to view and manage all your data.

🔄 Easy Rescheduling & Cancellations: Patients can manage their own bookings through the WhatsApp chat, and all changes are instantly reflected in your Google Sheet.

## Prerequisites
Before you begin, you will need the following accounts and credentials:

n8n Account: A running n8n instance (cloud or self-hosted).

WhatsApp Business Account: Access to the WhatsApp Cloud API.

Google Account: For using Google Sheets and the Google Gemini (AI) API.

Stripe Account: To process online payments.

n8n Credentials: You must configure credentials in your n8n instance for:

WhatsApp Cloud API

Google Sheets (OAuth2)

Google Gemini API

Stripe

## Setup Instructions
Follow these steps carefully to get your automated assistant up and running.

Step 1: Set Up Your Google Sheet
This workflow relies on a specific Google Sheet structure.

Create a new Google Sheet.

Rename the sheet to something memorable, like "Clinic Appointments".

Create three tabs at the bottom with the exact names: Patients, Appointments, and Config.

Set up the columns for each tab as follows (the header names must be an exact match):

Patients tab:
patient_id, whatsapp_number, name, age, gender

Appointments tab:
appointment_id, patient_id, whatsapp_number, date, time, payment_method, payment_status, status, stripe_payment_intent

Config tab:
key, value
(Add a row with working_hours as the key and a value like 10:00-18:00)

Step 2: Configure the Workflow Nodes
Now, you'll link the workflow to your accounts and your new Google Sheet.

Update All Google Sheets Nodes: Go through every Google Sheets node in the workflow (e.g., "Get Appointment sheet", "Add Patient", "Google Sheets Trigger") and do the following:

Select your Google Sheets credential from the dropdown.

In the Document ID field, paste the ID of your Google Sheet.

Select the correct sheet (Appointments, Patients, etc.) from the Sheet Name dropdown.

Update All WhatsApp Nodes: Go through every WhatsApp node (e.g., "Send message", "WhatsApp Trigger", "Send Payment Confirmation"):

Select your WhatsApp credential.

Enter your Phone Number ID from your Meta for Developers account.

Update AI & Stripe Nodes:

In the Google Gemini Chat Model nodes, select your Google Gemini credential.

In the Stripe Trigger node, select your Stripe credential.

Step 3: Activate the Workflow
Click Save to apply your changes.

Click the Activate toggle in the top-right corner to turn the workflow on.

Your AI appointment assistant is now live! Send a message to your WhatsApp number to begin testing.

## Customization
Change Reminder Time: To change the daily reminder time, open the Schedule Trigger node and adjust the hour from the default of 8 AM.

Edit AI Personality: To modify how the AI communicates, edit the system message in the AI Agent node (the one connected to the WhatsApp Trigger). You can change its tone, instructions, or language.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stripe Trigger, WhatsApp Business Cloud, Schedule Trigger, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
