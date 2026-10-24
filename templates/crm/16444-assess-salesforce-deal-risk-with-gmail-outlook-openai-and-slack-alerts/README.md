# 🤝 Assess Salesforce deal risk with Gmail, Outlook, OpenAI and Slack alerts

> ⚡ **39 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs every six hours to pull open Salesforce opportunities, enriches selected deals with Gmail and Microsoft Outlook email context, uses OpenAI to score deal risk, writes the assessment back to Salesforce, and notifies teams in Slack with optional email escalation for critical deals.

## How it works
1. Runs every 6 hours and queries Salesforce for up to 100 open Opportunities via the REST API.
2. Stops the run and posts a Slack message if the Salesforce fetch returns an error.
3. Normalizes each Opportunity, computes activity/close-date metrics, and routes deals with missing required fields to a Slack channel for manual data cleanup.
4. Applies a heuristic triage and immediately marks non-risky deals as healthy in Salesforce to avoid unnecessary AI analysis.
5. For triaged deals, pulls recent related messages from Gmail and Microsoft Outlook, merges them, and builds a compact email engagement context (participants, reply counts, and silence gap).
6. Sends the CRM and email context to OpenAI to produce a structured risk score, drivers, and recommended actions, then validates and cleans the AI output.
7. Updates Salesforce with the assessed risk fields and, for non-low risk deals, posts a detailed Slack alert (with cooldown suppression) and emails leadership when the risk level is Critical.

## Setup
1. Add Salesforce OAuth2 credentials, set the SALESFORCE_INSTANCE_URL environment variable, and ensure the Opportunity custom fields used for risk tracking (for example Risk_Score__c, Risk_Level__c, Risk_Summary__c, and Deal_Health__c) exist.
2. Add OpenAI credentials and confirm the selected model (gpt-4o-mini) is available in your OpenAI account.
3. Add Slack OAuth2 credentials and update the target channel IDs for Salesforce failure alerts, incomplete-deal alerts, and risk alerts.
4. Add Gmail OAuth2 credentials and Microsoft Outlook credentials (optional) so the workflow can retrieve deal-related email threads.
5. Set the LEADERSHIP_EMAIL environment variable (or edit the node default) to define where Critical-risk escalation emails are sent.

## 🔗 Nodes Used

HTTP Request, Slack, Salesforce, Gmail, Microsoft Outlook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
