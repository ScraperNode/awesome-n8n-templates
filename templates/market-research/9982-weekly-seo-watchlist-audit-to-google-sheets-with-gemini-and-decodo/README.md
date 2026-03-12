# 📊 Weekly SEO watchlist audit to Google Sheets with Gemini and Decodo

> ⚡ **139 views** · 📊 [Market Research & Insights](../)

## Description

## Weekly SEO Watchlist Audit to Google Sheets (Gemini + Decodo)

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

Automatically fetches page content, generates a compact SEO audit (score, issues, fixes), and writes both a per-URL summary and a normalized “All Issues” table to Google Sheets—great for weekly monitoring and prioritization.

## Who’s it for?
Content/SEO teams that want lightweight, scheduled audits of key pages with actionable next steps and spreadsheet reporting.

## How it works
1. Weekly trigger loads the Google Sheet of URLs.
2. Split in Batches processes each URL.
3. Decodo fetches page content (markdown + status).
4. Gemini produces a strict JSON audit via the AI Chain + Output Parser.
5. Code nodes flatten data for two tabs.
6. Google Sheets nodes append Summary and All Issues rows.
7. Split in Batches continues to the next URL.

## How to set up
- Add credentials for Google Sheets, [Decodo](https://visit.decodo.com/discount), and Gemini.
- Set `sheet_id` and Sheet GIDs in the Set node.
- Ensure input sheet has a `URL` column.
- Configure your Google Sheets tabs with proper headers matching each field being appended (e.g., URL, Decodo Score, Priority, etc.).
- Adjust schedule as needed.
- Activate the workflow.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
