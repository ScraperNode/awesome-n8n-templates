# 📊 Generate comprehensive research reports with Gemini AI and Tavily Search for Japanese users

> ⚡ **1,412 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Automated Research Reports with AI and Tavily Search

An intelligent research automation workflow designed for Japanese users that transforms user queries into comprehensive HTML reports via email. Using Google Gemini AI and Tavily search, this workflow generates optimized search queries, conducts multi-perspective research, and delivers structured analysis reports in Japanese.

## Who's it for

Content creators, researchers, analysts, and businesses in Japan who need comprehensive research reports on various topics without manual information gathering. Particularly valuable for Japanese professionals conducting competitive analysis, market research, and technical comparisons who prefer reports in their native language.

## How it works

The workflow follows a strategic four-step process:

1. **Query Optimization**: Google Gemini AI analyzes user input and generates three optimized search queries for comprehensive coverage
2. **Multi-Query Research**: Tavily's advanced search executes all queries with deep search parameters and AI-generated answers
3. **Report Synthesis**: Another Gemini AI model consolidates findings, eliminates duplicates, and structures information into readable HTML format
4. **Email Delivery**: Gmail automatically sends the final HTML report to specified recipients

## Requirements

- Google Gemini API credentials (for three separate AI nodes)
- Tavily API credentials for advanced search functionality
- Gmail authentication for email delivery
- Basic n8n workflow execution permissions

## How to set up

1. **Configure API credentials** in all Google Gemini and Tavily nodes
2. **Update email settings** in the "Send a message" node with your recipient address
3. **Customize your query** in the "Edit Fields" node (default: "n8nとdifyの違い")
4. **Test the workflow** to ensure all connections work properly

## How to customize the workflow

**Research depth**: Increase `max_results` in Tavily search for more comprehensive data gathering. **Query optimization**: Modify system prompts in the Query Generator for domain-specific searches. **Report format**: Adjust the Report Agent's system message to change output structure, language, or focus areas. **Multi-recipient delivery**: Duplicate the Gmail node for multiple email destinations.

The workflow processes Japanese and English queries effectively, with built-in support for Japanese language output, making it ideal for Japanese professionals who need multilingual research capabilities. Advanced search parameters ensure high-quality, relevant results for professional research applications.

## 🔗 Nodes Used

Gmail, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
