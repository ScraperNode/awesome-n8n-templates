# 🔬 Chase missing client documents from Google Sheets with OpenAI and Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs every weekday morning to read open document requests from Google Sheets, uses OpenAI to draft reminder emails in your firm’s tone, sends them via Gmail, and updates the sheet with the last-sent date and reminder count.

## How it works
1. Runs every weekday at 8am on a schedule.
2. Loads rows from the Google Sheets “Requests” tab where Status is set to Open.
3. Calculates how many reminders have been sent, how many days have passed since the last email, and whether the next email is a first request, reminder, or final reminder.
4. If enough time has passed and the reminder limit is not exceeded, uses OpenAI to generate a short email subject and body for the specific client and document.
5. Sends the generated email to the client using Gmail with the configured reply-to address.
6. Updates the same Google Sheets row with today’s date in “Last sent” and increments the “Reminders” count.

## Setup
1. Create a Google Sheet with a “Requests” tab that includes columns Client, Email, Document, Due date, Status, Last sent, Reminders, and ensure open items have Status set to Open.
2. Add Google Sheets credentials and paste your spreadsheet ID into the workflow’s Settings values.
3. Add Gmail credentials and set the reply-to address in the Settings values.
4. Add an OpenAI credential, and (optionally) adjust the tone, daysBetweenReminders, and maxReminders settings to match your reminder policy.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
