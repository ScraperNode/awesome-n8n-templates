# 📊 Audit website GDPR privacy compliance with HTTP checks and HTML reports

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually audits a website’s GDPR signals by scraping the homepage and attempting to locate and analyze its privacy policy, then generates an HTML report with a site compliance score, detected trackers, cookie-consent findings, and policy-quality grading.

## How it works
1. Starts when you manually run the workflow.
2. Uses the provided website URL to fetch the site’s homepage HTML via HTTP.
3. Scans the homepage HTML to detect common tracking scripts (Google Tag Manager, Meta Pixel, Hotjar), looks for cookie-consent banner signals, and identifies a privacy-policy link or builds fallback policy URL candidates.
4. Fetches each candidate privacy-policy URL via HTTP and selects the first page that looks like a real privacy policy (not a soft 404 and with sufficient policy-related text).
5. Computes a site-level GDPR score based on the presence of a privacy policy, cookie consent signals, and whether trackers appear to load without consent.
6. If a readable policy page is found, grades the policy text against GDPR-related criteria (controller/contact details, purposes, lawful basis/consent, data-subject rights, international transfers, security/retention, and overall transparency).
7. Renders a branded HTML audit report containing the scores, identified gaps, and policy-quality section as the final output.

## Setup
1. Enter the target URL (including https://) in the workflow’s input field for `website_url`.
2. Ensure the audited site is publicly accessible so n8n can fetch the homepage and candidate privacy-policy pages over HTTP.
3. (Optional) Customize the HTML report branding and wording in the report template before running the workflow.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
