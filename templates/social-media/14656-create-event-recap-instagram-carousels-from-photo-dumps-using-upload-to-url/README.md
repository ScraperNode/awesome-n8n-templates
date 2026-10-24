# 📱 Create event recap Instagram carousels from photo dumps using Upload to URL

> ⚡ **55 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Automate your post-event Instagram carousel using a fan-out and merge pattern. One Code node splits the photos array into individual n8n items. Every photo then flows through HTTP Fetch, Upload to URL, and a child container Code node independently. A Merge node collects all completed items, a final Code node sorts them and builds the children parameter, then the carousel is assembled and published. Upload to URL is a real visible node on the canvas, running once per photo.


---

## What This Workflow Does

### Intake and Fan-Out
- **Webhook - Receive Event Payload** -- accepts a POST to /ig-event-recap. Responds after the full workflow completes. Typically triggered by a photographer tool, event CMS, or manual call immediately after event photos are ready.
- **Code - Validate Caption and Split Photos** -- validates the photos array (2-10 items, HTTPS URLs, deduplicated), builds a multi-block storytelling caption from all event metadata, then returns one item per photo. Each item carries the photo URL, slideIndex, fullCaption, eventName, and IG credentials. This fans the downstream nodes out to process all photos in parallel.

### Per-Photo Pipeline (runs once per item)
- **HTTP - Fetch Photo Binary** -- downloads each photoUrl as a binary file. Runs once per item. Works with any public HTTPS image source.
- **Upload to URL** -- real node on the canvas, runs once per photo item. Uploads the binary and returns a stable public CDN URL. This step is mandatory because Instagram child container endpoints require a direct public HTTPS image URL and reject binary payloads.
- **Code - Create Child Container** -- calls the Instagram Graph API per item with is_carousel_item set to true. Returns childContainerId and cdnUrl alongside the slideIndex for sort ordering downstream.

### Fan-In and Carousel Assembly
- **Merge All Child Items** -- waits for all per-photo items to complete and collects them into a single execution. This is the fan-in point. Mode: Merge by Position.
- **Code - Build Children Param** -- receives all merged items, sorts by slideIndex to guarantee photo order is preserved, joins child container IDs as a comma-separated string, and re-attaches the caption and event metadata from the first item.
- **HTTP - Create Carousel Container** -- POSTs to the Instagram Graph API /media endpoint with media_type CAROUSEL, the sorted children ID string, and the caption. Caption is set only on the parent container.
- **Wait 8s** -- buffer before the publish call to allow Instagram to validate all child assets.
- **HTTP - Publish Carousel** -- calls /media_publish. Returns the live Post ID.
- **HTTP - Fetch Post Metadata** -- retrieves permalink and timestamp.

### Logging and Notification
- **Airtable - Log Published Post** -- creates a record with event name, Post ID, permalink, slide count, and publish timestamp. For client reporting and campaign tracking.
- **Slack - Notify Team** -- sends event name, slide count, permalink, and publish timestamp.
- **Respond to Webhook** -- returns a structured JSON payload with mediaId, permalink, slideCount, eventName, and publishedAt.

---

## Key Features

- **Fan-out and merge pattern** -- no Split In Batches loop. Photos are processed in parallel via item splitting, not serial iteration.
- **Upload to URL is a real canvas node** -- runs once per photo item between HTTP Fetch and Code Create Child. Fully visible and configurable in the workflow editor.
- **SlideIndex sorting** -- the final Code node sorts merged items by slideIndex before joining IDs, preserving the exact photo order from the original payload regardless of completion order.
- **Conditional caption blocks** -- every metadata field is optional. Missing fields are skipped without errors. Caption auto-truncated to 2200 characters.
- **Airtable logging** -- every published carousel is recorded for reporting without writing back to a source system.

---

## What You Will Need

### Credentials
- **Upload to URL** -- configured in n8n
- **Instagram Graph API** -- Business or Creator account access token
- **Airtable Personal Access Token** -- for the event posts log base
- **Slack OAuth2** -- for team notifications

---

## Perfect For

- **Nightlife venues and clubs** -- post the recap carousel automatically after the photographer delivers the final selects
- **Music festivals and brand activations** -- trigger from any webhook-capable CMS or content tool the moment photos are approved
- **Event photographers and agencies** -- deliver the published carousel as part of the photo handoff, not as a separate manual step
- **Corporate events teams** -- keep an Airtable log of every carousel post with full metadata for quarterly reporting

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
