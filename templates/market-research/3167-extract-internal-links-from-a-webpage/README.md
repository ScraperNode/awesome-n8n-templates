# 📊 Extract internal links from a webpage

> ⚡ **5,666 views** · 📊 [Market Research & Insights](../)

## Description

[![changelog](https://xqus.relezy.com/extract-internal-links-from-webpage/badge.svg)](https://xqus.relezy.com/extract-internal-links-from-webpage)

### Who Is This For?
- Web developers
- SEO specialists
- Digital marketers

### What Problem Is This Workflow Solving?
- Automates the extraction of internal links from a webpage
- Eliminates the manual and error-prone process of collecting links
- Facilitates analysis of website structure and optimization

### What This Workflow Does
- Uses HTTP request node to fetch HTML content from a specified webpage
- Parses the HTML to identify and extract internal links
- Compiles a list of URLs directing to pages within the same domain

### Setup
1. Configure the `Set Base URL` node:
   - Set the `url` field to the URL you want to analyze.

### How to Customize This Workflow to Your Needs
- Change the target URL in the `Set Base URL` node to analyze different webpages.
- Add nodes to:
  - Filter or categorize the extracted links
  - Export the list to a database or CSV
  - Send links via email or integrate with other tools

This workflow can be used as a base for workflows to manage the process of extracting internal links, aiding in website optimization and SEO efforts.

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
