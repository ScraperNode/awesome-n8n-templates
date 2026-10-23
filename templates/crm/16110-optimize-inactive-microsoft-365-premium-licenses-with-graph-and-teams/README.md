# 🤝 Optimize inactive Microsoft 365 premium licenses with Graph and Teams

> ⚡ **48 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs monthly to audit Microsoft 365 licensing via Microsoft Graph, identifies inactive users holding premium SKUs (excluding an exemption group and recent hires), optionally downgrades them to a baseline license, and posts a results summary to a Microsoft Teams channel.

## How it works
1. Runs on a monthly cron schedule at 06:00 on the 1st of each month.
2. Loads and validates configuration values (premium SKU part numbers, baseline SKU ID, inactivity/new-hire windows, exemption group ID, Teams destination, and dry-run mode).
3. Calls Microsoft Graph to list subscribed SKUs and builds a list of premium SKU IDs to target.
4. Retrieves members of a Microsoft Entra ID (Azure AD) security group to exclude them from license changes.
5. Fetches all enabled member users with assigned licenses from Microsoft Graph and filters for users who hold a premium SKU and have been inactive beyond the threshold (treating no sign-in history as inactive except for recent hires).
6. If no users qualify, posts a “no action required” audit message to the configured Microsoft Teams channel.
7. If users qualify, processes them in batches with a short wait between calls and either performs a dry run or uses Microsoft Graph assignLicense to remove premium licenses and add the baseline SKU per user.
8. Posts Microsoft Teams error alerts for failed license operations and sends a final Microsoft Teams summary listing the successfully processed accounts.

## Setup
1. Create a Microsoft Graph OAuth2 credential in n8n with permissions to read users and groups and to update user license assignments.
2. Update the Config values for baselineSkuId, exemptionGroupId, teamsTeamId, teamsChannelId, and (optionally) premiumSkuPartNumbers and the inactivity/new-hire thresholds.
3. Ensure the exemption group exists in Microsoft Entra ID and contains any users who must never be downgraded.
4. Connect Microsoft Teams credentials in n8n and verify the workflow can post to the target team and channel.
5. Set dryRunMode to true for testing, then disable it to allow live license changes.

## Requirements
- Microsoft 365 tenant with Azure AD Premium P1 or P2 (required for signInActivity data)
- App Registration in Entra ID with admin-consented application permissions: User.Read.All, AuditLog.Read.All, User.ReadWrite.All, Organization.Read.All, Directory.Read.All, GroupMember.Read.All
- Microsoft Graph OAuth2 credential configured in n8n and selected on the Fetch All Licensed Users node
- Microsoft Teams credential configured in n8n with access to the target team and channel
- An Entra ID Security Group populated with any accounts that should never be downgraded (break-glass, service accounts, executives)
- The skuId of your target baseline license plan (retrieve it by calling GET https://graph.microsoft.com/v1.0/subscribedSkus)

## Customization
- Adjust the cron expression on Monthly Schedule Trigger at 6am to match your preferred schedule and UTC offset.
- Update the Teams message templates in Notify No Downgrades Required, Alert License Error, and Deliver Summary to IT Manager to match your organization's tone and formatting standards.

## 🔗 Nodes Used

HTTP Request, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
