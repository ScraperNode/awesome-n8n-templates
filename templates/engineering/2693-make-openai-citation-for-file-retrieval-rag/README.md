# ⚒️ Make OpenAI citation for file retrieval RAG

> ⚡ **3,978 views** · ⚒️ [Engineering](../)

## Description

## Make OpenAI Citation for File Retrieval RAG

## Use case

In this example, we will ensure that all texts from the OpenAI assistant search for citations and sources in the vector store files. We can also format the output for Markdown or HTML tags.

This is necessary because the assistant sometimes generates strange characters, and we can also use dynamic references such as citations 1, 2, 3, for example.

## What this workflow does

In this workflow, we will use an OpenAI assistant created within their interface, equipped with a vector store containing some files for file retrieval.

The assistant will perform the file search within the OpenAI infrastructure and will return the content with citations.

- We will make an HTTP request to retrieve all the details we need to format the text output.

## Setup

Insert an OpenAI Key

## How to adjust it to your needs

At the end of the workflow, we have a block of code that will format the output, and there we can add Markdown tags to create links. Optionally, we can transform the Markdown formatting into HTML.

## 🔗 Nodes Used

HTTP Request, Markdown, Simple Memory, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
