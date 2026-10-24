# 💬 Send and track GPT-4 outreach emails with Gmail and Google Sheets

> ⚡ **2 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow pulls lead records from Google Sheets, uses OpenAI to generate personalized HTML outreach emails, sends them through Gmail, waits and checks the Gmail thread for replies, and then updates lead status and reply details back in Google Sheets.

## How it works
1. Starts when you manually execute the workflow.
2. Reads lead rows from Google Sheets and validates that each lead has a properly formatted email address, logging invalid records to a separate Google Sheets tab.
3. Filters out leads whose Booking Status is already set to BOOKED.
4. Sends each remaining lead’s details to OpenAI to generate a JSON response with an email subject and HTML body, then parses and cleans the AI output.
5. Sends the generated outreach email via Gmail and stores the returned Gmail thread ID for follow-up tracking.
6. Waits briefly, fetches the sent Gmail thread, and if a reply snippet contains “Yes” it extracts reply details and updates the lead as BOOKED in Google Sheets.
7. If no qualifying reply is detected, it sends a follow-up email via Gmail, waits again, rechecks the thread, and either updates the lead with reply details in Google Sheets or marks the lead as Declined.

## Setup
1. Add Google Sheets credentials with access to both the source leads spreadsheet and the destination outreach-tracking spreadsheet, and update the document IDs and sheet/tab names as needed.
2. Add a Gmail OAuth2 credential and replace the hard-coded recipient address in the initial outreach step with the lead’s email field (and confirm the follow-up email “To” mapping matches your use case).
3. Add an OpenAI API credential and choose the model you want to use for the outreach generation prompt.
4. Ensure your Google Sheets columns match the fields the workflow reads and writes (including Email, Booking Status, ThreadID, ClientMessage/Client Message, and LastUpdated).

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
