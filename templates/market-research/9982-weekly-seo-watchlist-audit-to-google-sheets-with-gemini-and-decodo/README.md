# 📊 Weekly SEO watchlist audit to Google Sheets with Gemini and Decodo

> ⚡ **172 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

Automatically fetches page content, generates a compact SEO audit (score, issues, fixes), and writes both a per-URL summary and a normalized “All Issues” table to Google Sheets—great for weekly monitoring and prioritization.

## How it works
1. Weekly trigger loads the Google Sheet of URLs.
2. Split in Batches processes each URL.
3. Decodo fetches page content (markdown + status).
4. Gemini produces a strict JSON audit via the AI Chain + Output Parser.
5. Code nodes flatten data for two tabs.
6. Google Sheets nodes append Summary and All Issues rows.
7. Split in Batches continues to the next URL.

## Setup
1. Add credentials for Google Sheets, Decodo, and Gemini.
2. Set sheet_id and Sheet GIDs in the Set node.
3. Ensure input sheet has a URL column.
4. Configure your Google Sheets tabs with proper headers matching each field being appended (e.g., URL, Decodo Score, Priority, etc.).
5. Adjust schedule as needed.
6. Activate the workflow.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
