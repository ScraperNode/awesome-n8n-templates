# 📊 Auto-Generate Competitive Battlecards with AI, Slack & Notion (Klue Alternative)

> ⚡ **86 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

---

# Enterprise Competitive Intelligence System (Klue+Crayon Alternative)

## One-Line Description
Build your own Klue/Crayon alternative: Auto-generate comprehensive competitive battlecards with AI research agents for ~$50/month instead of $1,500+

---

## Detailed Description

### What it does:
This workflow replicates enterprise competitive intelligence platforms (Klue, Crayon, Kompyte) at 5% of the cost. When sales teams mention a competitor in Slack, AI agents automatically research the company, scrape websites, analyze customer reviews, generate SWOT analysis, and compile everything into structured 9-section battlecards stored in Notion. The system then powers real-time Q&A, letting teams ask "What's their biggest weakness?" and get instant, citation-backed answers—just like Klue's "Ask Klue" feature.

### Why build vs. buy?

| Platform | Annual Cost | Licensing |
|----------|-------------|-----------|
| **Klue** | $16,000+ | Per-user fees |
| **Crayon** | $30,000+ | Enterprise-only |
| **Playwise HQ** | $3,000+ | Pro plan |
| **This workflow** | **$500-800** | **Unlimited users** |

### Who it's for:

- **Startups & scale-ups** ($1-10M ARR) that can't justify $15K+ for Klue
- **Sales enablement teams** building competitive intelligence without enterprise budgets
- **Product marketing managers** maintaining battlecard databases that stay updated
- **Founder-led sales teams** needing instant competitive insights without dedicated CI headcount
- **Companies already using n8n** looking to add competitive intelligence to their stack

---

## Key Features (vs. Enterprise Alternatives)

| Feature | This Workflow | Klue | Crayon |
|---------|---------------|------|--------|
| **AI Battlecard Generation** | ✅ 9 sections | ✅ 4-6 sections | ✅ 5-7 sections |
| **Slack Q&A Agent** | ✅ Real-time | ✅ "Compete Agent" | ❌ Manual |
| **Customer Review Analysis** | ✅ G2, Capterra | ✅ Multi-source | ✅ Multi-source |
| **SWOT Analysis** | ✅ Auto-generated | ✅ Manual/AI hybrid | ✅ Manual |
| **Data Ownership** | ✅ 100% yours | ❌ Vendor-hosted | ❌ Vendor-hosted |
| **Per-User Fees** | ✅ None | ❌ ~$1K/user/year | ❌ Custom |
| **Setup Time** | 45-60 min | Weeks | Weeks |
| **Annual Cost** | **~$500-800** | **$16,000+** | **$30,000+** |

### Core Capabilities:

- ✅ **Automatic research pipeline** - Scrapes competitor websites, reviews (G2, Capterra), LinkedIn, and product pages
- ✅ **AI-powered analysis** - Generates SWOT analysis, positioning insights, feature comparisons, and competitive attack surfaces using Claude Sonnet
- ✅ **Intelligent Q&A agent** - Sales reps ask questions in Slack and get contextual answers with proper citations (replicates Klue's "Ask Klue")
- ✅ **Structured battlecard format** - Creates 9-section competitive profiles including messaging analysis, discovery questions, and supporting quotes
- ✅ **Multi-source intelligence** - Combines website content, customer reviews, market research, and sentiment analysis
- ✅ **Database synchronization** - Maintains competitor registry in n8n Data Tables with auto-updated Notion pages

---

## How it works:

### Phase 1: Competitor Detection & Routing

1. Sales rep mentions competitor in Slack (e.g., `@bot create battlecard for Salesforce` or `@bot what's HubSpot's biggest weakness?`)
2. AI detection agent parses message, extracts competitor name, and queries n8n Data Table using fuzzy matching
3. Workflow routes to battlecard creation (new competitor) or Q&A agent (existing competitor)

### Phase 2: Research & Data Collection

For new competitors, **five parallel research streams** activate:

- **Company identification** via Perplexity (official name, website, LinkedIn)
- **Website scraping** via Jina AI (4+ key pages: homepage, features, pricing, about)
- **Customer review analysis** via Perplexity (G2, Capterra, Reddit for complaints and pain points)
- **Feature research** via Perplexity (core features, integrations, pricing model)
- **Market positioning** via Perplexity (competitive positioning, target market, differentiators)

### Phase 3: AI Battlecard Generation

**Five parallel Claude Sonnet 4.5 agents** generate distinct sections:

1. Company Overview + Basic Information
2. Positioning & Messaging Analysis
3. Feature Comparison + Product Analysis
4. SWOT Analysis (strengths, weaknesses, opportunities, threats)
5. Competitive Attack Surfaces + Discovery Questions

Supporting quotes agent extracts tactical customer quotes from reviews. Content merger combines all sections into unified markdown document.

### Phase 4: Storage & Access

Complete battlecard saves to Notion database and competitor registry. Slack confirmation sent with link to new battlecard.

### Phase 5: Real-Time Q&A

For existing competitors, Q&A agent:
- Retrieves battlecard from Notion
- Uses Claude to answer questions with battlecard data
- Optionally supplements with Perplexity for breaking news
- Posts formatted answer in Slack with section citations

---

## What makes this different:

### vs. DIY Google Docs:
- ✅ Automated research (no manual copying/pasting)
- ✅ Consistent structure across all battlecards
- ✅ Real-time Q&A without searching folders

### vs. Enterprise Tools:
- 💰 **95%+ cheaper** than Klue/Crayon ($500 vs. $16K-30K)
- 🔧 **Full customization** of research sources and battlecard structure
- 📁 **Complete data ownership** (your Notion/n8n, not vendor platform)
- 👥 **No per-user fees** (unlimited team access)

---

## Setup Requirements

### Prerequisites:

- **Slack workspace** with bot permissions (app mentions, message posting)
- **Notion workspace** with database for battlecard storage
- **n8n instance** (Cloud or self-hosted) with Data Table module
- **Anthropic API key** (Claude Sonnet 4.5 for generation, 3.5 for detection)
- **Perplexity API key** (Sonar Pro for research)
- **Jina AI API key** (web scraping)

### Estimated Setup Time:
⏱️ **45-60 minutes** including API configuration, Slack bot setup, and Notion database template creation

---

## Installation Notes

### 1. Slack Configuration:
- Create Slack app with scopes: `app_mentions:read`, `chat:write`, `channels:history`
- Subscribe to `app_mention` event pointing to n8n webhook

### 2. Notion Setup:
- Use provided template (30 rich text properties for battlecard sections)
- Create integration and share database with it
- Copy database ID from URL

### 3. n8n Configuration:
- Create Data Table "Competitors" with columns: `Competitor_Name` (text), `Notion_URL` (text)
- Import workflow JSON and update credentials
- Store your company's Notion profile page ID in "Get Our Page" tool node

### 4. Testing:
- Test battlecard creation with small company
- Verify fuzzy matching with typos (`salesforce.com` → `Salesforce`)
- Test Q&A agent on existing battlecard

### ⚠️ Common Issues:
- **Perplexity rate limits:** Space calls 30+ seconds apart
- **Slack formatting:** Use single asterisks `*bold*` not double
- **Notion properties:** Requires 30-property minimum (do not reduce)

---

## Customization Options

### Research Sources
Swap Perplexity for OpenAI/Tavily, add YouTube/GitHub scrapers, integrate Crunchbase API

### Storage Backend
Replace Notion with Airtable, Google Docs, Confluence, or PostgreSQL

### Battlecard Structure
Add/remove sections (pricing analysis, customer case studies, security comparison), reorder based on priorities

### Q&A Enhancements
Add threaded replies, create slash commands, schedule weekly competitor news digests

### Advanced Features
Quarterly auto-refresh, CRM integration (show battlecards in Salesforce deals), Gong integration (auto-generate from sales calls)

---

## Who This Workflow Replaces

### Direct Alternatives:
- ✅ **Klue** - Competitive enablement platform ($16K+/year)
- ✅ **Crayon** - Competitive intelligence platform ($30K+/year)
- ✅ **Kompyte** - Competitive tracking tool ($300-5K/year)
- ✅ **Playwise HQ** - AI battlecard generator ($3K-5K/year)
- ✅ **Contify** - Market intelligence platform (Enterprise pricing)

---

## Category
**Sales & Marketing**

## Tags
`competitive-intelligence` `sales-enablement` `slack-bot` `notion-database` `ai-research` `battlecards` `klue-alternative` `crayon-alternative` `competitive-analysis` `sales-automation` `market-intelligence`

---

## Use Case Examples

### 🎯 B2B SaaS Sales Team
Generate battlecards when new competitors emerge in deals. Sales leader mentions `@bot create battlecard for Airtable`—60 seconds later, entire team has comprehensive competitive profile with attack angles and discovery questions.

### 📊 Product Marketing at Startup
Maintain living competitor database that eliminates manual quarterly research (saving 20+ hours/quarter). PM uses Q&A mid-presentation: `@bot what's Linear's current pricing?` gets instant answer.

### 🚀 RevOps & Enablement Team
Provide instant Slack Q&A for reps mid-call (`@bot what questions expose Salesforce's pricing gaps?`). New hires onboard faster with centralized, AI-maintained knowledge base versus outdated PDFs.

### 💼 Founder-Led Sales
Solo founder can't afford $16K for Klue but needs professional competitive intelligence. Build battlecard library organically over months for ~$50/month in API fees.

### 🏢 Enterprise Replacing Klue/Crayon
Company with 100+ reps spent $35K/year on Crayon but only used battlecards. Migrated to this workflow, saved $33K annually, maintained same adoption with identical Slack integration.

---

## 💡 Pro Tip
Start with 5-10 most common competitors to build core library, then add others as they appear in deals. This workflow pays for itself after creating just 3-4 battlecards versus hiring freelance researchers or buying enterprise tools.

## 🔗 Nodes Used

Slack, Notion, AI Agent, Anthropic Chat Model, Chat Trigger, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
