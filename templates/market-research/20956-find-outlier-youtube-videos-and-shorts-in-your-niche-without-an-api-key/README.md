# 📊 Find outlier YouTube videos and Shorts in your niche without an API key

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Find the YouTube videos and Shorts that got far more views than usual for their own channel. Enter a topic or a list of channels in a simple form and get a results page. No API key, no Google account, nothing to connect.

## How it works
1. You enter a topic, up to 10 YouTube channels, or both, in an n8n form.
2. For a topic, the workflow finds up to 8 matching channels with YouTube's own search.
3. For each channel it reads two public feeds: the latest 15 long videos and the latest 15 Shorts, with views and likes.
4. It works out what is usual for each channel: the median views of its other videos of the same format. Shorts are compared only with Shorts.
5. A video with at least 2x the usual views is an outlier (you choose the factor). New videos that are already ahead are marked "early".
6. You get a page with the outliers, their thumbnails and likes, the channels used, and a ready text to paste into any AI chat to ask why these videos worked.

## Setup
1. Click "Execute workflow" and open the form, or activate the workflow and use the form's production URL.
2. Enter a topic of two or three words, such as "skincare routine", or channels as @handle, channel link or channel ID, then click "Find outliers".
3. If you share the form link with other people, turn on Authentication in the form node.

## Customization
- Change the limits in the Settings node: channels per run, minimum subscribers, age limits, thumbnails on or off. More channels per run means more requests to YouTube.
- Raise topic_min_subscribers in Settings to leave out small channels found for a topic, or topic_min_usual_views to stop judging them.
- "Build report page" also returns the AI text as ai_prompt, so you can connect your own AI node to it. Its answer will not appear on the results page.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
