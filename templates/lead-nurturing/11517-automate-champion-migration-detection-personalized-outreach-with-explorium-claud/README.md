# 💬 Automate champion migration detection & personalized outreach with Explorium & Claude

> ⚡ **33 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Champion Migration Tracker

Automatically detect when your champion contacts change companies and respond with intelligent, personalized AI outreach before your competitors do.

## THE PROBLEM

When champions move to new companies, sales teams lose track and miss high-value opportunities. Manual LinkedIn monitoring doesn't scale, and by the time you notice, the relationship has gone cold.

## THE SOLUTION

This workflow automates champion migration tracking end-to-end, combining Explorium's data intelligence with Claude AI agents to maintain relationships and prioritize opportunities.

## HOW IT WORKS

### 1. Automated Job Change Detection
- Uses Explorium person enrichment to detect when champions move companies
- Eliminates manual LinkedIn monitoring
- Triggers immediately when employment changes

### 2. Intelligent Company Enrichment
- Enriches new companies with Explorium data: firmographics, funding, tech stack, hiring velocity
- Checks if company already exists in your CRM (Customer vs Prospect)
- Identifies open opportunities and account owners

### 3. Multi-Dimensional Opportunity Scoring (0-100)
- **ICP Fit (40%)**: Company size, funding stage, revenue, tech stack alignment
- **Relationship Strength (40%)**: Past deals influenced, relationship warmth, CRM status
- **Timing (20%)**: Days at new company, recent funding/acquisition signals
- Results in Hot/Warm/Cold priority classification

### 4. Smart Routing by Context
- **Customers**: Notify account manager with congratulations message
- **Hot Prospects (75+ score)**: Draft detailed strategic outreach for rep review

### 5. AI-Powered Personalization
- Claude AI agents generate contextually relevant emails
- References past relationship, deals influenced, and company intelligence
- Adapts tone and content based on opportunity priority and CRM status

## DEMO SETUP (Google Sheets)

This demo uses Google Sheets for simplicity. **For production use, replace with your actual CRM:**
- Salesforce
- HubSpot
- Pipedrive
- Any CRM with n8n integration

### Important Fields to Consider:

**Champions:**
- `champion_id`, `name`, `email`, `company`, `title`, `last_checked_date`
- `relationship_strength` (Hot/Warm/Cold), `last_contact_date`, `deals_influenced`
- `relationship_notes`, `isChampion` (TRUE/FALSE), `linkedin_url`, `explorium_prospect_id`

**Companies:**
- `company_ID`, `companyName`, `domain`, `relationship_type` (Customer/Prospect/None)
- `open_opportunity` (TRUE/FALSE), `opportunity_stage`, `account_owner`, `account_owner_email`
- `contractValue`, `notes`, `ExploriumBusinessID`

## REQUIRED CREDENTIALS

1. **Anthropic API Key** - Powers Claude AI agents for email generation
2. **Explorium API Key** - Provides person and company enrichment data
3. **Google Sheets** or **Your CRM** (production) - Data source and logging

## SETUP INSTRUCTIONS

1. **Connect Credentials** in n8n Settings → Credentials
2. **Update Data Sources**: Replace Google Sheets nodes with your CRM nodes (or create demo sheets with structure above)
3. **Configure Scoring**: Adjust ICP scoring criteria in "Score Company" node to match your ideal customer profile
4. **Test with Sample Data**: Run with 2-3 test champions to verify routing and email generation
5. **Schedule Trigger**: Set to run daily or weekly based on your needs

## CUSTOMIZATION TIPS

**Scoring Weights**: Adjust the 40/40/20 weighting in the scoring node to prioritize what matters most to your business

**Tech Stack Matching**: Update the `relevantTech` array with tools your champions likely use

**Email Tone**: Modify Claude prompts to match your brand voice (formal, casual, technical, etc.)

**Routing Logic**: Add additional branches for specific scenarios (e.g., churned customers, enterprise accounts)

**Agentic Experience: Consider adding an agent that sends the email for Cold prospects automatically.

**Integrations**: Add Slack notifications, CRM updates, or calendar booking links to the output

## BUSINESS VALUE

- **Prevent Revenue Leakage**: Never lose track of champion relationships
- **Prioritize Intelligently**: Focus on opportunities with highest potential
- **Scale Relationship Building**: Automate what used to require manual effort
- **Act Before Competitors**: Reach out while champions are still settling into new roles
- **Data-Driven Decisions**: Quantifiable scores replace gut feelings

## USE CASES

- **Sales Teams**: Re-engage champions at new prospect companies
- **Customer Success**: Track champions who move to existing accounts
- **Account-Based Marketing**: Identify high-fit accounts through champion networks
- **Revenue Operations**: Automate champion tracking at scale

## NOTES

- **Production Recommendation**: Replace Google Sheets with your production CRM for real-time data
- **Privacy**: All API keys are credential-referenced (not hardcoded) for security
- **Explorium Credits**: Person + company enrichment uses ~2-3 credits per champion

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
