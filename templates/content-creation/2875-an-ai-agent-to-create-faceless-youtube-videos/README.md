# 🎬 An AI agent to create faceless YouTube videos

> ⚡ **521 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Runthrough
[Video runthrough](https://www.youtube.com/watch?v=i3-MQQ0Z3Ow)

## Use Case
Create YouTube videos without on-camera presence:

- You want to generate passive content
- You need scalable video production
- You want to automate content creation
- You need consistent video output

## What this Workflow Does
The workflow automates video production:
- Generates audio narration
- Creates complementary stock imagery and turns static images into motion
- Syncs audio and visual elements
- Produces ready-to-upload YouTube content

## Setup
- Configure text-to-speech audio generation
- Set up AI image generation service
- Connect Shotstack API for video composition
- Define content parameters and themes

## How to Adjust it to Your Needs
- Modify audio generation parameters
- Customize image styles
- Adjust video composition

## Tools (requires API access & some are paid for tools)
- Elevenlabs for audio generation
- Leonardo for image generation and motion images (can be swapped out)
- Shotstack for syncing image to video
- OpenAI Whisper for transcription

## Cost of production
Around $0.80 per video at time of writing

## 🔗 Nodes Used

HTTP Request, Google Drive, Basic LLM Chain, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
