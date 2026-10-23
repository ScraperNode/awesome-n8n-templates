# 🎣 Score inquiry emails into Google Sheets leads with OpenAI and Telegram alerts

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow polls Gmail for new inquiry emails, uses OpenAI to extract lead details, saves or updates one lead per sender in Google Sheets, and sends Telegram alerts for hot leads based on budget or urgency.

## How it works
1. Polls a Gmail inbox every 5 minutes for new messages matching the configured search query.
2. Filters out newsletters, auto-replies, bounces, and ignored senders, and trims/cleans the email body before any AI processing.
3. Uses OpenAI (via an information extraction prompt) to determine whether the email is a real inquiry and extract structured lead fields like service, budget, deadline, and a short summary.
4. Validates and normalizes the AI output (sanitizes spreadsheet-formula text, parses budget to a number, normalizes phone, and scores priority as hot or normal).
5. Appends or updates a matching row in Google Sheets (sheet “Leads”) using the sender’s email as the unique key.
6. If the lead is marked hot, formats an HTML-safe message and sends a Telegram alert including a link back to the Gmail message.

## Setup
1. Connect Gmail, OpenAI, Google Sheets, and Telegram credentials (including a Telegram bot) in n8n.
2. Create a Google Sheets document with a sheet named “Leads” and columns: key, received_at, name, email, company, phone, service, budget, currency, deadline, summary, subject, priority, gmail_link.
3. Replace YOUR_SPREADSHEET_ID with your Google Sheets document ID and set your Telegram chat ID, hot budget threshold, default currency, and ignored sender keywords in the workflow settings step.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
