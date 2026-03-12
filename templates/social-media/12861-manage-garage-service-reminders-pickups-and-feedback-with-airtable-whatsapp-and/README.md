# 📱 Manage garage service reminders, pickups and feedback with Airtable, WhatsApp and Gmail

> ⚡ **65 views** · 📱 [Social Media & Email Marketing](../)

## Description

## ✅ What problem does this workflow solve?

Garage and auto service businesses handle much more than just vehicle repairs — they manage service schedules, customer reminders, pickups, feedback, and repeat visits. When handled manually, this often leads to **missed reminders, delayed pickups, unhappy customers, and lost repeat business**.

This workflow delivers a **fully automated, end-to-end customer communication system** for garages using **n8n + Airtable + WhatsApp + Email**, ensuring timely, professional, and consistent engagement at every stage of the service lifecycle.

## ⚙️ What does this workflow do?

This automation suite consists of **four interconnected workflows**, each handling a critical touchpoint:

### WF-01: Scheduled Service Reminders
- Runs **daily at 9 AM**
- Identifies upcoming, due-today, or overdue services
- Sends branded reminders via **WhatsApp + Email**
- Automatically marks reminders as sent to avoid duplicates

### WF-02: Pickup Notification
- Triggers when service status changes to **“Done”**
- Instantly notifies customers that their vehicle is ready
- Sends confirmation via **WhatsApp + Email**
- Updates Airtable to track pickup notifications

### WF-03: Feedback Collection
- Triggers when service status becomes **“Delivered”**
- Sends a polite feedback request with a form link
- Uses WhatsApp + Email for higher response rates
- Ensures feedback requests are sent only once

### WF-04: Next Service Reminder
- Runs **daily at 9 AM**
- Tracks upcoming next-service dates
- Sends reminders for:
  - Overdue services
  - Services due today
  - Upcoming services (next 7 days)
- Encourages repeat visits and long-term retention


## 🧠 How it Works – High-Level Flow

### 1. Central Data Source (Airtable)
Airtable acts as the single source of truth for:
- Customer details
- Vehicle information
- Service status
- Service dates & next service dates
- Notification tracking flags

### 2. Smart Triggers & Scheduling
- **Schedule Triggers** run daily reminders automatically
- **Airtable Triggers** react instantly to status changes (`Pending → Done → Delivered`)

### 3. Personalized Message Generation
- Dynamic WhatsApp and Email messages are generated using customer, vehicle, and service data
- Messages are branded and context-aware (overdue, today, upcoming, completed, feedback)

### 4. Multi-Channel Notifications
- **WhatsApp** messages are sent via Twilio
- **Email** notifications are sent via Gmail
- Customers are reached on their preferred channels

### 5. Automatic Tracking & Deduplication
- Each step updates Airtable flags:
  - Reminder sent
  - Pickup notification sent
  - Feedback sent
  - Next service reminder sent
- Prevents duplicate messages and ensures clean automation


## 🔧 Integrations Used

- **Airtable** – Customer, vehicle, and service management
- **Twilio WhatsApp API** – Instant customer notifications
- **Gmail** – Professional email communication
- **n8n Schedule & Trigger Nodes** – Time-based and event-based automation


## 👤 Who is this for?

Perfect for:
- 🚘 Auto garages & service centers  
- 🛠 Multi-location workshop chains  
- 🚗 Car detailing & maintenance businesses  
- ⚙️ Agencies building automation solutions for automotive clients  

## 🎯 Business Outcomes

- ✅ No missed service or follow-up reminders  
- ✅ Faster pickups and smoother operations  
- ✅ Automated feedback collection  
- ✅ Higher repeat visits and customer retention  
- ✅ Zero manual follow-ups for staff  


## 🚀 Result

This workflow transforms a garage into a **fully automated, customer-centric service operation**, ensuring every customer is informed, engaged, and encouraged to return — without adding operational overhead.

## 🔗 Nodes Used

Airtable, Twilio, Gmail, Airtable Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
