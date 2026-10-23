# 🎣 Qualify inbound real estate leads from Gmail with Gemini and HubSpot

> ⚡ **21 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
When a property portal sends a lead notification to your Gmail, this workflow parses the email with Gemini AI, qualifies the lead, sends an instant acknowledgment, creates a HubSpot contact and deal in the right pipeline stage, and alerts you for hot leads.

## How it works
1. A lead notification email arrives from any property portal and lands in your Gmail inbox.
2. A Gmail filter automatically labels it n8n-leads — the workflow fires instantly.
3. AI (Gemini) reads the raw email body, extracts the lead's name, email, phone, property interest, budget, and timeline — handling any portal's email format automatically.
4. The lead is scored as Hot, Warm, or Cold based on its urgency, timeline, and buying signals.
5. An instant acknowledgment email sends to the lead confirming their inquiry was received.
6. A contact is created or updated in HubSpot CRM with full lead details, and a deal is created in the correct pipeline stage — Hot leads land in Appointment Scheduled, Warm in Qualified to Buy, Cold in Presentation Scheduled.
7. Everything logs to Google Sheets and Airtable simultaneously as a backup record.
8. Hot leads trigger an instant agent notification email with the full lead profile, AI score reasoning, and the lead's original message verbatim so the agent has complete context before calling back.
9. An optional Slack alert fires alongside the email notification for Hot leads.

## Setup
1. Connect credentials for Gmail OAuth2, Google Gemini (PaLM) API, HubSpot (app token), Google Sheets OAuth2, Airtable personal access token, and Slack OAuth (optional for hot-lead alerts).
2. Gmail filter setup: Create a Gmail filter that automatically applies the label n8n-leads to all incoming emails from your portal sender domains. Go to Gmail → Settings → See all settings → Filters and Blocked Addresses → Create a new filter. In the From field enter your portal domains separated by OR, for example: from:(zillow.com OR realtor.com OR homes.com OR redfin.com OR trulia.com). Select Apply label → n8n-leads → Create filter. The workflow only processes emails with this label — emails without it are ignored.
3. HubSpot custom properties: Three custom contact properties must be created in HubSpot before the workflow runs. Go to HubSpot → Settings → Properties → Contact Properties → Create Property and create these three as Single-line text type: lead_score (internal name: lead_score), Property Interest (internal name: property_interest), Portal Source (internal name: portal_source).
4. Google Sheets setup: Create a Lead Parser Database sheet template and link its ID to both the Append and Update Sheets nodes. Required columns in order: recordId, Timestamp, Portal, Sender Email, Subject, Lead Name, Lead Email, Lead Phone, Property Interest, Budget, Timeline, Lead Message, Lead Score, Score Reasoning, Acknowledgment Sent, HubSpot Contact ID, Agent Notified.
5. Airtable setup: Create a Lead Parser Database Airtable base template and link it to the Airtable nodes. All fields must be Single line text type except Lead Message which should be Long text. The Budget field must be Single line text — not Number — since AI extracts budget as a formatted string.
6. Replace the placeholder recipient in the agent notification email step (and the Slack channel, if used) with your real destination.
7. If using Slack, set the correct channel name in the Notify Agent via Slack node and invite your Slack bot to that channel.

## Customization
- Add new portals to the portal map in the Extract Email Metadata node by adding one line per portal domain — no other changes needed anywhere in the workflow.
- Edit the AI scoring rules in the Parse Email & Qualify Lead Gemini node to adjust what qualifies as Hot, Warm, or Cold for your market.
- Change the dynamic close date offsets in the Parse AI Output node — default is Hot: 30 days, Warm: 90 days, Cold: 180 days.
- Edit the acknowledgment email tone in the Gemini system prompt — change language, adjust formality, or translate to another language.
- Disable Airtable logging by disconnecting the Airtable nodes — Google Sheets logging continues independently.
- Add Warm lead agent notifications by duplicating the Hot lead notification branch and changing the IF condition.

## Additional info
Multi-portal support. The portal map in the Extract Email Metadata node maps sender domains to portal names automatically. Zillow, Realtor.com, Homes.com, Redfin, Trulia, Apartments.com, LoopNet, Rightmove, Property Finder, Bayut, and Domain are included by default. Any portal not in the map shows as Unknown Portal — add it with one line.

AI fallback is built in. If Gemini fails to parse the email, a generic acknowledgment still sends to the lead and the raw email metadata is logged to Google Sheets for manual review — no lead notification is ever silently dropped.

Node name coupling. The Parse AI Output Code node references the Extract Email Metadata node by exact name. If you rename that node, update the METADATA_NODE constant at the top of the Parse AI Output Code node, or the workflow will error.

## 🔗 Nodes Used

Airtable, Google Sheets, Slack, HubSpot, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
