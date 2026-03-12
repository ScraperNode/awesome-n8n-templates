# 🤖 Manage Google Calendar events with GPT-4o virtual assistant (Orchestrator)

> ⚡ **431 views** · 🤖 [AI Chatbots & Agents](../)

## Description

What this workflow does
-----------------------

Front-door **chat orchestrator** that delegates calendar requests to a separate **Sub-Agent** workflow which holds Google Calendar tools (Get, Create, Delete). Keeps the agent persona and memory in the Parent for clean separation of concerns.

**Pipeline:** Chat Trigger → Parent Agent ("Albert") → `sub_agent_cal` (Execute Workflow Tool) → Child Sub-Agent → Google Calendar

**Category:** Productivity / Calendar / Agentic\
**Time to set up:** ~10--15 minutes\
**Difficulty:** Intermediate\
**Cost:** Mostly free (n8n CE; OpenAI + Google Calendar usage as configured)

* * * * *

What you'll need
----------------

-   n8n with chat trigger enabled.

-   OpenAI credentials.

-   The companion template: **Agentic Google Calendar Assistant --- Sub-Agent (Calendar Tools)**.

-   After importing both, open this Parent and **re-select** the Sub-Agent in the `toolWorkflow` node.

* * * * *

Set up steps
------------

1.  **Import** this Parent workflow.

2.  **Import** the Sub-Agent workflow (Template B).

3.  In the Parent, open **`sub_agent_cal`** (Tool → Workflow) and select the imported Sub-Agent workflow.

4.  Ensure the **input mapping** passes:

    -   `chatInput` → `text`

    -   `sessionId` → `sessionid`

5.  Add your OpenAI credential to the **OpenAI Chat Model** node.

6.  Activate the Parent workflow.

* * * * *

Testing
-------

-   "**Create a meeting tomorrow 3--4pm called 'Product Sync'**" → Sub-Agent should create the event and the agent should confirm.

-   "**What's on my calendar this week?**" → Lists events.

-   "**Delete my 'Dentist' appointment on Thursday**" → Finds and deletes the event.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
