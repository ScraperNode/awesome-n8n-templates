# 📋 Track freight load risk from driver check-ins with gpt-6-luna and Google Sheets

> ⚡ **3 views** · 📋 [Project Management](../)

## Description

Freight check-ins that update the load board while the driver is still on the road. This workflow takes every driver check-in by webhook, has gpt-6-luna normalize the status and risk, updates your Google Sheets load board, and pushes customer, ops, and Discord updates before a problem turns into a late delivery.

*Last updated: September 2026.*

## Quick Overview
This workflow ingests freight driver check-ins via webhook, uses gpt-6-luna to normalize status and risk, updates a Google Sheets load board and log, and sends Discord and Gmail notifications; it also runs a daily sweep to generate an AI-written dispatch brief from the same sheet.

## How it works
1. Receives a POST webhook check-in with load and status details from a driver app, dispatcher, or message relay.
2. Normalizes the payload and rejects missing load IDs or status notes by appending an error row to Google Sheets and alerting the dispatch desk in Discord.
3. Sends the driver’s update to gpt-6-luna to extract a normalized shipment status, ETA, delay details, risk level, and customer-ready text.
4. Looks up the load in the Google Sheets “Load Board,” calculates lateness against the delivery appointment, and adjusts risk (for example, escalating to exception when very late).
5. Appends the check-in to a Google Sheets “Check Log” and updates the matching “Load Board” row with the latest status, risk, driver name, and last check-in time.
6. Routes by risk to post updates to Discord and send Gmail emails to the customer for at-risk loads, escalate exceptions to ops, and send delivery confirmations when marked delivered.
7. Runs daily at 07:00 to scan the Google Sheets load board for quiet or due-soon loads, uses gpt-6-luna to write a dispatch brief, then posts it to Discord and emails it via Gmail.

## Setup
1. Create (or update) a Google Sheets file with “Load Board,” “Check Log,” and “Errors” tabs and ensure the column names match the fields used by the workflow (for example, load_id, status, delivery_appt, customer_email, last_check_in).
2. Add credentials for Google Sheets OAuth2, OpenAI, Discord bot, and Gmail OAuth2.
3. Copy the webhook URL from the “Driver Check In” trigger and configure your driver app/relay to POST JSON containing at least load_id and a status/message field (optionally driver_name, location, eta_text, notes, and source).
4. Update the Discord guild/channel targets and replace the default email recipients (customer fallback and ops escalation) with your real addresses before activating the workflow.
5. Confirm the schedule trigger time (07:00 in the workflow timezone) matches your dispatch desk’s morning routine.

### Quick Answers
**What can a driver send in?**
A POST webhook check-in with at least load_id and a status or message field. driver_name, location, eta_text, notes, and source are optional.

**What happens to an incomplete check-in?**
Missing load IDs or status notes are rejected: an error row is appended to Google Sheets and the dispatch desk gets a Discord alert.

**How is risk decided?**
gpt-6-luna extracts a normalized shipment status, ETA, delay details, risk level, and customer-ready text. The workflow then checks that against the delivery appointment in the Load Board and escalates very late loads to exception.

**When does a customer hear about a load?**
At-risk loads trigger Discord updates plus customer emails, exceptions are escalated to ops, and check-ins marked delivered send the customer a confirmation.

**What does the 07:00 run do?**
It scans the load board for quiet or due-soon loads, uses gpt-6-luna to write a dispatch brief, then posts it to Discord and emails it.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Discord, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
