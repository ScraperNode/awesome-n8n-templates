# 🔬 Gate personal data before external sends with Jev, Google Sheets, Gmail, Telegram and gpt-6-luna

> ⚡ **23 views** · 🔬 [Document Extraction & Analysis](../)

## Description

A payload only leaves your network when the gate says so. This workflow scores every outbound record for personal data before it reaches an external partner API, then blocks, allows or holds the send, logs the decision to Google Sheets and tells the privacy officer what happened. It runs on [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) and only forwards a payload the Jev check has cleared.

*Last updated: October 2026.*

## Quick Overview
This workflow takes a payload record on a webhook, rejects incomplete requests before any model call, and has Jev Classification score the payload text for personal data. Two probability bands decide the outcome: at or above 0.85 the send is blocked, at or below 0.15 it is allowed through to the partner API, and values between the bands are held for the privacy officer. Every outcome writes a row to the "Privacy Gate" tab in Google Sheets first, then notifies by email and Telegram, and a daily 07:00 lane counts the decisions and has gpt-6-luna draft the privacy audit note.

## How it works
1. Gate Request takes a POST on the jev-c3-privacy-gate webhook with job_id, record_ref, payload_text and destination, and Normalize Payload maps those four fields.
2. Payload And Destination Present? checks that payload_text and destination are filled in. If either is missing the model call is skipped, Mark Unusable Gate Request sets gate_decision UNUSABLE_GATE_REQUEST and external_send_allowed false, and Email Gate Intake Problem tells ops.
3. Jev Check Personal Data (model jev-latest, operation check, confidence threshold 0.5, output field jev) scores the payload text and returns jev.answer and jev.probability.
4. Personal Data Confident? routes a probability at or above 0.85 to Block External Send, which sets decision BLOCK_EXTERNAL_SEND, review_owner privacy_officer and status blocked_pending_officer_ack.
5. Clearly Not Personal? routes a probability at or below 0.15 to Allow External Send, which sets decision ALLOW_EXTERNAL_SEND, review_owner none and status allowed_and_forwarded.
6. Everything between the bands is held for a human: a payload that misses the 0.85 test reaches Hold For Privacy Officer (status held_confident_band_for_officer) and one that misses the 0.15 test reaches Hold Borderline Payload (status held_borderline_for_officer). Both use decision HOLD_HUMAN_REVIEW.
7. Logging comes first. Log Blocked Send, Log Held Payload, Log Allowed Send and Log Borderline Payload append to the "Privacy Gate" tab with gate_id, received_at, destination, payload_type, personal_data, probability, decision, review_owner, payload_excerpt, status and decided_at.
8. Notification comes second. Email Privacy Officer Block and Alert Privacy Officer Urgent cover a block, the two Telegram review nodes cover a hold, and only an allow reaches Forward Payload To Partner API, which POSTs the four fields to https://api.partner.example.com/v1/ingest before Email Sender That Payload Went Out sends the receipt.
9. Daily at 07:00 (cron 0 7 * * *) the Daily Privacy Audit Trigger lane reads the tab, Summarize Gate Decisions counts gate_id per decision, and Draft Daily Privacy Audit Note has gpt-6-luna write the note that Email Daily Privacy Audit sends.

## Setup
1. Create a Google Sheets file with a tab named "Privacy Gate" and the columns gate_id, received_at, destination, payload_type, personal_data, probability, decision, review_owner, payload_excerpt, status and decided_at, then set the sheet id in the four append nodes and in Read Privacy Gate Log.
2. Add credentials for a Jev (TypeSafe) API, Google Sheets OAuth2, Gmail OAuth2, Telegram and an [OI] chat model credential.
3. Set the privacy officer address in Email Gate Intake Problem, Email Privacy Officer Block and Email Daily Privacy Audit, and the receipt address in Email Sender That Payload Went Out.
4. Set the Telegram chat id in Alert Privacy Officer Urgent, Ask Privacy Officer To Review and Ask Privacy Officer To Review Borderline.
5. Point Forward Payload To Partner API at your real vendor endpoint instead of the placeholder https://api.partner.example.com/v1/ingest.
6. Keep both thresholds for the strict posture: only 0.15 or below lets a payload leave the network, and 0.85 or above stops it.
7. Confirm the 07:00 schedule and the timezone (Asia/Jakarta in the export) match your working day, then activate the workflow.

### Quick Answers
**How does a payload get blocked?**
A jev.probability at or above 0.85 routes to Block External Send. The row is logged first, the privacy officer gets an email, Telegram gets an urgent alert, and nothing reaches the partner API.

**When is a payload allowed to leave?**
When the probability is at or below 0.15, Allow External Send marks it ALLOW_EXTERNAL_SEND, the row is logged, and the payload is forwarded to the partner API followed by a receipt email.

**What happens between the two bands?**
Anything above 0.15 and below 0.85 is held for the privacy officer instead of being sent, logged with decision HOLD_HUMAN_REVIEW and pushed to Telegram for review.

**What does gpt-6-luna do here?**
It runs only in the daily lane, turning the decision counts from Summarize Gate Decisions into the privacy audit note that Email Daily Privacy Audit sends at 07:00.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
