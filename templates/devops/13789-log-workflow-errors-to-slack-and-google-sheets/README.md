# ⚙️ Log workflow errors to Slack and Google Sheets

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who’s it for
This template is for teams using **n8n** in production who want immediate visibility into workflow failures. It’s ideal for DevOps teams, automation engineers, and operations teams who need reliable error monitoring, alerting, and historical logs without building custom observability tooling.

---

## What it does / How it works
This workflow automatically captures and logs errors whenever any other n8n workflow fails.

**Here’s how it works:**

1. The **Error Trigger** node activates automatically when a workflow execution fails.
2. It captures key error details:
   - Workflow name  
   - Execution URL  
   - Last node executed  
   - Error message
3. A formatted alert message is generated.
4. The error summary is immediately sent to a designated **slack** channel for real-time visibility.
5. At the same time, the full error details are appended as a new row in a **Google Sheets** document for long-term tracking and analysis.

All of this runs automatically with no manual intervention.

---

## Requirements
To use this workflow, you’ll need:

- Slack API credentials  
- Google Sheets OAuth2 credentials  
- A Slack channel for workflow alerts (e.g. `#alerts-n8n-workflows`)  
- A Google Sheet with columns for:
  - Workflow name  
  - Execution URL  
  - Node name  
  - Error message  

---

## How to set up
1. Import this workflow into your n8n instance.
2. Connect your Slack credentials in the Slack node.
3. Select the Slack channel where alerts should be sent.
4. Connect your Google Sheets credentials.
5. Replace the Google Sheet ID with your own error log sheet.
6. Ensure the column mappings match your sheet structure.
7. Activate the workflow.

Once enabled, it will automatically monitor all workflows for failures.

---

## How to customize the workflow
You can easily adapt this template to your needs:

- Change the Slack message format in the **Set message** node.
- Log additional metadata (execution time, environment, tags, etc.).
- Add more notification channels (Email, PagerDuty, Microsoft Teams).
- Extend logging to databases or observability tools.

---

## Why use this template
- 🚀 Instant visibility into workflow failures  
- 🧠 Centralized error history for debugging and audits  
- 🔁 Fully automated, no manual checks required  
- 🛠️ Easy to extend as your automation stack grows  

This template helps you keep your n8n automations reliable, observable, and production-ready.

## 🔗 Nodes Used

Google Sheets, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
