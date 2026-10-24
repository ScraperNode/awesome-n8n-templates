# 🤝 Generate Salesforce opportunity next steps with Gemini and Slack

> ⚡ **130 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs daily at 10:00 AM to find open Salesforce Opportunities with no Next Step, generates a recommended next action with Google Gemini, posts it to Slack, and updates the Opportunity’s Next Step field back in Salesforce.

## How it works
1. Runs every day at 10:00 AM on a schedule trigger.
2. Fetches all Salesforce Opportunities, reverses the list, and processes them in batches of 10.
3. Retrieves key fields, filters to opportunities that are not Closed Won/Lost, have a close date on/after today, and have a blank Next Step.
4. Builds a per-opportunity prompt containing the main deal details for an AI sales assistant.
5. Processes opportunities one at a time and uses Google Gemini to generate a 1–2 sentence next-step recommendation.
6. Posts the AI-generated recommendation to a specified Slack channel and updates the Opportunity’s Next Step field in Salesforce.

## Setup
1. Connect Salesforce OAuth2 credentials with permission to read Opportunities and update the Opportunity Next Step field.
2. Add Google Gemini (Google PaLM) API credentials for the Gemini chat model used by the agent.
3. Add Slack credentials and select the channel where recommendations should be posted.
4. Confirm your Salesforce Opportunity fields used in the prompt (for example DeliveryInstallationStatus__c) exist in your org or adjust the prompt accordingly.
5. Review or change the schedule time (daily at 10:00 AM) to match your timezone and preferred cadence.

## 🔗 Nodes Used

Salesforce, Schedule Trigger, Filter, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
