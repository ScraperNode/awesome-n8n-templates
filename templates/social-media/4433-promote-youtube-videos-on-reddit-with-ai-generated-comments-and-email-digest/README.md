# 📱 Promote YouTube videos on Reddit with AI-generated comments and email digest

> ⚡ **559 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Motivation

Are you a small YT channel looking to grow to 1000 subs ?
This workflow has helped me grow to 80 subs via Reddit Marketing. 
Check out the [YT Tutorial](https://youtu.be/ET4zT0DE4uw).

## What it is

This n8n workflow automates the process of promoting your YouTube videos on Reddit. It identifies relevant Reddit posts, generates humanized comments tailored to your video content, and delivers a weekly digest of opportunities directly to your inbox.

## How It Works

A user submits their YouTube video URL and email through a form.

The workflow analyzes the YouTube video's title, description, and tags to extract relevant keywords and create a custom AI classification prompt.

It searches Reddit for posts containing those keywords and filters them based on engagement metrics

1. upvotes &gt; 15
2. non-empty text content
3. posted within the last 14 days
4. upvote ratio &gt; 0.95

An AI agent (using OpenRouter&apos;s GPT-4.1-mini) classifies each filtered Reddit post to determine its relevance to your YouTube video.

For relevant posts, another AI agent (using OpenRouter&apos;s Gemini-2.0-flash-lite-001) generates a humanized, authentic comment designed to subtly reference your video and add value to the Reddit discussion.

Relevant posts and their proposed comments are stored in Google Sheets.

A professional HTML email digest is generated, summarizing the marketing opportunities.

The email is sent to the user's provided email address.

## Setup

To run this workflow, you need to set up credentials in n8n for:

- YouTube: Uses OAuth 2.0. Connect by authenticating your YouTube account.
- Reddit: Uses OAuth 2.0. Requires creating an app on Reddit to get a Client ID & Secret. ([YT Tutorial](https://youtu.be/zlGXtW4LAK8))
- OpenRouter: Generate API key from your OpenRouter account. ([YT Tutorial](https://youtu.be/Cq5Y3zpEhlc))
- Google Sheets: Recommend OAuth2 - just connect by authenticating.
- Gmail: Recommend OAuth 2.0. like Google Sheets

## n8n account setup

If you do not have a n8n account, follow the [YT Tutorial](https://youtu.be/E2yQelHPUdU) to get started.

## 🔗 Nodes Used

Google Sheets, Gmail, YouTube, Reddit, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
