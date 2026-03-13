# 📱 Auto-schedule Instagram & Facebook posts from Google Sheets

> ⚡ **597 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**How it works**

This workflow automatically publishes Instagram and Facebook posts using Google Sheets as a content calendar. Users add post details to a sheet, and the workflow handles scheduling, image processing, posting, and status updates without manual intervention.

**Step-by-step**

**Scheduled Trigger**
The workflow runs automatically at a fixed interval (for example, every 15 minutes) to check for posts that are ready to be published.

**Configuration & Credentials**
A configuration step stores reusable values such as spreadsheet ID, sheet name, and platform settings, keeping the workflow easy to customize and secure.

**Data Retrieval & Filtering**
Posts are read from Google Sheets and filtered to include only rows marked as “Pending” and scheduled for the current time or earlier.

**Image Handling**
If an image link is provided, the workflow downloads the image from Google Drive. If no image is present, the post continues as text-only.

**Platform Routing**
Based on the selected platform (Instagram, Facebook, or both), the workflow routes the post to the appropriate publishing path.

**Social Media Publishing**
The post is published to Instagram and/or Facebook using the connected business account credentials.

**Status Update**
After publishing, the workflow updates the original Google Sheet with the post status (Success or Failed), published timestamp, and error message if applicable.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
