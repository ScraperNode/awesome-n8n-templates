# 📱 Create Facebook photo posts from Telegram albums using OpenRouter AI

> ⚡ **4 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automate multi-photo Facebook posts from Telegram albums. This workflow buffers incoming photos, uses OpenRouter AI to generate engaging social media captions, uploads media in bulk, and publishes the final post while sending a clickable live link back to your chat.

## How it works
1. Triggers when a new Telegram message containing photos arrives.
2. Extracts the best-resolution photo, caption, and a media-group key, then stores each photo entry in an n8n Data Table.
3. Waits briefly to allow all images in the same Telegram album (media group) to arrive, then retrieves all stored records for that album.
4. Collects the first non-empty caption and builds a list of photo file IDs for the album.
5. Uses OpenRouter to rewrite the caption into an engaging Facebook post with a hook, CTA, and hashtags.
6. Downloads each Telegram photo and uploads it to the Facebook Graph API as unpublished media to obtain media IDs, then aggregates them into an attached_media array.
7. Publishes a Facebook Page feed post with the AI-generated message and attached media, then sends a Telegram notification containing the Facebook post URL.

## Setup
1. Connect a Telegram Bot credential and ensure the bot can receive photo messages in the target chat or group.
2. Create (or select) an n8n Data Table for buffering album items with columns for media_group_id, file_id, caption, and date.
3. Add an OpenRouter API credential and choose the model you want to use for caption rewriting.
4. Add a Facebook Graph API credential with a Page access token that can publish posts, and replace the hard-coded Facebook Page ID (node value 1285698161296966) with your own.
5. Review the wait time used to batch Telegram albums (currently 3 seconds) and adjust it if your albums arrive more slowly.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Facebook Graph API, AI Agent, OpenRouter Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
