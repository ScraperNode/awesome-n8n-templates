# 🔬 Send weekly Microsoft 365 license waste reports via Microsoft Graph and Gmail

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This weekly workflow uses Microsoft Graph to audit Microsoft 365 license usage, calculates unused seats and potentially wasted spend, and emails an HTML report via Gmail with unassigned licenses, disabled-but-licensed users, and licensed users inactive for 30+ days.

## How it works
1. Runs every Monday at 8:00 on a schedule.
2. Calls the Microsoft Graph API to retrieve all subscribed Microsoft 365 SKUs for the tenant.
3. Calls the Microsoft Graph API to fetch up to 999 users with their assigned licenses, account status, and sign-in activity.
4. Analyzes the data to calculate unused paid seats per SKU, find disabled accounts that still have licenses, and detect licensed users who have not signed in for 30+ days.
5. Generates an HTML report and subject line that includes an estimated monthly waste amount.
6. Sends the report by email using Gmail.

## Setup
1. Create a Microsoft Entra ID app registration, grant Microsoft Graph application permissions (User.Read.All, Organization.Read.All, AuditLog.Read.All), and generate a client secret with admin consent.
2. Configure an OAuth2 credential in n8n for Microsoft Graph using client credentials and your tenant-specific authorize/token URLs and scope `https://graph.microsoft.com/.default`.
3. Add Gmail credentials and set the recipient address in the Gmail email step.
4. Update the per-seat price map and inactivity threshold (default 30 days) in the analysis code to match your licensing costs.
5. Ensure your tenant includes sign-in activity access (commonly requires Entra ID P1) if you want the inactive-user section populated.

## Requirements
- Microsoft 365 tenant with an Entra ID app registration (User.Read.All, Organization.Read.All, AuditLog.Read.All application permissions, admin consent) + Gmail credentials; last-sign-in data needs Entra ID P1

## Customization
- Set your real per-seat prices and the inactivity threshold (30 days) - they are constants at the top of the Analyze Licenses node; swap Gmail for Outlook/SMTP or post the report to Slack/Teams

## Additional info
The report catches three kinds of waste: paid seats assigned to nobody, licenses still held by disabled accounts (leavers nobody told you about), and licensed users inactive 30+ days - each with an estimated monthly dollar figure so the email is actionable, not just a list. Running an MSP with many client tenants? I build multi-tenant versions that loop over all your customers and reconcile against Pax8/distributor billing - contact links in my creator profile.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
