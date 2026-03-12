# 💬 WhatsApp appointment scheduling with Google Calendar

> ⚡ **1,248 views** · 💬 [Support Chatbots](../)

## Description

## Who is this for?
This workflow is for service-based businesses and freelancers who want to automate booking appointments via WhatsApp without relying on third-party scheduling tools. It's perfect for small teams who want full control over the reservation system and calendar integration.

## What problem is this workflow solving?
Manually coordinating bookings through messages can be inefficient and error-prone. This workflow streamlines the entire scheduling process-from user input to calendar event creation-saving time and avoiding double-bookings. It ensures users only choose from available time slots and automatically records the meeting in your Google Calendar.

## What this workflow does
- Sends a WhatsApp message with a reservation link.
- Collects the user's name and preferred date.
- Checks availability and shows only free time slots.
- Allows the user to choose a time slot.
- Automatically creates a Google Calendar event with the selected details.
- Saves all data to a Postgres database for future reference.

## Setup
1. Create Tables in Postgres DB
   - Open the provided SQL script and replace "n8n" with your Postgres schema name.
   - Execute the script to create the required tables.
2. Add Credentials
   - WhatsApp: Set up your WhatsApp Business API credentials using OAuth and API keys.
   - Postgres: Connect your database where the booking data will be stored.
   - Google Calendar: Authorize access to your calendar for event creation.

## 🔗 Nodes Used

Postgres, Google Calendar, WhatsApp Business Cloud, Summarize, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
