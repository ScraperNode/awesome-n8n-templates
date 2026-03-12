# 🎬 Generate AI SEO blog posts with human review using SE Ranking and Claude

> ⚡ **84 views** · 🎬 [Content Creation & Video](../)

## Description

![Zrzut ekranu 20260216 o 10.17.18.png](fileId:4411)

# Generate AI blog posts with human review using SE Ranking and Claude

## Who is this for
- Content teams scaling blog production with AI
- SEO agencies creating client content at scale
- Marketing teams with editorial calendars

## What this workflow does
Find high-opportunity keywords, generate AI content briefs and draft articles, then send everything to a human reviewer before anything gets published.

## What you'll get
- Keyword opportunities scored by volume, difficulty, and ranking potential
- AI-generated content briefs with outlines and related keywords
- Full draft articles written by Claude based on the briefs
![Zrzut ekranu 20260213 o 14.44.55.png](fileId:4410)
![Zrzut ekranu 20260213 o 14.48.29.png](fileId:4409)
- Email-based human review with one-click approve/reject
![Zrzut ekranu 20260213 o 15.24.22.png](fileId:4408)
- Everything tracked in Google Sheets

## How it works
1. Pulls keyword opportunities for your domain from SE Ranking
2. Scores and filters the best targets by volume and difficulty
3. Grabs related keywords and "People Also Ask" questions
4. AI creates a detailed content brief for each keyword
5. AI writes a full draft article based on the brief
6. Sends a review email with approve/reject buttons
7. Updates Google Sheets with the decision
8. Approved articles are split and ready for publishing

## Requirements
- Self-hosted n8n instance
- SE Ranking community node v1.3.5+ ([Install from npm](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking))
- SE Ranking API token ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- Anthropic API key (for Claude)
- SMTP credentials for review emails
- Google Sheets account (optional)

## Setup
1. Install the [SE Ranking community node](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking, Anthropic, and SMTP credentials
3. Update the Configuration node with your domain, brand, and reviewer email
4. Connect Google Sheets for tracking (optional)

## Customization
- Change `min_volume` and `max_difficulty` to adjust keyword targeting
- Edit `articles_per_run` to generate more or fewer articles per batch
- Swap Claude models in the AI nodes for different quality/cost tradeoffs

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
