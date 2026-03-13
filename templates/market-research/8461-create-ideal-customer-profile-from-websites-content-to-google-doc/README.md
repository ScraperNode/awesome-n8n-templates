# 📊 Create ideal customer profile from websites content to Google Doc

> ⚡ **272 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Who’s it for
Growth, marketing, sales, and founder teams that want a **decision-ready Ideal Customer Profile (ICP)**—grounded in their own site content.

## How it works / What it does
- **On form submission** collects **Website URL** and **Business Name** and redirects to Google Drive Folder after the final node.  
- **Crawl and Scrape the Website Content** - crawls and scrape **20 pages** from the website. 
- **ICP Creator** builds a **Markdown ICP** with:  
A) **Executive Summary**
B) **One-Pager ICP**
C) **Tiering & Lead Scoring**
D) **Demand Gen & ABM Plays**
E) **Evidence Log**
F) **Section Confidence**
**Facts vs. Inferences**, confidence scores and tables. 
- **Markdown to Google Doc** converts Markdown to Google Docs `batchUpdate` requests. Then this is used in **Update a document** for updating the empty doc. 
- **Create a document** + **Update a document** generate **“ICP for &lt;Business Name&gt;”** in your Drive folder and apply formatting.

## How to set up
1) Add credentials: **Firecrawl** (Authorization header), **OpenAI** (Chat), **Google Docs OAuth2**.  
2) Replace placeholders: `{{API_KEY}}`, `{{google_drive_folder_id}}`, `{{google_drive_folder_url}}`.  
3) Publish and open the Form URL to test.

## Requirements
Firecrawl API key • OpenAI API key • Google account with access to the target Drive folder.

## Resources
Google OAuth2 Credentials Setup - https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/  
OpenAI API key - https://docs.n8n.io/integrations/builtin/credentials/openai/  
Firecrawl API key - https://take.ms/lGcUp

## 🔗 Nodes Used

HTTP Request, Google Docs, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
