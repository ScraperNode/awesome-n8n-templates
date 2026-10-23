# 🎫 Triage real estate inbox leads and deals with Gmail, Gemini, and Google Sheets

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a shared Gmail inbox, uses Google Gemini to classify and extract real estate email details, updates a Google Sheets-based CRM (leads, properties, and deals), creates reply drafts in Gmail when needed, and logs every processed message to an Email Log sheet.

## How it works
1. Polls Gmail every minute for new inbox emails, excluding messages sent by your own account and certain Gmail categories.
2. Deduplicates messages against the Google Sheets Email Log, extracts the latest unquoted email content, and processes emails one at a time.
3. Loads the latest Leads, Properties, Sale Deals, and Rental Deals data from Google Sheets to provide CRM context for the current email.
4. Sends the email plus CRM context to Google Gemini to classify the email type and extract structured fields like sender details, property/deal identifiers, and updates.
5. Updates Google Sheets by appending or updating a lead or property, or by writing validated field updates to the matching sale or rental deal, while routing low-confidence or unclear matches to “Needs Review” without making changes.
6. When a reply is needed for leads/inquiries or rental listings, uses Google Gemini to draft a fact-based reply and saves it as a Gmail draft in the original thread, and for deal updates sends a summary email to the team via Gmail.
7. Appends a row to the Google Sheets Email Log with the message metadata, classification, match IDs, actions taken, and whether a draft was created.

## Setup
1. Create/copy the five Google Sheets files (Leads, Properties, Sale Deals, Rental Deals, and Email Log) and keep tab names and column headers exactly as expected by the workflow.
2. Add Gmail credentials for the monitored inbox (and ensure it can create drafts and send team notifications) and set the Gmail query/filter to match how you want emails selected.
3. Add Google Sheets credentials and paste each sheet URL into the Config values so the workflow can read and write to all five documents.
4. Add a Google Gemini (Google AI Studio) API key/credential and confirm the selected Gemini model is available in your region.
5. Update Config values for ownEmails, teamEmail, agencyName, signature, timezone, and minConfidence, then run a test by sending an email to the inbox and verifying sheet updates and created Gmail drafts before activating.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
