# 📋 Schedule supplier follow-ups from Airtable POs to Google Calendar with AI, Slack & Gmail

> ⚡ **100 views** · 📋 [Project Management](../)

## Description

## 📊 Description
Ensure suppliers never miss a follow-up by automating overdue purchase order tracking and scheduling. 📦⏰ This workflow checks Airtable every weekday morning for open POs older than seven days without scheduled follow-ups, generates Google Calendar events, updates Airtable with the follow-up link, and sends notifications to your team via Slack and Gmail. It centralizes supplier management and eliminates manual reminders, helping operations teams stay on top of aging purchase orders and vendor commitments. 📅📣


## 🔁 What This Template Does
1️⃣ Runs on a weekday schedule (default: 10 AM) to scan Airtable for overdue open POs. 📆
 2️⃣ Filters POs with missing follow-up links and older than 7 days. 🔍
 3️⃣ Processes each overdue PO one by one. 🔄
 4️⃣ Creates a Google Calendar event for each supplier follow-up. 📅
 5️⃣ Saves the event link back into Airtable and updates follow-up status to “Pending.” 📝
 6️⃣ Sends initial and final Slack notifications with PO details and scheduling links. 💬
 7️⃣ Sends a Gmail confirmation email to the assigned supplier or internal team. ✉️
 8️⃣ Ensures all stakeholders have quick access to follow-up links and event details. 🔗

## ⭐ Key Benefits
✅ Automates supplier follow-up scheduling with zero manual effort
 ✅ Prevents overdue purchase orders from being forgotten
 ✅ Consolidates PO aging logic, event creation, and notifications
 ✅ Keeps suppliers and internal teams aligned with one workflow
 ✅ Ensures follow-ups are consistently logged and traceable in Airtable
 ✅ Improves accountability for purchasing and operations teams

## 🧩 Features
- Weekday schedule trigger (cron-based)
- Airtable “Purchase Orders” table integration
- Google Calendar event creation with tracking links
- Airtable record update with follow-up status
- Slack notifications (initial + final)
- Gmail email confirmations
- Batch processing for multiple overdue POs
- Automated vendor accountability loop

## 🔐 Requirements
- Airtable Personal Access Token
- Google Calendar OAuth2 credentials
- Slack API token
- Gmail OAuth2 credentials
- Airtable table containing: PO ID, Supplier Info, Status, PO Date, Follow-up Link

## 🎯 Target Audience
- Procurement & purchasing teams
- Operations managers handling vendor communication
- Supply chain coordinators tracking overdue POs
- Teams using Airtable for purchase order management
- Businesses that need consistent supplier follow-ups

## 🔗 Nodes Used

Airtable, Slack, Google Calendar, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
