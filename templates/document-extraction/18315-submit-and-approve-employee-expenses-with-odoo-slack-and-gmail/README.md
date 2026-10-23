# 🔬 Submit and approve employee expenses with Odoo, Slack, and Gmail

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives employee expense submissions via a webhook, validates the payload, creates an expense in Odoo, and immediately acknowledges the request. It then sends a Slack approval form to managers and, based on the decision, updates the Odoo expense status and notifies the employee via Gmail.

## How it works
1. Receives an expense submission via a POST webhook and normalizes fields like employee, vendor, amount, category, description, and receipt details.
2. Validates required fields and returns a 400 JSON response if the submission is incomplete or invalid.
3. Looks up the employee in Odoo (hr.employee) and returns a 404 JSON response if no matching employee record is found.
4. Looks up the expense category in Odoo (product.product) and creates an expense record in Odoo (hr.expense), returning a 202 JSON response with the created expense ID.
5. Posts a Slack message to the #expense-approvals channel with a custom approval form and waits up to two days for a manager decision.
6. If approved, updates the Odoo expense state to approved and emails the employee via Gmail; otherwise, marks the expense refused with the manager comment and emails the employee to resubmit.

## Setup
1. Create an Odoo API credential with access to hr.employee, product.product, and hr.expense, and verify your Odoo schema supports the mapped fields (for example, unit_amount and payment_mode).
2. Add a Slack credential with permission to post to #expense-approvals (or change the channel) and use interactive messages to collect the approval decision and comment.
3. Add a Gmail OAuth credential and ensure the workflow can email employees using the submitted employeeEmail field.
4. Copy the production webhook URL and configure your expense form/app to POST the expected JSON fields (employeeName/employeeEmail, vendor, amount, currency, category, description, and receiptUrl).

## 🔗 Nodes Used

Slack, Webhook, Gmail, Odoo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
