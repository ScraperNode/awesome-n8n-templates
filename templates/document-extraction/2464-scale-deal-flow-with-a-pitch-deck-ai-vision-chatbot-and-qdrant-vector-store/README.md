# 🔬 Scale deal flow with a Pitch Deck AI vision, chatbot and QDrant vector store

> ⚡ **7,883 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Are you a popular tech startup accelerator (named after a particular higher order function) overwhelmed with 1000s of pitch decks on a daily basis? Wish you could filter through them quickly using AI but the decks are unparseable through conventional means? Then you're in luck!

This n8n template uses Multimodal LLMs to parse and extract valuable data from even the most overly designed pitch decks in quick fashion. Not only that, it'll also create the foundations of a RAG chatbot at the end so you or your colleagues can drill down into the details if needed. With this template, you'll scale your capacity to find interesting companies you'd otherwise miss!

**Requires n8n v1.62.1+**

## How It Works

* Airtable is used as the pitch deck database and PDF decks are downloaded from it.
* An AI Vision model is used to transcribe each page of the pitch deck into markdown.
* An Information Extractor is used to generate a report from the transcribed markdown and update required information back into pitch deck database.
* The transcribed markdown is also uploaded to a vector store to build an AI chatbot which can be used to ask questions on the pitch deck.

Check out the sample Airtable here: [https://airtable.com/appCkqc2jc3MoVqDO/shrS21vGqlnqzzNUc](https://airtable.com/appCkqc2jc3MoVqDO/shrS21vGqlnqzzNUc)

### How To Use
* This template depends on the availability of the Airtable - make a duplicate of the airtable ([link](https://airtable.com/appCkqc2jc3MoVqDO/shrS21vGqlnqzzNUc)) and its columns before running the workflow.
* When a new pitchdeck is received, enter the company name into the **Name** column and upload the pdf into the **File** column. Leave all other columns blank.
* If you have the Airtable trigger active, the execution should start immediately once the file is uploaded. Otherwise, click the manual test trigger to start the workflow.
* When manually triggered, all "new" pitch decks will be handled by the workflow as separate executions.

## Requirements
* OpenAI for LLM
* Airtable For Database and Interface
* Qdrant for Vector Store

## Customising This Workflow

* Extend this starter template by adding more AI agents to validate claims made in the pitch deck eg. Linkedin Profiles, Page visits, Reviews etc.

## 🔗 Nodes Used

Airtable, Edit Image, HTTP Request, Execute Sub-workflow, Airtable Trigger, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
