# 🔬 Route AI-scored approval requests with GPT-4o-mini, Supabase and Gmail

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects approval requests via an n8n form, uses OpenAI (GPT-4o-mini) to summarize and score risk, stores the request in Supabase, emails the right approver via Gmail with approve/reject links, then updates the Supabase record and notifies the requester by email.

## How it works
1. Receives a new approval submission from an n8n form with request details like type, title, amount, department, justification, and requester email.
2. Sends the request data to OpenAI (GPT-4o-mini) to generate a short summary plus a risk score, priority, and suggested approval level.
3. Chooses an approver email and approval level based on amount thresholds and the AI risk score, then combines the AI output with the original form data.
4. Creates a new row in the Supabase `approval_requests` table with the request details, AI fields, and a generated request ID set to `pending`.
5. Builds approve/reject URLs that point to a webhook and emails the approver via Gmail with the request summary and one-click action links.
6. Accepts the approver’s click on the approval webhook, updates the matching Supabase record to `approved` or `rejected` with audit details, and emails the requester the final outcome via Gmail.

## Setup
1. Add OpenAI API credentials and ensure the model selection (gpt-4o-mini) is available in your OpenAI account.
2. Add a Supabase credential and create an `approval_requests` table with columns that match the fields written by the workflow (for example request_id, status, approver_email, approval_level, ai_summary, risk_score, and priority).
3. Add a Gmail OAuth credential for sending emails to approvers and requesters.
4. Update the webhook base URL used in the approve/reject links to your n8n instance URL and ensure the `approve-action` webhook path is reachable from email recipients.
5. Replace the hardcoded approver email addresses (manager/finance_head/director) with real inboxes for your organization.

## Additional info
## How To Customize Nodes

### Easy Changes

- Form fields: Edit "New Approval Request Form" → add/remove fields
- AI rules: Modify prompt in "Analyze Risk Priority" node
- Amount thresholds: Update expressions in "Prepare AI Form Data"
- Approver emails: Change ternary logic in approver_email field
- Email templates: Edit HTML in Gmail nodes

### Advanced Customization

- Add Slack/Teams: Replace Gmail nodes
- Multi-approver: Add sequential webhooks
- Custom fields: Extend Supabase schema + form
- Reporting: Add cron trigger for dashboard data


## Add-ons

### Immediate Extensions You Can Try

- **Telegram notifications** (parallel to Gmail)
- **Slack channels** per department
- **Sequential approvals** (Manager → Director)
- **PDF generation** of approved requests
- **Weekly reports** to finance team

### Enterprise Features You Can Consider

- Role-based access via n8n RBAC
- Multi-tenant (separate Supabase schemas)
- Custom branding on forms/emails
- Integration with HRIS/Payroll systems


## Use Case Examples

- **Purchase Orders:** Laptops, software licenses, office supplies
- **Expense Approvals:** Travel, client dinners, training courses
- **Document Sign-off:** Contracts, proposals, policy updates
- **Internal Requests:** Vacation, equipment, remote work setup
- **Vendor Onboarding:** New suppliers, service contracts
- **Budget Reallocation:** Department transfers, project funding
- **Overtime Authorization:** Weekend work, emergency coverage


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :-- | :-- | :-- |
| Form not submitting | Workflow inactive | Activate workflow, use Production URL |
| AI returns plain text | Markdown parsing failed | Check "Extract AI JSON Response" code |
| Webhook 404 error | Test URL used | Activate workflow, copy Production webhook URL |
| Email not sending | Invalid OAuth2 | Reconnect Gmail credentials |
| Supabase insert fails | Missing table/columns | Run schema SQL exactly as provided |
| "Requester Email Valid?" skips | Empty `requested_email_by` | Fill email field in form |
| Wrong approver | Amount thresholds | Verify logic in "Prepare AI Form Data" |


## Need Help?

Our [n8n workflow developers at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/) can help you with:

- Custom approval workflows (multi-stage, conditional routing)
- Enterprise integrations (ERP, HRIS, accounting)
- White-label form builders
- Performance optimization for 10K+ daily requests

## 🔗 Nodes Used

Webhook, Gmail, Supabase, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
