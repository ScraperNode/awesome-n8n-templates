# 🎣 Score inbound form leads with OpenAI and send hot leads to Slack and Sheets

> ⚡ **31 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow collects n8n Form submissions, uses OpenAI (GPT-4o-mini) to score each lead from 1–10 with reasoning, posts hot leads (score ≥ 7) to Slack, and appends all scored leads to Google Sheets for tracking.

## How it works
1. Triggers when a new submission is received from an n8n Form.
2. Sends the submitted details to OpenAI (GPT-4o-mini) to generate a 1–10 lead score and brief reasoning.
3. Extracts the numeric score and reasoning from the OpenAI response and structures the lead record.
4. Checks whether the lead score is 7 or higher.
5. Posts a formatted hot-lead alert to a selected Slack channel when the score is 7+.
6. Appends the lead details, score, and reasoning to a Google Sheets spreadsheet for logging.

## Setup
1. Add an OpenAI credential for the OpenAI Chat Model node.
2. Add a Slack credential and replace the channel selection (e.g., the channel ID) used for hot-lead alerts.
3. Add a Google Sheets OAuth credential and set the target Spreadsheet ID and sheet/tab for logging.
4. Update the lead-scoring prompt text if you want different criteria or a different “hot lead” threshold.

## 🔗 Nodes Used

Google Sheets, Slack, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
