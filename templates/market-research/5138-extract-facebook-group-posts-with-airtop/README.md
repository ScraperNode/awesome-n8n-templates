# 📊 Extract Facebook group posts with Airtop

> ⚡ **2,215 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Extract Facebook Group Posts with Airtop

## Use Case

Extracting content from Facebook Groups allows community managers, marketers, and researchers to gather insights, monitor discussions, and collect engagement metrics efficiently. This automation streamlines the process of retrieving non-sponsored post data from group feeds.

## What This Automation Does

This automation extracts key post details from a Facebook Group feed using the following input parameters:

* **Facebook Group URL**: The URL of the Facebook Group feed you want to scrape.
* **Airtop Profile**: The name of your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated to Facebook.

It returns up to 5 non-sponsored posts with the following attributes for each:

* Post text
* Post URL
* Page/profile URL
* Timestamp
* Number of likes
* Number of shares
* Number of comments
* Page or profile details
* Post thumbnail

## How It Works

1. **Form Trigger**: Collects the Facebook Group URL and Airtop Profile via a form.
2. **Browser Automation**:

   * Initiates a new browser session using Airtop.
   * Navigates to the provided Facebook Group feed.
   * Uses an AI prompt to extract post data, including interaction metrics and profile information.
3. **Structured Output**: The results are returned in a defined JSON schema, ready for downstream use.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys) — Free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) logged into Facebook.


## Next Steps

* **Integrate With Analytics Tools**: Feed the output into dashboards or analytics platforms to monitor community engagement.
* **Automate Alerts**: Trigger notifications for posts matching certain criteria (e.g., high engagement, keywords).
* **Combine With Comment Automation**: Extend this to reply to posts or engage with users using other Airtop automations.

Let me know if you’d like this saved as a `.md` file or included in your Airtop automation library.

Read more about how to [extract posts from Facebook groups](https://www.airtop.ai/automations/extract-facebook-groups-posts-n8n)

## 🔗 Nodes Used

n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
