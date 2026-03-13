# ⚒️ Multi-source RAG system with GPT-4 Turbo, news & academic papers integration

> ⚡ **1,570 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Multi-Source RAG System with GPT-4 Turbo, News & Academic Papers Integration

This workflow provides an enterprise-grade RAG (Retrieval-Augmented Generation) system that intelligently searches multiple sources and generates AI-powered responses using GPT-4 Turbo.

## How it works

This workflow provides an enterprise-grade RAG (Retrieval-Augmented Generation) system that intelligently searches multiple sources and generates AI-powered responses using GPT-4 Turbo.

## Key Steps

1. **Form Input** - Collects user queries with customizable search scope, response style, and language preferences
2. **Intelligent Search** - Routes queries to appropriate sources (web, academic papers, news, internal documents)
3. **Data Aggregation** - Unifies and processes information from multiple sources with quality scoring
4. **AI Processing** - Uses GPT-4 Turbo to generate context-aware, source-grounded responses
5. **Response Enhancement** - Formats outputs in various styles (comprehensive, concise, technical, etc.)
6. **Multi-Channel Delivery** - Delivers results via webhook, email, Slack, and optional PDF generation

## Data Sources & AI Models

### Search Sources
- **Web Search**: Google, Bing, DuckDuckGo integration
- **Academic Papers**: arXiv, PubMed, Google Scholar
- **News Articles**: News API, RSS feeds, real-time news
- **Technical Documentation**: GitHub, Stack Overflow, documentation sites
- **Internal Knowledge**: Google Drive, Confluence, Notion integration

### AI Models
- **GPT-4 Turbo**: Primary language model for response generation
- **Embedding Models**: For semantic search and similarity matching
- **Custom Prompts**: Specialized prompts for different response styles

## Set up steps

**Setup time: 15-20 minutes**

1. **Configure API credentials** - Set up OpenAI API, ScrapeGraphAI, Google Drive, and other service credentials
2. **Set up search sources** - Configure academic databases, news APIs, and internal knowledge sources
3. **Connect analytics** - Link Google Sheets for usage tracking and performance monitoring
4. **Configure notifications** - Set up Slack channels and email templates for automated alerts
5. **Test the workflow** - Run sample queries to verify all components are working correctly

**Keep detailed configuration notes in sticky notes inside your workflow**

## 🔗 Nodes Used

HTTP Request, OpenAI, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
