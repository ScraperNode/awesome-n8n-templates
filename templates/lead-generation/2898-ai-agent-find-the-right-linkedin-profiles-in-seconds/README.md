# 🎣 AI agent: Find the right LinkedIn profiles in seconds

> ⚡ **4,891 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automate LinkedIn Prospecting with AI Agent and Get Results Straight to Google Sheets!

A practical AI-powered workflow that helps you find relevant LinkedIn profiles using natural language queries and saves the results automatically to Google Sheets.

## 🎯 What It Actually Does

- Accepts natural language requests (e.g., "Find marketing managers in Paris")
- Uses AI to extract search parameters:
  - Job titles
  - Industry
  - Location
- Searches for matching LinkedIn profiles
- Saves profile URLs and titles to Google Sheets

## 🛠️ Technical Components

1. **AI Query Processor**
   - Converts natural language to structured search parameters
   - Handles various input formats and languages
   - Maintains context for accurate parameter extraction

2. **Search Engine Integration**
   - Uses Google Custom Search API
   - Handles pagination for multiple results
   - Filters for actual LinkedIn profile URLs

3. **Data Storage**
   - Automatically saves to Google Sheets
   - Stores profile titles and URLs
   - Easy to access and export

## 📋 Prerequisites

- OpenAI API key
- Google Custom Search API credentials
- Google Sheets access

## 💡 Adaptation Possibilities

This template can be modified to scrape other websites by:
- Changing the search domain in the HTTP Request node
- Adjusting the URL filter in the Code node
- Modifying the column structure in Google Sheets
- Updating the AI prompt for different parameter extraction

Example adaptations:
- Twitter profile finder
- GitHub repository search
- Company website finder
- Professional blog discovery

## 🔧 Setup Instructions

1. **API Setup**
   - Configure Google Custom Search API
   - Set up OpenAI API
   - Prepare Google Sheets

2. **Workflow Configuration**
   - Import both workflows
   - Connect your API credentials
   - Set up your Google Sheet
   - Test with a sample query

## 📝 Usage Example

Input: "Find software developers in London working in fintech"
Output: A Google Sheet containing:
- LinkedIn profile URLs of software developers
- Profile titles/headlines
- Ready for your review and outreach

#AIAgent #WebScraping #Automation #n8n #Workflow #LinkedInProspecting

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
