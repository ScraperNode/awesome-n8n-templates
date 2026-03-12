# ⚒️ Evaluation metric example: RAG document relevance

> ⚡ **3,789 views** · ⚒️ [Engineering](../)

## Description

## AI evaluation in n8n

This is a template for n8n's [evaluation feature](https://docs.n8n.io/advanced-ai/evaluations/overview). 

Evaluation is a technique for getting confidence that your AI workflow performs reliably, by running a test dataset containing different inputs through the workflow.

By calculating a metric (score) for each input, you can see where the workflow is performing well and where it isn't.

## How it works

This template shows how to calculate a workflow evaluation metric: **retrieved document relevance** (i.e. whether the information retrieved from a vector store is relevant to the question).

The workflow takes a question and checks whether the information retrieved to answer it is relevant.

To run this workflow, you need to insert documents into a vector data store, so that they can be retrieved by the agent to answer questions. You can do this by running the top part of the workflow once.

The main workflow works as follows:

- We use an evaluation trigger to read in our dataset 
- It is wired up in parallel with the regular trigger so that the workflow can be started from either one. [More info](https://docs.n8n.io/advanced-ai/evaluations/tips-and-common-issues/#combining-multiple-triggers)
- We make sure that the agent outputs the list data from the tools that it used
- If we’re evaluating (i.e. the execution started from the evaluation trigger), we calculate the relevance metric using AI to compare the retrieved documents with the question
- We pass this information back to n8n as a metric
- If we’re not evaluating we avoid calculating the metric, to reduce cost

## 🔗 Nodes Used

Google Sheets, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Recursive Character Text Splitter, Simple Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
