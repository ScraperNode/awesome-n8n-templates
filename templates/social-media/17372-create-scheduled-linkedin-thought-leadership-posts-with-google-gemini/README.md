# 📱 Create scheduled LinkedIn thought leadership posts with Google Gemini

> ⚡ **16 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 6 hours to generate a LinkedIn post idea, draft the full post and an accompanying image description with Google Gemini, create relevant hashtags, and then publishes the post content to a LinkedIn profile.

## How it works
1. Runs every 6 hours on a schedule.
2. Uses Google Gemini to generate a structured set of LinkedIn content topics with a title, rationale, and hook.
3. Uses Google Gemini to turn the first topic into a complete LinkedIn post draft and a suitable image description.
4. Uses Google Gemini to generate a structured list of SEO-friendly hashtags based on the post title and content.
5. Merges the generated post content and metadata and publishes the post text to LinkedIn (including a timestamp-based ID).

## Setup
1. Add a Google Gemini (PaLM) API credential for the Google Gemini chat model nodes.
2. Add a LinkedIn OAuth2 credential and confirm the target LinkedIn profile/person ID used for posting.
3. Review and adjust the schedule interval (currently every 6 hours) and the prompts/schemas to match your brand and desired output format.

## Requirements
- linkedin company page

## 🔗 Nodes Used

LinkedIn, Schedule Trigger, AI Agent, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
