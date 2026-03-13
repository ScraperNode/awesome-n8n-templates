# 🎬 Create SEO content brief from keyword to Google Doc

> ⚡ **1,247 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Who’s it for
------------

Content/SEO teams who want a fast, consistent, research-driven brief for a copywriters from a single keyword—without manual review and analysis of the SERP (Google results).

How it works / What it does
---------------------------

- Form Trigger collects the keyword/topic and redirects to Google Drive Folder after the final node.
- FireCrawl Search & Scrape pulls the top 5 pages for the chosen keyword.
- AI Agent (with Think + OpenAI Chat Model) analyzes sources and generates an original Markdown brief.
- Markdown to JSON converts the Markdown into Google Docs batchUpdate requests (H1/H2/H3, lists, links, spacing). Then this is used in Update a document for updating the empty doc.
- Create a document + Update a document write a Google Doc titled “SEO Brief for ” and update the Google Doc in your target Drive folder.

How to set up
-------------

1.  Add credentials: Firecrawl (Authorization header), OpenAI (Chat), Google Docs OAuth2.
2.  Replace placeholders: {{APIKEY}}, {{googledrivefolderid}}, {{googledrivefolderurl}}.
3.  Publish and open the Form URL to test.

Requirements
------------

Firecrawl API key • OpenAI API key • Google account with access to the target Drive folder.

Resources
---------

Google OAuth2 Credentials Setup - [https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/)  
Firecrawl API key - [https://take.ms/lGcUp](https://take.ms/lGcUp)  
OpenAI API key - [https://docs.n8n.io/integrations/builtin/credentials/openai/](https://docs.n8n.io/integrations/builtin/credentials/openai/)

## 🔗 Nodes Used

HTTP Request, Google Docs, AI Agent, OpenAI Chat Model, n8n Form Trigger, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
