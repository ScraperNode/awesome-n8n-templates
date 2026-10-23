# 🎣 Enrich KlickTipp contact fields using OpenAI GPT-5.5 and context

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives an email and a context block, uses OpenAI to extract and validate enrichment details against the existing KlickTipp subscriber record, and then updates approved mapped data fields in KlickTipp.

## How it works
1. Receives an incoming request from another workflow containing a contact email address and a free-text context block.
2. Fetches the existing subscriber record from KlickTipp using the provided email.
3. Uses OpenAI to extract enrichment attributes from the context, compare them to the current KlickTipp values, and decide final values using a confidence threshold for overwriting non-empty fields.
4. Updates the KlickTipp subscriber with the final approved values for the mapped fields (for example name, company, address, phone numbers, website, birthday, and social profile URLs).

## Setup
1. Add KlickTipp credentials and ensure the target subscriber fields (including any custom fields for LinkedIn, Instagram, Facebook, and job title) exist in your KlickTipp account.
2. Add an OpenAI API key credential and select the model you want to use in the OpenAI chat model configuration.
3. Ensure the incoming payload sent to this workflow includes at least `email` and `context`, and call this workflow from your source workflow using the Execute Workflow trigger.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
