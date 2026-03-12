# 🎬 Transform YouTube transcripts to content assets with AI and Google Sheets

> ⚡ **80 views** · 🎬 [Content Creation & Video](../)

## Description

## Transform YouTube Transcripts to Content Assets with AI, Youtube-transcript.io and Google Sheets

**For content creators, marketers, and video strategists** who want to transform YouTube competitors' video transcripts into production-ready content assets using AI-powered automation.

## Overview

This template demonstrates two approaches to YouTube transcript extraction and AI content generation: automated Google Sheets monitoring for batch processing, and direct webhook API calls for on-demand extraction. The workflow includes intelligent parsing, metadata extraction, and AI-powered content transformation.

## Key Features

**Dual Workflow Architecture**
- Google Sheets integration for automated monitoring and batch processing
- Webhook endpoint for real-time API access and instant responses
- Both paths share core extraction logic while serving different use cases

**Smart YouTube Parsing**
- Extracts video IDs from multiple URL formats (youtube.com, youtu.be, embed)
- Regex-based parsing handles edge cases reliably
- Graceful error handling for invalid URLs

**Rich Metadata Extraction**
- Video title, channel name, and publish date
- Duration and category information
- Transcript text with full timestamp data
- Fallback handling for videos without transcripts

**AI Content Generation**
- Transforms raw transcripts into structured content assets
- Generates Veo3-optimized scripts (8-second scene format)
- Creates SEO-optimized titles, thumbnail concepts, tags, descriptions
- Includes virality optimization suggestions (hooks, CTAs)
- Uses OpenRouter for flexible LLM selection

**Structured Output Parsing**
- Custom code nodes parse AI responses into consistent formats
- Organized by content type (Script, Titles, Thumbnails, Tags, etc.)
- Ready for direct insertion into Google Sheets or API responses

## Technical Implementation

**Nodes Used**
- Google Sheets (Trigger & Operations)
- Webhook (Trigger & Response)
- HTTP Request (YouTube Transcript API)
- Code (JavaScript for parsing)
- LangChain LLM Chain (Content generation)
- OpenRouter Chat Model

**External Dependencies**
- YouTube Transcript API (youtube-transcript.io or similar)
- Google Sheets API credentials
- OpenRouter API access

## Use Cases

- **Content Repurposing:** Transform successful videos into new content formats
- **Competitive Analysis:** Batch analyze competitor video strategies
- **Research & Documentation:** Build searchable transcript databases
- **Accessibility:** Generate captions and text alternatives
- **SEO Analysis:** Extract and analyze video content at scale
- **Content Strategy:** Develop data-driven video concepts

## Setup Requirements

- YouTube Transcript API credentials
- Google Sheets with specified column structure (for automated workflow)
- OpenRouter API key for AI content generation
- n8n instance (cloud or self-hosted)

## Customization Options

The workflow is designed for easy extension:
- Swap AI providers by changing the LangChain model node
- Modify prompt engineering in the Chain LLM nodes
- Add additional parsing logic in Code nodes
- Connect to databases, CMS, or other storage solutions
- Integrate text analysis, summarization, or translation steps
- Add notification systems for workflow completion

## Need Help?

- **LinkedIn:** [Gerald Akhidenor](https://www.linkedin.com/in/gerald-akhidenor-1ab1a45/)
- **Work with me:** [dominixai.com](https://dominixai.com/)
- **My websites:** [jobmonkey.dev](https://jobmonkey.dev) and [mediacraftai.com](https://mediacraftai.com)
- **Email:** denorgerald@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Sheets Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
