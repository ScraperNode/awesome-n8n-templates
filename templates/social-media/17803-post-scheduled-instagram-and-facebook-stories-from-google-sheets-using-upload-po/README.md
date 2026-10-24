# 📱 Post scheduled Instagram and Facebook Stories from Google Sheets using Upload Post

> ⚡ **70 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily on a schedule, reads “Ready” story entries from Google Sheets, publishes them as Instagram and Facebook Stories via Upload Post API, and appends an execution log (including upload timestamps or failures) to a History sheet.

## How it works
1. Runs every day at the configured time using a schedule trigger.
2. Reads rows from a Google Sheets “Story” tab where the day-of-week flag is true and the Status is set to Ready.
3. Adds a workflow execution timestamp to each story item for logging.
4. Routes each item based on its Type (Image or Video) and uploads it as an Instagram Story and Facebook Story using Upload Post API.
5. Splits the uploader response into individual results and checks whether each upload succeeded.
6. Writes a row to the Google Sheets “History” tab with the story ID, media URL, platform, execution time, and either the upload timestamp (on success) or “Not Uploaded” (on failure/unknown type).

## Setup
1. Connect Google Sheets OAuth credentials and select the target spreadsheet, including a “Story” sheet for the queue and a “History” sheet for logging.
2. Connect your Upload Post API credentials (upload-post.com) and ensure your Instagram account and Facebook Page are linked in Upload Post.
3. Update the Upload Post settings such as the Facebook Page ID, target platforms (Instagram/Facebook), and ensure each Story row contains a publicly accessible media Url plus Type values of exactly “Image” or “Video.”

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
