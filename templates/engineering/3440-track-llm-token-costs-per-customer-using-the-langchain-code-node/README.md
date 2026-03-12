# ⚒️ Track LLM token costs per customer using the Langchain code node

> ⚡ **1,577 views** · ⚒️ [Engineering](../)

## Description

![Screenshot of template](https://res.cloudinary.com/daglih2g8/image/upload/v1744128138/Screenshot_2025-04-08_at_17.01.38_m4ais8.png)

*Note: This template only works for self-hosted n8n.*

### This n8n template demonstrates how to use the Langchain code node to track token usage and cost for every LLM call.

This is useful if your templates handle multiple clients or customers and you need a cheap and easy way to capture how much of your AI credits they are using.

### How it works
* In our mock AI service, we're offering a data conversion API to convert Resume PDFs into JSON documents.
* A form trigger is used to allow for PDF upload and the file is parsed using the Extract from File node.
* An Edit Fields node is used to capture additional variables to send to our log.
* Next, we use the Information Extractor node to organise the Resume data into the given JSON schema.
* The LLM subnode attached to the Information Extractor is a custom one we've built using the Langchain Code node.
* With our custom LLM subnode, we're able to capture the usage metadata using lifecycle hooks.
* We've also attached a Google Sheet tool to our LLM subnode, allowing us to send our usage metadata to a google sheet.
* Finally, we demonstrate how you can aggregate from the google sheet to understand how much AI tokens/costs your clients are liable for.


**Check out the example Client Usage Log** - [https://docs.google.com/spreadsheets/d/1AR5mrxz2S6PjAKVM0edNG-YVEc6zKL7aUxHxVcffnlw/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1AR5mrxz2S6PjAKVM0edNG-YVEc6zKL7aUxHxVcffnlw/edit?usp=sharing)

### How to use
* **SELF-HOSTED N8N ONLY** - the Langchain Code node is only available in the self-hosted version of n8n. It is not available in n8n cloud.
* The LLM subnode can only be attached to non-"AI agent" nodes; Basic LLM node, Information Extractor, Question & Answer Chain, Sentiment Analysis, Summarization Chain and Text Classifier.

### Requirements
* Self-hosted version of n8n 
* OpenAI for LLM
* Google Sheets to store usage metadata

### Customising this template
* Bring the custom LLM subnode into your own templates! In many cases, it can be a drop-in replacement for the regular OpenAI subnode.
* Not using Google Sheets? Try other databases or a HTTP call to pipe into your CRM.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, LangChain Code, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
