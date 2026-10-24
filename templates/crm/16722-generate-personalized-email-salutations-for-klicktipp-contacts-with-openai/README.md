# 🤝 Generate personalized email salutations for KlickTipp contacts with OpenAI

> ⚡ **8 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow triggers when a contact is tagged in KlickTipp, uses OpenAI to generate an HTML-ready email salutation with a quality score, and updates the KlickTipp subscriber record with the salutation only when it meets a defined confidence threshold.

## How it works
1. Triggers when a contact is tagged in KlickTipp and receives the contact’s profile fields (name, email, company, and address data).
2. Sends the contact details to OpenAI to generate a JSON response containing an HTML-ready salutation plus language, style, and a salutation quality score.
3. Parses and validates the OpenAI response against a structured JSON schema.
4. Checks whether the generated salutation quality score is greater than 80.
5. Updates the contact in KlickTipp by writing the generated salutation into a configured custom field when the score passes the threshold.

## Setup
1. Add KlickTipp credentials and ensure the KlickTipp trigger for “contact tagged” is enabled for your account.
2. Add an OpenAI API key for the chat model used to generate the salutation.
3. In KlickTipp, create/identify the tag that should trigger this automation and configure it to call the n8n webhook URL from the trigger.
4. Create a KlickTipp custom field to store the salutation and update the workflow’s target field ID (e.g., field228722) if your field differs.
5. Adjust the quality threshold (currently >80) and salutation rules in the prompt if you want different languages, tone, or stricter filtering.

## 🔗 Nodes Used

Filter, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
