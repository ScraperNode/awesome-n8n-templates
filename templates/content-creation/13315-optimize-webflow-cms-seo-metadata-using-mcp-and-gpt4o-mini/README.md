# 🎬 Optimize Webflow CMS SEO metadata using MCP and GPT‑4o-mini

> ⚡ **63 views** · 🎬 [Content Creation & Video](../)

## Description

## Who's it for

Marketing teams, content creators, and agencies managing Webflow CMS sites who need to optimize SEO metadata at scale.

## How it works

The workflow fetches CMS items from Webflow, then uses AI to rewrite titles and descriptions to meet SEO best practices (50-60 character titles, 120-155 character meta descriptions). It automatically publishes changes back to Webflow and logs all updates to Google Sheets for audit purposes.

## Requirements

- Webflow site with CMS collections
- MCP Webflow OAuth2 credentials
- Any LLM api
- Google Sheets for logging (optional)

## How to set up

1. **Get your collection ID**: In Webflow, go to your CMS collection → copy the collection ID
2. **Update Set Fields node**: Replace collectionId with yours
3. **Update Format for Update node**: Replace collectionId
4. **Match field names**: If your collection uses different fields than "name" and "project-summary", update the agent prompt and Format for Update code
5. **Test first**: Set batch size to 1 and run on a single item
6. **Scale up**: Increase batch size gradually


## How to customize

**Change character limits**: Adjust minTitleLength, maxTitleLength, minSummaryLength, maxSummaryLength in Set Fields node. Add more fields like alt-text, post body, slug, etc.

**Different field names**: Update agent system prompt, Structured Output Parser schema, and Format for Update code

## 🔗 Nodes Used

Google Sheets, AI Agent, Simple Memory, Structured Output Parser, OpenRouter Chat Model, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
