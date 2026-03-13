# 🎣 Agentic B2B lead enrichment from Google Search to Google Sheets

> ⚡ **286 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## How it works

This is an advanced "Agentic" workflow that acts as an autonomous lead generation specialist. It goes beyond simple scraping by "thinking" about where to look for contact info.

1. **Search & Filter:** It performs a Google Search for your niche (e.g., "Marketing Agencies in Toronto"), normalizing results to remove directories (Clutch, Yelp) and junk links.
2. **Homepage Analysis:** It visits every lead's website and uses an AI Agent to identify key pages (Contact, About, Careers) and social profiles.
3. **Deep Scan (Branch A):** If a "Contact Us" page is found, a second AI Agent visits that specific page to extract hidden emails and phone numbers.
4. **LinkedIn Enrichment (Branch B):** Simultaneously, if a LinkedIn profile is found, it scrapes the profile to extract Company Size, Industry, and Headquarters location.
5. **Aggregation:** Finally, it merges data from all sources, formats the arrays into readable text, and saves the complete profile to Google Sheets.

## Set up steps

1. **Configure APIs:**
   * **Serper.dev:** Required for the initial Google Search results.
   * **ScraperAPI:** Required to bypass bot detection when visiting company websites and LinkedIn.
   * **Google Gemini (or OpenAI):** Required for the AI Agents to analyze HTML.

2. **Setup Google Sheet:**
   * Create a new Sheet with these exact headers in Row 1: `Company Name`, `Linked Summary`, `employee count`, `industry`, `Emails`, `Phone`, `Website`.
   * Connect the **Google Sheets** node to this file.

3. **Configure Variables:**
   * In the **Edit Fields** node (Start), enter your `search_query` (e.g., "Plumbers in Chicago").

4. **Important Note:**
   * This workflow uses a **Loop** with a 1.5s wait time to be polite to servers. A batch of 50 leads will take approximately 10-15 minutes to complete.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
