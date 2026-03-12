# ⚒️ Split test different agent prompts with Supabase and OpenAI

> ⚡ **8,113 views** · ⚒️ [Engineering](../)

## Description

## Split Test Agent Prompts with Supabase and OpenAI
### Use Case
Oftentimes, it's useful to test different settings for a large language model in production against various metrics. Split testing is a good method for doing this.
### What it Does
This workflow randomly assigns chat sessions to one of two prompts, the baseline and the alternative. The agent will use the same prompt for all interactions in that chat session.
### How it Works
1. When messages arrive, a table containing information regarding session ID and which prompt to use is checked to see if the chat already exists
2. If it does not, the session ID is added to the table and a prompt is randomly assigned
3. These values are then used to generate a response

### Setup
1. Create a table in Supabase called **split_test_sessions**. It needs to have the following columns: **session_id** (`text`) and **show_alternative** (`bool`)
2. Add your **Supabase**, **OpenAI**, and **PostgreSQL** credentials
3. Modify the **Define Path Values** node to set the baseline and alternative prompt values.
4. Activate the workflow and test by sending messages through n8n's inbuilt chat
5. Experiment with different chat sessions to test see both prompts in action

### Next Steps
- Modify the workflow to test different LLM settings such as temperature
- Add a method to measure the efficacy of the two alternative prompts

## 🔗 Nodes Used

Supabase, AI Agent, OpenAI Chat Model, Chat Trigger, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
