# 🤝 ERP AI chatbot for Odoo sales module with OpenAI

> ⚡ **26,588 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Who is this for?
This workflow is for everyone who wants to have easier access to their Odoo sales data without complex queries.

## Use Case
To have a clear overview of your sales data in Odoo you typically needs to extract data from it manually to analyse it. This workflow uses OpenAI's language models to create an intelligent chatbot that provides conversational access to your Odoo sales opportunity data.

## How it works
* Creates a summary of all Odoo sales opportunities using OpenAI
* Uses that summary as context for the OpenAI chat model
* Keeps the summary up to date using a schedule trigger

## Set up steps:
* Configure the Odoo credentials
* Configure OpenAI credentials
* Toggle "Make Chat Publicly Available" from the Chat Trigger node.

## 🔗 Nodes Used

Odoo, Schedule Trigger, AI Agent, Summarization Chain, OpenAI Chat Model, OpenAI Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
