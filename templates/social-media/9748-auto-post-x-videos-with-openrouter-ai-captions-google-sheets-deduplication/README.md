# 📱 Auto-post X videos with OpenRouter AI captions & Google Sheets deduplication

> ⚡ **173 views** · 📱 [Social Media & Email Marketing](../)

## Description

Who’s it for

Marketers, creators, and social managers who want hands-off reposting of a specific X (Twitter) user’s videos — with on-brand AI captions and clean, deduplicated logs.

What it does / How it works

On a schedule, the workflow resolves a target user, fetches recent tweets with media, filters to video posts, and writes them to Google Sheets for tracking and dedupe. It then builds a shareable video URL, generates a short caption via an AI model (OpenRouter), posts to your X account, and updates the sheet with completion status. Sticky notes inside the workflow explain each step, setup tasks, and best practices.

How to set up

Add credentials: Twitter (X) OAuth2, Google Sheets OAuth2, OpenRouter.

Replace the demo Google Sheet with your own (document ID & sheet name).

Set the target X username (or parameterize it).

Adjust the schedule (interval/cron) and run a test execution.

Verify logs and posting format, then enable.

Requirements

Twitter (X) OAuth2 credential

Google Sheets OAuth2 credential

OpenRouter credential (choose an affordable model)

How to customize

Edit the caption prompt (tone, hashtags count, CTAs, compliance lines).

Add filters (language, min/max tweet age, exclude replies/retweets, since_id).

Extend logging (timestamps, posted text, account, errors).

Introduce a dry-run boolean to skip posting while testing.

Swap the caption model or add retry rules for robustness.

Security: Don’t hardcode tokens in HTTP nodes. Use n8n Credentials only and remove personal IDs before publishing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, X (Formerly Twitter), Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
