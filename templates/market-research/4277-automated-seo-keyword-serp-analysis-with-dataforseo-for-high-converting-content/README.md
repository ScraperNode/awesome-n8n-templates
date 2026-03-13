# 📊 Automated SEO keyword & SERP analysis with DataForSEO for high-converting content

> ⚡ **1,292 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Overall Purpose:
The workflow automates the process of gathering extensive keyword data for a "Main Keyword." It starts by reading initial parameters from a Google Sheets template, creates a new dedicated Google Sheet for the research, queries multiple DataForSEO API endpoints for different types of keyword information (related, suggestions, ideas, autocomplete, subtopics, SERP, and PAA), and populates the newly created Google Sheet with this data across various tabs. A "Master All KW Variations" sheet is also populated to consolidate various keyword types.
# Tools & Services Used:
## Google Sheets:
As an input source for the main keyword and initial parameters (from a template).
As the output destination for all collected keyword data, organized into multiple sheets within a new spreadsheet file.
## Google Drive:
To create a new folder for each keyword research session.
To copy the Google Sheets template into this new folder.
## DataForSEO API: 
The primary source for all keyword research data. Specific endpoints utilized:
v3/dataforseo_labs/google/related_keywords/live
v3/dataforseo_labs/google/keyword_suggestions/live (used for both "suggestions" and "ideas")
v3/serp/google/autocomplete/live/advanced
v3/content_generation/generate_sub_topics/live
v3/serp/google/organic/live/advanced (for SERP and People Also Ask data)

# Implementation Steps for Businesses:
## Define Core Business Keywords: 
Start with the primary products, services, or solutions the business offers.
## Regularly Run the Workflow: 
Schedule the workflow to run for new keywords or to refresh data on existing important keywords.
## Collaborative Review: 
Marketing, sales, and even product teams should review the generated Google Sheets.
Marketing focuses on content ideas, SEO opportunities, and competitor SERP positions.
Sales focuses on understanding customer questions (PAA, Autocomplete) to refine pitches.
## Integrate into Content Calendar: 
Use the insights to plan blog posts, articles, FAQs, and social media content.
Update Sales Training: Share common customer questions and keyword insights with the sales team.
## Track & Measure: 
Monitor rankings for targeted keywords and the performance of content created based on this research to demonstrate ROI.
**
By leveraging this automated workflow, businesses can save significant time on manual keyword research, gain deeper insights into their market and competitors, and ultimately create more effective sales and marketing strategies that drive growth.**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
