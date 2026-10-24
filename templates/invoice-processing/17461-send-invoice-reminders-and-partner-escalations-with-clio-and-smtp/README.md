# 🧾 Send invoice reminders and partner escalations with Clio and SMTP

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs daily to fetch overdue invoices from Clio, assigns each invoice a reminder step based on days past due, and sends either compliance-checked client reminder emails or a 60+ day internal escalation alert to a managing partner via SMTP email.

## How it works
1. Runs every day at 8am to check for overdue invoices.
2. Fetches up to 200 overdue invoices from the Clio API.
3. Calculates days overdue for each invoice and selects only those that fall into reminder windows (days 1–2, 7–8, 14–15, 30–31, or 60+).
4. Skips processing when no invoices are due for a reminder today.
5. Routes invoices that are 60+ days overdue to an internal partner escalation path and emails the managing partner the invoice details and payment link.
6. Builds a client reminder email for day 1/7/14/30 invoices, runs a separate compliance/opt-out guardrail workflow, and sends the approved message to the client via SMTP.

## Setup
1. Set up Clio API access and add an HTTP Header Auth credential (Bearer token), then set the CLIO_BASE_URL variable (for example, https://app.clio.com or https://eu.app.clio.com).
2. Configure an SMTP email credential and set the sender address variable FIRM_FROM_EMAIL.
3. Create and activate the compliance guardrail workflow, then set GUARDRAIL_WORKFLOW_ID so this workflow can call it for opt-out checks and message/footer handling.
4. Add the firm-specific variables used in emails: FIRM_NAME, FIRM_EMAIL, FIRM_PARTNER_EMAIL, and (optionally) FIRM_PAY_LINK as a fallback when Clio share URLs are missing.
5. Adjust the schedule trigger cron expression if you want a different run time or frequency.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
