# 📊 Track Facebook page engagement with Facebook Graph API and Google Sheets

> ⚡ **65 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually or daily to pull your Facebook Page’s most recent posts, calculate per-post likes, comments, and shares via the Facebook Graph API, and append or update each post’s engagement metrics in a Google Sheets spreadsheet.

## How it works
1. Runs manually or on an optional daily schedule.
2. Reads configuration values (Graph API version, number of posts to check, and delay between posts) and fetches Facebook Page details.
3. Retrieves the Page feed and splits the response into individual posts.
4. For each post, fetches comment totals, reaction totals, and share counts from the Facebook Graph API.
5. Combines the three engagement metrics into a single record per post (including the post ID and message).
6. Appends or updates the corresponding row in Google Sheets and waits briefly before processing the next post to reduce rate-limit risk.

## Setup
1. Add a Facebook Graph API credential in n8n with a Page access token that can read the Page feed and engagement.
2. Add a Google Sheets OAuth2 credential.
3. In the Google Sheets step, select the target spreadsheet and sheet tab, and ensure it has columns for post ID, post text, likes, comments, and shares.
4. Update the Configuration values (max posts, Graph API version, and pause duration) to match your needs and API limits.
5. If using scheduled tracking, enable the schedule trigger and set the run time for your timezone.

## Additional info
# Track Facebook page engagement to Google Sheets
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Track-Facebook-page-engagement-to-Google-Sheets-3a03d6550fd98157b27bf6177ca7a660)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
