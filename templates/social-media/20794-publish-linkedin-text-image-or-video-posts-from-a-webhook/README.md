# 📱 Publish LinkedIn text, image, or video posts from a webhook

> ⚡ **2 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives a webhook request and publishes a LinkedIn post as text-only, with up to 20 images, or with a native video by downloading media from provided URLs and posting via the LinkedIn REST/UGC APIs, then returning the created post URL.

## How it works
1. Receives a POST request on a webhook containing post text plus either an array of image URLs or a single video URL.
2. Validates and normalizes the input (required text, LinkedIn author ID/person URN, and mutual exclusivity of images vs video).
3. If a video URL is provided, it registers a LinkedIn video upload, downloads the video file, uploads it to LinkedIn, and creates a public video post via the LinkedIn UGC API.
4. If one or more image URLs are provided, it registers image uploads with LinkedIn, downloads each image, uploads them to LinkedIn, and builds a single-image or multi-image post payload for the LinkedIn Posts API.
5. If no media is provided, it builds a text-only payload for the LinkedIn Posts API.
6. Creates the LinkedIn post, extracts the post URN from the response headers, and responds to the webhook with the public LinkedIn post URL or returns an error message if LinkedIn rejects the request.

## Setup
1. Create a LinkedIn app with the Share on LinkedIn product, then add a LinkedIn OAuth2 credential in n8n with the required permissions (for example, `w_member_social`) and apply it to the LinkedIn HTTP requests.
2. Set your LinkedIn person ID in the workflow’s settings step (or provide `author_id` in the webhook body) so the workflow can build the correct `urn:li:person:*` author URN.
3. Expose the webhook URL from n8n and configure your caller to POST JSON such as `{"text":"Hello","image_urls":["https://.../a.png"]}` or `{"text":"Hello","video_url":"https://.../v.mp4"}`.
4. Ensure your image/video URLs are publicly reachable by n8n so the workflow can download the files before uploading them to LinkedIn.
5. Review and update the configured LinkedIn API version header as needed to match LinkedIn’s supported monthly version.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
