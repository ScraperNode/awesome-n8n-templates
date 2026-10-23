# 🎬 Repurpose long-form content into Instagram and LinkedIn posts with OpenAI and Teams

> ⚡ **334 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

Content creators, solopreneurs, and marketing teams who produce long-form content (podcasts, newsletters, interviews, scripts) and want to automatically turn it into multiple social media assets -- Instagram carousels, LinkedIn carousels, LinkedIn text posts, and LinkedIn media posts -- with human-in-the-loop approval via Microsoft Teams.

## What this workflow does

This workflow takes a long-form content file sent via email, extracts strategic content pillars using AI, then fans out into four parallel branches -- each producing a different social media format. Every draft is reviewed and approved in Microsoft Teams before images are generated, assets are saved to Google Drive, and posts are published via Blotato.

## How it works

1. **Email trigger** -- A Gmail Trigger watches for emails with a specific subject line (e.g. "Content Repurposing"). The email contains a text attachment (podcast transcript, newsletter, etc.) and optionally a link to the original content.
2. **File extraction & storage** -- The attachment is extracted, saved as a Google Doc in a timestamped project subfolder on Google Drive, and the source URL is parsed from the email body.
3. **AI content strategist** -- The Repurpose Strategist agent (OpenAI) analyzes the full text and extracts 5 strategic content pillars, each with a hook headline, core insight, virality factor, and relevant quote. Results are logged in Google Sheets.
4. **Four parallel content branches** -- The 5 pillars feed into four specialized AI agents that each produce a different format:
   - **Instagram/YouTube carousel** -- 5 punchy one-liners (max 25 words each) + a social media caption
   - **LinkedIn carousel** -- 5 slide texts with hooks + a companion caption, plus a styled PDF carousel via HTML-to-PDF
   - **LinkedIn text post** -- A single strong LinkedIn post (max 100 words)
   - **LinkedIn media post** -- A post with a guiding statement rendered as an image
5. **Human review loop** -- Each branch sends its draft to Microsoft Teams for approval via a custom form (approve/reject with feedback). If rejected, feedback is routed back to the AI agent for targeted revisions.
6. **Asset generation & storage** -- On approval, carousel images are generated via APITemplate.io, all assets (images, post texts, PDFs) are saved to organized Google Drive subfolders, and results are logged back to Google Sheets.
7. **Publishing** -- Approved posts are published to Instagram and LinkedIn via Blotato, with status monitoring and Teams notifications on success or failure.

## Setup steps

1. **Gmail** -- Create OAuth2 credentials. The trigger watches for emails with "Content Repurposing" in the subject. You can customize this filter.
2. **Google Drive & Docs** -- Create OAuth2 credentials. Set the target folder ID in the Google Drive Trigger node where project subfolders will be created.
3. **Google Sheets** -- Create a spreadsheet to serve as the content tracker. It will store pillars, carousel texts, post texts, and metadata. Update the Sheet ID in all Google Sheets nodes.
4. **OpenAI** -- Add your API key. Used by 5 AI agents (strategist + 4 content specialists).
5. **Microsoft Teams** -- Create OAuth2 credentials. Set the Teams chat ID in the 4 review nodes to route drafts to your approval channel.
6. **APITemplate.io** -- Create an account and design carousel slide templates. Set the template ID in the image generation nodes.
7. **Blotato** -- Connect your Instagram and LinkedIn accounts. Add the Blotato API credential and update account IDs in the publishing nodes.
8. **HTML-to-PDF** -- Install the community node `n8n-nodes-htmlcsstopdf` (self-hosted only). Customize the carousel slide HTML/CSS template with your branding (logo, colors, profile photo).

## Requirements

- **Community nodes:**
  - [`@blotato/n8n-nodes-blotato`](https://www.npmjs.com/package/@blotato/n8n-nodes-blotato)
  - [`n8n-nodes-htmlcsstopdf`](https://www.npmjs.com/package/n8n-nodes-htmlcsstopdf)
- **Self-hosted n8n only** (due to community nodes)
- Gmail OAuth2 credentials
- Google Drive, Docs & Sheets OAuth2 credentials
- OpenAI API key
- Microsoft Teams OAuth2 credentials
- APITemplate.io account and template
- Blotato account with connected Instagram and LinkedIn profiles

## How to customize

- **AI prompts** -- Each of the 5 AI agents has a detailed system prompt you can adjust for tone, word count, language, or output structure.
- **Carousel design** -- Edit the HTML/CSS in the "HTML to PDF" node to match your brand (colors, fonts, logo, profile photo). Update the APITemplate.io template IDs for Instagram-style slides.
- **Platforms** -- Add or remove publishing branches. Currently supports Instagram (via Blotato) and LinkedIn (text post, carousel, media post).
- **Review channel** -- Change the Teams chat ID to route to different teams or channels.
- **Trigger** -- Swap Gmail for another trigger (e.g. Google Drive, webhook, or manual) depending on your content intake workflow.
- **Feedback loop** -- Each branch supports unlimited revision cycles. The AI applies feedback minimally without rewriting from scratch.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Microsoft Teams, APITemplate.io

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
