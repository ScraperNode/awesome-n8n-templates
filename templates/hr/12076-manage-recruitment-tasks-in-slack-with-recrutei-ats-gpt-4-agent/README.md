# 👥 Manage recruitment tasks in Slack with Recrutei ATS & GPT-4 Agent

> ⚡ **102 views** · 👥 [HR & Recruitment](../)

## Description

## Overview: Recrutei ATS - Ultimate Internal AI Agent

This workflow transforms Slack into a powerful command center for recruitment. Using an AI Agent (LangChain) integrated with the Recrutei ATS API and MCP, your team can manage candidates, vacancies, tags and a lot more directly through Slack messages.

## Key Features
* **Natural Language Processing:** Use GPT-4 to interpret complex requests like "Find candidates for the Python role and tag them as 'Senior'".
* **Candidate Management:** Create prospects, disqualify candidates, or move them between pipeline stages.
* **Vacancy Insights:** Add and read comments on vacancies directly from the chat.
* **Tagging System:** Create, list, and delete tags dynamically.

## Setup Instructions
1.  **Slack Trigger:** Connect your Slack account and invite the bot to your desired channel.
2.  **OpenAI:** Configure your API Key. This agent uses GPT-4o-mini (or GPT-4) for high-reasoning capabilities.
3.  **HTTP Request Tools:** Every "Tool" node (Pink nodes) needs your Recrutei API Token.
    * Replace the `Authorization` header with your `Bearer YOUR_TOKEN`.
    * Update the Base URL if necessary.
4.  **Slack Post:** Ensure the bot has permissions to write in the channel.

## 🔗 Nodes Used

Slack, AI Agent, OpenAI Chat Model, Simple Memory, Slack Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
