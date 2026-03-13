# 🎬 Turn YouTube videos into summaries, transcripts, and visual insights

> ⚡ **27,812 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?  

This workflow is built for anyone who works with YouTube content, whether you're:  

- A **learner** looking to understand a video’s key points  
- A **content creator** repurposing video material  
- A **YouTube manager** looking to update titles, descriptions
- A **social media strategist** searching for the most shareable clips  

![AskQuestions.png](fileId:1016)
*Don't just ask questions about what's said. Find out what's going on in a video too.*

Video Overview: https://www.youtube.com/watch?v=Ovg_KfKxnC8

## What problem does this solve?  

YouTube videos hold valuable insights, but watching and processing them manually takes time. This workflow automates:  

- **Quick content extraction**: Summarize key ideas without watching full videos   
- **Visual analysis**: Understand what’s happening beyond spoken words  
- **Clip discovery**: Identify the best moments for social sharing  

## How the workflow works  

This n8n-powered automation:  

1. Uses **Google’s Gemini 1.5 Flash AI** for intelligent video analysis  
2. Provides **multiple content analysis templates** tailored to different needs  

## What makes this workflow powerful?  

The easiest place to start is by requesting a **summary or transcript**. From there, you can refine the prompts to match your specific use case and the type of video content you’re working with.  

But what's even more amazing? You can ask **questions about what’s happening in the video** — and get detailed insights about the people, objects, and scenes. It's jaw-dropping.  

This workflow is **versatile** — the actions adapt based on the values set. That means you can use a single workflow to:  

- Extract **transcripts**  
- Generate an **extended YouTube description**  
- Write a **summary blog post**  

You can also **modify the trigger** based on how you want to run the workflow — use a **webhook**, connect it to an event in **Airtable**, or leave it as-is for on-demand use. The output can then be sent anywhere: **Notion, Airtable, CMS platforms, or even just stored for reference.**  

## How to set it up  

1. **Connect** your Google API key  
2. **Paste** a YouTube video URL  
3. **Select** an analysis method  
4. **Run** the workflow and get structured results  

## Analysis Templates  

- **Basic & Timestamped Transcripts**: Extract spoken content  
- **Summaries**: Get concise takeaways  
- **Visual Scene Analysis**: Detect objects, settings, and people  
- **Clip Finder**: Locate shareable moments  
- **Actionable Insights**: Extract practical information  

## Customization Options  

- Modify templates to fit your needs  
- Connect with external platforms  
- Adjust formatting preferences  

## Advanced Configuration  

This workflow is designed for use with **gemini-1.5-flash**. In the future, you can update the flow to work with different models or even modify the HTTP request node to define which API endpoint should be used. 

It's also been designed so you can use this flow on it's own or add to a new / existing worflow. 

This workflow helps you get the most out of YouTube content — quickly and efficiently.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
