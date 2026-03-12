# ⚒️ Custom LangChain agent written in JavaScript

> ⚡ **15,784 views** · ⚒️ [Engineering](../)

## Description

This workflow has multiple functionalities. It starts with a manual trigger, "When clicking 'Execute Workflow'", that activates two separate paths.

The first path takes a preset string "Tell me a joke" and processes it through a custom Language Learning Model (LLM) chain node. This node interacts with an OpenAI node for query processing.

The second path takes another preset string "What year was Einstein born?" and passes it to an "Agent" node. This agent further interacts with a Chat OpenAI node and a custom Wikipedia node to produce the required information.

The workflow uses both built-in and custom nodes, and integrates with OpenAI for both paths. It's built for experimenting with language models, specifically in the context of conversational agents and information retrieval.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 🔗 Nodes Used

AI Agent, LangChain Code, OpenAI Chat Model, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
