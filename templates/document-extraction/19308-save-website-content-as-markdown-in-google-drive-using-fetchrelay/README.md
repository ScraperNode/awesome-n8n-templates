# 🔬 Save website content as Markdown in Google Drive using FetchRelay

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually extracts the main content of a public webpage as Markdown using FetchRelay and uploads the resulting .md file to Google Drive.

## How it works
1. Runs when you execute the workflow manually.
2. Sets the target webpage URL to scrape.
3. Sends the URL to the FetchRelay scrape API to extract the page’s main content in Markdown format.
4. Validates that FetchRelay returned usable Markdown and stops with an error if there are extraction warnings.
5. Converts the Markdown text into a Markdown file.
6. Uploads the generated .md file to the selected Google Drive folder.

## Setup
1. Add a FetchRelay API key and configure the HTTP Header Auth to send `Authorization: Bearer <YOUR_FETCHRELAY_API_KEY>`.
2. Add a Google Drive OAuth credential and choose the destination Drive and folder.
3. Update the URL value in the Website URL step to the public page you want to archive as Markdown. Start with https://example.com, execute the workflow manually, and confirm that the generated Markdown file appears in your selected Google Drive folder.

## Requirements
- An n8n instance, a FetchRelay account with an API key and available credits, and a Google Drive account with upload access to the selected folder. Each successful page extraction uses one FetchRelay credit; other platform costs are separate.

## Additional info
Each execution creates a new file rather than updating an existing document. Empty results, failed extraction, and extraction warnings stop the workflow before upload. Login-protected pages and CAPTCHA bypass are not supported. The FetchRelay API and validation logic have been tested; a full Google Drive OAuth/upload run has not yet been verified.

## 🔗 Nodes Used

HTTP Request, Google Drive, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
