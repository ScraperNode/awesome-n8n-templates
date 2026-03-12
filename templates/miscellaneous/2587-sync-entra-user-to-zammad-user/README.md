# 🔧 Sync Entra user to Zammad user

> ⚡ **832 views** · 🔧 [Miscellaneous](../)

## Description

This workflow facilitates seamless synchronization between Entra (Microsoft Azure AD) and Zammad. It automates the following processes:

1. **Fetch Entra Group Members**: Retrieves users from a designated Entra group. These users are candidates for synchronization.
2. **Create Universal User Object**: Extracts key user information, such as email, phone, and name, and formats it for Zammad compatibility.
3. **Synchronize with Zammad**:
   - Identifies users in Zammad who need updates based on Entra data.
   - Adds new users from Entra to Zammad.
   - Deactivates users in Zammad if they are no longer in the Entra group.

## Key Features

- **Dynamic Matching**: Compares users from Entra with existing Zammad users based on email and updates records accordingly.
- **Efficient Management**: Automatically creates, updates, or deactivates Zammad users based on their status in Entra.
- **Custom Fields**: Supports custom field mapping, ensuring enriched user profiles in Zammad.

## Setup Instructions

1. **Microsoft Entra Integration**:
   - Ensure proper API permissions for accessing Entra groups and members.
   - Configure Microsoft OAuth2 credentials in n8n.

2. **Zammad Integration**:
   - Set up Zammad API credentials with appropriate access rights.
   - Customize the workflow to include additional fields or map existing fields as needed.

3. **Run Workflow**:
   - Trigger the workflow manually or set up an automation schedule (e.g., daily sync).
   - Review created/updated/deactivated users in Zammad.

## Use Cases

- **IT Administration**: Keep your support system in sync with the organization’s Entra data.
- **User Onboarding**: Automatically onboard new hires into Zammad based on Entra groups.
- **Access Management**: Ensure accurate and up-to-date user records in Zammad.

## Prerequisites

- Access to an Entra (Azure AD) environment with group data.
- A Zammad instance with API credentials for user management.
- A custom field in Zammad User Object (`entra_key`) of type `String`.

![Bildschirmfoto 20241201 um 13.56.37.png](fileId:870)

- A custom field in Zammad User Object (`entra_object_type`) of type `Single selection field with two key value pairs
  -  user = User
  -  contact = Contact`

![Bildschirmfoto 20241201 um 13.57.17.png](fileId:869)


---

This workflow is fully customizable and can be adapted to your organization’s specific needs. Save time and reduce manual errors by automating your user sync process with this template!

If you have found an error or have any suggestions, please report them here on [Github](https://github.com/Sirhexalot/n8n-Zammad-Sync-Entra-User-to-Zammad-User).

## 🔗 Nodes Used

HTTP Request, Zammad

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
