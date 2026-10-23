# 🧾 Send a daily cashwerk invoice summary report using the cashwerk API and SMTP email

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every morning at 08:00 to fetch up to 100 invoices from cashwerk, generate an HTML summary with totals and status counts, and send the report to a finance inbox via SMTP email.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Retrieves up to 100 invoices from cashwerk using the cashwerk API.
3. Builds an HTML report that totals invoice gross amounts, counts invoices by status, and lists the first 25 invoices.
4. Sends the HTML summary email with the current date in the subject line.

## Setup
1. Install the cashwerk community node (`n8n-nodes-cashwerk`) and create a cashwerk API key in cashwerk (Settings → API Platform).
2. Add your cashwerk API credentials in the cashwerk node used to fetch invoices.
3. Add an SMTP email credential and set the sender and recipient email addresses in the email-sending step.
4. Optionally adjust the schedule time and the invoice limit/filtering settings to match your reporting needs.

## 🔗 Nodes Used

Send Email, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
