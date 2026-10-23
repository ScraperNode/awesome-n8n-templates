# 🔬 Gate film and TV music cue rights clearance with Gmail, OpenAI, and Google Drive/Sheets

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors Gmail for cue-sheet emails, extracts music-rights data via OpenAI, and cross-checks internal rights APIs. It compiles a clearance packet for supervisor approval, routes gaps or commits approved records to production, and archives evidence to Google Drive and Google Sheets.

## How it works
1. Triggers every minute by watching Gmail for emails with subjects containing “cue sheet” or “music clearance” and at least one attachment.
2. Normalizes the email body into a single cue text field and uses OpenAI to extract structured cue and rights metadata (for example production, cues, territories, media, and term).
3. Calls two HTTP APIs to fetch matching PRO work registrations and master ownership claims for the extracted cues.
4. Merges the extracted cue data with the API evidence and calculates clearance gaps (missing writer share totals, missing master owner, or missing sync quote) and a risk status.
5. Uses OpenAI to draft a rights clearance packet JSON that preserves any gaps, then emails the packet to the music supervisor for approval via Gmail.
6. Waits for a webhook-based approval response and routes the packet to either commit the approved clearance via an HTTP API or email the gap list to a rights coordinator for follow-up.
7. Archives the final clearance evidence JSON to Google Drive and appends the packet details to an “Audit Log” tab in Google Sheets.

## Setup
1. Connect Gmail OAuth2 credentials and update the Gmail recipients/addresses for the music supervisor and rights coordinator.
2. Add an OpenAI API credential and ensure the selected chat model (gpt-5-mini) is available in your account.
3. Configure HTTP Header Auth credentials and replace the placeholder API endpoints (rights.example, labels.example, production.example) with your real rights registry, label claims, and production clearance URLs.
4. Connect Google Drive and Google Sheets OAuth credentials, then replace REPLACE_FOLDER_ID and REPLACE_GOOGLE_SHEET_ID with your target folder and spreadsheet (including an “Audit Log” sheet).
5. After activation, use the wait node’s resume webhook URL as your approval callback and ensure the responding system sends an {"approved": true|false} payload.

## Requirements
- n8n Environment: Self-hosted (Docker/npm) or n8n Cloud (v1.0+)
- OpenAI API Key: Account with access to standard LLMs (gpt-5-mini or gpt-4o-mini) for structured data extraction
- Google Workspace Access: Connected OAuth2 credentials for Gmail, Google Drive, and Google Sheets
- Registry Endpoints: Target API access (Header Auth) for your PRO / Master rights databases (or use the included mock schema to test)

## Customization
- Risk Logic & Scoring: Easily adjust gap-detection thresholds in the Calculate Clearance Gaps JavaScript node to fit studio-specific legal tolerance (e.g., custom split limits, territory rules).
- Multi-Channel Approval: Swap the supervisor email notifications with Slack, Microsoft Teams, or Discord alerts while keeping the 1-click webhook approval intact.
- Extraction Schema: Tweak the LangChain Information Extractor prompt to capture custom metadata fields like ISRC, ISWC, or custom episode cue numbers.
- Target Database: Point the final commit HTTP node to Airtable, Notion, Supabase, or your studio’s internal production SQL database.

## Additional info
Built-in Resilience: Every external API call, LLM interaction, and email dispatch is equipped with a 3x retry policy and a 2-second backoff to handle transient network drops.

Strict Human-in-the-Loop Governance: Never commits uncleared or flagged music automatically; execution safely halts until a supervisor validates the generated clearance packet.

Embedded Master Canvas Guide: Includes 4 color-coded master documentation stickies directly inside the workflow covering node maps, credential mapping, and troubleshooting steps.

Production-Grade Audit Trail: Approved licenses trigger automatic JSON archive generation in Google Drive alongside an append-only ledger record in Google Sheets for legal compliance.

Estimated Setup Time: 25–40 minutes from import to live execution.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Gmail Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
