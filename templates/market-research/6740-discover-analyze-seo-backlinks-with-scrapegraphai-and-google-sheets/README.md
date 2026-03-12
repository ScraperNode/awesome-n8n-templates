# 📊 Discover & analyze SEO backlinks with ScrapeGraphAI and Google Sheets

> ⚡ **873 views** · 📊 [Market Research & Insights](../)

## Description

# How it works

This workflow automatically discovers and analyzes backlinks for any website, providing comprehensive SEO insights and competitive intelligence using AI-powered analysis.

## Key Steps

1. **Website Input** - Accepts target URLs via webhook or manual input for backlink analysis.
2. **Backlink Discovery** - Scrapes and crawls the web to find all backlinks pointing to the target website.
3. **AI-Powered Analysis** - Uses GPT-4 to analyze backlink quality, relevance, and SEO impact.
4. **Data Processing & Categorization** - Cleans, validates, and automatically categorizes backlinks by type, authority, and relevance.
5. **Database Storage** - Saves processed backlink data to PostgreSQL database for ongoing analysis and reporting.
6. **API Response** - Returns structured summary with backlink counts, domain authority scores, and SEO insights.

## Set up steps

**Setup time: 8-12 minutes**

1. **Configure OpenAI credentials** - Add your OpenAI API key for AI-powered backlink analysis.
2. **Set up PostgreSQL database** - Connect your PostgreSQL database and create the required table structure.
3. **Configure webhook endpoint** - The workflow provides a `/analyze-backlinks` endpoint for URL submissions.
4. **Customize analysis parameters** - Modify the AI prompt to include your preferred SEO metrics and analysis criteria.
5. **Test the workflow** - Submit a sample website URL to verify the backlink discovery and analysis process.
6. **Set up database table** - Ensure your PostgreSQL database has a `backlinks` table with appropriate columns.

## Features

- **Comprehensive backlink discovery**: Finds all backlinks pointing to target websites
- **AI-powered analysis**: GPT-4 analyzes backlink quality, relevance, and SEO impact
- **Automatic categorization**: Backlinks categorized by type (dofollow/nofollow), authority level, and relevance
- **Data validation**: Cleans and validates backlink data with error handling
- **Database storage**: PostgreSQL integration for data persistence and historical tracking
- **API responses**: Clean JSON responses with backlink summaries and SEO insights
- **Competitive intelligence**: Analyzes competitor backlink profiles and identifies link building opportunities
- **Authority scoring**: Calculates domain authority and page authority metrics for each backlink

## 🔗 Nodes Used

Send Email, Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
