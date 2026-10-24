# 📊 Normalize YouTube video tags using Google Sheets vocabulary rules

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow loads a tag vocabulary from Google Sheets, scans your YouTube channel’s recent videos, normalizes each video’s tags to match alias/banned/required rules, and updates only the videos whose tag set changes.

## How it works
1. Runs manually to start the tag normalization process.
2. Reads controlled-vocabulary rules from Google Sheets, including alias mappings, banned tags, and required baseline tags.
3. Lists up to 50 videos from the specified YouTube channel and fetches each video’s snippet details, including tags, title, and category.
4. Normalizes tags by lowercasing and cleaning them, converting aliases to canonical tags, removing banned tags, deduplicating, adding required tags, and truncating to YouTube’s tag character limit.
5. Compares the normalized tag set to the current tags and keeps only videos where the tags changed.
6. Updates the tags on the changed videos in YouTube while preserving the existing title and category.

## Setup
1. Add a YouTube (Google) OAuth2 credential for the YouTube nodes and ensure it has permission to update videos on your channel.
2. Add a Google Sheets credential, set the spreadsheet ID and sheet/tab to the vocabulary document, and ensure it is accessible to that account.
3. Replace YOUR_CHANNEL_ID in the YouTube channel filter and adjust the video limit or ordering if needed.
4. Create a vocabulary sheet with columns such as rule_type, tag, and canonical, using rule_type values alias, banned, and required.

## 🔗 Nodes Used

Google Sheets, YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
