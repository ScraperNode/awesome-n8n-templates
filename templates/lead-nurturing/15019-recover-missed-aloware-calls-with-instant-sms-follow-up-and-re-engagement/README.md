# 💬 Recover missed Aloware calls with instant SMS follow-up and re-engagement

> ⚡ **162 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Description
Never lose a prospect to a missed call again. This workflow sends an automatic "sorry we missed you" SMS within seconds, follows up 2 hours later if there's no reply, and enrolls unresponsive contacts into a re-engagement sequence.
Missed calls are one of the biggest silent revenue leaks in sales and support teams. This workflow turns every missed call into a structured recovery cadence — all hands-free.

## How it works

1. A Webhook receives the call.missed event from Aloware in real time.
2. A Set node extracts the caller's phone number, name, contact ID, and the timestamp of the missed call.
3. An HTTP Request sends an immediate personalized SMS: "Sorry we missed your call! Reply YES to schedule a callback…"
4. A Wait node pauses the workflow for 2 hours.
5. An HTTP Request looks up the contact in Aloware to check whether they've replied or been contacted since the missed call.
6. An IF node evaluates whether there has been any communication after the missed call timestamp.

	- Contact replied → no further action needed.
	- No reply → a follow-up SMS is sent, and the contact is enrolled in a Re-engagement Sequence for continued multi-touch outreach.



## How to use

1. Import the JSON into n8n.
2. Add these n8n Variables: ALOWARE_API_TOKEN, ALOWARE_LINE_PHONE, ALOWARE_REENGAGEMENT_SEQUENCE_ID, and COMPANY_NAME.
3. In Aloware, create a Re-engagement Sequence (e.g., SMS → wait 1 day → call → wait 2 days → SMS) and copy the Sequence ID.
4. In Aloware Admin → Settings → Webhooks, create a new webhook with event call.missed pointing to this workflow's Webhook URL.
5. Activate the workflow and make a test missed call.

## Requirements

Aloware account with API access, webhook capabilities, and an outbound line
No external CRM required — this workflow is self-contained within Aloware + n8n

Customising this workflow

Adjust the wait time in the "Wait 2 Hours" node — shorter for high-velocity sales teams, longer for support use cases.
Customize both SMS messages in the HTTP Request nodes to match your brand tone.
Add a Slack or email notification node after the missed call to alert a rep in parallel.
Filter by line name or ring group to run different recovery flows for different departments.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
