# 🧾 Send staged invoice payment reminders with Microsoft SQL and Gmail

> ⚡ **52 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs daily at 9 AM to pull unpaid invoices from Microsoft SQL, send staged payment reminder emails via Gmail based on due date timing, update invoice status and an audit log in the database, and email an HTML summary report to the finance team.

## How it works
1. Runs every day at 9 AM on a schedule.
2. Queries a Microsoft SQL database for invoices with `PaymentStatus = 'Unpaid'` and checks whether any results are returned.
3. For each unpaid invoice, calculates the number of days until the due date and routes it to the matching reminder window (7 days before, 3 days before, due today, 1 day overdue, 7 days overdue, or 15 days overdue).
4. For invoices in each window, checks the current `ReminderStage`, composes the appropriate email content, and sends the reminder to the customer via Gmail.
5. After each email is sent, updates the invoice record with the new `ReminderStage` and `LastReminderDate` and inserts a `REMINDER_SENT` entry into a Microsoft SQL `AuditLog` table.
6. Merges all reminder results, aggregates them into a single list, generates an HTML summary report, and emails it to the finance address via Gmail.

## Setup
1. Create or confirm a Microsoft SQL database schema with an `Invoices` table containing the fields used in the query and updates (including `PaymentStatus`, `DueDate`, `ReminderStage`, and `LastReminderDate`) and an `AuditLog` table for inserts.
2. Add Microsoft SQL credentials in n8n and verify the connection details match the server hosting your `Invoices` and `AuditLog` tables.
3. Add Gmail OAuth2 credentials in n8n with permission to send mail from the account used for customer reminders and finance summaries.
4. Update the finance summary recipient email address in the final Gmail step and adjust the SQL queries and reminder email templates to match your invoice identifiers, currency, and business wording.

## 🔗 Nodes Used

Microsoft SQL, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
