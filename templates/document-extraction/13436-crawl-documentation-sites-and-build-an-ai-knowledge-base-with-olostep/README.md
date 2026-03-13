# 🔬 Crawl documentation sites and build an AI knowledge base with Olostep

> ⚡ **28 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Documentation Crawler & Knowledge Base Builder  

This n8n template automatically crawls technical documentation websites, scrapes their content, and converts it into **clean, structured, developer-friendly documentation**.  
Each page is organized into folders and saved as Google Docs, making it easy to build or maintain an internal knowledge base.

## Who’s it for  
- Developer teams maintaining internal or external documentation  
- SaaS companies onboarding users or support teams  
- AI builders creating documentation-based knowledge bases  
- Anyone who wants to turn raw docs into structured, readable references  

## How it works / What it does  
1. **Manual Trigger**  
   - The workflow starts manually whenever you want to crawl or refresh documentation.

2. **Documentation Discovery (Crawler)**  
   - The workflow crawls a root documentation URL and generates a sitemap of all discoverable documentation pages.

3. **URL Processing**  
   - The sitemap is split into individual URLs.  
   - The workflow dynamically analyzes URL depth to recreate the documentation hierarchy.

4. **Folder Structure Creation**  
   - A parent folder is created in Google Drive for the service.  
   - Subfolders are automatically generated to mirror the documentation structure (based on URL paths).

5. **Content Scraping**  
   - Each documentation page is scraped using the Olostep API.  
   - Clean markdown content is extracted from the page.

6. **Information Extraction**  
   - AI extracts structured technical details such as:  
     - API summaries  
     - cURL examples  
     - Authentication methods  
     - Key notes and pitfalls  

7. **AI Documentation Generation**  
   - An AI agent transforms the scraped content into a polished, human-readable API reference or guide.

8. **Document Creation**  
   - A Google Doc is created for each documentation page.  
   - The generated content is inserted into the document and saved in the correct folder.

9. **Rate Control**  
   - A wait step prevents API throttling during large documentation crawls.

The result is a fully structured documentation library generated automatically from live documentation websites.

## How to set up  
1. Import the template into your n8n workspace.  
2. Set the root documentation URL you want to crawl.  
3. Connect your **Google Drive** and **Google Docs** accounts.  
4. Add your **Olostep API key** and AI model credentials.  
5. Execute the workflow to generate your documentation library.

## Requirements  
- n8n account (cloud or self-hosted)  
- Olostep API key  
- Google Drive & Google Docs access  
- AI model provider (OpenAI or Gemini)

## How to customize the workflow  
- Limit the number of pages crawled per run.  
- Adjust AI prompts to match your documentation style.  
- Store results in Notion, Confluence, or Markdown files instead of Google Docs.  
- Add vector storage (Pinecone, Supabase) to turn docs into an AI knowledge base.  
- Schedule automatic re-crawls to keep documentation up to date.

---

👉 This template turns complex technical documentation into an organized, searchable knowledge base — automatically.

## 🔗 Nodes Used

Google Drive, Google Docs, AI Agent, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
