# ⚙️ Automated hourly n8n error monitoring with Slack notifications

> ⚡ **573 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who is this template for?

This template is ideal for n8n instance administrators, developers, and DevOps teams who need a proactive and organized way to monitor the health of their automations. If you want to be notified about failures as soon as they happen, without having to manually check execution logs, this workflow is for you.

## What does this template do?

This workflow automates error monitoring on your n8n instance. Every hour, it performs the following steps:

1.  **Queries the n8n API** to fetch all executions that have failed in the last hour.
2.  **Groups the errors** by workflow to consolidate the information.
3.  **Builds a rich message** for each failed workflow, including the error count.
4.  **Sends an alert to a Slack channel** with a **button to open the workflow** directly, allowing for immediate investigation.

## Requirements

Before you start, you will need to have the following configured in your n8n instance:

* **n8n API Credentials:** You need to generate an API key in your n8n instance settings so the workflow can query execution data.
* **Slack Credentials:** A configured **Slack (OAuth2 API)** credential to allow n8n to send messages to your workspace.

## How to set it up

Setup is simple and only takes a few minutes:

1.  **Config Node:** In the node named `"Config"`, you must set the value for the `baseUrl` to your n8n instance's URL (e.g., `https://n8n.yourdomain.com`). This is crucial for generating the correct workflow links in the Slack message.
2.  **Schedule Trigger:** The workflow is pre-configured to run every hour. You can adjust the frequency in this node to fit your needs.
3.  **"Get Failed Executions" Node (HTTP Request):**
    * Under *Authentication*, select 'Header Auth'.
    * In the *Credentials* field, select your n8n API credential.
4.  **"Post to Slack" Node (Slack):**
    * Select your Slack credential.
    * In the *Channel* field, enter the name of the channel where error notifications should be sent (e.g., `#n8n-alerts`).
5.  **Activate the Workflow!** After these steps, just activate the workflow to start the automatic error monitoring.

## How to customize the workflow

You can easily customize this template:

* **Change the Schedule:** Modify the `Schedule Trigger` node to run at different intervals (every 15 minutes, once a day, etc.).
* **Change the Notification Channel:** Instead of Slack, you can replace the last node to send notifications to Discord, Microsoft Teams, Telegram, or even by email.
* **Add More Information:** You can modify the `MakeMessage` node that generates the message to include more details about the errors, such as the error message or the exact time of failure.

## 🔗 Nodes Used

Slack, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
