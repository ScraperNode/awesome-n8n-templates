# 📊 Get Xiaohongshu keyword suggestions with JustOneAPI

> ⚡ **27 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Expand a RedNote (Xiaohongshu) keyword into structured note and product search suggestions for topic research, content planning, trend discovery, and downstream automation.

## How it works
1. The workflow starts with one configuration node for your own JustOneAPI token and seed keyword. It calls the Xiaohongshu keyword-suggestions endpoint, preserves the raw API response for troubleshooting, and converts returned records into a clean reusable structure. The output separates note-oriented and product-oriented suggestions and retains request metadata, making it suitable for search workflows, content ideation, reporting, databases, dashboards, or AI enrichment.

## Setup
1. Import the template and open the Prepare API and Keyword Inputs node. Enter your own JustOneAPI token and replace the sample keyword with the topic you want to expand. Run the workflow manually, inspect the raw response, and verify both note and product suggestion lists. Then connect the cleaned output to note search, product research, a spreadsheet, database, content calendar, dashboard, or AI-assisted planning workflow.

## Requirements
- Your own JustOneAPI token, a seed keyword, and n8n with HTTP Request and Code nodes.

## Customization
- Process multiple seed keywords, deduplicate suggestions, classify search intent, or send output to Google Sheets, Airtable, Notion, a database, or an AI model.

## Additional info
Useful for Xiaohongshu SEO research, topic discovery, content ideation, product research, and search-term expansion. No RedNote cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
