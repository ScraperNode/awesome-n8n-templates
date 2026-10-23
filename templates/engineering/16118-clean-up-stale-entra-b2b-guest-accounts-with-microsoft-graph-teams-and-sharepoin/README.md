# ⚒️ Clean up stale Entra B2B guest accounts with Microsoft Graph, Teams, and SharePoint

> ⚡ **25 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs weekly to find inactive Entra ID (Azure AD) B2B guest accounts using Microsoft Graph sign-in activity, notifies each guest’s sponsor via Microsoft Teams, waits 72 hours, deletes the accounts, and logs successful deletions to a SharePoint list.

## How it works
1. Runs every Monday at 08:00 (server time) on a scheduled trigger.
2. Fetches all Entra ID guest users from Microsoft Graph (with pagination) including signInActivity metadata.
3. Filters guests whose last sign-in (or creation date if they never signed in) is older than the configured inactivity threshold.
4. If no stale guests are found, posts a completion message to a Microsoft Teams channel and stops.
5. For each stale guest, looks up the guest’s manager in Microsoft Graph and posts a deletion notice to a Microsoft Teams channel tagging the sponsor details.
6. Waits 72 hours, then deletes the stale guest account via Microsoft Graph.
7. If deletion succeeds, writes an audit record to a SharePoint list; if deletion fails, posts an error alert to Microsoft Teams and continues with the next guest.
8. Posts a final “run complete” summary to Microsoft Teams after all stale guests are processed.

## Setup
1. Create a Microsoft Graph OAuth2 credential in n8n with permissions to read users and sign-in activity, read user manager, delete users, and write to the target SharePoint list.
2. Create or choose a SharePoint site and list for audit logging, ensure the list has fields like GuestEmail, DisplayName, LastSignIn, SponsorNotified, DeletedAt, and DeletedBy, then set the SharePoint site ID and list ID in the Config values.
3. Add Microsoft Teams credentials (or ensure Graph-backed Teams access) and set the Team ID and Channel ID in the Config values for where notifications and summaries are posted.
4. Adjust the inactivity threshold (days) and response window (hours) in the Config values to match your governance policy and confirm the workflow timezone matches your intended schedule.

## Requirements
- Microsoft Entra ID app registration with the following application permissions granted and admin consent applied: User.Read.All, AuditLog.Read.All, User.ReadWrite.All, Directory.Read.All, Sites.ReadWrite.All
- Two credentials configured in n8n: a Generic OAuth2 credential using Client Credentials flow for Microsoft Graph API calls, and a Microsoft Teams OAuth2 credential for Teams notifications
- A SharePoint list named GuestAccountAuditLog with columns: GuestEmail, DisplayName, LastSignIn, SponsorNotified, DeletedAt, DeletedBy

## Customization
- Update the Config node with your SharePoint site ID, SharePoint list ID, Teams team ID, and Teams channel ID before activating
- Edit the Teams notification message in the Send Notification to Sponsor node to match your organization's tone and include any required policy references
- Replace the static channel destination with a dynamic lookup if your organization routes notifications to different channels per department or business unit
- To add human approval instead of time-based deletion, configure the Wait node to resume via webhook and build a companion workflow that calls the n8n resume endpoint when a sponsor responds

## 🔗 Nodes Used

HTTP Request, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
