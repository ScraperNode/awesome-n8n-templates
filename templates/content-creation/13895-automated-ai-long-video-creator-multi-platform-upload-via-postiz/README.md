# 🎬 Automated AI Long Video Creator 🎞️🍿 & Multi-Platform Upload via Postiz

> ⚡ **79 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the **creation of long AI-generated videos from prompts**, merges the generated clips into a single video, and automatically distributes the final content across multiple platforms.

The process starts with a **Google Sheet that acts as the control panel** for the workflow. Each row in the sheet contains a prompt, the duration of the clip, and a starting frame. The workflow reads this data and generates video clips sequentially.

Using the **RunPod WAN 2.5 video generation API**, the workflow creates individual video segments based on the prompt and input image. Each segment is then stored and tracked in the spreadsheet.

Once all clips are generated, the workflow uses the **Fal.run FFmpeg API** to merge them into a single long video. After merging, the final video is retrieved automatically.

The workflow also extracts the **last frame of each generated clip** to use as the starting frame for the next clip, ensuring smooth visual continuity between scenes.

Finally, the completed video is automatically:

* Uploaded to **Google Drive** for storage
* Published to **YouTube**
* Uploaded to **Postiz**, which distributes it to social platforms such as TikTok, Instagram, Facebook, X, and YouTube

This creates a fully automated pipeline that transforms prompts in a spreadsheet into a finished long-form video distributed across multiple platforms.

---

### Key Advantages

#### 1. ✅ Fully Automated Video Production

The workflow automates the entire process of generating, assembling, and publishing videos, eliminating manual editing and upload steps.

#### 2. ✅ Spreadsheet-Based Control

Using Google Sheets as the input system makes the workflow easy to manage and scalable. Users can create or modify video scenes simply by editing rows in the sheet.

#### 3. ✅ Scalable AI Video Generation

The workflow can generate multiple clips and combine them into longer videos, enabling the creation of long-form content from short AI-generated segments.

#### 4. ✅ Seamless Scene Continuity

By extracting the last frame of each clip and using it as the starting frame for the next scene, the workflow maintains visual continuity between segments.

#### 5. ✅ Automatic Video Merging

The Fal.run FFmpeg API merges all generated clips into a single final video without requiring external editing tools.

#### 6. ✅ Multi-Platform Distribution

Once the video is completed, it is automatically uploaded and published to multiple platforms, significantly reducing the time needed for content distribution.

#### 7. ✅ Centralized Storage

The final video is saved to Google Drive, providing organized and secure storage for the generated content.

#### 8. ✅ Error Handling and Status Monitoring

The workflow continuously checks the status of generation and processing tasks, waiting and retrying until the job is completed.

---

### How it works

This workflow automates the creation of long videos by generating multiple clips from a Google Sheet and merging them together. Here's the process:

1. **Trigger & Data Loading**: When manually executed, the workflow reads a Google Sheet containing video generation parameters (prompts, durations, and starting images).

2. **Video Generation Loop**: For each row marked for processing, it:
   - Sends the prompt and parameters to RunPod's WAN 2.5 video generation API
   - Waits for completion (with status checking every 60 seconds)
   - Retrieves the generated video URL and updates the Google Sheet

3. **Frame Extraction**: After each video is generated, it extracts the last frame using Fal.ai's FFmpeg API and updates the next row's starting image (creating visual continuity).

4. **Video Merging**: Once all individual clips are generated (marked with "x" in the MERGE column), the workflow:
   - Collects all video URLs
   - Sends them to Fal.ai's FFmpeg merge API
   - Polls for completion every 60 seconds
   - Retrieves the final merged video

5. **Distribution**: The final long video is:
   - Uploaded to Google Drive
   - Posted to YouTube via Upload-Post API
   - Posted to multiple social platforms (TikTok, Instagram, Facebook, X) via Postiz

---

### Setup steps

1. **Google Sheet Setup**:
   - Clone [this template sheet](https://docs.google.com/spreadsheets/d/1MisBkHc1RmsYit1ndaPS7oOvSQV1VBMW7nyehTuiRQs/edit?usp=sharing)
   - Update the sheet ID in all Google Sheets nodes
   - Fill in columns: START (initial image URL), PROMPT, DURATION (4, 6, or 8 seconds)
   - Mark rows to merge with "x" in the MERGE column

2. **API Credentials Required**:
   - **Google Sheets OAuth2**: For reading/writing spreadsheet data
   - **Google Drive OAuth2**: For uploading final videos
   - **Fal.ai API Key**: For frame extraction and video merging
   - **RunPod API Key**: For WAN 2.5 video generation
   - **Upload-Post API Key**: For YouTube uploads
   - **Postiz API Key**: For social media posting

3. **Configure Nodes**:
   - Update YOUR_USERNAME in the "Upload to Youtube" node
   - Set channel IDs and titles in the "Upload to Social" node (integrationId, content)
   - Verify folder IDs in Google Drive nodes

4. **Test**: Run the workflow manually to generate your first long video sequence
---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
