# 🎫 Predict SLA breach risk and escalate ServiceNow incidents with Slack alerts

> ⚡ **8 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Video Demo : https://youtu.be/rjEGRcFq2L0

This workflow polls ServiceNow every 15 minutes to estimate SLA breach risk for open incidents using recent resolution history, then escalates high-risk tickets in ServiceNow and alerts a Slack channel.

## How it works
1. Runs every 15 minutes on a schedule.
2. Fetches all active, unresolved incidents from ServiceNow and extracts key fields like sys_id, number, category, priority, and opened_at.
3. Groups incidents by category and priority, then for each group pulls the 20 most recent resolved incidents from ServiceNow to derive typical resolution time.
4. Calculates each open incident’s elapsed time and estimates breach probability as elapsed time divided by the historical average (with a default of 240 minutes if no history exists).
5. Limits the stream and checks whether the incident’s breach probability is greater than 70%.
6. For incidents above the threshold, updates the ServiceNow incident urgency, adds a work note documenting the auto-escalation, and posts an alert to a Slack channel.

## Setup
1. Add ServiceNow Basic Auth credentials with permission to read and update incidents, and confirm the instance/table access matches the incident resource used.
2. Add Slack credentials and set the destination channel for the breach-risk alert message.
3. Adjust the threshold (70%), default SLA minutes (240), and the ServiceNow query filters (active/state/category/priority) to match your SLA rules and ticketing process.

## 🔗 Nodes Used

Slack, ServiceNow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
