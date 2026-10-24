# 🎬 AI YouTube Shorts Creator 🤖🎞️: Prompt-Based Clipping, Dubbing & Social Upload

> ⚡ **2,034 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the process of **creating short video clips from a YouTube video based on specific content requested by the user**.

Tis is a complete AI-powered video clipping and distribution system, turning any YouTube video into ready-to-publish short-form content automatically

IMPORTANT:
This workflow is quite complex, it requires integrating multiple APIs including YouTube Transcript, RapidAPI for video download, OpenAI GPT, Fal.run for video processing, Google Drive, FTP, and various social media platforms (TikTok, YouTube, Instagram via Postiz and Upload-Post).

But despite the complexity, the core idea is brilliantly simple and elegant: **you provide a YouTube video and a prompt describing what you're looking for, and the workflow automatically finds the exact moment in the video, extracts that segment, and publishes it as a short clip across all your social channels.**

---

###  Key Benefits

#### 1. ✅ Fully Automated Content Repurposing

No manual editing is required. The workflow automatically extracts and creates clips from long-form content.

#### 2. ✅ AI-Powered Precision

The use of an LLM ensures that the **exact relevant moment** in the video is identified based on meaning, not just keywords.

#### 3. ✅ Multi-Platform Distribution

The workflow doesn’t just create clips — it also **publishes them across multiple platforms** (TikTok, YouTube, Instagram), saving time and effort.

#### 4. ✅ Scalability

You can process multiple videos and prompts, making it ideal for:

* Content creators
* Agencies
* Social media automation

#### 5. ✅ Time Efficiency

What normally takes **30–60 minutes of manual editing** is reduced to a fully automated flow that runs in minutes.

#### 6. ✅ Modular & Extendable

Each step (transcript, AI analysis, trimming, publishing) is modular, so you can:

* Replace APIs
* Add subtitles
* Add captions or branding
* Integrate with other tools

#### 7. ✅ Centralized Media Management

Files are automatically stored in:

* Google Drive
* CDN (FTP)
  This ensures easy access and distribution.

#### 8. ✅ Error Handling & Validation

The workflow checks if the content is found in the transcript and avoids unnecessary processing if not.


---

### How it works

This workflow automates the process of creating a short video clip from a YouTube video based on a specific user prompt. It follows these steps:

1.  **Input & Transcript Retrieval**: The user provides a YouTube Video ID and a search prompt. The workflow first calls the `youtube-transcript.io` API to fetch the video's transcript.
2.  **AI-Powered Time Extraction**: The transcript and the user's prompt are sent to an OpenAI GPT model (gpt-4.1-mini) with a structured prompt. The LLM analyzes the transcript to find the exact segment matching the prompt and outputs a JSON object containing the `start_time`, `end_time`, and `duration` of the matching clip.
3.  **Video Download & Hosting**: Simultaneously, the workflow downloads the full video file using a RapidAPI YouTube downloader. It then uploads this file to an FTP server (BunnyCDN) to generate a public, accessible URL.
4.  **Clip Generation (Fal.run)**: Using the `video_url` (from the FTP server) and the timecodes from the AI, the workflow sends a request to a Fal.run workflow utility (`trim-video`) to process and create the short video clip. It then polls the status endpoint until the processing is completed.
5.  **Clip Distribution**: Once the clip is ready, the workflow downloads the final video file and uploads it to multiple destinations:
    *   **Storage**: Google Drive and an FTP server (BunnyCDN).
    *   **Social Media**: Directly to TikTok, YouTube, and Instagram (via Postiz API) using the `upload-post.com` and Postiz APIs.

---

### Set up steps

To get this workflow running, you need to configure several external API keys and credentials:

1.  **API Keys & Credentials**:
    *   **RapidAPI**: Obtain an API key for the "Youtube Video Fast Downloader 24-7" API. Insert this key in the "Download Video" node's header parameters.
    *   **Youtube Transcript API**: Get an API key from `youtube-transcript.io` and configure it in the "Generate transcript" node's HTTP Header Auth.
    *   **OpenAI**: Add your OpenAI API key in the "OpenAI Chat Model" node credentials.
    *   **Fal.run**: Add your Fal.run API key in the "Video Dubbing" and "Get final video url" nodes under HTTP Header Auth.

2.  **Storage & Hosting**:
    *   **Google Drive**: Set up OAuth2 credentials for Google Drive. The node is configured to upload to a specific folder ID (ensure this folder exists or update the ID).
    *   **FTP [BunnyCDN](https://bunny.net?ref=0pfu5rh4tp)**: Configure FTP credentials (host, username, password) in the "Upload to FTP" and "Upload to FTP server" nodes. The paths are set to `/n3wstorage/test/`. Update these paths and credentials to match your server.

3.  **Social Media Integration** (Optional):
    *   **[Postiz](https://postiz.pro/n3witalia) (Instagram)**: Set up credentials for Postiz in the "Upload to Instagram" node and update the `integrationId` and `content` fields with your specific Instagram account details.
    *   **[Upload-Post.com](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app) (TikTok & Youtube)**: Obtain an API key for `upload-post.com` and configure it in the "Upload to TikTok" and "Upload to Youtube" nodes. You must also update the `title`, `user`, and `platform[]` parameters (currently placeholders like `SET_TITLE` and `YOUR_USERNAME`) with your actual account data.

4.  **Workflow Variables**:
    *   Ensure the "Edit Fields" node contains the correct `VIDEO ID` and `PROMPT` for testing.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, FTP, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
