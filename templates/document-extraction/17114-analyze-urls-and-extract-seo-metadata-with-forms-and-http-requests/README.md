# 🔬 Analyze URLs and extract SEO metadata with forms and HTTP requests

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a URL via an n8n Form, follows HTTP redirects to the final destination, extracts page and Open Graph/Twitter metadata from the final HTML, and displays the results back in a form response using only built-in n8n nodes.

## How it works
1. Receives a URL submission from the n8n Form trigger.
2. Normalizes the input so it includes an http/https scheme.
3. Requests the URL with redirect-following disabled to capture the HTTP status and Location header.
4. If the response is a redirect (301/302/307/308), tracks visited URLs and redirect count, detects loops or exceeding the redirect limit, and either continues to the next Location URL or shows a redirect/loop error.
5. If the response is 200 OK, parses the HTML to extract the title, meta description, canonical URL, language, Open Graph tags, Twitter Card tags, and common tracking parameters.
6. Displays the extracted metadata and final URL in a results form, then redirects back to the input form page.

## Setup
1. Activate the workflow so the n8n Form trigger has a Production URL.
2. Copy the Form trigger Production URL and paste it into the Set URL value to replace REPLACE_WITH_PRODUCTION_FORM_URL so the completion step redirects back to the input form.
3. If needed, adjust the maximum redirect limit (currently 10) to fit your use case.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
