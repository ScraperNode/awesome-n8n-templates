# 🔬 Analyze and chat with XML files using GPT and LangChain

> ⚡ **1,077 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## This workflow allows interactive conversation with the content of an XML file using OpenAI and LangChain. It fetches an XML feed from a specified URL, parses the XML, and enables an AI agent to respond to user queries based on the XML's structure and data.

## What It Does:
- Triggered via webhook or manual execution.
- Sets and fetches an external XML feed URL.
- Parses the XML into a readable format.
- Connects OpenAI GPT via LangChain for intelligent chat.
- AI agent answers questions like extracting nodes, attributes, or structure from the XML.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
