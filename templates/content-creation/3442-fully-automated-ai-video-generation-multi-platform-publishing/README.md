# 🎬 Fully automated AI video generation & multi-platform publishing

> ⚡ **228,786 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

This comprehensive n8n automation template orchestrates a complete end-to-end workflow for generating engaging short-form Point-of-View (POV) style videos using multiple AI services and automatically publishing them across major social media platforms. It takes ideas from a Google Sheet and transforms them into finished videos with captions, voiceovers, and platform-specific descriptions, ready for distribution.

### Who Is This For?

*   **Content Creators & Agencies:** Mass-produce unique short-form video content for various clients or channels with minimal manual effort.
*   **Digital Marketers:** Automate video content pipelines to boost online presence and engagement across multiple platforms simultaneously.
*   **Social Media Managers:** Schedule and distribute consistent video content efficiently without juggling multiple tools and manual uploads.
*   **Businesses:** Leverage AI to create branded video content for marketing, reducing production time and costs.

### What Problem Does This Workflow Solve?

Creating and distributing high-quality short-form video content consistently across multiple social networks is incredibly time-consuming and resource-intensive. This workflow tackles these challenges by:

*   **Automating Idea-to-Video Pipeline:** Generates video concepts, image prompts, scripts, images, video clips, and voiceovers using AI.
*   **Streamlining Video Assembly:** Automatically combines generated assets into a final video using a template.
*   **Generating Platform-Optimized Descriptions:** Creates relevant descriptions for posts by transcribing the final video audio.
*   **Automating Multi-Platform Publishing:** Uploads the final video and description to TikTok, Instagram, YouTube, Facebook, and LinkedIn simultaneously.
*   **Reducing Manual Workload:** Drastically cuts down the time and effort required for video production and distribution.
*   **Centralized Tracking:** Updates a Google Sheet with results, costs, and status for easy monitoring.

### How It Works

1.  **Trigger & Input:** Runs on a daily schedule (configurable) and fetches new video ideas from a designated Google Sheet.
2.  **AI Content Generation:**
    *   Uses OpenAI to generate video captions and image prompts based on the idea.
    *   Uses PiAPI (Flux) to generate images from prompts.
    *   Uses PiAPI (Kling) to generate video clips from the images (Image-to-Video).
    *   Uses OpenAI to generate a voiceover script based on the captions.
    *   Uses ElevenLabs to generate voiceover audio from the script and uploads it to Google Drive.
3.  **Video Assembly:** Combines the generated video clips, captions, and voiceover audio using a Creatomate template to render the final video.
4.  **Description Generation:** Uploads the final video to Google Drive, extracts the audio using OpenAI (Whisper), and generates a social media description using OpenAI (GPT).
5.  **Multi-Platform Distribution:** Uses upload-post.com to upload the final video and generated description to TikTok, Instagram, YouTube, Facebook, and LinkedIn.
6.  **Tracking & Notification:** Updates the original Google Sheet row with output details (video link, costs, tokens used) and sends a completion notification via Discord.

### Setup

1.  **Accounts & API Keys:** Obtain accounts and generate API keys/credentials for:
    *   n8n
    *   Google Cloud Platform (for Google Sheets & Google Drive APIs + OAuth Credentials)
    *   OpenAI
    *   PiAPI
    *   ElevenLabs
    *   Creatomate
    *   upload-post.com
    *   Discord (Webhook URL)
2.  **Google Sheet:** Make a copy of the provided [Google Sheet Template](https://docs.google.com/spreadsheets/d/1cjd8p_yx-M-3gWLEd5TargtoB35cW-3y66AOTNMQrrM/edit?usp=sharing) and connect it in the `Load Google Sheet` node.
3.  **Creatomate Template:** Set up a video template in Creatomate (use the [provided JSON source code](https://pastebin.com/c7aMTeLK) as a base) and note its Template ID.
4.  **Configure Nodes:**
    *   Enter all API Keys/Credentials in the `Set API Keys` node and other relevant credential sections (Google nodes, upload-post nodes, etc.).
    *   Configure Google Drive nodes (Folder IDs, Permissions).
    *   Configure the `upload-post.com` nodes with your user identifier and necessary platform details (e.g., Facebook Page ID).
    *   Customize AI prompts within the OpenAI nodes (`Generate Video Captions`, `Generate Image Prompts`, `Generate Script`, `Generate Description...`) if desired.
    *   Set the Discord Webhook URL in the `Notify me on Discord` node.
5.  **Enable Google APIs:** Ensure Google Drive API and Google Sheets API are enabled in your Google Cloud Project.

### Requirements

*   **Accounts:** n8n, Google (Sheets, Drive, Cloud Platform), OpenAI, PiAPI, ElevenLabs, Creatomate, [The social media api Upload-Post](https://www.upload-post.com), Discord.
*   **API Keys & Credentials:** API Keys for OpenAI, PiAPI, ElevenLabs, Creatomate, upload-post.com. Google Cloud OAuth 2.0 Credentials. Discord Webhook URL.
*   **Templates:** A configured Google Sheet based on the template, a configured Creatomate video template.
*   **(Potentially) Paid Plans:** Some services (OpenAI, PiAPI, Creatomate, upload-post.com) may require paid plans depending on usage volume after free trials/credits are exhausted.

Use this template to build a powerful, automated video content factory, scaling your production and distribution efforts across the social media landscape.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Read Binary File, Write Binary File, Google Drive, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
