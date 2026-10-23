# 📱 Post LinkedIn content from a Supabase knowledge base using Google Gemini

> ⚡ **25 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automates your LinkedIn content creation pipeline. It syncs Google Drive files directly into a Supabase knowledge base, uses a Google Gemini and Tavily AI Agent to perform real-time web research, and automatically generates, designs, and publishes daily structured posts with custom AI images.

## How it works
1. New files added to a watched Google Drive folder are automatically downloaded, text-extracted, chunked, and embedded with Google Gemini before being stored in a Supabase vector table.
2. When an existing file is updated, its previous Supabase rows are deleted first, then the refreshed content is re-downloaded, re-chunked, and re-embedded to keep the knowledge base current.
3. Every morning at 8am, a schedule trigger kicks off an AI Content Creation Agent built with Google Gemini.
4. The agent queries the Supabase knowledge base via a vector-store tool to pull a relevant company concept, service, or methodology.
5. It then searches the web with Tavily to find recent data, news, or trends that support the chosen idea, and generates structured post content (title, body, hashtags) plus an image prompt using a structured output parser.
6. Google Gemini generates a promotional image from that prompt, and the finished post—with image—is published automatically to a LinkedIn organization page.

## Setup
1. Connect your Google Drive credentials and point the "file created" and "file updated" triggers at the folder that holds your knowledge base source documents.
2. Add Supabase credentials, create a vector table (e.g. "documents") with a match_documents function, and confirm the file_id metadata field used to identify and delete stale rows on updates.
3. Add Google Gemini credentials for the chat model, embeddings, and image generation nodes, and Tavily credentials for the web search tool.
4. Connect your LinkedIn credentials, set the target organization (or personal profile) to publish to, then review the agent's prompt, output schema, and the 8am schedule before activating the workflow.

## Requirements
- Google Drive account with a folder containing the source knowledge base documents
- Supabase project with pgvector enabled and a "documents" table configured for the Supabase vector store node
- Google Gemini (PaLM) API credentials for chat, embeddings, and image generation
- Tavily API account for web search
- LinkedIn account (organization page or personal profile) with publishing permissions

## Customization
- Adjust the schedule trigger to post at a different time or frequency
- Edit the AI agent's system prompt and output schema to match your brand voice, language, or post structure
- Change the chunk size/overlap in the text splitter nodes to fit your document types
- Swap the image style prompt or color palette to match your visual identity
- Update the Supabase table name or metadata schema if your vector store setup differs

## Additional info
Uses two parallel Google Drive triggers (created / updated) so the vector store stays in sync automatically without manual re-indexing.

## 🔗 Nodes Used

Google Drive, LinkedIn, Google Drive Trigger, Supabase, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
