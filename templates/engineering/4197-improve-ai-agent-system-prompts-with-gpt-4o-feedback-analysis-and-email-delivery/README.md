# ⚒️ Improve AI agent system prompts with GPT-4o feedback analysis and email delivery

> ⚡ **2,034 views** · ⚒️ [Engineering](../)

## Description

# AI Agent System Prompt 'Auto-Tuner'

 This workflow configures an AI agent which provides an edited system prompt for an autonomous AI agent Based on the following pieces of information provided by the user in an input form:

- Agent name
- Agent purpose
- What's working
- What's not working
- Current system prompt

There are two additional form elements that I've marked as non-required but if you want to force more detail from the user you can mark these as required:

- Example prompt
- Example output

This information gets sent to the AI agent which is configured with a system prompt of its own and the form elements are concatenated into a user prompt prompting the agent to evaluate the system prompt, deliver an improved version, and provide some notes for logging. The output structure is constrained with JSON. OpenAI 4o is recommended for its overall strong adherence to structured outputs.

Once the agent delivers its improved system prompt, this gets passed to the user via email notification. The final delivery stage can be alternated according to user preference 

## When This Is Useful

Anyone working on AI agent configurations will likely be familiar with the pivotal importance of the system prompt in directing the desired behavior of the agent. 

Frequently this requires long hours of iteration before a consistent desired behaviour is achieved.

Sometimes we can figure out what's working and not based on our own intuition and experience, but at other times soliciting the outside perspective of another AI tool can be a helpful way to consider alternative explanations or improve our own prompt engineering.  

This configuration is intended to speed up this iterative process and reduce the amount of time we spend working on system prompts to configure effective agent workflows

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
