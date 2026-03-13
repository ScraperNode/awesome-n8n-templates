# 🎣 Scrape & enrich Google Maps leads with Decodo API and Gemini 2.5 Flash

> ⚡ **439 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow scrapes Google Maps via Decodo API, analyzes each business using Google Gemini 2.5 Flash, scores lead quality, and generates ready to send outreach emails.


## Why Use This Workflow?

- **Time Savings:** Reduces manual lead research from 20 minutes per lead to 30 seconds processing 100 leads in under an hour
- **Cost Reduction:** Eliminates $300-500/month spent on lead databases and enrichment tools like Apollo or ZoomInfo

- **Scalability:** Process 500+ leads daily without additional staff or subscription costs


## Ideal For

- **Sales Teams & BDRs:** Building targeted prospect lists for local businesses (restaurants, retail, service providers) with verified contact data and personalized outreach hooks
- **Digital Marketing Agencies:** Identifying high-value clients in specific niches (e.g., "restaurants without websites in Chicago") and automating first-touch campaigns
- **B2B SaaS Companies:** Finding businesses matching ideal customer profiles based on ratings, reviews, and digital maturity indicators
- **Local Service Providers:** Generating qualified leads for web design, SEO, POS systems, or booking software tailored to underserved markets



## How It Works

1. **Trigger:** Manually start the workflow or schedule it to run on specific intervals (e.g., daily/weekly)
2. **Data Collection:** Scrapes Google Maps search results using Decodo API based on your query (e.g., "coffee shops in Austin"), country, and language settings
3. **Processing:** Parses raw HTML responses into structured lead objects with business name, address, phone, website, ratings, reviews, and coordinates
4. **Intelligence Layer:** Google Gemini 2.5 Flash analyzes each lead to generate value propositions, identify pain points, create outreach hooks, and assign a 1-10 quality score
5. **Output & Delivery:** Filters leads scoring ≥7, generates personalized email templates, and saves all data to Google Sheets with enrichment timestamps
6. **Storage & Logging:** Maintains complete lead database with outreach status tracking; error handler sends Telegram notifications for failed executions



## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution platform |
| [Decodo Scraper API](dashboard.decodo.com/register?referral_code=744f4d340e73d131117de4af6a3129e343f0f8e4) | Essential | Google Maps data extraction (get key at [dashboard.decodo.com](dashboard.decodo.com/register?referral_code=744f4d340e73d131117de4af6a3129e343f0f8e4)) |
| Google Gemini API | Essential | AI-powered lead analysis and scoring |
| Google Sheets | Essential | Lead database and outreach tracking |
| Telegram Bot (optional) | Optional | Real-time error notifications |

### Installation Steps

1. Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin)

2. **Configure credentials:**
   - **Decodo API:** Create HTTP Header Auth credential with header name `Authorization` and value `Basic [YOUR_API_KEY]` get from [Decodo dashboard](https://dashboard.decodo.com/web-scraping-api/scraper)
   - **Google Gemini API:** Add your Google AI API key in the "2.5 Flash" node credentials
   - **Google Sheets OAuth2:** Authenticate with your Google account (both "Save to Google Sheets" and "Save Outreach To Sheets" nodes)
   - **Telegram (optional):** Add bot token and replace `YOUR-CHAT-ID` in "Send Error Notification" node

3. **Update environment-specific values:**
   - In "Set Search Parameters" node: Update `searchQuery` (e.g., "Italian restaurants in Miami"), `country`, `targetLanguage`, and `resultsLimit`
   - In both Google Sheets nodes: Select your destination spreadsheet and sheet name

4. **Customize settings:**
   - Adjust lead score threshold in "Filter Hot Leads" (default: ≥7)
   - Modify AI prompt in "Lead Enrichment" node to match your value proposition
   - Customize outreach email template in "Prepare Outreach Message" node

5. **Test execution:**
   - Start with `resultsLimit: 5` to verify all connections work
   - Check Google Sheets for properly formatted data
   - Verify AI enrichment produces actionable insights

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
|------|---------|-------------------|
| Decodo Maps Scraper | Fetches Google Maps listings via API | Set `target: google_maps`, adjust `page_to` based on resultsLimit |
| Parse & Normalize Data | Extracts business data from HTML | Custom JavaScript handles multiple response formats |
| Lead Enrichment (AI Chain) | Analyzes leads with Gemini 2.5 Flash | Structured output parser ensures JSON compliance |
| Filter Hot Leads | Isolates high-quality prospects | Combines lead score ≥7 + contact info validation |
| Save to Google Sheets | Stores all enriched leads | Uses `appendOrUpdate` with `id` as matching column |
| Save Outreach To Sheets | Updates hot leads with messages | Marks leads as "HOT" category for prioritization |

## Customization Options

### Basic Adjustments

- **Search Parameters:** Modify `searchQuery`, `country`, `targetLanguage` in "Set Search Parameters" to target different markets (supports all Google Maps locales)
- **Lead Scoring Threshold:** Change filter condition from `≥7` to `≥6` for broader lead pool or `≥8` for ultra-qualified prospects
- **Batch Size:** Adjust "Split Into Batches" to process 10-50 items per cycle (lower = more reliable, higher = faster execution)

### Advanced Enhancements

- **Email Automation:** Connect "Prepare Outreach Message" to Gmail/SendGrid nodes for automatic campaign sends (medium complexity)
- **CRM Integration:** Add HubSpot/Salesforce nodes after enrichment to sync leads directly (requires CRM API credentials)
- **Multi-Channel Outreach:** Branch hot leads to LinkedIn automation tools or SMS providers (high complexity, needs additional services)
- **Custom Scoring Models:** Modify AI prompt to prioritize industry-specific signals (e.g., verified badges for healthcare, delivery options for restaurants)

## Troubleshooting

### Common Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| "No valid leads extracted" error | Decodo response format changed or empty results | Check Decodo API response in "Parse & Normalize Data" execution logs; verify search query returns results in Google Maps manually |
| AI enrichment produces invalid JSON | Gemini output doesn't match schema | Review "Result Parser" schema; add retry logic or simplify AI prompt to reduce complexity |
| Google Sheets "matching column not found" | Spreadsheet missing "id" column header | Ensure Sheet1 has headers: id, businessName, category, address, phone, website, rating, reviewCount, valueProposition, painPoints, outreachHook, leadScore, engagementStrategy, googleMapsUrl, scrapedAt, enrichedAt, outreachMessage, status |
| Timeout on large batches | Processing 100+ leads exceeds execution limits | Reduce `resultsLimit` to 25-50; run workflow multiple times with different queries |


## Use Case Examples

### Scenario 1: Digital Marketing Agency Prospecting

**Challenge:** Agency needs 200 qualified restaurant leads monthly for web design services, spending 40 hours on manual research

**Solution:** Configure workflow with query "restaurants in [city]" filtered by ratings ≥4.0 and missing professional websites (AI scoring detects this)

**Result:** Generated 312 leads in 8 hours across 3 cities; 89 scored ≥8 (hot prospects); closed 14 clients in first month at $2,500 average contract value

### Scenario 2: SaaS Company Market Entry

**Challenge:** Booking software startup targeting salons/spas in new geographic market with zero existing contacts

**Solution:** Ran workflow with "beauty salons in Denver" + "day spas in Denver"; AI identified pain points like "manual appointment booking" and "no online presence"

**Result:** 156 leads enriched in 2 days; personalized outreach hooks increased demo booking rate from 2% (cold template) to 11%; secured 8 pilot customers in 3 weeks

### Scenario 3: Local Service Provider Lead Generation

**Challenge:** POS system reseller needs to identify retail stores still using cash registers, wasting days driving to scout locations

**Solution:** Configured workflow for "retail stores in [neighborhood]" with AI analyzing reviews for mentions of "cash only" or payment friction

**Result:** Identified 47 high-probability prospects in 90 minutes; field sales team prioritized top 15 leads (score ≥9), closed 6 deals worth $32K total revenue

---

## Credits & Links

**Created by:** [Khaisa Studio](https://khaisa.studio)

**Category:** Sales & CRM | **Tags:** lead-generation, google-maps, ai-enrichment, sales-automation, prospecting

**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

**Connect with the creator:**

[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
