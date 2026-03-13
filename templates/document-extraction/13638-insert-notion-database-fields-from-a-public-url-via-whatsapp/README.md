# 🔬 Insert Notion database fields from a public URL via WhatsApp

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Insert Notion Database Fields from a Public URL via WhatsApp

### How it works
1. WhatsApp Trigger receives a message containing a public URL.
2. The workflow extracts the URL and retrieves the page content (via Apify).
3. The content is parsed and transformed into structured fields.
4. A new record is created in Notion, mapping the extracted fields to your database properties.

### Setup steps
1. Configure your WhatsApp credentials in the WhatsApp Trigger node.
2. In the Search / URL Extraction step, adjust the input logic if your message format differs.
3. Configure your Apify credentials (and actor/task) to scrape the target page.
4. Connect your Notion database and map the extracted values in Properties.

### Customization
Default example: Amazon/Goodreads/Casa del Libro book pages.

Update the scraping/parsing logic to match your target sources (e.g., books, products, articles, recipes, news, or LinkedIn profiles).

If you change the data model in Notion, update the Properties mapping accordingly in the final node.

## 🔗 Nodes Used

HTTP Request, Notion, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
