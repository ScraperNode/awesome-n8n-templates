# 💬 Trigger AI outbound calls from HubSpot and log call results with Vapi

> ⚡ **48 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow triggers on HubSpot contact events, fetches full contact details, validates and normalizes the phone number, starts an AI outbound call through Vapi, polls until the call ends, and then logs the call summary and recording URL back to HubSpot as a Call activity.

## How it works
1. Triggers on a HubSpot contact event and captures the contact ID.
2. Retrieves the contact’s full properties from HubSpot and extracts key fields like name, email, company, message, and phone.
3. Normalizes the phone number (US format) and stops the workflow if the number can’t be parsed into a supported format.
4. Creates an outbound call in Vapi and injects HubSpot contact details as assistant variables for personalization.
5. Waits briefly and then repeatedly fetches the call status from Vapi until the call status is marked as ended.
6. Creates a Call record in HubSpot with the call timing, AI-generated summary, and recording URL, associated to the original contact.

## Setup
1. Connect HubSpot credentials (HubSpot Developer account for the trigger and HubSpot OAuth2 for reading contacts and creating Call records).
2. Add an HTTP Bearer Auth credential with your Vapi API token.
3. In the Vapi call request, replace `assistantId` and `phoneNumberId` with your Vapi Assistant ID and Vapi Phone Number ID.
4. Ensure your HubSpot contact properties used by the workflow (firstname, email, company, message, phone and/or hs_calculated_phone_number, plus optional IP/source fields) exist and are populated.

## 🔗 Nodes Used

HTTP Request, HubSpot, HubSpot Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
