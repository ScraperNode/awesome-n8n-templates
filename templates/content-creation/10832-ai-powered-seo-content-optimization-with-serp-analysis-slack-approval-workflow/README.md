# 🎬 AI-powered SEO content optimization with SERP analysis & Slack approval workflow

> ⚡ **217 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📊 Description
Enhance content quality, SEO performance, and editorial consistency using an AI-powered optimization engine that blends OpenAI, Google Sheets history, Pinecone knowledge, and real-time SERP intelligence. This workflow transforms rough drafts into polished, SEO-optimized content while preserving original meaning — and includes human review before final publication. 🚀✍️

## What This Template Does
- Step 1: Trigger the optimization from Chat or manual run: Starts the optimization process using the Chat Trigger node, passing topic, content ID, and customization parameters. 💬
- Step 2: Retrieve contextual knowledge: Pulls historical versions from Google Sheets and relevant company information from Pinecone vector storage to guide consistent optimization. 📚
- Step 3: Fetch SERP competitor data: Uses SerpAPI to gather ranking competitors, headings, snippets, PAA questions, and search intent to strengthen the optimized draft. 🔍
- Step 4: Run AI content optimization: AI Agent (GPT-4o-mini) rewrites the draft without starting from scratch, improving structure, SEO, tone, clarity, and keyword coverage. 🤖
- Step 5: Enforce structured JSON output: Ensures the optimized draft follows a strict JSON schema containing title, meta description, sections, keywords, and metadata. 🧩
- Step 6: Request human review in Slack: Sends the optimized draft to Slack and waits for approval (approve/reject). Team members can refine or confirm before finalization. 💬🧑‍💼
- Step 7: Save approved version back to Google Sheets: Updates or appends a new version in the content_versions sheet with metadata, SEO fields, and version history. 📊
- Step 8: Send success confirmation to Slack: Posts a notification confirming that the approved draft has been published. 🔔

## Key Benefits
✓ Eliminates manual editing and SEO refinement
 ✓ Produces consistent, high-quality, conversion-focused content
 ✓ Ensures factual accuracy and tone preservation
 ✓ Enhances content using SERP-based competitor insights
 ✓ Maintains version history for auditability
 ✓ Introduces structured human approval workflow
 ✓ Fully automated publishing pipeline

## Features
- AI-assisted rewrite using GPT-4o-mini
- Google Sheets version retrieval + updating
- Pinecone knowledge base retrieval
- SERP competitor and keyword intelligence
- Slack approval workflow (sendAndWait)
- Structured JSON output enforcement
- Version incrementing & metadata tracking
- Secure credentials management

## Requirements
- OpenAI API Key (GPT-4o-mini or higher)
- Google Sheets OAuth2 credentials
- SerpAPI Key
- Slack Bot Token with chat:write
- Pinecone API and vector index
- Pre-created Google Sheet for versioning
- Optional: Existing company knowledge stored in Pinecone

## Target Audience
1. SEO content teams optimizing blog drafts
2. Marketing teams refining landing pages
3. Agencies managing editorial workflows
4. Enterprises maintaining knowledge-based content
5. Writers/editorial teams that need AI assistance + human QA
6. Teams that require version-controlled SEO content

## Step-by-Step Setup Instructions
- Connect these credentials in n8n: OpenAI, Slack, Google Sheets, Pinecone, SerpAPI. 🔐
- Replace Google Sheet ID in the Sheets nodes with your own.
- Ensure your Pinecone index exists and contains embeddings.
- Configure Slack channel ID for approvals and notifications.
- Update test topic/content ID in the Set Input Parameters node.
- Run a manual test to confirm SERP retrieval, data context, and AI output.
- Deploy and use Chat Trigger to start generating optimized content on demand.

## 🔗 Nodes Used

Google Sheets, Slack, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
