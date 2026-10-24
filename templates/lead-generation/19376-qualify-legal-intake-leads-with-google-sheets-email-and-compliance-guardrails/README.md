# 🎣 Qualify legal intake leads with Google Sheets, email, and compliance guardrails

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives intake form submissions via webhook, scores and routes leads using configurable keyword rules, logs every submission to Google Sheets, sends a compliance-checked auto-reply email, and alerts an attorney for hot leads, plus emails a weekly intake summary based on the log.

## How it works
1. Receives an intake form submission via a webhook.
2. Normalizes the submitted fields and scores the lead by matching the practice area against your configured list and scanning the description for urgent and disqualifying keywords.
3. Appends the lead details, fit score, routing tier, and timestamp to a Google Sheets “Intake Log” worksheet.
4. Builds a tier-appropriate auto-reply, runs it through a separate compliance guardrail workflow, and sends the email only when it is approved.
5. If the lead is scored as hot, builds an internal alert email, runs it through the compliance/audit workflow for logging, and emails the intake attorney.
6. On a weekly schedule, reads the intake log from Google Sheets, computes summary statistics for the lookback window, and emails the weekly intake quality summary to stakeholders.

## Setup
1. Create and configure an intake form to POST submissions to this workflow’s webhook URL.
2. Add Google Sheets credentials, set the INTAKE_LOG_SHEET_ID variable, and ensure the “Intake Log” sheet has columns that match the fields being appended (for example: name, email, phone, fit_score, routing_tier, submitted_at, practice_area).
3. Add SMTP email credentials and set sender/recipient variables such as FIRM_FROM_EMAIL, INTAKE_ATTORNEY_EMAIL (or FIRM_EMAIL), and FIRM_NAME.
4. Configure n8n variables for scoring rules (FIRM_PRACTICE_AREAS, URGENT_KEYWORDS, DISQUALIFYING_KEYWORDS) and weekly lookback (INTAKE_SUMMARY_LOOKBACK_DAYS).
5. Provide the GUARDRAIL_WORKFLOW_ID for the Execute Workflow steps so the compliance guardrail/audit workflow is available and can approve/log outgoing messages.

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
