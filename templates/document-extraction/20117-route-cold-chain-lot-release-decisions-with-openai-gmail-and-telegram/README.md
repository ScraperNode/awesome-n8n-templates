# 🔬 Route cold-chain lot release decisions with OpenAI, Gmail and Telegram

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Receives cold-chain excursion telemetry via webhook, enriches it via an external stability API, and uses OpenAI to extract facts and draft disposition rationales. It routes lots for release, review, quarantine, or disposal while archiving evidence to Google Drive, logging to Google Sheets, and alerting via Telegram and Gmail.

## How it works
1. Receives a POST webhook with lot and sensor time-series readings for a cold-chain excursion.
2. Sends the incoming payload to an external stability-envelope API to retrieve validated handling limits and supporting context.
3. Uses OpenAI to extract evidence-backed excursion windows and handling anomalies from the combined record.
4. Calculates a thermal-debt-based risk score from the temperature readings and assigns a disposition route (conditional release, QA review, or quarantine).
5. If the risk score meets the quarantine threshold, creates a deviation/quality case in an external QMS API; otherwise waits 30 minutes to allow additional QA evidence to arrive.
6. Uses OpenAI to draft a disposition rationale, then flags lots at or above the destroy threshold for leadership attention via Telegram and archives the final evidence JSON to Google Drive.
7. Appends an audit row to a Google Sheets log and emails the full disposition package via Gmail.

## Setup
1. Create the inbound webhook endpoint by activating the workflow and configure your IoT/telemetry source to POST to the generated /cold-chain-excursion URL.
2. Add OpenAI credentials for the information extraction and rationale drafting steps (model is set to gpt-5-mini).
3. Replace the placeholder API URLs (api.example.com) and configure authentication for your stability-envelope service and QMS/deviation system.
4. Connect Google Drive and set the target folder ID, then connect Google Sheets and replace the spreadsheet ID (and ensure a “Cold Chain Dispositions” sheet exists).
5. Connect Telegram and set the chat ID, then connect Gmail and update the recipient address used for the release package email.

## Requirements
- OpenAI API Key: Connect your OpenAI credentials to both the Provide Extraction Model and Provide Drafting Model nodes.
- QMS & Stability API Credentials: Provide Header Auth or API keys in the Fetch Stability Envelope and Create Quality Case HTTP Request nodes.
- Google Workspace Accounts: Connect Google Drive OAuth credentials for the Archive Excursion Evidence node and Google Sheets credentials for the Log Disposition Audit node.
- Notification Accounts: Set up Gmail OAuth credentials on the Email Release Package node and Telegram bot credentials on the Alert Quality Leadership node.
- Webhook Ingestion Source: An IoT gateway, data logger service, or test script configured to POST temperature telemetry JSON to the Receive Excursion Telemetry webhook endpoint.

## Customization
- Thermal Debt Calculation: Adjust the kinetic degradation formula, activation energy ($E_a$), and MKT thresholds inside the Compute Thermal Debt Score code node to match product stability data.Quarantine & Disposal Thresholds: Modify numerical cut-offs in the Check Immediate Quarantine and Check Destroy Threshold nodes based on your standard operating procedures (SOP).Investigation Hold Window: Adjust the duration in the Wait for QA Evidence Window node to align with internal deviation review timelines.Alternate Notification Channels: Replace Telegram and Gmail with Slack, Microsoft Teams, or PagerDuty for leadership alerts.Enterprise QMS Integration: Replace the sample REST endpoints with dedicated API connectors for platforms like Veeva Vault, TrackWise, or Jira.

## Additional info
Built-in Resilience: External API, LLM, and cloud storage nodes are configured with 3 retries (2-second interval) and continue on fail to preserve evidence traces.

Audit-First Design: Generates a structured audit trail across both Google Sheets and Google Drive, capturing raw telemetry alongside AI rationale.

Deterministic Decision Guardrails: Immediate quarantine and destruction routing rely entirely on hard mathematical logic; AI models are strictly scoped to telemetry summarization and narrative drafting.

Input Payload Format: Expects a JSON object containing lot metadata, lane details, and time-series sensor readings (lot_id, product_id, temperature_readings, etc.).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
