# 🎣 Capture website leads in Google Sheets CRM with WhatsApp and Gmail alerts

> ⚡ **16 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives website form submissions via a webhook, validates and normalizes lead data, stores valid leads in Google Sheets as a simple CRM, and sends instant WhatsApp alerts to your sales team, with retry logic and an error handler that escalates incidents via Gmail (with WhatsApp fallback).

## How it works
1. Receives a POST request from your website form through an n8n webhook endpoint.
2. Validates required fields, normalizes the lead payload (including international phone formatting), and flags likely bots using a honeypot field.
3. Returns a success response for spam, a 400 validation error with per-field details for invalid submissions, or a 500 response if validation unexpectedly fails.
4. Appends valid leads to a Google Sheets “Leads” sheet and retries the write with exponential backoff when Google Sheets errors occur.
5. Responds to the form with 200 when the lead is saved, or 202 when the CRM write fails after retries while still continuing alerting.
6. Builds a WhatsApp message, fans out one message per sales recipient, retries failed WhatsApp sends with backoff, and marks the lead as alerted (Alert Status = SENT, Alerted At) back in Google Sheets when delivery succeeds.
7. If any execution fails or an escalation is raised, sends an incident email via Gmail and falls back to sending an ops WhatsApp alert if the email notification fails.

## Setup
1. Create a Google Sheet with a “Leads” tab and the required headers (Lead ID, Submitted At, Name, Email, Phone, Company, Message, Source, UTM Source, UTM Campaign, Status, Alert Status, Alerted At), then set the spreadsheet ID in both Google Sheets nodes.
2. Add Google Sheets OAuth credentials, a WhatsApp Business Cloud credential (and set the Phone Number ID), and Gmail OAuth credentials for incident emails.
3. Update the Config values for sales WhatsApp numbers (international format, no “+”), default country code, CRM URL, and max retry attempts.
4. Set the alert recipients in Alert Settings (incident email address(es) and an ops WhatsApp number for fallback alerts).
5. Copy the production webhook URL for the “lead-capture” path and configure your website form to POST the expected fields (including an empty honeypot field such as website).

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Stop and Error, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
