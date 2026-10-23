# 🎣 Capture and route real estate leads with Google Sheets, Gmail, and Slack

> ⚡ **67 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures real estate property inquiries via a webhook, validates and normalizes lead details, upserts the lead into Google Sheets, sends an auto-reply through Gmail, and notifies your team in Slack, with separate handling for high-priority leads and workflow failure alerts.

## How it works
1. Receives a website property inquiry via a POST webhook.
2. Extracts the lead fields (name, email, phone, property ID, message, source, and timestamp) and rejects invalid submissions with a 400 JSON response explaining what’s missing.
3. Normalizes the lead data by lowercasing the email address and stripping non-numeric characters from the phone number.
4. Classifies the inquiry as high or standard priority based on keywords found in the message and property text.
5. Appends or updates the lead in a Google Sheets CRM table, matching on email to avoid duplicates.
6. Sends a Gmail auto-reply and posts a Slack notification, routing high-priority leads to a senior-agent message and standard leads to the general team.
7. Returns a JSON confirmation to the webhook caller and posts a Slack alert if the workflow errors.

## Setup
1. Copy the webhook URL from the trigger and configure your website form/app to send a POST request with fields like name, email, phone, property_id, message, and source.
2. Add a Google Sheets credential, replace the spreadsheet and sheet selection, and ensure the sheet has headers for Email, Name, Phone, Source, Message, Priority, Property, and Submitted At.
3. Add a Gmail credential for sending the auto-reply emails and adjust the sender account and email copy if needed.
4. Add a Slack OAuth2 credential and set the target channels for standard lead notifications, priority lead notifications, and failure alerts.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
