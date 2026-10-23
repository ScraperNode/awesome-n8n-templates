# 🎫 Extract and route support tickets with Clocked Extract and Decide

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow takes raw support ticket text, uses Clocked (https://clocked.rezolve.ai/) to extract structured fields and classify the ticket, then applies validation and confidence rules to route the ticket to either an automated ITSM update path or a human review queue, saving audit outputs to files.

## How it works
1. Runs when you manually execute the workflow in n8n.
2. Loads a sample support ticket and a JSON extraction schema, then normalizes the ticket text while preserving the original source and timestamps.
3. Sends the normalized ticket text and schema to Clocked (https://clocked.rezolve.ai/) Extract and merges the extraction response back into the ticket context.
4. Parses and validates required extracted fields (including list fields and email format), and flags tickets that need human review.
5. Sends the ticket context and extracted fields to Clocked (https://clocked.rezolve.ai/) Decide to classify category and urgency and indicate if human review is required.
6. Applies a confidence threshold and rule checks to approve automated processing or route the ticket to human review, generating an audit record either way.
7. Writes the approved-path or review-path payload to a local JSON file, and optionally updates your ITSM ticket via an HTTP API request (disabled by default).

## Setup
1. Create and select an HTTP Bearer Auth credential for Clocked (https://clocked.rezolve.ai/) and confirm the Extract and Decide endpoints used in the two HTTP requests.
2. Replace the manual ticket input and the extraction schema with your own ticket source (or connect your helpdesk/ITSM trigger) and the fields you want Clocked (https://clocked.rezolve.ai/) to extract.
3. Review and adjust the validation rules and confidence threshold (set to 0.85) to match your automation risk tolerance.
4. Configure the human review destination by replacing the placeholder “Human Review Queue” step with your Jira/ServiceNow/Slack/email/database action.
5. If you want automatic ticket updates, configure and enable the ITSM HTTP request (URL, authentication, method, and body) for your ticketing system.
6. Update the local file paths for the two “Write Binary File” steps (or replace them with your preferred storage) to match your n8n host environment.

## Requirements
- Signup on Clocked (https://clocked.rezolve.ai/)

## 🔗 Nodes Used

Function, HTTP Request, Write Binary File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
