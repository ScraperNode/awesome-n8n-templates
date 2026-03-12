# ⚙️ Create unique Jira tickets from Splunk alerts

> ⚡ **2,711 views** · ⚙️ [DevOps & CI/CD](../)

## Description

The workflow is an automated process designed for incident management and tracking, specifically by integrating Splunk alerts with a Jira ticketing system using n8n. The initial step in the workflow is a Webhook Trigger, which is set up to receive POST requests with data from Splunk to initiate the workflow. Once the workflow is triggered, the "Set Host Name" node cleans up the hostname received from Splunk, ensuring that it is alphanumeric for consistency and security purposes.

Subsequently, the "Search Ticket" node interacts with Jira through a Jira Query Language (JQL) request to locate any existing issues that match the sanitized hostname. The workflow splits at the "IF Ticket Not Exists" node, which checks for the presence of a key indicating a matching issue.

If an issue exists, the workflow proceeds to add a comment to the identified issue, and if not, it creates a new Jira issue. At the false path, the "Add Ticket Comment" node appends a new comment to the existing Jira issue, encapsulating details from the Splunk alert, such as the timestamp and the alert description.

## 🔗 Nodes Used

Webhook, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
