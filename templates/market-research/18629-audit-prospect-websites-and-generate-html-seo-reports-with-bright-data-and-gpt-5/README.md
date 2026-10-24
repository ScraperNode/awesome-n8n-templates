# 📊 Audit prospect websites and generate HTML SEO reports with Bright Data and GPT-5.6

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects key pages from a prospect’s website via Bright Data Web Unlocker, audits technical SEO signals from the raw HTML and robots.txt, uses OpenAI (GPT-5.6) to write a short summary, stores the results in an n8n Data Table, and returns a downloadable HTML report.

## How it works
1. Starts from an n8n Form submission where you enter the prospect’s domain and your agency name.
2. Builds a small list of page URLs to check (homepage plus configured paths) and fetches each page’s raw HTML using Bright Data’s Web Unlocker.
3. Parses each page’s HTML to evaluate checks like title tag length, meta description, canonical, H1 count, viewport, meta robots, image alt coverage, structured data, mixed-content references, and a basic word count.
4. After all pages are processed, fetches and parses the site’s robots.txt via Bright Data to detect high-impact blocking rules and any declared sitemap.
5. Aggregates pass/fail counts across all pages, calculates an overall score, and sends only the rolled-up findings to OpenAI (GPT-5.6) to generate a 60–100 word opening summary.
6. Builds a self-contained HTML audit report, upserts a record for the site into the n8n Data Table, and returns the report as a downloadable .html file.

## Setup
1. Add a Bright Data Web Unlocker “Header Auth” credential and set the Bright Data zone name used by the workflow.
2. Add an OpenAI credential for the chat model used to write the report summary.
3. Create an n8n Data Table named `site_audits` (with at least a `site` column) and select it in the upsert step.
4. Update the workflow settings for the paths to check (for example `/, /pricing, /contact`) and adjust them to match the page types you want audited.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, Convert to File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
