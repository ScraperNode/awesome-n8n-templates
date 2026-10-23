# 📱 Post text and images to X using a simple form trigger

> ⚡ **192 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow uses an n8n Form trigger and the X (Twitter) API to publish a text-only post or a post with a single uploaded image, then returns a success/error payload including the resulting tweet URL.

## How it works
1. Receives a form submission with required post text and an optional image upload.
2. Validates and normalizes the input, enforcing supported image types (JPG/PNG/WEBP/GIF) and size limits.
3. If no image is provided, creates a post on X via the X API v2 `POST /2/tweets` endpoint.
4. If an image is provided, uploads the media to X via `POST /2/media/upload`, extracts the returned media ID, and creates the post with that media attached via `POST /2/tweets`.
5. Returns a success response with the tweet ID and tweet URL, or a structured error message when X returns an API error.

## Setup
1. Create an X OAuth2 API credential with user-context scopes `tweet.read tweet.write users.read offline.access media.write` and apply it to all X HTTP requests in the workflow.
2. Copy the public URL of the n8n form path `x-content-scheduler-free` and use it to open the “Post to X” form for publishing.
3. (Optional) Run the manual connection test that calls `GET /2/users/me` to confirm the credential is connected to the correct X account.

## Requirements
- x.com api app oauth2 credentials (pay as you go)

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
