# 🎣 Automated property lead generation with BatchData and CRM integration

> ⚡ **2,625 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

How It Works
-
This N8N workflow creates an automated system for discovering high-potential real estate investment opportunities. The workflow runs on a customizable schedule to scan the market for properties that match your specific criteria, then alerts your team about the most promising leads.

The process follows these steps:

- Connects to BatchData API on a regular schedule to search for properties matching your parameters
- Compares new results with previous scans to identify new listings and property changes
- Applies intelligent filtering to focus on high-potential opportunities (high equity, absentee owners, etc.)
- Retrieves comprehensive property details and owner information for qualified leads
- Delivers formatted alerts through multiple channels (email and Slack/Teams)

Each email alert includes detailed property information, owner details, equity percentage, and a direct Google Maps link to view the property location. The workflow also posts concise notifications to your team's communication channels for quick updates.

Who It's For
-
This workflow is designed for:

- Real Estate Investors: Find off-market properties with high equity and motivated sellers
- Real Estate Agents: Identify potential listing opportunities before they hit the market
- Property Acquisition Teams: Streamline the lead generation process with automated scanning
- Real Estate Wholesalers: Discover properties with significant equity spreads for potential deals
- REITs and Property Management Companies: Monitor market changes and expansion opportunities

The workflow is especially valuable for professionals who want to:

- Save hours of manual market research time
- Get early notifications about high-potential properties
- Access comprehensive property and owner information in one place
- Focus their efforts on the most promising opportunities

About BatchData
-
BatchData is a powerful property data platform for real estate professionals. Their API provides access to comprehensive property and owner information across the United States, including:

- Property details (bedrooms, bathrooms, square footage, year built, etc.)
- Valuation and equity estimates
- Owner information (name, mailing address, contact info)
- Transaction history and sales data
- Foreclosure and distressed property status
- Demographic and neighborhood data

The platform specializes in providing accurate, actionable property data that helps real estate professionals make informed decisions and identify opportunities efficiently. BatchData's extensive database covers millions of properties nationwide and is regularly updated to ensure data accuracy.
The API's flexible search capabilities allow you to filter properties based on numerous criteria, making it an ideal data source for automated lead generation workflows like this one.

## 🔗 Nodes Used

Send Email, HTTP Request, Spreadsheet File, HubSpot, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
