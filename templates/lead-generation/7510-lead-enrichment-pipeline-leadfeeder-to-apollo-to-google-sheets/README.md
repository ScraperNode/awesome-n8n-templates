# 🎣 Lead enrichment pipeline: Leadfeeder to Apollo to Google Sheets

> ⚡ **117 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Fresh enriched leads in your Sheet every morning. This automation pulls yesterday's website visitors from Leadfeeder, enriches them with Apollo.io company data, deduplicates smartly into Google Sheets, and pings your team on Telegram when attention is needed.

![cover.png](fileId:2131)

*Last updated: September 2026.*

## What This Does

This automation creates a seamless daily pipeline that:
- **Pulls** yesterday's website visitors from Leadfeeder
- **Enriches** company data using Apollo.io's powerful database
- **Delivers** enriched leads to your Google Sheets with smart deduplication
- **Alerts** your team via Telegram when something needs attention

## Why Automate Your Lead Enrichment?

**Reclaim Your Time**  
Stop the copy-paste busywork.

**Never Miss a Hot Lead**  
Yesterday's visitors captured and enriched automatically.

**Enable Faster Outreach**  
Enriched records mean SDRs reach out the same day with full context. Faster follow-up, higher conversion.

**API-Friendly Design**  
Built-in pagination, rate limiting (40s delay), and smart stop logic prevent API throttling and account issues.

## Perfect For These Teams

**Growth Marketers**  
A daily pipeline of enriched accounts for targeted campaigns and ABM strategies.

**Sales Ops & SDR Managers**  
Reps start each day with high-quality, enriched leads in a shared workspace.

**Data & BI Teams**  
A lightweight source-of-truth for lead activity without complex ETL pipelines.

## Workflow Overview
```
Daily Trigger (9 AM) → Fetch Account → Generate Pages → Retrieve Leads → 
Enrich with Apollo → Update Google Sheets → Send Alerts
```

**Trigger**  
Runs automatically every day at 9:00 AM server time

**Process Flow**  
1. Fetch your Leadfeeder Account ID
2. Generate smart pagination (up to 50 pages with safety cap)
3. Retrieve yesterday's leads in batches of 100
4. Split and process individual records
5. Enrich each company using Apollo's database
6. Append or update rows in Google Sheets with deduplication

**Smart Logic**  
- Pre-generates page sequences with safety limits
- Stops automatically when pages return &lt;100 results
- Normalizes website URLs and handles Apollo field fallbacks
- Implements intelligent rate limiting to respect API limits

**Output**  
- Clean, enriched data in your Google Sheets
- Telegram alerts for any workflow errors
- Automatic deduplication using ID matching

## Quick Setup Guide

### 1. Import & Configure
Import the JSON workflow file to your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance

### 2. Add Your Credentials
Set up these integrations in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin):
- **Leadfeeder**: HTTP Header Auth with Bearer token
- **Apollo**: HTTP Header Auth with API key  
- **Google Sheets**: OAuth2 with edit permissions
- **Telegram**: Bot Token + Chat ID for alerts

### 3. Update Sheet Configuration
- Replace `documentId` with your Google Sheets URL or from list
- Set correct `sheetName` (gid) in Google Sheets nodes
- Verify column mapping matches your sheet structure

### 4. Test Your Setup
Run a test with yesterday's date to confirm:
- Leads are retrieved from Leadfeeder
- Apollo enrichment populates correctly  
- Rows append/update in Google Sheets
- Telegram alerts work for errors



## Level Up Your Automation

### CRM Integration
Push enriched leads directly into HubSpot, Salesforce, or Pipedrive for automatic sequences and follow-up campaigns.

### Daily Intelligence Reports
Add Slack or email summaries highlighting high-value accounts by revenue, employee count, or industry vertical.

### Smart Routing
Route leads to specific team members based on company size, industry, or geographic location.


## Data Flow Structure
Each lead goes through this enrichment pipeline:
1. **Raw Lead**: Company name, website, visit data from Leadfeeder
2. **Apollo Enrichment**: Industry, size, revenue, contact info, social profiles
3. **Sheet Update**: Merged data with smart deduplication and timestamp tracking

### Quick Answers
**When does it run?**  
Daily at 9:00 AM server time, pulling yesterday's visitors.  
**When does it stop paging?**  
Automatically, once a page returns fewer than 100 results (50-page safety cap).  
**How are duplicates handled?**  
ID-based matching appends or updates rows instead of duplicating them.  



## Support

**Made by:** [khmuhtadin](https://khmuhtadin.com)  
**Support:** [Contact for Custom Work](https://khmuhtadin.com/contact)  
**Category:** Sales Automation, Lead Generation, Data Enrichment  
**Tags:** lead-generation, leadfeeder, apollo, google-sheets, lead-enrichment, sales-automation

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
