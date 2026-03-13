# 📱 Automate LinkedIn content creation with OpenAI, Notion, and Google Slides

> ⚡ **274 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

What it is
An automated LinkedIn content system that takes a simple form (idea + optional file), generates LinkedIn posts with OpenAI, stores them in Notion, builds Google Slides carousels, and auto-publishes posts (text, image, or document) to LinkedIn on a schedule while keeping Notion in sync.

Setup steps

1. Connect integrations: link your Notion database, LinkedIn account, Google Drive/Slides, OpenAI, and Gmail in n8n.

2. Configure the form: set up the “LinkedIn Post Generator” form with the idea field and optional file upload.

3. Map AI outputs: wire the OpenAI nodes so they write post title, funnel stage, and content into your Notion “LinkedIn Auto Posts” database.

4. Enable carousel flow: connect Notion → OpenAI → Google Slides template → Google Drive copy → Notion update for “Create Carousel” items.

5. Set scheduling: use the Schedule Trigger + Notion filters (“Ready for Post” + Scheduled Date) to pick which posts go out each hour.

6. Publish & track: send posts to LinkedIn (text, image, or document), then update Notion status to “Posted” and, if needed, send yourself an email reminder for manual carousel actions.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, LinkedIn, Google Slides, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
