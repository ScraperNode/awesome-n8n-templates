# 💬 Build an IT support assistant chatbot leveraging existing support portal

> ⚡ **6,187 views** · 💬 [Support Chatbots](../)

## Description

### This n8n template demonstrates how you can leverage existing support site search to power your Support Chatbots and agents.

Building a support chatbot need not be complicated! If building and indexing vector stores or duplicating data isn't necessarily your thing, an alternative implementation of the [RAG](https://www.databricks.com/glossary/retrieval-augmented-generation-rag) approach is to leverage existing knowledge-bases such as support portals. In this way, document management and maintenance of your support agent is significantly reduced.

**Disclaimer: This template example uses AcuityScheduling's help center website but is not associated, supported nor endorsed by the company.**

### How it works
* A simple AI agent is connected with chat trigger to receive user queries.
* The AI agent is instructed to fetch information from the knowledge-base via the attached custom workflow tool (aka "knowledgebase tool").
* There is no step to replicate the entire support articles database into a vector store. You may choose not too because of time, cost and maintainence involved.
* Instead, the tool leverages the existing support portal's search API to retrieve knowledge-base articles.
* Finally, the search results are formatted before sending an aggregated response back to the agent.

### How to use?
* Customise the subworkflow to work with your own support portal API and format accordingly.
* Try the following queries
  * How do I connect my icloud to acuityScheduling?
  * How do I download past invoices for my Acuity account?

### Requirements
* OpenAI for LLM.
* If your organisation's APIs require authorisation, you may need to add custom credentials as necessary.

### Customising this workflow
* Add additional tools to reach other parts of your internal knowledgebase.
* Not using OpenAI? Feel free to swap but ensure the LLM has tools/function calling support.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
