# 🎬 Generate recipe PDFs from food photos with OpenRouter, Apify and Google Drive

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects an image URL via an n8n form, uses OpenRouter (Google Gemini) to generate recipe text and a print-ready HTML layout, converts the HTML to a PDF using an Apify actor, and uploads the resulting PDF to Google Drive.

## How it works
1. Receives an n8n form submission containing a required dish image URL.
2. Sends the image URL to OpenRouter (Google Gemini image model) to analyze the photo and generate corresponding recipes.
3. Uses OpenRouter (Google Gemini chat model) to turn the generated recipe text into a one-page, A4, self-contained HTML document and a target PDF filename.
4. Runs the Apify actor “igview-owner/html-to-pdf-api” to convert the HTML content into a PDF file.
5. Retrieves the generated PDF from Apify’s key-value store using the last run’s output filename.
6. Uploads the PDF to a specified folder in Google Drive.

## Setup
1. Create and connect an OpenRouter API credential, and ensure the HTTP request to OpenRouter uses your API key instead of a hard-coded token.
2. Create and connect an Apify API credential and ensure you have access to the actor “igview-owner/html-to-pdf-api”.
3. Create and connect a Google Drive OAuth2 credential and set the destination Drive/folder where PDFs should be uploaded.
4. Test the form trigger, then share the generated form/webhook URL with users who should submit image links.

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Structured Output Parser, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
