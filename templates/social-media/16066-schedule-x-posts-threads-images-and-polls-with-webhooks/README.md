# 📱 Schedule X posts, threads, images and polls with webhooks

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives webhook requests from a content calendar and uses the X API v2 to publish text posts, threads, image/video posts, and polls, as well as delete existing posts and run a credential connection test, returning a consistent JSON success/error response to the caller.

## How it works
1. Receives a POST webhook request containing a request type and payload from the scheduling calendar.
2. Routes the request by `body.type` to create a single X post, publish an X thread, delete an X post, run an X credential test, or return an unknown-type error.
3. For single posts, validates the payload (including blocking invalid polls or mixed poll-plus-media), then posts either a text-only tweet, a poll tweet, or a tweet with uploaded media.
4. For media posts, uploads base64-encoded images/videos to X using INIT/APPEND/FINALIZE, polls X until processing completes when required, and then publishes the tweet with the returned `media_ids`.
5. For threads, posts the first tweet, then posts each subsequent tweet as a reply to the previous tweet ID to keep the chain intact, and returns the list of tweet IDs and URLs.
6. For delete requests and connection tests, calls X’s delete-tweet endpoint or `GET /2/users/me` and returns a structured success or error payload.
7. Responds to the webhook with a standardized JSON result including `success`, IDs/URLs when available, or an error code and message.

## Setup
1. Create an X Developer app with OAuth 2.0 user-context access and required permissions for posting and media uploads.
2. In n8n, add an OAuth2 API credential for X with scopes `tweet.read tweet.write users.read offline.access media.write` and select it on all X HTTP Request steps.
3. Activate the workflow, copy the Webhook Trigger Production URL, and configure your content calendar (for example, the included `index.html`) to send POST requests to that URL with the expected `body.type` values.

## Requirements
- x.com api app oauth2 credentials (pay as you go)

## Additional info
This workflow is tested and works with the include index.html calendar frontend ui.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
