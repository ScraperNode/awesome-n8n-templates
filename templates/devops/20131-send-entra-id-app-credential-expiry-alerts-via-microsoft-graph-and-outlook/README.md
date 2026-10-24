# ⚙️ Send Entra ID app credential expiry alerts via Microsoft Graph and Outlook

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily to scan Microsoft Entra ID (Azure AD) app registrations and enterprise apps via Microsoft Graph for expiring or recently expired client secrets and certificates, then sends an HTML summary alert through Microsoft Outlook and optionally notifies each app’s owners.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Fetches all app registrations and enterprise apps from Microsoft Graph, including password credentials and key credentials, using pagination.
3. Identifies client secrets, certificates, and SAML signing certificates that expire within the configured threshold (or expired within the lookback window) and optionally hides credentials that already have a newer rotated successor.
4. Looks up the owners for each affected application or service principal in Microsoft Graph and keeps the item even if the owner lookup fails.
5. Builds an HTML summary report with credential status, expiry date, owners, and direct links to the Entra admin center.
6. Sends the summary email to the configured IT/security recipients via Microsoft Outlook, and if enabled, sends a separate notification email to each app’s owners.

## Setup
1. Create a Microsoft Entra ID app registration/service principal with Microsoft Graph application permissions `Application.Read.All`, `User.Read.All`, and `Mail.Send`, and grant admin consent.
2. In n8n, add a Microsoft Entra Service Principal credential (tenant ID, client ID, and client secret or certificate) and use it for the Microsoft Graph HTTP requests and Microsoft Outlook send actions.
3. Ensure the sender mailbox exists and is allowed to send mail with the configured permissions (for example by restricting `Mail.Send` to that mailbox via an Exchange Online application access policy).
4. Update the configuration values for `thresholdDays`, `expiredLookbackDays`, `senderMailbox`, `adminRecipients`, and (optionally) enable `notifyOwners` before activating the workflow.

## Requirements
- A recent n8n version with the Microsoft Entra Service Principal credential
- An Entra app registration with the application permissions Application.Read.All, User.Read.All and Mail.Send (admin consent required)
- A mailbox to send the notifications from

## Customization
- Raise expiredLookbackDays (for example to 36500) to include all expired credentials.
- Set hideRotated to false to also list old credentials that already have a valid successor, which is useful for a cleanup.
- Set showAttribution to false to remove the template credit from the mail footer.
- Swap the Outlook nodes for Microsoft Teams, Slack or your service desk, for example one ticket per app.

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
