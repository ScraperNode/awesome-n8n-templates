# 💬 Log and thank legal referrals with webhooks, Google Sheets, and email digests

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow captures referral form submissions via a webhook, logs them to Google Sheets, sends compliant thank-you emails to referrers via a guardrail sub-workflow, and notifies your firm by email, then runs monthly to analyze the ledger and email a reciprocal-referral reminder digest.

## How it works
1. Receives referral form submissions via a webhook endpoint.
2. Normalizes the incoming payload, validates that referrer details exist, and appends valid referrals to a Google Sheets “Referrals” ledger.
3. If a referrer email is present, generates a plain-text thank-you message and sends it through a compliance/opt-out guardrail workflow before sending via SMTP.
4. Emails the firm a referral summary via SMTP regardless of whether a thank-you was sent, skipped, or suppressed.
5. On the 1st of each month, reads the full Google Sheets referral ledger and calculates per-referrer referral counts for the last 90 days.
6. Filters referrers who meet the repeat-referral threshold, builds a digest reminder email, logs it via the guardrail workflow, and sends the reminder to the firm via SMTP.

## Setup
1. Create a Google Sheets spreadsheet with a “Referrals” tab and headers (date, lead_name, lead_email, referrer_name, referrer_email, referrer_type, matter_type, status), add a Google Sheets OAuth2 credential, and set the REFERRAL_LEDGER_SHEET_ID variable.
2. Add an SMTP credential for sending emails and set the FIRM_FROM_EMAIL and FIRM_EMAIL variables.
3. Set the FIRM_NAME variable and provide a GUARDRAIL_WORKFLOW_ID variable that points to your compliance/opt-out guardrail sub-workflow.
4. Copy the production webhook URL from the webhook trigger after activation and paste it into your referral form tool’s webhook/notification settings.
5. Review the monthly schedule (cron set to 8:00 on the 1st) and adjust it to match your timezone and preferred send time.

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
