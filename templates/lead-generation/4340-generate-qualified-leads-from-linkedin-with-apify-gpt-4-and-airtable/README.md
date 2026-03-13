# 🎣 Generate qualified leads from LinkedIn with Apify, GPT-4, and Airtable

> ⚡ **2,641 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?

This workflow is perfect for **sales teams**, **business development professionals**, **recruitment agencies**, and **fractional CFO service providers** who need to identify and qualify companies actively hiring. Whether you're prospecting for new clients, building a database of potential customers, or researching market opportunities, this automated solution saves hours of manual research while delivering high-quality, AI-analyzed leads.

## What problem is this workflow solving?

Finding qualified prospects in the finance sector is time-consuming and often inefficient. Traditional methods involve:
- Manually browsing LinkedIn job postings for hours
- Difficulty distinguishing between genuine opportunities and recruitment spam
- Inconsistent lead categorization and qualification
- Risk of contacting the same companies multiple times
- Lack of structured data for sales team follow-up

This workflow automates the entire lead generation process, from data collection to AI-powered qualification, ensuring you focus only on the most promising opportunities.

## What this workflow does

This comprehensive lead generation system performs six key functions:

1. **Automated LinkedIn Job Scraping**: Uses Apify's reliable LinkedIn Jobs Scraper to extract detailed job postings for finance positions, including company information, job descriptions, and contact details.

2. **Smart Data Processing**: Removes duplicates, filters companies by size, and structures data for consistent analysis across all leads.

3. **Intelligent Lead Categorization**: Compares new leads against your existing database to optimize processing and avoid duplicate work.

4. **AI-Powered Qualification**: Leverages OpenAI's GPT-4 Mini to analyze each lead and determine:
   - **Company Category**: Consumer companies, Fractional CFO services, Recruiting agencies, or Other
   - **Finance Role Validation**: Confirms the position is genuinely finance-related
   - **Seniority Level**: Entry, Mid, Senior, Director, or C-Level classification
   - **Job Summary**: Concise description for quick sales team review

5. **Automated Database Management**: Stores qualified leads in Airtable with comprehensive profiles, preventing duplicates while maintaining data integrity.

6. **Lead Scoring & Routing**: Prioritizes leads based on processing status and qualification results for efficient sales team follow-up.

## Setup

### Prerequisites

You'll need accounts for three services:

- **Airtable** (Free tier supported) - For lead storage and management
- **Apify** (14-day free trial available) - For LinkedIn job scraping
- **OpenAI** (Pay-per-use) - For AI-powered lead analysis

### Step 1: Create Required Credentials

#### Apify API Credential
1. Sign up for an Apify account at [apify.com](https://apify.com)
2. Navigate to Settings → Integrations → API tokens
3. Create a new API token
4. In n8n, create a new **Apify API** credential with your token

#### OpenAI API Credential
1. Create an account at [platform.openai.com](https://platform.openai.com)
2. Generate an API key in the API section
3. In n8n, create a new **OpenAI** credential with your key

#### Airtable Personal Access Token
1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Create a personal access token with the following scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
3. In n8n, create a new **Airtable Personal Access Token** credential

### Step 2: Set Up Airtable Base

Create a new Airtable base with the following structure:

**Table Name**: `Qualified Leads`

**Required Fields**:
```
- Company Name (Single line text)
- Job Title (Single line text) 
- Is Finance Job (Checkbox)
- Seniority Level (Single select: Entry, Mid, Senior, Director, C-Level)
- Company Category (Single select: Consumer, Recruiting, Fractional CFO, Other)
- Job Summary (Long text)
- Company LinkedIn (URL)
- Job Link (URL)
- Posted Date (Date)
- Location (Single line text)
- Industry (Single line text)
- Company Employees (Number)
```

### Step 3: Configure the Workflow

1. **Import the Workflow**: Copy the JSON and import it into your n8n instance
2. **Update Credentials**: Replace placeholder credential IDs with your actual credential IDs in:
   - "Scrape LinkedIn Jobs" node (Apify credential)
   - "OpenAI GPT-4 Mini" node (OpenAI credential) 
   - "Save to Airtable" and "Get Existing Leads" nodes (Airtable credential)
3. **Configure Airtable Connection**: Update the base ID and table ID in both Airtable nodes
4. **Set Search Parameters**: In the "Edit Variables" node, configure:
   - `linkedinUrls`: Your target LinkedIn job search URLs
   - `maxEmployees`: Maximum company size filter (default: 200)
   - `batchSize`: Processing batch size for API efficiency (default: 5)

### Step 4: Test the Workflow

1. Start with a small test by setting `count: 50` in the HTTP Request node
2. Use a specific LinkedIn job search URL (e.g., "CFO jobs in New York")
3. Execute the workflow manually and verify results in your Airtable base
4. Review the AI categorization accuracy and adjust prompts if needed

## How to customize this workflow to your needs

### Targeting Different Roles
Modify the LinkedIn search URLs in the "Edit Variables" node to target different positions:
```
- "https://www.linkedin.com/jobs/search/?keywords=Controller"
- "https://www.linkedin.com/jobs/search/?keywords=Finance%20Director"  
- "https://www.linkedin.com/jobs/search/?keywords=VP%20Finance"
```

### Adjusting Company Size Filters
Change the `maxEmployees` parameter to focus on different company segments:
- Startups: 1-50 employees
- SMBs: 51-500 employees  
- Enterprise: 500+ employees

### Customizing AI Analysis
Enhance the GPT-4 prompt in the "AI Lead Analyzer" node to include:
- Industry-specific criteria
- Geographic preferences
- Technology stack requirements
- Company growth stage indicators

### Integration Options
Extend the workflow by adding:
- **Slack notifications** for new qualified leads
- **Email alerts** for high-priority prospects
- **CRM integration** (Salesforce, HubSpot, Pipedrive)
- **Lead enrichment** with additional data sources

### Scheduling Automation
Set up the workflow to run automatically:
- **Daily**: For active prospecting campaigns
- **Weekly**: For ongoing market research
- **Monthly**: For periodic database updates

## Performance & Cost Optimization

- **API Efficiency**: The workflow processes leads in batches to optimize API usage
- **Smart Deduplication**: Avoids re-processing existing leads to reduce costs
- **Configurable Limits**: Adjust batch sizes and employee count filters based on your needs
- **Expected Costs**: Approximately $0.05-$0.20 per 100 analysed leads (OpenAI costs)

## Troubleshooting

**Common Issues**:
- **Rate Limiting**: Increase delays between API calls if you encounter rate limits
- **Data Quality**: Review LinkedIn search URLs for relevance to your target market
- **AI Accuracy**: Adjust prompts if categorisation doesn't match your criteria
- **Airtable Errors**: Verify field names match exactly between workflow and base structure

**Support Resources**:
- [Apify LinkedIn Scraper Documentation](https://apify.com/curious_coder/linkedin-jobs-scraper)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Airtable API Reference](https://airtable.com/developers/web/api/introduction)

Transform your lead generation process with this powerful, AI-driven workflow that delivers qualified prospects ready for immediate outreach.

## 🔗 Nodes Used

Airtable, HTTP Request, Filter, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
