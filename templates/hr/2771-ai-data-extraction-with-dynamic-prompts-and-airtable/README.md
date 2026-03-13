# 👥 Ai data extraction with dynamic prompts and Airtable

> ⚡ **5,475 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n template introduces the **Dynamic Prompts** Ai workflow pattern which are incredible for certain types of data extraction tasks where attributes are unknown or need to remain flexible.

The general idea behind this pattern is that the prompts for requested attributes to be extracted live outside the template and so can be changed at any time - without needing to edit the template. This seriously cuts down on maintainance requirements and is reusable for any number of tables at little cost.

**Check out the video demo I did for n8n Studio here**: [https://www.youtube.com/watch?v=_fNAD1u8BZw](https://www.youtube.com/watch?v=_fNAD1u8BZw)

**Check out the example Airtable here:** [https://airtable.com/appAyH3GCBJ56cfXl/shrXzR1Tj99kuQbyL](https://airtable.com/appAyH3GCBJ56cfXl/shrXzR1Tj99kuQbyL)

**Looking for the Baserow Version?** [https://n8n.io/workflows/2780-ai-data-extraction-with-dynamic-prompts-and-baserow/](https://n8n.io/workflows/2780-ai-data-extraction-with-dynamic-prompts-and-baserow/)

## How it works
* Given we have an "input" field for context and a number of fields for the data we want to extract, this template will run in the background to react to any changes to either the "input" or fields and automatically update the rows accordingly.
* The key is that Airtable fields have a special property called the "field description". In this pattern, we use this property to allow the user to store a simple prompt describing the data that should exist in the column.
* Our n8n template reads these column descriptions aka "prompts" to use as instructions to perform tasks on the "input".
* In this template, the "input" is a PDF of a resume/CV and the columns are attributes a HR person would want to extract from it - such as full name, address, last position, years of experience etc.

## How to use
* First publish this template and ensure it's accessible via webhook URL.
* You then have to run the "create airtable webhooks" mini-flow to configure your Airtable to send change events to the n8n template. This mini-flow exists in the template but you'll have to update the IDs.

Check the template for more instructions.

## Requirements
* Airtable for Tables/Database
* OpenAI for LLM and extraction. Feel free to choose another LLM if preferred.

## Customising this workflow
* If you're not using files, you can replace the "input" field with anything you like. For example, the "input" could be single line text.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
