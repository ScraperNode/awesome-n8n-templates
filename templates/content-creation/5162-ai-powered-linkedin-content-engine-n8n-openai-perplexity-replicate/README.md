# 🎬 AI-powered LinkedIn content engine (n8n + OpenAI + Perplexity + Replicate)

> ⚡ **2,111 views** · 🎬 [Content Creation & Video](../)

## Description

A fully automated content engine that **researches, writes, scores, and visualizes LinkedIn posts** — built with n8n, OpenAI, Perplexity, and Replicate.

What it does:
✅ Researches any topic using real-time data
✅ Writes a personalized post in your voice
✅ Refines tone and structure
✅ Generates abstract, high-quality visual assets
✅ Scores the output and saves it to Google Sheets

How it works:
- Triggered when you change a row status in Google Sheets
- Uses Perplexity to research
- GPT-4o (OpenAI) to create and polish content
- Replicate (FLUX Pro) to generate images
- Scores the post using heuristics
- Appends everything back to your sheet

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, OpenAI, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
