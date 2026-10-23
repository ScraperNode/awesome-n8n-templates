# 🤝 Manage caller contacts, deals and callbacks with Placetel and Pipedrive

> ⚡ **18 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow exposes a Placetel webhook that routes voice-agent requests to Pipedrive to look up callers, create contacts, log callback or call activities, create deals, and report deal status, returning a short “speech” text for the agent to read back.

## How it works
1. Receives a POST webhook request from Placetel containing an `operation` plus call metadata.
2. Extracts the operation and normalizes the caller phone number (German format) from headers/body for consistent matching in Pipedrive.
3. Routes the request by `operation` to either search for an existing Pipedrive person, create a person, create a callback activity, fetch a deal, create a deal linked to the caller, or log the call as an activity.
4. For contact creation, creates a Pipedrive person with email when provided, otherwise creates the person without email to avoid validation errors.
5. Builds a structured response containing status fields (for example `found`, `created`, or IDs) and a `speech` string.
6. Returns the response to Placetel via the webhook response so the voice agent can speak the message to the caller.

## Setup
1. Add a Pipedrive credential in n8n and select it on all Pipedrive nodes.
2. Activate the workflow and copy the production webhook URL for the `POST /placetel-pipedrive` endpoint.
3. In Placetel, configure the voice agent tool to POST to this webhook URL and send an `operation` value (one of `check_customer`, `create_contact`, `create_callback`, `deal_status`, `create_deal`, or `log_call`) in the request body or query.
4. Ensure Placetel passes the caller number in a request header (for example `x-caller-number`) or in a body field like `phone`/`caller`, and include `%%caller_number%%` in your agent prompt if you use that pattern.
5. If you use `deal_status`, ensure the agent provides a valid `deal_id` (or `id`) in the request body.

## 🔗 Nodes Used

Pipedrive, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
