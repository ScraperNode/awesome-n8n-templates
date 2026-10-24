# 📱 Share and schedule blog posts to social media using RSS and Posta

> ⚡ **32 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow reads a blog RSS feed, downloads each article’s featured image, uploads it to Posta, and creates and schedules a social media post to connected accounts with the article text and hashtags.

## How it works
1. Runs when you manually execute the workflow.
2. Fetches items from an RSS feed URL.
3. Downloads each item’s enclosure image via HTTP and uploads the file to Posta as media.
4. Combines the uploaded Posta media ID with the RSS item content and metadata.
5. Creates a draft social post in Posta for a specified social account, using the article content as the caption, categories as hashtags, and the RSS title for the LinkedIn document title.
6. Schedules the created Posta post to publish at the configured date and time.

## Setup
1. Create a Posta account, connect your social media profiles in Posta, and add your Posta API credentials in n8n.
2. Run the workflow once to list your connected Posta social accounts and copy the target socialAccountId(s) into the post creation step.
3. Update the RSS feed URL and ensure your feed provides an enclosure image URL and content fields that match the workflow’s mappings.
4. Set the desired scheduled publish timestamp in the scheduling step (or change it to publish immediately if preferred).

## Additional info
Video explanation: https://youtu.be/Ra9x57asFnk

## 🔗 Nodes Used

HTTP Request, RSS Read

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
