# 💬 Automate dental appointments with Google Calendar, AI assistant & email notifications

> ⚡ **2,606 views** · 💬 [Support Chatbots](../)

## Description

🦷 Dental Clinic Appointment Booking System (n8n)

This project is an automated appointment booking system for a dental clinic, built using #n8n.
It helps streamline clinic operations by checking availability, creating events in Google Calendar, and sending email notifications to both the doctor and the patient.

✨ Features

✅ Check available slots before booking

✅ Create event in Google Calendar after patient confirmation

✅ Send email notification to the Doctor with appointment details

✅ Send email confirmation to the Patient with their booking details

✅ Unique Appointment ID generation for every booking

🚀 Live Demo
https://devsabirul.github.io/Dental-Clinic-Receptionist-N8n/

🛠 Tech Used

n8n.io (Automation Platform)

Google Calendar API (Manage bookings)

SMTP / Gmail (Send email notifications)

📂 Workflow Setup

Import Workflow JSON

In n8n, go to Workflows → Import from File.

Set Credentials

Configure Google Calendar API Credentials in n8n.

Configure Email SMTP / Gmail Credentials for sending emails.

Update Clinic Info

Replace placeholder Doctor’s email with the real email.

Customize messages (email subject, body).

📧 Example Email Sent

To Doctor:

New Appointment Booked
Patient: John Doe
Phone: +123456789
Email: john@example.com
Date: 31st August 2025
Time: 2:15 PM
Appointment ID: APT-20250831-ABCD12


To Patient:

Hello John Doe,  

Your appointment has been successfully booked.  

📅 Date: 31st August 2025  
🕒 Time: 2:15 PM  
📍 Appointment ID: APT-20250831-ABCD12  

Thank you,  
Dental Clinic

📌 Tags

#n8n #automation #dentalclinic #calendar #appointment

🙌 Author

👨‍💻 Developed by MD Sabirul Islam

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
