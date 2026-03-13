# 🎣 Enrich LinkedIn profiles in NocoDB CRM with Apify scraper

> ⚡ **1,085 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Introduction
**Manual LinkedIn data collection is time-consuming, error-prone, and results
  in inconsistent data quality across CRM/database records.**

 This workflow is great for organizations that struggle with:
  - Incomplete contact records with only LinkedIn URLs but missing profile
  details
  - Hours spent manually copying LinkedIn information into databases
  - Inconsistent data formats due to copy-paste from LinkedIn (emojis, styled
  text, special characters)
  - Outdated profile information that doesn't reflect current roles/companies
  - No systematic way to enrich contacts at scale

## Primary Users
1.   Sales & Marketing Teams
2.   Event Organizers & Conference Managers for event materials
4.   Recruitment & HR Professionals
5.   CRM Administrators

## Specific Problems Addressed

  1. Data Completeness: Automatically fills missing profile fields (headline,
  bio, skills, experience)
  2. Data Quality: Sanitizes problematic characters that break
  databases/exports
  3. Time Efficiency: Reduces hours of manual data entry to automated monthly
  updates
  4. Error Handling: Gracefully manages invalid/deleted LinkedIn profiles
  5. Scalability: Processes multiple profiles in batch without manual
  intervention
  6. Standardization: Ensures consistent data format across all records

## Cost
Each URL scraped by Apify costs $0.01 to get all the data above. Apify charges per scrape, regardless of how much dta or fields you extract/use.

# Setup Instructions

## Prerequisites

  1. **n8n Instance:** Access to a running n8n instance (self-hosted or cloud)
  2. **NocoDB Account:** Database with a table containing LinkedIn URLs
  3. **Apify Account:** Free or paid account for LinkedIn scraping

## Required fields in NocoDB table

### Input:
* single LinkedIn URL

*NocoDB Field name*
```
LinkedIn
```

### Output:
* first/last/full name
* e-mail
* bio
* headline
* profile pic URL
* current role
* country
* skills
* current employer
* employer URL
* experiences (all previous jobs)
* personal website
* publications (articles)


*NocoDB Field names*
```
linkedin_full_name
linkedin_first_name: 
linkedin_headline:
linkedin_email:
linkedin_bio:
linkedin_profile_pic
linkedin_current_role
linkedin_current_company
linkedin_country
linkedin_skills
linkedin_company_website
linkedin_experiences
linkedin_personal_website
linkedin_publications
linkedin_scrape_error_reason
linkedin_scrape_last_attempt
linkedin_scrape_status
linkedin_last_modified
```

Technically you also need an Id field, but that is always there so no need to add it :)


## n8n Setup

###   1. Import the Workflow
    - Copy the workflow JSON from the template
    - In n8n, click "Add workflow" → "Import from JSON"
    - Paste the workflow and click "Import"
###   2. Configure NocoDB Connection
    - Click on any NocoDB node in the workflow
    - Add new credentials → "NocoDB Token account"
    - Enter your NocoDB API token (found in NocoDB → User Settings → API
  Tokens)
    - Update the projectId and table parameters in all NocoDB nodes
###   3. Set Up Apify Integration
    - Create an Apify account at apify.com
    - Generate an API token (Settings → Integrations → API)
    - In the workflow, update the Apify token in the "Get Scraper Results"
  node
    - Configure HTTP Query Auth credentials with your token
###   4. Map Your Database Fields
    - Review the "Transform & Sanitize Data" node
    - Update field mappings to match your NocoDB table structure
    - Ensure these fields exist in your table:
        - LinkedIn (URL field)
      - linkedin_headline, linkedin_full_name, linkedin_bio, etc.
      - linkedin_scrape_status, linkedin_last_modified
###   5. Configure the Filter
    - In "Get Guests with LinkedIn" node
    - Adjust the filter to match your requirements
    - Default: (LinkedIn,isnot,null)~and(linkedin_headline,is,null)
###   6. Test the Workflow
    - Click "Execute Workflow" with Manual Trigger
    - Monitor execution for any errors
    - Verify data is properly updated in NocoDB
###   7. Activate Automated Schedule
    - Configure the Schedule Trigger node (default: monthly)
    - Toggle the workflow to "Active"
    - Monitor executions in n8n dashboard

# Customization Options

## 1. Data Source Modifications
  - Different Database: Replace NocoDB nodes with Airtable, Google Sheets, or
  PostgreSQL
  - Multiple Tables: Add parallel branches to process different contact tables
  - Custom Filters: Modify the WHERE clause to target specific record subsets

## 2. Enrichment Fields

  - Add Fields: Include additional LinkedIn data like education,
  certifications, or recommendations
  - Remove Fields: Simplify by removing unnecessary fields (publications,
  skills)
  - Custom Transformations: Add business logic for field calculations or
  formatting

## 3. Scheduling Options
  - Frequency: Change from monthly to daily, weekly, or hourly
  - Time-based: Set specific times for different timezones
  - Event-triggered: Replace with webhook trigger for on-demand processing

**4. Error Handling Enhancement**
  - Notifications: Add email/Slack nodes to alert on failures
  - Retry Logic: Implement wait and retry for temporary failures
  - Logging: Add database logging for audit trails

## 5. Data Quality Rules

  - Validation: Add IF nodes to validate data before updates
  - Duplicate Detection: Check for existing records before creating new ones
  - Data Standardization: Add custom sanitization rules for industry-specific
  needs

## 6. Integration Extensions

  - CRM Sync: Add nodes to push data to Salesforce, HubSpot, or Pipedrive
  - AI Enhancement: Use OpenAI to summarize bios or extract key skills
  - Image Processing: Download and store profile pictures locally

## 7. Performance Optimization

  - Batch Size: Adjust the number of profiles processed per run
  - Rate Limiting: Add delays between API calls to avoid limits
  - Parallel Processing: Split large datasets across multiple workflow
  executions

## 8. Compliance Additions

  - GDPR Compliance: Add consent checking before processing
  - Data Retention: Implement automatic cleanup of old records
  - Audit Logging: Track who accessed what data and when

These customizations allow the workflow to adapt from simple contact enrichment to complex data pipeline scenarios across various industries and use cases.

## 🔗 Nodes Used

HTTP Request, NocoDB, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
