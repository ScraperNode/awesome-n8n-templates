# 👥 Ai data extraction with dynamic prompts and Baserow

> ⚡ **2,958 views** · 👥 [HR & Recruitment](../)

## Description

This n8n template introduces the **Dynamic Prompts** AI workflow pattern which are incredible for certain types of data extraction tasks where attributes are unknown or need to remain flexible.

The general idea behind this pattern is that the prompts for requested attributes to be extracted live outside the template and so can be changed at any time - without needing to edit the template. This seriously cuts down on maintainance requirements and is reusable for any number of tables at little cost.

**Check out the n8n Studio Episode here**: [https://www.youtube.com/watch?v=_fNAD1u8BZw](https://www.youtube.com/watch?v=_fNAD1u8BZw)

**Community post here**: [https://community.n8n.io/t/dynamic-prompts-with-n8n-baserow-and-airtable/72052](https://community.n8n.io/t/dynamic-prompts-with-n8n-baserow-and-airtable/72052)


**Looking for the Airtable Version?** [https://n8n.io/workflows/2771-ai-data-extraction-with-dynamic-prompts-and-airtable/](https://n8n.io/workflows/2771-ai-data-extraction-with-dynamic-prompts-and-airtable/)


## How it works
* Given we have an "input" field for context and a number of fields for the data we want to extract, this template will run in the background to react to any changes to either the "input" or fields and automatically update the rows accordingly.
* The key is that Baserow fields have a special property called the "field description". In this pattern, we use this property to allow the user to store a simple prompt describing the data that should exist in the column.
* Our n8n template reads these column descriptions aka "prompts" to use as instructions to perform tasks on the "input".
* In this template, the "input" is a PDF of a resume/CV and the columns are attributes a HR person would want to extract from it - such as full name, address, last position, years of experience etc.

## How to use
* First publish this template and ensure it's accessible via webhook URL.
* You then have to complete the "create Baserow webhooks" steps to configure your baserow to send change events to the n8n template. Baserow webhooks are created in the Baserow web interface.

Check the template for more instructions.

## Requirements
* Baserow for Tables/Database
* OpenAI for LLM and extraction. Feel free to choose another LLM if preferred.

## Customising this workflow
* If you're not using files, you can replace the "input" field with anything you like. For example, the "input" could be single line text.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, Basic LLM Chain, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
