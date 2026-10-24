# 📱 Post Google News headlines to Instagram images with GPT-4o-mini, PDF API Hub and Google Sheets

> ⚡ **186 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Name

Auto-post Google News to Instagram with OpenAI, PDF API Hub & Google Sheets

## Description

Automatically fetch trending news from Google News RSS, rewrite headlines into viral captions with OpenAI, generate branded breaking-news images using PDF API Hub's HTML-to-Image API, and publish directly to Instagram — all tracked in a Google Sheet.

## How it works

- Every hour, the workflow pulls the latest articles from Google News RSS for your chosen topic
- New articles are deduplicated against a Google Sheet to avoid reposting
- OpenAI (GPT-4o-mini) rewrites the headline into a short, high-impact viral caption
- PDF API Hub converts a branded HTML template into a mobile-format breaking-news image
- The image is published to Instagram, and the Google Sheet row is updated with the image URL and marked as posted

## Set up steps

- Create a Google Sheet with a tab named `rss` and add the required column headers (~2 min). See the sticky note inside the workflow for the exact structure.
- Connect your four credentials: Google Sheets OAuth2, OpenAI API, PDF API Hub API, and Instagram API (~5 min)
- Set your news topic in the **Set Topic** node (e.g. `ai`, `crypto`, `sports`)
- Optionally customize the HTML/CSS in the **Generate News Image** node to match your brand
- Activate the workflow

## 🔗 Nodes Used

Google Sheets, RSS Read, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
