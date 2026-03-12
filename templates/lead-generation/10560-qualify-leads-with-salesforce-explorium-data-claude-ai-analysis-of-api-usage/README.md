# 🎣 Qualify leads with Salesforce, Explorium data & Claude AI analysis of API usage

> ⚡ **163 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Inbound Agent - AI-Powered Lead Qualification with Product Usage Intelligence

This n8n workflow automatically qualifies and scores inbound leads by combining their product usage patterns with deep company intelligence. The workflow pulls new leads from your CRM, analyzes which API endpoints they've been testing, enriches them with firmographic data, and generates comprehensive qualification reports with personalized talking points—giving your sales team everything they need to prioritize and convert high-quality leads.


## DEMO

[Template Demo](https://youtu.be/Mf2qQdI1KqY)

## Credentials Required

To use this workflow, set up the following credentials in your n8n environment:

### Salesforce
- **Type:** OAuth2 or Username/Password
- **Used for:** Pulling lead reports and creating follow-up tasks
- Alternative CRM options: HubSpot, Zoho, Pipedrive
- Get credentials at [Salesforce Setup](https://login.salesforce.com/)

### Databricks (or Analytics Platform)
- **Type:** HTTP Request with Bearer Token
- **Header:** `Authorization`
- **Value:** `Bearer YOUR_DATABRICKS_TOKEN`
- **Used for:** Querying product usage and API endpoint data
- Alternative options: Datadog, Mixpanel, Amplitude, custom data warehouse

### Explorium API
- **Type:** Generic Header Auth
- **Header:** `Authorization`
- **Value:** `Bearer YOUR_API_KEY`
- **Used for:** Business matching and firmographic enrichment
- Get your API key at [Explorium Dashboard](https://app.explorium.ai/)

### Explorium MCP
- **Type:** HTTP Header Auth
- **Used for:** Real-time company intelligence and supplemental research
- Connect to: `https://mcp.explorium.ai/mcp`

### Anthropic API
- **Type:** API Key
- **Used for:** AI-powered lead qualification and analysis
- Get your API key at [Anthropic Console](https://console.anthropic.com/)

Go to **Settings → Credentials**, create these credentials, and assign them in the respective nodes before running the workflow.

---

## Workflow Overview

### Node 1: When clicking 'Execute workflow'
Manual trigger that initiates the lead qualification process.

- **Type:** Manual Trigger
- **Purpose:** On-demand execution for testing or manual runs

**Alternative Trigger Options:**
- **Schedule Trigger:** Run automatically (hourly, daily, weekly)
- **Webhook:** Trigger on CRM updates or new lead events
- **CRM Trigger:** Real-time activation when leads are created

### Node 2: GET SF Report
Pulls lead data from a pre-configured Salesforce report.

- **Method:** GET
- **Endpoint:** Salesforce Analytics Reports API
- **Authentication:** Salesforce OAuth2

**Returns:** Raw Salesforce report data including:
- Lead contact information
- Company names
- Lead source and status
- Created dates
- Custom fields

**CRM Alternatives:** This node can be replaced with HubSpot, Zoho, or any CRM's reporting API.

### Node 3: Extract Records
Parses the Salesforce report structure and extracts individual lead records.

**Extraction Logic:**
- Navigates report's `factMap['T!T'].rows` structure
- Maps data cells to named fields

### Node 4: Extract Tenant Names
Prepares tenant identifiers for usage data queries.

**Purpose:** Formats tenant names as SQL-compatible strings for the Databricks query
**Output:** Comma-separated, quoted list: `'tenant1', 'tenant2', 'tenant3'`

### Node 5: Query Databricks
Queries your analytics platform to retrieve API usage data for each lead.

- **Method:** POST
- **Endpoint:** `/api/2.0/sql/statements`
- **Authentication:** Bearer token in headers
- **Warehouse ID:** Your Databricks cluster ID

**Platform Alternatives:** 
- **Datadog:** Query logs via Logs API
- **Mixpanel:** Event segmentation API
- **Amplitude:** Behavioral cohorts API
- **Custom Warehouse:** PostgreSQL, Snowflake, BigQuery queries

### Node 6: Split Out
Splits the Databricks result array into individual items for processing.

- **Field:** `result.data_array`
- **Purpose:** Transform single response with multiple rows into separate items

### Node 7: Rename Keys
Normalizes column names from database query to readable field names.

**Mapping:**
- `0` → `TenantNames`
- `1` → `endpoints`
- `2` → `endpointsNum`

### Node 8: Extract Business Names
Prepares company names for Explorium enrichment.

### Node 9: Loop Over Items
Iterates through each company for individual enrichment.

### Node 10: Explorium API: Match Businesses
Matches company names to Explorium's business entity database.

- **Method:** POST
- **Endpoint:** `/v1/businesses/match`
- **Authentication:** Header Auth (Bearer token)

**Returns:**
- `business_id`: Unique Explorium identifier
- `matched_businesses`: Array of potential matches
- Match confidence scores

### Node 11: Explorium API: Firmographics
Enriches matched businesses with comprehensive company data.

- **Method:** POST
- **Endpoint:** `/v1/businesses/firmographics/bulk_enrich`
- **Authentication:** Header Auth (Bearer token)

**Returns:**
- Company name, website, description
- Industry categories (NAICS, SIC, LinkedIn)
- Size: employee count range, revenue range
- Location: headquarters address, city, region, country
- Company age and founding information
- Social profiles: LinkedIn, Twitter
- Logo and branding assets

### Node 12: Merge
Combines API usage data with firmographic enrichment data.

### Node 13: Organize Data as Items
Structures merged data into clean, standardized lead objects.

**Data Organization:**
- Maps API usage by tenant name
- Maps enrichment data by company name
- Combines with original lead information
- Creates complete lead profile for analysis

### Node 14: Loop Over Items1
Iterates through each qualified lead for AI analysis.

- **Batch Size:** 1 (analyzes leads individually)
- **Purpose:** Generate personalized qualification reports

### Node 15: Get many accounts1
Fetches the associated Salesforce account for context.

- **Resource:** Account
- **Operation:** Get All
- **Filter:** Match by company name
- **Limit:** 1 record

**Purpose:** Link lead qualification back to Salesforce account for task creation

### Node 16: AI Agent
Analyzes each lead to generate comprehensive qualification reports.

**Input Data:**
- Lead contact information
- API usage patterns (which endpoints tested)
- Firmographic data (company profile)
- Lead source and status

**Analysis Process:**
- Evaluates lead quality based on usage, company fit, and signals
- Identifies which Explorium APIs the lead explored
- Assesses company size, industry, and potential value
- Detects quality signals (legitimate company email, active usage) and red flags
- Determines optimal sales approach and timing
- Connected to Explorium MCP for supplemental company research if needed

**Output:** Structured qualification report with:
- **Lead Score:** High Priority, Medium Priority, Low Priority, or Nurture
- **Quick Summary:** Executive overview of lead potential
- **API Usage Analysis:** Endpoints used, usage insights, potential use case
- **Company Profile:** Overview, fit assessment, potential value
- **Quality Signals:** Positive indicators and concerns
- **Recommended Actions:** Next steps, timing, and approach
- **Talking Points:** Personalized conversation starters based on actual API usage

### Node 18: Clean Outputs
Formats the AI qualification report for Salesforce task creation.

### Node 19: Update Salesforce Records
Creates follow-up tasks in Salesforce with qualification intelligence.

- **Resource:** Task
- **Operation:** Create
- **Authentication:** Salesforce OAuth2

**Alternative Output Options:**
- **HubSpot:** Create tasks or update deal stages
- **Outreach/SalesLoft:** Add to sequences with custom messaging
- **Slack:** Send qualification reports to sales channels
- **Email:** Send reports to account owners
- **Google Sheets:** Log qualified leads for tracking

---

## Workflow Flow Summary

1. **Trigger:** Manual execution or scheduled run
2. **Pull Leads:** Fetch new/updated leads from Salesforce report
3. **Extract:** Parse lead records and tenant identifiers
4. **Query Usage:** Retrieve API endpoint usage data from analytics platform
5. **Prepare:** Format data for enrichment
6. **Match:** Identify companies in Explorium database
7. **Enrich:** Pull comprehensive firmographic data
8. **Merge:** Combine usage patterns with company intelligence
9. **Organize:** Structure complete lead profiles
10. **Analyze:** AI evaluates each lead with quality scoring
11. **Format:** Structure qualification reports for CRM
12. **Create Tasks:** Automatically populate Salesforce with actionable intelligence

This workflow eliminates manual lead research and qualification, automatically analyzing product engagement patterns alongside company fit to help sales teams prioritize and personalize their outreach to the highest-value inbound leads.

---

## Customization Options

### Flexible Triggers
Replace the manual trigger with:
- **Schedule:** Run hourly/daily to continuously qualify new leads
- **Webhook:** Real-time qualification when leads are created
- **CRM Trigger:** Activate on specific lead status changes

### Analytics Platform Integration
The Databricks query can be adapted for:
- **Datadog:** Query application logs and events
- **Mixpanel:** Analyze user behavior and feature adoption
- **Amplitude:** Track product engagement metrics
- **Custom Databases:** PostgreSQL, MySQL, Snowflake, BigQuery

### CRM Flexibility
Works with multiple CRMs:
- **Salesforce:** Full integration (pull reports, create tasks)
- **HubSpot:** Contact properties and deal updates
- **Zoho:** Lead enrichment and task creation
- **Pipedrive:** Deal qualification and activity creation

### Enrichment Depth
Add more Explorium endpoints:
- **Technographics:** Tech stack and product usage
- **News & Events:** Recent company announcements
- **Funding Data:** Investment rounds and financial events
- **Hiring Signals:** Job postings and growth indicators

### Output Destinations
Route qualification reports to:
- **CRM Updates:** Salesforce, HubSpot (update lead scores/fields)
- **Task Creation:** Any CRM task/activity system
- **Team Notifications:** Slack, Microsoft Teams, Email
- **Sales Tools:** Outreach, SalesLoft, Salesloft sequences
- **Reporting:** Google Sheets, Data Studio dashboards

### AI Model Options
Swap AI providers:
- Default: Anthropic Claude (Sonnet 4)
- Alternatives: OpenAI GPT-4, Google Gemini

---

## Setup Notes

1. **Salesforce Report Configuration:** Create a report with required fields (name, email, company, tenant ID) and use its API endpoint
2. **Tenant Identification:** Ensure your product usage data includes identifiers that link to CRM leads
3. **Usage Data Query:** Customize the SQL query to match your database schema and table structure
4. **MCP Configuration:** Explorium MCP requires Header Auth—configure credentials properly
5. **Lead Scoring Logic:** Adjust AI system prompts to match your ideal customer profile and qualification criteria
6. **Task Assignment:** Configure Salesforce task assignment rules or add logic to route to specific sales reps

This workflow acts as an intelligent lead qualification system that combines behavioral signals (what they're testing) with firmographic fit (who they are) to give sales teams actionable intelligence for every inbound lead.

## 🔗 Nodes Used

HTTP Request, Rename Keys, Salesforce, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
