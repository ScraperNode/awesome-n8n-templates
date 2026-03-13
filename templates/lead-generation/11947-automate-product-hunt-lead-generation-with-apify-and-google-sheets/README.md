# 🎣 Automate product Hunt lead generation with Apify and Google Sheets

> ⚡ **63 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Product Hunt Scraper - Automated Lead Generation Workflow

&gt; Watch the full Youtube Video Tutorial [![Product Hunt Lead generator](https://img.youtube.com/vi/Y-wUr2-UYZk/maxresdefault.jpg)](https://youtu.be/Y-wUr2-UYZk)

## Turn Product Hunt Launches Into Qualified Leads and Reach out Automatically

**Stop manually searching Product Hunt for potential customers.** This n8n workflow automatically scrapes the latest products from Product Hunt every day, enriches them with contact details, and delivers organized lead lists straight to your Google Sheets.

![Product Hunt Scraper Workflow](https://articles.emp0.com/wp-content/uploads/2025/12/product-hunt-scraper-n8n-workflow-1.png)

### What You Get

This powerful automation workflow delivers:

- **Daily Lead Generation**: Automatically scrapes top 50 Product Hunt products every day at 9 AM
- **Weekly Top Performers**: Every Monday, captures the top 100 products from the previous week (configurable)
- **Rich Contact Data**: Extracts emails, Twitter handles, LinkedIn profiles, Discord usernames, phone numbers, and more
- **Organized Google Sheets**: All leads exported to a structured spreadsheet with product details, maker info, and contact data
- **Automated Outreach**: Optional email system to reach out to makers with personalized messages
- **Fresh Leads Daily**: Never miss a new product launch or potential customer

![Google Sheets Output](https://articles.emp0.com/wp-content/uploads/2025/12/product-hunt-scraper-gsheet-output.png)

---

## Why This Workflow Is a Game Changer

### For Sales & Business Development Teams

- **Build a targeted prospect list** of innovative companies launching new products
- **Reach decision makers directly** with founder emails and social profiles
- **Beat your competition** to newly launched products looking for partnerships or tools
- **Scale your outreach** without hiring additional SDRs

### For SaaS Founders & Indie Hackers

- **Find integration partners** by identifying products that complement yours
- **Discover competitors** and track their launches in real time
- **Connect with fellow makers** for collaboration opportunities
- **Source beta testers** from engaged Product Hunt communities

### For Marketing & PR Agencies

- **Identify potential clients** who just launched and need marketing support
- **Build media lists** of active founders for outreach campaigns
- **Track industry trends** and emerging products in your niche
- **Automate lead qualification** by capturing product categories and descriptions

### For Investors & VCs

- **Monitor emerging startups** launching on Product Hunt
- **Track portfolio company launches** and engagement
- **Discover investment opportunities** in specific categories
- **Build deal flow** with minimal manual research

---

## Key Features

### Intelligent Data Extraction

![Product Hunt Scraper Results](https://articles.emp0.com/wp-content/uploads/2025/12/product-hunt-scraper-product-hunt-results.png)

The workflow captures comprehensive product data:

- Product name, description, and tagline
- Product categories and launch date
- Upvotes and engagement metrics
- Maker information with social profiles
- Website URLs and demo links
- Banner images and screenshots

### Multi Channel Contact Discovery

![Contact Scraper Results](https://articles.emp0.com/wp-content/uploads/2025/12/product-hunt-scraper-contact-scraper-results.png)

Advanced contact enrichment pulls:

- **Primary email addresses** (founder emails, sales, feedback, hello)
- **Secondary email addresses** for CC'ing multiple contacts
- **Social media profiles**: Twitter, LinkedIn, Discord, Facebook, Instagram
- **Communication channels**: YouTube, TikTok, Telegram, WhatsApp, Reddit
- **Phone numbers** (when publicly available)
- **Company domains** for additional research

### Automated Daily Operations

- **Set and forget scheduling**: Runs automatically every morning at 9 AM
- **Smart deduplication**: Removes duplicate entries to keep your data clean
- **Error handling**: Continues processing even if individual products fail
- **Webhook driven architecture**: Efficiently processes results as they're ready
- **Batch processing**: Handles large datasets without overwhelming your system
- **Gmail integration**: Professional email sending via Gmail API for better deliverability

### Automated Outreach System

![Email Outreach Template](https://articles.emp0.com/wp-content/uploads/2025/12/product-hunt-scraper-email-blast.png)

The workflow includes a sophisticated Gmail powered email system that:

- **Sends personalized outreach emails** to product makers with their product details
- **CCs secondary email addresses** for better reach
- **Professional HTML email templates** that are customizable to your brand
- **Better deliverability** through Gmail API (not SMTP)
- **Tracks delivery and engagement** through Gmail
- **Free to use** - 500 emails/day (personal Gmail) or 2,000/day (Workspace)

**Email Template Features:**
- Dynamic product name and details
- Reference to Product Hunt launch
- Personalized value proposition
- Clear call to action
- Unsubscribe link for compliance
- Your branding and contact info

---

## What's Included

When you purchase this workflow, you get:

- **Complete n8n workflow JSON file** ready to import
- **Detailed technical setup guide** with step by step instructions
- **Pre configured Apify actors** for Product Hunt scraping and contact enrichment
- **Email templates** for outreach campaigns

---

## Real Results

### Cost Effective Lead Generation

![Apify Cost Breakdown](https://articles.emp0.com/wp-content/uploads/2025/12/product-hunt-scraper-apify-cost.png)

Run this workflow for approximately **$65 to $95/month** and generate:

- **1,900+ leads per month** (50 products/day × 30 days + weekly top 100)
- **Cost per lead: ~$0.03 to 0.05** which is far cheaper than any lead database
- **Fresh, verified contacts** that aren't available in purchased lists
- **Zero manual work** after initial setup

**Sign up for Apify**: Use our [affiliate link](https://www.apify.com/?fpr=99h7ds) or referral code **99h7ds**

---

## Technical Highlights

- Built on **n8n** - the powerful open source automation platform
- Uses **Apify** actors for reliable scraping at scale
- **Google Sheets integration** for easy data access and sharing
- **Gmail API integration** for professional email outreach
- **Webhook based architecture** for real time processing
- **Smart batching** to stay within API rate limits
- **Modular design** making it easily customize which data points to collect
- **Error recovery** built into every step
- **Active testing data** pinned for easier debugging

---

## Requirements

To run this workflow, you'll need:

- [n8n instance](https://n8n.partnerlinks.io/emp0) (cloud or self hosted on [Railway](https://railway.com/deploy/Hx5aTY?referralCode=jay) or [Hostinger](https://www.hostinger.com/vps/n8n-hosting?REFERRALCODE=jayemp0))
- [Apify account](https://www.apify.com/?fpr=99h7ds) (use referral code: **99h7ds** - free tier available, paid recommended)
- Google account (for Sheets, Drive and Email integration)

Detailed setup instructions are provided in the [Technical Setup guide](https://github.com/Jharilela/n8n-workflows/blob/main/Product%20Hunt%20Lead%20Generator/Technical%20Setup.md).

---

## Comparison: DIY vs This Workflow

| Task | Manual Process | With This Workflow |
|------|---------------|-------------------|
| Find daily products | 30 mins/day checking Product Hunt | Automatic |
| Extract contact info | 5 mins per product × 50 = 4+ hours | Automatic |
| Organize in spreadsheet | 30 mins/day | Automatic |
| Send outreach emails | 3 mins per email × 50 = 2.5 hours | Automatic |
| **Total time saved** | **7+ hours/day** | **0 hours** |
| **Monthly cost** | Your time + assistant salary | **~$50/month** |

---

## Customization Options

This workflow is fully customizable:

- **Adjust scraping schedule**: Change from daily to twice daily or weekly
- **Filter by category**: Only scrape products in specific categories (AI, Developer Tools, etc.)
- **Modify top N products**: Increase/decrease the number of products scraped
- **Custom email templates**: Edit the outreach message to match your brand
- **Add email verification**: Integrate ZeroBounce or similar services
- **Connect to your CRM**: Pipe leads directly to Salesforce, HubSpot, or Pipedrive
- **Slack/Discord notifications**: Get alerted when new leads are found

---

## Support & Updates

- **Lifetime updates**: Get all future improvements and bug fixes
- **Email support**: Questions? We're here to help with setup, [Email Us](mailto:jay@emp0.com)
- **Community access**: Join our [Skool community](https://www.skool.com/aia-ai-automation-2762) with other users sharing tips and customizations
- **Documentation**: Comprehensive guides covering every feature

---

## Get Started Today

**Stop losing leads to competitors.** Start automatically capturing fresh Product Hunt leads every single day.

→ **[Purchase Workflow](https://0emp0.gumroad.com/l/product-hunt-lead-generator)** - One time payment, lifetime access

→ **[View Technical Setup Guide](https://github.com/Jharilela/n8n-workflows/blob/main/Product%20Hunt%20Lead%20Generator/Technical%20Setup.md)** - See what's involved

→ **[Join Community](https://www.skool.com/aia-ai-automation-2762)** - Connect with other users

---

## Frequently Asked Questions

**Q: Do I need coding skills?**
A: No! The workflow is pre built and ready to import. Basic n8n familiarity is helpful but not required.

**Q: What are the ongoing costs?**
A: Approximately $65 to $95/month total ($40-60 for [Apify](https://www.apify.com/?fpr=99h7ds) scraping services + $20 for [n8n cloud](https://n8n.partnerlinks.io/emp0), or $0 if you self host on [Railway](https://railway.com/deploy/Hx5aTY?referralCode=jay) or [Hostinger](https://www.hostinger.com/vps/n8n-hosting?REFERRALCODE=jayemp0)).

**Q: Is this legal?**
A: Yesm all data is publicly available on Product Hunt and product websites. Follow ethical outreach practices.

**Q: Can I scrape more/fewer products?**
A: Absolutely! The workflow is fully customizable. Adjust the "topNProducts" parameter in the config.

**Q: What if emails bounce or accounts get banned?**
A: The guide includes best practices for email deliverability and warnings about sending volume limits.

**Q: Can I use this for specific product categories?**
A: Yes! You can filter by category in the Apify scraper configuration.

**Q: Does this work with Gmail?**
A: Yes! The workflow now uses Gmail API by default for better deliverability and tracking. You can customize it for other providers by using the SMTP node

---

**Ready to automate your lead generation?** Get the Product Hunt Scraper workflow today and start building your pipeline on autopilot.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
