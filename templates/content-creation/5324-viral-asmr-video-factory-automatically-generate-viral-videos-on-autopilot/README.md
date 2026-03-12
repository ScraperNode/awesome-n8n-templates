# 🎬 Viral ASMR video factory: Automatically generate viral videos on autopilot.

> ⚡ **4,022 views** · 🎬 [Content Creation & Video](../)

## Description

## 🚀 Overview

This automation is a complete content creation engine for your social media. It endlessly designs, generates, and organizes unique and oddly satisfying ASMR videos, ensuring you always have fresh, viral-style content ready to post on platforms like TikTok, YouTube Shorts, and Instagram Reels.

[Video Examples](https://drive.google.com/drive/folders/1S082VB9UhMRKW5p4AH31AYPPQ3CmfJD7?usp=sharing)

![The Prospects of AI in 1600 x 1200 px 1.png](fileId:1585)

## 😩 The Problem

Consistently creating viral content is exhausting. You're constantly battling creative burnout, trying to come up with new ideas that are fresh and engaging. For every video, you have to brainstorm an idea, write a detailed prompt for an AI generator, wait for the video, and then manually track what you've already posted. This manual process is slow, repetitive, and a major roadblock to scaling your content output.

## ✨ The Solution

This workflow acts as your personal, automated content creation employee. When you trigger it, the automation first checks a Google Sheet to see what videos it has already made. Then, a built-in "Idea Agent" cleverly brainstorms a brand new, unused concept (like a "glass banana" or "glass pomegranate").

Next, it passes this idea to a "Prompt Agent," which writes a perfectly detailed, sensory-rich script designed to produce a stunning, hyper-realistic video. The script is sent to an AI video generator, and the workflow waits patiently for it to finish. Once the video is ready, the automation saves the final video link neatly into your Google Sheet and cleans up the oldest entry, creating a self-sustaining content machine.

## ⚙️ Simple Setup

This workflow is a pre-built blueprint, designed to be up and running in minutes!

* **1. Upload:** Simply upload the provided JSON file into your n8n instance.
* **2. Connect:** Connect your app credentials (e.g., your Google, OpenAI, and Fal accounts). The workflow will show you exactly where.
* **3. Activate:** Turn the workflow on, and it's ready to go! Let your new automated employee get to work.

---
🌐 Explore more workflows
❤️ Buy more workflows at: [adamcrafts](https://adamcrafts.cloudysoftwares.com)
🦾 Custom workflows at: [adamcrafts@cloudysoftwares.com](mailto:adamcrafts@cloudysoftwares.com)
[adamaicrafts@gmail.com](mailto:adamaicrafts@gmail.com)


&gt; Build once, customize endlessly, and scale your video content like never before.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
