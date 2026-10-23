# 🎬 Batch transcribe Google Drive videos to text files with Gemini

> ⚡ **227 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for

This workflow is designed for creators, researchers, and operators who need to transcribe large volumes of video content stored in Google Drive. It is especially useful for users working with TikTok archives, interview recordings, or social media datasets where manual transcription would be time-consuming and expensive.

## How it works / What it does

This workflow automatically processes videos from a designated Google Drive folder, transcribes each file using Google Gemini, and saves the results as individual text files.

Each video is handled independently:

- Videos are pulled from an “Incoming” folder
- The file is downloaded and sent to Gemini for transcription
- A .txt transcript file is created in a separate folder
- The original video is moved to a “Processed” folder after success

This structure ensures progress is saved continuously, allowing the workflow to resume where it left off if interrupted.

## How to set up
- Create three Google Drive folders:
  - Incoming (source videos)
  - Processed (completed videos)
  - Transcripts (output files)
- Add your folder IDs to the Config node
- Connect your Google Drive and Gemini credentials
- Run the workflow using the Manual Trigger (or Schedule Trigger for automation)

##  Requirements
- n8n instance (cloud or self-hosted)
- Google Drive API credentials
- Google Gemini API access
- Video files stored in Google Drive

## How to customize the workflow
- Adjust the transcription prompt in the Config node for different output styles
- Modify the Wait node to control processing speed and avoid rate limits
- Change file naming conventions in the formatting node
- Add logging or notifications for failed transcriptions
- Extend the workflow to combine transcripts into a single master document

## 🔗 Nodes Used

Google Drive, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
