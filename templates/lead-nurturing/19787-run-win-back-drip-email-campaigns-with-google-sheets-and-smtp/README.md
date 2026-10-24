# 💬 Run win-back drip email campaigns with Google Sheets and SMTP

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs daily and weekly to manage a win-back email drip from a Google Sheets tracker, sending staged reactivation emails via SMTP after a compliance sub-workflow approves them, then updating the tracker and emailing a weekly status summary to the firm.

## How it works
1. Runs every morning at 9am and reads the “Win-Back Tracker” data from Google Sheets.
2. Calculates which active leads are due for the next drip stage based on days since `marked_cold_at` and the configured `WIN_BACK_DRIP_STAGES` sequence.
3. Builds a personalized, stage-specific win-back email (subject, text, and HTML) using the lead’s name and practice area.
4. Sends the email content to a separate compliance/guardrail workflow and checks whether the message is approved or the recipient has opted out.
5. If approved, sends the drip email via SMTP and updates Google Sheets with `last_stage_sent` and `last_sent_at` for the matching `lead_id`.
6. Runs every Monday at 8am, summarizes active/reactivated/unsubscribed counts from Google Sheets, and sends the weekly summary email to the firm via SMTP.

## Setup
1. Connect Google Sheets credentials and set `WIN_BACK_TRACKER_SHEET_ID` to the spreadsheet that contains a “Win-Back Tracker” sheet with fields like `lead_id`, `email`, `status`, `marked_cold_at`, and `last_stage_sent`.
2. Configure an SMTP email credential and set `FIRM_FROM_EMAIL` (sender) and `FIRM_EMAIL` (weekly summary recipient).
3. Create or select a compliance/guardrail sub-workflow, set `GUARDRAIL_WORKFLOW_ID`, and ensure it returns an `approved` boolean (and handles opt-outs) for the provided email content.
4. Set `WIN_BACK_DRIP_STAGES` (for example `0|check-in;14|resources;30|last-call`) and adjust the stage email copy in the drip email template code if needed.
5. Confirm the schedule trigger times (daily 9am and Monday 8am) match your timezone and operating hours.

## 🔗 Nodes Used

Send Email, Google Sheets, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
