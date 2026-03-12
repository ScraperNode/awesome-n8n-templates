# 📋 Automate Figma versioning and Jira updates with n8n webhook integration

> ⚡ **6,059 views** · 📋 [Project Management](../)

## Description

**How It Works:**
This n8n template automates the process of tracking design changes in Figma and updating relevant Jira issues. The template is triggered when a new version is created in Figma via a custom plugin. Once the version is committed, the plugin sends the design details to an n8n workflow using a webhook.

**The workflow then performs the following actions:**
Fetches the Jira issue based on the provided issue link from Figma.
Adds the design changes as a comment to the Jira issue.
Updates the status of the Jira issue based on the provided task status (e.g., "In Progress", "Done").
This streamlines the workflow, reducing the need for manual updates and ensuring that both the design team and developers have the latest design changes and task statuses in sync.

**How to Use It:**
Set up the Figma Plugin:

Install the Figma Commit Plugin from GitHub.
In the plugin, fill out the version name, design link, Jira issue link, and the task status.
Commit the changes in Figma, which will trigger the webhook.

**Set Up the n8n Workflow:**
Import this template into your n8n instance.
Connect the Figma Trigger node to capture version updates from Figma.
Configure the Jira nodes to retrieve the issue and update the status/comment based on the data sent from the plugin.

**Automate:**
Once the version is committed in Figma, the workflow will automatically update the Jira issue and keep both your Figma design and Jira tasks in sync!
By integrating Figma, Jira, and n8n through this template, you’ll eliminate manual steps, making collaboration between design and development teams more efficient.

## 🔗 Nodes Used

Jira Software, Figma Trigger (Beta)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
