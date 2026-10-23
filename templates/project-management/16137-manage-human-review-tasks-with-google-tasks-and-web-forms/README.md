# 📋 Manage human review tasks with Google Tasks and web forms

> ⚡ **83 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow starts from a webhook, creates a Google Tasks item for a human to review a website, pauses for feedback via an n8n form, and then routes the result to an optional follow-up action (for example, adding to shortlist). Use task manager to manage human task backlog.

## How it works
1. Receives a webhook request to start the review process.
2. Sets (or maps) the website URL to be reviewed.
3. Creates a task in Google Tasks with a link to the n8n resume form so a reviewer can complete the check.
4. Pauses the execution and shows an n8n form that asks whether to add the website to the shortlist.
5. Checks the form response and, if the reviewer chose to shortlist, runs a follow-up step such as adding the item to a shortlist destination.

## Setup
1. Connect a Google Tasks OAuth2 credential and select the target task list ID for where tasks should be created.
2. Configure the inbound webhook path and copy the production webhook URL into the system that should trigger the workflow.
3. Replace the dummy website URL mapping with your real input data and define the condition and destination for the shortlist follow-up action (for example, Google Sheets).

## 🔗 Nodes Used

Webhook, Google Tasks

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
