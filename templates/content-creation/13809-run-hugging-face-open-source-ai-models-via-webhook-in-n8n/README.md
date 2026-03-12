# 🎬 Run Hugging Face open-source AI models via webhook in n8n

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow connects n8n to the Hugging Face Inference API, letting you run powerful open-source AI models for text generation, summarization, sentiment analysis, translation, and image generation — all fully automated, no GPU setup required. Simply POST a request and get AI-powered results back in seconds.

---

### What's the Goal?
To give developers, agencies, and businesses a plug-and-play automation for running any Hugging Face model without managing infrastructure. Replace expensive proprietary APIs with open-source alternatives that you control.

Tasks this workflow handles out of the box:
- Text generation (GPT-style content writing)
- Summarization (condense long documents)
- Sentiment analysis (classify tone of any text)
- Translation (multilingual content)
- Image generation (text-to-image via Stable Diffusion)

---

### Why Does It Matter?
Hugging Face hosts over 400,000 open-source models — many matching or exceeding the quality of paid APIs at a fraction of the cost. This workflow:

- Saves money: free tier available, paid plans start at $9/mo
- Gives full control: swap any model by changing one field
- Scales instantly: no GPU provisioning or DevOps needed
- Works in automation: connects to any n8n trigger or pipeline
- Produces billable output: agencies can resell AI services built on this

---

### How It Works
Step 1 — Webhook receives the task request with input text and task type
Step 2 — Set node stores your Hugging Face API key and normalizes all inputs
Step 3 — Code node selects the right model and builds the correct API payload for the task
Step 4 — HTTP Request calls the Hugging Face Inference API with the built payload
Step 5 — Code node parses and formats the raw API response into clean structured output
Step 6 — Respond node returns the final result as JSON to the caller

---

### Configuration Requirements
- HUGGING_FACE_API_KEY — Get free at huggingface.co/settings/tokens
- No other credentials needed for basic usage
- Optional: Google Sheets credential for logging (node already included)

---

### Setup Guide
Step 1: Import this workflow into your n8n instance
Step 2: Open the Set API Config node and replace YOUR_HF_API_KEY with your token
Step 3: Activate the workflow
Step 4: POST to /webhook/hf-runner with your task payload
Step 5: Swap models anytime by changing the model field in your request

---

### Sample Webhook Payload
{
  "task": "summarization",
  "input": "Your long text goes here...",
  "model": "",
  "parameters": {}
}

### Supported Task Values
- text_generation
- summarization
- sentiment_analysis
- translation
- image_generation

### Default Models Used
- text_generation    → mistralai/Mistral-7B-Instruct-v0.2
- summarization      → facebook/bart-large-cnn
- sentiment_analysis → distilbert-base-uncased-finetuned-sst-2-english
- translation        → Helsinki-NLP/opus-mt-en-fr
- image_generation   → stabilityai/stable-diffusion-xl-base-1.0

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
