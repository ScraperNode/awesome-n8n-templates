# ⚙️ Report workflow errors to Asana tasks with Google Chat and Grok 4.5 analysis

> ⚡ **16 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
When a monitored workflow fails, this reads its Description field to find the owning client and assignee, looks them up in Asana, analyses the error with Grok 4.5, and creates an assigned task with a severity-based due date. Repeat failures comment on the existing task.

## How it works
1. Any workflow that names this one as its error workflow triggers it on failure. There is no production trigger by design.
2. The error payload only carries a workflow ID, so an HTTP Request calls the n8n API to read that workflow's own Description field, which holds a small JSON object naming the client and the assignee.
3. Asana projects and users are fetched live and matched by name, so no GID is ever hardcoded. A failed match raises a warning that travels downstream instead of failing silently.
4. Asana is searched for an open task covering the same workflow and node. If one exists, a comment carrying the new execution ID is added rather than a duplicate task.
5. For a new error, Grok 4.5 via OpenRouter returns a root cause, a solution, concrete steps, a severity, and a category, held to a fixed shape by a structured output parser. Severity sets the due date: Critical today, High tomorrow, Medium in three days, Low in seven.
6. A Google Chat card carries the analysis and links to both the execution and the Asana task.

## Setup
1. Open the Configuration node and fill in your Asana workspace ID, your Google Chat webhook URL, your n8n base URL, and your timezone offset in hours.
2. Attach credentials to the five Asana nodes, the Get workflow metadata node, and the OpenRouter chat model node.
3. In every workflow you want monitored, open Settings > Description and paste {"client": "Your Asana project name", "assignee": "Person name"}. The client must match an Asana project name exactly, case-insensitive. The assignee can be a first name or a full name.
4. In the same workflow, open Settings > Error Workflow and select this workflow. Repeat steps 3 and 4 for every workflow you want covered.

## Requirements
- n8n API key with read access to workflows
- Asana account holding the target projects and users, plus your workspace ID from the Asana URL app.asana.com/0/{WORKSPACE_ID}
- Google Chat space with an incoming webhook
- OpenRouter API key with access to Grok 4.5, or any other model you prefer

## Customization
- Change the severity to due date map in Set due date from severity
- Swap the model in OpenRouter chat model for anything OpenRouter offers
- Add fields to Error analysis schema, then surface them in the task notes or the chat card
- Replace the two Send Google Chat nodes to route alerts to Slack, Teams, or email, keeping everything upstream unchanged

## Additional info
Duplicate detection matches on the task name [ERROR] WorkflowName - NodeName, which is unique per workflow and node, so no project filter is needed. Completing or deleting the task lets the next occurrence create a fresh one.

If the client or assignee in the Description does not match Asana, the task is still created, unassigned and outside any project, and the Google Chat card shows a Configuration warning naming the mismatch. Errors are never dropped because of a typo.

## 🔗 Nodes Used

Asana, HTTP Request, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
