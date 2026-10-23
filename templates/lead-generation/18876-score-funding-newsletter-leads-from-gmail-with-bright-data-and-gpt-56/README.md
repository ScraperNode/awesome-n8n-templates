# 🎣 Score funding newsletter leads from Gmail with Bright Data and GPT-5.6

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow monitors a Gmail label for unread funding newsletters, extracts newly funded companies with OpenAI (GPT-5.6), enriches them via Bright Data search and website reads, scores fit against your buyer profile, stores results in an n8n Data Table, and emails you a single digest of the best prospects.

## How it works
1. Triggers every 15 minutes when an unread email arrives under the specified Gmail label.
2. Extracts and cleans the newsletter body text, then uses OpenAI (GPT-5.6) to pull structured funding rounds and company details from the prose.
3. Loads previously seen companies from the n8n Data Table and filters out repeats and small rounds, keeping only a capped list of new companies.
4. For each new company, uses Bright Data to run a Google search, avoids publisher results, and selects the most likely official website.
5. Uses Bright Data Web Unlocker to fetch the company homepage content and normalizes it for analysis.
6. Sends the funding data, search snippets, and homepage text to OpenAI (GPT-5.6) to produce a 0–100 fit score plus a call angle and “why now,” then routes results by tier and upserts them into the Data Table.
7. Builds a single HTML digest of the “hot” companies (and a brief watch list) and sends it to your target address via Gmail.

## Setup
1. Connect your Gmail account, create a Gmail filter that applies a dedicated label to your funding newsletters, and update the label and recipient email in the Settings values.
2. Add an OpenAI credential and ensure the model selection is available for the OpenAI nodes.
3. Add a Bright Data HTTP Header Auth credential and set your Bright Data SERP and Web Unlocker zone names in the Settings values.
4. Create an n8n Data Table named `funding_seen` with columns `company_key`, `company`, `amount_musd`, `stage`, `tier`, `score`, `angle`, and `first_seen`.
5. Edit the buyer description and scoring thresholds in Settings (minimum round size, max companies to score, and hot/watch score cutoffs).

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
