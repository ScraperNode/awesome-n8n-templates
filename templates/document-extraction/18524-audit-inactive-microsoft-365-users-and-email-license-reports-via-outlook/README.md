# 🔬 Audit inactive Microsoft 365 users and email license reports via Outlook

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs monthly to audit Microsoft 365 users via Microsoft Graph, identifies licensed accounts that have been inactive beyond a defined threshold, estimates reclaimable license cost, and emails either an Excel report with an HTML summary or an all-clear notice using Microsoft Outlook.

## How it works
1. Runs on a schedule on the 1st of the month at 7:00 AM.
2. Loads audit settings (inactive-day threshold, recipient, company name, and a license price map) and retrieves subscribed SKUs from Microsoft Graph.
3. Fetches all Microsoft 365 users from Microsoft Graph with pagination, including assigned licenses and sign-in activity.
4. Filters to enabled, licensed users whose last interactive or non-interactive sign-in is older than the threshold (or never), maps licenses to SKU part numbers, and estimates monthly cost using the configured price map.
5. If inactive licensed users are found, generates an Excel report and an HTML summary with total estimated monthly savings and top candidates.
6. Emails the report and summary to the configured recipient via Microsoft Outlook, or sends an all-clear email if no inactive users are found.

## Setup
1. Create a Microsoft Graph OAuth2 credential in n8n with permissions to read subscribed SKUs and user sign-in activity (e.g., Directory.Read.All and AuditLog.Read.All, plus User.Read.All as needed).
2. Add a Microsoft Outlook credential in n8n that can send email from the mailbox you want to use.
3. Update the configuration values for thresholdDays, reportRecipient, companyName, and the licensePrices JSON mapping to match your tenant’s SKU names and cost assumptions.

## Requirements
- Microsoft 365 tenant with API access
- Microsoft Graph API credentials (OAuth2)
- Microsoft Outlook integration with OAuth2 credentials
- n8n instance with HTTP Request, Set, and Email nodes enabled

## Customization
- Adjust the inactivity threshold by changing `thresholdDays` in the “Set Audit Configuration” node
- Update the report recipient by modifying `reportRecipient` in the configuration node
- Change your company’s displayed name in notifications via `companyName` in settings
- Modify per-license costs by updating `licensePrices` in configuration
- Add or remove columns in the generated Excel report in the “Build Excel Report” node
- Change report schedule by editing the “When Monthly on 1st at 7AM” schedule node

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
