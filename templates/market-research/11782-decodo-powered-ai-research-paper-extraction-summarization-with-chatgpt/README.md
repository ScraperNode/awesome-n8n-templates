# 📊 Decodo-powered AI research paper extraction & summarization with ChatGPT

> ⚡ **59 views** · 📊 [Market Research & Insights](../)

## Description

[Sign up for Decodo — get better pricing here](https://visit.decodo.com/9L1XPE)

## Overview
This workflow automatically collects the latest AI research papers using **Decodo**, extracts and summarizes PDFs with AI, stores insights in Google Sheets, and notifies users via Telegram. It turns complex academic research into structured, readable knowledge with zero manual effort.


## Who’s this for
This template is ideal for:
- AI researchers and ML engineers tracking new papers  
- Founders and product teams monitoring AI trends  
- Content writers and analysts creating research-based content  
- Educators, students, and newsletter creators  

Anyone who wants **automated, summarized research without reading full papers**.


## How it works / What it does
1. A schedule trigger starts the workflow automatically  
2. **Decodo** fetches the latest AI research listings from arXiv reliably and at scale  
3. Article titles and PDF links are extracted and structured  
4. Each paper PDF is downloaded and converted to text  
5. An AI summarization chain generates concise, human-readable summaries  
6. Results are saved to Google Sheets as a research database  
7. A Telegram message notifies users when new summaries are available  

---

## How to set up
1. Add your **Decodo API credentials** (required)  
2. Connect your **OpenAI / ChatGPT-compatible model** for summarization  
3. Connect Google Sheets and choose your target spreadsheet  
4. Add your Telegram bot credentials and chat ID  
5. Adjust the schedule trigger if needed, then activate the workflow  

---

## Requirements
- n8n (self-hosted required due to community node usage)  
- **Decodo community node** (web extraction)  
- OpenAI or compatible AI model credentials  
- Google Sheets account  
- Telegram bot access  

⚠️ **Disclaimer:** This workflow uses a community node and is supported on self-hosted n8n only.

---

## How to customize the workflow
- Change the arXiv category to track different research domains  
- Modify the AI prompt to adjust summary length or tone  
- Replace Google Sheets with another database or knowledge base  
- Disable Telegram notifications if not needed  
- Extend the workflow for SEO blogs, newsletters, or RAG pipelines

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
