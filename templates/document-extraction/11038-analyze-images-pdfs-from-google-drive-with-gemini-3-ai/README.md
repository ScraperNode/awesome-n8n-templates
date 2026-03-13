# 🔬 Analyze images & PDFs from Google Drive with Gemini 3 AI

> ⚡ **845 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Gemini 3 Image & PDF Extractor (Google Drive → Gemini 3 → Summary)

Automatically summarize newly uploaded images or PDF reports using Google Gemini 3, triggered directly from a Google Drive folder.
Perfect for anyone who needs fast AI-powered analysis of financial reports, charts, screenshots, or scanned documents.

🎥 Watch the full step-by-step video tutorial:
https://www.youtube.com/watch?v=UuWYT_uXiw0

## What this template does

This workflow watches a Google Drive folder for new files and automatically:

1. Detects new uploaded files

- Uses Google Drive Trigger

- Watches a specific folder for fileCreated events

Filters by MIME type:

- image/png

- image/webp

- application/pdf

2. Downloads the file automatically

Depending on the file type:

Images → Download via HTTP Request → Send to Gemini 3 Vision

PDFs → Download via HTTP Request → Extract content → Send to Gemini 3

3. Analyzes content using Gemini 3

Two separate processing lanes:

🖼️ Image Lane

Image is sent to Gemini 3 (Vision / Image Analyze)

Extracts textual + visual meaning from charts, diagrams, or screenshots

Passes structured output to an AI Analyst Agent

Agent summarizes and highlights top 3 findings

📄 PDF Lane

PDF is downloaded

Text is extracted using Extract From File

Processed using Gemini 3 via OpenRouter Chat Model

AI Analyst Agent summarizes charts/tables and extracts insights

## Why this workflow is useful

Save hours manually reading PDFs, charts, and screenshots

Convert dense financial or operational documents into digestible insights

Great for:

Financial analysts

Operations teams

Market researchers

Content & reporting teams

Anyone receiving frequent reports via Drive

Requirements

Before using this template, you will need:

Google Drive OAuth credential
(for Drive trigger + file download)

Gemini 3 / PaLM or OpenRouter API key

(Optional) Update folder ID to your own Google Drive target folder

⚠️ No credentials are included in this template. Add them manually after importing it.

Node Overview
Google Drive Trigger

Watches a specific Drive folder for newly added files

Provides metadata like webContentLink and MIME type

Filter by Type (IF Node)

Routes files to Image lane or PDF lane

png or webp → Image

pdf → PDF

🖼️ Image Processing Lane

Download Image (HTTP Request)

Analyze Image (Gemini Vision)

Analyzer Agent

Summarizes findings

Highlights actionable insights

Powered by OpenRouter Gemini 3

📄 PDF Processing Lane

Download PDF (HTTP Request)

Extract From File → PDF

Analyzer Agent (PDF)

Summarizes extracted chart/report information

Highlights key takeaways

## Setup Guide

Import the template into your n8n workspace

Open Google Drive Trigger

Select your Drive OAuth credential

Replace folder ID with your target folder

Open Gemini 3 / OpenRouter AI Model nodes

Add your API credentials

Test by uploading:

A PNG/WebP chart screenshot

A multi-page PDF report

Check the execution to view summary outputs

## Customization Ideas

Add email delivery (send the summary to yourself daily)

Save summaries into:

Google Sheets

Notion

Slack channels

n8n Data Tables

Add a second agent to convert summaries into:

Weekly reports

PowerPoint slides

Slack-ready bullet points

Add classification logic:

Revenue reports

Marketing analytics

Product dashboards

Financial charts

## Troubleshooting

Trigger not firing?
Confirm your Drive OAuth credential has read access to the folder.

Gemini errors?
Ensure your model ID matches your API provider:

models/gemini-3-pro-preview

google/gemini-3-pro-preview

PDF extraction empty?
Check if the file contains selectable text or only images.
(You can add OCR if needed.)

## 🔗 Nodes Used

HTTP Request, Google Drive Trigger, AI Agent, Extract from File, OpenRouter Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
