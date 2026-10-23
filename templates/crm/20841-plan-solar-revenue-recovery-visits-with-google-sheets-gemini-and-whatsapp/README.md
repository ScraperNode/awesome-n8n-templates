# 🤝 Plan solar revenue recovery visits with Google Sheets, Gemini and WhatsApp

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/QH0AlnWC0sw?si=Ze4Kj0QfNike9iby

This workflow runs every morning and pulls solar project, visit, approval, parts, payment, and messaging history data from Sheets, uses Gemini to generate a revenue-unblocking dispatch plan, then validates it with guardrails, writes an action plan back to Google Sheets, and sends approved WhatsApp template messages.

## How it works
1. Runs on a schedule at 7:00 AM Monday through Saturday.
2. Loads configuration values and reads Sites, Scheduled_Visits, Utility_Approvals, Technicians, Payment_Milestones, Parts_Required, and Outbound_Log from Google Sheets.
3. Joins the sheet data into a single context that calculates readiness blockers (utility approval, parts ETA, customer availability), technician proximity, and blocked/overdue payment totals.
4. Sends the pre-computed context to Google Gemini to produce a structured plan including technician visits, office actions, deferred/cancelled visits, and outbound messages for customers, technicians, the utility officer, and the office.
5. Applies deterministic guardrails to remove invalid visits and suppress outbound messages that violate rules like utility/parts constraints, availability, capacity limits, cooldowns, and payment reminder caps.
6. Flattens the validated plan into rows and appends a daily record set (summary, visit plan, actions, messages, and guardrail notes) to the Action_Plan sheet in Google Sheets.
7. Resolves recipient phone numbers from Google Sheets and config, enforces dry-run routing when enabled, sends WhatsApp template messages, and logs send results to the Outbound_Log sheet.

## Setup
1. Create a Google Sheets workbook with the required tabs (Sites, Scheduled_Visits, Utility_Approvals, Technicians, Payment_Milestones, Parts_Required, Action_Plan, and Outbound_Log) and update the spreadsheet ID in the workflow config.
2. Add a Google Sheets Service Account credential with access to the spreadsheet and select it on all Google Sheets nodes.
3. Add a Google Gemini (Google PaLM) API credential for the agent’s chat model.
4. Add WhatsApp Business Cloud API credentials, set your WhatsApp Phone Number ID and approved template name/language in the workflow config, and ensure the template accepts one body parameter.
5. Fill in config values like send_mode (dry_run/live), test_phone, and office_phone, then activate the workflow and switch to live only after verifying the Action_Plan output and message logs.

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
