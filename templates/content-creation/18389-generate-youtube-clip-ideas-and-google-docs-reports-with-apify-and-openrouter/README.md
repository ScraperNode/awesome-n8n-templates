# 🎬 Generate YouTube clip ideas and Google Docs reports with Apify and OpenRouter

> ⚡ **13 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a YouTube link via an n8n form, extracts the video transcript with Apify, uses an OpenRouter chat model to generate short-form clip ideas in Markdown, and creates a Google Docs file in a specified Google Drive folder.

## How it works
1. Receives a YouTube link submission through an n8n form.
2. Runs an Apify YouTube transcript extractor for the submitted URL and retrieves the resulting dataset.
3. Reformats the transcript into timestamped lines (MM:SS) to create a single analysis-ready text block.
4. Sends the formatted transcript to an OpenRouter chat model to produce a structured Markdown report of viral clip recommendations.
5. Converts the generated Markdown into HTML for document creation.
6. Uploads a new Google Docs file to Google Drive (in the specified folder) containing the HTML-formatted report.

## Setup
1. Add an Apify OAuth2 credential and ensure you have access to the YouTube transcript extractor actor used in the workflow.
2. Add an OpenRouter API credential for the chat model used to generate the clip recommendations.
3. Add a Google Drive OAuth2 credential with permission to create files, and keep the Google Drive upload endpoint accessible from your environment.
4. Replace the `[FOLDER_ID]` placeholder with your target Google Drive folder ID in the document metadata step.
5. Publish the form and share the form URL (or embed it) wherever you want users to submit YouTube links.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

HTTP Request, Markdown, AI Agent, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
