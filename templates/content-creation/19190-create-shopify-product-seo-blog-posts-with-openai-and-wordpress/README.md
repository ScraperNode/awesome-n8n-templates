# 🎬 Create Shopify product SEO blog posts with OpenAI and WordPress

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This automated workflow runs weekly to fetch products from Shopify, use OpenAI to research keywords and write 1500+ word HTML SEO blog posts, publish draft articles to WordPress, log entries into Notion, send Slack team announcements, and issue real-time error alerts on execution failures.

## How it works
1. Runs weekly on a schedule trigger (or manually on demand) to fetch active products from Shopify.
2. Extracts and formats product metadata including title, price, vendor, and images using JavaScript.
3. Uses OpenAI (GPT-4o-mini) to generate a primary SEO keyword, supporting keywords, and a structured 5-section blog outline.
4. Uses OpenAI (GPT-4o) to draft a complete 1500+ word HTML-formatted article with styled headings and product calls-to-action.
5. Creates a draft post on WordPress via REST API with the article content and product title.
6. Creates a draft post on WordPress via REST API with the article content and product title.
7. On any execution error, triggers an automated Slack failure alert with error details to the dev team.

## Setup
1. Add Shopify Access Token credentials with your shop subdomain and Admin API access token.
2. Add OpenAI API credentials to power the keyword research and long-form article writer steps.
3. Add WordPress credentials (admin username and application password) and ensure REST API is accessible.
4. Add Notion credentials and select your target 'Blog Logs' database for record keeping.
5. Add Slack OAuth2 credentials and select your destination channels for announcements and error alerts.

## 🔗 Nodes Used

Slack, Wordpress, Shopify, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
