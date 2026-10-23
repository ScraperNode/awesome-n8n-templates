# 🎣 Qualify and route real estate leads with Google Gemini, Gmail, Slack and Sheets

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Automatically qualifies incoming leads with Gemini AI, routes each one to the best available agent by speciality and workload, notifies via Gmail and Slack, escalates to the broker if unacknowledged within 15 minutes, and delivers a weekly performance report, covering every lead from arrival to assignment to follow-up.

## How it works
1. Section A — Lead Qualification and Routing:
2. A lead arrives via webhook from any source — a website form, a CRM, or any previous QualMatic template passing a Hot lead automatically.
3. Gemini AI qualifies the lead as Hot, Warm, or Cold based on intent, timeline, budget, and message content.
4. Cold leads are logged to a cold queue and held for manual review — no agent is disturbed for low-quality leads.
5. Hot and Warm leads route immediately. The workflow selects the best agent by matching the lead's intent to agent speciality (Buyer / Seller / Rental / Investment / General), then load-balancing within matching agents by active lead count — the least busy specialist gets the lead.
6. Three notifications fire simultaneously — a detailed Gmail to the assigned agent with a click-to-acknowledge link, a Slack DM for instant mobile alert, and a broker copy email for full visibility.
7. Optionally creates a Pipedrive contact and deal automatically.
8. Section B — Acknowledgement:
9. When the agent clicks the acknowledgement link, a webhook records the acknowledgement timestamp, calculates the response time in minutes, and sends a confirmation email.
10. Section C — Escalation:
11. If the agent has not acknowledged within the configured timeout (default 15 minutes), the broker receives an escalation alert via Gmail and Slack — flagging the unacknowledged lead for immediate action.
12. Section D — Weekly Performance Digest:
13. Every Monday at 8 am, a performance report is delivered to the broker — leads assigned per agent, acknowledgement rates, average response times, score breakdown, and escalation count.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Google Sheets OAuth2, Gmail OAuth2, and Slack OAuth2.
2. Create or choose a Google Sheets spreadsheet with tabs for Lead Assignments, Agents, and Weekly Performance Log, and set the document ID and sheet tabs in all Google Sheets nodes.
3. Update the brokerage configuration values (broker email/name, broker Slack channel, escalation minutes, N8N_WEBHOOK_BASE_URL, and AGENTS_JSON with real agent emails and Slack user IDs) and keep the separate weekly-digest broker configuration in sync.
4. Copy the “New Lead Received” webhook URL into your lead source (website form/CRM) and ensure the public base URL is set so acknowledgement links resolve externally.
5. If using Pipedrive, set USE_PIPEDRIVE to true and fill in PIPEDRIVE_DOMAIN and PIPEDRIVE_API_TOKEN in the configuration.

## Requirements
- Google Sheets setup: Create the Brokerage Lead Router sheet template and link its ID to all Sheets nodes. Three tabs required. Tab 1 — Lead Assignments — columns: Assignment ID, Timestamp, Lead Name, Email, Phone, Lead Source, Intent, Budget, Timeline, Message, AI Score, Score Reasoning, Assigned Agent ID, Assigned Agent Name, Assignment Method, Acknowledged, Acknowledged At, Response Time (mins), Escalated, Pipedrive Deal ID, Status, Notes. Tab 2 — Agents — columns: Agent ID, Agent Name, Email, Phone, Slack User ID, Speciality, Active Leads, Total Assigned, Avg Response Time (mins), Status. Tab 3 — Weekly Performance Log.
- Agent roster setup: Populate the Agents tab with your team before activating. Each agent needs an Agent ID, name, email, Slack User ID, speciality (Buyer / Seller / Rental / Investment / General), starting Active Leads count, and Status (Available). Update AGENTS_JSON in the Configuration node to match — this is the roster the routing logic reads at runtime.
- Slack User ID: Each agent's Slack User ID is required for direct message notifications. Find it in Slack → click the agent's profile → three-dot menu → Copy member ID. Format: U12345678.
- Public n8n URL (required): The click-to-acknowledge link in the agent email points to the Section B webhook. This requires a permanent public n8n URL — not localhost. Set N8N_WEBHOOK_BASE_URL in the Configuration node to your server's public URL before going live. For local testing paste the webhook test URL directly in your browser with the correct query parameters.
- Pipedrive setup (optional): Set USE_PIPEDRIVE = true in the Configuration node and add your PIPEDRIVE_API_TOKEN and PIPEDRIVE_DOMAIN. Get your API token from Pipedrive → Personal Preferences → API tab. Your domain is the subdomain in your Pipedrive URL. Pipedrive authenticates via api_token as a URL query parameter — not a Bearer header.

## Customization
- Add or remove agents by updating AGENTS_JSON in the Configuration node — no workflow changes needed.
- Set any agent's Status to Busy or Off in AGENTS_JSON to exclude them from routing temporarily — they re-enter the pool when Status returns to Available.
- Adjust ESCALATION_MINUTES to change the acknowledgement timeout — default is 15 minutes, increase for less urgent markets or decrease for high-volume teams.
- Change the weekly digest schedule in the Schedule trigger node — day and time fully configurable.
- Extend the routing logic in Parse AI Output & Select Agent to add custom routing rules — for example route by agent location, language, or property price range.
- Connect from any previous QualMatic template by adding an HTTP Request node pointing to this template's webhook URL — Templates #5, #6, and #10 can all pipe Hot leads directly into the router.

## Additional info
Four independent sections. This template contains four execution sections. Section A fires on a webhook. Section B fires when an agent clicks the acknowledge link. Section C continues from Section A after the Wait node. Section D fires on a weekly schedule. Section A and Section D each have their own Configuration node — update both when changing broker details.

AGENTS_JSON vs. Agents sheet. The routing logic reads from AGENTS_JSON in the Configuration node at runtime — not directly from the Agents sheet. The Agents sheet is used for logging and performance tracking only. Keep AGENTS_JSON and the Agents sheet in sync when adding or removing agents.

Load balancing. The routing algorithm selects the agent with the fewest active leads within the matching speciality pool. Active Leads increments in the Agents sheet after every assignment — the next routing decision reflects the updated count. Decrease an agent's Active Leads manually in the sheet when they close or archive a lead.

Escalation does not reassign. Section C notifies the broker when a lead is unacknowledged — it does not automatically reassign the lead. Manual reassignment by the broker is intentional — the broker may have context about agent availability that the workflow does not.

Pipedrive authentication. Pipedrive v1 API uses api_token as a URL query parameter, not a Bearer header. The HTTP Request nodes are pre-configured for this. Do not add an Authorization header — it will be ignored and may cause unexpected behaviour.

Cold lead handling. Cold leads are logged to the Lead Assignments sheet with Status = Cold — Pending Review but are not assigned to any agent. The broker can review cold leads periodically and manually assign them or add them to a drip sequence using Template #14.

Previous QualMatic Templates. 

Template#5
https://n8n.io/workflows/17258-qualify-facebook-lead-ads-and-send-follow-ups-with-gemini-gmail-and-sheets/

Template#6
https://n8n.io/workflows/17409-qualify-inbound-real-estate-leads-from-gmail-with-gemini-and-hubspot/

Template#10
https://n8n.io/workflows/18329-match-new-property-listings-to-buyer-leads-with-gemini-gmail-and-sheets/

Template#14
https://n8n.io/workflows/19876-nurture-real-estate-leads-with-google-gemini-gmail-and-google-sheets/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
