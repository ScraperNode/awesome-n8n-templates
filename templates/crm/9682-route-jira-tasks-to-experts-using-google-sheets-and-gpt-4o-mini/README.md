# 🤝 Route Jira tasks to experts using Google Sheets and GPT-4o-mini

> ⚡ **85 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Description 
Automatically assigns new tasks from an Excel/Google Sheets source to the best-fit employee based on expertise, then creates issues in Jira. Gain fast, consistent routing that reduces manual triage and speeds delivery. 🧠📊➡️🗂️

## What This Template Does 
- Fetches new task rows and related areas from Google Sheets/Excel.
- Analyzes each item with an AI Agent using Azure OpenAI.
- Selects the best-fit employee by matching the area to expertise stored in the sheet.
- Returns structured outputs (task, assignee, expertise, ID, bug/task) and creates the Jira issue.
- Applies rule-based handling for bugs vs tasks via a Switch node.

## Key Benefits 
⏱ Save time by automating task assignment from new entries.
🎯 Improve accuracy with expertise-based matching.
📋 Keep clean, structured outputs for downstream systems.
🔁 Seamless handoff from Sheets to Jira with no manual steps.

## Features 
- Google Sheets Trigger: Reads new task name and related area from the sheet.
- AI Agent (Azure OpenAI): Evaluates expertise fit and decides the best assignee.
- Structured Output Parser: Returns exactly five fields: task_name, assignee_name, expertise, employee_id, item_type (bug/task).
- Jira Create Issue: Creates issues in Jira using selected assignee and item type.
- Switch (Rules): Routes logic for bugs vs tasks for consistent categorization.

## Requirements 
- n8n instance: Cloud or self-hosted.
- Google Sheets access: Sheet containing employee roster with columns for Name, Expertise, and ID; connect credentials in n8n.
- Azure OpenAI (GPT-4o-mini): Configure the Azure OpenAI Chat Model credentials for the AI Agent.
- Jira credentials: Authorized account with permissions to create issues.
- Output Parser setup: Structured Output Parser configured to the five-field schema: task_name, assignee_name, expertise, employee_id, item_type.

## Target Audience 
🧩 IT Support and Ops teams routing incoming work.
🧭 Project managers orchestrating assignments at scale.
🛠 Engineering managers seeking consistent triage.
📈 Business operations teams automating intake to delivery.

## Step-by-Step Setup Instructions 
- Connect Google Sheets credentials and map the task and area fields; ensure roster columns (Name, Expertise, ID) are present.
- Add Jira credentials and set the Create Issue node to your target project and issue type.
- Configure Azure OpenAI (GPT-4o-mini) for the AI Agent and provide credentials.
- Import the workflow, assign all credentials, and align the Structured Output Parser to the five-field schema.
- Run a test with sample rows; confirm assignee selection and Jira issue creation; then enable scheduling.

## Security Best Practices 
- Use least-privilege API tokens for Google Sheets and Jira.
- Restrict sheet access to only required users and service accounts.
- Validate and sanitize incoming task data before issue creation.
- Store credentials securely in n8n and rotate them regularly.
- Log only necessary fields; avoid sensitive data in workflow logs.

## 🔗 Nodes Used

Jira Software, Google Sheets Trigger, AI Agent, Structured Output Parser, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
