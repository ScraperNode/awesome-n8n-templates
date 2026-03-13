# 💬 Automate cold outreach with Apollo, LinkedIn & Gmail using GPT-4

> ⚡ **1,179 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Cold Outreach Automation by Rysysth Technologies  

This n8n workflow automates the complete cold outreach process by combining Apollo.io lead generation, LinkedIn networking, and personalized email outreach into one streamlined system.  

---

## How It Works  

### Prospect Definition (Form Input)  
User enters job titles, company size, keywords, and locations.  

### Apollo Search URL Generation  
OpenAI converts form inputs into a precise Apollo.io search URL.  

### Lead Scraping (Apify)  
Apollo.io scraper collects contact details, emails, LinkedIn profiles, and company data (limited to 10 leads per run).  

### LinkedIn & Company Data Enrichment (Unipile)  
Extracts LinkedIn profile and company details for each lead.  

### CRM Sync (HubSpot)  
Automatically creates or updates lead records in HubSpot CRM.  

### Personalized Outreach (AI-Powered)  
OpenAI generates:  
- Custom LinkedIn connection request (under 300 characters)  
- Email subject and body (personalized with a soft CTA)  

### LinkedIn Connect  
If not already connected, workflow sends LinkedIn invites via Unipile.  

### Email Validation (ZeroBounce)  
Ensures emails are valid or catch-all before outreach.  

### Email Outreach (Gmail API)  
If verified, sends the AI-personalized outreach email directly from Gmail.  

---

## Tools and APIs Integrated  
- **Apify** → Apollo.io scraper (lead extraction)  
- **Unipile** → LinkedIn profile enrichment and connection requests  
- **ZeroBounce** → Email verification  
- **OpenAI** → Apollo URL creation and outreach copy generation  
- **HubSpot** → CRM sync  
- **Gmail** → Automated outreach emails  

---

## Key Benefits  
- Saves time by automating manual prospecting and email writing  
- Delivers personalized, multi-channel outreach at scale  
- Ensures accurate CRM updates with HubSpot integration  
- Improves email deliverability with ZeroBounce validation  
- Designed for founders, sales teams, and agencies seeking efficient lead generation  

---
## Connect with Rysysth Technologies 
At **[Rysysth Technologies](https://rysysthtechnologies.com)**, we build custom n8n workflows that go far beyond standard templates. From AI-powered prospecting to CRM automation and advanced outreach pipelines, we tailor automation solutions that align perfectly with your business goals.  

Let’s create your custom workflow together. Partner with **[Rysysth Technologies](https://rysysthtechnologies.com)** to transform your outreach process today.  

 
- **Website**: [rysysthtechnologies.com](https://www.rysysthtechnologies.com)  
- **Email**: [getstarted@rysysthtechnologies.com](mailto:getstarted@rysysthtechnologies.com)  
- **LinkedIn**: [linkedin.com/company/rysysth](https://www.linkedin.com/company/rysysth)

## 🔗 Nodes Used

HTTP Request, HubSpot, Gmail, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
