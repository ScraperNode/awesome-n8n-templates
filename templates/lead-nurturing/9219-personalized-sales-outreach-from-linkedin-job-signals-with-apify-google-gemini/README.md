# 💬 Personalized sales outreach from LinkedIn job signals with Apify & Google Gemini

> ⚡ **324 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

![Overview.PNG](fileId:2762)

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for identifying high-intent leads from LinkedIn job postings and automatically generating personalized outreach emails.

## Disclaimer
Community nodes are used in this workflow.

## Who’s this workflow for?
- B2B Sales Teams & SDRs
- Recruitment Agencies & Tech Recruiters
- Startup Founders
- Growth Marketing Teams

## How it works
**1. Scrape Hiring Signals:** The workflow starts by using an Apify scraper to find companies actively hiring for specific roles on LinkedIn (e.g., “ML Engineer”).

**2. Filter & Qualify Companies:** It automatically filters the results based on your criteria (e.g., company size, industry) to create a high-quality list of target accounts.

**3. Find Decision-Makers:** For each qualified company, it uses Apollo.io to find key decision-makers (VPs, Directors, etc.) and enrich their profiles with verified email addresses using user’s Apollo API.

**4. Build a Lead List:** All the enriched lead data—contact name, title, email, company info—is systematically added to a Google Sheet.

**5. Generate AI-Powered Emails:** The workflow then feeds each lead’s data to a Google Gemini AI model, which drafts a unique, personalized cold email that references the specific job the company is hiring for.

**6. Complete the Outreach List:** Finally, the AI-generated subject line and email body are saved back into the Google Sheet, leaving you with a fully prepared, hyper-targeted outreach campaign.

## Setup Instructions
**1. Apify Configuration:** 
- Connect your Apify account in the Run the LinkedIn Job Scraper node.
- You’ll need an apify scrapper, we have used [this scrapper](https://apify.com/curious_coder/linkedin-jobs-scraper)
- In the Custom Body field, paste the URL of your target LinkedIn Jobs search query.

**2. Data Enrichment:**
- Connect your account API of data providers like Clay, Hunter, Apollo, etc. using HTTP Header Auth in the Get Targeted Personnel and Email Finder nodes.

**3. Google Gemini AI:**
- Connect your Google Gemini (or PaLM) API account in the Google Gemini Chat Model node.

**4. Google Sheets Setup:**
- Connect your Google Sheets account.
- Create a spreadsheet and update the Document ID and Sheet Name in the three Google Sheets nodes to match your own.

**5. Activate Workflow:**
- Click “Execute workflow” to run the entire lead generation and email-writing process on demand.


## Connect with us:
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
