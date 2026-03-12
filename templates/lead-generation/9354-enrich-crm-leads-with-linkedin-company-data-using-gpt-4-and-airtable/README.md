# 🎣 Enrich CRM Leads with LinkedIn Company Data using GPT-4 and Airtable

> ⚡ **329 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 🚀 Enrich CRM Leads with LinkedIn Company Data Using AI

### **Who's it for**
Sales teams, marketers, and business development professionals who need to automatically enrich their CRM records with detailed company information from LinkedIn profiles. Perfect for anyone doing B2B outreach who wants to personalize their messaging at scale.

### **What it does**
This workflow transforms bare-bones lead records into rich, personalized prospect profiles by:
- Automatically scraping LinkedIn company profiles
- Using AI (GPT-4) to extract key business intelligence
- Generating 15+ email-ready personalization variables
- Updating your CRM with structured, actionable data

The workflow pulls company overviews, products/services, funding information, recent posts, and converts everything into natural-language variables that can be dropped directly into your outreach templates.

### **How it works**
1. **Trigger**: Workflow starts when a new lead is added to Airtable (or on schedule)
2. **Fetch**: Retrieves the lead record containing the LinkedIn company URL
3. **Scrape**: Pulls the raw HTML from the company's LinkedIn profile
4. **Clean**: Strips HTML tags and formats content for AI processing
5. **Analyze**: GPT-4 extracts structured company intelligence (overview, products, market presence, recent posts)
6. **Transform**: Converts analysis into 15+ email-ready variables with natural phrasing
7. **Update**: Writes enriched data back to your CRM

### **Setup Requirements**
- **Airtable account** (free tier works fine)
- **OpenAI API key** (GPT-4o-mini recommended for cost-effectiveness)
- **LinkedIn company URLs** stored in your CRM
- **5 minutes** for initial configuration

### **How to set up**

1. **Configure Airtable Connection**
   - Replace `YOUR_AIRTABLE_BASE_ID` with your base ID
   - Replace `YOUR_TABLE_ID` with your leads table ID
   - Ensure your table has a "LinkedIn Organization URL" field
   - Add your Airtable API credentials

2. **Add OpenAI Credentials**
   - Click on both OpenAI nodes
   - Add your OpenAI API key
   - GPT-4o-mini is recommended (cost-effective and fast)

3. **Set Up Trigger**
   - Add a trigger node (Schedule, Webhook, or Airtable trigger)
   - Configure to run when new leads are added or on a daily schedule

4. **Test the Workflow**
   - Add a test lead with a LinkedIn company URL
   - Execute

## 🔗 Nodes Used

Airtable, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
