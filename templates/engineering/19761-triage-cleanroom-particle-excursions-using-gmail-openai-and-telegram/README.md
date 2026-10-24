# ⚒️ Triage cleanroom particle excursions using Gmail, OpenAI, and Telegram

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for cleanroom particle-counter excursion alerts, parses the email into structured measurements, uses OpenAI to classify severity, routes by zone criticality, and either logs minor events or runs an investigation sub-workflow that can trigger a tool-interlock API call and Telegram notifications.

## How it works
1. Polls a Gmail inbox every minute for messages from the particle monitor with “EXCURSION” in the subject.
2. Extracts Zone, Tool, Measured Count, ISO Class Limit, and Particle Size from the email text and calculates the exceedance ratio.
3. Sends the normalized excursion details to OpenAI (gpt-4.1-mini) to return a structured severity (Minor/Major/Critical) plus a shutdown recommendation.
4. Tags the record with a protocol tier based on cleanroom zone criticality (Support, Process, or Litho/EUV).
5. Logs Minor excursions directly to an n8n Data Table as “Logged - no investigation required.”
6. For non-Minor excursions, runs a separate n8n sub-workflow to perform the contamination/CAPA investigation and merges its outcome back into the record.
7. If a tool shutdown is required, calls an internal tool interlock HTTP API and alerts Facilities via Telegram, otherwise notifies EHS via Telegram.
8. Writes the final investigation/shutdown outcome (including CAPA ID when present) to an n8n Data Table for audit tracking.

## Setup
1. Connect credentials for Gmail Trigger, OpenAI, Telegram, and the HTTP Request authentication used by your tool interlock controller.
2. Import the companion contamination investigation sub-workflow and set its workflow ID in the Execute Workflow step.
3. Create or select an n8n Data Table for logging and set the Data Table ID in both logging steps.
4. Replace the Telegram chat IDs for Facilities and EHS and update the tool interlock API URL to your internal endpoint.

## 🔗 Nodes Used

HTTP Request, Telegram, Execute Sub-workflow, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
