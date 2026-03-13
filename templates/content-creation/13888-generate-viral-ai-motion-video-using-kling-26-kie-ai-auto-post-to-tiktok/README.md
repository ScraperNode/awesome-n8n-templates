# 🎬 Generate Viral AI Motion Video 🤣🤖 using Kling 2.6 Kie AI & Auto-Post to TikTok

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

This workflow automates the creation and publishing of **AI-generated motion videos for TikTok**. The process starts with an image and a reference motion video. 

Using the **Kling v2.6 Motion Control** AI model, the workflow generates a new animated video where the character from the image replicates the movements from the reference video. 

Once the AI-generated video is produced, the workflow automatically retrieves the result, uploads it to Postiz, and publishes it directly to TikTok with a predefined caption.

Start: [Watch the starting video](https://iframe.mediadelivery.net/play/580928/707dae0c-0eac-42be-88ea-0210a5c3c906)
Result: [Watch the final video](https://iframe.mediadelivery.net/play/580928/7019158a-e731-4d10-9fea-e5b81c3c634b)

---

### Key Advantages

#### 1. ✅ Full Automation

The workflow automates the entire pipeline from AI video generation to social media publishing, eliminating manual steps.

#### 2. ✅ AI-Powered Content Creation

By leveraging **Kling Motion Control**, the system creates dynamic animated content from a static image and motion reference video.

#### 3. ✅ Scalable Content Production

This setup enables rapid production of multiple AI-generated videos, making it ideal for automated social media content strategies.

#### 4. ✅ Efficient Asynchronous Processing

The workflow uses webhooks and wait nodes to handle long-running AI jobs efficiently without blocking the workflow.

#### 5. ✅ Seamless Social Media Integration

Direct integration with **Postiz and TikTok** allows automatic publishing, streamlining the content distribution process.

#### 6. ✅ Modular and Customizable

Each step (AI generation, parsing, upload, publishing) is modular, allowing easy modification for:

* different AI models
* other social platforms
* different prompts or media inputs

#### 7. ✅ Reduced Manual Work

Content creators can generate and publish AI-based videos with a single workflow execution.


---

### How it works

1.  **Trigger & Input:** The workflow is started manually. The initial "Set params" node defines the key inputs: an `image_url`, a `video_url`, and a `tiktok_desc` (caption).
2.  **AI Video Generation:**
    *   The **"Run Kling v2.6 Motion Control"** node sends a request to the Kie.ai API. It instructs the AI to make the character in the static image follow the movements from the reference video. Crucially, it includes a `callBackUrl` (the n8n webhook URL from the Wait node) so the API can notify the workflow when the video is ready.
    *   The workflow then pauses at the **"Wait"** node, holding its execution until it receives the callback from Kie.ai.
3.  **Retrieve Result:** Once the AI finishes processing, it sends a request to the "Wait" node's webhook, which resumes the workflow. The **"Result"** node then fetches the details of the completed job, including a link to the newly generated video (`resultUrl`).
4.  **Process for Posting:**
    *   The **"Parsing"** node extracts the `resultUrl` from the API's JSON response.
    *   A **"Get ResulUrl"** Code node formats this data to be passed to the next step.
    *   The **"Get File Video"** node uses the `resultUrl` to download the actual video file from the temporary URL.
5.  **Upload & Schedule:**
    *   The **"Upload Video to Postiz"** node takes the downloaded video file and uploads it to the Postiz platform using a multipart/form-data request.
    *   The final **"TikTok"** (Postiz) node creates a new post. It uses the video ID returned from the upload and the `tiktok_desc` from the initial parameters to schedule the post to the specified TikTok integration.

---

### Setup steps

To make this workflow work for you, you need to configure the following:

1.  **Set Input Parameters:** In the **"Set params"** node, replace the example `image_url`, `video_url`, and `tiktok_desc` with your own values.
    *   `image_url`: Direct URL to the static character image.
    *   `video_url`: Direct URL to the reference movement video.
    *   `tiktok_desc`: The caption you want for the final TikTok post.
2.  **Kie.ai API Credentials:**
    *   Locate the **"Run Kling v2.6 Motion Control"** and **"Result"** nodes.
    *   You will need to provide credentials for **`httpBearerAuth`**.
    *   Replace the existing credential ID  with your own [Kie.ai API credentials](https://kie.ai?ref=188b79f5cb949c9e875357ac098e1ff5). Ensure the credential is configured with a valid API Bearer Token.
3.  **Postiz API Credentials:**
    *   Locate the **"Upload Video to Postiz"** node.
    *   Provide credentials for **`httpHeaderAuth`**.
    *   Replace the existing credential ID with your own [Postiz API key](https://affiliate.postiz.com/n3witalia). This key must be set as a header for authentication.
4.  **Postiz Integration ID:**
    *   In the final **"TikTok"** (Postiz) node, look for the field `integrationId` inside the `posts.post.value` object.
    *   Replace the placeholder `"XXX"` with the actual Integration ID for your TikTok account from Postiz.

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
