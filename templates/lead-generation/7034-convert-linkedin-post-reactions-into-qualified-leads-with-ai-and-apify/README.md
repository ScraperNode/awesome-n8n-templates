# 🎣 Convert LinkedIn post reactions into qualified leads with AI and Apify

> ⚡ **984 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🎯 LinkedIn ICP Lead Qualification Automation

Automatically identify and qualify ideal customer prospects from LinkedIn post reactions using AI-powered profile analysis and intelligent data enrichment.

Perfect for sales teams and marketing professionals who want to convert LinkedIn engagement into qualified leads without manual research. This workflow transforms post reactions into actionable prospect data with AI-driven ICP classification.

## Good to know

* **LinkedIn Safety**: Only use cookie-free Apify actors to avoid account detection and suspension risks
* **Daily Processing Limits**: Scrape maximum 1 page of reactions per day (50-100 profiles) to stay under LinkedIn's radar
* Apify actors cost approximately $0.01-0.05 per profile scraped - budget accordingly for daily processing
* Includes intelligent rate limiting to prevent API restrictions and maintain LinkedIn account safety
* AI classification requires clear definition of your Ideal Customer Profile criteria
* Processing too many profiles or running too frequently will trigger LinkedIn's anti-scraping measures
* Always monitor your LinkedIn account health and Apify usage patterns for any warning signs

## How it works

* Scrapes LinkedIn post reactions using Apify's specialized actor to identify engaged users
* Extracts and cleans profile data including names, job titles, and LinkedIn URLs
* Checks against existing Airtable records to prevent duplicate processing and save costs
* Creates new prospect records with basic information for tracking purposes
* Enriches profiles with comprehensive LinkedIn data including company details and experience
* Aggregates and formats profile data for AI analysis and classification
* Uses AI to analyze prospects against your ICP criteria with detailed reasoning
* Updates records with ICP classification results and extracted email addresses
* Implements smart batching and delays to respect API rate limits throughout the process

## How to use

* **IMPORTANT**: Select cookie-free Apify actors only to avoid LinkedIn account suspension
* Set up Apify API credentials in both HTTP Request nodes for safe LinkedIn scraping
* Configure Airtable OAuth2 authentication and select your prospect tracking base
* Replace the LinkedIn post URL with your target post in the initial scraper node
* **Daily Usage**: Process only 1 page of reactions per day (typically 50-100 profiles) maximum
* Customize the AI classification prompt with your specific ICP criteria and job titles
* Test with a small batch first to verify setup and monitor both API costs and LinkedIn account health
* Schedule workflow to run daily rather than processing large batches to maintain account safety

## Requirements

* Apify account with API access and sufficient credits for profile scraping
* Airtable account with OAuth2 authentication configured
* OpenAI or compatible AI model credentials for prospect classification
* LinkedIn post URL with reactions to analyze (minimum 10+ reactions recommended)
* Clear definition of your Ideal Customer Profile criteria for accurate AI classification

## Customising this workflow

* **Safety First**: Always verify Apify actors are cookie-free before configuring to protect your LinkedIn account
* Modify ICP classification criteria in the AI prompt to match your specific target customer profile
* Set up daily scheduling (not hourly/frequent) to respect LinkedIn's usage patterns and avoid detection
* Adjust rate limiting delays based on your comfort level with LinkedIn scraping frequency
* Add additional data fields to Airtable schema for storing custom prospect information
* Integrate with CRM systems like HubSpot or Salesforce for automatic lead import
* Set up Slack notifications for new qualified prospects or daily summary reports
* Create email marketing sequences in tools like Mailchimp for nurturing qualified leads
* Add lead scoring based on company size, industry, or engagement level for prioritization
* Consider rotating between different LinkedIn posts to diversify your prospect sources while maintaining daily limits

## 🔗 Nodes Used

Airtable, HTTP Request, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
