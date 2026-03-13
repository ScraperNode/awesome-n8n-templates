# 🎬 Automate LinkedIn content using viral post analysis with Gemini AI & Flux image generation

> ⚡ **138 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# LinkedIn Viral Post Scraper + AI Content Generator with Auto Publishing

## Who's it for

Content creators, social media managers, marketing agencies, and LinkedIn growth hackers who want to automate their content strategy by analyzing viral posts and generating original, high-engagement content at scale.

## What it does

This comprehensive automation pipeline combines LinkedIn data intelligence with AI-powered content creation to build a complete content marketing system:

**Data Collection Phase:**
- Automatically scrapes high-engagement posts from target LinkedIn profiles
- Filters content based on viral metrics (20+ likes, comments, or reposts)
- Stores trending content data in Google Sheets for analysis
- Runs on a 12-hour schedule with built-in rate limiting

**Content Generation Phase:**
- AI analyzes trending patterns and engagement triggers from collected data
- Generates original LinkedIn posts using Google Gemini's advanced language model
- Creates custom visuals using AI image generation (HuggingFace Flux model)
- Automatically publishes complete posts with images to your LinkedIn company page
- Tracks processed content to prevent duplicate analysis

## How it works

The workflow operates in two connected phases. The scraping phase monitors specified LinkedIn profiles, collecting high-performing posts into a centralized database. When new viral content is detected, the AI analysis phase triggers automatically, identifying trending topics and creating original content that leverages proven engagement patterns while maintaining authenticity.

## Requirements

**APIs and Credentials:**
- Google Sheets API (for data storage and profile management)
- Apify API key (for LinkedIn post scraping)
- Google Gemini API access (for content generation)
- HuggingFace API token (for image generation)
- LinkedIn API access (for publishing)

**Setup Prerequisites:**
- Google Sheets document with LinkedIn profile URLs
- LinkedIn company page for publishing
- Self-hosted n8n instance (uses community nodes)

## How to set up

1. **Configure Data Sources:** Create a Google Sheet with two tabs - one for target LinkedIn profile URLs and another for storing scraped data
2. **API Integration:** Add all required API credentials to n8n credential manager
3. **Customize Filters:** Adjust engagement thresholds (currently 20+ for each metric) based on your niche
4. **AI Prompt Tuning:** Modify the content generation prompt to match your brand voice and industry focus
5. **Publishing Settings:** Configure your LinkedIn organization ID and posting preferences
6. **Schedule Optimization:** Set scraping frequency based on your content needs and API limits

## How to customize the workflow

**Content Targeting:** Modify the profile list in Google Sheets to focus on specific industries, thought leaders, or competitors in your niche.

**Engagement Thresholds:** Adjust the filter conditions to be more or less selective about which posts qualify as "viral" content.

**AI Voice Customization:** Edit the comprehensive system prompt in the LinkedIn Content Strategy AI node to match your brand personality, industry terminology, and content style preferences.

**Visual Branding:** Customize image generation prompts to include your brand colors, logo elements, or specific visual styles.

**Publishing Schedule:** Modify the trigger frequency and add conditional logic to publish at optimal times for your audience.

**Data Retention:** Add cleanup nodes to manage historical data and prevent Google Sheets from becoming unwieldy over time.

## 🔗 Nodes Used

Google Sheets, HTTP Request, LinkedIn, Schedule Trigger, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
