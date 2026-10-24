# ⚙️ Block noindex SEO regressions in deploy pipelines with webhook and Slack

> ⚡ **5 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow exposes a POST webhook your deployment pipeline calls to run an SEO smoke test against key URLs, robots.txt, and the sitemap, then posts results to Slack and returns HTTP 500 to block the deploy on critical indexing issues.

## How it works
1. Receives a POST webhook request (optionally containing a list of URLs and a deploy label) to start the smoke test.
2. Builds the final URL list (or falls back to the default list), derives the site origin, and constructs the robots.txt and sitemap URLs.
3. Fetches each page URL without following redirects and evaluates status codes, X-Robots-Tag headers, robots meta tags, canonical links, and basic HTML quality signals.
4. Fetches and parses robots.txt to detect site-wide blocking rules like `Disallow: /` and URL-path disallows that affect the checked pages.
5. Fetches and inspects the sitemap to warn when the sitemap is missing, unreachable, an index sitemap, or does not include the checked URLs.
6. Aggregates failures and warnings, posts either a “deploy blocked” or “deploy went out with warnings” message to Slack, and responds to the webhook with HTTP 500 on blockers or HTTP 200 otherwise.

## Setup
1. Publish the workflow and configure your CI/CD pipeline to POST to the production webhook URL (for example: `{ "urls": ["https://example.com/"], "label": "deploy abc123" }`).
2. Add a Slack credential in n8n and set the target channel name in the workflow settings (the `slack_channel` value).
3. Update the default URL list, sitemap URL (optional), and thresholds like `max_urls` and `min_html_bytes` in the Settings values to match your site.
4. Ensure your pipeline treats HTTP 500 as a failure (for example, using `curl --fail`) so a blocking result stops the release.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
