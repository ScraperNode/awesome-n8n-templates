# 🎫 Automatically create Linear issues from Gmail support request messages

> ⚡ **1,203 views** · 🎫 [Ticket Management & Triage](../)

## Description

### This n8n template watches a Gmail inbox for support messages and creates an equivalent issue item in Linear.

### How it works
* A scheduled trigger fetches recent Gmail messages from the inbox which collects support requests.
* These support requests are filtered to ensure they are only processed once and their HTML body is converted to markdown for easier parsing.
* Each support request is then triaged via an AI Agent which adds appropriate labels, assesses priority and summarises a title and description of the original request.
* Finally, the AI generated values are used to create an issue in Linear to be actioned.

### How to use
* Ensure the messages fetched are solely support requests otherwise you'll need to classify messages before processing them.
* Specify the labels and priorities to use in the system prompt of the AI agent.

### Requirements
* Gmail for incoming support messages
* OpenAI for LLM
* Linear for issue management

### Customising this workflow
* Consider automating more steps after the issue is created such as attempting issue resolution or capacity planning.

## 🔗 Nodes Used

Gmail, Linear, Markdown, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
