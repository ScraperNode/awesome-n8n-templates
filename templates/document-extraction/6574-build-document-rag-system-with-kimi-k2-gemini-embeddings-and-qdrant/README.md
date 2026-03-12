# 🔬 Build document RAG system with Kimi-K2, Gemini embeddings and Qdrant

> ⚡ **2,035 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![screenshot](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,w_auto/v1753700941/n8n-workflows/Screenshot_2025-07-28_at_12.04.01_bnaapr.png)

### Generating contextual summaries is an token-intensive approach for RAG embeddings which can quickly rack up costs if your inference provider charges by token usage.

[Featherless.ai](https://featherless.ai/?referrer=HJUUTA6M) is an inference provider with a different pricing model - they charge a flat subscription fee (starting from $10) and allows for unlimited token usage instead. If you're typically spending over $10 - $25 a month, you may find Featherless to be a cheaper and more manageable option for your projects or team.

For this template, Featherless's unlimited token usage is well suited for generating contextual summaries at high volumes for a majority of RAG workloads.

**LLM**: moonshotai/Kimi-K2-Instruct
**Embeddings**: models/gemini-embedding-001

### How it works
1. A large document is imported into the workflow using the HTTP node and its text extracted via the Extract from file node. For this demonstration, the UK highway code is used an an example.
2. Each page is processed individually and a contextual summary is generated for it. The contextual summary generation involves taking the current page, preceding and following pages together and summarising the contents of the current page.
3. This summary is then converted to embeddings using Gemini-embedding-001 model. Note, we're using a http request to use the Gemini embedding API as at time of writing, n8n does not support the new API's schema.
4. These embeddings are then stored in a Qdrant collection which can then be retrieved via an agent/MCP server or another workflow.

### How to use
* Replace the large document import with your own source of documents such as google drive or an internal repo.
* Replace the manual trigger if you want the workflow to run as soon as documents become available. If you're using Google Drive, check out my [Push notifications for Google Drive template](https://n8n.io/workflows/6106-monitor-file-changes-with-google-drive-push-notifications/).
* Expand and/or tune embedding strategies to suit your data. You may want to additionally embed the content itself and perform multi-stage queries using both.

### Requirements
* [Featherless.ai](https://featherless.ai/?referrer=HJUUTA6M) Account and API Key
* Gemini Account and API Key for Embeddings
* Qdrant Vector store

### Customising this workflow
* Sparse Vectors were not included in this template due to scope but should be the next step to getting the most our of contextual retrieval.
* Be sure to explore other models on the Featherless.ai platform or host your own custom/finetuned models.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Call n8n Workflow Tool, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
