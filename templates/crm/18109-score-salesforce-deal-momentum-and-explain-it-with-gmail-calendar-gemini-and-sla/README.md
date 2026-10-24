# 🤝 Score Salesforce deal momentum and explain it with Gmail, Calendar, Gemini, and Slack

> ⚡ **11 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily to score Salesforce opportunities based on recent Gmail email activity and Google Calendar meetings, then uses Google Gemini to generate a brief momentum explanation and next action, updates custom fields in Salesforce, and posts a deal momentum update to Slack.

## How it works
1. Runs daily on a schedule and fetches all Salesforce opportunities.
2. Processes each opportunity individually, retrieves full opportunity details, and skips deals that don’t have a ContactId.
3. Pulls the related Salesforce contact record and skips deals where the contact email address is missing.
4. Searches Gmail and Google Calendar for the contact’s email activity over the last 14 days and converts the results into engagement counts and recency metrics.
5. Combines the engagement metrics with the deal data and calculates a momentum score, band, status, and key positive/negative drivers.
6. Sends the scoring output to Google Gemini to generate a short momentum reason and recommended next action, then parses the JSON response.
7. Updates the Salesforce opportunity with the momentum score, band, reasoning, and last-updated timestamp, posts the update to a Slack channel, and waits one minute before moving to the next deal.

## Setup
1. Add Salesforce credentials and create/map the Opportunity custom fields used for updates (Momentum_Score__c, Momentum_Band__c, Momentum_Reason__c, and Momentum_Last_Updated__c).
2. Add Gmail credentials and ensure the mailbox can search messages to/from your Salesforce contacts (the workflow looks back 14 days and excludes mailer-daemon).
3. Add Google Calendar credentials and select the calendar to search for events containing the contact’s email in the last 14 days.
4. Add Google Gemini credentials for the Gemini chat model used to generate the momentum explanation.
5. Add Slack OAuth2 credentials and set the target channel (or replace the existing channel ID) for momentum notifications.
6. Adjust the schedule time, the 14-day lookback window, and the one-minute pacing delay if needed to match your process and API limits.

## Additional info
## How To Customize Nodes

* Modify scoring logic in the "Calculate Momentum Score" node
* Adjust Gmail search query to refine email tracking
* Change Calendar query window for different meeting ranges
* Customize AI prompt in "Generate Momentum Reasoning" node
* Update Slack message format as per team preference
* Modify schedule timing based on business needs


## Add‑ons

* Add email notifications alongside Slack alerts
* Store historical momentum data in Google Sheets
* Add deal owner-based filtering
* Introduce priority alerts for high-value deals
* Integrate with CRM dashboards for visualization


## Use Case Examples

* Daily deal health monitoring for sales teams
* Identifying stalled deals requiring intervention
* Prioritizing high-momentum deals for closing
* Automating sales pipeline insights without manual tracking
* Enhancing CRM data with AI-driven explanations

There can be many more such use cases depending on business workflows.


## Troubleshooting Guide

| Issue                      | Possible Cause                   | Solution                                |
| -------------------------- | -------------------------------- | --------------------------------------- |
| No deals processed         | Schedule trigger not configured  | Verify trigger timing and activation    |
| Missing email/meeting data | Contact email not available      | Ensure ContactId and Email fields exist |
| AI output not parsed       | Invalid JSON from AI             | Check prompt and parsing logic          |
| Salesforce update fails    | Missing custom fields            | Verify field API names and permissions  |
| Slack message not sent     | Incorrect channel or credentials | Reconfigure Slack node                  |


## Need Help?

If you need assistance in setting up this workflow, customizing it for your business, or [building advanced automation solutions](https://www.weblineindia.com/process-automation-solutions.html), feel free to reach out to WeblineIndia. Our n8n automation team can help you design scalable and efficient workflows tailored to your needs.

## 🔗 Nodes Used

Slack, Google Calendar, Salesforce, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
