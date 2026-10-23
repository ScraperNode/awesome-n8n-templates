# 📱 Auto-generate Instagram posts from Google Sheets reviews using UploadtoUrl

> ⚡ **92 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Turn your best 5-star reviews into a daily stream of branded social proof content -- fully automated. This workflow pulls the oldest unposted 5-star review from Google Sheets, generates a custom quote card using the hcti.io HTML-to-image API, uploads it via Upload to URL to get a stable public CDN link, and publishes it directly to Instagram with a formatted caption. The source row is updated to prevent duplicate posts and the team is notified on Slack.

---

## What This Workflow Does

### Review Dispatch Automation
- **Schedule Trigger** -- fires daily at 9 AM. Adjust the cron expression for any cadence (twice weekly, every other day, etc.)
- **Google Sheets -- Fetch Review** -- reads the Reviews sheet filtering for Rating = 5 and Posted = FALSE, sorted by Submitted At ascending for FIFO queue dispatch. Fetches exactly one row per run.
- **IF -- Has Valid Review** -- exits the workflow cleanly on the false branch if no unposted reviews remain. No errors, no failed executions.

### Dynamic Quote Card Generation
- **Code -- Prepare Fields** -- cleans the raw sheet row: truncates review text to card-safe length, formats the star rating as a count, builds the full Instagram caption with attribution line and hashtag block (max 2200 characters).
- **Set -- Assemble HTML Card** -- constructs a 1080x1080px HTML/CSS quote card template using n8n expressions that reference prepared text fields and env var brand colors. HTML is built in a Set node rather than a Code node to avoid Web Application Firewall false positives on template submission.
- **HTTP -- hcti.io** -- sends the HTML string to the hcti.io API (HTML/CSS to Image) which renders it as a PNG and returns an image URL. Free tier covers 100 renders per month.

### CDN Bridge via Upload to URL
- **Upload to URL** -- mandatory step. Instagram Graph API requires a direct public HTTPS image URL and rejects binary payloads and base64 strings. This node downloads the rendered PNG from hcti.io and re-uploads it to a CDN, returning a stable public URL Instagram can access.
- **Code -- Merge Fields** -- combines the CDN URL from Upload to URL with the caption and review metadata from the earlier Code node using cross-node reference.

### Instagram Two-Step Publish Flow
- **HTTP -- IG Create Media Container** -- Step 1 of Instagram publishing. POSTs the CDN image URL and caption to /v19.0/{ig_user_id}/media. Returns a container_id that Instagram uses to stage and validate the image.
- **Wait 6s** -- processing buffer to ensure Instagram completes async validation before the publish call.
- **HTTP -- IG Publish Container** -- Step 2. Calls /media_publish with the container_id. Returns the live Instagram Post ID confirming the post is on the feed.

### Logging and Notification
- **Google Sheets -- Mark as Posted** -- updates the source row: sets Posted = TRUE and writes back the Post ID and timestamp. Prevents the same review from being picked up on the next scheduled run.
- **Slack -- Notify Team** -- sends reviewer name, a 100-character review snippet, the Post ID, and the CDN card URL so the team can verify what went live.

---

## Key Features

- **Queue-based dispatch** -- reviews post in submission order (FIFO). Oldest unposted 5-star review goes first on every run, keeping the feed chronologically authentic.
- **WAF-safe card assembly** -- the HTML quote card is built in a Set node using n8n expressions rather than as a raw string in a Code node. This avoids Cloudflare WAF false positives during template submission.
- **Mandatory CDN bridge** -- Upload to URL is a required step, not optional. Instagram's API will reject any image that is not a direct public HTTPS URL, including hcti.io's own image URLs in some configurations.
- **Duplicate-safe** -- the Google Sheets update node writes Posted = TRUE immediately after publish. The same review can never be re-queued.
- **Source-agnostic** -- works with Google Reviews, Trustpilot, Capterra, or any form tool (Typeform, Tally, Jotform) that appends rows to a Google Sheet.
- **Fully customizable card design** -- background color, text color, and accent color are all controlled by environment variables. No code changes needed to rebrand.

---

## What You Will Need

### Credentials
- **Google Sheets OAuth2** -- connected to your Reviews spreadsheet
- **hcti.io Basic Auth** -- user ID and API key from hcti.io (free tier available at hcti.io)
- **Upload to URL** -- credentials configured in n8n
- **Instagram Graph API** -- Business or Creator account access token
- **Slack OAuth2** -- for team notifications


### Google Sheets Columns Required

Reviewer Name -- Review Text -- Rating -- Source -- Posted -- Submitted At -- Instagram Post ID -- Posted At -- Card Image URL

---

## Perfect For

- **SaaS companies** -- automate a daily customer love post from your existing review pipeline
- **E-commerce brands** -- convert 5-star product reviews into social proof content on a consistent schedule
- **Hospitality and restaurants** -- publish verified guest reviews from Google or Tripadvisor automatically
- **Agencies** -- run one instance per client by swapping env vars, with a separate Google Sheet per brand
- **Retail and service brands** -- keep Instagram active with authentic customer voices without any manual effort

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
