# 📊 Extract & process specific links from sitemap.xml

> ⚡ **3,316 views** · 📊 [Market Research & Insights](../)

## Description

## Description
This workflow reads a `sitemap.xml` file, extracts all URLs, and allows you to filter out specific types of links—such as PDF files, images, or any other content—based on your needs.

## Who Is This For?
- **SEO Specialists** looking to analyze specific URLs in their sitemap.
- **Developers** who need to extract links for automated processing.
- **Content Managers** filtering out downloadable assets like PDFs or images.

## How It Works
1. **Fetch `sitemap.xml`** – The workflow reads the sitemap file from a given URL.
2. **Extract URLs** – Parses all the URLs listed in the sitemap.
3. **Filter URLs** – Use a simple filter to extract only the links you need (e.g., *.pdf).
3. **Export or Process** – The filtered list can be sent via email, stored in a database, or used in another workflow.

## Customization
1. Edit the **Set sitemap URL** block and edit the `sitemapUrl` value to the sitemap you want to fetch.
2. Edit the **Filter URLs** block and edit the filter conditions to meet your needs.

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
