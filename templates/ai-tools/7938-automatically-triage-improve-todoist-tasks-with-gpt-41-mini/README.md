# 🎯 Automatically triage & improve Todoist tasks with GPT-4.1-mini

> ⚡ **644 views** · 🎯 [AI Summarization & Classification](../)

## Description

**How it works (high-level)**

This workflow automatically triages new tasks created in Todoist in the last 5 minutes.
It improves the task description, assigns a priority (P1–P4), and sets a realistic due date based on your current workload.

**Main flow steps**

- Schedule Trigger — runs at a chosen interval.
- Get many tasks (Todoist) — fetches all tasks created in the last 5 minutes.
- AI Agent (LLM) — receives the new task plus clear rules to:
- Rewrite the task description in an imperative style.
- Score and set the priority (1–4) using Impact × Urgency × Risk.
- Schedule a due date that respects workload and avoids overbooking.
- get_open_tasks — provides the agent with the full list of open tasks to check daily capacity.
- update_task — applies the improved description, chosen priority, and due date back into Todoist.

**Setup steps**
Time required: ~5-10 minutes.
- Configure Todoist credentials (API token) and OpenAI credentials in the respective nodes.
- Adjust the Schedule Trigger to how often you want the system to check for new tasks.
- Optionally, fine-tune the scoring and scheduling rules inside the AI Agent system prompt.

ℹ️ More detailed instructions, reasoning frameworks, and constraints are already included as sticky notes inside the workflow itself.

## 🔗 Nodes Used

Todoist, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
