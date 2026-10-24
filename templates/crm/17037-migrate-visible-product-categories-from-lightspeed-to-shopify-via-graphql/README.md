# 🤝 Migrate visible product categories from Lightspeed to Shopify via GraphQL

> ⚡ **9 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs manually to migrate visible category data from Lightspeed to Shopify by creating Shopify collections via the Admin GraphQL API, adding URL redirects from old category paths, and publishing the new collections to all Shopify publication channels.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Fetches all publication channels from your Shopify store using the Shopify Admin GraphQL API.
3. Retrieves up to 250 categories from the Lightspeed API and splits the response into one item per category.
4. Filters the list to only categories marked as visible in Lightspeed.
5. For each visible category, creates a Shopify collection with title, handle, description, SEO fields, and an optional image.
6. Creates a Shopify URL redirect from the original Lightspeed category URL path to the new Shopify /collections/{handle} URL.
7. Publishes the created collection to all fetched Shopify publication channels and stops with an error if any Shopify mutation returns userErrors.

## Setup
1. Add a Shopify Admin API access token as an HTTP Header Auth credential (header name `X-Shopify-Access-Token`) and assign it to the Shopify GraphQL requests.
2. Add your Lightspeed API key and secret as an HTTP Basic Auth credential and assign it to the Lightspeed categories request.
3. Update the Shopify store URL, API version, and Lightspeed API base URL in the workflow’s configuration values before running.
4. Ensure your Lightspeed categories include the fields used for mapping (title, content/description, url/handle, SEO metadata, and optional image URL) and adjust the mappings if your API responses differ.

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
