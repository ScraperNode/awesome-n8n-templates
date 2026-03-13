# 🎣 Scrape Google Maps by area & generate outreach messages for lead generation

> ⚡ **7,654 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### This n8n workflow automates lead extraction from Google Maps, enriches data with AI, and stores results for cold outreach.

It uses the [Bright Data](https://brightdata.com/) community node and Bright Data MCP for scraping and AI message generation.

### **How it works**

1. **Form Submission**
    
    User provides Google Maps starting location, keyword and country.
    
2. **Bright Data Scraping**
    
    [Bright Data](https://brightdata.com/) community node triggers a Maps scraping job, monitors progress, and downloads results.
    
3. **AI Message Generation**
    
    Uses Bright Data MCP with LLMs to create a personalized cold call script and talking points for each lead.
    
4. **Database Storage**
    
    Enriched leads and scripts are upserted to Supabase.
    

### **How to use**

Set up all the credentials, create your Postgres table and submit the form. The rest happens automatically.

### **Requirements**

- LLM account (OpenAI, Gemini…) for API usage.
- [Bright Data](https://brightdata.com/) account for API and MCP usage.
- Supabase account (or other Postgres database) to store information.

## 🔗 Nodes Used

HTTP Request, Postgres, AI Agent, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
