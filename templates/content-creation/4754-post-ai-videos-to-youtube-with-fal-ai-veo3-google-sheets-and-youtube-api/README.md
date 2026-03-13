# 🎬 Post AI videos to YouTube with Fal AI Veo3, Google Sheets, and YouTube API

> ⚡ **2,855 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Auto-Post Veo3 Videos on YouTube

An automated workflow for creating Veo3 videos and posting them to YouTube. 

YT Tutorial: https://youtu.be/DXM1VA-vDX4

## Workflow Overview

The workflow is divided into three main phases:

1.  **Create Veo3 Video**
2.  **Wait for Video Processing**
3.  **Post on YouTube**

### 1. Create Veo3 Video

This phase handles the initial video creation based on user input.

*   **Type Prompt:** A form trigger allows the user to input details for the video, including:
    *   **Prompt:** A simple scenario for the video.
    *   **Video Style:** (e.g., Dialogue, Monologue, Advertisement, Documentary)
    *   **Aspect Ratio:** (e.g., 16:9, 9:16, 1:1)
    *   **Video Category:** A YouTube category for the video.
*   **Get Specific Prompt:** Based on the selected "Video Style," the workflow fetches specific prompt data from a Google Sheet.
*   **Videography (AI Refinement):** An AI agent (using OpenRouter's Google Gemini 2.5 Flash model) refines the user's prompt into a detailed "script-to-screen" format suitable for video generation.
*   **Make FAL.AI Request:** The refined prompt is sent to the Fal.ai Veo 3 model via an HTTP request to generate the video. The video duration is fixed at 8 seconds.
*   **Store Data:** Details of the video request, including the date requested, the refined prompt, and the request URL, are stored in a Google Sheet.

### 2. Wait for Video Processing

*   **Wait 5 mins:** The workflow pauses for 5 minutes. This waiting period is necessary as it typically takes 3-5 minutes for the video to be ready after the generation request.

### 3. Post on YouTube

This phase focuses on generating YouTube SEO details and uploading the video.

*   **YT Video SEO (AI Generation):** An AI agent (using OpenRouter's OpenAI GPT-4.1 Mini model) acts as a YouTube SEO specialist and viral content strategist. It generates the following details for the YouTube video:
    *   **Video Title:** A compelling title (less than 6 words).
    *   **Video Description:** A detailed description.
    *   **Video Tags:** Relevant tags to maximize discoverability.
    *   **YouTube Category:** The appropriate YouTube category code based on the user's input.
    *   The AI agent is configured to follow guidelines for virality and YouTube's tag limits.
*   **Structured Output:** Parses the structured JSON output from the AI agent.
*   **Get Keywords:** Extracts and formats the video tags into a comma-separated list suitable for YouTube.
*   **Fetch Video Credentials:** Fetches the video URL and other credentials from Fal.ai.
*   **Download Video:** Downloads the generated video file.
*   **Post on YouTube:** The video is uploaded to YouTube using the generated title, description, tags, and category.

## Setup

To run this workflow, you need to set up credentials in n8n for:

*   **OpenRouter:** Generate API key from your OpenRouter account.
*   **Google Sheets:** Uses OAuth 2.0. Connect by authenticating your Google account.
*   **YouTube Data API:** Configure credentials to allow posting videos to YouTube.

If you do not have an n8n account, follow the tutorial at `https://youtu.be/E2yQelHPUdU?feature=shared` to get started.

## 🔗 Nodes Used

Google Sheets, HTTP Request, YouTube, AI Agent, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
