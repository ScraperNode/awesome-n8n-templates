# 🔧 Manage short-term rental guest messages and cleaning tasks with Deepseek and Google Sheets

> ⚡ **8 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow captures short-term rental bookings via webhook, stores them in Google Sheets, and uses OpenAI (Deepseek model) to draft and send timed guest emails via Gmail using a property playbook. It also creates cleaning tasks on checkout and sends weekly host updates via Gmail and Telegram.

## How it works
1. Receives new booking details via a webhook and validates that required fields (guest, property, and dates) are present and consistent.
2. If the booking is invalid, sends an alert to the host in Telegram and an email via Gmail with the rejected payload.
3. If the booking is valid, generates a booking ID, normalizes the fields, appends the record to the Google Sheets “Bookings” tab, and notifies the host in Telegram.
4. Runs a daily scheduled sweep (or on-demand via a second webhook) that reads the “Bookings” sheet and selects confirmed stays that are due for a check-in message (tomorrow), checkout message (today), or review request (two days after checkout).
5. Uses an OpenAI (Deepseek) agent with a Google Sheets playbook tool to draft one plain-text message per due booking, then parses the JSON output and attaches the booking metadata.
6. Logs each message to the Google Sheets “GuestLog” tab, emails the guest via Gmail, and notifies the host in Telegram that the message was sent.
7. On checkout-day messages, creates a cleaning task in the Google Sheets “CleaningTasks” tab, emails the cleaner if an address is present, and alerts the host in Telegram whether the task is assigned or missing a cleaner.
8. Every Monday, reads bookings and cleaning tasks from Google Sheets, computes weekly stats, uses OpenAI (Deepseek) to write a concise digest, and sends it to the host via Gmail and Telegram (or posts an “all clear” Telegram message if there is no activity).

## Setup
1. Create a Google Sheets file with tabs named Bookings, GuestLog, CleaningTasks, and Playbook, and ensure the columns used in the workflow exist (including cleaner and cleaner_email in Bookings).
2. Add Google Sheets OAuth credentials and update the spreadsheet ID and sheet names wherever the workflow reads or appends rows.
3. Add Gmail OAuth2 credentials and set the host notification address plus ensure guest_email and cleaner_email fields are populated so emails can be delivered.
4. Add Telegram bot credentials and update the target chat ID(s) for host alerts.
5. Add an OpenAI API credential for the Deepseek chat model and populate the Playbook tab with one row per property (door code, Wi‑Fi, times, parking, rules) so messages include accurate details.
6. Copy the booking intake webhook URL (/str/bookings) and configure your booking source to POST the required fields, and optionally copy the manual sweep webhook URL (/str/sweep) if you want an external “run sweep now” button.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
