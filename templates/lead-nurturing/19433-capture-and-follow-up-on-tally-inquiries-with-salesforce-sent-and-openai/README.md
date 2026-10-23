# 💬 Capture and follow up on Tally inquiries with Salesforce, Sent, and OpenAI

> ⚡ **5 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow triggers on new Tally form submissions, validates and stores each inquiry in Salesforce, resolves or creates a matching Lead/Contact, generates an internal brief with OpenAI, and sends an approved first-follow-up template via Sent when consent and a valid phone number are present.

## How it works
1. Triggers when a new Tally form submission is received.
2. Validates the submission against the expected form ID and mapped question IDs, normalizes key fields (email, phone, consent), and builds an inquiry snapshot.
3. Creates a Salesforce custom object record to atomically claim the submission and stops processing on replays or already-completed records.
4. Searches Salesforce for an existing Lead and/or Contact by email, then links the inquiry to the correct record or creates a new Lead when no match exists.
5. If the submitter consented and the phone number is valid, generates a short internal sales brief with OpenAI and saves it to the Salesforce inquiry record.
6. Sends an approved Sent message template to the submitter’s phone using an idempotency key, then writes the send outcome and final status back to Salesforce or raises a manual-review error when results are ambiguous.

## Setup
1. Create the Salesforce custom object (Tally_Inquiry__c) and required custom fields (including Submission_Key__c, Status__c, Inquiry__c, Result__c, Lead__c, and Contact__c) and ensure your Salesforce user can create and update them.
2. Add credentials for Tally, Salesforce, OpenAI, and Sent in n8n.
3. Update the “Form Mapping and Settings” values with your Tally form ID, each mapped question ID, the consent Yes/No values, the approved Sent template name, and set sandbox to the mode you want.
4. Ensure your Sent template is approved and matches the expected parameters (for example, first_name), and configure sandbox vs live behavior in Sent to align with the workflow setting.

## 🔗 Nodes Used

Salesforce, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
