# 🔬 Assess document fraud risk and compliance with GPT-4, Claude and Slack alerts

> ⚡ **159 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# n8n Template Submission: AI-Powered Multi-Document Analysis & Recommendation Engine

## 1. Title
**AI Multi-Document Analyzer with Smart Recommendations & Reporting**


## How It Works
This workflow automates intelligent document analysis by processing multiple uploaded files through parallel AI pipelines to extract insights, generate comparative analysis, and produce actionable recommendations delivered via email. Designed for business analysts, consultants, and researchers, it enables efficient synthesis of insights from diverse document types into strategic, data-driven conclusions. The workflow eliminates the manual effort of reviewing documents, identifying patterns, cross-referencing information, and formulating recommendations by orchestrating structured data extraction, routing content through specialized AI models (OpenAI and Claude), aggregating and validating results, and formatting professional-grade reports. End-to-end processing includes batch document ingestion, structured extraction, parallel AI analysis, comparative evaluation, recommendation generation, report formatting, and tracked delivery via Gmail.

## Setup Steps
1. Configure NVIDIA NIM API credentials for creative content analysis
2. Add OpenAI API key with GPT-4 access for strategic evaluation
3. Connect Anthropic Claude API for technical assessment capabilities
4. Set up Google Sheets integration with read/write permissions
5. Configure Gmail OAuth2 credentials for automated report delivery
6. Customize analysis prompts and recommendation thresholds 

## Prerequisites
NVIDIA NIM API access, OpenAI API key (GPT-4), Anthropic Claude API key
## Use Cases
Multi-vendor proposal evaluation, regulatory compliance document review
## Customization
Adjust AI model parameters per analysis depth, modify recommendation scoring algorithms
## Benefits
Processes multiple documents 90% faster than manual review, eliminates bias through multi-model

## 🔗 Nodes Used

Postgres, Slack, Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
