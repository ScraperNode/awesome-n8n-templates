# ⚒️ Api schema extractor

> ⚡ **29,284 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automates the process of discovering and extracting APIs from various services, followed by generating custom schemas. It works in three distinct stages: research, extraction, and schema generation, with each stage tracking progress in a Google Sheet.

🙏 [Jim Le](https://n8n.io/creators/jimleuk/) deserves major kudos for helping to build this sophisticated three-stage workflow that cleverly automates API documentation processing using a smart combination of web scraping, vector search, and LLM technologies.

## How it works
### Stage 1 - Research:
- Fetches pending services from a Google Sheet
- Uses Google search to find API documentation
- Employs Apify for web scraping to filter relevant pages
- Stores webpage contents and metadata in Qdrant (vector database)
- Updates progress status in Google Sheet (pending, ok, or error)

### Stage 2 - Extraction:
- Processes services that completed research successfully
- Queries vector store to identify products and offerings
- Further queries for relevant API documentation
- Uses Gemini (LLM) to extract API operations
- Records extracted operations in Google Sheet
- Updates progress status (pending, ok, or error)

### Stage 3 - Generation:
- Takes services with successful extraction
- Retrieves all API operations from the database
- Combines and groups operations into a custom schema
- Uploads final schema to Google Drive
- Updates final status in sheet with file location

## Ideal for:
- Development teams needing to catalog multiple APIs
- API documentation initiatives
- Creating standardized API schema collections
- Automating API discovery and documentation

## Accounts required:
- Google account (for Sheets and Drive access)
- Apify account (for web scraping)
- Qdrant database
- Gemini API access

## Set up instructions:
- Prepare your Google Sheets document with the services information. [Here's an example of a Google Sheet](https://docs.google.com/spreadsheets/d/1UJtksHQV0NRNhsDdVdkdIoNssuvoTWso/edit?usp=sharing&ouid=108234606433343029350&rtpof=true&sd=true) – you can copy it and change or remove the values under the columns. Also, make sure to update Google Sheets nodes with the correct Google Sheet ID. 
- Configure Google Sheets OAuth2 credentials, required third-party services (Apify, Qdrant) and Gemini.
- Ensure proper permissions for Google Drive access.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Execute Sub-workflow, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
