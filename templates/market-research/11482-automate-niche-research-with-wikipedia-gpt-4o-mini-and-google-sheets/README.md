# 📊 Automate niche research with Wikipedia, GPT-4o-mini, and Google Sheets

> ⚡ **70 views** · 📊 [Market Research & Insights](../)

## Description

## Overview
This n8n template automates the process of researching niche topics. It searches for a topic on Wikipedia, scrapes the relevant page using **ScrapeOps**, extracts the history or background section, and uses AI to generate a concise summary and timeline. The results are automatically saved to Google Sheets for easy content planning.

## Who is this for?
- **Content Creators**: Quickly gather background info for videos or articles.
- **Marketers**: Research niche markets and product histories.
- **Educators/Students**: Generate timelines and summaries for study topics.
- **Researchers**: Automate the initial data gathering phase.

## What problems it solves
- **Time Consumption**: Manually reading and summarizing Wikipedia pages takes time.
- **Blocking**: Scraping Wikipedia directly can sometimes lead to IP blocks; ScrapeOps handles this.
- **Unstructured Data**: Raw HTML is hard to use; this workflow converts it into a clean, structured format (JSON/CSV).

## How it works
1. **Define Topic**: You set a keyword in the workflow.
2. **Locate Page**: The workflow queries the Wikipedia API to find the correct page URL.
3. **Smart Scraping**: It uses the [ScrapeOps Proxy API](https://scrapeops.io/docs/n8n/proxy-api/) to fetch the page content reliably.
4. **Extraction**: A code node intelligently parses the HTML to find "History", "Origins", or "Background" sections.
5. **AI Processing**: GPT-4o-mini summarizes the text and extracts key dates for a timeline.
6. **Storage**: The structured data is appended to a Google Sheet.

## Setup steps (~ 5-10 minutes)
1. **ScrapeOps Account**:
   - Register for a free API key at [ScrapeOps](https://scrapeops.io/app/register/n8n).
   - Configure the **ScrapeOps Scraper** node with your API key.
2. **OpenAI Account**:
   - Add your OpenAI credentials to the **Message a model** node.
3. **Google Sheets**:
   - Create a Google Sheet. You can duplicate this [Template Sheet](https://docs.google.com/spreadsheets/d/1P0wZ449wVNndhSa6cJtK3VA3Aulv1k18zdpwWYY13gE/edit?gid=0#gid=0) (copy the headers).
   - Connect your Google account to the **Append row in sheet** node and select your new sheet.

## Pre-conditions
- An active ScrapeOps account.
- An OpenAI API key (or another LLM credential).
- A Google account for Sheets access.

## Disclaimer
This template uses ScrapeOps as a community node. You are responsible for complying with Wikipedia's Terms of Use, robots directives, and applicable laws in your jurisdiction. Scraping targets may change at any time; adjust render/scroll/wait settings and parsers as needed. Use responsibly for legitimate business purposes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
