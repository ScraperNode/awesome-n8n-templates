# 📊 Generate company due diligence PDFs with Google Gemini, SEC EDGAR, Serper and Gmail

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow starts from an n8n form submission and compiles due diligence research from SEC EDGAR, Google News RSS, the target website’s HTTP headers, and Serper (for Glassdoor and LinkedIn). It uses Google Gemini to produce a structured report, renders a tech score chart with QuickChart, converts HTML to PDF, and emails it via Gmail.

## How it works
1. Triggers when a user submits the n8n form with a company name and domain.
2. Fetches research in parallel from SEC EDGAR (10-K search), Google News RSS, the company website’s response headers, and Serper-powered Google searches for Glassdoor and LinkedIn snippets.
3. Consolidates the collected sources into a single JSON payload with normalized fields (filings, news, headers, and search snippets).
4. Uses a Google Gemini-powered AI agent to generate a due diligence report in Markdown and returns structured JSON including a numeric tech maturity score.
5. Generates a gauge chart image for the tech maturity score using QuickChart and prepares it for embedding.
6. Builds an HTML report that includes the AI-generated content and chart, converts it to a PDF via pdfendpoint, downloads the PDF, and emails it as an attachment using Gmail.

## Setup
1. Add Google Gemini (Google PaLM) API credentials for the AI agent’s chat model.
2. Add a Serper API key and replace the hard-coded X-API-KEY header values used in the Glassdoor and LinkedIn search requests.
3. Add a pdfendpoint API key and replace the hard-coded Authorization bearer token, or point the workflow to your preferred HTML-to-PDF service.
4. Connect Gmail OAuth2 credentials and update the recipient address and attachment mapping in the Gmail email step.
5. Review the form fields (company name and domain) and adjust the SEC/News/search queries if you want different filings, regions, or result limits.

## 🔗 Nodes Used

HTTP Request, RSS Read, Gmail, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
