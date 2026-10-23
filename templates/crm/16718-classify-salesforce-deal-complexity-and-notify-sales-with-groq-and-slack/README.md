# 🤝 Classify Salesforce deal complexity and notify sales with Groq and Slack

> ⚡ **46 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow monitors new Salesforce opportunities, enriches them with related contacts and products, uses Groq-hosted LLM analysis to classify deal complexity, then updates Salesforce with a processed flag, creates a follow-up task, and posts the outcome to a Slack channel.

## How it works
1. Triggers when a new Opportunity is created in Salesforce.
2. Retrieves Opportunity details and checks whether the opportunity has already been marked as processed.
3. If it is already processed, posts a “no new opportunities” message to a Slack channel.
4. If it is unprocessed, fetches related Salesforce Contacts for the Opportunity’s Account and OpportunityLineItem records for the Opportunity.
5. Calculates simple deal metrics (stakeholder count, product count, and total product value) and sends them with Opportunity fields to a Groq LLM to classify complexity as Low/Medium/High with reasons and suggested actions.
6. Parses the LLM’s JSON response, marks the Opportunity as Processed__c = true in Salesforce, creates a Salesforce Task containing the classification details, and sends a success notification to Slack.

## Setup
1. Add Salesforce OAuth2 credentials and ensure your Opportunity object includes the Customization__c and Processed__c fields used by the workflow.
2. Update the Salesforce query filters (for example, the OwnerId condition and any field list) so the workflow selects the opportunities you actually want to process.
3. Add a Groq API credential and verify the selected model is available in your Groq account.
4. Add Slack OAuth2 credentials and select the target Slack channel for both the success and “no data” notifications.
5. Confirm your Salesforce org allows creating Tasks and that the Task “WhatId” can reference Opportunities in your setup.

## Requirements
- [n8n account login](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Salesforce account with `Processed__c` field (Boolean)
- AI provider (Groq or any LLM)
- Slack workspace
- API credentials configured

## Customization
- Modify Salesforce query fields
- Adjust AI prompt logic
- Change metric calculations
- Customize Slack messages

## Additional info
## Add-Ons

- Email alerts
- CRM dashboards
- Google Sheets logging
- Risk scoring
- Reminder workflows

## Use Cases

- Enterprise deal prioritization
- Sales automation
- Deal risk analysis
- Revenue forecasting
- Customer onboarding planning

## Troubleshooting

| Issue             | Cause                   | Solution               |
| ----------------- | ----------------------- | ---------------------- |
| No data processed | Already processed deals | Reset `Processed__c`   |
| AI parsing fails  | Invalid JSON            | Fix prompt             |
| Slack not working | Wrong config            | Reconnect Slack        |
| Missing data      | Wrong IDs               | Verify Salesforce data |

## Need Help?

If you need any help for setup or customization, contact our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia for expert n8n workflow support. We're happy to help.

## 🔗 Nodes Used

Slack, Salesforce, AI Agent, Salesforce Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
