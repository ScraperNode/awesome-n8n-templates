# 📱 Send a daily product newsletter with Google Sheets and Gmail

> ⚡ **918 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs daily at 08:00, pulls products scheduled for today from Google Sheets, generates an HTML newsletter email, and sends it to each subscriber via Gmail.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Reads all rows from the `newsletter_products` sheet in Google Sheets.
3. Keeps only products whose `send_date` matches today’s date and stops if none are found.
4. Builds an HTML email and subject line containing a card for each product (image, description, and optional referral link).
5. Reads the subscriber list from the `newsletter_recipients` sheet in Google Sheets.
6. Sends the generated newsletter to each recipient individually using Gmail.

## Setup
1. Create or copy a Google Sheets document with `newsletter_products` (including a `send_date` column) and `newsletter_recipients` (including an `email` column).
2. Add a Google Sheets OAuth2 credential in n8n and paste your Google Sheet ID into the Config step.
3. Add a Gmail OAuth2 credential and confirm the sender mailbox to use for sending the newsletter.
4. Add products and recipients to the sheet, run a test execution, and adjust the schedule/timezone if needed before activating.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
