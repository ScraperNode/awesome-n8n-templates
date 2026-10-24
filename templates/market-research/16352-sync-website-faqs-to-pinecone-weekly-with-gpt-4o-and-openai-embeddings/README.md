# 📊 Sync website FAQs to Pinecone weekly with GPT-4o and OpenAI embeddings

> ⚡ **12 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly and crawls your website sitemap, scrapes each page, generates page-specific FAQs with OpenAI GPT-4o, embeds the Q&A content using OpenAI text-embedding-3-small, and upserts the vectors into a Pinecone index to keep a RAG knowledge base in sync.

## How it works
1. A weekly Schedule Trigger fires every Monday at midnight IST (cron: 30 18 * * 0) to start the sync pipeline automatically.
2. The workflow fetches your XML sitemap index, parses it, and extracts all sub-sitemap URLs to discover every page on your website.
3. All page URLs are merged, deduplicated, and filtered to remove assets, CDN files, admin paths, and third-party links — then batched in groups of 10 for efficient processing.
4. Each page URL is scraped as raw HTML. Scripts, styles, nav, and footer tags are stripped, and clean content (title, meta description, H1–H3 headings, paragraphs, list items) is extracted up to 5,000 characters. Pages with fewer than 100 characters are skipped.
5. The extracted page content is sent to GPT-4o with a structured prompt that generates topic-tagged FAQ pairs in JSON format (question, answer, topic, author). Each chunk gets a deterministic chunk_id based on URL + index to ensure idempotent re-runs.
6. Each FAQ chunk is embedded using text-embedding-3-small (1536 dimensions) and upserted into Pinecone using the chunk_id as the vector ID. A 2-second wait between batches prevents API rate-limit errors.

## Setup
1. Connect your OpenAI API credential — used for both GPT-4o FAQ generation and text-embedding-3-small embeddings. Select this credential in all OpenAI nodes inside the workflow.
2. Connect your Pinecone API credential. Make sure your Pinecone index is already created with 1536 dimensions before running the workflow.
3. Open the "Get Sitemap Index" node and replace the placeholder URL with your actual XML sitemap URL (e.g. https://yoursite.com/sitemap_index.xml).
4. Open the "Upsert FAQ Chunks to Pinecone" node and set your Pinecone index name and namespace where FAQ vectors should be stored.
5. Activate the workflow — it will run automatically every Monday at midnight IST, or you can trigger it manually anytime using the "Test Workflow" button.

## Requirements
- OpenAI API key (GPT-4o access + Embeddings API)
- Pinecone account with an index pre-created at 1536 dimensions
- A website with a valid XML sitemap index (e.g. sitemap_index.xml)
- n8n instance (cloud or self-hosted)

## Customization
- Schedule Trigger — change the cron expression to adjust sync frequency (daily, bi-weekly, etc.)
- Build GPT Request node — edit the system prompt to match your brand tone, company name, or FAQ format
- Flatten & Filter All URLs node — modify the skipList array to exclude specific paths (e.g. /blog, /admin, /careers)
- Loop URLs in Batches node — increase batchSize if your site has 100+ pages and your API limits allow
- Pinecone namespace — use different namespaces to separate FAQs by language, region, or product line

## Additional info
This workflow uses deterministic chunk_id values (URL + FAQ index) so that every weekly re-run safely overwrites existing Pinecone vectors — no duplicates ever accumulate. It is fully compatible with any RAG-based AI chatbot that reads from Pinecone, including n8n AI Agent workflows using the Pinecone Vector Store node.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter, Embeddings OpenAI, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
