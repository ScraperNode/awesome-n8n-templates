# 📊 Extract insights & analyse YouTube comments via AI agent chat

> ⚡ **4,902 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### Video Guide

I prepared a detailed guide to help you set up your workflow effectively, enabling you to extract insights from YouTube for content generation using an AI agent.

[![Test](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Youtube%20AI%20Agent%20Blur.png)](https://youtu.be/6RmLZS8Yl4E)

[Youtube Link](https://youtu.be/6RmLZS8Yl4E)

### Who is this for?
This workflow is ideal for content creators, marketers, and analysts looking to enhance their YouTube strategies through data-driven insights. It’s particularly beneficial for individuals wanting to understand audience preferences and improve their video content.

### What problem does this workflow solve?
Navigating the content generation and optimization process can be complex, especially without significant audience insight. This workflow automates insights extraction from YouTube videos and comments, empowering users to create more engaging and relevant content effectively.

### What this workflow does
The workflow integrates various APIs to gather insights from YouTube videos, enabling automated commentary analysis, video transcription, and thumbnail evaluation. The main functionalities include:
- Extracting user preferences from comments.
- Transcribing video content for enhanced understanding.
- Analyzing thumbnails via AI for maximum viewer engagement insights.

1. **AI Insights Extraction**: Automatically pulls comments and metrics from selected YouTube creators to evaluate trends and gaps.
2. **Dynamic Video Planning**: Uses transcriptions to help creators outline video scripts and topics based on audience interest.
3. **Thumbnail Assessment**: Provides analysis on thumbnail designs to improve click-through rates and viewer attraction.

### Setup

#### N8N Workflow
1. **API Setup**:
   - Create a Google Cloud project and enable the YouTube Data API.
   - Generate an API key to be included in your workflow requests.

2. **YouTube Creator and Video Selection**:
   - Start by defining a request to identify top creators based on their video views.
   - Capture the YouTube video IDs for further analysis of comments and other video metrics.

3. **Comment Analysis**:
   - Gather comments associated with the selected videos and analyze them for user insights.

4. **Video Transcription**:
   - Utilize the insights from transcriptions to formulate content plans.

5. **Thumbnail Analysis**:
   - Evaluate your video thumbnails by submitting the URL through the OpenAI API to gain insights into their effectiveness.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
