# 📱 Publish Instagram carousel posts from product collections with Slack notification

> ⚡ **80 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Automate your entire Instagram carousel publishing pipeline from a single webhook call. This workflow receives a product collection payload, loops through each slide image, uploads every asset via Upload to URL to generate stable public CDN URLs, creates individual Instagram child media containers per slide, assembles them into a parent CAROUSEL container, and publishes the post. Built for product drops, lookbooks, and multi-item announcements.

---

## What This Workflow Does

### Intake and Validation
- **Webhook - Receive Payload** -- accepts a POST request with your full collection data including slide array, caption copy, hashtags, and product details. Configured to respond inline once the full workflow completes.
- **Code - Validate Payload** -- enforces Instagram's carousel constraints before touching any API. Checks that slides is an array of 2 to 10 items, every imageUrl is a publicly accessible HTTPS URL, and required environment variables are present. Automatically trims to 10 slides if the array exceeds the Instagram maximum. Fails fast with a descriptive error message.
- **Code - Build Caption** -- assembles a structured, swipe-optimized caption: hook line, main copy block, numbered product list with optional prices, CTA line, and hashtag block. Safely truncated to Instagram's 2200 character limit.

### Per-Slide Loop via Split In Batches
- **Split In Batches** -- loops over the slides array one item at a time using batchSize 1. The loop branch feeds into image processing; the done branch feeds into carousel assembly once all slides are processed.
- **HTTP - Fetch Slide Image** -- downloads each slide imageUrl as a binary file using n8n's file response format. Works with any publicly accessible image CDN.
- **Upload to URL** -- mandatory CDN bridge. Instagram's child container endpoint requires a direct public HTTPS image URL per slide. It rejects binary payloads and base64 strings. This node uploads each image binary and returns a stable public URL. Runs once per slide inside the loop.
- **Code - Create Child Container** -- calls the Instagram Graph API to create an individual child media container per slide with is_carousel_item set to true. Returns the child container ID for aggregation.

### Carousel Assembly and Publishing
- **Code - Aggregate Child IDs** -- collects all child container IDs produced across loop iterations using $input.all(). Joins them as a comma-separated string for the carousel parent API call. Re-attaches the caption and metadata from the earlier Code node via cross-node reference.
- **HTTP - Create Carousel Container** -- POSTs to the Instagram Graph API /media endpoint with media_type CAROUSEL and the full children ID string. Caption is set only on the parent container, not on individual children.
- **Wait 8s** -- processing buffer before the publish call. Slightly longer than single-image posts to account for Instagram validating multiple child assets.
- **HTTP - Publish Carousel** -- calls /media_publish with the carousel container ID. Returns the live Instagram Post ID.
- **HTTP - Fetch Post Metadata** -- retrieves the permalink, timestamp, and media_type for the published post so the response payload contains the direct Instagram URL.

### Notification and Response
- **Slack - Notify Team** -- sends collection name, slide count, permalink, and publish timestamp to your configured Slack channel.
- **Respond to Webhook** -- returns a structured JSON success payload with mediaId, permalink, slideCount, collectionName, and publishedAt timestamp.

---

## Key Features

- **True per-slide loop architecture** -- uses Split In Batches wired back on itself so each image is fetched, uploaded, and registered as a child container independently. No single monolithic Code node handling all slides at once.
- **Upload to URL runs inside the loop** -- each slide binary is uploaded to a CDN before its child container is created. This is the correct sequence the Instagram API requires.
- **Fail-fast validation** -- the validation node checks every constraint before any API call is made. Bad payloads are rejected immediately with actionable error messages.
- **Caption auto-truncation** -- the caption builder hard-truncates at 2200 characters so Instagram never rejects the post body regardless of how long the product list is.
- **Permalink in response** -- the workflow fetches the live post metadata after publishing so the webhook response and Slack notification both include the direct Instagram post URL.

---

## What You Will Need

### Credentials
- **Upload to URL** -- configured in n8n, used once per slide inside the loop
- **Instagram Graph API** -- Business or Creator account access token
- **Slack OAuth2** -- for team notifications


---

## Perfect For

- **E-commerce brands** -- product collection drops and new arrival announcements with per-item pricing in the caption
- **Fashion and apparel** -- lookbook carousels where each slide is a separate outfit or piece
- **Agencies** -- managing carousel publishing for multiple clients via a single webhook endpoint with different payloads
- **SaaS and digital products** -- feature showcase carousels triggered from a CMS or internal tool
- **Content teams** -- any workflow where carousel content is generated programmatically and needs to be published without manual intervention

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
