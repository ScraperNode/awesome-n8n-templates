# 🔧 Generate and publish GMB one-page sites with Claude and Hostinger

> ⚡ **49 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow uses an n8n Chat UI plus OpenRouter (Claude Sonnet) to generate and iteratively edit a single-page local business website, serve a live HTML preview, and publish the approved page to a Hostinger subdomain, while archiving versions to a Data Table, Google Drive, and Google Sheets.

## How it works
1. Receives a message in the n8n Chat UI and uses OpenRouter (Claude Sonnet) to extract a business brief and decide whether to reply, build a site, or publish.
2. When building, loads the latest saved HTML version for the current chat session and asks OpenRouter (Claude Sonnet) to generate or apply edits to a complete `index.html`.
3. Cleans the model output into raw HTML, generates a preview URL, and saves a new version (with status) to an n8n Data Table.
4. Archives the generated HTML to Google Drive and appends a run log (including preview URL and Drive link) to Google Sheets.
5. Replies in chat with the preview link and instructions to request edits or approve publishing.
6. Serves `GET /preview/:siteId` by loading the latest HTML from the Data Table, injecting a fixed “Publish Live/Update Website” bar, and returning the page as `text/html`.
7. Handles `POST /publish/:siteId` by creating a Hostinger subdomain via API, uploading the HTML via FTP, updating the Data Table row to “deployed” with the live URL, and returning a JSON confirmation.

## Setup
1. Add an OpenRouter API credential (or swap to your preferred LLM provider) for both the intake and builder chat model nodes.
2. Create an n8n Data Table for generated sites/versions (siteId, sessionId, businessName, subdomainSlug, html, brief_object, status, version, liveUrl) and select it in all Data Table steps.
3. Add Google Drive OAuth and Google Sheets OAuth credentials, then set the target Drive folder ID and the Google Sheets document ID/sheet name used for logging.
4. Add Hostinger credentials: an HTTP Bearer token for the Hostinger API subdomain endpoint and FTP credentials for uploading to `/public_html/<slug>/index.html`.
5. Update the hardcoded `PREVIEW_BASE` and `PUBLISH_BASE` URLs inside the code steps to match your Preview and Publish webhook production URLs, and replace the domain used to build live URLs if you are not using `dripranks.com`.

## Additional info
Read the main sticky it has complete details and setup guide.

Contact
Email: salmanmehboob1947@gmail.com
linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, FTP, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
