# 📖 Query business data from Cin7 ERP with OpenAI chatbot via Peliqan

> ⚡ **345 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

![Peliqan n8n template Cin7 AI Chatbot.png](fileId:2065)

## How it works

This template is an end-to-end demo of an in-house AI agent that can answer a wide range of questions by retrieving information from the Cin7 ERP system. For example users can ask questions related to products, stock, accounting or any other type of information contained in Cin7.

Peliqan.io is used as a "cache" of all Cin7 data. Peliqan uses one-click ELT to sync all data from Cin7 to the built-in data warehouse, allowing for fast & accurate queries. The AI agent uses Text-to-SQL to answer questions.

Text-to-SQL is performed via the Peliqan node, added as a tool to the AI Agent. The question of the user - in natural language - is converted to an SQL query by the AI Agent. The query is executed by Peliqan.io on the source Cin7 data and the result is interpreted by the AI Agent.


## Preconditions

* You signed up for a [Peliqan.io free trial account](https://app.eu.peliqan.io)
* You have a Cin7 Omni or Cin7 Core ERP system

## Set up steps

* Sign up for a [free trial on peliqan.io](https://peliqan.io)
* Add Cin7 Omni or Cin7 Core as a connection in Peliqan (using an API key from Cin7)
* Copy your Peliqan API key (in Peliqan go to Settings &gt; API key) and use it in n8n to add a Peliqan connection
* Select your data warehouse in the Peliqan node "Execute an SQL query via Peliqan" in the drop-down field "Data warehouse name or id"
* Optional: run the [template script](https://help.peliqan.io/build-ai-agents-with-n8n-and-peliqan#block-2401aa9b387980cf8b2ff069588dd3dc) in Peliqan that outputs your specific Cin7 datamodel (tables & columns). Copy your datamodel and paste it in the System Message of the AI Agent (replace the standard Cin7 model already present in this workflow)

Visit [peliqan.io/n8n](https://peliqan.io/n8n) for more information.
Need help ? Contact Peliqan at [support@peliqan.io](support@peliqan.io)

_Disclaimer: This template contains a community node and therefore only works for n8n self-hosted users._

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
