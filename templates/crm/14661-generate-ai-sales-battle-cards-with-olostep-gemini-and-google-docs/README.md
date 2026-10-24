# 🤝 Generate AI sales battle cards with Olostep, Gemini, and Google Docs

> ⚡ **39 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Sales Battle Card Generator (Research + Personalized Pitch Assets)  

This n8n template automatically generates **high-quality sales battle cards** for any prospect company using real-time research and AI.  
It analyzes company news, website content, and your product’s value proposition to create **personalized outreach hooks, talk tracks, and objection handling** — all delivered as a ready-to-use document.

## Who’s it for  
- Sales reps and SDRs preparing for outreach  
- Founders doing high-quality cold outreach  
- Sales teams building personalized pitches at scale  
- Agencies doing outbound lead generation  
- Anyone who wants deeper, research-driven sales conversations  

## How it works / What it does  
1. **Form Input**  
   - Enter:  
     - Company name  
     - Company website URL  
     - Your product’s value proposition  

2. **Company Research (Olostep)**  
   - Searches for the latest company news, hiring trends, and challenges.  
   - Identifies signals like growth, funding, or operational pressure.

3. **Website Scraping**  
   - Scrapes the company’s website to understand positioning, messaging, and offerings.

4. **AI Research Analysis**  
   - AI identifies:  
     - Key business triggers (why now?)  
     - Opportunities where your product fits  
   - Maps your value proposition to real company needs.

5. **Pitch Asset Generation**  
   - Generates personalized sales assets:  
     - Cold outreach hook (email/LinkedIn opener)  
     - High-impact discovery questions  
     - Likely objection + smart rebuttal  

6. **Battle Card Generation**  
   - Combines everything into a structured **Sales Battle Card** including:  
     - Executive summary  
     - Outreach assets  
     - Objection handling  
     - Research sources  

7. **Document Creation (Google Docs)**  
   - Converts the output into a clean document.  
   - Automatically creates a Google Doc with the final battle card.

8. **Share & Notify**  
   - Shares the document via Google Drive.  
   - Sends an email with the link to the generated battle card.

This workflow turns raw company data into a **ready-to-use sales playbook in minutes**.

## How to set up  
1. Import the template into your n8n workspace.  
2. Add your **Olostep API key**.  
3. Connect your **Google Drive** account.  
4. Add your **AI model provider** (Gemini or OpenAI).  
5. Run the form and generate your first battle card.

## Requirements  
- n8n account (cloud or self-hosted)  
- Olostep API key  
- Google Drive / Google Docs access  
- AI model provider (Gemini or OpenAI)  

## How to customize the workflow  
- Adjust prompts to match your sales style or industry.  
- Add CRM integration (HubSpot, Salesforce).  
- Generate multiple variations of outreach hooks.  
- Add scoring for lead qualification.  
- Store battle cards in Notion or a database.  

---

This template helps you go from generic outreach to highly personalized, research-driven sales conversations instantly.

## 🔗 Nodes Used

HTTP Request, Google Drive, Markdown, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
