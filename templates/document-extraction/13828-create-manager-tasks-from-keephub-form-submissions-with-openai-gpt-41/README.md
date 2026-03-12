# 🔬 Create manager tasks from Keephub form submissions with OpenAI GPT-4.1

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Who is this for

Organizations using Keephub for form management and task tracking. Perfect for HR teams handling employee requests (leave, equipment, onboarding), retail managers reviewing store submissions, or any workflow where form responses need manager follow-up.

### What it does

Transforms form submissions into intelligent, contextual tasks for managers—automatically.

When an employee submits a form, AI analyzes the data and generates a custom follow-up task with relevant fields, assigned directly to their supervisor.

Zero manual configuration per form.

### 📋 How it works

- Capture — Webhook receives new form submission from Keephub
- Identify — Fetches submitter profile and resolves their manager (parent org node)
- Analyze — AI reads form data + schema and designs contextual task
- Validate — Checks AI output for required fields and malformed data
- Create — Posts task to Keephub with proper targeting, dates, and permissions
- Link — Includes URL back to original submission for manager reference

### How to set up

**📦 Prerequisites:**

- n8n-nodes-keephub verified node (v1.5+) installed
- Keephub account with API access (Login + Bearer tokens)
- OpenAI API key (GPT-4.1 recommended)
- Knowledge of Keephub orgchart relations and groups

**Setup steps:**

- Install n8n-nodes-keephub from Community Nodes in n8n settings
- Create Keephub Login credential → connect to 4 blue nodes (Get Submitter, Get Parent Node, Get Root Node, Get Form Schema)
- Create Keephub Bearer credential → connect to "Create Task" node
- Create OpenAI credential → connect to "Design Task with AI" node
- Open ⚙️ Config node → set groupId to target specific user groups (find in Keephub admin)
- Activate workflow and copy webhook URL
- Configure webhook in Keephub form settings
- Test with a form submission and **n8n Webhook trigger**

## 🔗 Nodes Used

Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
