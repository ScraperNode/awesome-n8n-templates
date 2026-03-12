# 💬 Route and reassign leads with SLA using Google Sheets and Slack

> ⚡ **14 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Lead-Routing-Engine-with-SLA-Auto-Reassignment

This repository contains an SLA-based lead routing workflow built in n8n, designed to ensure fast lead response, fair sales distribution, and controlled escalation without relying on a full CRM system.

The workflow focuses on routing discipline and operational safety, not feature completeness.

## What This Workflow Does

At a high level, the system:
1) Accepts new leads from a generic intake form
2) Assigns leads to sales reps using round-robin
3) Enforces a response SLA
4) Automatically re-routes uncontacted leads
5) Allows sales to mark leads as CONTACTED via Slack
6) Escalates to a manager once if SLA is repeatedly violated

## Architecture Overview

**Core Components**

1) n8n 
2) Google Sheets 
3) Slack

**Primary Data Stores**

1) sales_sheet (list of active sales reps)
2) lead_sheet (lead state and routing history)
3) routing_state_sheet (global routing + escalation flags)

## End-to-End Flow

A) Lead Intake & Normalization

1) New leads enter via Form Trigger
2) Phone numbers are normalized to 62xxxxxxxx (Indonesia International Direct Dialing code)
3) A unique lead_id is generated
4) Lead is initialized with:
   - stage = NEW
   - route_count = 0

B) Initial Assignment (Round Robin)

1) Active sales reps are loaded from sales_sheet
2) Global last_index is read from routing_state_sheet
3) Lead is assigned to the next sales rep in sequence
4) Assignment metadata is stored:
    - assigned sales
    - timestamps
    - route count
5) last_index is updated centrally

C) Slack Notification (New Lead)

1) Assigned sales receives a Slack message
2) Message includes a “Mark as CONTACTED” button
3) SLA expectation is clearly communicated (1 hour by default)

D) SLA Monitoring (Scheduled)

1) A scheduled trigger runs every hour
2) Workflow scans leads where:
   - stage = NEW
   - SLA window has elapsed since last assignment

E) SLA Re-Routing

For each qualifying lead:
1) Lead is reassigned to the next sales rep
2) Route count is incremented
3) Timestamps are updated
4) Slack notification is sent to the new assignee

This process repeats until the lead is contacted or escalated.

F) Controlled Escalation

If route_count &gt;= threshold (default: 10):
1) Workflow checks escalation state (escalated_&lt;lead_id&gt;)
2) If not escalated yet:
   - Manager is notified via Slack
   - Escalation flag is written
4) If already escalated:
   - No further action is taken

Escalation is **one-time per lead.**

G) Stage Update via Slack (CONTACTED)

1) Sales marks a lead as CONTACTED via Slack button
2) Incoming Slack action is validated:
   - Only assigned sales is allowed
   - Only if current stage is NEW
3) Update is idempotent
4) Unauthorized or stale actions receive Slack feedback

**Once contacted:**
1) SLA routing stops
2) Lead remains stable

## Safeguards Built In

1) Ownership enforcement (Only the assigned sales rep can update a lead)
2) Idempotent stage transitions (Prevents duplicate or stale Slack actions)
3) One-time escalation (No notification spam)
4) Fail-fast behavior (Missing sales data or malformed payloads halt execution early)

## Google Sheets Schema

### `sales_sheet`

| Column   | Description     |
|----------|-----------------|
| name     | Sales name      |
| email    | Optional        |
| slack_id | Slack user ID   |
| active   | ON / TRUE       |

### `lead_sheet`

| Column         | Description           |
| -------------- | --------------------- |
| lead_id        | Unique identifier     |
| name           | Lead name             |
| phone          | Normalized phone      |
| stage          | NEW / CONTACTED / QUALIFIED / CLOSED LOST       |
| assigned_sales | Current owner         |
| sales_slack_id | Slack ID              |
| route_count    | Number of re-routes   |
| created_at     | Creation timestamp    |
| assigned_at    | Last assignment       |
| last_routed_at | Last SLA routing      |
| contacted_at   | When marked contacted |

### `routing_state_sheet`

| key                 | value                  |
| ------------------- | ---------------------- |
| last_index          | Last round-robin index |
| escalated_&lt;lead_id&gt; | Escalation timestamp   |


## Limitations (By Design)

1) Google Sheets is not transactional
2) SLA enforcement is time-bucketed, not real-time
3) No concurrency locking across parallel runs
4) Slack is required for interaction
5) This is not a CRM, only a routing engine

These constraints are explicit and intentional.

## When This Design Works Well

1) Small to mid-size teams
2) Human-response SLAs (minutes/hours)
3) Teams needing discipline, not heavy tooling
4) CRM-lite or pre-CRM environments

## When to Migrate

Consider migrating if you need:

1) High-volume ingestion
2) Sub-minute SLA guarantees
3) Strong transactional consistency
4) Advanced analytics or forecasting

The routing logic itself is portable to SQL or CRM systems.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
