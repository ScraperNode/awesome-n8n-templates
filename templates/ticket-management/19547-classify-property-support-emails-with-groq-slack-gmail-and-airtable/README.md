# 🎫 Classify property support emails with Groq, Slack, Gmail and Airtable

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors an IMAP inbox, uses Groq to classify property support emails and draft replies, then routes tickets to Slack channels, creates a Gmail draft, and logs the ticket to Airtable with a Google Sheets backup when Airtable fails.

## How it works
1. Triggers when a new email arrives in your IMAP inbox.
2. Cleans and truncates the email body to 500 characters for consistent processing.
3. Sends the subject and cleaned body to Groq Chat Completions to return a JSON classification (category, urgency, property reference, and suggested reply).
4. Parses the AI response and normalizes the sender details, falling back to a manual-review payload if the API response is missing or unparseable.
5. Routes the ticket by category and posts the full details to the appropriate Slack channel (Maintenance, Tenant Query, Viewing, Enquiry, or Manual Review), while spam is only logged.
6. For non-spam tickets, creates a Gmail draft reply to the original sender using the suggested reply text.
7. Saves the ticket to Airtable and emails a processing confirmation, or appends the ticket to a Google Sheets backup and emails an alert if the Airtable write fails.

## Setup
1. Connect credentials for IMAP Email Read, Groq API, Slack OAuth2, Gmail OAuth2, Airtable, and Google Sheets.
2. Configure the IMAP mailbox to watch and ensure it can access the message subject and body fields used in the workflow.
3. Select your Slack channel IDs for maintenance, tenant queries, viewings, enquiries, and manual review.
4. Choose your Airtable base and table and ensure the table has fields matching the mapped columns (for example: Category, Urgency, Subject, Body, Draft, Sender Email, and Property Reference).
5. Set the Google Sheets document URL/ID and sheet (gid) for backup logging used for both spam and Airtable-failure scenarios.

## Requirements
- IMAP email account, Groq API key, Slack workspace, Gmail account, Airtable account, Google Sheets access

## 🔗 Nodes Used

Airtable, Email Trigger (IMAP), Google Sheets, HTTP Request, Slack, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
