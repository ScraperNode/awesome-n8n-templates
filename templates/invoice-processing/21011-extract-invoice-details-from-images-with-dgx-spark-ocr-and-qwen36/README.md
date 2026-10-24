# 🧾 Extract invoice details from images with DGX Spark OCR and Qwen3.6

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow lets you upload an invoice image via an n8n form, runs OCR and field extraction against a DGX Spark-hosted LiteLLM OpenAI-compatible endpoint (OCR model + Qwen3.6), and returns the parsed supplier, invoice number, date, total, and currency in a completion page.

## How it works
1. Presents an n8n form where a user uploads a single invoice page image (PNG/JPG).
2. Converts the uploaded file to a base64 string to embed it into an API request.
3. Sends the image to the DGX Spark LiteLLM chat completions endpoint using an OCR model to produce invoice text.
4. Sends the OCR text back to the same endpoint using the Qwen3.6 model to extract supplier name, invoice number, invoice date, total amount, and currency as JSON.
5. Parses the returned JSON and displays the extracted fields in an n8n form completion screen.

## Setup
1. Configure an OpenAI API credential in n8n that points to your DGX Spark LiteLLM server (base URL like http://<spark-ip>:4000) and select it in both HTTP Request steps.
2. Replace <spark-ip> in the two request URLs with your DGX Spark host/IP (and ensure the /v1/chat/completions endpoint is reachable from n8n).
3. Verify the LiteLLM server exposes the models used by this workflow (model names ocr and qwen3.6) and adjust them if your deployment uses different identifiers.
4. Run the workflow once to get the form URL, then open it to upload an invoice image and test the extraction output.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
