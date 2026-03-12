# 🎫 Automatically assign Jira Service Management reporter from forwarded emails

> ⚡ **392 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Automatically Assign Jira Service Management Reporter from Forwarded Emails

This workflow solves a common problem in Jira Service Management: when an email is forwarded to create a ticket, Jira often sets the forwarding system (e.g., support@yourcompany.com) as the reporter, not the original customer. This template automates the process of parsing the original sender's details from the email body and correctly assigning them as the ticket's reporter.

If the customer doesn't exist in Jira, a new customer profile is created automatically before the ticket is assigned.

## What it Does
1.  **Triggers on New Issue**: The workflow starts when a new issue is created in a specified Jira project.
2.  **Filters Forwarded Emails**: An If node checks if the issue was created by one of your internal forwarding email addresses. The workflow only proceeds for these specific issues.
3.  **Parses Details**: A Code node uses regular expressions to parse the issue description (the forwarded email's body) and extract the original sender's name and email address.
4.  **Searches for Existing Customer**: An HTTP Request node checks if a customer with the extracted email already exists in your Jira Service Desk.
5.  **Creates New Customer**: If the customer is not found, another HTTP Request node creates a new customer profile in Jira Service Management.
6.  **Assigns Reporter**: Finally, a Jira node updates the issue's "Reporter" field to the existing or newly created customer, ensuring the ticket is correctly associated with the original sender.

## Use Cases
- **Shared Support Inboxes**: Automatically process emails sent to a general support inbox (e.g., `support@company.com`) that are then forwarded to Jira.
- **Departmental Forwarding**: Handle tickets forwarded from specific departments (e.g., `sales@company.com` or `billing@company.com`) and assign the original sender correctly.
- **Personal Email Forwarding**: Useful when a team member forwards a customer email from their personal inbox to the Jira Service Management-connected address.

## Customization
The `Parse Details From Description` node uses a regular expression (regex) to find the sender's email. The default regex is designed for standard forwarded emails that look like this:
`From: John Doe &lt;john.doe@example.com&gt;`

If your email client forwards emails in a different format, you may need to adjust the regex in the Code node. For example, if your format is `From: [john.doe@example.com]`, you would need to update the regex pattern to match this structure.

## Troubleshooting
- **Reporter Not Being Updated**:
    -   Verify that the forwarding email addresses in the `Filter Forwarding Emails` node are correct.
    -   Check the body of the Jira ticket's description to ensure the forwarded email content is present and in a format the regex can parse.
- **Customer Not Found/Created**:
    -   Ensure your Jira API credentials have the necessary permissions to search for and create customers in Jira Service Management.
- **Workflow Not Triggering**:
    -   Confirm that the Jira Trigger is correctly configured for the right project and that the webhook is active in your Jira instance.

## Requirements
- An n8n instance (self-hosted or cloud).
- Jira Software Cloud API credentials with Service Management permissions.

## How to Set Up
1.  **Connect Credentials**: In the Jira Trigger, Jira, and HTTP Request nodes, select your Jira Software Cloud API credentials.
2.  **Configure Trigger**: In the `Jira Trigger` node, select the Jira project you want this workflow to monitor.
3.  **Set Filter Emails**: In the `Filter Forwarding Emails` (If) node, replace the placeholder email addresses with the internal email addresses that forward mail to Jira.
4.  **Update Jira Domain**: In both HTTP Request nodes (`Search for Existing Customer` and `Create Customer`), replace the `YOUR_JIRA_DOMAIN` placeholder with your actual Atlassian domain (e.g., `my-company.atlassian.net`).
5.  **Activate Workflow**: Save and activate the workflow.

## 🔗 Nodes Used

HTTP Request, Jira Software, Jira Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
