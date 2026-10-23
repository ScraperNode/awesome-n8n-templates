# 🎣 Validate lead intake and route review outcomes with Code and Switch

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
For sales operations builders and n8n learners, this credential-free educational workflow demonstrates how to diagnose malformed or incomplete lead payloads before designing a CRM handoff. It runs nine fictional examples and produces explainable review decisions.

## How it works
1. Runs when you manually execute the workflow.
2. Generates nine synthetic lead examples with different edge cases (missing contact details, invalid email, duplicate IDs, malformed fields, and bad UTM values).
3. Uses JavaScript to normalize text fields, validate event IDs, emails, and phone numbers, and detect duplicate event IDs or emails within the current run.
4. Assigns each lead a status plus reason codes and normalized fields for explainable triage.
5. Routes each item by status into one of several review/hold paths using a Switch, with a fallback route for unexpected statuses.
6. Labels each routed item with a route decision so you can inspect the final outcome per lead in the respective branch.

## Setup
1. Import the workflow JSON into an isolated n8n instance and keep it inactive. Click Execute workflow to run the Manual Trigger.
2. Optionally edit Generate Synthetic Examples to add fictional cases covering the lead fields and edge cases you want to test.
3. Inspect Evaluate Lead Preflight for nine rows, then open the corresponding Decision: nodes and compare their statuses and reason codes. The default run produces two ready-for-review rows and one row in each of the seven other named branches. The fallback receives no default rows.

## Requirements
- Use the built-in Manual Trigger, Code, Switch, Edit Fields (Set), and Sticky Note nodes. Native import and execution were verified on n8n 2.42.7. No credentials, external accounts, or paid services are required.

## Customization
- Edit Generate Synthetic Examples to add fictional cases.

## Additional info
Duplicate checks reset each run. Email and phone checks validate format, not deliverability or ownership. The workflow makes no CRM writes or network requests and is not a production lead-handling integration. Native validation used CLI directory import on n8n 2.42.7; GUI import was not independently exercised.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
