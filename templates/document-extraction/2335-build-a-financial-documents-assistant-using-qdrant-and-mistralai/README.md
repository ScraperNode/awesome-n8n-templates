# 🔬 Build a financial documents assistant using Qdrant and Mistral.ai

> ⚡ **19,128 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow demonstrates how to manage your Qdrant vector store when there is a need to keep it in sync with local files. It covers creating, updating and deleting vector store records ensuring our chatbot assistant is never outdated or misleading.

## Disclaimer
This workflow depends on local files accessed through the local filesystem and so will only work on a self-hosted version of n8n at this time. It is possible to amend this workflow to work on n8n cloud by replacing the local file trigger and read file nodes.

## How it works
* A local directory where bank statements are downloaded to is monitored via a local file trigger. The trigger watches for the file create, file changed and file deleted events.
* When a file is created, its contents are uploaded to the vector store.
* When a file is updated, its previous records are replaced.
* When the file is deleted, the corresponding records are also removed from the vector store.
* A simple Question and Answer Chatbot is setup to answer any questions about the bank statements in the system.

## Requirements
* A self-hosted version of n8n. Some of the nodes used in this workflow only work with the local filesystem.
* Qdrant instance to store the records.

## Customising the workflow

This workflow can also work with remote data. Try integrating accounting or CRM software to build a managed system for payroll, invoices and more.

## Want to go fully local?

A version of this workflow is available which uses Ollama instead. You can download this template here: https://drive.google.com/file/d/189F1fNOiw6naNSlSwnyLVEm_Ho_IFfdM/view?usp=sharing

## 🔗 Nodes Used

HTTP Request, Local File Trigger, Question and Answer Chain, Vector Store Retriever, Recursive Character Text Splitter, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
