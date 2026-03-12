# 🔬 Process large documents with OCR using SubworkflowAI and Gemini

> ⚡ **11,336 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Working with Large Documents In Your VLM OCR Workflow

Document workflows are popular ways to use AI but what happens when your document is too large for your app or your AI to handle? Whether its context window or application memory that's grinding to a halt, [Subworkflow.ai](https://subworkflow.ai?utm=n8n) is one approach to keep you going.

&gt; Subworkflow.ai is a third party API service to help AI developers work with documents too large for context windows and runtime memory.

### Prequisites
1. You'll need a Subworkflow.ai API key to use the Subworkflow.ai service.
2. Add the API key as a header auth credential. More details in the official docs [https://docs.subworkflow.ai/category/api-reference](https://docs.subworkflow.ai/category/api-reference)

### How it Works
1. Import your document into your n8n workflow
2. Upload it to the Subworkflow.ai service via the **Extract API** using the HTTP node. This endpoint takes files up to 100mb.
3. Once uploaded, this will trigger an `Extract` job on the service's side and the response is a "job" record to track progress.
4. Poll Subworkflow.ai's `Jobs` endpoint and keep polling until the job is finished. You can use the "IF" node looping back unto itself to achieve this in n8n.
5. Once the job is done, the `Dataset` of the uploaded document is ready for retrieval. Use the `Datasets` and `DatasetItems` API to retrieve whatever you need to complete your AI task.
6. In this example, all pages are retrieved and run through a multimodal LLM to parse into markdown. A well-known process when parsing data tables or graphics are required.

### How to use
* Integrate Subworkflow's Extract API seemlessly into your existing document workflows to support larger documents from 100mb+ to up to 5000 pages.

### Customising the workflow
* Sometimes you don't want the entire document back especially if the document is quite large (think 500+ pages!), instead, use query parameters on the `DatasetItems` API to pick individual pages or a range of pages to reduce the load.

### Need Help?
* **Official API documentation**: [https://docs.subworkflow.ai/category/api-reference](https://docs.subworkflow.ai/category/api-reference)
* **Join the discord**: [https://discord.gg/RCHeCPJnYw](RCHeCPJnYw)

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
