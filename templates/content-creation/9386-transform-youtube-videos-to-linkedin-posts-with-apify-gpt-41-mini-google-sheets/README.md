# 🎬 Transform YouTube videos to LinkedIn posts with Apify, GPT-4.1 Mini & Google Sheets

> ⚡ **132 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Transform YouTube videos to LinkedIn posts via Apify, GPT-4.1 Mini, and Google Sheets
![youtube to linkedin icon.png](fileId:2820)

This workflow transforms new YouTube videos from any channel into high-quality, ready-to-publish LinkedIn posts and saves them directly to a Google Sheet, creating a powerful, automated content repurposing engine.

## Workflow Preview

![workflow.png](fileId:2821)

## Who’s it for
This template is perfect for content creators, social media managers, and marketing teams who want to save time and consistently repurpose video content for their professional audience on LinkedIn.

## What it does
This automation monitors a specific YouTube channel for new video uploads. When a new video is detected, it automatically extracts the full transcript. The transcript is then sent to an advanced AI model (GPT-4o or similar) which acts as a "thought leader" to generate two distinct, insightful LinkedIn posts based on the video's core themes. Finally, these generated posts are neatly organized and saved as new rows in a Google Sheet for easy review and scheduling.

## How to set up
1.  **Set the Trigger:** In the "RSS Feed Trigger" node, enter the RSS Feed URL for the YouTube channel you want to monitor. You can find this by searching the channel's page source for its `channel_id` and using the format: `https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_ID_HERE`.
2.  **Connect Credentials:** Add your API credentials for Apify and OpenAI in their respective nodes.
3. **Configure Google Sheets:**
First prepare your spreadsheet by opening Google Sheets and creating a new sheet. In the first row, create the following headers **exactly** as they appear below:
* `Video Link`
* `Theme`
* `Hook`
* `Body`
* `CTA`
* `Hashtags`
Now in the n8n Google Sheets node, authenticate your account. Then select the spreadsheet you just prepared and the specific sheet name from the dropdown lists.
4.  **Activate:** Save the workflow and toggle it to "Active".

### How to Find a YouTube Channel ID
To monitor a specific channel, you need its unique ID to create the RSS feed URL required in the first step. Here’s how to find it:
1.  Navigate to the main page of the YouTube channel you want to follow (e.g., `https://www.youtube.com/@CalebWritesCode`).
2.  Right-click anywhere on the page and select **"View Page Source"** from the menu.
3.  A new browser tab will open with the website's code. Press `Ctrl+F` (on Windows) or `Cmd+F` (on Mac) to open the search bar.
4.  In the search bar, type `&lt;yt:channelId&gt;` and press Enter.
5.  The search will highlight a line of code containing the ID. Copy the long string of letters and numbers that appears inside the `&lt;yt:channelId&gt;` tag.
6.  Paste this ID into the RSS Feed URL format: `https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_ID_HERE`.


## Requirements
* An n8n instance.
* An Apify account and API key.
* An OpenAI account and API key.
* A Google account with a prepared Google Sheet.

## How to customize the workflow
* **Monitor Multiple Channels:** The easiest way to watch more than one channel is to add multiple RSS Feed Trigger nodes to the canvas. Configure each trigger with a different YouTube channel's RSS URL, and then connect the output of all of them to the input of the first Apify node. This setup will start the workflow whenever any of the monitored channels publishes a new video.
* **Change the number of posts:** You can easily edit the prompt in the "OpenAI Chat Model" node to request a different number of posts (e.g., change "exactly 2" to "exactly 3").
* **Adjust the tone:** The persona and rules in the OpenAI prompt can be modified to change the style of the generated posts to better match your brand voice.
* **Add scheduling:** Connect a scheduling node (e.g., Buffer, SocialBee) after the "Google Sheets" node to create a fully automated content pipeline that publishes the posts for you.

**Disclaimer:** This template uses a community node. It is recommended for users on self-hosted n8n instances.

## 🔗 Nodes Used

Google Sheets, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
