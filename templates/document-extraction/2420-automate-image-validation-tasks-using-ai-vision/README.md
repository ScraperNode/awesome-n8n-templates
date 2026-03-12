# 🔬 Automate image validation tasks using AI Vision

> ⚡ **26,524 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow shows how using multimodal LLMs with AI vision can tackle tricky image validation tasks which are near impossible to achieve with code and often impractical to be done by humans at scale.

You may need image validation when users submitted photos or images are required to meet certain criteria before being accepted. A wine review website may require users only submit photos of wine with labels, a bank may require account holders to submit scanned documents for verification etc.

In this demonstration, our scenario will be to analyse a set of portraits to verify if they meet the criteria for valid passport photos according to the UK government website (https://www.gov.uk/photos-for-passports).

## How it works

* Our set of portaits are jpg files downloaded from our Google Drive using the Google Drive node.
* Each image is resized using the Edit Image node to ensure a balance between resolution and processing speed.
* Using the Basic LLM node, we'll define a "user message" option with the type of binary (data). This will allow us to pass our portrait to the LLM as an input.
* With our prompt containing the criteria pulled off the passport photo requirements webpage, the LLM is able to validate the photo does or doesn't meet its criteria.
* A structured output parser is used to structure the LLM's response to a JSON object which has the "is_valid" boolean property. This can be useful to further extend the workflow.

## Requirements
* Google Gemini API key
* Google Drive account

## Customising this workflow

* Not using Gemini? n8n's LLM node works with any compatible multimodal LLM so feel free to swap Gemini out for OpenAI's GPT4o or Antrophic's Claude Sonnet.

* Don't need to validate portraits? Try other use cases such as document classification, security footage analysis, people tagging in photos and more.

## 🔗 Nodes Used

Edit Image, Google Drive, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
