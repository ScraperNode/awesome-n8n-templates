# 📱 Publish AI-written LinkedIn posts with OpenAI GPT-5 mini and Canvora

> ⚡ **28 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a Tue/Thu schedule to generate a LinkedIn post with OpenAI, create a matching LinkedIn-ready image via the Canvora API, and then publish the post text plus the downloaded image to LinkedIn.

## How it works
1. Runs every Tuesday and Thursday at 9:00 AM.
2. Sets the post topic (and optional Canvora brandId) and asks OpenAI to write a single 120–180 word LinkedIn post.
3. Sends the generated post text to Canvora to create a “linkedin_post” visual concept.
4. Polls Canvora at 30-second intervals for the generation status until it completes or times out.
5. If the generation succeeds, extracts the hosted image URL from Canvora, downloads the image file, and publishes the post text with the image to LinkedIn.
6. If the generation fails or times out, stops without posting.

## Setup
1. Add an OpenAI credential and select the model you want to use for generating the LinkedIn copy.
2. Create a Canvora account and add an HTTP Header Auth credential using header name `X-API-Key` with your Canvora API key, then apply it to both Canvora HTTP Request steps.
3. Connect your LinkedIn credential (personal profile or organization) for publishing posts.
4. Edit “Set Post Parameters” to choose your topic and optionally set a Canvora `brandId` to apply a brand kit.
5. Adjust the schedule cron expression if you want a different posting cadence.

## Requirements
- A free **Canvora** account (API keys on all plans).
- An **OpenAI** API key (or Claude/Gemini).
- A **LinkedIn** account (personal or organization).

## Customization
- Change the cron in the trigger to your posting cadence.
- Swap `linkedin_post` for `linkedin_carousel` for a multi-slide post (100+ formats: GET /api/formats).
- Pass a `brandId` (GET /api/brands).
- Prefer review? Change the LinkedIn node to "create draft" or route to a Gmail draft first.

## Additional info
- Core nodes – Cloud & self-hosted. Nodes: Schedule Trigger, Set, OpenAI, Code, HTTP Request, Wait, IF, LinkedIn.
- Canvora returns hosted image URLs, so the visual attaches natively – no S3/Cloudinary step. Works inside ChatGPT, Claude & any workflow → canvora.ai/for-agents.

**Example output** (concept written by AI, designed by Canvora – real run):

![LinkedIn visual — AI concept, Canvora design](https://cdn.canvora.ai/visualdocs/generations/54855651-9edd-4155-bc54-77967217543c/linkedin-post-1-1785171443262-46ceb1a2.png)

## 🔗 Nodes Used

HTTP Request, LinkedIn, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
