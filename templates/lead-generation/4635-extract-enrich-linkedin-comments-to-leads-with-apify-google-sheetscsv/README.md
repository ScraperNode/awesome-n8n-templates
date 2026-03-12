# 🎣 Extract & enrich LinkedIn comments to leads with Apify → Google Sheets/CSV

> ⚡ **15,657 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# 🚀 LinkedIn Comments to Leads Extractor & Enricher (Apify) → Google Sheets / CSV

## Overview

**Automate LinkedIn lead generation by scraping comments from targeted posts and enriching profiles with detailed data**

This n8n workflow automatically extracts leads from LinkedIn post comments using Apify's powerful scrapers (no LinkedIn login required), enriches the data with additional profile information, and exports everything to Google Sheets or CSV format.

---

## ✨ Key Features

- 🔍 **No Login Required**: Scrape LinkedIn data without sharing credentials
- 💰 **Cost-Effective**: First 1,000 comments are free with Apify
- 📊 **Data Enrichment**: Enhance basic comment data with full profile details
- 📈 **Export Options**: Choose between Google Sheets or CSV output
- 🎯 **Targeted Scraping**: Focus on specific posts for quality leads

---

## 🛠️ Apify Scrapers Used

### 1. LinkedIn Post Comments Scraper
- **Tool**: [LinkedIn Post Comments, Replies, Engagements Scraper | No Cookies](https://apify.com/apimaestro/linkedin-post-comments-replies-engagements-scraper-no-cookies/api/python)
- **Pricing**: $5.00 per 1,000 results
- **Function**: Extracts all comments and engagement data from specified LinkedIn posts

### 2. LinkedIn Profile Batch Scraper
- **Tool**: [LinkedIn Profile Details Batch Scraper (No Cookies Required)](https://apify.com/apimaestro/linkedin-profile-batch-scraper-no-cookies-required)
- **Pricing**: $5.00 per 1,000 results
- **Function**: Enriches scraped profiles with detailed information

&gt; 💡 **Free Tier**: Apify provides 1,000 free scraped comments to get you started!

---

## 📋 Prerequisites

### Required API Credentials

1. **Apify Token**
   - Add your `APIFY_TOKEN` to the workflow credentials
   - [Get your token from Apify Console](https://apify.com/account#/integrations)

2. **Google Sheets Credentials** *(if using Sheets export)*
   - Configure OAuth credentials for Google Sheets integration
   - [Follow n8n's Google Sheets setup guide](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal)

---

## 🔄 Workflow Process

### Default Mode: Form-Based Execution

1. **Manual Trigger** → Launches the workflow
2. **Form Submission** → User-friendly form for inputting LinkedIn post URLs
3. **Comment Scraping** → Apify extracts all comments from specified posts
4. **Profile Enrichment** → Additional profile data gathered for each commenter
5. **Data Processing** → Creates unique, enriched lead list
6. **Google Sheets Export** → Automatically populates your spreadsheet

**Result**: You'll be redirected to a Google Sheets document containing all enriched leads

### Alternative Mode: CSV Export

For users preferring CSV output:

1. **Disable**: Form trigger nodes
2. **Enable**: Manual trigger node
3. **Disable**: Google Sheets export nodes
4. **Enable**: CSV download nodes
5. **Configure**: Add post IDs/URLs in "Set manual fields" node
6. **Execute**: Run workflow and download CSV from the CSV node

---

## 📊 Output Data Structure

Your exported data will include:

- **Basic Info**: Name, headline, location
- **Profile Details**: Company, position, industry
- **Engagement Data**: Comment content, engagement metrics
- **Contact Info**: Available profile links and connections
- **Enriched Data**: Additional profile insights from Apify

---

## 💡 Pro Tips

- **Quality over Quantity**: Target posts with high-quality, relevant engagement
- **Monitor Costs**: Track your Apify usage to stay within budget
- **Data Hygiene**: Regularly clean and deduplicate your lead lists
- **Compliance**: Ensure your scraping activities comply with LinkedIn's terms of service

---

## 🆘 Troubleshooting

**Common Issues:**
- **Authentication Errors**: Verify your Apify token is correctly configured
- **Empty Results**: Check that your LinkedIn post URLs are valid and public
- **Export Failures**: Ensure Google Sheets credentials are properly set up

**Need Help?** Contact [Saverflow.ai](https://saverflow.ai) for support and custom workflow development.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
