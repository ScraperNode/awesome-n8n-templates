# 🎫 Track insurance renewals and claims with WhatsApp, Google Sheets, and OpenAI GPT-4o-mini

> ⚡ **11 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow tracks insurance policy renewals and claim document collection using Google Sheets, automates outbound WhatsApp template reminders via WATI on a daily schedule, and handles inbound WhatsApp replies with OpenAI intent classification, Google Drive document storage, and Sheets updates plus agent alerts.

## How it works
1. Runs daily at 10:00 AM (Asia/Kolkata) and also triggers on incoming WhatsApp events via a WATI webhook.
2. On the daily run, reads Policies and Claims from Google Sheets and calculates which customers need renewal reminders, claim document chasers, and a daily digest for the agent.
3. Sends the appropriate WATI WhatsApp template message for each planned action (renewal reminder, documents pending reminder, and agent digest).
4. Writes back to Google Sheets to record reminder stages and timestamps on Policies and the last chase timestamp on Claims.
5. On inbound messages, normalizes the WATI payload, matches the sender to policy/claim records in Google Sheets, and uses OpenAI (gpt-4o-mini) to classify intent and draft a contextual reply.
6. If the customer sends media, downloads the file from WATI, uploads it to Google Drive, and updates the claim record with received documents and Drive links in Google Sheets.
7. Sends a WhatsApp session reply to the customer via WATI and, when needed, sends an additional WATI template alert to the agent.

## Setup
1. Add credentials for WATI (HTTP Header Auth token), Google Sheets OAuth2, Google Drive OAuth2, and OpenAI.
2. Update the Config values for your Google Sheet ID, WATI tenant endpoint and template names, agent WhatsApp number/name, and the Google Drive folder ID for storing claim documents.
3. Create Google Sheets tabs named Policies and Claims with matching key columns (policy_id and claim_id) and the status/reminder fields the workflow updates.
4. Copy the production webhook URL from the WATI inbound webhook trigger and register it in your WATI account for message events.
5. Confirm the schedule time zone and reminder/chase settings in Config (reminder_days, grace_days, chase_every_days) before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
