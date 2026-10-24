# 📊 Vet Instagram creators for real engagement with Bright Data, GPT-5.6 and Google Sheets

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Paste a list of Instagram handles and the fee you had in mind. Bright Data pulls each profile and its recent posts, and the workflow computes engagement against the real follower count, the comment-to-like ratio bought likes cannot fake, and what each creator costs per real engagement.

## How it works
1. Receives a form submission with Instagram handles, what you sell, and an optional per-post budget.
2. Cleans and deduplicates the handles, enforces a per-run limit, and builds Bright Data requests for each creator’s profile and recent posts.
3. Triggers two Bright Data dataset snapshots (profiles and posts), then polls their progress until both complete or a timeout cap is reached.
4. Downloads the snapshot results, separates profile rows from post rows, drops co-author posts, and ensures every requested handle gets an output row even if no data returns.
5. Calculates engagement metrics and risk flags (for example engagement rate, comment-to-like ratio, engagement variation, sponsored-post share, posting recency, and cost per engagement at your budget) and compares to any prior history.
6. Uses OpenAI (GPT-5.6) to extract structured judgements from bios, captions, and comment samples, then combines those with the numeric signals to produce a final verdict and outreach angle.
7. Appends only creators marked “worth contacting” to a Google Sheets “Shortlist” tab, upserts every creator’s verdict to the n8n Data Table, and renders an HTML report back to the form submitter.

## Setup
1. Create a Bright Data API credential in n8n using HTTP Header Auth (header name `Authorization`, value `Bearer YOUR_KEY`).
2. Add an OpenAI credential and ensure the workflow can access the GPT-5.6 model configured in the chat model step.
3. Add a Google Sheets credential, create a spreadsheet with a sheet named “Shortlist”, and paste your spreadsheet URL into the workflow’s `sheet_url` setting.
4. Create an n8n Data Table named `creator_vetting` with columns `handle` (string), `followers` (number), `er_pct` (number), `verdict` (string) and `vetted_on` (string). The node will not add missing columns - an upsert against a table without them fails with "unknown column name".
5. Review and adjust the thresholds in the workflow settings (creator limit, posts to read, follower band, engagement/comment ratio floors, sponsored % cap, recency window, and max poll count) to match your niche.

## 🔗 Nodes Used

Google Sheets, HTTP Request, OpenAI Chat Model, n8n Form Trigger, Information Extractor, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
