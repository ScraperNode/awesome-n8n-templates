# 📱 Create Facebook ad sets and ads from Google Sheets rows

> ⚡ **56 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow watches a Google Sheets queue and, when a row is flagged, uses the Meta (Facebook) Graph API to create an ad set, upload an image from a URL, build an ad creative, and create a paused ad, then writes the result or errors back to the sheet.

## How it works
1. Polls Google Sheets every 5 minutes and triggers when a row is updated.
2. Checks whether the updated row has the “Generate Ad” column set to "generate" and skips anything else.
3. Reads the row’s Hooks and Render URL and combines them with your preset Meta Ads configuration (account, campaign, budget, targeting, CTA, and status).
4. Creates a Meta (Facebook) ad set in the specified ad account under the configured campaign.
5. Uploads the ad image to Meta from the provided Render URL and uses the returned image hash to create an ad creative for the configured Facebook Page and destination URL.
6. Creates a Meta (Facebook) ad in the new ad set using the creative and sets its status (default PAUSED).
7. Updates the originating Google Sheets row with the created Ad ID on success, or writes an error message if any Meta API step fails.

## Setup
1. Connect Google Sheets OAuth credentials and select the spreadsheet and sheet in the trigger and both Google Sheets update steps.
2. Add a Meta (Facebook) Graph API credential with ads_management permission and select it on all Meta Graph API steps.
3. In the configuration values, set your Meta Ad Account ID (act_…), Facebook Page ID, and an existing Campaign ID, and optionally a Pixel ID and conversion event type.
4. Ensure your Google Sheet includes columns for at least Hooks, Render URL, and Generate Ad, plus fields to store the resulting Ad ID and any Error Message.
5. Set your default targeting, budget (in cents), destination URL, CTA type, and ad status (keep PAUSED until you are ready to run ads).

## Additional info
# Generate Facebook ad sets and ads from Google Sheets rows
# 📥 [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-Facebook-ad-sets-and-ads-from-Google-Sheets-rows-3a03d6550fd981ca954febe5dd9e7c49)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
