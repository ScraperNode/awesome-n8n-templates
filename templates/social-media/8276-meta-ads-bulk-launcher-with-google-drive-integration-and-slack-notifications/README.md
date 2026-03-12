# 📱 Meta ads bulk launcher with Google Drive integration and Slack notifications

> ⚡ **140 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who's it for

Marketing teams, agencies, and businesses who regularly create tens or hundreds of Facebook ads and store their creative assets in Google Drive. 

Perfect for teams who want to stop doing manual work of uploading and setting up ads.

## What it does

This workflow automates the entire Facebook ad creation process from a simple form submission. 

Users provide a Google Drive link to their media file, ad copy, and target URL through a form. 

The workflow then automatically fetches the media from Google Drive, creates a new Facebook ad with proper naming conventions (matching the Drive file name), applies tracking parameters, and publishes it to the specified ad set. 

It sends Slack notifications upon successful ad creation or if errors occur.

## How it works

1. User submits a form with Google Drive media link, ad set name, ad text, and destination URL
2. Workflow authenticates and fetches the image/video from Google Drive
3. Creates a Facebook ad with the media, using the Drive filename as the ad name
4. Applies UTM tracking parameters automatically
5. Disables Facebook's automated rules to maintain manual control
6. Sends status updates via Slack (success or failure notifications)

## Requirements

- Self-hosted n8n instance
- Google Drive account with API access
- Facebook Business Manager with active ad account(s)
- Slack workspace for notifications

## How to customize the workflow

- Connect multiple Facebook ad accounts for agency use
- Modify the form fields to include additional ad parameters
- Customize Slack notification messages and channels

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Facebook Graph API, Stop and Error, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
