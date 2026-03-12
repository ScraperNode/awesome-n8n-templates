# 📊 Automated SEO indexing: sitemap to GSC & indexing API

> ⚡ **496 views** · 📊 [Market Research & Insights](../)

## Description

This workflow helps SEO professionals and website owners automate the tedious process of monitoring and indexing URLs. It fetches your XML sitemap, filters for recent content, checks the current indexing status via Google Search Console (GSC), and automatically submits non-indexed URLs to the Google Indexing API.

By integrating a local submission state (Static Data), it ensures that your API quota is used efficiently by preventing redundant submissions within a 7-day window.

## Key Features

**Smart Sitemap Support**: Handles both standard sitemaps and Sitemap Indexes (nested sitemaps).

**Status Check**: Uses GSC URL Inspection to verify if a page is truly missing from Google's index before taking action.

**Quota Optimization**: Filters content by lastmod date and tracks submission history to stay within Google's API limits.

**Rate Limiting**: Includes built-in batching and delays to comply with Google's API throughput requirements.

## Prerequisites

**Google Search Console API**: Enabled in your Google Cloud Console.

**Google Indexing API**: Enabled for instant indexing.

**Service Account**: You need a Service Account JSON key with "Owner" permissions in your GSC Property.

## Setup steps

**1. Configure Google Cloud Console**

Create Project: Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.

Enable APIs: Search for and enable both the Google Search Console API and the Web Search Indexing API.

Create Service Account: Navigate to APIs & Services &gt; Credentials &gt; Create Credentials &gt; Service Account. Fill in the details and click Done.

Generate Key: Select your service account &gt; Edit service account &gt; Keys &gt; Add Key &gt; Create new key &gt; JSON. Save the downloaded file securely.

**2. Set Up Credentials in n8n**

New Credential: In n8n, go to Create credentials &gt; Google Service Account API.

Input Data: Paste the Service Account Email and Private Key from your downloaded JSON file. In JSON file, Service Account Email is client_email and Private Key is private_key.

HTTP Request Setup: Enable Set up for use in HTTP Request node.

Scopes: Enter exactly: https://www.googleapis.com/auth/indexing https://www.googleapis.com/auth/webmasters.readonly into the Scopes field.

GSC Permission: Add the Service Account email to your Google Search Console property as an Owner via Settings &gt; Users and permissions &gt; Add user.

**3. Workflow Configuration**

Configuration Node: Open the Configuration node and enter your Sitemap URL and GSC Property URL. If your property type is URL prefix, the URL must end with a forward slash /. Example: https://hanthienhai.com/

Link Credentials: Update the credentials in both the GSC: Inspect URL Status and GSC: Request Indexing nodes with the service account created in Step 2.

**4. Schedule & Activate**

Set Schedule: Adjust the Schedule Trigger node to your preferred execution frequency.

Activate: Toggle the workflow to Active to start the automation.

## Questions or Need Help?

For setup assistance, customization, or workflow support, feel free to contact me at admin@hanthienhai.com

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
