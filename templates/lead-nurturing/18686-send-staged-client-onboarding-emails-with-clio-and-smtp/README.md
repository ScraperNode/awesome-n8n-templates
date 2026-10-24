# 💬 Send staged client onboarding emails with Clio and SMTP

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs daily and pulls open matters and firm users from the Clio API, calculates which onboarding stage is due based on each matter’s open date, builds a personalized onboarding email, runs a compliance/opt-out check via a sub-workflow, and sends approved messages via SMTP.

## How it works
1. Runs every day at 9am on a schedule.
2. Fetches the firm’s user directory and all open matters from the Clio API.
3. Splits matters into individual records, skips entries without a client email or open date, and calculates days since the matter opened to assign a stage for day 0, 1, 3, or 7.
4. Filters down to matters with a stage due today and stops cleanly when nothing is due.
5. Builds the stage-specific email content and personalizes the contact details by matching the responsible attorney ID to the Clio user list.
6. Calls a separate compliance/guardrail workflow to append the required footer and suppress sends for opted-out recipients.
7. Sends the approved onboarding email to the client via SMTP, otherwise skips suppressed recipients.

## Setup
1. Add a Clio OAuth2 credential and set the CLIO_BASE_URL n8n variable to your Clio instance base URL.
2. Create and configure the compliance/guardrail sub-workflow, then set its ID in the GUARDRAIL_WORKFLOW_ID n8n variable.
3. Add an SMTP credential for sending email and set FIRM_FROM_EMAIL for the sender address.
4. Set required firm variables such as FIRM_NAME and FIRM_EMAIL, and optionally configure FIRM_CLIENT_PORTAL_URL, FIRM_BILLING_EMAIL, FIRM_RESPONSE_TIME_DAYS, FIRM_PAYMENT_TERMS_DAYS, and FIRM_ONBOARDING_CHECKLIST.
5. Adjust the schedule (cron expression) if you want the daily check to run at a different time.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
