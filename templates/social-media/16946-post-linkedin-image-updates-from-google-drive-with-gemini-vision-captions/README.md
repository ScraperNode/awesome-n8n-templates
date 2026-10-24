# 📱 Post LinkedIn image updates from Google Drive with Gemini Vision captions

> ⚡ **7 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This scheduled workflow pulls an image from Google Drive, uses Google Gemini Vision to generate an on-brand LinkedIn caption, uploads the image via LinkedIn’s asset upload API, and publishes the post to your LinkedIn profile.

## How it works
1. Runs on a schedule (every 3 days at 19:30 by default).
2. Loads your posting settings (LinkedIn person URN, CTA link, post title, and brand context) and finds the next image in a specified Google Drive folder.
3. Downloads the image from Google Drive and sends it to Google Gemini Vision to generate a LinkedIn caption using your brand context and formatting rules.
4. Initializes an image upload with the LinkedIn REST API to obtain an upload URL and image asset URN.
5. Uploads the image binary to LinkedIn using the provided upload URL.
6. Creates a LinkedIn post that combines the Gemini-generated commentary with the uploaded image asset and publishes it publicly.

## Setup
1. Connect Google Drive OAuth2 credentials and set the target folder ID in the Google Drive search step.
2. Add a Google Gemini (Gemini API) credential and ensure the selected model (for example, `models/gemini-2.5-flash`) is available to your project.
3. Connect LinkedIn OAuth2 credentials with permission to publish posts (including the `w_member_social` scope) and access to the LinkedIn REST API.
4. Update the Config values, especially `linkedinPersonUrn` (format `urn:li:person:...`), `ctaLink`, `postTitle`, and `brandContext`.
5. Adjust the schedule interval/time if you want posts to publish more or less frequently.

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
