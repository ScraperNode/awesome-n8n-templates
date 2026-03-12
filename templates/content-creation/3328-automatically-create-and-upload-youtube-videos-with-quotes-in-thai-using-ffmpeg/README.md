# 🎬 Automatically create and upload YouTube videos with quotes in Thai using FFmpeg

> ⚡ **15,662 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
This workflow is perfect for digital content creators, marketers, and social media managers who regularly create engaging short-form videos featuring inspirational or motivational quotes. While the workflow is universally applicable, it specifically highlights Thai as an example to demonstrate effective language and font integration.

## What problem is this workflow solving?
Creating consistent and engaging multilingual video content manually, including attractive fonts and proper video formatting, is time-consuming and repetitive. Additionally, managing files, background music, and updating statuses manually can be tedious and prone to errors.

## What this workflow does
- Automatically fetches background video and music files stored on Google Drive.

- Randomly selects a quote (demonstrated with Thai language) and author information from Google Sheets.

- Dynamically combines the selected quote and author text using appealing fonts, such as the Thai font "Kanit," directly onto the video using FFmpeg on your n8n local environment.

- Creates visually engaging videos with a 9:16 aspect ratio, optimized for YouTube Shorts and other vertical video platforms.

- Automatically uploads the finalized video to YouTube.

- Updates the status and YouTube URL back into your Google Sheet, ensuring you have up-to-date records.

## Setup
### Requirements:
This workflow requires a **self-hosted n8n instance**, as the execution of FFmpeg commands is not supported on n8n Cloud. Ensure FFmpeg is installed on your self-hosted environment.

### Google Sheets Setup:
Your Google Sheet must include at least these columns:

- Index: (Unique identifier for each quote)
- Quote: (Text of the quote)
- Author: (Author of the quote)
- CreateStatus: (Track video creation status; values like 'DONE' or blank for pending)
- YoutubeURL: (Automatically updated after upload)

To help you get started quickly, you can use [this template spreadsheet](https://docs.google.com/spreadsheets/d/184-zcrfWSzQpDa-t57Oo_8DLyAF-2B_6yvGrybrcd5I/edit?usp=sharing).

### Next steps:

1. Organize your video and music files in separate folders in Google Drive.
2. Authenticate your Google Sheets, Google Drive, and YouTube accounts in n8n.
3. Ensure fonts compatible with your target languages (such as Kanit for Thai) are available in your FFmpeg installation.

## How to customize this workflow to your needs

- **Fonts:** Adjust font styles and sizes within the workflow's code node. Ensure the fonts you choose fully support the language you wish to use.

- **Quote Management:** Easily add or remove quotes and authors in your Google Sheets document.

- **Media Files:** Change or update background videos and music by modifying the files in your Google Drive folders.

- **Video Specifications:** Customize video dimensions, text positioning, opacity, and music volume directly in the provided FFmpeg commands.

## Benefits of Using Localized Fonts and Quotes

Utilizing fonts specific to your target language, as demonstrated with Thai, significantly increases audience engagement by making your content more relatable, shareable, and visually appealing. Ensure you select fonts that properly support the language you're targeting.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
