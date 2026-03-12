# 📱 Daily newsletter service using Excel, Outlook and AI

> ⚡ **14,146 views** · 📱 [Social Media & Email Marketing](../)

## Description

### This n8n template builds a newsletter ("daily digest") delivery service which pulls and summarises the latest n8n.io template in select categories defined by subscribers.

It's scheduled to run once a day and sends the newsletter directly to subscriber via a nicely formatted email. If you've had trouble keeping up with the latest and greatest templates beign published daily, this workflow can save you a lot of time!

### How it works
* A scheduled trigger pulls a list of subscribers (email and category preferences) from an Excel workbook.
* We work out unique categories amongst all subscribers and only fetch the latest n8n website templates from these categories to save on resources and optimise the number of API calls we make.
* The fetched templates are summarised via AI to produce a short description which is more suitable for our email format.
* For each subscriber, we filter and collect only the templates relevant to their category preferences (as defined in the Excel) and ensure that duplicate templates or those which have been "seen before" are omitted.
* A HTML node is then used to generate the email newsletter. HTML emails are the perfect format since we can add links back to the template.
* Finally, we use the Outlook node to send the email digest to the subscriber.

### How to use
* Populate your Excel sheet with 3 columns: name, email and categories. Categories is a comma-delimited list of categories which match the n8n template website. The available categories are AI, SecOps, Sales, IT Ops, Marketing, Engineering, DevOps, Building Blocks, Design, Finance, HR, Other, Product and Support.
* To subscribe a new user, simply add their email to the Excel sheet with at least one category.
* To unsubscribe a user, remove them from the sheet.
* If you're not interested in paid templates, you may want to filter them out after fetching.

### Requirements
* Microsoft Excel for subscriber list
* Microsoft Outlook for delivering emails
* OpenAI for AI-generated descriptions

### Customising the workflow
* Use AI to summarise the week's trend of templates types and use-cases
* This template can be the basis for other similar newsletters - just pull in a list of things from anywhere!

## 🔗 Nodes Used

HTTP Request, Microsoft Excel 365, Microsoft Outlook, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
