# 🎬 Automate Instagram stories publishing from Google Sheets with Meta Graph API

> ⚡ **1,243 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated Instagram Stories from Google Sheets

## 🚀 What it Does

This workflow **automates posting Instagram Stories** directly from a list of video URLs in a Google Sheet. Simply add a video link to the sheet, and this template will schedule and post it for you. It's designed to be a "set it and forget it" solution for your content strategy.

**Key Features:**

  * **Fully Automated:** Runs on a schedule to post new content without manual intervention.
  * **Simple Content Management:** Manage your entire video queue from one Google Sheet.
  * **Smart & Safe:** Automatically avoids posting duplicate content by tracking what has already been published.
  * **Randomized Posting:** Shuffles the video list to ensure varied content is posted, not just the first one on the list.

-----

## 📋 Pre-Setup Requirements

Before you start, you'll need a few things. This is the most important part of the setup\!

1.  **Instagram Business Account:** A personal account won't work. It must be a Business or Creator account.
2.  **Facebook Page:** Your Instagram Business Account must be connected to a Facebook Page.
3.  **Meta Developer Account:** This is required to create an "App" that gives n8n permission to post on your behalf.
4.  **A Publicly Accessible Place to Host Videos:** This is critical. The video URLs you use must be direct links to the video file.
      * ✅ **Good Sources:** Shopify file storage, Amazon S3, a WordPress site with a valid SSL certificate (`https://...`).
      * ❌ **Unreliable Sources:** Google Drive and Dropbox share links **will not work** because they are not direct links to the video file itself.

-----

## ⚙️ Step-by-Step Setup Guide

Follow these three parts carefully. Once done, you won't have to touch the configuration again.

### Part 1: Meta (Facebook/Instagram) Configuration

This section generates the keys and IDs you need to allow n8n to communicate with Instagram.

1.  **Create a Meta App:**

      * Go to [Meta for Developers](https://developers.facebook.com/) and create a new app.
      * **Detailed Guide:** [Meta's Official Guide to Creating an App](https://developers.facebook.com/docs/development/create-an-app/)

2.  **Configure App Permissions:**

      * In your new app's dashboard, add the "**Instagram Graph API**" product.
      * Under "Permissions," you will need to grant `instagram_basic`, `instagram_content_publish`, `pages_show_list`, and `pages_read_engagement`.

3.  **Find Your Instagram Business Account ID:**

      * You'll need this ID for the workflow.
3.1. **Log in:** to your Instagram account.  
3.2. **Click on your Profile:** in the menu on the left.  
3.3. **Click:** "Edit Profile" at the top.  
3.4. Under the **"Settings"** heading, click **"See more in Accounts Center"**.  
3.5. **Select:** your intended Instagram profile.  
3.6. In the URL, your Instagram Business Account ID will be displayed after `/profiles` in a numerical format.  

   **Example:**  
   `https://accountscenter.instagram.com/profiles/[YOUR_ID]/?theme=dark`


4.  **Generate a Long-Lived Access Token:**

      * An access token is like a password for n8n to use. A standard one expires quickly, so you need a long-lived one.
      * **Official Guide:** [Meta's Guide to Generating a Long-Lived Token](https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/)

-----

### Part 2: Google Sheet Preparation

This is where you'll manage your video content.

1.  **Create a Google Sheet:** You can make a new one or use our template to get started quickly.
      * **Download Template:** [Instagram Videos Template.xlsx](https://imanetworks.ch/wp-content/uploads/2025/09/Instagram-Videos-Template.xlsx)
2.  **Set Up Columns:** Your sheet **must** have these two columns with these exact names:
      * `source_url`: This is where you will paste the direct URL to your video file.
      * `posted_story`: Leave this column **empty**. The workflow will automatically fill it with `true` after a video is successfully posted.
3.  **Get the Sheet ID:** In your Google Sheet URL, copy the long string of letters and numbers from the middle:
    `https://docs.google.com/spreadsheets/d/`**`[THIS_IS_THE_SHEET_ID]`**`/edit`

-----

### Part 3: n8n Workflow Configuration

Now, let's connect everything inside your n8n workflow.

1.  **Fill the `⚙️ Configuration Hub` Node:**

      * **IG\_BUSINESS\_ID:** Paste the Instagram ID you found in Part 1.
      * **SHEET\_DOC\_ID:** Paste the Google Sheet ID you found in Part 2.
      * **SHEET\_TAB\_NAME:** Enter the exact name of the tab in your Google Sheet (e.g., "Instagram Videos").

2.  **Connect Your Credentials:**

      * **Google Sheets:** In the `📊 Fetch Videos from Sheet` node, create a new credential and connect your Google Account.
      * **Facebook Graph API:** In the `📤 Create Story Container` node, create a new credential. Use the **App ID**, **App Secret**, and the **Long-Lived Access Token** you generated in Part 1. You will use this same credential for the other Facebook/Instagram nodes.

3.  **Activate the Workflow:**

      * First, test it by clicking the "Execute Workflow" button on the `🚀 Manual Start` node.
      * Once you confirm it works, **activate the workflow** using the toggle at the top of the screen. The `⏰ Auto Schedule` node is set to run daily by default, but you can change the time to whatever you like.

-----

## 🤔 Troubleshooting

  * **Error: "(\#10) This endpoint requires the 'instagram\_content\_publish' permission"**: Your Meta App is missing the correct permissions. Go back to the app settings in the Meta Developer dashboard and add it.
  * **Error: "Unsupported post request" or Video Processing Fails**: This is almost always an issue with the video URL. Ensure it's a **direct link** and not from a service like Google Drive. Paste the URL into your browser—it should immediately start playing the video, not take you to a preview page.
  * **Error: "Sheet not found"**: Double-check that your `SHEET_DOC_ID` and `SHEET_TAB_NAME` in the Config node are perfectly correct (it's case-sensitive\!).
  * **Workflow runs but doesn't post**: Make sure you have rows in your Google Sheet where the `posted_story` column is empty. If all are marked `true`, it has nothing new to post.

@iMan https://imanetworks.ch/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
