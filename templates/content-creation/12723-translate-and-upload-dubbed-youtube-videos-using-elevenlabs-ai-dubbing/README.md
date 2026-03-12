# 🎬 Translate 🎙️and upload dubbed YouTube videos 📺 using ElevenLabs AI Dubbing

> ⚡ **350 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the end-to-end process of **video dubbing** using **ElevenLabs**, storage on Google Drive, and publishing on **Youtube**.

This workflow is ideal for creators, agencies, and media teams that need to **TRANSLATE process** and publish large volumes of video content consistently.

For this workflow, I started from my [Italian YouTube Short](https://iframe.mediadelivery.net/play/580928/c445daec-e3fe-4019-b035-58ac3bf386dd), and by applying the same workflow, the result was this [English version](https://iframe.mediadelivery.net/play/580928/2179db44-e7e2-43e6-82a1-13b12e18ba8b).

---

### Key Advantages

#### 1. ✅ Full Automation of Video Localization

The entire process—from video download to AI dubbing and publishing—is automated, eliminating manual steps and reducing human error.

#### 2. ✅ Fast Multilingual Content Scaling

With AI-powered dubbing, the same video can be quickly localized into different languages, enabling global audience expansion.

#### 3. ✅ Efficient Time Management

The workflow intelligently waits for the dubbing process to finish using dynamic timing, avoiding unnecessary retries or failures.

#### 4. ✅ Centralized Content Distribution

A single workflow handles storage, social posting, and YouTube uploads, simplifying content operations across platforms.

#### 5. ✅ Reduced Operational Costs

Automating dubbing and publishing significantly lowers costs compared to manual voiceovers, video editing, and uploads.

#### 6. ✅ Easy Customization & Reusability

Parameters like video URL, language, title, and platform can be easily changed, making the workflow reusable for different projects or clients.


---

### **How It Works**

1. The workflow begins with a manual trigger that sets input parameters: a video URL and the target language for dubbing (e.g., `en` for English).
2. The video is fetched from the provided URL via an HTTP request.
3. The video file is sent to the **ElevenLabs Dubbing API**, which initiates audio dubbing in the specified target language.
4. The workflow then waits for a calculated duration (video length + 120 seconds) to allow the dubbing process to complete.
5. After the wait, it checks the dubbing status using the `dubbing_id` and retrieves the final dubbed audio file.
6. The dubbed video is then processed in parallel:
   - Uploaded to **Google Drive** in a designated folder.
   - Uploaded to **Postiz** for social media management.
   - Uploaded via **Upload-Post.com API** for YouTube publishing.
7. Finally, the workflow triggers a **Postiz** node to schedule or publish the content to YouTube with the prepared metadata.

---

### **Set Up Steps**

1. **Configure Input Parameters**  
   In the *Set params* node, define:
   - `video_url`: Direct URL to the source video.
   - `target_audio`: Language code (e.g., `en`, `es`, `fr`) for dubbing.

2. **Set Up Credentials**  
   Ensure the following credentials are configured in n8n:
   - **[ElevenLabs API](https://try.elevenlabs.io/ahkbf00hocnu)** (for dubbing)
   - **Google Drive OAuth2** (for file upload)
   - **[Postiz API](https://affiliate.postiz.com/n3witalia)** (for social media scheduling)
   - **[Upload-Post.com API](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app)** (for YouTube upload)

3. **Adjust Wait Time**  
   Modify the *Wait* node if needed:  
   `expected_duration_sec + 120` ensures enough time for dubbing. Adjust based on video length.

4. **Customize Upload Destinations**  
   Update folder IDs (Google Drive) and platform settings (Upload-Post.com) as needed.

5. **Set Post Content**  
   In the *Youtube Postiz* and *Youtube Upload-Post* nodes, replace `YOUR_CONTENT` and `YOUR_USERNAME` with actual titles, descriptions, and channel details.

6. **Activate and Test**  
   Activate the workflow in n8n, click *Execute workflow*, and monitor execution for errors. Ensure all API keys and permissions are valid.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
