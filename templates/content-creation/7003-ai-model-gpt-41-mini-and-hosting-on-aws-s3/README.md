# 🎬 AI model GPT-4.1-mini and hosting on AWS S3

> ⚡ **321 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Overview
This workflow is designed for inspiring teams or individuals who need to quickly and efficiently serve files, content, or documents via the web. It offers a straightforward approach while still being flexible and adaptable for different branding needs. 

The HTML branding can be easily updated through an external LLM, making it possible to fully customize the look and feel without complex coding. You simply prompt the AI (using the JSON as a guide) to output your desired design.

*This template makes use of a powerful community node, which brings in the benefits of shared knowledge and collective improvement.*

## Setup Instructions
Copy the JSON Preset into your AI model or use your own, along with your custom branding requirements. Ask the model for an HTML response, then paste the output into the HTML Preset. 

Next, connect the JSON inputs into the relevant locations from the structured output parser.
Once complete, the static HTML can be served via AWS or another web server using HTTPS, ensuring secure and reliable delivery.

## Workflow Explanation
This AI Agent takes a simple user input and transforms it into dynamic HTML. The structured JSON output forces consistent formatting, while giving you the creative flexibility to adjust visuals on demand.

Since the output is relatively consistent the workflow can produce repitive business documents with consistency and accuracy.

## Requirements
- LLM account access
- AWS Account (S3) or HTTPs equivalent
- Basic HTML/JSON knowledge
- PDF.co Account

## 🔗 Nodes Used

AWS S3, AI Agent, OpenAI Chat Model, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
