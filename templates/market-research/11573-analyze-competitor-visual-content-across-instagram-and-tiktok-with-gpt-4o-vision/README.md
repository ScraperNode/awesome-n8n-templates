# 📊 Analyze competitor visual content across Instagram and TikTok with GPT-4o Vision

> ⚡ **409 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who Is This For

Marketing teams, social media managers, and brand strategists who want to understand competitor visual strategies across multiple platforms. Perfect for agencies managing multiple client accounts or brands looking to benchmark their visual content.

## What This Template Does

This workflow automates competitive visual intelligence gathering across Instagram and TikTok using AI-powered image analysis:

1. Collects recent posts from your account and up to 3 competitors via a simple form interface
2. Routes content to appropriate Apify scrapers based on selected platforms
3. Filters and processes image content from scraped posts
4. Analyzes each image using GPT-4o Vision to extract color palettes, composition styles, mood/emotion, and text design elements
5. Generates a comprehensive competitive analysis report with actionable recommendations
6. Logs all analysis results to Google Sheets for historical tracking

## Requirements

- **Apify account** with API access (for Instagram and TikTok scraping)
- **OpenAI API key** with GPT-4o access
- **Google Sheets** connected for logging results

## How to Set Up

1. **Configure Apify credentials**: Connect your Apify account in the credential settings
2. **Add OpenAI API key**: Enter your API key in the "Workflow Configuration" node (replace `YOUR_OPENAI_API_KEY`)
3. **Set up Google Sheets**: 
   - Create a new spreadsheet with columns: `timestamp`, `own_account`, `competitors`, `platforms`, `posts_analyzed`, `summary`
   - Update the "Log Results to Google Sheets" node with your document ID
4. **Activate the workflow** and access the form via the provided webhook URL

## How to Customize

- **Adjust analysis depth**: Modify the `postsCount` variable to analyze more or fewer posts per account
- **Customize AI prompts**: Edit the prompt in "Analyze Images with GPT-4o Vision" to extract different visual attributes
- **Add more platforms**: Extend the Platform Router to include additional social networks
- **Change report format**: Modify the prompt in "Generate Competitive Analysis Report" for different output structures

## 🔗 Nodes Used

Google Sheets, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
