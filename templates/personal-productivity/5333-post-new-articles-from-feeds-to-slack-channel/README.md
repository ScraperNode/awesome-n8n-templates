# ⚡ Post new articles from feeds to Slack channel

> ⚡ **476 views** · ⚡ [Personal Productivity](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

# 📄 Post New Articles from Feeds to Slack Channel

## 🧠 What This Workflow Does

This workflow automates the discovery and sharing of fresh articles from a curated list of RSS feeds. It performs the following steps:

1. **Reads a list of RSS feed URLs** from a Google Sheet (`Feeds` tab).
2. **Fetches the latest articles** from each feed.
3. **Checks for duplicates** against previously published links stored in another sheet (`Posted Articles` tab).
4. **Filters out already shared articles**.
5. **Posts the new articles** to a designated Slack channel with formatted titles and links.
6. **Logs the newly shared articles** back into the Google Sheet to prevent duplicates.

---

## 🛠️ Prerequisites

To use this workflow, you must have:

- ✅ **Google Sheets** OAuth2 credentials set up in n8n  
  (Used to access and update the RSS feed and post history sheets)

- ✅ **Slack** OAuth2 credentials  
  (Used to post messages to a specific Slack channel)

- ✅ **A Google Spreadsheet** with:
  - `Feeds` tab – Columns: `title`, `link`  
  - `Posted Articles` tab – Columns: `title`, `link`, `pubDate`

---

## 🔧 Environment Variables or Custom Values

You will need to set the following n8n variable or replace with direct input:

- `{{$vars.Daily_Industry_News_Automation_Google_Sheet}}`:  
  Reference to the Google Sheet Document ID (you can use a static ID if preferred)

Also update:
- Slack `channelId`: Replace with your actual Slack channel ID if not dynamically referenced

---

## ⏰ Trigger & Scheduling

- **Trigger type**: `Cron` node  
- **Default schedule**: Every day at **7:00 AM**

You can modify this in the **“Trigger Workflow”** node to suit your own schedule.

---

## 🎯 Intended Use Case

This workflow is ideal for:

- Marketing teams curating daily or weekly news digests
- Founders or industry professionals monitoring sector updates
- Automating internal Slack news updates
- Avoiding duplicate content when sourcing from multiple feeds

## 🔗 Nodes Used

Cron, Google Sheets, RSS Read, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
