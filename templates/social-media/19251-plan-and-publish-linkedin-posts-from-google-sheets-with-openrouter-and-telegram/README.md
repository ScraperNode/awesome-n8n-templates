# 📱 Plan and publish LinkedIn posts from Google Sheets with OpenRouter and Telegram

> ⚡ **12 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Publish LinkedIn posts on autopilot. This workflow runs daily at 09:00, reads your Google Sheets content calendar, drafts post copy with OpenRouter, generates a black-and-white image with OpenAI, and publishes to LinkedIn while keeping your manager in the loop over Telegram.

*Last updated: September 2026.*

## Quick Overview
This workflow runs daily to publish scheduled LinkedIn posts from a Google Sheets content calendar, drafting copy with OpenRouter and generating an image with OpenAI before publishing via upload-post, while sending approval requests, failure alerts, and a daily digest to Telegram.

## How it works
1. Runs every day at 09:00 (cron) and reads rows from a Google Sheets post calendar.
2. Filters the sheet for rows that are Approved, scheduled for today, and not already Published, and processes each due post one at a time.
3. Loads brand guidelines from a separate Google Sheets tab and uses OpenRouter (with a fallback model) to draft LinkedIn post copy in a structured JSON format.
4. Uses OpenAI to generate a black-and-white post image based on the drafted copy, uploads it to imgbb, and then hosts the photo for LinkedIn using the upload-post API.
5. Publishes the post to LinkedIn via upload-post, marking the row as Published in Google Sheets on success.
6. If publishing returns an error, sends an admin alert to Telegram and updates the Google Sheets row status to Error.
7. Sends Telegram messages to request manager review for rows marked pending_review and posts a daily Telegram digest with the number of published posts.

## Setup
1. Connect credentials for Google Sheets, OpenRouter, OpenAI, Telegram, imgbb (HTTP query auth), upload-post, and SMTP email.
2. Update the Google Sheets document and sheet/tab URLs for both the post calendar and the brand guide to point to your own spreadsheets.
3. Ensure your calendar sheet includes columns like id, Date Scheduled (dd/MM/yyyy), Topic, and Status, and use Status values Approved, pending_review, Published, and Error.
4. Set the environment variables MANAGER_TELEGRAM_CHAT_ID, ADMIN_TELEGRAM_CHAT_ID, and ALERT_EMAIL used by the Telegram and email alert steps.
5. Verify the upload-post request parameters (user, visibility, and LinkedIn platform) and the imgbb upload settings match your accounts and desired publishing behavior.

### Quick Answers
**When does the workflow publish posts?**
Every day at 09:00 it reads the calendar and publishes rows that are Approved, scheduled for today, and not already Published.

**How does manager approval work?**
Rows marked pending_review trigger a Telegram message asking the manager to review before publishing.

**What happens if publishing fails?**
An admin alert is sent to Telegram and the Google Sheets row status is updated to Error.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Telegram, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
