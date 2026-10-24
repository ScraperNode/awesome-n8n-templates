# 💬 Rescue at-risk appointments with two-hour WhatsApp and Google Sheets check-ins

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs every hour to rescue at-risk appointments: it validates every row, sends one WhatsApp check-in to each unconfirmed customer starting in 90-150 minutes, waits for the reply, classifies it, and routes confirmed replies to your calendar and everything else to staff.

## How it works
1. Runs every hour on a schedule and loads appointments from the demo source (replace with Google Sheets in production).
2. Validates every row: missing ids or phones and unparseable start times go to an error log with the exact reason.
3. Picks appointments that are unconfirmed and start 90-150 minutes from now; a static-data guard guarantees exactly one check-in per appointment even if the workflow fires twice.
4. Sends each customer one WhatsApp check-in asking them to reply YES or NO (placeholder send step in the template).
5. Waits up to 15 minutes for an inbound reply that resumes the execution via a webhook.
6. Classifies the reply as confirmed, cancel_requested, unclear, or no_reply. Confirmed replies mark the calendar; cancel, unclear and no-reply flag staff.

## Setup
1. Replace the demo appointment source with your real data source (for example Google Sheets) and ensure it provides appointment_id, customer_name, phone, starts_at (ISO), practitioner, treatment, and status.
2. Add WhatsApp Business Cloud credentials and replace the placeholder send step with a Send Message action configured to message the appointment phone number.
3. Configure WhatsApp inbound webhooks to call the n8n Wait node resume URL so customer replies continue the correct execution.
4. Wire the two replace-me end nodes: a calendar or sheet update for confirmed replies, and your staff channel (Slack, email, or a needs-attention sheet) for everything else.

## Requirements
- n8n on any plan. The demo run needs no credentials; production needs a Google Sheets or calendar credential plus WhatsApp Business Cloud.

## Customization
- Check-in window (90-150 minutes), reply wait (15 minutes), and YES/NO keywords (English and Dutch variants) are plain settings in the named nodes.

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
