# 📊 Export WordPress posts with categories and tags to Google Sheets for SEO audits

> ⚡ **128 views** · 📊 [Market Research & Insights](../)

## Description

![image.png](fileId:3040)

## Who’s it for

This workflow is perfect for content managers, **SEO specialists**, and **website owners** who want to easily analyze their **WordPress** content structure. It automatically fetches posts, categories, and tags from a **WordPress** site and exports them into a **Google Sheet** for further review or optimization.

## What it does

This automation connects to the `WordPress REST API`, collects data about posts, categories, and tags, and maps the category and tag names directly into each post. It then appends all this enriched data to a `Google Sheet` — providing a quick, clean way to audit your site’s content and taxonomy structure.

## How it works

1. Form trigger: Start the workflow by submitting a form with your website URL and the number of posts to analyze.
2. Fetch WordPress data: The workflow sends three API requests to collect posts, categories, and tags.
3. Merge data: It combines all the data into one stream using the Merge node.
4. Code transformation: A Code node replaces category and tag IDs with their actual names.
5. Google Sheets export: Posts are appended to a Google Sheet with the following columns:
	1. URL
	2. Title
	3. Categories
	4. Tags
5. Completion form: Once the list is created, you’ll get a confirmation message and a link to your sheet.

If the **WordPress API** isn’t available, the workflow automatically displays an error message to help you troubleshoot.

## Requirements

- A WordPress site with the REST API enabled (`/wp-json/wp/v2/`).
- A Google account connected to n8n with access to **Google Sheets**.
- A Google Sheet containing the columns:
**URL**, **Title**, **Categories**, **Tags**.


## How to set up

- Import this workflow into n8n.
- Connect your **Google Sheets** account under credentials.
- Make sure your **WordPress** site’s API is accessible publicly.
- Adjust the **Post limit** (`per_page`) in the form node if needed.
- Run the workflow and check your **Google Sheet** for results.

## How to customize

- Add additional **WordPress** endpoints (e.g., authors, comments) by duplicating and modifying HTTP Request nodes.
- Replace **Google Sheets** with another integration (like **Airtable** or **Notion**).
- Extend the Code node to include **SEO metadata** such as meta descriptions or featured images.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
