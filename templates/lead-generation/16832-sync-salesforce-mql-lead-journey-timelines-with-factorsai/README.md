# 🎣 Sync Salesforce MQL lead journey timelines with Factors.ai

> ⚡ **12 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs on a schedule to fetch new, unsynced Salesforce leads, pulls account journey activity from the Factors.ai API based on the lead’s email domain, and updates the lead in Salesforce with a formatted journey summary and sync/status fields.

## How it works
1. Runs on a schedule and loads the last successful run timestamp (defaulting to the last 7 days on first run).
2. Retrieves Salesforce leads created since the last run that match the defined criteria (Demo Request conversion type, not converted, and not yet Factors-synced).
3. Processes leads in batches and checks whether each lead has an email address.
4. For leads with an email, extracts the email domain, waits briefly, and calls the Factors.ai account journey endpoint for that domain.
5. Normalizes the Factors.ai response, searches the returned data for a valid email, and proceeds only when a valid email is found.
6. Updates the Salesforce lead with a formatted journey/activity summary and marks the lead as Factors-synced, or writes a status to Salesforce when the lead has no email or no matching email is found.
7. After all items are processed, commits the current run timestamp as the new last run time to avoid missing leads on partial failures.

## Setup
1. Add a Salesforce OAuth2 connection with permission to read and update Lead fields, including the custom fields used for status, sync flag, and journey summary.
2. Provide a Factors.ai API token and replace the Authorization header value in the HTTP request to the Factors.ai journey endpoint.
3. Ensure your Salesforce org has the referenced custom fields (for example, Factors_Synced__c, Factor_Lead_Journey_Summary__c, and Factors_Status__c) and adjust field mappings if your field API names differ.
4. Review and adjust the Salesforce lead filter conditions (CreatedDate window, Conversion_type__c value, and conversion/sync flags) to match your lead process and desired sync scope.

## 🔗 Nodes Used

HTTP Request, Salesforce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
