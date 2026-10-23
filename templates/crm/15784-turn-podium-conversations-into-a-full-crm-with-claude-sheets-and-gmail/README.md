# 🤝 Turn Podium conversations into a full CRM with Claude, Sheets and Gmail

> ⚡ **15 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works

This template turns Podium's conversation inbox into a full sales CRM with a custom funnel, AI message classification, automated drip follow-ups, daily admin reports, and a live Kanban dashboard. Six sub-flows live on one canvas — each clearly separated by a coloured sticky-note section.

- **Section 1 — AI Message Router.** A Podium webhook fires on every inbound or outbound message. Claude AI (Haiku 4.5) reads the message and classifies it into one of 10 funnel stages, while also extracting any dollar amount as an opportunity value and the contact's name.
- **Section 2 — Funnel Stage Updater.** Fetches the contact from Podium, compares against the current stage, and upserts the new stage as a custom contact attribute. Skips the write if the stage hasn't changed. Logs every change to a Google Sheet event log.
- **Section 3 — Opportunity Value Updater.** Same pattern as Section 2 but for monetary value. Only writes if the new quote is higher than the existing one, so older values don't overwrite newer ones.
- **Section 4 — Quote Follow-up Drip.** Runs every hour. Finds contacts stuck in "Quote Sent", sends drip 1 at 48h, drip 2 at 5 days, drip 3 at 10 days, then auto-moves them to Lost. Respects business hours (Mon–Sat 08:00–18:00).
- **Section 5 — Daily Admin Report.** Every morning at 08:00, emails the owner a digest: quotes awaiting reply &gt;24h, jobs in workshop &gt;24h, leads stuck &gt;48h, and contacts moved into a stage today.
- **Section 6 — Live Kanban Dashboard.** A public webhook URL renders a Podium-style 10-column Kanban board straight from the Sheet event log — no live Podium calls, instant load.

The Google Sheet is used as an append-only event log so the dashboard and report are fast, give you a full audit trail, and avoid Podium's lack of pagination on the contacts endpoint.

## Setup steps

Total setup time: around 30 minutes.

1. Create four credentials in n8n: Podium OAuth2 (generic OAuth2), Anthropic API (HTTP Header Auth with `x-api-key`), Google Sheets OAuth2, Gmail OAuth2.
2. Create a Google Sheet with these columns in row 1: `timestamp, conversation_uid, name, channel_identifier, channel_type, funnel_stage_uid, opp_value_cents, action`. Copy the Sheet ID from the URL.
3. In Podium, create two custom contact attributes: "Funnel Stage" (single-select with 10 options matching the stages above) and "Opportunity Value" (integer in cents).
4. Replace every `YOUR_*` placeholder in the workflow — `YOUR_GOOGLE_SHEET_ID`, `YOUR_PODIUM_LOCATION_UID`, the two attribute UIDs, the 10 stage option UIDs, and `YOUR_RECIPIENT_EMAIL`.
5. Register the Podium webhook at the Production URL of the "Podium Webhook" node, subscribed to `conversation.message.created`.
6. Activate the workflow, then open the "Dashboard Webhook" node's Production URL in your browser to view the live Kanban.

Stage names like "Booked In" and "In Workshop" suit any service business — workshops, salons, dental, trades. Adjust the drip message bodies in Section 4 to match your brand voice.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
