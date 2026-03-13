# 🎣 Automate B2B lead generation using Google Places API & SendGrid with dashboard

> ⚡ **46 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automates the entire lead generation pipeline from discovery to outreach:

**1. Location Grid Generation and Management**

- Generates precise lat/lng grid points covering major US cities (New York, Texas, New Jersey, Atlanta, Miami)
- Uses 1.5km radius searches for optimal coverage
- Tracks searched locations to prevent duplicates
- Processes 50 points per day (customizable based on API quota)

**2. Automated Lead Discovery**

- Daily scheduled searches using Google Places Nearby API
- Extracts business details: name, address, rating, status, place ID
- Fetches additional data via Google Places Details API (phone, website, hours)
- Smart filtering to focus only on businesses with websites

**3. Contact Information Extraction**

- Scrapes business websites to find email addresses
- Advanced email filtering removes fake/placeholder emails
- Deduplicates by domain to ensure quality leads
- Tracks all discovered emails per business

**4. Intelligent Cold Email Outreach**

- Two alternating email templates for variety and testing
- Personalized with business name, industry, and first name
- Rate-limited sending (30-second delays) to avoid spam flags
- Automated via SendGrid integration
- Marks sent emails in the database

**5. Real-Time Lead Dashboard**

- Webhook-powered reporting endpoint
- Displays all discovered leads with full details
- Filters out fake/invalid emails automatically
- Clean, accessible data format for analysis

**What You Get:**

1. Automated daily lead collection from Google Places
2. Email extraction from business websites
3. Personalized cold email campaigns with A/B testing
4. Lead tracking database in Google Sheets
5. Real-time reporting dashboard via webhook
6. Complete deduplication to maintain data quality

**Setup Requirements:**

- Google Cloud Platform account (for Places API key)
- SendGrid account (for email sending)
- Google Sheets (2 templates provided)
- Basic n8n knowledge for configuration

**Included Templates:**

- Location Grid Google Sheet - Tracks searched coordinates
- Leads Database Google Sheet - Stores all discovered leads
- Dashboard Webpage - Real-time lead reporting interface

**Customizable Features:**

- Target locations (currently covers 5 major US cities)
- Daily batch size (default: 50 searches/day)
- Email templates and personalization
- Search radius (default: 1.5km)
- Industry filters and targeting

**Perfect For:**

- Marketing agencies building client lead lists
- B2B sales teams prospecting locally
- Service providers finding new customers
- Anyone needing automated local business outreach


**Need help setting this up or want custom modifications?**
📧 Connect with me on LinkedIn: [Gilbert Onyebuchi](https://www.linkedin.com/in/gilbert-onyebuchi/)
🌐 View live dashboard demo: [Click here](https://sites.google.com/view/template-n8n/test-products/lead-gen-report)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, SendGrid, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
