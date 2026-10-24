# 💬 Generate spintax cold email copy per lead for any email provider

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Renders deterministic, per-row email subjects and bodies with the Spintax node — unique copy for every lead (or a distinct description for every product), reproducible via seeds — then hands the finished text to your sending tool.

## How it works
1. Runs when you manually execute the workflow.
2. Loads a list of leads (or products) with fields like name, company, product, price, and stock.
3. Uses Spintax to render a unique email subject per item using the item’s fields and a seed based on the company.
4. Uses Spintax again to render a personalized email body with variables, conditionals (for discounts), and pluralization (for stock counts).
5. Outputs the rendered subject and body for each item so you can map them into your email platform, Gmail, or SMTP step.

## Setup
1. Replace the sample Code step with your real lead/product source (for example Google Sheets, Airtable, or a CRM) and ensure the fields you reference exist (e.g. first_name, company, product, price, in_stock, has_discount).
2. Update the Spintax templates (subject/body) to match your offer and the variables you want to personalize.
3. Replace the final placeholder step with your sending or publishing node (Email, Gmail, SMTP, or an ESP API) and map the rendered subject and body fields into it.

## Requirements
- Self-hosted n8n with community nodes enabled (instance admin setting)
- The n8n-nodes-spintax community node — install via Settings → Community Nodes → "n8n-nodes-spintax"
- No credentials or API keys — the Spintax engine is bundled into the node and renders locally

## Customization
- Swap the sample Code step for Google Sheets, Airtable or your CRM — every row field automatically becomes a %variable%
- Edit the subject/body Spintax templates: enumerations {a|b|c}, conditionals {?field?…|…}, plural agreement {plural %n%: unit|units}
- Change the seed expression suffix to re-roll all copy, or seed by SKU + {{ $json.product }}:site-a to get a distinct stable variant per site
- Feed a product catalog instead of leads — the same flow writes a unique product description per product per storefront

## Additional info
The node ships zero runtime dependencies and makes no network calls — everything renders inside your n8n. Incoming values are neutralized by default, so scraped data containing { or | stays text rather than being executed as markup. Seeds make output reproducible: re-running the workflow never reshuffles copy that already went out. For templates using 3-form plurals (e.g. Russian), set the node's Locale field accordingly. Guide: https://spintax.net/spintax-for-n8n/ · Node: https://www.npmjs.com/package/n8n-nodes-spintax

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
