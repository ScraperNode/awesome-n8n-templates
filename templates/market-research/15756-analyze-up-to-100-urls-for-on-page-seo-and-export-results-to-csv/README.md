# 📊 Analyze up to 100 URLs for on-page SEO and export results to CSV

> ⚡ **132 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Analyze up to 100 URLs in one run and export key on-page SEO data to CSV automatically.

This n8n workflow accepts URLs from chat input, fetches each page’s HTML and HTTP headers, extracts 27+ SEO elements such as title tags, meta tags, canonical, hreflang, headings, Open Graph tags, Twitter tags, meta robots, X-Robots-Tag, and status code data, then returns a downloadable CSV link when the run is complete.

## How it works

1. Submit up to 100 URLs through the chat input.
2. The workflow cleans, normalizes, validates, and deduplicates the URL list before processing begins.
3. Each URL is fetched with an HTTP Request node that captures both the HTML response and the page headers.
4. The workflow checks for failed requests, non-200 status codes, and common fetch or compliance issues before extraction continues.
5. Valid pages are parsed to extract important on-page SEO elements such as title, meta description, canonical, hreflang, OG tags, Twitter tags, headings, and robots directives.
6. The final dataset is structured into a clean CSV file and uploaded to a temporary file host so the user can download it directly from chat.

## What problem does this solve?

Manual on-page SEO audits are repetitive, slow, and hard to scale when multiple URLs need to be reviewed at once.

## Common use cases

- Bulk on-page SEO audits for landing pages, category pages, blog posts, or service pages.
- Pre-launch QA checks for staging URLs before deployment.
- Hreflang, canonical, meta robots, and X-Robots-Tag audits.
- Title tag, meta description, and heading reviews for content optimization.
- Competitor page analysis at scale.
- Indexability and crawlability checks using header and meta directives.

## Set up steps

1. Import the workflow JSON into n8n.
2. Make sure the n8n instance can send HTTP requests to external URLs.
3. Optionally adjust the URL limit, user agent, extraction fields, or output destination.
4. Run the workflow from chat by pasting a list of URLs.
5. Download the generated CSV from the link returned in chat.

## Notes

- This workflow is optimized for reliability over speed, so it processes URLs sequentially.
- A 100-URL run can take around 25 to 30 minutes depending on the server, network, and target sites.
- Pages protected by aggressive bot mitigation such as CAPTCHA, WAF rules, or anti-bot services may still block requests.
- The CSV download link is temporary because the file is uploaded to a temporary hosting service.

## 🔗 Nodes Used

HTTP Request, Convert to File, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
