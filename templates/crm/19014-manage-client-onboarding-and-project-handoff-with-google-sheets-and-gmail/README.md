# 🤝 Manage client onboarding and project handoff with Google Sheets and Gmail

> ⚡ **36 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Turn new clients into structured onboarding records, project handoffs, checklists, welcome emails, and internal team alerts using Google Sheets and Gmail. Includes duplicate detection, risk escalation, and a daily onboarding digest for small agencies.

## How it works
1. Receives new client details via a webhook endpoint.
2. Validates required fields, normalizes key values, and generates a client ID and project ID.
3. Reads the Clients and Onboarding Config tabs in Google Sheets to detect active duplicates and load default owners and kickoff/SLA rules.
4. Builds an onboarding plan that sets priority and kickoff target date, compiles a checklist, and flags risks like missing info, rush start dates, VIP services, or high budgets.
5. If an active duplicate is found, sends a duplicate-review email via Gmail and returns a JSON response indicating manual review is required.
6. If no duplicate is found, appends new rows to the Clients, Projects, and Onboarding Checklist tabs in Google Sheets, then emails the client a welcome message and the owner an internal handoff summary via Gmail.
7. If the onboarding is flagged as needing attention, logs the issue to the Onboarding Risk Log tab and sends a risk alert email to the project owner, while also returning a JSON response with the created status.
8. Every morning, reads active projects from Google Sheets, compiles a risk digest for overdue kickoff targets, long-running onboardings, or high-risk records, and emails the digest via Gmail when issues are found.

## Setup
1. Create a Google Sheets spreadsheet with the tabs Clients, Projects, Onboarding Checklist, Onboarding Config, and Onboarding Risk Log using the column headers expected by the workflow.
2. Add Google Sheets OAuth2 credentials in n8n and replace every REPLACE_WITH_GOOGLE_SHEET_ID value with your spreadsheet ID.
3. Add Gmail credentials in n8n and update the placeholder internal email addresses (for example, project-manager@example.com) to your real recipients.
4. Populate the Onboarding Config tab with keys like defaultProjectManager, defaultKickoffDays, rushKickoffDays, vipServices, and optionally highValueBudget.
5. Copy the webhook URL from n8n and configure your form/CRM/checkout tool to POST client intake fields to it.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
