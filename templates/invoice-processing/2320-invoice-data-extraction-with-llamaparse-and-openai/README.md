# 🧾 Invoice data extraction with LlamaParse and OpenAI

> ⚡ **45,414 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automates the process of parsing and extracting data from PDF invoices. With this workflow, accounts and finance people can realise huge time and cost savings in their busy schedules.

**Read the Blog**: [https://blog.n8n.io/how-to-extract-data-from-pdf-to-excel-spreadsheet-advance-parsing-with-n8n-io-and-llamaparse/](https://blog.n8n.io/how-to-extract-data-from-pdf-to-excel-spreadsheet-advance-parsing-with-n8n-io-and-llamaparse/)

## How it works

* This workflow will watch an email inbox for incoming invoices from suppliers
* It will download the attached PDFs and processing them through a third party service called LlamaParse.
* LlamaParse is specifically designed to handle and convert complex PDF data structures such as tables to markdown.
* Markdown is easily to process for LLM models and so the data extraction by our AI agent is more accurate and reliable.
* The workflow exports the extracted data from the AI agent to Google Sheets once the job complete.

## Requirements

* The criteria of the email trigger must be configured to capture emails with attachments.
* The gmail label "invoice synced" must be created before using this workflow.
* A LlamaIndex.ai account to use the LlamaParse service.
* An OpenAI account to use GPT for AI work.
* Google Sheets to save the output of the data extraction process although this can be replaced for whatever your needs.

## Customizing this workflow

This workflow uses Gmail and Google Sheets but these can easily be swapped out for equivalent services such as Outlook and Excel.

Not using Excel? Simple redirect the output of the AI agent to your accounting software of choice.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
