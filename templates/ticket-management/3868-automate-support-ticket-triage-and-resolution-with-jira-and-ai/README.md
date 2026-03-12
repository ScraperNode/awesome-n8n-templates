# 🎫 Automate support ticket triage and resolution with JIRA and AI

> ⚡ **8,627 views** · 🎫 [Ticket Management & Triage](../)

## Description

### This n8n template automates triaging of newly opened support tickets and issue resolution via JIRA.

If your organisation deals with a large number of support requests daily, automating triaging is a great use-case for introducing AI to your support teams. Extending the idea, we can also get AI to give a first attempt at resolving the issue intelligently.

### How it works
* A scheduled trigger picks up newly opened JIRA support tickets from the queue and discards any seen before.
* An AI agent analyses the open ticket to add labels, priority on the seriousness of the issue and simplifies the description for better readability and understanding for human support.
* Next, the agent attempts to address and resolve the issue by finding similar issues (by tags) which have been resolved.
* Each similar issue has its comments analysed and summarised to identify the actual resolution and facts.
* These summarises are then used as context for the AI agent to suggest a fix to the open ticket.

### How to use
* Simply connect your JIRA instance to the workflow and activate to start watching for open tickets. Depending on frequency, you may need to increase for decrease the intervals.
* Define labels to use in the agent's system prompt.
* Restrict to certain projects or issue types to suit your organisation.

### Requirements
* JIRA for issue management and support portal
* OpenAI for LLM

### Customising this workflow
* Not using JIRA? Try swapping out the nodes for Linear or your issue management system of choice.
* Try a different approach for issue resolution. You might want to try RAG approach where a knowledge base is used.

## 🔗 Nodes Used

Jira Software, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
