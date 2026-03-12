# 📋 Generate lessons learned reports from Jira epics with AI and Google Docs

> ⚡ **7,216 views** · 📋 [Project Management](../)

## Description

### Who is this for?
Jira users who want to ****automate**** the generation of a **Lessons Learned** or **Retrospective** report after an Epic is Done.

### What problem is this workflow solving? / use case
Lessons Learned / Retrospective reports are often omitted in Agile teams because they take time to write. With the use of n8n and AI this process can be automated.

### What is this workflow doing
- Triggers automatically upon an Epic reaching the "Done" status in Jira.
- Collects all related tasks and comments associated with the completed Epic.
- Intelligently filters the gathered data to provide the LLM with the most relevant information.
- Utilizes an LLM with a structured System Message to generate insightful reports.
- Delivers the finalized report directly to your specified Google Docs document.

### Setup
1. Create a Jira API key and follow the Credentials Setup in the Jira trigger node.
2. Create credentials for Google Docs and paste your document ID into the Node.

### How to customize this workflow to your needs
- Change the System Message in the AI Agent to fit your needs.

## 🔗 Nodes Used

Jira Software, Jira Trigger, Google Docs, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
