# 🎬 Create viral videos from reference images with VIDU & upload to YouTube/TikTok

> ⚡ **1,112 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the process of creating **short videos from multiple image references** (up to 7 images). It uses "Vidu Reference to Video" model, a video generation API to transform a user-provided prompt and image set into a consistent, **AI-generated video**.

This workflow automates the process of generating AI-powered videos from a set of reference images and then uploading them to **TikTok** and **Youtube**. The process is initiated via a user-friendly web form.

---

### Advantages

* ✅ **Consistent Video Creation**: Uses multiple reference images to maintain subject consistency across frames.
* ✅ **Easy Input**: Just a simple form with prompt + image URLs.
* ✅ **Automation**: No manual waiting—workflow checks status until video is ready.
* ✅ **SEO Optimization**: Automatically generates a catchy, optimized YouTube title using AI.
* ✅ **Multi-Platform Publishing**: Uploads directly to Google Drive, YouTube, and TikTok in one flow.
* ✅ **Time Saving**: Removes repetitive tasks of video generation, download, and manual uploading.
* ✅ **Scalable**: Can run periodically or on-demand, perfect for content creators and marketing teams.
* ✅ **UGC & Social Media Ready**: Designed for creating **viral short videos** optimized for platforms like TikTok and YouTube Shorts.

---
### **How It Works**

1.  **Form Trigger:** A user submits a web form with two key pieces of information: a text `Prompt` describing the desired video and a list of `Reference images` (URLs separated by commas or new lines).
2.  **Data Processing:** The workflow processes the submitted image URLs, converting them from a text string into a proper array format for the AI API.
3.  **AI Video Generation:** The processed data (prompt and image array) is sent to the **Fal.ai VIDU** API endpoint (`reference-to-video`) to start the video generation job. This node returns a `request_id`.
4.  **Status Polling:** The workflow enters a loop where it periodically checks the status of the generation job using the `request_id`. It waits for 60 seconds and then checks if the status is `"COMPLETED"`. If not, it waits and checks again.
5.  **Result Retrieval:** Once the video is ready, the workflow fetches the URL of the generated video file.
6.  **Title Generation:** Simultaneously, the original user prompt is sent to an AI model (GPT-4o-mini via OpenRouter) to generate an optimized, engaging title for the social media post.
7.  **Upload & Distribution:**
    *   The video file is downloaded from the generated URL.
    *   A copy is saved to a specified Google Drive folder for storage.
    *   The video, along with the AI-generated title, is automatically uploaded to **YouTube** and **TikTok** via the **Upload-Post.com** API service.

---

### **Set Up Steps**

This workflow requires configuration and API keys from three external services to function correctly.

**Step 1: Configure Fal.ai for Video Generation**
1.  Create an account and obtain your API key.
2.  In the **"Create Video"** HTTP node, edit the "Header Auth" credentials.
3.  Set the following values:
    *   **Name:** `Authorization`
    *   **Value:** `Key YOUR_FAL_API_KEY` (replace `YOUR_FAL_API_KEY` with your actual key)

**Step 2: Configure Upload-Post.com for Social Media Uploads**
1.  Get an API key from your [Upload-Post Manage Api Keys](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app) dashboard (10 free uploads per month).
2.  In both the **"HTTP Request"** (YouTube) and **"Upload on TikTok"** nodes, edit their "Header Auth" credentials.
3.  Set the following values:
    *   **Name:** `Authorization`
    *   **Value:** `Apikey YOUR_UPLOAD_POST_API_KEY` (replace `YOUR_UPLOAD_POST_API_KEY` with your actual key)
4.  **Crucial:** In the body parameters of both upload nodes, find the `user` field and replace `YOUR_USERNAME` with the exact name of the social media profile you configured on Upload-Post.com (e.g., `my_youtube_channel`).

**Step 3: Configure Google Drive (Optional Storage)**
The **"Upload Video"** node is pre-configured to save the video to a Google Drive folder named "Fal.run". Ensure your Google Drive credentials in n8n are valid and that you have access to this folder, or change the `folderId` parameter to your desired destination.

**Step 4: Configure AI for Title Generation**
The **"Generate title"** node uses OpenAI to access the `gpt-5-mini` model..


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
