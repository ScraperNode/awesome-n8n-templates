# 📱 Auto-translate YouTube videos to Japanese with DeepL and post to Slack

> ⚡ **108 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
Auto-translate YouTube uploads to Japanese and post to Slack (DeepL + Slack)

## Who’s it for
Marketing or community teams that follow English-speaking creators but share updates with Japanese audiences; language learners who want JP summaries of newly released videos; internal comms teams curating industry channels for a JP workspace.

## What it does
This workflow detects new YouTube uploads, retrieves full metadata, translates the title and description into Japanese using DeepL, and posts a formatted message to a Slack channel. It also skips non-English titles to avoid unnecessary translation.
## How it works
・RSS watches a channel for new items.
・YouTube API fetches the full snippet (title/description).
・Text is combined into a single payload and sent to DeepL.
・The translated result + original metadata is merged and posted to Slack.

## Requirements
・YouTube OAuth (for reliable snippet retrieval)
・DeepL API key (Free or Pro)
・Slack OAuth

## How to set up
・Duplicate this template.
・Open the Config (Set) node and fill in YT_CHANNEL_ID, TARGET_LANG, SLACK_CHANNEL.
・Connect credentials for YouTube, DeepL, and Slack (don’t hardcode API keys in HTTP nodes).
・Click Execute workflow and verify one sample post.

## How to customize
・Change TARGET_LANG to any language supported by DeepL.
・Add filters (exclude Shorts, skip videos under N characters).
・Switch to Slack Blocks for richer formatting or thread replies.
・Add a fallback translator or retry logic on HTTP errors.
## Notes & limits
DeepL Free/Pro have different endpoints/quotas and monthly character limits. YouTube and Slack also enforce rate limits. Keep credentials in n8n’s credential store; do not commit keys into templates. Rotate keys if you accidentally exposed them.

## 🔗 Nodes Used

RSS Read, Slack, YouTube, DeepL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
