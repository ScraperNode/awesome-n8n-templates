# 🎫 Automate support ticket prioritization with Jotform, Gemini AI, ClickUp tasks

> ⚡ **213 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Automated Support Prioritization and AI Task Creation

This n8n workflow instantly captures support issues submitted via **Jotform** and efficiently **routes** them to the appropriate team and logging system based on the **severity level** defined by the customer. It then uses an **AI Agent (Google Gemini)** to transform the raw customer data into a clear, concise, and actionable task for the development team.

### Workflow Overview

1.  **Ingestion & Logging:** A new support ticket is received via **Jotform** and immediately logged into a **Google Sheet** as a central record.
2.  **Priority Assessment & Routing:** An **If** node checks the reported issue **Severity**.
    * **High/Medium Severity:** The ticket details are instantly sent to a dedicated **Slack** channel for immediate team attention.
    * **Low Severity:** The ticket details are sent via **Gmail** (acting as an internal email notification) to a support inbox, allowing for less immediate handling.
3.  **AI Processing:** An **AI Agent** summarizes the raw feedback into a clear, professional task description.
4.  **Task Creation:** The AI-generated task is automatically created in **ClickUp** for the development team to manage.

***

## Requirements

To implement and run this automated support workflow, the following accounts and credentials are required:

### 1. Service Credentials

* **Jotform API Key:** For the **Jotform Trigger** to receive real-time form submissions.
* **Google Sheets OAuth2/API Key:** To write data to the designated sheet.
* **Slack OAuth2/API Key:** To post messages to the target Slack channel.
* **Gmail OAuth2/API Key:** To send internal email notifications.
* **Google Gemini API Key:** To power the **AI Agent** for task summarization.
* **ClickUp API Key:** To create tasks in the target workspace.
**Sign up for n8n using:** [https://n8n.partnerlinks.io/pe6gzwqi3rqw](https://n8n.partnerlinks.io/pe6gzwqi3rqw)

### 2. External Configurations

* **Jotform Setup:** A form configured with fields for Name, Email, Issue, Description, and the crucial **Severity** field.
**Sign up for Jotform using:** [https://www.jotform.com/?partner=zainurrehman](https://www.jotform.com/?partner=zainurrehman)
* **ClickUp Setup:** The specific **Team, Space, Folder, and List IDs** must be configured in the **Create a task** node to ensure tickets are created in the correct project board.

## 🔗 Nodes Used

Google Sheets, Slack, ClickUp, Jotform Trigger, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
