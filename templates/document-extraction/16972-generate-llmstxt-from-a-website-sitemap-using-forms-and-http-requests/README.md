# 🔬 Generate llms.txt from a website sitemap using forms and HTTP requests

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow uses an n8n Form and HTTP requests to read a website sitemap, fetch each listed page, extract the page title and meta description, and generate an llms.txt file that you can preview, copy, or download.

## How it works
1. Receives a form submission with the site name, site description, sitemap URL, and a maximum page limit.
2. Fetches the sitemap XML and, if it is a sitemap index, extracts the child sitemap URLs.
3. Fetches each leaf sitemap and extracts, deduplicates, and caps page URLs while grouping them into sections based on the first URL path segment.
4. Requests each page’s HTML content and continues even if some pages fail to load.
5. Extracts the HTML title and meta description (or falls back to a title derived from the URL), then compiles the results into a sectioned llms.txt markdown file.
6. Renders a completion page that displays the generated llms.txt content and provides Copy and Download actions.

## Setup
1. Copy the n8n Form URL from the Form Trigger node and open it in your browser (or use the test form in the editor).
2. Submit your site name, sitemap URL, and optionally a site description and max pages value.
3. Upload the downloaded or copied llms.txt file to your website root so it is available at https://yourdomain.com/llms.txt.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
