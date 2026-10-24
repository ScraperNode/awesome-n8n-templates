# 💬 Manage weekly coaching check-ins with Google Sheets, Gmail and DeepSeek

> ⚡ **14 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow emails weekly check-in links to active coaching clients from Google Sheets, collects responses via an n8n Form, uses OpenAI (DeepSeek model) to draft personalized coaching replies, logs results back to Google Sheets, and alerts the coach via Telegram and Gmail for missed or problematic check-ins.

## How it works
1. Runs every Sunday at 07:00 (Asia/Jakarta) and reads the Clients tab in Google Sheets to find clients with status set to active.
2. Sends each active client a Gmail message containing a link to the n8n check-in form.
3. Receives check-in submissions through an n8n Form and normalizes the fields (including timestamps and numeric values) for consistent processing.
4. Validates required fields and, when data is missing, notifies the coach via Telegram and Gmail that the submission was skipped.
5. For valid submissions, reads recent check-in history from the CheckIns tab and sends the check-in plus history to OpenAI (DeepSeek model) to generate an adherence score, flags, and a short reply using the Google Sheets client roster as a tool.
6. If the client is found in the roster, appends the check-in and AI reply to Google Sheets and emails the coaching reply to the client, then sends a Telegram alert when the AI flags that the client needs attention.
7. Runs every Monday at 09:00 (Asia/Jakarta) to compare active clients against check-ins from the last 7 days, then sends Telegram and Gmail nudges to missed clients or an all-clear message to the coach.

## Setup
1. Add credentials for Google Sheets OAuth2, Gmail OAuth2, OpenAI API, and Telegram Bot API.
2. Create or select a Google Sheets spreadsheet with two tabs named Clients and CheckIns, and ensure the Clients tab includes at least client_name, client_email, status, goal, and plan columns.
3. Update the Google Sheets document ID (and sheet names if different) in all Google Sheets steps to point to your roster and check-in log.
4. Publish the n8n Form and replace the form URL in both client email messages (weekly send and missed-check-in nudge) with your instance’s actual /form/coach/checkin link.
5. Set the coach notification targets by updating the Telegram chat ID and the coach email address used for invalid submission notices and all-clear emails.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
