# 📖 Turn a YouTube channel into a second brain with Neo4j GraphRAG and GPT-4o-mini

> ⚡ **199 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### AI-powered "Second Brain" that can answer questions about any YouTube channel's content using Neo4j Graph Database and RAG.

Turn any YouTube channel into a searchable knowledge base. The AI agent understands relationships between videos, topics, tools, and concepts - enabling powerful queries like "Which videos talk about automation AND mention n8n?" or "What are the most discussed topics?".

**Good to know**

* Neo4j Aura Free Tier is sufficient for most channels (up to 200k nodes)
* Apify credits are required for YouTube scraping (~$5 for 500 videos)
* LLM costs are minimal (~$0.01 per video for entity extraction)

### How it works

* **Ingestion Flow**: Scrapes YouTube videos via Apify, including titles, descriptions, and transcripts.
* **Entity Extraction**: GPT-4o-mini analyzes each video and extracts Topics, Tools, and Concepts mentioned.
* **Graph Storage**: Data is stored in Neo4j with relationships: Video → COVERS → Topic, Video → USES → Tool, Video → EXPLAINS → Concept.
* **AI Agent**: Receives user questions, generates Cypher queries to search the graph, and returns natural language responses with relevant video links.

### How to use

1. Set up a free Neo4j Aura instance and save credentials
2. Convert your Neo4j username:password to Base64 for authentication
3. Configure Apify with your target YouTube channel URL
4. Run the ingestion workflow to populate the database
5. Chat with the AI agent to query your video knowledge base

### Requirements

* Neo4j Aura account (free tier available)
* Apify account for YouTube scraping
* OpenAI API key (GPT-4o-mini) for entity extraction
* Anthropic API key (Claude) or OpenAI for the AI agent

### Customization

* Modify the system prompt to change response style or language
* Add more entity types (e.g., People, Companies, Frameworks)
* Connect multiple YouTube channels into one knowledge base
* Extend to other content sources (blogs, podcasts, Notion docs)

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, Structured Output Parser, n8n Form Trigger, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
