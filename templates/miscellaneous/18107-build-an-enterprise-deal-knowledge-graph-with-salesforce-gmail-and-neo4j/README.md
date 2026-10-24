# 🔧 Build an enterprise deal knowledge graph with Salesforce, Gmail and Neo4j

> ⚡ **12 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs every 6 hours to pull Salesforce contacts, accounts, and opportunities, then fetches related Gmail messages and Google Calendar events, calculates per-contact engagement metrics, and writes a Neo4j knowledge graph with entities and relationships for deal and stakeholder analysis.

## How it works
1. Runs every 6 hours on a schedule.
2. Fetches Contacts, Accounts, and Opportunities from Salesforce and normalizes them into consistent records.
3. Builds a Gmail search query from the first 20 unique Salesforce contact email addresses and retrieves matching Gmail messages from the last 30 days, then normalizes the email metadata.
4. Retrieves Google Calendar events from a 30-day lookback to a 30-day lookahead window and normalizes them into meeting records with attendee details.
5. Combines the normalized Salesforce, Gmail, and Google Calendar data and builds a relationship profile per contact with engagement metrics and interaction history.
6. Converts the profiles into a graph payload (Contact, Account, Opportunity, Email, Meeting nodes plus edges like BELONGS_TO, OWNS, INVOLVED_IN, SENT_OR_RECEIVED, and ATTENDED).
7. Writes the nodes and then the relationships into Neo4j using the Neo4j Query API.

## Setup
1. Add credentials for Salesforce, Gmail, Google Calendar, and Neo4j (HTTP Basic Auth for the Neo4j Query API).
2. Replace the Neo4j Query API URLs in both Neo4j HTTP requests with your Neo4j AuraDB endpoint and database path.
3. Review and adjust the lookback/lookahead window and message/event limits in Set Workflow Config to match your data volume.
4. Ensure your Salesforce data includes populated Contact Email values, since these drive the dynamic Gmail search query.

## Additional info
## Add-ons

* Slack alerts for high-value deals
* AI-based stakeholder scoring
* CRM enrichment APIs
* Real-time webhook triggers instead of scheduler
* Dashboard integration (Metabase, Superset, etc.)


## Use Case Examples

1. Identify most engaged contacts across deals
2. Track full relationship history of an account
3. Analyze deal pipeline with weighted values
4. Discover inactive but high-value stakeholders
5. Visualize communication patterns across teams

There can be many more such use cases depending on how you extend the graph.


## Troubleshooting Guide

| Issue                              | Possible Cause            | Solution                                  |
| ---------------------------------- | ------------------------- | ----------------------------------------- |
| No Gmail data                      | Query not matching emails | Check **Build Gmail Query From Contacts** |
| No Calendar events                 | Wrong calendar_id         | Verify in **Get Calendar Events**         |
| Empty graph                        | Payload not generated     | Check **Build Graph Payload** output      |
| Nodes created but no relationships | Edge payload missing      | Verify **Write Relationships To Neo4j**   |
| Authentication errors              | Credentials not set       | Reconnect OAuth credentials               |
| Duplicate nodes                    | ID mismatch               | Ensure consistent ID format in payload    |


## Need Help

If you need help setting up, customizing or extending this workflow, feel free to reach out.

We can help you:

* Deploy this workflow in production
* Customize Neo4j schema and queries
* Add AI-driven insights
* Build dashboards and reporting layers
* Design enterprise-grade automation systems

Contact **WeblineIndia** to [hire n8n developers](https://www.weblineindia.com/hire-n8n-developers/) for professional support and custom workflow development.

## 🔗 Nodes Used

HTTP Request, Google Calendar, Salesforce, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
