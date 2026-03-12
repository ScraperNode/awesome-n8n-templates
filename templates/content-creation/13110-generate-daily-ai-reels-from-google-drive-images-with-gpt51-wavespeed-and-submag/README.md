# 🎬 Generate daily AI reels from Google Drive images with GPT‑5.1, Wavespeed and Submagic

> ⚡ **150 views** · 🎬 [Content Creation & Video](../)

## Description

# Image to Video Social Media Reel Generator + Autopost Without AI Slop

Google Drive → AI Video Generation → Captions → Approval → Instagram & TikTok

Watch Step-By-Step Video: https://www.youtube.com/watch?v=jPOYxQF25ws

Turn a folder of images into fully-produced short-form social media reels—automatically.
This workflow picks a random image, generates a cinematic AI video from it, adds text overlays and captions, waits for your approval, and then posts to Instagram and TikTok.

## What this template does

On a scheduled basis (default: daily at 9:00 AM), this workflow:
Selects a random image from a Google Drive folder
Uploads the image for processing
Generates a cinematic image-to-video prompt using AI
Creates an 8-second vertical video using an image-to-video model (via Wavespeed)
Applies captions and text overlays using Submagic
Waits for human approval via email
Automatically posts the approved reel to:
Instagram
TikTok
If the video is not approved, the workflow loops and tries again on the next run.

## Why this workflow is useful
Converts static images into high-engagement video content
Removes repetitive manual work in short-form content creation
Keeps a human-in-the-loop before anything is published

Perfect for:
Creators & solopreneurs
Social media managers
Small businesses & local brands
AI-first content pipelines
High-level flow
Schedule → Pick Image → Generate Video → Add Captions → Approve → Post

## Node overview
Schedule Trigger
Runs the workflow automatically at a fixed time (default: daily at 9 AM).
Google Drive – Search Files
Fetches all images from a selected Drive folder.
Randomizer (Code Node)
Selects one random image to avoid repetitive posting.
Upload Media
Uploads the selected image so it can be used by downstream tools.
Prompt Generator (AI)
Generates a high-quality cinematic prompt optimized for image-to-video models
Wavespeed – Image to Video
Creates an 8-second, 9:16 video from the image + prompt.
Wait & Polling (IF Nodes)
Waits and checks until video generation is completed.
Submagic – Text Overlay & Captioning
Adds captions and overlays in a short-form style optimized for social platforms.
Gmail – Send for Approval
Sends a preview link and caption to your inbox and waits for approval.
IF (Approved?)
Yes: posts the reel automatically
No: skips posting and retries in the next run
Blotato – Social Posting
Publishes the approved reel to:
Instagram
TikTok

## Requirements

Before running this template, you’ll need to configure:
Google Drive OAuth (image source folder)
OpenAI API key (prompt generation)
Wavespeed API key (image-to-video generation)
Submagic API key (captions & overlays)
Gmail OAuth (approval workflow)
Blotato account (Instagram & TikTok posting)
All credentials must be added manually after importing.

## Setup instructions

Import the template into your n8n workspace
Connect your Google Drive account and set your image folder
### Add credentials for:
OpenAI
Wavespeed
Submagic
Gmail
Blotato

Adjust the Schedule Trigger if needed
Run the workflow once to test the full flow
Enable the workflow to start daily automated posting

## Customization ideas

Change video duration, aspect ratio, or style
Modify the AI prompt to match your brand voice
Post only after manual approval (already built-in)
Add a Slack or Telegram approval step
Duplicate posting logic for YouTube Shorts or Facebook Reels
Store generated videos in cloud storage or a content database

## Troubleshooting

No images found: check Drive folder ID and permissions
Video stuck generating: increase wait time or polling interval
Approval email not received: verify Gmail OAuth and inbox filters
Posting fails: confirm Blotato account and platform permissions

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
