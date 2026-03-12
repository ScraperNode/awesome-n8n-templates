# 🤖 Manage Google Calendar events with OpenAI Assistant (Get, create, delete)

> ⚡ **538 views** · 🤖 [AI Chatbots & Agents](../)

## Description

What this workflow does
-----------------------

Provides the **tools layer** for the Parent agent to manage Google Calendar: **Get** (list events), **Create**, and **Delete**. Accepts `text` + `sessionid` from the Parent and uses an LLM with short-term memory to choose and run the correct tool.

**Pipeline:** Execute Workflow Trigger → Sub-Agent → (Get / Create / Delete) → Google Calendar

**Category:** Productivity / Calendar / Agentic\
**Time to set up:** ~10 minutes\
**Difficulty:** Intermediate\
**Cost:** Mostly free (n8n CE; OpenAI + Google Calendar usage as configured)

* * * * *

What you'll need
----------------

-   OpenAI credentials.

-   Google Calendar OAuth2 credentials.

-   A calendar ID (use a placeholder like `your.calendar@example.com` in the node and select your actual calendar at runtime).

* * * * *

Set up steps
------------

1.  Import this Sub-Agent workflow.

2.  Open the Google Calendar tool nodes (**Get**, **Create**, **Delete**) and **select your OAuth2 credential** and **calendar**.

3.  Ensure the **Execute Workflow Trigger** exposes two inputs: `text` and `sessionid`.

4.  Connect the Parent's `toolWorkflow` node to this workflow.

* * * * *

Testing (direct call example)
-----------------------------

-   From the Parent, send: "**Schedule 'Team Sync' tomorrow 10:00--11:00**" → Sub-Agent should call **Create**.

-   "**List events next week**" → **Get** with `timeMin`/`timeMax`.

-   "**Delete event 'Team Sync'**" → **Delete** with `eventId` once matched.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
