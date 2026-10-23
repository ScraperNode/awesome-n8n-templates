# ⚒️ Manage QA CAPA lifecycle with Google Sheets, Gmail, and Google Gemini

> ⚡ **5 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow collects QA/QC audit findings via an n8n form, uses Google Gemini to assess severity and CAPA need, and then tracks CAPAs in Google Sheets while sending assignment, verification, closure, and rework notifications through Gmail.

## How it works
1. Receives a new QA/QC finding submission through an n8n form trigger.
2. Generates a unique finding ID, normalizes the submitted fields, and sends the finding details to Google Gemini to determine category, risk level, severity score, CAPA requirement, and recommended actions.
3. If CAPA is not required, appends the decision and rationale to a Google Sheets “No_CAPA_Log” tab for audit trail purposes.
4. If CAPA is required, creates a CAPA entry in the Google Sheets “CAPA_Log”, assigns an owner based on the department, calculates a due date based on assessed risk, and updates the CAPA record to “Assigned.”
5. Looks up the assigned owner’s email address from a Google Sheets “Owner_Directory” tab, sends a CAPA assignment email via Gmail, and logs the send status back to the CAPA log.
6. When the CAPA owner submits completion notes and evidence via a second n8n form, updates the CAPA record in Google Sheets to “Awaiting QA Verification” and emails the QA team to review the submission.
7. When QA submits a verification decision via a third n8n form, updates the CAPA record in Google Sheets to either “Closed” (and emails a closure notice) or “Rework Required” (and emails a rework request and logs the notification).

## Setup
1. Create and connect Google Sheets OAuth credentials, and ensure the spreadsheet contains the tabs and columns used by the workflow (CAPA_Log, Owner_Directory, and No_CAPA_Log, including matching keys like CAPA_ID and Department).
2. Add Google Gemini (Google AI) credentials for the assessment step.
3. Add Gmail credentials and replace placeholder recipients (for example, qa-team@example.com and capa-owner@example.com) with your real QA team and owner directory email addresses.
4. Populate the Owner_Directory sheet with Department-to-email mappings (for example, a CAPA_Owner_Email column) so assignments and rework notifications can be addressed correctly.
5. Publish the three n8n forms and share their URLs with your reporters, CAPA owners, and QA verifiers so each stage (finding, evidence, verification) can be submitted.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
