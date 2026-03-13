# 🎬 Personalize Instagram trends for custom skin tones with GPT-4o, DALL-E & Slack

> ⚡ **64 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Who is it for
Beauty & Fashion Consultants: To visualize trends for specific client profiles.
Content Creators: To generate personalized variations of trending aesthetics.
Trend Watchers: To automate the collection and adaptation of social media designs.
How it works
Configuration: You define the target hashtags (e.g., #trendnails) and the target skin tone (e.g., "Yellow Base Spring") in the set node.
Scraping: The workflow uses Apify to scrape the latest top posts from Instagram based on your hashtags.
Analysis & Prompting: GPT-4o (Vision) analyzes the original image to understand the pattern and atmosphere, then generates a new prompt optimized for the specified skin tone.
Generation: DALL-E 3 creates a new image based on the generated prompt.
Delivery: The final personalized image is uploaded directly to a Slack channel.
How to set up
Apify: Create an account and get your API Token. Ensure you have access to the instagram-hashtag-scraper actor.
OpenAI: You need an API Key with access to GPT-4o and DALL-E 3.
Slack: Connect your Slack account with OAuth2 in n8n.
Workflow Configuration: Open the "Workflow Configuration" node and fill in your apifyApiToken, desired hashtags, and skinTone.
Requirements
Apify account
OpenAI API key (GPT-4o & DALL-E model access)
Slack account

## 🔗 Nodes Used

HTTP Request, Slack, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
