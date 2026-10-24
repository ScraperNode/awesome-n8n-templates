# 📋 Govern enterprise marketplace support actions with OSuite approvals

> ⚡ **62 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs on demand to preflight a high-value marketplace support action and send it to OSuite for governance review, then blocks, waits for approval, or proceeds to draft a safe internal refund-risk recommendation and records the final outcome in OSuite.

## How it works
1. Starts manually to create a structured enterprise support action request with risk, data classification, systems touched, and expected side effects.
2. Runs a local preflight that validates required fields, normalizes the risk score, and computes exposure level, blast radius, and a recommended control.
3. Stops with an intake-fix status if the request is incomplete, including the blockers and warnings to address.
4. Retrieves an OSuite runtime exposure snapshot and submits the planned work to OSuite for policy review with the preflight and decision context.
5. Builds an operator approval packet from OSuite’s response and stops immediately if OSuite blocks the action.
6. Checks OSuite to confirm whether the specific action ID has been approved, and stops in a waiting state until approval is granted.
7. After approval, drafts an internal-only refund-risk recommendation (no refunds or external messages) and records the completed outcome and artifacts back to OSuite.

## Setup
1. Add OSuite credentials in n8n and confirm the OSuite nodes can access your OSuite workspace.
2. Update the action intake fields (case ID, business goal, systems touched, data classification, destination boundary, and risk level) to match your real support/marketplace process.
3. Verify the OSuite agent/workflow identifiers used for review (agent ID/name and workflow ID) align with your OSuite configuration and policies.
4. If you plan to post the approval packet to Slack, add Slack credentials and replace the template’s internal draft step with a Slack message action targeting your approval channel.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
