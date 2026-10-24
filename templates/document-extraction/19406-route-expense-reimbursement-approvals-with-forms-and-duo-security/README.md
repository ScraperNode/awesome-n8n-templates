# 🔬 Route expense reimbursement approvals with forms and Duo Security

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
> A Duo Security Node Example Workflow
This workflow collects an expense reimbursement request via an n8n form and uses Duo Security Push authentication to get a manager’s explicit approval or denial, then routes the request to approved or rejected outcomes.

## How it works
1. The form collects the employee, expense description, amount, currency, date, and reference. Visible labels become the n8n output keys.
2. Set Approval Context preserves those submitted fields and adds the trusted manager username.
3. Check Manager Access calls Duo PREAUTH to check the manager account and available factors.
4. Request Manager Approval sends a synchronous Duo Push with safe expense context: reference, employee, amount, currency, and description.
5. Manager Approved? checks for an explicit Duo allow result and selects the approved or rejected branch.
6. Replace the outcome nodes with the finance, payroll, notification, or audit action used by your organization.

## Setup
1. Import the workflow and create a Duo Security credential with the Auth API integration key, secret key, and hostname.
2. Open Set Approval Context and replace `manager@example.com` with a trusted Duo username. Use a trusted employee-to-manager lookup in a real process.
3. Open the form URL and submit a non-production expense so the manager receives the Duo Push.
4. Confirm that Push Info contains only safe context, then approve or deny the request in Duo Mobile.
5. Replace the approved and rejected outcome nodes with your finance, payroll, notification, and audit actions before activation.

## Requirements
- A Duo Security Auth API application and credential.
- An enrolled Duo manager account.
- n8n with the Duo community node installed.
- A safe test expense and test finance destination.

## 🔗 Nodes Used

n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
