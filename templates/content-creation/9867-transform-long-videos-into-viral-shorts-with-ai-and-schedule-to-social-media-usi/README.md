# 🎬 Transform long videos into viral shorts with AI and schedule to social media using Whisper & Gemini

> ⚡ **14,215 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![image.png](fileId:3012)

This automation template turns any long video into multiple viral-ready short clips and auto-schedules them to TikTok, Instagram Reels, and YouTube Shorts. It works with both vertical and horizontal inputs and respects the original input resolution (no unnecessary upscaling), cropping or letterboxing intelligently when needed. The workflow automatically extracts between 3 and 6 clips (based on video length and the most engaging segments) and schedules one short per consecutive day—e.g., 3 clips → the next 3 days, 6 clips → the next 6 days.

***Note: This workflow uses OpenAI Whisper for word-level transcription, Google’s Gemini for clip selection and metadata, and Upload-Post’s FFmpeg API for GPU-accelerated cutting/cropping and social scheduling. You can use the same Upload-Post API token for both FFmpeg jobs and publishing uploads. Upload-Post also offers a generous free trial with no credit card required.***

## Who Is This For?
- **Creators & Editors:** Batch-convert long talks/podcasts into daily Shorts/Reels/TikToks.
- **Agencies & Social Teams:** Turn webinars/interviews into a reliable short-form stream.
- **Brands & Founders:** Maintain a steady posting cadence with minimal hands-on editing.

## What Problem Does This Workflow Solve?
Manual clipping is slow and inconsistent. This workflow:
- **Finds Hooks Automatically:** AI picks 3–6 high-retention segments from transcript + timestamps (count scales with video length/quality).
- **Cuts Cleanly:** Absolute-second FFmpeg timing to avoid mid-word cuts.
- **Vertical & Horizontal Friendly:** Handles both orientations and respects source resolution.
- **Schedules for You:** Posts one clip per day on consecutive days.

## How It Works
1. **Form Upload:** Submit your long video.
2. **Audio Extraction:** FFmpeg job extracts audio for accurate ASR.
3. **Whisper Transcription:** Word-level timestamps enable precise clipping.
4. **AI Clip Mining (Gemini):** Detects 3–6 “viral” moments (15–60s) and generates titles/descriptions.
5. **Cut & Crop (FFmpeg):** GPU pipeline produces clean clips; preserves input resolution/orientation when possible and crops/pads appropriately for target platforms.
6. **Status & Download:** Polls job status and retrieves the final clips.
7. **Auto-Scheduling (Consecutive Days):** Schedules one short per day starting tomorrow, for as many days as clips were produced (e.g., 3 clips → 3 days, 6 clips → 6 days) at a configurable time (default 20:00 Europe/Madrid).

## Setup
1. **OpenAI (Whisper):** Add your OpenAI API credentials.
2. **Google Gemini:** Add Gemini credentials used by the AI Agent node.
3. **Upload-Post (free trial no credit card required):** Generate your api token https://app.upload-post.com/ connect your social media accounts and add your API token credentials in n8n (same token works for FFmpeg jobs and publishing).
4. **Scheduling:** Adjust posting time/intervals and timezone (`Europe/Madrid` by default).
5. **Metadata Mapping:** Titles/descriptions are auto-generated per platform; tweak as needed.

## Requirements
- **Accounts:** n8n, OpenAI, Google (Gemini), Upload-Post, and social platform connections.
- **API Keys:** OpenAI token, Gemini credentials, Upload-Post token.
- **Budget:** Whisper + Gemini inference + FFmpeg compute + optional posting costs.

## Features
- **Word-Accurate Cuts:** Absolute-second timecodes with subtle pre/post-roll.
- **Orientation-Aware:** Supports vertical and horizontal inputs; preserves source resolution where possible.
- **Platform-Optimized Output:** 9:16-ready delivery with smart crop/pad behavior.
- **Consecutive-Day Scheduler:** 3–6 clips → 3–6 consecutive posting days, automatically.
- **Retry & Polling:** Built-in waits and status checks for robust processing.
- **Modular:** Swap models, adjust clip count/length, or add/remove platforms quickly.

Turn long-form video into a consistent sequence of Shorts/Reels/TikToks—automatically, day after day, while respecting your source resolution.

## 🔗 Nodes Used

HTTP Request, AI Agent, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
