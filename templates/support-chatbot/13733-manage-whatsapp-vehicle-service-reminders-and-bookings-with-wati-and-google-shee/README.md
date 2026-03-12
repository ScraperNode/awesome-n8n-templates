# 💬 Manage WhatsApp vehicle service reminders and bookings with WATI and Google Sheets

> ⚡ **46 views** · 💬 [Support Chatbots](../)

## Description

Streamline your automotive service center's operations with this comprehensive automation. This workflow manages the entire customer lifecycle—from automated service reminders and instant appointment booking via WhatsApp to mileage tracking and full service history logs—all synchronized in real-time with Google Sheets and WATI.

---

## 🎯 What This Workflow Does

This template transforms WhatsApp into a self-service hub for vehicle owners and a management tool for garage staff:

### ⏰ Automated Reminders

**Service Due:**  
Every morning at 9 AM, the bot scans your database and identifies vehicles due for service based on either their next service date or mileage threshold, sending a personalized WhatsApp alert to the owner.

**Appointment Prep:**  
At 8 AM daily, the system reminds owners of their confirmed appointments for the following day, reducing no-shows.

---

### 📅 Instant Booking & Confirmation

When an owner replies with `book`, the bot dynamically generates available slots for the next 3 weekdays. Owners pick a slot (e.g., `confirm 1`), and the appointment is instantly logged in your **Appointments** sheet with a confirmation message sent back.

---

### 📏 Mileage & Status Management

Owners can update their odometer reading anytime by sending `mileage &lt;km&gt;`. The bot automatically recalculates their next service point and warns them if they are approaching a critical maintenance interval.

---

### 📋 History & Staff Tools

**Customer View:**  
Owners can request their vehicle's full status card or a detailed history of their last 5 service records.

**Staff Logging:**  
Garage technicians can log completed work using a simple command (e.g., `logservice MH12... 52000 Oil Change 2500`), which automatically updates the service history and resets the reminder cycle.

---

## ✨ Key Features

- **Intelligent Odometer Tracking:** Predicts service needs by comparing current mileage against individual service intervals.
- **Dynamic Slot Generation:** Automatically avoids weekends and generates morning/afternoon options to simplify the booking experience.
- **Command-Based Routing:** Uses an intuitive keyword system (`book`, `status`, `history`, `mileage`) to handle multiple customer requests simultaneously.
- **Duplicate Prevention:** Tracks "reminders sent" to ensure customers aren't pestered with multiple alerts for the same service period.

---

## 💼 Perfect For

- **Independent Garages:** Providing a "dealership-level" digital experience without expensive software.
- **Fleet Managers:** Tracking maintenance schedules for corporate vehicles.
- **Car Dealerships:** Automating follow-ups for post-purchase service packages.
- **Motorcycle Repair Shops:** Managing quick oil changes and seasonal check-ups.

---

## 🔧 What You'll Need

### Required Integrations

- **WATI:** For WhatsApp messaging and handling incoming customer commands.
- **Google Sheets:** To act as your 3-part database (`Vehicles`, `Appointments`, and `ServiceHistory`).

---

## ⚙️ Configuration Steps

1. **Google Sheet Setup:** Create a sheet with three tabs:
   - `Vehicles`
   - `Appointments`
   - `ServiceHistory`

2. **Document ID:** Replace `YOUR_GOOGLE_SHEET_ID` in every Google Sheets node with your specific sheet's ID.

3. **Credentials:** Connect your Google Sheets OAuth2 and WATI account credentials in n8n.

---

Ready to automate your service bay? Import this template, connect your Google Sheet, and start sending intelligent reminders to your customers today!

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
