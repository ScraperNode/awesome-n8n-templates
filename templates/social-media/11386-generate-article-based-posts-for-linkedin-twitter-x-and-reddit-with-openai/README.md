# 📱 Generate article-based posts for LinkedIn, Twitter (X), and Reddit with OpenAI

> ⚡ **98 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview
AI-powered workflow that transforms any article URL into platform-optimized social media posts for LinkedIn, Twitter (X), and Reddit. Uses Mozilla Readability for content extraction, multi-agent AI with RAG from viral LinkedIn post database, and interactive review forms for content refinement before auto-publishing.

**Key Capabilities:**
- Extracts article content: title, author, text, images, metadata
- Generates LinkedIn posts using 3-agent system with viral pattern matching
- Creates Twitter threads under 280 characters with article links
- Auto-posts to Reddit with AI-selected flairs
- Interactive review/regeneration workflow with feedback loops
- Auto-publishes with images or links to all platforms

# How It Works

## Stage 1: Article Content Extraction
1. **Form Submission**: User enters article URL (with basic auth protection)
2. **URL Validation**: Checks if valid URL format
3. **Article Scraping**: HTTP request fetches HTML content
4. **Readability Parsing**: Mozilla Readability extracts:
   - Clean article text (removes ads, navigation, etc.)
   - Title, author, excerpt
   - Word count, site name
   - Featured image (from og:image, twitter:image, or first img tag)
5. **Error Handling**: Returns user-friendly error if scraping fails

## Stage 2: LinkedIn Post Generation (3-Agent System)

**Agent 1: LinkedIn Post Strategist**
- **Input**: Extracted article content (title, text, author, excerpt)
- **RAG Process**: Queries Supabase vector database for similar viral LinkedIn posts
- **Analysis**: Identifies patterns, hooks, formatting, engagement triggers
- **Output**: Strategic insights and viral content patterns

**Agent 2: LinkedIn Post Generator**
- **Input**: Article content + strategist insights
- **Process**: Creates post using viral patterns from database
- **Rule**: Must include article URL in post
- **Output**: Draft LinkedIn post

**Agent 3: LinkedIn Post Formatter**
- **Input**: Generated post
- **Process**: 
  - Removes extraneous content
  - Applies Sans Serif Bold Unicode for emphasis (𝗯𝗼𝗹𝗱 𝘁𝗲𝘅𝘁)
  - Removes markdown/em dashes
  - Ensures clean formatting
- **Output**: Polished, ready-to-post LinkedIn content

**Review Loop**:
1. User sees formatted post in web form
2. Options: "Regenerate" or "Continue"
3. If regenerate: Provide feedback → Agent creates new version
4. Second review form with same options
5. After 2 iterations or approval, proceeds to image selection

## Stage 3: Image Handling for LinkedIn
1. **Image Preview**: Shows extracted article image
2. **User Choice**:
   - "Yes" → Downloads image, posts with text + image
   - "Continue without Image" → Posts with text + article link preview
3. **Auto-Publish**: Posts to LinkedIn with selected format

## Stage 4: Twitter (X) Post Generation
**Parallel process** (runs alongside LinkedIn):
1. **Twitter Agent**: 
   - Creates tweet under 280 characters (including spaces)
   - Must include article URL
   - Uses GPT-4.1 or GPT-5 models
2. **Tweet Review Form**: User reviews generated tweet
3. **Regeneration Loop** (if requested):
   - User provides feedback
   - Re-generate Tweet Agent creates new version
   - Second review form
4. **Auto-Tweet**: Posts with article image attachment

## Stage 5: Reddit Post Automation
**Parallel process** (runs alongside LinkedIn/Twitter):
1. **Subreddit Selection**: User picks from dropdown (r/n8n, r/mcp, r/technews)
2. **Flair Retrieval**: Fetches available flairs for selected subreddit via Reddit API
3. **AI Flair Selection**: 
   - GPT-4o-mini analyzes article title + available flairs
   - Selects most appropriate flair
4. **Auto-Post**: Submits link post to Reddit with title and selected flair

# How To Use

## Prerequisites

### API Credentials Required
1. **OpenAI API**: GPT-4.1, GPT-5, GPT-5-mini, GPT-4o-mini access
2. **Supabase**: Vector database with `linkedin_post` table (from previous workflow)
3. **LinkedIn OAuth2**: Developer app with posting permissions
4. **Twitter OAuth2**: Developer account with tweet permissions
5. **Reddit OAuth2**: App credentials with submit permissions
6. **Basic Auth**: For form password protection

## Setup Steps

### 1. Configure Form Access
- Open **"On Article Submission"** node
- Set up basic auth credentials for form protection
- Get form URL from webhook settings

### 2. Link Vector Database
- Ensure Supabase vector store has viral LinkedIn posts (use previous workflow to populate)
- Verify **"LinkedIn Post Vector Store"** credentials
- Check **"Embedding"** node has OpenAI API key

### 3. Set Up Social Media APIs

**LinkedIn**:
- Configure **"Text + Image"** and **"Text + Link"** nodes
- Update `person` parameter with your LinkedIn profile ID
- Add OAuth2 credentials

**Twitter**:
- Configure **"Tweet"** and **"Re-generated Tweet"** nodes
- Add Twitter OAuth2 credentials

**Reddit**:
- Update subreddit list in **"Reddit Form"** dropdown (customize to your subreddits)
- Configure **"Get Flair"**, **"Reddit Post"** nodes with OAuth2
- Update subreddit name in **"Reddit Post"** query parameters

### 4. Configure AI Models
- Verify all OpenAI credentials in language model nodes
- Models used: GPT-4.1, GPT-5, GPT-5-mini (adjust based on your access)

## 🔗 Nodes Used

HTTP Request, X (Formerly Twitter), LinkedIn, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
