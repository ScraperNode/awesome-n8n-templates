# 🎣 Enrich and verify partnership leads from Google Sheets with Apollo and Instantly

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every weekday and processes a batch of organisations from Google Sheets, optionally classifying them with Anthropic, finding contacts via Apollo, and verifying emails via MillionVerifier. It writes outcomes back to Google Sheets and can push verified, high-scoring leads into an Instantly campaign.

## How it works
1. Runs every weekday at 07:00 (or manually) and loads configuration values that control batching, scoring, verification, and sending mode.
2. Reads the raw Organisations tab in Google Sheets, selects a deduplicated batch of “ready” organisations, and exits early with a clear message if there is nothing to process.
3. Normalizes each organisation’s name/domain and assigns a category using keyword rules, optionally calling Anthropic to classify only the unclassified organisations.
4. Finds up to the configured number of decision-maker contacts per organisation using the Apollo API, or falls back to contact details already present in Google Sheets when Apollo isn’t configured.
5. Scores each contact against the configured ICP rules and verifies each email address with MillionVerifier when verification is enabled, holding back unverified or risky addresses by default.
6. Writes organisation enrichment results and all discovered contacts (including held-back reasons) to the Organisations and Contacts tabs in Google Sheets.
7. If sending is enabled and safe contacts exist, pushes them into the appropriate Instantly campaign, marks successfully accepted leads as “pushed” in Google Sheets, and posts a run summary to a Slack incoming webhook when configured.

## Setup
1. Add a Google Sheets OAuth credential and set the spreadsheet ID plus the Organisations/Contacts tab names and column headers in the config block.
2. (Optional) Add an Apollo API key in config to enable contact discovery, or ensure your raw sheet includes Contact name/title/email columns for the fallback path.
3. (Optional) Add a MillionVerifier API key (or another verifier compatible with the status mapping) and review ACCEPT_STATUSES/RISKY_STATUSES plus HOLD_UNVERIFIED in config.
4. (Optional) Add an Anthropic API key in config to enable AI-based category classification for organisations that keyword rules can’t place.
5. (Optional) Add an Instantly API key and campaign ID (and any per-category campaign mapping) and switch from preview to test/live mode via TEST_RUN and TEST_CAMPAIGN_ID.
6. (Optional) Add a Slack incoming webhook URL in config to receive the per-run summary.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
