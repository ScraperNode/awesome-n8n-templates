# 🔒 Notify user in Slack of quarantined email and create Jira ticket if opened

> ⚡ **2,005 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow serves as an incident response and notification system for handling potentially malicious emails flagged by Sublime Security. It begins with a Webhook trigger that Sublime Security uses to initiate the workflow by POSTing an alert. The workflow then extracts message details from Sublime Security using an HTTP Request node, based on the provided messageId, and subsequently splits into two parallel paths.

In the first path, the workflow looks up a Slack user by email, aiming to find the recipient of the email that triggered the alert. If a user is found in Slack, a notification is sent to them, explaining that they have received a potentially malicious email that has been quarantined and is under investigation. This notification includes details such as the email's subject and sender.

The second path checks whether the flagged email has been opened by inspecting the read_at value from Sublime Security. If the email was opened, the workflow prepares a table summarizing the flagged rules and creates a corresponding issue in Jira Software. The Jira issue contains information about the email, including its subject, sender, and recipient, along with the flagged rules.

Issues that someone might encounter when setting up this workflow for the first time include potential problems with the Slack user lookup if the user information is not available or if Slack API integration is not configured correctly. Additionally, the issue creation in Jira Software may not work as expected, as indicated by the note that mentions a need for possible node replacement. Thorough testing and validation with sample data from Sublime Security alerts can help identify and resolve any potential issues during setup.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
