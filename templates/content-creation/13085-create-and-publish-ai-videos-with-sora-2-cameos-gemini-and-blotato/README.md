# 🎬 Create and publish AI videos with Sora 2 Cameos, Gemini, and Blotato

> ⚡ **191 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Overview

This workflow automatically creates short-form AI videos using Sora 2 Cameos, powered by n8n and AI agents.

It connects viral content collection, AI script and prompt generation, video rendering, video merging, and multi-platform publishing into a single fully automated system. Once configured, the workflow runs end to end without manual editing or intervention.

The workflow is designed for creators, marketers, and affiliate builders who want to scale faceless or avatar-style AI videos consistently using viral ideas and automated publishing.

---

## What can this workflow do?

- Automatically collect viral content ideas from external sources  
- Analyze viral ideas and generate structured Sora 2–ready prompts  
- Create AI videos using pre-selected Sora 2 Cameos characters  
- Merge multiple AI video clips into a single final video  
- Publish videos automatically to TikTok, Facebook, and Instagram  
- Track publishing status, success, and errors in Google Sheets  

This workflow reduces manual video production work while keeping the process structured, scalable, and repeatable.

---

## How it works

The workflow starts by automatically collecting viral content ideas on a schedule and storing them in Google Sheets as a content backlog.

Before prompt generation, a Cameos character is selected and configured manually on Sora2.com. This selected avatar is used consistently across all generated videos.

Each viral idea is then analyzed to extract hooks, themes, and video direction. An AI Agent generates structured scripts and Sora 2–ready prompts based on both the viral content and the selected Cameos character.

These prompts are sent to the Sora 2 Cameos video generation API to render short video clips. The workflow monitors rendering status and retries if needed.

Once all clips are ready, they are automatically merged into a single final video. The finished video is published to social platforms such as TikTok, Facebook, and Instagram. Publishing results and errors are logged back to Google Sheets for monitoring and optimization.

---

## Setup steps

- Connect an AI model (Gemini or compatible LLM) for script and prompt generation  
- Select and configure a Cameos character on **Sora2.com**  
- Add Sora 2 Cameos API credentials for AI video generation  
- Configure the video merge step to combine multiple clips into one final video  
- Connect social publishing APIs (TikTok, Facebook, Instagram)  
- Connect Google Sheets for content intake and status tracking  

Once configured, the workflow runs automatically on a schedule without manual input.

---

## Documentation

For a full walkthrough, optimization tips, and scaling strategies, watch the detailed tutorial on [YouTube](https://youtu.be/pzCfvlgGlm0).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
