# 🎬 Post AI videos to YouTube with Fal AI Veo3.1, Google Sheets, and YouTube API

> ⚡ **18 views** · 🎬 [Content Creation & Video](../)

## Description

# What It Is

An automated workflow for creating **Veo3.1 videos** and posting them to **YouTube**.

The workflow consists of three main phases:

1. **Create Veo3.1 Video**
2. **Wait for Video Processing**
3. **Post on YouTube**

---

# Create Veo3.1 Video

This phase handles initial video creation based on user input.

### Type Prompt

A form trigger collects the user’s inputs:

* **Prompt:** A simple scenario for the video.
* **Aspect Ratio:** e.g., `16:9`, `9:16`, `1:1`
* **Videography (AI Refinement):**
  An LLM refines the user’s prompt into a detailed "script-to-screen" format suitable for video generation.

### Make FAL.AI Request

* Sends the refined prompt to the **Fal.ai Veo 3.1** model via HTTP request.
* Video duration is fixed at **8 seconds**.

### Store Data

Stores video request details in a **Google Sheet**, including:

* Request date
* Refined prompt
* Fal.ai request URL

---

# Wait for Video Processing

* The workflow pauses for **5 minutes**.
* Veo videos typically require **3–5 minutes** to finish processing.

---

# Post on YouTube

This phase generates YouTube-optimized metadata and uploads the final video.

### YT Video SEO

An LLM (acting as a YouTube SEO + viral strategist) generates:

* **Video Title:** Under 6 words
* **Video Description:** Detailed and optimized
* **Video Tags:** Relevant tags for discoverability

It follows virality best practices and YouTube’s tag rules.

### Structured Output

* Parses structured JSON returned by the AI agent.

### Get Keywords

* Extracts and formats tags into a **comma-separated list** suitable for YouTube.

### Fetch Video Credentials

* Retrieves the final video URL and metadata from Fal.ai.

### Download Video

* Downloads the generated video file.

### Post on YouTube

* Uploads the video with the generated title, description, tags, and category.

---

# Setup

To run this workflow, configure the following credentials in **n8n**:

### OpenRouter

* Generate an API key from your OpenRouter account.

### Google Sheets

* Uses OAuth 2.0
* Authenticate with your Google account.

### YouTube Data API

* Configure credentials that allow n8n to post videos to YouTube.

## 🔗 Nodes Used

Google Sheets, HTTP Request, YouTube, AI Agent, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
