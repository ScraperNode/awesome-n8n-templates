# 🔒 Govern stale Entra ID guest accounts with SharePoint and Microsoft Teams

> ⚡ **914 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This template runs two scheduled workflows to govern Microsoft Entra ID (Azure AD) guest accounts by detecting stale users via Microsoft Graph, staging deletions in SharePoint with a 72-hour window, notifying sponsors in Microsoft Teams, and deleting overdue guests while auditing outcomes.

## How it works
1. The Scanner (Runs Weekly): Fetches all guest users using native Microsoft Graph API pagination.
2. Filters Stale Accounts: Identifies guests with no sign-in activity for over 90 days.
3. Stages Deletions: Writes new stale accounts to a SharePoint PendingGuestDeletions list with a 72-hour countdown.
4. Alerts Sponsors: Mentions the assigned manager in a Microsoft Teams message, warning them of the impending deletion.
5. The Executioner (Runs Daily): Queries SharePoint for records where the 72-hour countdown has expired.
6. Checks Exceptions: Verifies if the sponsor added the guest to a SharePoint GuestRetentionExceptions list.
7. Deletes & Audits: Safely deletes the Entra ID account (if not retained), updates the staging list status, and logs the final outcome to an Audit SharePoint list.

## Setup
1. SharePoint: Create three lists: PendingGuestDeletions, GuestRetentionExceptions, and GuestAccountAuditLog (ensure columns match the workflow JSON).
2. Azure AD: Create an App Registration with User.ReadWrite.All, AuditLog.Read.All, Sites.ReadWrite.All, and ChannelMessage.Send (Application permissions).
3. n8n Credentials: Connect your OAuth2 (Client Credentials) setup to the "MS Graph - Guest Governance" credential.
4. Configuration: Open the two Config nodes (Scanner and Executioner) and paste your SharePoint Site ID, List IDs, and Teams Team/Channel IDs.
5. Error Handler: Go to Workflow Settings and bind your preferred Error Handler workflow to catch API routing failures.

## Requirements
- Microsoft Entra ID (Azure AD) tenant
- Microsoft SharePoint (for database state management)
- Microsoft Teams (for sponsor alerts)
- Azure App Registration with Application-level Graph API permissions

## Customization
- Modify the inactivityThresholdDays (default 90) and responseWindowHours (default 72) in the Config nodes.
- Adjust the Teams message HTML payload to match your internal IT branding.
- Change the Cron triggers to match your specific IT operational cadence.

## Additional info
This template completely avoids the severe limitations of long-running 72-hour Wait nodes by decoupling the discovery and deletion phases into two distinct workflows bridged by a SharePoint database. Combined with native node pagination and built-in rate-limit retries, this engine is highly resilient and safe to run in massive enterprise tenants with tens of thousands of guest users.

## 🔗 Nodes Used

HTTP Request, Microsoft Teams, Schedule Trigger, Microsoft Entra ID, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
