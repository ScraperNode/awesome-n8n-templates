# 📱 Automatically promote your YouTube video on X

> ⚡ **6,721 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# YouTube to X Post

## Overview

This **n8n workflow** automates the process of promoting your latest YouTube videos on **X (formerly Twitter)**. It ensures that posts are engaging, concise, and follow platform-specific requirements. Additionally, the workflow logs social posts into a **Google Sheet** for record-keeping.

## Features

- **Fetch Latest YouTube Videos:** Pulls recently uploaded videos from a specified channel.
- **Generate Engaging X Posts:** Uses OpenAI's GPT-4 to create tailored, witty posts about your videos.
- **Character Limit Validation:** Ensures posts comply with X's character limit by rewriting if necessary.
- **Post Scheduling:** Automates post publishing to X.
- **Google Sheets Integration:** Logs posts and their status for tracking and management.
- **Optional Notifications:** Sends updates via Discord, Slack, or Gmail (disabled by default).

---

## How It Works

1. **Trigger:**
   - Manually trigger the workflow or set a scheduled check for new videos (disabled by default).
   
2. **Fetch YouTube Videos:**
   - Retrieves the latest videos from your YouTube channel, filtering duplicates.

3. **Content Creation:**
   - OpenAI generates a witty and humanized post under 220 characters, using video title and description.
   - If the post exceeds the character limit, it is rewritten automatically.

4. **Google Sheets Logging:**
   - Logs the generated post to a Google Sheet with details like time, date, and post status.

5. **Post to X:**
   - Publishes the generated post on X. Updates the Google Sheet with the post URL.

6. **Optional Notifications:**
   - Sends notifications about the published post via Discord, Slack, or Gmail.

---

## Setup Instructions

1. **Credentials:**
   - Add credentials for:
     - YouTube API
     - OpenAI API
     - Google Sheets API
     - X (formerly Twitter) API
   - Use the accounts associated with "AlexK1919."

2. **YouTube Node:**
   - Specify your **YouTube Channel ID** in the `Fetch Latest Videos` node.
   - [Find your Channel ID here](https://youtube.com/account_advanced).

3. **Google Sheets Node:**
   - Configure the node with your Google Sheet for logging posts. Use the linked sheet: [AlexK1919 Social Posts](https://docs.google.com/spreadsheets/d/1Ql9TGAzZCSdSqrHvkZLcsBPoNMAjNpPVsELkumP2heM/edit#gid=0).

4. **OpenAI Node:**
   - Set up your OpenAI API key for generating posts.

5. **X Post Node:**
   - Connect your X account to the `Post to X` node.

6. **Optional Notifications:**
   - Configure Discord, Slack, or Gmail nodes for custom notifications.

---

## Customization

- **Schedule:**
  - Enable and modify the `Check Every 2 Hours` node to automatically check for new videos.

- **Post Format:**
  - Edit the OpenAI prompt in the `Generate X Post` node to tweak the tone or style of the generated posts.

- **Additional Platforms:**
  - Expand this workflow to post on other social platforms by adding respective nodes (e.g., Facebook, LinkedIn).

---

## Notes

- Posts are validated for character limits but are restricted to 220 characters to ensure compliance with X's guidelines and leave space for links.
- Posts are logged in the Google Sheet with details, including post status and timestamps.
- Current integrations are focused on promoting YouTube content; additional types can be supported with minor adjustments.

---

## Contact

For support or inquiries:
- **Alex Kim**
- [About Me](https://beacons.ai/alexk1919)

## 🔗 Nodes Used

Google Sheets, Slack, Discord, X (Formerly Twitter), Gmail, YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
