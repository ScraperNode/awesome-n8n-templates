# 📊 Research e-commerce products with Firecrawl and AI for a full market report

> ⚡ **354 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does

This AI agent researches any product across e-commerce marketplaces and generates a full market analysis report from a single chat message. Tell it what you're looking for, your budget, and optionally the region — it handles the rest.

The agent will:
- Search across marketplaces (Amazon, Noon, Jumia, AliExpress, and more)
- Scrape the top product pages for real pricing, ratings, and reviews
- Analyze the data and return a structured report including market overview, top products with links, buying insights, common complaints, and a recommendation with market gap analysis for sellers

## Key features

- **Multi-marketplace support**: Amazon (.com, .eg, .sa, .ae), Noon, Jumia, AliExpress, eBay
- **Regional awareness**: Automatically detects Egypt, Saudi Arabia, UAE, or defaults to global search
- **Bilingual**: Works in English and Arabic (Egyptian dialect)
- **Currency-aware**: Uses EGP, SAR, AED, or USD based on user input
- **Market gap analysis**: Identifies selling opportunities, not just buying recommendations

## Example prompts

- "Research the best wireless earbuds under $30"
- "ابحثلي عن أحسن ماكينة قهوة في مصر أقل من 2500 جنيه"
- "Find the best robot vacuum on Amazon under $200"
- "ابحثلي عن أحسن powerbank في السعودية أقل من 100 ريال"

## How it works

1. User sends a product research request via the chat trigger
2. The AI Agent plans a search strategy based on product, budget, and region
3. Firecrawl Search finds relevant product and review pages across the web
4. Firecrawl Scrape extracts detailed product data from the top results
5. The AI analyzes everything and generates a structured report with actionable insights

## Set up steps (takes 2 minutes)

1. **Firecrawl API key**: Sign up free at [firecrawl.dev](https://firecrawl.dev) and add your API key to both Firecrawl nodes
2. **LLM API key**: Add your OpenAI or OpenRouter API key to the Chat Model node. Recommended model: any model with a large context window (e.g., Gemini 2.5 Flash, GPT-4o)
3. **Start researching**: Click "Open Chat" and type your product research query

## Who is this for

- E-commerce sellers doing product research
- Dropshippers finding winning products
- Affiliate marketers comparing products
- Anyone who wants to shop smarter

## Built with

- n8n AI Agent node
- Firecrawl (Search + Scrape)
- Compatible with OpenAI, OpenRouter, Google Gemini, and other LLM providers

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
