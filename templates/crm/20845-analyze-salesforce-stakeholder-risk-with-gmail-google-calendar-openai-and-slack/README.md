# 🤝 Analyze Salesforce stakeholder risk with Gmail, Google Calendar, OpenAI and Slack

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow monitors updated Salesforce opportunities, gathers related contacts plus Gmail and Google Calendar interaction history, uses OpenAI to assess stakeholder engagement gaps and risk, writes the results back to Salesforce custom fields, and posts a high-risk alert to Slack.

## How it works
1. Triggers when a Salesforce Opportunity is updated.
2. Retrieves the opportunity details and the associated Opportunity Contact Roles from Salesforce.
3. Calculates which stakeholder roles are expected based on the opportunity amount and stage, then compiles the customer contact emails/domains to search.
4. Searches the connected Gmail mailbox for emails involving the opportunity contacts and pulls events from a specified Google Calendar.
5. Normalizes email and meeting results into a single interaction list and combines it with opportunity context and contact details.
6. Sends the combined data to OpenAI (gpt-4o-mini) to generate a structured JSON stakeholder gap and risk analysis, then parses and validates the response.
7. Updates the Salesforce Opportunity with the risk status, score, engagement insight, last analysis timestamp, and missing stakeholder roles, and posts a Slack alert if the risk score is 61 or higher.

## Setup
1. Connect Salesforce credentials and ensure the Opportunity object has the custom fields used for output (Stakeholder_Engagement_Status__c, Last_Stakeholder_Analysis__c, Stakeholder_Risk_Score__c, Stakeholder_Engagement_Insight__c, Missing_Stakeholders__c).
2. Connect Gmail credentials for the mailbox you want to scan for messages with opportunity contacts.
3. Connect Google Calendar credentials and set the target calendar ID used to pull meeting events.
4. Add an OpenAI credential (configured in the OpenAI node) and select an available model (default: gpt-4o-mini).
5. Connect Slack credentials and set the destination channel for high-risk alerts.

## Additional info
## Customization Options

- **Custom Role Matrix**: Adjust threshold rules in the `Determine Expected Stakeholder Roles` node to match your company's sales methodology (e.g., requiring Procurement at $100k instead of $250k).
- **Alternative CRM Integration**: Replace Salesforce nodes with HubSpot, PipeDrive, or Dynamics 365 nodes.
- **Enhanced Communication Channels**: Expand interaction gathering by integrating Gong, Chorus, Microsoft Outlook, or Slack conversation nodes.
- **Threshold Tuning**: Adjust the alert sensitivity in the `IF High Stakeholder Risk` node (e.g., lower threshold to 50 for mid-market teams).


## Use Case Examples

- **MEDDPICC Alignment & Coverage Auditing**: Automatically verifies Economic Buyer and Champion participation prior to pushing deals to decision stages.
- **Enterprise Deal Slippage Prevention**: Identifies missing legal or procurement stakeholders early in contract negotiation stages.
- **Executive Oversight for High-Value Deals**: Flags large opportunities ($250k+) lacking C-suite or Executive Sponsor involvement.


## Troubleshooting Guide

- **Missing Contacts in Salesforce**: If zero contact roles are attached to an Opportunity, the workflow classifies all required roles as missing. Ensure AEs regularly populate Opportunity Contact Roles.
- **Gmail Search Limitations**: If search queries exceed character limits due to excessive contacts, the workflow falls back to default filters (`label:SENT`).
- **AI Formatting Errors**: The `Parse AI Analysis Response` and `Validate AI Analysis` code nodes catch malformed JSON outputs and enforce validation standards before updating Salesforce.


## Need Assistance?

WeblineIndia can help you with:

* n8n workflow customization
* [AI automation development](https://www.weblineindia.com/process-automation-solutions.html)
* OpenAI integrations
* Supabase and PostgreSQL setup
* Slack and business integrations
* Enterprise workflow automation
* AI-powered reporting systems
* Production deployment support

Whether you need workflow enhancements, custom dashboards, advanced AI integrations or entirely new automation systems, WeblineIndia can help build scalable solutions tailored to your business needs.

## 🔗 Nodes Used

Slack, Google Calendar, Salesforce, Gmail, OpenAI, Salesforce Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
