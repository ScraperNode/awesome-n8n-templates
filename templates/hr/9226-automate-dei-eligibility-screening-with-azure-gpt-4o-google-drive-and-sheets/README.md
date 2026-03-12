# 👥 Automate DEI eligibility screening with Azure GPT-4o, Google Drive and Sheets

> ⚡ **64 views** · 👥 [HR & Recruitment](../)

## Description

## Description
This workflow is designed to evaluate newly added CVs for Diversity, Equity, and Inclusion (DEI) eligibility. It automatically ingests CVs from Google Drive, extracts key fields, analyzes them with Azure OpenAI, logs structured DEI outcomes in Google Sheets, and sends a concise DEI-focused summary email to the hiring manager. The entire flow prioritizes consistent, auditable DEI checks and controlled logic paths.

## What This Template Does
- Watches Google Drive for new CV files to trigger DEI evaluation.
- Downloads and extracts text/structured fields from PDF CVs.
- Assesses DEI eligibility using Azure OpenAI, following defined criteria and prompts.
- Appends DEI results (eligible/not eligible, rationale, confidence) to Google Sheets for tracking.
- Generates and sends a DEI-focused summary email to the hiring manager for review.

## Key Benefits
- Standardized DEI screening to support equitable hiring decisions.
- Centralized, structured logging in Sheets for transparency and audits.
- Automated DEI summaries for faster, consistent manager review.
- Reliable routing with true/false logic to enforce DEI evaluation steps.

## Features
- Google Drive trigger (fileCreated) for CV intake tied to DEI checks.
- PDF extraction mapped to fields relevant for DEI evaluation.
- Azure OpenAI Chat Model prompts tuned for DEI criteria and rationale.
- Google Sheets append with eligibility status, notes, and timestamps.
- Email node that delivers DEI summaries and next-step guidance.
- Logic branching (true/false) to control DEI evaluation and notifications.

## Requirements
- n8n instance (cloud or self-hosted).
- Google Drive access to the CV intake folder.
- Google Sheets access for DEI results logging.
- Azure OpenAI access and configured prompts reflecting DEI criteria.
- Email node credentials to send DEI summaries to managers.

## Step-by-Step Setup Instructions
- Connect Google Drive and select the CV folder for the fileCreated trigger.
- Configure the Download CV and Extract From PDF nodes to capture fields needed for DEI checks.
- Add Azure OpenAI credentials and set DEI-specific prompts (criteria, rationale, confidence).
- Connect Google Sheets and select the target sheet; map columns for status, rationale, and timestamps.
- Configure the Email to Manager node with a DEI-focused subject and template.
- Test with sample CVs, verify sheet entries and email content, then enable the workflow.

## DEI-Focused Best Practices
- Clarify DEI criteria and document them in your prompt and sheet schema.
- Avoid including sensitive PII in emails; store only necessary fields for DEI decisions.
- Use n8n Credentials; never hardcode API keys or private data.
- Maintain an audit trail (timestamps, model version, prompt version, decision rationale).
- Periodically review prompts and sheet schema to align with policy updates.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
