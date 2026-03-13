# 🎯 Summarize content from URLs, text & PDFs using OpenAI

> ⚡ **2,634 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Content Summarizer Suite

This n8n template collection demonstrates how to build a comprehensive AI-powered content summarization system that handles multiple input types: URLs, raw text, and PDF files. Built as 4 separate workflows for maximum flexibility.
Use cases: Research workflows, content curation, document processing, meeting prep, social media content creation, or integrating smart summarization into any app or platform.

## How it works
- Multi-input handling: Separate workflows for URLs (web scraping), direct text input, and PDF file processing
- Smart PDF processing: Attempts text extraction first, falls back to OCR.Space for image-based PDFs
- AI summarization: Uses OpenAI's GPT-4.1-mini with customizable length (brief/standard/detailed) and focus areas (key points/numbers/conclusions/action items)
- Language support: Multi-language summaries with automatic language detection
- Flexible output: Returns clean markdown-formatted summaries via webhook responses
- Unified option: The all-in-one workflow automatically detects input type and routes accordingly

## How to use
1. Replace webhook triggers with your preferred method (manual, form, API endpoint)
2. Each workflow accepts different parameters: URL, text content, or file upload
3. Customize summary length and focus in the AI prompt nodes
Authentication is optional - switch to "none" if running internally
4. Perfect for integration with Bubble, Zapier, or any platform that can make HTTP requests

## Requirements
- OpenAI API key or OpenRouter Keys
- OCR.Space API key (for PDF fallback processing)
- n8n instance (cloud or self-hosted)
- Any platform that can make HTTP requests.

## Setup Steps
1. Replace "Dummy OpenAI" with your OpenAI credentials
2. Add your OCR.Space API key in the OCR nodes is not mandatory.
3. Update webhook authentication as needed
4. Test each workflow path individually

## 🔗 Nodes Used

Function, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
