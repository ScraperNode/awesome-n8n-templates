# 📱 Post new RSS feed items as BlueSky posts

> ⚡ **2,269 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?

BlueSky users looking to automate the publication of new posts based on new items from a RSS feed.

## What this workflow does

This will create a BlueSky post with each new RSS feed item, including the feed title, post image, link and content (up to 200 characters)

## Setup

1. You'll need to generate a [BlueSky app password](https://bsky.app/settings/app-passwords)
2. Configure your feed URL in the first node
3. Configure your credentials in the second node

## How to customize this workflow to your needs

You can modify the message posted in the ``Create post`` node, changing the JSON ``text`` value, in case you want to include only the feed item title instead of the content.

If you RSS feed doesn't provide an image, you can define a static one on the ``Download image`` node.

## 🔗 Nodes Used

HTTP Request, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
