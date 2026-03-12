# 🔬 Extract license plate number from image uploaded via an n8n form

> ⚡ **2,801 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What it does

This is a simplistic demo workflow showing how to extract a license plate number from an image of a car submitted via a form – or in more general terms showcasing how you can:

* use a form trigger to upload files and feed it into an LLM
* use a changeable LLM model for image-to-text analysis


## Set up steps

* Import the workflow
* Ensure you have registered and account, purchased some credits and created and API key for [OpenRouter.ai](https://openrouter.ai)
* Create/adapt the OpenRouter credential with your indivial API key for OpenRouter
* "Test workflow" and submit an image of a car with license plate to extract its number


## How to adapt

By changing the "prompt" in th "Settings" node you can quickly adapt this exemplatory workflow to other image-to-text use cases, such as:

* summarization: "summarize what's seen in the image"
* location finding: "identify the location where the image was taken"
* text extraction: "extract all text from the image and return it as markdown"

Thanks to using OpenRouter, you also can quickly experiment with finding good model choices by simply changing the "model" in the "Settings" node. The following models gave good results for this demo use-case:

* google/gemini-2.0-flash-001
* meta-llama/llama-3.2-90b-vision-instruct
* openai/gpt-4o

The llama-3.2-11b and even claude-3.5-sonnet didn't recognize all characters in all test images.

Using a generic LLM-model offers a quick way of prototyping an image-to-text application. For specific use cases in serious and scalable production deployments, consider using an API based service specifically made to that purpose, such as:

* Google Cloud Vision API
* Microsoft Azure Computer Vision
* Azure AI Document Intelligence
* Amazon Textract

## 🔗 Nodes Used

Basic LLM Chain, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
