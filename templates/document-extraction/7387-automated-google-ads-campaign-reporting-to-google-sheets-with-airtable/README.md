# 🔬 Automated Google Ads campaign reporting to Google Sheets with Airtable

> ⚡ **829 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Google Ads automated reporting to spreadsheets with Airtable

## Who's it for
Digital marketing agencies, PPC managers, and marketing teams who manage multiple Google Ads accounts and need automated monthly performance reporting organized by campaign types and conversion metrics.
## What it does
This workflow automatically retrieves Google Ads performance data from multiple client accounts and populates organized spreadsheets with campaign metrics. It differentiates between e-commerce (conversion value) and lead generation (conversion count) campaigns, then organizes data by advertising channel (Performance Max, Search, Display, etc.) with monthly tracking for budget and performance analysis.
## How it works
The workflow follows an automated data collection and reporting process:

Account Retrieval: Fetches client information from Airtable (project names, Google Ads IDs, campaign types)
Active Filter: Processes only accounts marked as "Actif" for budget reporting
Campaign Classification: Routes accounts through e-commerce or lead generation workflows based on "Typologie ADS"
Google Ads Queries: Executes different API calls depending on campaign type (conversion value vs. conversion count)
Data Processing: Organizes metrics by advertising channel (Performance Max, Search, Display, Video, Shopping, Demand Gen)
Dynamic Spreadsheet Updates: Automatically fills the correct monthly column in client spreadsheets
Sequential Processing: Handles multiple accounts with wait periods to avoid API rate limits

## Requirements

Airtable account with client database
Google Ads API access with developer token
Google Sheets API access
Client-specific spreadsheet templates (provided)

## How to set up
### Step 1: Prepare your reporting template

Copy the Google Sheets reporting template
Create individual copies for each client
Ensure proper column structure (months B-M for January-December)
Link template URLs in your Airtable database

### Step 2: Configure your Airtable database
Set up the following fields in your Airtable:

Project names: Client project identifiers
ID GADS: Google Ads customer IDs
Typologie ADS: Campaign classification ("Ecommerce" or "Lead")
Status - Prévisionnel budgétaire: Account status ("Actif" for active accounts)
Automation budget: URLs to client-specific reporting spreadsheets

### Step 3: Set up API credentials
Configure the following authentication:

Airtable Personal Access Token: For client database access
Google Ads OAuth2: For advertising data retrieval
Google Sheets OAuth2: For spreadsheet updates
Developer Token: Required for Google Ads API access
Login Customer ID: Manager account identifier

### Step 4: Configure Google Ads API settings
Update the HTTP request nodes with your credentials:

Developer Token: Replace "[Your token]" with your actual developer token
Login Customer ID: Replace "[Your customer id]" with your manager account ID
API Version: Currently using v18 (update as needed)

### Step 5: Set up scheduling

Default schedule: Runs on the 3rd of each month at 5 AM
Cron expression: 0 5 3 * *
Recommended timing: Early month execution for complete previous month data
Processing delay: 1-minute waits between accounts to respect API limits

## How to customize the workflow
### Campaign type customization
E-commerce campaigns:

Tracks: Cost and conversion value metrics
Query: metrics.conversions_value for revenue tracking
Use case: Online stores, retail businesses

Lead generation campaigns:

Tracks: Cost and conversion count metrics
Query: metrics.conversions for lead quantity
Use case: Service businesses, B2B companies

### Advertising channel expansion
Current channels tracked:

Performance Max: Automated campaign type
Search: Text ads on search results
Display: Visual ads on partner sites
Video: YouTube and video partner ads
Shopping: Product listing ads
Demand Gen: Audience-focused campaigns

Add new channels by modifying the data processing code nodes.
### Reporting period adjustment

Current setting: Last month data (DURING LAST_MONTH)
Alternative periods: Last 30 days, specific date ranges, quarterly reports
Custom timeframes: Modify the Google Ads query date parameters

### Multi-account management

Sequential processing: Handles multiple accounts automatically
Error handling: Continues processing if individual accounts fail
Rate limiting: Built-in waits prevent API quota issues
Batch size: No limit on number of accounts processed

## Data organization features
### Dynamic monthly columns

Automatic detection: Determines previous month column (B-M)
Column mapping: January=B, February=C, ..., December=M
Data placement: Updates correct month automatically
Multi-year support: Handles year transitions seamlessly

### Campaign performance breakdown
Each account populates 10 rows of data:

Performance Max Cost (Row 2)
Performance Max Conversions/Value (Row 3)
Demand Gen Cost (Row 4)
Demand Gen Conversions/Value (Row 5)
Search Cost (Row 6)
Search Conversions/Value (Row 7)
Video Cost (Row 8)
Video Conversions/Value (Row 9)
Shopping Cost (Row 10)
Shopping Conversions/Value (Row 11)

### Data processing logic

Cost conversion: Automatically converts micros to euros (÷1,000,000)
Precision rounding: Rounds to 2 decimal places for clean presentation
Zero handling: Shows 0 for campaign types with no activity
Data validation: Handles missing or null values gracefully

## Results interpretation
### Monthly performance tracking

Historical data: Year-over-year comparison across all channels
Channel performance: Identify best-performing advertising types
Budget allocation: Data-driven decisions for campaign investments
Trend analysis: Month-over-month growth or decline patterns

### Account-level insights

Multi-client view: Consolidated reporting across all managed accounts
Campaign diversity: Understanding which channels clients use most
Performance benchmarks: Compare similar account types and industries
Resource allocation: Focus on high-performing accounts and channels

## Use cases
### Agency reporting automation

Client dashboards: Automated population of monthly performance reports
Budget planning: Historical data for next month's budget recommendations
Performance reviews: Ready-to-present data for client meetings
Trend identification: Spot patterns across multiple client accounts

### Internal performance tracking

Team productivity: Track account management efficiency
Campaign optimization: Identify underperforming channels for improvement
Growth analysis: Monitor client account growth and expansion
Forecasting: Use historical data for future performance predictions

### Strategic planning

Budget allocation: Data-driven distribution across advertising channels
Channel strategy: Determine which campaign types to emphasize
Client retention: Proactive identification of declining accounts
New business: Performance data to support proposals and pitches

## Workflow limitations

Monthly execution: Designed for monthly reporting (not real-time)
API dependencies: Requires stable Google Ads and Sheets API access
Rate limiting: Sequential processing prevents parallel account handling
Template dependency: Requires specific spreadsheet structure for proper data placement
Previous month focus: Optimized for completed month data (run early in new month)
Manual credential setup: Requires individual configuration of API tokens and customer IDs

## 🔗 Nodes Used

Google Sheets, Google Drive, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
