# 💬 Book and manage appointments with Google Calendar and Gmail

> ⚡ **661 views** · 💬 [Support Chatbots](../)

## Description

## Overview
This workflow automates the complete appointment booking process, from request validation to scheduling, notifications, and reminders.

It checks calendar availability in real time, prevents double bookings, suggests alternative slots when unavailable, and automatically sends confirmations and reminders—ensuring a smooth and reliable booking experience.

Perfect for service-based businesses, consultants, and teams managing appointments at scale.

---

## How It Works

1. **Webhook Trigger**
   - Receives booking requests (name, email, date, time, notes).

2. **Workflow Configuration**
   - Defines:
     - Google Calendar ID
     - Appointment duration
     - Business hours
     - Sender email

3. **Data Validation**
   - Parses and validates input fields
   - Ensures required data is present and correctly formatted

4. **Calendar Availability Check**
   - Fetches existing events from Google Calendar
   - Compares requested time with existing bookings

5. **Conflict Detection**
   - Detects overlapping events
   - Determines whether the slot is available

6. **Decision Logic**
   - If available → proceed with booking  
   - If not available → trigger alternative flow  

---

###  Booking Flow (Available Slot)

7. **Create Calendar Event**
   - Schedules appointment in Google Calendar
   - Adds attendee and event details

8. **Confirmation Email**
   - Sends booking confirmation with event details
   - Includes calendar event link

9. **Webhook Response**
   - Returns success response to client/system

10. **Reminder System**
   - Schedules automated reminders:
     - 24-hour reminder before appointment
     - 1-hour reminder before appointment
   - Uses wait nodes to trigger emails at exact times
   - Includes appointment details to reduce no-shows

---

###  Alternative Flow (Unavailable Slot)

11. **Generate Alternative Slots**
   - Finds next available time slots within business hours
   - Ensures slots are within a defined time window

12. **Alternative Email Notification**
   - Sends suggested time slots to the user

13. **Webhook Response**
   - Returns unavailable status with alternatives

---

## Setup Instructions

1. **Webhook Setup**
   - Configure endpoint (`booking`)
   - Connect to your frontend or booking form

2. **Google Calendar**
   - Add Google Calendar credentials
   - Set calendar ID

3. **Gmail Integration**
   - Add Gmail credentials for:
     - Confirmation emails
     - Reminder emails
     - Alternative slot notifications

4. **Configure Parameters**
   - Set:
     - Appointment duration (e.g., 60 minutes)
     - Business hours (e.g., 9–17)
     - Sender email

5. **Customize Messages**
   - Edit email templates for:
     - Confirmation
     - Alternatives
     - Reminders

---

## Use Cases

- Appointment booking systems for businesses  
- Coaching and consulting session scheduling  
- Service-based business automation (salons, clinics, etc.)  
- Internal team scheduling tools  
- Calendly-style booking workflows  

---

## Requirements

- Google Calendar account  
- Gmail account  
- n8n instance (cloud or self-hosted)  

---

## Key Features

- Real-time availability checking  
- Automatic conflict detection  
- Calendar event creation  
- Alternative slot suggestions  
- Email notifications and confirmations  
- Automated reminder system (24h + 1h)  
- Fully customizable booking logic  

---

## Summary

A complete appointment scheduling system that automates booking validation, calendar management, notifications, and reminders. It reduces manual coordination, prevents scheduling conflicts, and improves attendance with automated follow-ups.

## 🔗 Nodes Used

Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
