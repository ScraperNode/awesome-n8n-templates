# 🎯 Find B2B decision maker emails & build lead database with Serper.dev & AnyMailFinder

> ⚡ **1,409 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Companies Email Finder & Lead Generation Automation

## Short Description
Automatically find company domains, extract decision maker emails (CEO, Sales, Marketing), validate email quality, and build a comprehensive prospect database using AI-powered search and professional email finding APIs.

## Detailed Description

This comprehensive lead generation workflow transforms a simple list of company names into a complete prospect database with verified decision maker contacts. The system automatically discovers official company websites, finds key decision makers' email addresses, validates email quality, and organizes everything in a structured database for immediate outreach.

Perfect for sales teams, marketing agencies, business developers, and anyone who needs to build high-quality prospect lists efficiently and cost-effectively.

## Key Features

- **Intelligent Domain Discovery**: Uses [Serper.dev](https://serper.dev/) and AI to find official company websites from search results
- **Multi-Role Email Finding**: Automatically extracts emails for:
  - CEOs and C-level executives
  - Sales decision makers
  - Marketing decision makers
- **Email Quality Validation**: Classifies emails as "valid" or "risky" for better deliverability
- **Smart Fallback System**: Searches for additional company emails when decision makers aren't found
- **Duplicate Prevention**: Removes duplicate contacts automatically
- **Batch Processing**: Handles large company lists efficiently with intelligent batching
- **Database Integration**: Stores all data in NocoDB with proper organization and status tracking
- **Rate Limiting**: Includes delays and error handling to respect API limits

## Who This Workflow Is For

- **Sales Teams**: Building targeted prospect lists for outbound campaigns
- **Marketing Agencies**: Creating lead databases for client campaigns
- **Business Development**: Finding decision makers for partnership opportunities
- **Recruiters**: Locating hiring managers and HR contacts
- **Entrepreneurs**: Building contact lists for product launches or fundraising
- **Lead Generation Services**: Automating prospect research for clients

## Problems This Workflow Solves

- **Manual Research Time**: Eliminates hours of manual company and contact research
- **Incomplete Contact Data**: Ensures you have decision makers, not just generic emails
- **Email Deliverability Issues**: Validates email quality before outreach campaigns
- **Data Organization**: Maintains clean, structured prospect databases
- **Scaling Bottlenecks**: Processes hundreds of companies automatically
- **High Lead Generation Costs**: Reduces dependency on expensive lead generation services

## Setup Requirements

### Required API Credentials
- **[Serper.dev](https://serper.dev/) API Key**: For company domain search and discovery
- **OpenAI API Key**: For intelligent domain extraction from search results
- **[AnyMailFinder](https://anymailfinder.com/?via=alexandra) API Key**: For decision maker email discovery and validation
- **NocoDB API Token**: For database storage and management

### Database Structure

**Companies Table:**
- `Id` (Number): Unique company identifier
- `company_name` (Text): Company name to search
- `location` (Text): Company location for better search results
- `url` (URL): Discovered company website
- `domain` (Text): Extracted domain name
- `status` (Select): Processing status tracking
- `emails` (Text): All discovered company emails
- `company_emails_status` (Text): Email validation status

**Contacts Table:**
- `companies_id` (Number): Link to parent company
- `name` (Text): Contact full name
- `position` (Text): Job title/role
- `email` (Email): Contact email address
- `email_status` (Text): Email validation status
- `linkedin_url` (URL): LinkedIn profile (when available)

### System Requirements
- Active n8n instance (self-hosted or cloud)
- NocoDB database instance
- Active API subscriptions for [Serper.dev](https://serper.dev/), OpenAI, and [AnyMailFinder](https://anymailfinder.com/?via=alexandra)

## How It Works

### Phase 1: Domain Discovery
1. **Company Processing**: Retrieves companies from database in batches
2. **Domain Search**: Uses [Serper.dev](https://serper.dev/) to search for official company websites
3. **AI Domain Extraction**: OpenAI analyzes search results to identify official domains
4. **Database Updates**: Stores discovered domains and URLs

### Phase 2: Decision Maker Discovery
1. **Multi-Role Search**: Finds emails for CEO, Sales, and Marketing decision makers using [AnyMailFinder](https://anymailfinder.com/?via=alexandra)
2. **Email Validation**: Validates email deliverability and flags risky addresses
3. **Contact Creation**: Stores validated contacts with full details
4. **Status Tracking**: Updates company status based on email discovery success

### Phase 3: Company Email Backup
1. **Gap Analysis**: Identifies companies with no valid decision maker emails
2. **Bulk Email Search**: Finds up to 20 additional company emails using [AnyMailFinder](https://anymailfinder.com/?via=alexandra)
3. **Final Updates**: Stores all discovered emails for comprehensive coverage

## Customization Options

### Search Parameters
- Modify search queries for better domain discovery using [Serper.dev](https://serper.dev/)
- Adjust location-based search parameters
- Customize AI prompts for domain extraction

### Decision Maker Roles
- Add new decision maker categories (HR, Finance, Operations, etc.)
- Modify existing role search parameters in [AnyMailFinder](https://anymailfinder.com/?via=alexandra)
- Customize email validation criteria

### Data Processing
- Adjust batch sizes for different processing speeds
- Modify rate limiting delays
- Customize error handling and retry logic

### Database Schema
- Add custom fields for industry, company size, etc.
- Integrate with different database systems
- Customize data validation rules

## API Costs and Credits

- **[AnyMailFinder](https://anymailfinder.com/?via=alexandra)**: 2 credits per valid email found, 1 credit per bulk company search
- **[Serper.dev](https://serper.dev/)**: ~$1 per 1000 searches
- **OpenAI**: Minimal costs for domain extraction prompts
- **Estimated Cost**: about $0.03 per company processed (depending on email discovery success)

## Benefits

- **Save 20+ Hours Weekly**: Automate prospect research that takes hours manually
- **Higher Quality Leads**: Get decision makers, not generic contact@ emails
- **Better Deliverability**: Email validation reduces bounce rates
- **Scalable Process**: Handle thousands of companies automatically
- **Cost Effective**: Much cheaper than traditional lead generation services
- **Complete Database**: Build comprehensive prospect databases with all contact details

## Use Cases

- **Outbound Sales Campaigns**: Build targeted prospect lists for cold outreach
- **Partnership Development**: Find decision makers at potential partner companies
- **Market Research**: Understand company structures and contact hierarchies
- **Recruitment**: Locate hiring managers and HR contacts
- **Investor Relations**: Find contacts at potential investor companies
- **Vendor Outreach**: Identify procurement and operations contacts

## Installation Instructions

1. Import the workflow JSON into your n8n instance
2. Set up NocoDB database with required table structures
3. Configure all API credentials in the credential manager (including [Serper.dev](https://serper.dev/) and [AnyMailFinder](https://anymailfinder.com/?via=alexandra))
4. Update NocoDB connection settings with your database details
5. Test with a small batch of companies before full deployment
6. Monitor API usage and adjust batch sizes as needed

## Best Practices

- Start with high-quality company names and locations
- Monitor [AnyMailFinder](https://anymailfinder.com/?via=alexandra) credit usage to manage costs
- Use [Serper.dev](https://serper.dev/) efficiently with targeted search queries
- Regularly clean and validate your prospect database
- Respect email deliverability best practices
- Follow GDPR and data privacy regulations
- Use rate limiting to avoid API restrictions

## Error Handling

- Built-in retry mechanisms for API failures
- Continues processing even if individual companies fail
- Create an Error Workflow

## 🔗 Nodes Used

HTTP Request, NocoDB, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
