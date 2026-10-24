# 📊 Generate SEO anchor text suggestions from URLs with Firecrawl and Claude

> ⚡ **210 views** · 📊 [Market Research & Insights](../)

## Description

**📺 Full walkthrough video: https://youtu.be/XUvPeH5LSVU**

⚠️ **Self-hosted only** — This template uses a community node (Firecrawl) and cannot run on n8n Cloud.

## Who it's for

This workflow is for SEO specialists and content managers who need to generate optimized internal linking anchor texts at scale, without manually reviewing each page. It suits agencies or in-house teams managing large site structures stored in Google Sheets.

## How it works

1. A chat message triggers the workflow and passes a Google Sheets URL as input.
2. The workflow reads all rows from the sheet and filters only those with a URL but no anchor text yet.
3. Filtered rows are fed into a loop that processes each URL one at a time.
4. Each URL is scraped using Firecrawl; failed scrapes are flagged in the sheet and skipped.
5. A code node cleans the raw markdown output (removes links, navigation, ads, etc.).
6. An AI agent powered by Claude Sonnet 4 analyzes the cleaned content and generates 10 SEO anchor text suggestions with linguistic variations.
7. Results are written back to the Google Sheet; the loop then continues to the next row.

## How to set up

- [ ] Connect your Google account and point the **Read Sheet Data** node to the correct spreadsheet and sheet tab.
- [ ] Add your **Firecrawl** API credentials to the `Scrape URL via Firecrawl` node.
- [ ] Add your **Anthropic** API key to the `Claude Sonnet 4 Model` node.
- [ ] Verify the **Filter** node conditions match your sheet column names (`URL` not empty, `Anchors` empty).
- [ ] Configure both **Update** nodes to write to the correct columns in your sheet.

## Requirements

- Google Sheets account (OAuth2)
- Firecrawl account and API key
- Anthropic API key (Claude Sonnet 4)
- n8n self-hosted instance (community node required)

## How to customize

- Swap Claude Sonnet 4 for another LLM supported by n8n LangChain nodes (GPT-4o, Mistral, etc.).
- Edit the AI agent system prompt to generate other types of SEO content, such as meta descriptions or H1 suggestions.
- Extend the filter logic to support multiple processing statuses (e.g., re-process rows marked as outdated).

## 🔗 Nodes Used

Google Sheets, Filter, AI Agent, Anthropic Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
