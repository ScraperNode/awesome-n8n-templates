# 💬 Send personalized cold email sequences with Google Sheets, Gmail, Gemini and Slack

> ⚡ **75 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs daily to send Gemini-generated cold emails from leads stored in Google Sheets via Gmail, schedules two follow-ups based on time since sending, and continuously monitors Gmail for replies to update the sheet and alert a Slack channel.

## How it works
1. Runs every day at 9AM and simultaneously starts three paths for new sends, follow-up 1 checks, and follow-up 2 checks using the same Google Sheets leads list.
2. Fetches pending leads from Google Sheets, validates required fields, scrapes each company website via an HTTP request, and cleans the page text for prompting.
3. Sends the company details, cleaned website content, and your service to Google Gemini to generate a JSON subject and personalized email body, then sanitizes the output to remove any leftover placeholders.
4. Sends the cold email through Gmail and updates the matching Google Sheets row (by contact_email) with status, timestamps, and follow-up tracking fields.
5. For follow-ups, selects leads whose sent_at timestamp is at least 3 days or 7 days old and sends prewritten follow-up emails via Gmail, then updates Google Sheets to mark follow-ups sent and the sequence complete.
6. Separately, a Gmail trigger polls for new unread inbox messages, matches the sender against Google Sheets leads, and if it’s a lead not already marked replied, updates the row to replied and posts a hot-lead notification to Slack.

## Setup
1. Create a Google Sheets spreadsheet with a “Leads” sheet and columns like company_name, website, contact_email, your_service, status, sent_at, follow_up_1_sent, follow_up_2_sent, reply_received, reply_at, and reply_snippet.
2. Add credentials in n8n for Google Sheets OAuth2, Gmail OAuth2 (for both sending and the inbox trigger), Slack OAuth2, and Google Gemini (PaLM) API.
3. Set the correct Google Sheet document ID and sheet name in all Google Sheets nodes and choose the target Slack channel in the Slack message node.
4. Set an n8n variable for YOUR_NAME (used for email sign-offs) and update the website scraping HTTP request to use your own scraping provider/API key and settings.
5. Turn the workflow on so the schedule trigger runs at 9AM and the Gmail trigger can poll for replies.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
