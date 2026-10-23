# ⚙️ Monitor WordPress broken links weekly and send alerts via Telegram

> ⚡ **16 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs weekly to scan a WordPress site’s post sitemap for broken pages, checking each URL’s HTTP status and sending a consolidated alert to Telegram when errors are found.

## How it works
1. Runs weekly on a schedule trigger.
2. Requests the WordPress sitemap index at `/wp-sitemap.xml` and then fetches the posts sitemap at `/post-sitemap.xml`.
3. Parses the posts sitemap XML and extracts each post URL.
4. Sends an HTTP request to each URL and captures the full response status without failing the workflow on errors.
5. Flags URLs as broken when the HTTP status code is 400 or higher and prepares a record with the URL, status code, status message, and check timestamp.
6. Aggregates all broken-link records into a single list and sends a formatted Telegram message to the configured chat ID with the results.

## Setup
1. Set the `websiteUrl` value to your WordPress site base URL (for example, `https://yourdomain.com`).
2. Add Telegram credentials in n8n and replace `telegramChatId` with the destination Telegram chat ID.
3. Ensure your WordPress site exposes the default sitemaps at `/wp-sitemap.xml` and `/post-sitemap.xml`, or update the sitemap URLs in the HTTP requests to match your setup.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
