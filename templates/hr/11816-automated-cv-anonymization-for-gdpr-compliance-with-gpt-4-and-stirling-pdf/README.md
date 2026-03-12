# 👥 Automated CV anonymization for GDPR compliance with GPT-4 and Stirling PDF

> ⚡ **194 views** · 👥 [HR & Recruitment](../)

## Description

## Overview
Automatically anonymize CVs/resumes while preserving professional information. Perfect for recruitment agencies ensuring GDPR compliance and bias-free hiring.

## Features
- Supports multiple file formats (PDF, DOCX, etc.)
- Multi-language support (preserves original language)
- Removes PII: names, emails, phones, addresses
- Preserves: skills, experience, dates, achievements
- Outputs professionally formatted PDF

## Requirements
- OpenAI API key (GPT-4 recommended)
- Stirling PDF service (self-hosted or cloud)
- n8n version 1.0+

## Setup Instructions
1. Configure OpenAI credentials
2. Set up Stirling PDF API endpoint
3. Update API key in HTTP Request nodes
4. Activate workflow
5. Test with sample CV

## Usage
POST to webhook endpoint with CV file as `UploadCV` field.

## Use Cases
- Recruitment agencies (GDPR compliance)
- HR departments (bias-free screening)
- Job boards (candidate privacy)

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
