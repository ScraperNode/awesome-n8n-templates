# 🎣 Lead research report emails

> ⚡ **3,684 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Overview
This workflow auto-generates a personalized research report on any prospect who books a call with you—using their LinkedIn profile and advanced web research.

When a call is booked in your calendar, the system looks up the lead’s LinkedIn URL from a Google Sheets database. That profile is then scraped using Relevance AI to extract posts, experiences, and education. It also runs a deep-dive query on the person using Perplexity to uncover relevant news, insights, and context. This structured data is passed to an AI model that produces a clean profile summary, suggested pain points, and solution ideas. Finally, the system builds and sends you a fully formatted HTML report via email—ready to review before your meeting.

### Who’s it for
- Founders taking high-stakes sales calls  
- SDRs/BDRs booking back-to-back meetings  
- Agencies and consultants who want to personalize discovery calls  
- Teams doing high-touch enterprise sales or B2B outreach  

### How it works
- Triggered when a new call is booked via Cal.com  
- Finds matching LinkedIn URL from a local database (Google Sheets)  
- Scrapes public LinkedIn data via Relevance AI  
- Runs a Perplexity query on the prospect for deeper context  
- Formats the scraped data using Code nodes  
- Sends structured info to AI to generate:
  - A company + person profile  
  - Suggested pain points and solutions  
- Formats everything into a clean HTML report  
- Emails you the final summary to prep for the call

### Example use case
&gt; Someone books a call. You receive a report 2 minutes later in your inbox with:  
&gt; - Their role, company, and latest posts  
&gt; - What their business does  
&gt; - Recent news and context from Perplexity  
&gt; - Predicted pain points and how you might help  
&gt;  
&gt; You show up to the call prepped and ready

### How to set up
1. Connect your Cal.com trigger (or replace with any booking tool)  
2. Set up your Google Sheet(s) with contact info + LinkedIn profiles  
3. Add Relevance AI API key and configure LinkedIn scraping (they have free credits)  
4. Link Perplexity API for web research  
5. Customize the AI prompts and report formatting  
6. Connect Gmail or preferred email provider to send reports

### Requirements
- Cal.com or other booking platform  
- Google Sheets for lead storage  
- Relevance AI account and API access  
- Perplexity API key  
- OpenAI or similar LLM for summarization  
- Email integration (e.g. Gmail)

### How to customize
- Replace Cal.com with Calendly, SavvyCal, etc.  
- Change AI prompt tone and structure of the report  
- Add CRM push (e.g. log into HubSpot, Notion, or Airtable)  
- Add Slack or Telegram notifications for call alerts  
- Format reports as PDF instead of HTML for download

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Cal.com Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
