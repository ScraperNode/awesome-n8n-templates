# 📱 Auto-publish social videos to 9 platforms via Google Sheets and Blotato

> ⚡ **12,256 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Workflow Screenshot](https://www.dr-firas.com/auto-post-rs.png)

# Auto-Publish Social Videos to 9 Platforms via Google Sheets and Blotato

## Who is this workflow for?

This workflow is ideal for marketers, content creators, virtual assistants, and automation specialists managing multi-platform video content. It’s especially useful for teams who want to centralize publishing via a spreadsheet and automate social distribution in one shot.

## What problem does this workflow solve?

Manually posting videos to multiple social platforms is tedious and time-consuming. This workflow allows you to streamline video distribution using **Blotato’s API** — no more switching between platforms or re-uploading the same video multiple times.

## What this workflow does

This automation reads video metadata (URL, caption, title) from a **Google Sheet**, uploads the video to Blotato, and automatically publishes it to **Instagram, YouTube, TikTok, Facebook, LinkedIn, Threads, Twitter (X), Pinterest, and Bluesky**.

It also updates the sheet to reflect the publishing status (`STATUS = DONE`), ensuring that your data remains clean and trackable.

## Setup

1. **Set up your Google Sheet** with the required columns: `PROMPT`, `DESCRIPTION`, `URL VIDEO`, `Titre`, `row_number`, and `STATUS`.
2. Add your **Blotato API key** in the headers of the `Upload Video` and `Post to X` nodes.
3. Replace the platform-specific IDs in the `Assign Social Media IDs` node (Instagram ID, Facebook Page ID, etc.).
4. Set the schedule in the `Schedule Trigger` node to define when the publishing happens.

&gt; ⚠️ **Disclaimer:** This workflow uses Community Nodes. These are only available on self-hosted n8n instances.


## How to customize this workflow

- Add logic to skip rows already marked as `DONE`.
- Expand to more platforms supported by Blotato.
- Use a webhook or Telegram trigger instead of the scheduler for more interactivity.
- Modify content per platform if needed (caption formatting, hashtags, etc.).

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Workflow-n8n-d-Auto-Post-sur-les-r-seaux-sociaux-1d33d6550fd980b7b43ac417e9a06a9b?pvs=4)

## Demo Video

🎥 Watch the full tutorial here: [YouTube Demo](https://youtu.be/ChcyNE1kw8Q)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
