# 🎬 Generate LinkedIn posts using Telegram, Supabase vector DB and OpenAI RAG

> ⚡ **26 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview
AI-powered n8n workflow that creates viral LinkedIn posts by learning from successful content. Features two modules: (1) Telegram-based scraper that builds a vector database of viral LinkedIn posts, and (2) Web form that generates optimized posts using multi-agent AI with RAG (Retrieval-Augmented Generation) from your curated viral content library.

**Key Capabilities:**
- Scrapes LinkedIn post content via Telegram bot
- Stores posts in Supabase vector database with OpenAI embeddings
- 3-agent system analyzes hooks, structures outlines, and generates posts
- RAG integration retrieves similar viral posts for pattern matching
- Auto-publishes to LinkedIn or provides formatted output

# How It Works

## Module 1: Viral Post Collection (Telegram Bot)

**Step 1: URL Validation**
- User sends LinkedIn post URL to Telegram bot
- Workflow validates URL contains "linkedin.com"
- Shows typing indicator for better UX

**Step 2: Content Scraping**
- HTTP request fetches post HTML
- CSS selector extracts main commentary: `[data-test-id="main-feed-activity-card__commentary"]`
- Handles scraping failures with error messages

**Step 3: Vector Storage**
- Converts post text to OpenAI embeddings (text-embedding-ada-002)
- Stores in Supabase `linkedin_post` table with vector indexing
- Sends success confirmation via Telegram

## Module 2: AI Post Generation (Web Form)

**Stage 1: Hook Analysis Agent**
- **Input**: User-provided hook text
- **Process**: AI extracts topic, niche/industry, emotional tone, and 3-5 key points
- **Output**: Structured JSON with analyzed elements
- **Models**: GPT-4o-mini or Gemini 2.5-flash (dual fallback)

**Stage 2: Post Structure Agent**
- **Input**: Analyzed hook data
- **Process**: Creates 5-section outline (Hook, Problem, Value/Lesson, Solution, CTA)
- **Output**: Structured framework for final post
- **Models**: GPT-4o-mini or Gemini 2.5-flash

**Stage 3: Post Generator Agent (RAG)**
- **Input**: Post structure + topic
- **RAG Process**:
  - Queries Supabase vector store for 5 most similar viral posts
  - Analyzes patterns: hooks, storytelling, CTAs, engagement metrics
  - Identifies optimal length, formatting, and emotional triggers
- **Output**: Complete LinkedIn post applying viral patterns
- **Models**: GPT-4o-mini or Gemini 2.5-flash with GPT-5-NANO for structured output

**Stage 4: Publication**
- Auto-publishes to LinkedIn via API
- Or returns formatted post text for manual posting

# How To Use

## Setup

### 1. Configure Supabase Vector Database
- Create Supabase project
- Create table: `linkedin_post` with vector column (1536 dimensions for OpenAI embeddings)
- Enable vector extension: `CREATE EXTENSION vector;`
- Update credentials in "Upload Document" and "Supabase Vector Store" nodes

### 2. Set Up Telegram Bot (Module 1)
- Create bot via [@BotFather](https://t.me/BotFather)
- Get bot token and update "On Telegram Message" credentials
- Start bot and get your chat ID
- Activate workflow

### 3. Configure OpenAI API
- Add API key to "Embeddings" nodes (both modules)
- Configure language model credentials (GPT-4o-mini, GPT-5-NANO)

### 4. Set Up LinkedIn API (Optional for Module 2)
- Create LinkedIn app with member permissions
- Configure OAuth2 credentials in "Create a post" node
- Or remove node to get text output only

### 5. Access Web Form
- Get form URL from "LinkedIn Form" webhook
- Bookmark for easy access

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, LinkedIn, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
