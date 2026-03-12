# ⚡ Create daily YouTube playlist, using Google Sheets, and get notified in Telegram

> ⚡ **2,017 views** · ⚡ [Personal Productivity](../)

## Description

Are you a cord-cutter? Do you find yourself looking through the many titles of videos uploaded to Youtube, just to find the ones you want to watch?  Even when you subscribe to the channels you like, do you find that you want to watch the news now and my tech/n8n videos later?  Well, now you can have n8n grab the last 8 videos, posted in the last 24 hours, and put them in a playlist for the day; and, each day the old playlist is deleted.

   Are you tired of a channel filling your subscriptions with tons of videos a day; this workflow can be used for any channel, whether you are subscribed to the channel or not.  It's a YouTube playlist automation.

## How it works:
  - Create your list of prefered Youtube Channels in a Google Sheet and it will create you a daily playlist; and, it will delete the playlist created yesterday.

## Instructions
1. To set this up, you need to create a Google Sheet with the following headings in line 1:

   Channel User Name
   Channel Name
   Channel Link
   Channel ID

2. Copy the 'Create your Channel List' into it's own workflow and link the Sheets links to your new sheet.

3. To get the 'Create your Channel List' to work, you need to visit each channel's page that you want included in your playlist; you need to get the "@" name of the channel and add it to the 'Channel User Name' column of your Google Sheet.

   For example: if you wanted to include this channel: Recruit Training Videos - Corporal Stock, you would search for the name, to add to the next available row of the 'Channel User Name' column: @CorporalStock

4. Once you add all Channel User Names, run the 'Create your Channel list workflow, and it will fill in the remaining details.

5. Now the 'YT Playlist Creator' can be run. **Note:** The first time the workflow us run, disconnect the 'Delete Yesterday's Playlist' leg, or the workflow will error and stop (because there is no 'Yesterday's Playlist'.

**Note:** this was made to create a playlist every day, delete yesterday's playlist, and only get the last 8 videos posted within the last 24 hours.  I choose to put the date (YYMMDD format) in front of the playlist, to ensure that it doesn't conflict with another playlist.

   Also, I have it notifying me in Telegram, so I know that the new playlist is posted.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, YouTube, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
