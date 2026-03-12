# 🎬 Easy image captioning with Gemini 1.5 Pro

> ⚡ **14,174 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow demonstrates how to automate image captioning tasks using Gemini 1.5 Pro - a multimodal LLM which can accept and analyse images. This is a really simple example of how easy it is to build and leverage powerful AI models in your repetitive tasks.

## How it works
* For this demo, we'll import a public image from a popular stock photography website, Pexel.com, into our workflow using the HTTP request node.
* With multimodal LLMs, there is little do preprocess other than ensuring the image dimensions fit within the LLMs accepted limits. Though not essential, we'll resize the image using the Edit image node to achieve fast processing.
* The image is used as an input to the basic LLM node by defining a "user message" entry with the binary (data) type.
* The LLM node has the Gemini 1.5 Pro language model attached and we'll prompt it to generate a caption title and text appropriate for the image it sees.
* Once generated, the generated caption text is positioning over the original image to complete the task. We can calculate the positioning relative to the amount of characters produced using the code node.

An example of the combined image and caption can be found here: [https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/l5xbb4ze4wyxwwefqmnc](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/l5xbb4ze4wyxwwefqmnc)

## Requirements
* Google Gemini API Key.
* Access to Google Drive.

## Customising the workflow

* Not using Google Gemini? n8n's basic LLM node supports the standard syntax for image content for models that support it - try using GPT4o, Claude or LLava (via Ollama).

* Google Drive is only used for demonstration purposes. Feel free to swap this out for other triggers such as webhooks to fit your use case.

## 🔗 Nodes Used

Edit Image, HTTP Request, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
