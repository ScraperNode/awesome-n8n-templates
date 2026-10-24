# 📱 Send AI-generated WordPress newsletters using OpenAI and SMTP

> ⚡ **10 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs hourly to find due newsletters in WordPress (AIS Newsletter Manager), pulls articles from Reddit, Google News, Yahoo Sports, NCAA.com, and BBC Sport, uses OpenAI to summarize content and generate a feature image, then emails a branded HTML newsletter via SMTP and marks it as sent.

## How it works
1. Runs every hour and calls your WordPress AIS Newsletter Manager `/due` endpoint to retrieve newsletters scheduled to send.
2. For each due newsletter, fetches fresh items from five sources (Reddit RSS, Google News RSS, Yahoo Sports RSS, NCAA.com RSS, and BBC Sport RSS) and normalizes them into a consistent article format.
3. Filters and randomly selects a configured number of recent articles (last 10 days) with representation across sources.
4. Uses OpenAI (chat model) to generate an intro and per-article summaries in a strict JSON structure.
5. Uses OpenAI image generation to create a feature image from the first article and uploads it to WordPress via the plugin’s media endpoint.
6. Builds a branded HTML email using the WordPress newsletter settings (colors, title, logo, and unsubscribe link), retrieves the active recipients list from WordPress, and sends the issue via SMTP in BCC batches.
7. Notifies WordPress that the newsletter is sent by posting to the plugin’s `/sent` endpoint, then continues to the next due newsletter.

## Setup
1. Install and configure the AIS Newsletter Manager WordPress plugin and ensure its REST endpoints are reachable (including `/due`, `/media`, recipients, and `/sent`).
2. Create an HTTP Header Auth credential that sends the plugin token as `X-AIS-Token` for the WordPress API requests.
3. Add an OpenAI API credential for the chat summarization and image generation steps.
4. Add an SMTP credential and set your sender/from address, `wpBaseUrl`, and BCC batch size in the workflow’s site configuration values.
5. In WordPress, create at least one newsletter with topic/branding settings and subscriber recipients so the workflow has content and a list to email.

## 🔗 Nodes Used

Send Email, HTTP Request, RSS Read, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
