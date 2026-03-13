# 🎣 Automate company data enrichment with HubSpot, Sona, OpenAI & Google Sheets

> ⚡ **54 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automatically identify ICP matches by enriching basic company records with Sona Enrich data—combining web scraping, AI analysis, and the structured attributes that define your ideal customer.

Import company domains from a Google Sheet, automatically analyze their websites with AI, enrich them with firmographic data via Sona Enrich, and sync the results to HubSpot—so you can quickly discover and target your ideal customers.

## How it works

**Step 1: Data Input & Web Scraping**

- Reads company domains from your Google Sheet
- Scrapes each website's content via HTTP requests
- Extracts and cleans HTML content
- Removes navigation, footers, and noise

**Step 2: AI Analysis**

- Sends cleaned content to OpenAI Chat Model
- Extracts structured company intelligence (industry, positioning, features, personas)
- Captures and analyzes pricing, pros/cons, and value propositions
- Aggregates all AI results into standardized format
- Advanced users: You can modify the data that's generated and then add custom fields to HubSpot

**Step 3: HubSpot Preparation**

- Creates custom fields in HubSpot CRM
- Prepares AI-extracted data for import
- Splits aggregated data into individual company records
- Ready for batch processing

**Step 4: Enrich & Sync to HubSpot**

- Loops through each company one by one
- Enriches with the Sona API (firmographics, revenue, employees, funding, and more)
- Creates company record in HubSpot
- Formats and populates all custom fields
- Combines AI insights + Sona data in one complete profile

## What you'll get

The workflow enriches each company record with:

- **Web-Scraped Intelligence**: Business descriptions, features, and positioning directly from their website
- **AI-Analyzed Insights**: Value propositions, target personas, pricing models, and competitive advantages interpreted by AI
- **Firmographic Data**: Company size, employee count, revenue estimates, headquarters location, and more via Sona Enrich
- **Technographic Data**: Technology stack, platforms, and tools the company uses
- **Industry Classification**: Precise industry categorization and market type (B2B/B2C)
- **Funding & Growth**: Investment rounds, funding status, and growth indicators
- **Custom HubSpot Properties**: All data automatically mapped and synced to your CRM for immediate use

## Why use this

- **Complete intelligence gathering**: Combines three powerful data sources (web scraping, AI, and Sona enrichment) for maximum insight depth
- **Personalize at scale**: Leverage actual company intelligence to craft relevant, informed outreach that resonates
- **Intelligent segmentation**: Build precise account lists by industry, tech stack, business model, or company size
- **Accelerate research**: Eliminate hours of manual company investigation—save 15-30 minutes per prospect
- **Improve conversion**: Engage prospects with context-rich conversations that demonstrate deep understanding
- **Enhanced lead scoring**: Build sophisticated scoring models with comprehensive firmographic and technographic signals
- **Automated updates**: Keep HubSpot records current with scheduled enrichment runs (daily/weekly)

## Setup instructions

**Before you start, you'll need:**

- Google Sheet with company websites (column named "Website Domain")
- OpenAI API key for AI analysis ([sign up here](https://platform.openai.com/))
- Sona API credentials ([get access here](https://platform.sonalabs.com/onboardingv2))
- Get an app token from HubSpot by creating a legacy app:
  1. Go to HubSpot **Settings** &gt; **Integrations** &gt; **Legacy Apps**
  2. Click **Create Legacy App**
  3. Select **Private** (for one account)
  4. In the scopes section, enable the following permissions:
     - `crm.schemas.companies.write`
     - `crm.objects.companies.write`
     - `crm.schemas.companies.read`
  5. Click **Create**
  6. Copy the access token from the **Auth** tab
- n8n cloud or self-hosted instance

**Configuration steps:**

1. **Prepare your data**: Create a Google Sheet with a "Website Domain" column and add 2-3 test companies (e.g., example.com)
2. **Connect Google Sheets**: In the "Get row(s) in sheet" node, authenticate and select your spreadsheet and sheet name
3. **Configure web scraping**: Update the HTTP Request node with your preferred scraping method or data source URL
4. **Set up AI Agent**: Add your OpenAI API key and customize the extraction prompt to define which company fields you want (industry, personas, features, etc.)
5. **Create HubSpot custom fields**: Review the "Create Custom HubSpot Fields" node and adjust property names to match your CRM structure
6. **Add Sona credentials**: In the "Sona Enrich" node within the loop, authenticate with your Sona API key
7. **Connect HubSpot**: Authenticate in both "Create a Company" nodes using your HubSpot API key or OAuth2
8. **Map enriched data**: In the "Format Custom Properties" node, configure how Sona and AI data maps to your HubSpot fields
9. **Test with sample data**: Run the workflow with 2-3 test companies and verify records appear correctly in HubSpot with all custom properties populated
10. **Add error handling**: Configure notifications for failed enrichments or API errors (optional but recommended)
11. **Scale and automate**: Process your full company list, then optionally add a Schedule Trigger for automatic daily or weekly enrichment

## 🔗 Nodes Used

Google Sheets, HTTP Request, HubSpot, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
