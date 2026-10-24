# 🎫 Triage Microsoft 365 incidents into Jira with GPT-4o-mini, PagerDuty and Teams

> ⚡ **151 views** · 🎫 [Ticket Management & Triage](../)

## Description

**Manual incident triage kills your MTTR. This workflow automates the first response so your engineers get actionable tickets instead of raw alerts.**

This workflow takes unstructured incident reports from Microsoft 365 and turns them into structured Jira tickets with severity, affected systems, root cause hypothesis, and recommended actions. It analyzes impact, routes critical failures to PagerDuty, and posts clear summaries to Teams.

---

### How it works
The workflow operates in four synchronized stages:

The workflow runs in four stages:

1. **Reliable ingestion:** Webhook triggers and returns 202 Accepted immediately. This prevents the source system from timing out or sending duplicate retries while the AI processes the data.
Security and deduplication:

2. **Validation:** Checks webhook signatures and sanitizes input to block prompt injection.
Idempotency: Compares incident ID against a 1,000-event rolling window in staticData. No duplicate tickets for the same issue.

3. **AI analysis:** GPT-4o-mini analyzes the report. Extracts a title, assigns severity (P1-P4), identifies affected systems, generates root cause hypothesis and next steps. The Parse & Enrich node catches malformed AI output and fails gracefully into a "Manual Review" state.
Orchestrated response:

4. **Ticketing:** Creates a Jira Incident with mapped priorities and triage labels.
Escalation: Triggers PagerDuty for P1 and P2 incidents only.  	

5. **Visibility:** Posts an Adaptive Card to Teams with summary and direct link to the Jira ticket.

---

### Key Benefits
* Async handshake: 202 response prevents webhook timeout issues with Microsoft 365 and Teams.
* Deduplication: Idempotency gate blocks duplicate alerts from flooding your ticketing system and on-call engineers.
* Actionable output: Engineers get likely root cause and suggested actions, not just "system down" alerts.
* Audit trail: Every execution logs structured data for tracking AI accuracy, execution time, and incident patterns.

---

### Setup Steps
- [ ] **Credentials:** Add credentials for OpenAI (LangChain), Jira Software, PagerDuty, and Microsoft Teams.
- [ ] **Environment Variables:** Define `WEBHOOK_SECRET`, `JIRA_PROJECT_KEY`, `JIRA_DOMAIN`, `PAGERDUTY_SERVICE_ID`, and `PAGERDUTY_EMAIL`.
- [ ] **Jira Config:** Ensure your Jira project has the "Incident" issue type enabled and the priority levels match (Highest, High, Medium, Low).
- [ ] **Webhook Link:** Copy the n8n Production Webhook URL and paste it into your Microsoft 365 outgoing webhook settings or Teams app configuration.

---

### Who this is for
* **SRE & DevOps Teams:** Need to cut alert noise and automate first-line incident response.
* **IT Operations Managers:** Want audit trails for incident handling (SOC 2 compliance).
* **Managed Service Providers (MSPs):** Offering AI triage as a service to enterprise clients.

---

### Required APIs & Credentials
* **ITSM & Alerts:** Jira Software, PagerDuty.
* **Communication:** Microsoft Teams.
* **AI Provider:** OpenAI (GPT-4o-mini).

---

### How to customise it
* **Adjust Severity Logic:** Modify the "Severity Guide" in the AI Brain prompt to match your company's specific SLAs.
* **Swap Ticketing Systems:** Replace the Jira node with ServiceNow, Zendesk, or GitHub Issues.
* **Add Post-Mortem Prep:** Add a branch to automatically create a dedicated Slack or Teams channel and a Zoom/Teams bridge for P1 incidents.
* **Local LLM Option:** Swap the OpenAI node for **Ollama** if you prefer to run triage on your own infrastructure for maximum data privacy.

## 🔗 Nodes Used

Webhook, Jira Software, PagerDuty, Microsoft Teams, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
