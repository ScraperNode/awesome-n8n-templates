# 📊 Audit website SEO with a multi-agent Anthropic Claude spider

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow crawls a website from a provided start URL, extracts on-page SEO signals from each page, and sends them to six Anthropic Claude agents for scoring and issue detection, then returns a JSON report with page-level diagnoses plus site-wide averages, recurring issues, and worst pages.

## How it works
1. Receives a POST request via an n8n webhook (or runs manually) containing the start URL and crawl limits, then initializes the crawl queue and configuration.
2. Loops through the crawl queue until it is empty or the max page limit is reached, applying a configurable delay between requests.
3. Fetches each page’s HTML with an HTTP request and parses key SEO signals such as title, meta description, canonical, robots meta, headings, JSON-LD presence, word count, image alt coverage, and internal/external links.
4. Updates the crawl state by marking the current URL as visited and enqueuing newly discovered internal links that are within the maximum crawl depth.
5. Sends the parsed page signals to six Anthropic Claude analyses (technical, intent, entity/topic, internal linking, content quality, and architecture) and collects their JSON responses.
6. Combines the agent outputs into a single page diagnosis with an overall score and severity-sorted issues, then continues the loop for the next queued URL.
7. When crawling finishes, aggregates all page diagnoses into a site-wide report and returns the full report as JSON in the webhook response.

## Setup
1. Create an Anthropic API credential using HTTP Header Auth and ensure the workflow’s Anthropic requests include your API key.
2. Update the crawl and scoring parameters (maxPages, maxDepth, crawlDelaySeconds, thinContentWordThreshold, title/meta length targets, and userAgent) to match your needs.
3. For webhook runs, copy the production webhook URL from the webhook trigger and configure your client to POST a JSON body like {"startUrl":"https://example.com","maxPages":20,"maxDepth":2}.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
