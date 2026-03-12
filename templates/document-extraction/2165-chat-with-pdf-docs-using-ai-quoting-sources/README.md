# 🔬 Chat with PDF docs using AI (quoting sources)

> ⚡ **116,126 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow allows you to ask questions about a PDF document. The answers are provided by an AI model of your choice, and the answer includes a citation pointing to the information it used.

You can use n8n’s built-in chat interface to ask the questions, or you could customise this workflow to use another one (e.g. Slack, Teams, etc.)

### Example

The workflow is set up with the Bitcoin whitepaper. So you could ask things like:

*Question: “Which email provider does the creator of Bitcoin use?“*
*Answer: “GMX [Bitcoin whitepaper.pdf, lines 1-35]”*

### Requirements

1. A Pinecone account (they have a free tier at the time of writing that is easily enough for this workflow)
2. Access to a large language model (e.g. an OpenAI account)

### Customizing this workflow

The workflow only reads in one document, but you could customise it to read in all the documents in a folder (or more).

The workflow is set up to use GPT 3.5, but you could swap that out for any other model (including self-hosted ones).

## 🔗 Nodes Used

Google Drive, Basic LLM Chain, Embeddings OpenAI, OpenAI Chat Model, Structured Output Parser, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
