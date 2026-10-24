# 🔧 Manage rental guest messaging and cleaning ops with Deepseek and Google Sheets

> ⚡ **3 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow captures short-term rental bookings via webhook, stores them in Google Sheets, drafts guest emails with a Deepseek AI agent using a Google Sheets playbook, sends messages through Gmail, creates checkout-day cleaning tasks, and notifies the host via Telegram with a weekly AI-written digest.

## How it works
1. Receives a booking via a webhook request and validates required fields and date order.
2. If the booking is invalid, sends an alert to Telegram and emails the host via Gmail with the skipped payload.
3. If the booking is valid, normalizes the booking data, generates a booking ID, appends it to the Google Sheets “Bookings” tab, and notifies the host in Telegram.
4. Runs a daily sweep on a cron schedule (or via a manual webhook) to read bookings from Google Sheets and identify stays that need a check-in (tomorrow), check-out (today), or review request (two days after checkout) message.
5. Uses a Deepseek-powered AI agent that looks up property details from the Google Sheets “Playbook” tab to generate one plain-text message per due booking.
6. Logs each generated message to the Google Sheets “GuestLog” tab, emails it to the guest via Gmail, and posts a confirmation to Telegram.
7. For check-out day bookings, creates a cleaning task in the Google Sheets “CleaningTasks” tab and either emails the assigned cleaner via Gmail and alerts the host in Telegram, or alerts the host that no cleaner email is set.
8. Every Monday, reads bookings and cleaning tasks from Google Sheets, computes weekly stats, uses Deepseek to write a concise host digest, and sends it to the host via Gmail and Telegram (or posts an all-clear message if there is no activity).

## Setup
1. Create a Google Sheets file with tabs named Bookings, Playbook, GuestLog, and CleaningTasks, and ensure the columns match those appended/read by the workflow.
2. Add Google Sheets credentials and update the spreadsheet document ID and sheet names if you use a different file or tab names.
3. Add Gmail credentials and update the host email address, plus ensure guest emails are provided in incoming bookings.
4. Add Telegram credentials and set the host chat ID used for alerts and confirmations.
5. Add an OpenAI-compatible (LangChain) credential for the Deepseek chat model (deepseek-v4-flash) used by both the guest-message agent and the weekly digest writer.
6. Copy the booking intake webhook URL (/str/bookings) and (optionally) the manual sweep webhook URL (/str/sweep) into your booking source or form so it can send POST requests with guest_name, guest_email, property, checkin_date, and checkout_date.

## Requirements
- • A booking source (Airbnb, Booking.com, VRBO or a form) that can POST to a webhook
• Google Sheets with tabs for Bookings, GuestLog, CleaningTasks and Playbook
• Google account with Gmail and Sheets access
• OpenAI API key for the AI agent
• Telegram bot token and chat ID for host alerts

## Customization
- • Change the daily sweep time or add more message types in Compute Due Actions
• Update the Playbook tab so the AI uses your property details
• Swap Telegram for Slack or Discord for host alerts
• Add a mid-stay check-in message to the due-action logic

## Additional info
Created by: Khaisa Studio
Category: Operations
Need custom workflows? Contact us.
Connect with the creator: Portfolio - Workflows - LinkedIn - Medium - Threads

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
