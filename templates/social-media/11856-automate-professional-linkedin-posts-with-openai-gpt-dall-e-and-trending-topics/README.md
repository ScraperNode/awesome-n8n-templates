# 📱 Automate professional LinkedIn posts with OpenAI GPT, DALL-E and trending topics

> ⚡ **535 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overall Description

This workflow fully automates the process of creating and publishing professional LinkedIn posts based on real-world experience in AI automation and workflow engineering, enriched with latest industry insights from the internet, and paired with a relevant high-quality image

#### The workflow ensures:

- Content relevance to AI automation, backend/frontend systems, IT
- Professional, human-friendly post tone
- Image validation before posting
- Post validation before publishing
- Automatic success/failure email alerts

## Worflow Logic

1. Trigger workflow (daily, weekly, custom date)
2. Define posting context (based on your expertise)
3. Fetch latest AI/automation trends (you can change based on your interested trends)
4. Filter insights relevant to your field
5. Generate linkedin ready post using AI Agent (OpenAI API)
6. Generate image from Open AI Image model related to the post
7. Validate image and text quality
8. Merge approved text and image
9. Convert content into LinkedIn format
10. Publish post on LinkedIn
11. Send email notification on success or failure

## Setup Instructions
#### Credentials

- OpenAI API Key – For text generation.
- LinkedIn API Token – For publishing posts.
- Image Generation API – DALL-E, Pollinations, or MidJourney.
- Gmail / SMTP – For notifications.
- Optional APIs: SERP API for trending topics.

## 🔗 Nodes Used

Send Email, HTTP Request, LinkedIn, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
