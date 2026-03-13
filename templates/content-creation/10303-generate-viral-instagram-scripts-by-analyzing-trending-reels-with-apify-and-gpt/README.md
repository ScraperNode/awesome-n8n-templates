# 🎬 Generate viral Instagram scripts by analyzing trending reels with Apify and GPT-4

> ⚡ **1,682 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n template demonstrates how to leverage AI to analyze trending short-form video content and automatically generate original, high-engagement video scripts inspired by proven viral formats.

Use cases are many: Create consistent content calendars for beauty salons and aestheticians, maintain a steady stream of reels without creative burnout, or study viral patterns to understand what drives engagement across Instagram's trending hashtags!

## Good to know

* The workflow scrapes real trending reels from Instagram based on your chosen hashtag, ensuring you're always learning from current viral patterns
* Video transcription happens automatically, extracting the core messaging and pacing strategies from successful content
* Generated scripts use proven engagement structures—hook, value delivery, and call-to-action timing—without copying original content
* All data is organized in Google Sheets for easy review, editing, and tracking of script performance
* The AI model intelligently mirrors the emotional tone and narrative structure while creating entirely new storylines

## How it works

* A form trigger collects your hashtag and desired number of reels to analyze
* The Apify API scrapes trending Instagram reels matching your hashtag, filtering for high engagement (1000+ likes from the last 7 days)
* Filtered reels are added to your Google Sheet with metadata: captions, engagement metrics, video links, and music information
* Each reel is automatically transcribed using video-to-text technology, capturing the exact dialogue and timing
* The AI Agent analyzes each transcript to understand its underlying structure—pacing, tone, curiosity hooks, and CTA placement
* Using this analysis, Claude generates a completely original script that follows the same proven engagement formula but with a fresh topic or angle
* Generated scripts are saved back to your Google Sheet alongside the source materials for comparison and refinement
* A summary email is sent confirming the number of scripts created and ready for production

## How to use

* Start by entering a beauty or lifestyle hashtag (e.g., #aiautomation, #beautysalon, #haircare) and specify how many trending reels to analyze
* Review the scraped content in your Google Sheet to understand what's currently resonating
* Check the generated scripts and use them as jumping-off points for your own video production
* Iterate on the process with different hashtags to discover emerging trends in your niche

## Requirements

* Apify account and API key for Instagram scraping (free tier available)
* Google Sheets document set up to store reel data and generated scripts
* OpenAI API key for the AI script generation
* Gmail account for the completion notification (optional but recommended)

## Customising this workflow

* Adjust the engagement filter thresholds (currently 1000+ likes, 7 days old) to capture micro-trends or evergreen content
* Modify the AI prompt in the "AI Agent" node to enforce specific brand voice, tone, or content guidelines
* Add additional Google Sheet columns to track metrics like script-to-video conversion rates or audience response
* Connect to additional distribution channels—automatically post scripts to team Slack, create video production briefs, or trigger video editing templates
* Experiment with different video categories by creating multiple instances of this workflow for different hashtags or niches

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
