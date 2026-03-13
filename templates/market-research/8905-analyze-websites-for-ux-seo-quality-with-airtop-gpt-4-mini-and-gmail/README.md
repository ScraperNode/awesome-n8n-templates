# 📊 Analyze websites for UX & SEO quality with Airtop, GPT-4 Mini, and Gmail

> ⚡ **739 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### UX & SEO Website Analyst (Airtop + OpenAI + Gmail)

This workflow automatically analyzes a website for UX and SEO quality. It uses Airtop for realistic web scraping, OpenAI for structured evaluation of metadata (title, description, and overall SEO signals), and Gmail to send professional reports.  

#### What it does
- Scrapes website content and metadata through an Airtop session.  
- Evaluates SEO and UX factors (strengths, weaknesses, recommendations) with OpenAI.  
- Generates a clear, structured report.  
- Sends the report automatically via Gmail.  

#### Use cases
- Marketing agencies auditing client websites.  
- Freelancers offering SEO/UX review services.  
- Businesses monitoring their own website performance.  

#### Requirements
- **Airtop account** with API access.  
- **OpenAI API key**.  
- **Gmail credentials** connected in n8n.  

---

### How it works
- Start the flow with a target website URL.  
- Airtop opens a session and scrapes metadata naturally.  
- OpenAI analyzes and scores the title, description, and overall quality.  
- Gmail sends a formatted report to your chosen recipient.  

### Set up steps
- Connect Airtop, OpenAI, and Gmail credentials in n8n.  
- Provide the target URL to analyze.  
- Run the workflow and review the email report.  
- Keep detailed instructions inside sticky notes in the workflow.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
