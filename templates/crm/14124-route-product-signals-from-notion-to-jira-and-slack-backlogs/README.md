# 🤝 Route product signals from Notion to Jira and Slack backlogs

> ⚡ **10 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Description
Route captured signals to the right destination with one click. Set a signal’s Route Destination in Notion, and this workflow automatically creates a Jira ticket, backlog item, or customer health entry, then confirms in the original Slack thread.
# Context
This is the action layer for the Signal Catcher. When you set a signal’s Route Status to “Routing” in Notion, this workflow picks it up, reads the Route Destination you selected, and executes the routing.
5 destinations are supported: Jira Bug, Jira Feature, RICE+ Backlog, Customer Health, and Sprint Backlog. After routing, it updates the signal status to “Routed” and replies in the original Slack thread to confirm.
# Who is this for?
•	PMs who triage signals and route to Jira or backlogs
•	Product Ops teams building end-to-end signal workflows
•	Engineering teams that need clean bug ticket creation
# Requirements
•	Notion account with Signal Stream database
•	Jira account (for bug/feature routing)
•	Slack Bot token
# How it works
- Trigger  Polls Signal Stream in Notion for entries where Route Status = “Routing.”
- Routing Engine  Reads signal details and routes via a 5-way switch based on your selected destination.
- Destination Actions  Creates Jira issue, backlog item, or customer health entry with full signal context.
- Closed Loop  Updates signal to “Routed” with a reference link. Replies in the original Slack thread.
# What you get
•	One-click signal routing from Notion
•	Automatic Jira ticket creation with full context
•	Slack thread confirmation for traceability
•	5 configurable routing destinations

## 🔗 Nodes Used

HTTP Request, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
