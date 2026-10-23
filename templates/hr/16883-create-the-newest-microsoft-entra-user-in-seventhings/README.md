# 👥 Create the newest Microsoft Entra user in Seventhings

> ⚡ **34 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow pulls user profiles from Microsoft Entra ID, selects the most recently created user, and creates a matching person record in seventhings with their name, email, and department.

## How it works
1. Starts manually (or via a trigger you replace) to initiate the sync.
2. Retrieves all users from Microsoft Entra ID with key profile fields like created date, name, email, and department.
3. Sorts the users by creation time to identify the newest account.
4. Keeps only the single most recently created user.
5. Creates a person in seventhings using the Entra user’s first name, last name, email (userPrincipalName), and department.

## Setup
1. Add a Microsoft Entra ID (Azure AD) OAuth2 credential with permission to read users.
2. Add a seventhings API credential for your seventhings instance.
3. Replace the manual trigger with your preferred trigger (for example, a schedule) if you want this to run automatically.
4. Check the results and see if the users are created.

## 🔗 Nodes Used

Microsoft Entra ID

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
