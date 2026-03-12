# 🎬 Daily AI news digest to LinkedIn posts with OpenAI GPT and RSS feeds

> ⚡ **4,306 views** · 🎬 [Content Creation & Video](../)

## Description

## 🔁 What This Workflow Does
This automation fetches daily AI-related articles from trusted RSS feeds, summarizes them using OpenAI (GPT), and generates a ready-to-post LinkedIn update in your writing style. It then emails the post to you every morning for review and publishing.

### High-Level Steps:
1. Triggers every morning via Cron.
2. Fetches latest AI news from multiple RSS sources.
3. Filters recent articles (last 24 hrs).
4. Summarizes each article using OpenAI (ChatGPT).
5. Generates a LinkedIn-style post using your tone.
6. Sends the post to your Gmail for review.

### ⚙️ Setup Steps
Estimated setup time: 15–30 minutes

You’ll need:

- OpenAI API key
- Gmail account connected in n8n
- RSS feed URLs (defaults are provided)

Add your email in the Gmail node to receive daily posts.

Add your tone/style prompt in the ChatGPT nodes (instructions inside workflow).

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
