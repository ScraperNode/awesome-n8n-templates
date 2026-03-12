# 📱 Automatically Post Latest Reddit Content to Discord with Image Extraction

> ⚡ **1,488 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Reddit Poster to Discord
This workflow checks Reddit every 15 minutes for new posts and sends selected posts to a Discord channel via webhook.

## Flow Overview:
Schedule Trigger
Runs every 15 minutes.

### Fetch Latest Posts
Retrieves up to 3 new posts from any subreddit.

### Filter Posts
Skips moderator or announcement posts based on author ID.

### Fetch Full Post Data
Gets full details for the remaining post.

### Extract Image URL
Parses the post to extract a direct image link.

### Send to Discord
Sends the post title, image, and link to a Discord webhook.

## Setup Notes:
- Create a Reddit app and connect credentials in n8n.

- Add your subreddit name to both Reddit nodes.

- Connect a Discord webhook for posting.

## 🔗 Nodes Used

Discord, Reddit, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
