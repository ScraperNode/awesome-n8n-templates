# 🎣 Draft funding-based cold email openers with Datahyena and OpenAI GPT-4o

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs daily at 9am to fetch recent $1M+ funding events from Datahyena, uses OpenAI Chat Completions to generate a two-sentence cold email opener referencing each raise, and outputs a structured draft record with company and funding details.

## How it works
1. Runs every morning at 9am on a schedule.
2. Requests up to 15 funding events from the last day from the Datahyena Funding Events API, filtered to rounds with at least $1M raised.
3. Splits the API response so each funding event is processed individually.
4. Sends the company and funding details to the OpenAI Chat Completions API to generate a concise, funding-aware cold email opener.
5. Outputs a cleaned draft object containing the company name, domain, round, amount, announcement date, and generated opener text.

## Setup
1. Add an HTTP Header Auth credential for Datahyena (header `X-API-Key`) and select it in the Datahyena request step.
2. Add an HTTP Header Auth credential for OpenAI (header `Authorization: Bearer <YOUR_OPENAI_KEY>`) and select it in the OpenAI request step.
3. Update the prompt text in the OpenAI request to replace “EDIT THIS WITH WHAT YOU SELL” with your actual offer.
4. Optionally connect a destination after the final output to store or send drafts (for example Google Sheets, Gmail, or a CRM).

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
