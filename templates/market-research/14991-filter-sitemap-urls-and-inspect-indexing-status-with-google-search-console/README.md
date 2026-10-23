# 📊 Filter sitemap URLs and inspect indexing status with Google Search Console

> ⚡ **213 views** · 📊 [Market Research & Insights](../)

## Description

This workflow provides a data-driven approach to SEO by automating the indexing process. Instead of bulk-submitting every URL, it intelligently filters your sitemap for recent updates and verifies their status via Google Search Console before using your Indexing API quota.

## Goal & Purpose

The primary goal is to maintain a healthy search presence without wasting API resources. It identifies pages that are either new or recently modified but haven't been fully crawled or indexed by Google yet. By targeting only "Neutral" status pages, you ensure that Googlebot focuses its attention where it matters most.

## Prerequisites

To use this workflow, you need a Google Cloud Project with the following configured:

* **APIs Enabled:** Google Search Console API and Web Search Indexing API.
* **Credentials:** A Service Account JSON key added to your n8n credentials.
* **Verification:** The Service Account email must be added as an **Owner** in Google Search Console for your domain.
* **Sitemap:** A standard XML sitemap (e.g., `https://example.com/sitemap.xml`).

## Recommendations

* **Quota Management:** The Indexing API has a default limit (often 200/day). This workflow helps stay under that limit by being selective.
* **Domain Format:** Ensure your siteUrl in the Inspection node matches your GSC property type (Domain vs. URL Prefix).
* **Crawling Speed:** Note that while this notifies Google, actual crawl time depends on Google's internal scheduling.

**Detailed Guide & Logic:** [Read the full playbook here](https://n8nplaybook.com/post/2026/04/smart-google-indexing-api-n8n-workflow/)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
