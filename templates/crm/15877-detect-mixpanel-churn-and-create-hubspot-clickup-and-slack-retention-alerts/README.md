# 🤝 Detect Mixpanel churn and create HubSpot, ClickUp, and Slack retention alerts

> ⚡ **28 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works
This workflow automatically detects at-risk customers by listening for inactivity signals from Mixpanel, scoring their churn risk, syncing everything to HubSpot, creating a prioritized ClickUp follow-up task, and alerting the customer success team on Slack — all without any manual effort.

## Step-by-step
- **Trigger & parse**
  - **Mixpanel Webhook** – Receives POST events from Mixpanel when a customer inactivity event is fired (e.g. `user_inactive_30_days`). Supports both single events and batch arrays.
  - **Parse Mixpanel Payload** – Normalizes the raw Mixpanel payload, extracting email, name, user ID, company, plan, MRR, inactive days, last active date, last feature used, total sessions, location, and CSM assignment. Skips records with no identifying information.

- **Event validation**
  - **Is Churn Event** – Confirms the event name matches `user_inactive_30_days`, has no parse errors, and includes a valid email before proceeding.

- **Risk scoring**
  - **Enrich User Data** – Calculates churn score (Medium / High / Critical) and task priority based on inactive days, sets a due date of 24 hours and a follow-up date of 3 days, and builds the alert subject line with risk level.

- **CRM lookup**
  - **HubSpot Find Contact** – Searches HubSpot for an existing contact by email, retrieving name, company, lifecycle stage, owner, lead status, and phone.
  - **Contact Found** – Routes to the full retention flow if a contact exists, or to a Slack fallback alert if no contact is found.
  - **Slack Contact Not Found** – Posts a Slack warning to the team for manual action when no HubSpot contact matches the churn event email.

- **Deal management**
  - **HubSpot Get Deals** – Fetches all deals associated with the found HubSpot contact via the CRM Associations API.
  - **Deal Exists** – Routes to update the existing deal or create a new one based on whether an associated deal is found.
  - **HubSpot Update Deal** – Updates the existing deal stage to `appointmentscheduled` and sets the close date to the follow-up date.
  - **HubSpot Create Deal** – Creates a new churn risk deal linked to the contact, with annual value (MRR × 12), deal name, and follow-up close date.
  - **Set Deal ID** – Normalizes the deal ID from either the update or create branch for consistent downstream use.

- **CRM logging & task creation**
  - **HubSpot Log Note** – Posts a detailed churn risk note on the HubSpot contact record linked to both the contact and the deal, including all churn signals and MRR data.
  - **ClickUp Create Task** – Creates a prioritized CS follow-up task with a full action checklist covering outreach, Mixpanel review, discovery call scheduling, and escalation criteria. Due within 24 hours.
  - **Slack CS Alert** – Posts a comprehensive churn risk alert to the CS Slack channel with customer details, revenue impact, churn signals, risk score, HubSpot links, and a full action checklist.

## Why use this?
- Automatically catches every at-risk customer the moment Mixpanel detects inactivity — no manual monitoring needed
- Three-tier risk scoring (Medium / High / Critical) ensures the CS team prioritizes the highest-value accounts first
- Keeps HubSpot fully in sync by creating or updating deals and logging churn risk notes directly on the contact record
- Auto-creates ClickUp tasks with a structured action checklist so every churn risk has an owner and a deadline
- Alerts the team instantly on Slack with full context — revenue, signals, CRM links, and next steps — so they can act within hours

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, ClickUp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
