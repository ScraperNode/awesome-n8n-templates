# 📱 Automated Instagram reels workflow

> ⚡ **19,001 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow automates the process of creating and posting Instagram Reels, combining Google Drive, AI, Airtable, and the Facebook Graph API. It supports two content creation paths:

1. Scheduled Random Video Selection & Posting

Selects a random video from a Google Drive folder named "Random video mover" based on a schedule.

Moves the video to a processing folder for posting.

2. Manual Upload Trigger & Posting

Watches a specific Google Drive folder ("n8n reels automation on instagram").

Triggers the workflow when a new video is uploaded.

Core Process (applies to both paths)

Download Video from Google Drive.

AI Caption Generation with Google Gemini, using the file name as context. The AI creates concise captions with hashtags and a call-to-action.

Airtable Logging to store video name, caption, and URL.

Instagram Reels Posting via the Facebook Graph API.

Recent Change
In early 2025, Meta tightened its requirements for video_url and image_url parameters. URLs must now be direct, public links to the raw media file with no redirects or authentication. Google Drive links no longer work.

Our Fix

Store the binary file locally on the n8n server at /tmp/video.mp4.

Serve the file through a public n8n webhook with the correct Content-Type.

Use the webhook URL in the Facebook Graph API request.

Upload succeeds without the “Media download has failed” error.

Cleanup

Deletes the temporary file after posting.

Benefits

Saves time with full automation.

Improves engagement through AI-generated captions.

Keeps content organized in Airtable.

Works with Meta’s updated API requirements by hosting files directly from the n8n server.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Google Drive, Facebook Graph API, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
