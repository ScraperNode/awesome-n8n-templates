# 🎣 Job post to sales lead pipeline with Scrape.do, Apollo.io & OpenAI

> ⚡ **113 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Lead Sourcing by Job Posts For Outreach With Scrape.do API & Open AI & Google Sheets 

## Overview

This n8n workflow automates the complete lead generation process by scraping job postings from Indeed, enriching company data via Apollo.io, identifying decision-makers, and generating personalized LinkedIn outreach messages using OpenAI. It integrates with Scrape.do for reliable web scraping, Apollo.io for B2B data enrichment, OpenAI for AI-powered personalization, and Google Sheets for centralized data storage.

**Perfect for:** Sales teams, recruiters, business development professionals, and marketing agencies looking to automate their outbound prospecting pipeline.

---

## Workflow Components

### 1. ⏰ Schedule Trigger

| Property | Value |
|----------|-------|
| Type | Schedule Trigger |
| Purpose | Automatically initiates workflow on a recurring schedule |
| Frequency | Weekly (Every Monday) |
| Time | 00:00 UTC |

**Function:** Ensures consistent, hands-off lead generation by running the pipeline automatically without manual intervention.

---

### 2. 🔍 Scrape.do Indeed API

| Property | Value |
|----------|-------|
| Type | HTTP Request (GET) |
| Purpose | Scrapes job listings from Indeed via Scrape.do proxy API |
| Endpoint | `https://api.scrape.do` |
| Output Format | Markdown |

**Request Parameters:**

| Parameter | Value | Description |
|-----------|-------|-------------|
| token | API Token | Scrape.do authentication |
| url | Indeed Search URL | Target job search page |
| super | true | Uses residential proxies |
| geoCode | us | US-based content |
| render | true | JavaScript rendering enabled |
| device | mobile | Mobile viewport for cleaner HTML |
| output | markdown | Lightweight text output |

**Function:** Fetches Indeed job listings with anti-bot bypass, returning clean markdown for easy parsing.

---

### 3. 📋 Parse Indeed Jobs

| Property | Value |
|----------|-------|
| Type | Code Node (JavaScript) |
| Purpose | Extracts structured job data from markdown |
| Mode | Run once for all items |

**Extracted Fields:**

| Field | Description | Example |
|-------|-------------|---------|
| jobTitle | Position title | "Senior Data Engineer" |
| jobUrl | Indeed job link | "https://indeed.com/viewjob?jk=abc123" |
| jobId | Indeed job identifier | "abc123" |
| companyName | Hiring company | "Acme Corporation" |
| location | City, State | "San Francisco, CA" |
| salary | Pay range | "$120,000 - $150,000" |
| jobType | Employment type | "Full-time" |
| source | Data source | "Indeed" |
| dateFound | Scrape date | "2025-01-15" |

**Function:** Parses markdown using regex patterns, filters invalid entries, and deduplicates by company name.

---

### 4. 📊 Add New Company (Google Sheets)

| Property | Value |
|----------|-------|
| Type | Google Sheets Node |
| Purpose | Stores parsed job postings for tracking |
| Operation | Append rows |
| Target Sheet | "Add New Company" |

**Function:** Creates a historical record of all discovered job postings and companies for pipeline tracking.

---

### 5. 🏢 Apollo Organization Search

| Property | Value |
|----------|-------|
| Type | HTTP Request (POST) |
| Purpose | Enriches company data via Apollo.io API |
| Endpoint | `https://api.apollo.io/v1/organizations/search` |
| Authentication | HTTP Header Auth (x-api-key) |

**Request Body:**
```json
{
  "q_organization_name": "Company Name",
  "page": 1,
  "per_page": 1
}
```

**Response Fields:**

| Field | Description |
|-------|-------------|
| id | Apollo organization ID |
| name | Official company name |
| website_url | Company website |
| linkedin_url | LinkedIn company page |
| industry | Business sector |
| estimated_num_employees | Company size |
| founded_year | Year established |
| city, state, country | Location details |
| short_description | Company overview |

**Function:** Retrieves comprehensive company intelligence including LinkedIn profiles, industry classification, and employee count.

---

### 6. 📤 Extract Apollo Org Data

| Property | Value |
|----------|-------|
| Type | Code Node (JavaScript) |
| Purpose | Parses Apollo response and merges with original data |
| Mode | Run once for each item |

**Function:** Extracts relevant fields from Apollo API response and combines with job posting data for downstream processing.

---

### 7. 👥 Apollo People Search

| Property | Value |
|----------|-------|
| Type | HTTP Request (POST) |
| Purpose | Finds decision-makers at target companies |
| Endpoint | `https://api.apollo.io/v1/mixed_people/search` |
| Authentication | HTTP Header Auth (x-api-key) |

**Request Body:**
```json
{
  "organization_ids": ["apollo_org_id"],
  "person_titles": [
    "CTO",
    "Chief Technology Officer",
    "VP Engineering",
    "Head of Engineering",
    "Engineering Manager",
    "Technical Director",
    "CEO",
    "Founder"
  ],
  "page": 1,
  "per_page": 3
}
```

**Response Fields:**

| Field | Description |
|-------|-------------|
| first_name | Contact first name |
| last_name | Contact last name |
| title | Job title |
| email | Email address |
| linkedin_url | LinkedIn profile URL |
| phone_number | Direct phone |

**Function:** Identifies key stakeholders and decision-makers based on configurable title filters.

---

### 8. 📝 Format Leads

| Property | Value |
|----------|-------|
| Type | Code Node (JavaScript) |
| Purpose | Structures lead data for outreach |
| Mode | Run once for all items |

**Function:** Combines person data with company context, creating comprehensive lead profiles ready for personalization.

---

### 9. 🤖 Generate Personalized Message (OpenAI)

| Property | Value |
|----------|-------|
| Type | OpenAI Node |
| Purpose | Creates custom LinkedIn connection messages |
| Model | gpt-4o-mini |
| Max Tokens | 150 |
| Temperature | 0.7 |

**System Prompt:**
```
You are a professional outreach specialist. Write personalized LinkedIn connection request messages. Keep messages under 300 characters. Be friendly, professional, and mention a specific reason for connecting based on their role and company.
```

**User Prompt Variables:**

| Variable | Source |
|----------|--------|
| Name | `$json.fullName` |
| Title | `$json.title` |
| Company | `$json.companyName` |
| Industry | `$json.industry` |
| Job Context | `$json.jobTitle` |

**Function:** Generates unique, contextual outreach messages that reference specific hiring activity and company details.

---

### 10. 🔗 Merge Lead + Message

| Property | Value |
|----------|-------|
| Type | Code Node (JavaScript) |
| Purpose | Combines lead data with generated message |
| Mode | Run once for each item |

**Function:** Merges OpenAI response with lead profile, creating the final enriched record.

---

### 11. 💾 Save Leads to Sheet

| Property | Value |
|----------|-------|
| Type | Google Sheets Node |
| Purpose | Stores final lead data with personalized messages |
| Operation | Append rows |
| Target Sheet | "Leads" |

**Data Mapping:**

| Column | Data |
|--------|------|
| First Name | Lead's first name |
| Last Name | Lead's last name |
| Title | Job title |
| Company | Company name |
| LinkedIn URL | Profile link |
| Country | Location |
| Industry | Business sector |
| Date Added | Timestamp |
| Source | "Indeed + Apollo" |
| Personalized Message | AI-generated outreach text |

**Function:** Creates actionable lead database ready for outreach campaigns.

---

## Workflow Flow

```
⏰ Schedule Trigger
       │
       ▼
🔍 Scrape.do Indeed API ──► Fetches job listings with JS rendering
       │
       ▼
📋 Parse Indeed Jobs ──► Extracts company names, job details
       │
       ▼
📊 Add New Company ──► Saves to Google Sheets (Companies)
       │
       ▼
🏢 Apollo Org Search ──► Enriches company data
       │
       ▼
📤 Extract Apollo Org Data ──► Parses API response
       │
       ▼
👥 Apollo People Search ──► Finds decision-makers
       │
       ▼
📝 Format Leads ──► Structures lead profiles
       │
       ▼
🤖 Generate Personalized Message ──► AI creates custom outreach
       │
       ▼
🔗 Merge Lead + Message ──► Combines all data
       │
       ▼
💾 Save Leads to Sheet ──► Final storage (Leads)
```

---

## Configuration Requirements

### API Keys & Credentials

| Credential | Purpose | Where to Get |
|------------|---------|--------------|
| Scrape.do API Token | Web scraping with anti-bot bypass | [scrape.do/dashboard](https://scrape.do) |
| Apollo.io API Key | B2B data enrichment | [apollo.io/settings/integrations](https://apollo.io) |
| OpenAI API Key | AI message generation | [platform.openai.com](https://platform.openai.com) |
| Google Sheets OAuth2 | Data storage | n8n Credentials Setup |

### n8n Credential Setup

| Credential Type | Configuration |
|-----------------|---------------|
| HTTP Header Auth (Apollo) | Header: `x-api-key`, Value: Your Apollo API key |
| OpenAI API | API Key: Your OpenAI API key |
| Google Sheets OAuth2 | Complete OAuth flow with Google |

---

## Key Features

### 🔍 Intelligent Job Scraping

- **Anti-Bot Bypass:** Residential proxy rotation via Scrape.do
- **JavaScript Rendering:** Full headless browser for dynamic content
- **Mobile Optimization:** Cleaner HTML with mobile viewport
- **Markdown Output:** Lightweight, easy-to-parse format

### 🏢 B2B Data Enrichment

- **Company Intelligence:** Industry, size, location, LinkedIn
- **Decision-Maker Discovery:** Title-based filtering
- **Contact Information:** Email, phone, LinkedIn profiles
- **Real-Time Data:** Fresh information from Apollo.io

### 🤖 AI-Powered Personalization

- **Contextual Messages:** References specific hiring activity
- **Character Limit:** Optimized for LinkedIn (300 chars)
- **Variable Temperature:** Balanced creativity and consistency
- **Role-Specific:** Tailored to recipient's title and company

### 📊 Automated Data Management

- **Dual Sheet Storage:** Companies + Leads separation
- **Timestamp Tracking:** Historical records
- **Deduplication:** Prevents duplicate entries
- **Ready for Export:** CSV-compatible format

---

## Use Cases

### 🎯 Sales Prospecting

- Identify companies actively hiring in your target market
- Find decision-makers at companies investing in growth
- Generate personalized cold outreach at scale
- Track pipeline from discovery to contact

### 👥 Recruiting & Talent Acquisition

- Monitor competitor hiring patterns
- Identify companies building specific teams
- Connect with hiring managers directly
- Build talent pipeline relationships

### 📈 Market Intelligence

- Track industry hiring trends
- Monitor competitor expansion signals
- Identify emerging market opportunities
- Benchmark salary ranges by role

### 🤝 Partnership Development

- Find companies investing in complementary areas
- Identify potential integration partners
- Connect with technical leadership
- Build strategic relationship pipeline

---

## Technical Notes

| Specification | Value |
|---------------|-------|
| Processing Time | 2-5 minutes per run (depending on job count) |
| Jobs per Run | ~25 unique companies |
| API Calls per Run | 1 Scrape.do + ~25 Apollo Org + ~25 Apollo People + ~75 OpenAI |
| Data Accuracy | 90%+ for company matching |
| Success Rate | 99%+ with proper error handling |

### Rate Limits to Consider

| Service | Free Tier Limit | Recommendation |
|---------|-----------------|----------------|
| Scrape.do | 1,000 credits/month | ~40 runs/month |
| Apollo.io | 100 requests/day | Add Wait nodes if needed |
| OpenAI | Based on usage | Monitor costs (~$0.01-0.05/run) |
| Google Sheets | 300 requests/minute | No issues expected |

---

## Setup Instructions

### Step 1: Import Workflow

1. Copy the JSON workflow configuration
2. In n8n: **Workflows → Import from JSON**
3. Paste configuration and save

### Step 2: Configure Scrape.do

1. Sign up at [scrape.do](https://scrape.do)
2. Navigate to Dashboard → API Token
3. Copy your token
4. Token is embedded in URL query parameter (already configured)

**To customize search:**
```
Change the `url` parameter in "Scrape.do Indeed API" node:
- q=data+engineer (search term)
- l=Remote (location)
- fromage=7 (last 7 days)
```

### Step 3: Configure Apollo.io

1. Sign up at [apollo.io](https://apollo.io)
2. Go to **Settings → Integrations → API Keys**
3. Create new API key
4. In n8n: **Credentials → Add Credential → Header Auth**
   - Name: `x-api-key`
   - Value: Your Apollo API key
5. Select this credential in both Apollo HTTP nodes

### Step 4: Configure OpenAI

1. Go to [platform.openai.com](https://platform.openai.com)
2. Create new API key
3. In n8n: **Credentials → Add Credential → OpenAI**
4. Paste API key
5. Select credential in "Generate Personalized Message" node

### Step 5: Configure Google Sheets

1. Create new Google Spreadsheet
2. Create two sheets:
   - **Sheet 1:** "Add New Company"
     - Columns: `companyName | jobTitle | jobUrl | location | salary | source | postedDate`
   - **Sheet 2:** "Leads"
     - Columns: `First Name | Last Name | Title | Company | LinkedIn URL | Country | Industry | Date Added | Source | Personalized Message`
3. Copy Sheet ID from URL
4. In n8n: **Credentials → Add Credential → Google Sheets OAuth2**
5. Update both Google Sheets nodes with your Sheet ID

### Step 6: Test and Activate

1. **Manual Test:** Click "Execute Workflow" button
2. **Verify Each Node:** Check outputs step by step
3. **Review Data:** Confirm data appears in Google Sheets
4. **Activate:** Toggle workflow to "Active"

---

## Error Handling

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| "Invalid character: [" | Empty/malformed company name | Check Parse Indeed Jobs output |
| "Node does not have credentials" | Credential not linked | Open node → Select credential |
| Empty Parse Results | Indeed HTML structure changed | Check Scrape.do raw output |
| Apollo Rate Limit (429) | Too many requests | Add 5-10s Wait node between calls |
| OpenAI Timeout | Too many tokens | Reduce batch size or max_tokens |
| "Your request is invalid" | Malformed JSON body | Verify expression syntax in HTTP nodes |

### Troubleshooting Steps

1. **Verify Credentials:** Test each credential individually
2. **Check Node Outputs:** Use "Execute Node" for debugging
3. **Monitor API Usage:** Check Apollo and OpenAI dashboards
4. **Review Logs:** Check n8n execution history for details
5. **Test with Sample:** Use known company name to verify Apollo

### Recommended Error Handling Additions

For production use, consider adding:

```
- IF node after Apollo Org Search to handle empty results
- Error Workflow trigger for notifications
- Wait nodes between API calls for rate limiting
- Retry logic for transient failures
```

---

## Performance Specifications

| Metric | Value |
|--------|-------|
| Execution Time | 2-5 minutes per scheduled run |
| Jobs Discovered | ~25 per Indeed page |
| Leads Generated | 1-3 per company (based on title matches) |
| Message Quality | Professional, contextual, &lt;300 chars |
| Data Freshness | Real-time from Indeed + Apollo |
| Storage Format | Google Sheets (unlimited rows) |

---

## API Reference

### Scrape.do API

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `https://api.scrape.do` | GET | Direct URL scraping |

**Documentation:** [scrape.do/documentation](https://scrape.do/documentation)

### Apollo.io API

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/v1/organizations/search` | POST | Company lookup |
| `/v1/mixed_people/search` | POST | People search |

**Documentation:** [apolloio.github.io/apollo-api-docs](https://apolloio.github.io/apollo-api-docs)

### OpenAI API

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/v1/chat/completions` | POST | Message generation |

**Documentation:** [platform.openai.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
