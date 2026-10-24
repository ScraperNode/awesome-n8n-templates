# 🔒 Triage software risk using NVD, EPSS, CISA KEV, GitHub and Claude

> ⚡ **7 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives software vetting requests via a webhook, gathers vulnerability and supply-chain evidence from NVD, EPSS, CISA KEV (via NVD), Google News RSS, SEC EDGAR, GitHub, OpenSSF Scorecard, OSV, and deps.dev, then uses Anthropic Claude to draft a risk report, emails it via Microsoft Outlook, and logs results in an n8n Data Table.

## How it works
1. Receives a POST webhook request with software/vendor details and normalizes the intake fields into a tracking record with initial risk flags and a tier label.
2. Immediately returns a JSON acknowledgement to the requester with the tracking ID and intake risk tier.
3. Searches the NVD CVE API for keyword-matched CVEs for the product, extracts the highest-signal CVE details, and (when CVEs exist) looks up EPSS probabilities for those CVEs.
4. Queries NVD again using the hasKev filter to identify any CVEs in the CISA Known Exploited Vulnerabilities catalog that match the product keyword.
5. Collects additional external signals by pulling breach-related items from Google News RSS and searching SEC EDGAR for vendor cybersecurity disclosures.
6. If a GitHub repository is provided, fetches GitHub repository metadata and OpenSSF Scorecard results, and if an OSS package is provided, queries OSV and deps.dev for package vulnerability and version signals.
7. Compiles all evidence into a weighted risk score, sends the evidence package to Anthropic Claude to generate a markdown assessment, formats an HTML report, emails it to an analyst via Microsoft Outlook, and upserts a tracking row into an n8n Data Table.

## Setup
1. Configure the webhook endpoint path (software-vetting-intake) and copy the production webhook URL into your intake form or source system that submits vetting requests.
2. Add an Anthropic credential for the Claude node and verify the selected model ID is available in your Anthropic account.
3. Add Microsoft Outlook credentials and update the recipient email address used to deliver the generated HTML report.
4. Ensure outbound HTTP access to NVD, EPSS (FIRST.org), Google News RSS, SEC EDGAR, GitHub API, OpenSSF Scorecard API, OSV, and deps.dev, and update any required User-Agent headers to match your organization.
5. Create or select an n8n Data Table and update the Data Table ID used for the upsert so the workflow can log each trackingId and report metadata.

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook, Anthropic, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
