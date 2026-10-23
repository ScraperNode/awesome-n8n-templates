# ⚒️ Build AOG parts release packets with OpenAI, Google Drive and Telegram

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives an AOG parts request via webhook, validates OEM eligibility, life history, and airworthiness directives via external APIs, and uses OpenAI to generate decision rationales. It then reserves eligible parts or quarantines blocked parts, archives the packet to Google Drive, and sends Telegram notifications.

## How it works
1. Receives a POST webhook request containing aircraft context and an array of requested serialized parts.
2. Normalizes the incoming payload and processes each part individually.
3. Calls external OEM and MRO/authority HTTP APIs to fetch OEM eligibility, serialized life history, and airworthiness directive status for each part.
4. Combines the evidence and applies deterministic rules to flag release blockers (for example missing release certificate, expired life, OEM ineligible, or open directives) and set the part’s release state.
5. Uses OpenAI (Chat Completions via LangChain) to generate a strict JSON explanation of the decision, including rationale, missing evidence, and follow-up maintenance questions.
6. If the part is eligible, creates an AOG reservation in the MRO system; otherwise, creates a quarantine record in the MRO system.
7. Aggregates all per-part decisions into a single release packet, archives it as a JSON file to Google Drive, and sends the packet details to a Telegram chat.

## Setup
1. Provide an HTTP Header Auth credential for the external OEM/MRO/authority APIs and replace the placeholder example endpoints with your real API base URLs.
2. Add an OpenAI API credential and confirm the selected model (gpt-5-mini) is available for your account.
3. Add Google Drive OAuth credentials and replace REPLACE_FOLDER_ID with the target folder ID for archiving the release packet.
4. Add a Telegram Bot credential and replace REPLACE_CHAT_ID with the chat/channel ID that should receive notifications.
5. Share the webhook path/URL (POST /aog-parts-release) with the upstream system sending requests and align the payload fields (for example parts[].partNumber and parts[].serialNumber) to match your source data.

## Requirements
- n8n Instance: Compatible with self-hosted (npm/Docker) or n8n Cloud (v1.0+)
- OpenAI API Key: Account with access to chat models (default: gpt-5-mini) for structured entity extraction and drafting
- Google OAuth2 Credentials: Connected accounts for Gmail (intake/notifications), Google Drive (evidence storage), and Google Sheets (audit logging)
- HTTP/Header Credentials: API keys for external PRO work registration and Master rights claim endpoints (or compatible internal rights registries)

## Customization
- Risk Threshold Logic: Adjust tolerance parameters inside the Calculate Clearance Gaps node to enforce custom rules on writer share splits, missing sync quotes, or territory restrictions.
- Notification & Approval Channels: Replace the supervisor Gmail notification and approval webhook with Slack, Microsoft Teams, or Discord alerts.
- Extraction Schema & Prompts: Modify the schema in Extract Music Cue Rights and Draft Rights Clearance Packet to capture specialized fields (e.g., ISRC codes, ISWC, custom episode codes, or custom licensing fee bands).
- Downstream Production Storage: Re-route the final approved HTTP POST and archive sinks to internal production ERPs, Airtable, Notion, or custom SQL databases.

## Additional info
Production-Grade Resilience: All external touchpoints (OpenAI, Gmail, Google APIs, and HTTP registries) come configured with automatic 3x retries and a 2-second backoff to handle transient network blips.

Deterministic Safety-First Design: Employs a strict human-in-the-loop wait-webhook so unverified rights claims are never committed to production without explicit supervisor approval.

Embedded Canvas Documentation: Includes 4 comprehensive master documentation stickies detailing the complete node map, setup protocol, credential checklists, and privacy considerations.

Audit-Ready Logging: Automatically exports raw clearance evidence as JSON into Google Drive while creating an immutable append-only ledger record in Google Sheets.

Estimated Implementation Time: 25–40 minutes to configure credential nodes, folder IDs, and target webhook URLs.

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Google Drive, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
