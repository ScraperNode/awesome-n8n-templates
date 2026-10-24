# 🎫 Sort customer feedback by rating with Google Sheets and Slack

> ⚡ **25 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow manually runs to read feedback from a Google Sheets spreadsheet, processes only rows marked as new, routes them by rating, appends positive testimonials to a separate sheet, notifies a Slack support channel for negative reviews, and then marks each handled row as Processed.

## How it works
1. Runs when you manually execute the workflow.
2. Reads feedback rows from a Google Sheets worksheet and keeps only entries whose Status is set to "new".
3. Routes each entry by rating into positive (≥4), neutral (=3), or negative (≤2) paths.
4. Appends positive feedback (name, email, rating, feedback) to a testimonials worksheet in Google Sheets and then updates the original row’s Status to "Processed".
5. For neutral feedback, updates the original Google Sheets row’s Status to "Processed".
6. For negative feedback, formats a message and posts the review details to a Slack support channel, then updates the original Google Sheets row’s Status to "Processed".

## Setup
1. Create Google Sheets service account credentials in n8n (Google Sheets node) and share the target spreadsheet with the service account email.
2. Ensure your Google Sheets file has a source worksheet (for example, "feedback") with columns Name, Email, Feedback, Rating, and Status, and a destination testimonials worksheet (for example, "testimoniels").
3. Add Slack OAuth credentials in n8n and select the support channel to receive negative feedback notifications.
4. Update the spreadsheet ID, worksheet names, and channel selection in the Google Sheets and Slack steps to match your environment, and make sure Status values use "new" for unprocessed rows.

## 🔗 Nodes Used

Google Sheets, Slack, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
