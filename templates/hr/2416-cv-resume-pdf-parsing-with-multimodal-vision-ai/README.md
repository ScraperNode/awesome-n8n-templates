# 👥 Cv resume PDF parsing with multimodal vision AI

> ⚡ **18,891 views** · 👥 [HR & Recruitment](../)

## Description

This n8n workflow demonstrates how we can use Multimodal LLMs to parse and extract from PDF documents in n8n.

In this particular scenario, we're passing a candidate's CV/resume to an AI which filters out unqualified applications. However, this sneaky candidate has added in hidden prompt to bypass our bot! Whatever will we do? No fret, using AI Vision is one approach to solve this problem... read on!

## How it works

* Our candidate's CV/Resume is a PDF downloaded via Google Drive for this demonstration.
* The PDF is then converted into an image PNG using a tool called [Stirling PDF](https://stirlingpdf.io). Since the hidden prompt has a white font color, it is is invisible in the converted image.
* The image is then forwarded to a Basic LLM node to process using our multimodal model - in this example, we'll use Google's Gemini 1.5 Pro.
* In the Basic LLM node, we'll need to set a User Message with the type of Binary. This allows us to directly send the image file in our request.
* The LLM is now immune to the hidden prompt and its response is has expected.

The example CV/Resume with hidden prompt can be found here: [https://drive.google.com/file/d/1MORAdeev6cMcTJBV2EYALAwll8gCDRav/view?usp=sharing](https://drive.google.com/file/d/1MORAdeev6cMcTJBV2EYALAwll8gCDRav/view?usp=sharing)

## Requirements

* Google Gemini API Key. Alternatively, GPT4 will also work for this use-case.
* Stirling PDF or another service which can convert PDFs into images. Note for data privacy, this example uses a public API and it is recommended that you self-host and use a private instance of Stirling PDF instead.

## Customising the workflow

* Swap out the manual trigger for another trigger such as a webhook to integrate into your existing services.
* This example demonstrates a validation use-case ie. "does the candidate look qualified?". You can try additionally extracting data points instead such as years of experiences, previous companies etc.

## 🔗 Nodes Used

Edit Image, HTTP Request, Google Drive, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
