# 🎣 Generate local business leads with Google Places API & website email scraping

> ⚡ **201 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Purpose & Audience
This workflow automates the process of finding and collecting contact information for local businesses in any city or region. Built entirely with free-tier APIs, it eliminates the need for expensive scraping services while delivering professional-quality lead generation results.
Perfect for agencies, freelancers, sales teams, and entrepreneurs who need to build targeted prospect lists without breaking the bank or dealing with complex scraping tools.

## What It Does
This comprehensive automation workflow:
1. Searches Google Places for businesses by type and location (restaurants, gyms, salons, etc.)
2. Retrieves up to 60 businesses per city using built-in pagination across 3 pages
3. Extracts complete business details: name, address, phone, website, rating, and description
4. Scrapes business websites to find email addresses automatically
5. Handles edge cases gracefully: businesses without websites, failed scrapes, or missing data
6. Batches API requests with intelligent rate limiting to respect Google's quotas
7. Makes clean CSV files available for download with all collected data ready for outreach
8. (Optional) Sends results/csv via email automatically when scraping completes

## Who Is It For?
Ideal Users:
- Marketing Agencies building prospect lists for local business campaigns
- Sales Teams targeting specific industries in multiple cities
- Freelancers offering services to local businesses (web design, SEO, consulting)
- Entrepreneurs researching competitors or potential partners
- Recruiters finding company contact information
- Event Organizers building vendor or sponsor lists

## Use Cases:
1. Build email lists for cold outreach campaigns
2. Research local market competitors
3. Find potential clients in specific industries
4. Gather vendor contact information
5. Create business directories
6. Market research and analysis

## Expected Results
**Per Search:**
60 businesses maximum (with pagination)
70-85% will have websites
40-60% websites will contain email addresses
Processing time: ~5-10 minutes per city/search

## Monthly Capacity/Quota (Free Tier):
- Places API: 150 requests per day ( = ~5,000 per month) to stay within the free tier
- Places API (New): 300 autocomplete requests per day ( = ~10,000 per month), 300 GetPlace requests per day ( = ~10,000 per month)


## Key Features:
✅ Form-based input for easy use (no coding required)
✅ Pagination support for maximum results (60 per search)
✅ Smart email extraction with false-positive filtering
✅ Fallback handling for businesses without websites
✅ Rate limiting to stay within free API tiers (see the Quota for awareness)
✅ Batch processing for efficient execution
✅ CSV export for immediate use in CRMs

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
