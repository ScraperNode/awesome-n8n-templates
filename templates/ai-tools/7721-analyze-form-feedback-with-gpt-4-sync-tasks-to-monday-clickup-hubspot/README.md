# 🎯 Analyze form feedback with GPT-4 & sync tasks to Monday, ClickUp & HubSpot

> ⚡ **179 views** · 🎯 [AI Summarization & Classification](../)

## Description

## How it works
This workflow automates customer feedback management by capturing reviews through a form, analyzing them with AI for sentiment and insights, and then creating structured tasks across Monday.com, ClickUp, and HubSpot. It ensures that customer concerns are categorized, prioritized, and assigned to the right teams with actionable metadata.

## Step-by-step

**Trigger & Input**

- The workflow starts when a customer submits the Feedback Form containing their Name, Message, Rating, and Product/Service.
 
- The submitted data is pre-processed with a Code node to cleanly extract fields for analysis.

**AI Analysis & Processing**

- The extracted review is sent to OpenAI GPT-4 for analysis.

- AI identifies sentiment, sentiment score, category (e.g., product, service, support, delivery, pricing), department, priority, required actions, keywords, and suggested response tone.

- A Data Processing node enriches the output with due dates, task titles, structured descriptions, and fallback handling in case of parsing issues.

**Structured Output Generation**

- An AI Agent and OpenAI Chat model transform the enriched data into a strict JSON format that is compatible with Monday.com, ClickUp, and HubSpot.

- This ensures consistent field order, formatting, and metadata for all downstream integrations.

**Task Creation in Platforms**

- The structured task data is automatically pushed to:

  - Monday.com → Creates an item in a specified board.

  - ClickUp → Creates a task with mapped fields and priority.

  - HubSpot → Creates an engagement task in CRM with due date and priority.

## Benefits

- Automates end-to-end customer feedback analysis and task creation.

- Ensures structured, AI-driven insights for actionable responses.

- Reduces manual work in categorizing and assigning reviews.

- Keeps customer feedback synchronized across multiple platforms (Monday.com, ClickUp, HubSpot).

- Improves response time by prioritizing high-impact feedback with due dates.

## 🔗 Nodes Used

HubSpot, ClickUp, Monday.com, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
