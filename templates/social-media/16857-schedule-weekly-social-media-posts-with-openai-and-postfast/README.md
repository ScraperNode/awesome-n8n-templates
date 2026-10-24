# 📱 Schedule weekly social media posts with OpenAI and PostFast

> ⚡ **36 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday to generate a week of social media posts with OpenAI, then schedules them at preselected high-reach time slots through PostFast for the social accounts you choose. 

## How it works
1. Runs every Monday morning on a schedule trigger.
2. Loads your brand name, voice, topics, number of posts, and a platform filter for which networks to target.
3. Fetches all connected social accounts from PostFast and keeps only accounts that are connected and match the chosen platforms.
4. Uses OpenAI to write the requested number of posts in the defined brand voice and returns them as structured JSON.
5. Assigns each post to the next available “best time” slot (UTC) and expands the plan so each post is scheduled for each selected PostFast account.
6. Creates scheduled posts in PostFast with APPROVED status so they publish automatically at the assigned times.

## Setup
1. Install and enable the PostFast community node (n8n-nodes-postfast) if your n8n instance does not already allow verified community nodes.
2. Add a PostFast API key credential and connect the social accounts you want to schedule to in your PostFast dashboard.
3. Add an OpenAI credential for the OpenAI node.
4. Update the configuration values (brandName, brandVoice, topics, postsPerWeek, and platformFilter) to match your needs and ensure the platform names match your PostFast account platforms.

## Requirements
- A PostFast account (postfa.st) with an API key from Dashboard > API
- An OpenAI API key
- The verified PostFast community node (n8n-nodes-postfast) enabled on your instance

## Customization
- Change the posting time slots in the "Assign data-backed time slots" Code node
- Adjust tone, length, hashtags or language in the OpenAI prompt
-  Change postsPerWeek or target different networks via the platformFilter value

## Additional info
The posting time slots are not guesses: they come from PostFast's analysis of 36,000+ real scheduled posts (22,890 Instagram and 13,758 TikTok), published at postfa.st/blog/best-time-to-post-on-instagram. This template is built and maintained by the PostFast team, the makers of the verified n8n-nodes-postfast community node. PostFast supports 11 networks; the default platform filter targets text-friendly ones, since Instagram, TikTok, Pinterest and YouTube require media on every post.

## 🔗 Nodes Used

Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
