# 📱 Create Facebook video ads from Google Drive videos

> ⚡ **7 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule (or manually) to scan a Google Drive folder for videos, then uploads each video to Facebook Ads and creates an ad creative, ad set, and live ad via the Facebook Graph API.

## How it works
1. Runs every 6 hours on a schedule or starts on manual execution.
2. Lists video files from a specified Google Drive folder.
3. Processes the videos one at a time to avoid parallel uploads.
4. Uploads each video to Facebook Ads via the Facebook Graph API.
5. Waits 30 seconds for Facebook to finish encoding the uploaded video.
6. Creates a Facebook ad creative for the uploaded video and then creates an ad set with the configured budget and targeting.
7. Creates and activates a live Facebook ad using the new ad set and creative.

## Setup
1. Add a Google Drive OAuth2 credential and set the Drive folder ID to the folder that contains the videos you want to publish.
2. Create a Facebook Graph API access token with `ads_management` permissions and configure it as an HTTP Header Auth credential.
3. Replace placeholders with your Facebook Ad Account ID (`act_...`), Facebook Page ID, and an existing Campaign ID in the workflow’s Facebook Graph API requests.
4. Review and adjust the ad set settings (daily budget in cents, countries, age range, placements) and decide whether ads should start as `ACTIVE` or `PAUSED`.

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
