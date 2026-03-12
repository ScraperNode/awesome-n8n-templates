# 🎬 Generate YouTube content ideas from video analysis with Dumpling AI and GPT-4o

> ⚡ **807 views** · 🎬 [Content Creation & Video](../)

## Description

## Who's it for

This template is perfect for YouTube creators, content marketers, and social media managers who want to turn existing videos into fresh, high-performing content ideas—automatically. It’s ideal if you want to save time brainstorming and focus on publishing videos that your audience actually wants.

---

## What it does

This workflow watches a Google Sheet for new YouTube video links. For each new video, it fetches the transcript and top comments using **Dumpling AI**, then sends that data along with the original search topic to **GPT-4o**.

GPT-4o returns 3–5 new content ideas based on:
- What was discussed in the video
- What people are searching for
- What viewers are saying in the comments

Each idea is saved to another Google Sheet and also sent to your email.

---

## How it works

1. **Trigger**: Watches for new rows in the "YouTube Finds" sheet  
2. **Transcript & Comments**: Sends video URL to Dumpling AI to fetch transcript and comments  
3. **Merge & Format**: Cleans and aggregates comments into one input  
4. **AI Prompting**: GPT-4o analyzes transcript, topic, and comments to suggest ideas  
5. **Output**: Splits and saves the results to a "YouTube Content Idea" sheet and emails them

---

## Requirements

- 🧠 **OpenAI API Key** stored securely in credentials  
- 🤖 **Dumpling AI API Key** stored as HTTP header credentials  
- 📄 **Google Sheets** with the following setup:

**Input Sheet ("YouTube Finds")**
- `Video Link`
- `search topic`

**Output Sheet ("YouTube Content Idea")**
- `title`
- `whyGoodIdea`
- `engagementPotential`

---

## How to customize

You can:
- Change the number of ideas returned by GPT-4o  
- Adjust the AI prompt to reflect your niche (e.g. education, tech, travel)  
- Add an approval step before sending the email  
- Extend it to post ideas directly into Trello, Notion, or Airtable

---

&gt; This workflow gives you an automated content strategist working 24/7—turning every YouTube upload into a launching pad for future content.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
