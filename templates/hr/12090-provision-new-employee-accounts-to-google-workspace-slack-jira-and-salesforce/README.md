# 👥 Provision new employee accounts to Google Workspace, Slack, Jira, and Salesforce

> ⚡ **278 views** · 👥 [HR & Recruitment](../)

## Description

# Provision new employee accounts to Google Workspace, Slack, Jira, and Salesforce

This workflow streamlines the employee onboarding process by automatically provisioning user accounts across your organization's tech stack. By connecting HR input to IT operations, it eliminates manual data entry, reduces errors, and ensures new hires have access to the right tools from day one.

Depending on the employee's department, the workflow intelligently routes the provisioning process to create specific accounts (e.g., Jira for Engineering, Salesforce for Sales) alongside standard company-wide access.

## Who is it for
- **IT Administrators** looking to automate identity management and access provisioning.
- **HR Operations Managers** who want to speed up the onboarding handover process.
- **Startup Founders** needing a scalable way to manage new hire accounts without expensive SaaS management tools.

## How it works
1. **Data Intake:** The workflow is triggered by a Webhook (connected to a form like Typeform, Google Forms, or BambooHR) containing the new hire's details.
2. **Configuration:** A central "Set" node establishes global variables, such as the default temporary password, welcome email subject, and the main Slack channel ID.
3. **Core Provisioning:** It simultaneously creates a **Google Workspace** account and invites the user to a general **Slack** channel.
4. **Department Routing:** A generic logic switch checks the `department` field:
    - If **Engineering**: It creates a **Jira** user.
    - If **Sales**: It creates a **Salesforce** user.
5. **Notification:** Once all accounts are successfully provisioned, the workflow uses a generic email service (Gmail node) to send a welcome email to the new employee with their login details.

## How to set up
1. **Credentials:** You will need to configure credentials for the following nodes: Google Workspace Admin, Slack API, Jira Software, Salesforce, and Gmail (or your preferred email provider).
2. **Configuration:** Open the node named `⚙️ CONFIGURATION`. Update the `Slack_Channel_ID` (where new users are invited) and the `Default_Password` to match your company's security policy.
3. **Webhook:** Copy the Webhook URL from the start node and add it to your HR form or applicant tracking system.

## Requirements
- **n8n:** Version 1.0 or later recommended.
- **Access:** Admin privileges for Google Workspace, Slack, Jira, and Salesforce to generate the necessary API keys/tokens.

## How to customize the workflow
- **Add Departments:** Edit the "Check Department" Switch node to add routes for Marketing, Finance, etc., and connect them to relevant apps (e.g., HubSpot, Xero).
- **Change Notification:** Swap the Gmail node for Microsoft Outlook or Slack DM depending on how you notify managers.
- **Enhance Security:** Add a step to force a password reset on the first login if the identity provider supports it.

## 🔗 Nodes Used

Slack, Webhook, Jira Software, Salesforce, Gmail, Google Workspace Admin

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
