# 🎫 Triage and escalate tenant complaints from Gmail or forms to Slack with Claude AI

> ⚡ **61 views** · 🎫 [Ticket Management & Triage](../)

## Description

### How it works
1. Complaints arrive via Gmail or a web form webhook
2. Claude AI classifies each complaint: fault category, priority (P1/P2/P3), tenant tone, and drafts an acknowledgement email
3. The right technician is looked up in Airtable by fault category
4. A work order is created and the tenant receives an ACK email with their ticket reference and SLA commitment
5. The FM team is notified in Slack with ticket summary
6. An hourly schedule checks open tickets — any past their SLA deadline trigger an urgent escalation to FM management


### How to set up
1. Connect Gmail to the **Gmail Trigger** and **Send ACK email** nodes
2. Create your Airtable base with a **Complaints** table and a **Technician** table (one row per fault category)
3. Connect Airtable, Anthropic, and Slack in their respective nodes
4. If using a web form, point it to the Webhook URL

## 🔗 Nodes Used

Airtable, Slack, Webhook, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
