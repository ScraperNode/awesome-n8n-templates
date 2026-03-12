# 📊 Detect toxic backlinks and build a disavow file with DataForSEO, Google Drive, and Gmail

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

![Detect toxic backlinks and build a disavow file in one click with DataForSEO.png](fileId:4490)

This workflow helps you quickly identify and disavow harmful backlinks without spending hours on manual exports and backlink reports.

This workflow helps you discover new SEO content opportunities by automatically identifying keyword gaps between your website and a competing domain.

On each manual run, the workflow retrieves backlink data for your selected domain or URL using the DataForSEO Backlinks API, automatically filtering backlinks based on a defined spam score threshold (default: &gt;50). As it identifies suspicious or toxic backlinks that may negatively impact your SEO, the workflow automatically formats those links into a valid Google-compliant disavow.txt file. After that, the workflow uploads the file directly to your Google Drive, generates a ready-to-download shareable link, and sends it to you via Gmail. 

The result is a fast and reliable toxic backlink audit system that helps you maintain a clean backlink profile with minimal effort.

## Who’s it for
This workflow is perfect for SEO and link-building specialists and website owners who want to automatically detect toxic backlinks, reduce SEO risks, and speed up their backlink audit.

## What it does
This workflow automatically identifies backlinks with a high spam score pointing to your domain, formats them into a Google-compliant disavow file, uploads it to Google Drive, and sends you a link to the ready-for-review file via Gmail.

## How it works
Triggers manually whenever you want to perform a spam backlink audit.

Fetches backlink data for your domain using the DataForSEO Backlinks API.

Filters backlinks by spam score above the defined threshold (default: &gt;50).

Extracts toxic backlinks pointing to your domain or URL, along with their key metrics.

Formats all suspicious links into a valid disavow.txt file in accordance with Google’s rules.

Uploads the file to your Google Drive.
Emails you the link for checking the file before uploading it to Google Search Console.

## Requirements
- DataForSEO account and API credentials 
- Google Drive integration to n8n
- Gmail integration to n8n

## Customization
You can easily customize this workflow by adjusting the spam score threshold, changing the number of backlinks analyzed, switching between domain-level and URL-level audits, exporting results to other storage tools, or scheduling it rather than using a manual trigger.

## 🔗 Nodes Used

Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
