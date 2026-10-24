# 🧾 Route invoice emails and owner digests from intake to Gmail and Slack

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs manually or every day at 9:00 to simulate an invoice intake batch, match invoices to customers, compose invoice email payloads, flag duplicates or unknown customers as owner alerts, and produce a single end-of-run digest summary.

## How it works
1. Runs when you click “Test workflow” or on a daily schedule at 9:00.
2. Loads a batch of invoice items from a demo intake source.
3. Looks up each invoice’s customer details from an inline customer table and marks duplicates so they are not processed twice.
4. For sendable invoices, composes an email payload with recipient, subject, body, and attachment filename.
5. For duplicates or unknown customers, creates an owner-facing alert message explaining why the invoice is not sent.
6. Aggregates the composed and alerted items into a single owner digest that reports counts and lists invoices needing attention.

## Setup
1. Set the schedule time in the daily trigger if 9:00 does not match your operating hours.
2. Replace the demo intake code with your real invoice source (for example, a folder watcher, email inbox trigger, or spreadsheet read).
3. Replace the inline customer table with your real customer directory (for example, Google Sheets or Airtable) and ensure it provides customer email addresses.
4. To send for real, add a Gmail or SMTP email node after the composed payload and map the to/subject/body/attachment fields, and optionally route owner alerts to Slack or email.

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
