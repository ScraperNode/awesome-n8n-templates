# 📱 Send a weekly legal tech AI digest with GPT-4o-mini, Gemini, WordPress and Outlook

> ⚡ **17 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs on a weekly schedule, collects legal-tech articles from Reddit, Hacker News, and Google News RSS, summarizes them with OpenAI, generates images with Google Gemini, uploads images to WordPress, and emails a branded HTML digest to a subscriber list stored in Microsoft Excel via Outlook.

## How it works
1. Runs on a weekly schedule trigger.
2. Fetches recent items from Reddit (r/legaltech RSS), Hacker News (hnrss.org query RSS), and Google News (RSS search) and normalizes them into a consistent article schema.
3. Merges all sources, deduplicates by link, filters out articles older than 60 days, and randomly selects seven items with at least two from each source.
4. Uses OpenAI (gpt-4o-mini) to generate a newsletter intro and structured JSON summaries with a “why it matters” note for each selected article.
5. Builds image prompts for the first two articles, generates images with the Google Gemini community node, and uploads the images to the WordPress media library to obtain public image URLs.
6. Renders a responsive HTML newsletter by attaching the uploaded image URLs to the summarized articles.
7. Reads subscriber rows from a Microsoft Excel table and sends the HTML newsletter to each email address using Microsoft Outlook.

## Setup
1. Add an OpenAI API credential with access to the gpt-4o-mini model.
2. Install and configure the `@n8n/n8n-nodes-langchain.googleGemini` community node (self-hosted n8n) and add a Google PaLM/Gemini API credential for image generation.
3. Add a WordPress HTTP Basic Auth credential and confirm the WordPress site URL for uploading media to `/wp-json/wp/v2/media`.
4. Add Microsoft Excel OAuth2 credentials and update the workbook, worksheet, and table references to your subscriber list (including an `Email` column).
5. Add Microsoft Outlook OAuth2 credentials and set the sender mailbox allowed to send to your subscriber list.

## Requirements
- **OpenAI** — GPT-4o-mini for summarization.
- **Google Gemini API** — image generation.
- **WordPress** — image hosting.
- **Microsoft Excel / SharePoint** — subscriber list source.
- **Microsoft Outlook** (OAuth2) — sending.

## Customization
- Add/remove news sources in the parallel-fetch branch (update Normalize accordingly).
- Adjust the per-source minimum (currently 2 articles per source) in the selection logic.
- Restyle the newsletter's HTML/branding as needed.
- Swap Gemini for another image provider if desired.

## 🔗 Nodes Used

HTTP Request, RSS Read, Microsoft Excel 365, Microsoft Outlook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
