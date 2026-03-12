# 📱 Automatically update YouTube video descriptions with inserted text

> ⚡ **2,133 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?

This workflow is designed for YouTubers who want to update their video descriptions in bulk without manually editing each one. It's especially useful for creators who include a standard set of links in their descriptions and need to insert a new link between existing ones across multiple videos.
## What problem does this workflow solve?

Manually updating video descriptions for multiple videos can be tedious and time-consuming. If you have a section in your video descriptions that contains important links, adding a new one in a specific position (e.g., between two existing links) can be a challenge. This workflow automates that process, allowing you to insert a specific string between two predefined rows in all of your video descriptions at once.
## What this workflow does

1. Fetches all videos from your YouTube channel.
2. Iterates through each video to retrieve its existing description.
3. Identifies two predefined rows in the description.
4. Inserts a new row between the two specified rows.
5. Updates the video description with the modified text.

## Setup

1. Connect your YouTube account to n8n and grant necessary permissions.
2. Define your variables in the "Set String to Insert" node:
   - **rowBefore**: The existing row after which the new row will be inserted.
   - **rowToInsert**: The new text or link to insert.
   - **rowAfter**: The existing row before which the new row will be inserted.
3. Run the workflow using the manual trigger.
4. Review the updated descriptions to ensure accuracy.

## How to customize this workflow to your needs

- **Change the insertion criteria** by modifying the rowBefore and rowAfter values.
- **Insert multiple rows** by adjusting the JavaScript code in the Code node.
- **Extend the workflow** by adding conditions (e.g., only updating descriptions of videos with certain tags).
- **Filter specific** videos instead of updating all by modifying the "Get All Videos" node.

This workflow ensures that all your YouTube descriptions stay updated and consistent with minimal effort.

## 🔗 Nodes Used

YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
