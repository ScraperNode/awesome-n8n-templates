# 🎬 Create & upload AI-generated ASMR YouTube Shorts with Seedance, Fal AI, and GPT-4

> ⚡ **180,764 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

![Workflow_Screenshot.png](fileId:1559)

//ASMR AI Workflow 
### Who is this for?

Content Creators, YouTube Automation Enthusiasts, and AI Hobbyists looking to autonomously generate and publish unique, satisfying ASMR-style YouTube Shorts without manual effort.

### What problem does this solve?

This workflow solves the creative bottleneck and time-consuming nature of daily content creation. It fully automates the entire production pipeline, from brainstorming trendy ideas to publishing a finished video, turning your n8n instance into a 24/7 content factory.

### What this workflow does

**1. Two-Stage AI Ideation & Planning:**
*   Uses an initial AI agent to brainstorm a short, viral ASMR concept based on current trends.
*   A second "Planning" AI agent then takes this concept and expands it into a detailed, structured production plan, complete with a viral-optimized caption, hashtags, and descriptions for the environment and sound.

**2. Multi-Modal Asset Generation:**
*   **Video:** Feeds detailed scene prompts to the **ByteDance Seedance** text-to-video model (via Wavespeed AI) to generate high-quality video clips.
*   **Audio:** Simultaneously calls the **Fal AI** text-to-audio model to create custom, soothing ASMR sound effects that match the video's theme.
*   **Assembly:** Automatically sequences the video clips and sound into a single, cohesive final video file using an FFMPEG API call.

**3. Closed-Loop Publishing & Logging:**
*   **Logging:** Initially logs the new idea to a Google Sheet with a status of "In Progress".
*   **Publishing:** Automatically uploads the final, assembled video directly to your YouTube channel, setting the title and description from the AI's plan.
*   **Updating:** Finds the original row in the Google Sheet and updates its status to "Done", adding a direct link to the newly published YouTube video.
*   **Notifications:** Sends real-time alerts to Telegram and/or Gmail with the video title and link, confirming the successful publication.

### Setup

**Credentials:**
You will need to create credentials in your n8n instance for the following services:
*   OpenAI API
*   Wavespeed AI API (for Seedance)
*   Fal AI API
*   Google OAuth Credential (enable **YouTube Data API v3** and **Google Sheets API** in your Google Cloud Project)
*   Telegram Bot Credential
*   (Optional) Gmail OAuth Credential

**Configuration:**
This is an advanced workflow. The initial setup should take approximately 15-20 minutes.
*   **Google Sheet:** Create a Google Sheet with these columns: `idea`, `caption`, `production_status`, `youtube_url`. Add the **Sheet ID** to the Google Sheets nodes in the workflow.
*   **Node Configuration:** In the `Telegram Notification` node, enter your own `Chat ID`. In the `Gmail Notification` node, update the recipient email address.
*   **Activate:** Once configured, save and set the workflow to "Active" to let it run on its schedule.

### How to customize

*   **Creative Direction:** To change the style or theme of the videos (e.g., from kinetic sand to soap cutting), simply edit the `systemMessage` in the **"2. Enrich Idea into Plan"** and **"Prompts AI Agent"** nodes.

*   **Initial Ideas:** To influence the AI's starting concepts, modify the prompt in the **"1. Generate Trendy Idea"** node.
*   **Video & Sound:** To change the video duration or sound style, adjust the parameters in the **"Create Clips"** and **"Create Sounds"** nodes.
*   **Notifications:** Add or remove notification channels (like Slack or Discord) after the **"Upload to YouTube"** node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
