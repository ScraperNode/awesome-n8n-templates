# 📊 Run on-page SEO and GEO audit reports with IONOS AI Model Hub and Gmail

> ⚡ **349 views** · 📊 [Market Research & Insights](../)

## Description

This n8n template shows you how to automate on-page SEO and GEO (Generative Engine Optimization) audits with a sovereign AI. By combining a web crawler and the IONOS AI Model Hub, any URL you submit is fully analyzed and a structured audit report is delivered to your inbox in minutes.

## Use cases

- **SEO audits at scale:** Submit any URL through a simple form and receive a ready-to-share audit report — no manual checking of title tags, meta descriptions, or schema markup needed.
- **GEO readiness check:** Assess whether a page is likely to be cited by AI-powered search engines like Google AI Overviews, Bing Copilot, or Perplexity — covering E-E-A-T signals, answer-ready content, and structured data quality.
- **On-demand analysis:** Trigger an audit any time directly from the form;

## How it works

A **Form Trigger** collects three inputs: the target URL, the preferred crawler type, and the recipient email address. A **Switch node** routes the request to either a simple HTTP crawler (fast, suitable for static and server-rendered sites) or a headless browser crawler powered by Apify Playwright (for JavaScript-heavy SPAs built with React, Vue, or Angular).

The **Extract SEO Data** code node then processes the raw HTML: it preserves the full `&lt;head&gt;` section including JSON-LD structured data, extracts the heading hierarchy (H1–H6), captures image alt attributes, collects internal and external links with anchor text, and strips the body down to clean readable text — giving the AI a complete and structured picture of the page.

The **SEO + GEO Audit** node sends this data to the IONOS AI Model Hub (Mistral Nemo) with a detailed prompt that instructs the model to return a two-part Markdown report. Part 1 covers SEO signals: title tag, meta description, canonical URL, robots directives, heading structure, schema markup, Open Graph tags, hreflang, image alt texts, and link signals. Part 2 covers GEO signals: E-E-A-T attribution, factual clarity, answer-ready content, structured data quality for AI parsers, citation worthiness, brand entity consistency, and content freshness.

Each finding is categorized as a Critical Issue, Quick Win, or Opportunity. A **Markdown node** converts the report to HTML, and a **Gmail node** delivers it as a formatted email to the address entered in the form.

## Good to know

**HTTP vs Headless:** Use HTTP for standard WordPress, static HTML, or server-rendered sites — it is faster and free. Switch to Headless (Apify or other provider) only when the page relies on JavaScript to render its content, such as React or Vue applications. 

**Model selection:** The IONOS AI Model Hub offers several LLMs. Mistral Nemo delivers strong reasoning for structured SEO analysis. You can swap the model name directly in the audit node for any model available on the Hub.

**Data extraction:** The workflow extracts headings, image alts, and links as structured fields before stripping tags — so the AI can audit alt text coverage and heading hierarchy accurately, not just guess from plain text.

## How to set it up

1. Import the workflow JSON into your n8n instance.
2. Add your IONOS Cloud API token to the IONOS Cloud Chat Model node credentials.
3. Connect your Gmail OAuth2 credentials to the Gmail node.
4. For headless crawling: create a free account at console.apify.com, copy your API token, and paste it into the Headless Browser Crawl node.
5. Activate the workflow, open the form URL, submit a test URL, and verify the audit arrives in your inbox.

## Requirements

- **n8n instance** — self-hosted or n8n Cloud
- **IONOS Cloud account** — to access the AI Model Hub (Mistral Nemo)
- **Gmail account (OAuth2)** — for delivering audit reports
- **Apify account (optional)** — only required for the Headless Browser crawler path

## 🔗 Nodes Used

HTTP Request, Gmail, Markdown, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
