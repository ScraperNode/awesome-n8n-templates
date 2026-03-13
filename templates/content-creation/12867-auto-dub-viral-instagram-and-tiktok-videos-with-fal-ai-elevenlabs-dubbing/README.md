# 🎬 Auto-dub Viral Instagram and TikTok videos 📲 with Fal AI ElevenLabs dubbing 🎙️

> ⚡ **155 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

This workflow automates the process of **dubbing videos** using Fal AI's **ElevenLabs** integration and publishing them directly to **Instagram and TikTok**.

This workflow is ideal for social media managers, content creators, and marketing teams who need to **quickly localize and publish video content** across multiple social platforms like Instagram and TikTok.

Using this workflow, you can take a video in one language (e.g., English) and automatically generate a dubbed version in another language (e.g., Spanish) for publishing on Instagram and TikTok.

The workflow supports multiple target languages through ElevenLabs, including but not limited to: English (en), Spanish (es), Italian (it), French (fr), German (de), and many others.

---

### Key Advantages
1. ✅ **Streamlined Social Media Localization**  
   Automates the entire dubbing and publishing process specifically for Instagram and TikTok, two of the most popular social platforms.

2. ✅ **Rapid Content Adaptation**  
   Quickly adapt existing video content for different language audiences without manual editing or voiceover work.

3. ✅ **Dual-Platform Publishing**  
   Simultaneously publishes dubbed content to both Instagram and TikTok from a single workflow execution.

4. ✅ **Cost-Effective Content Repurposing**  
   Maximizes the value of existing video content by making it accessible to international audiences with minimal effort.

5. ✅ **Consistent Brand Messaging**  
   Maintains consistent audio quality and tone across different language versions using ElevenLabs' professional dubbing technology.

6. ✅ **Time-Saving Automation**  
   Eliminates the need for separate dubbing, editing, and publishing steps—everything happens in one automated sequence.

---

### How It Works
1. The workflow begins with a manual trigger that sets input parameters: video URL and target language for dubbing (e.g., `es` for Spanish).
2. The video is sent to Fal AI's ElevenLabs Dubbing API, which processes the audio dubbing in the specified target language.
3. The workflow waits 30 seconds to allow initial processing time.
4. It then checks the dubbing status and continues waiting if not completed, or proceeds if ready.
5. Once dubbing is complete, it retrieves the final dubbed video URL.
6. The dubbed video file is downloaded.
7. The video is processed in parallel:
   - Uploaded to TikTok via Upload-Post.com API
   - Uploaded to Postiz for Instagram publishing
8. Finally, the workflow triggers Postiz to publish the content to Instagram with prepared metadata.

## Setup Steps
1. **Configure Input Parameters**  
   In the *Set params* node, define:
   - `video_url`: Direct URL to the source video
   - `target_audio`: Language code (e.g., `en`, `es`, `it`) for dubbing

2. **Set Up Credentials**  
   Ensure the following credentials are configured in n8n:
   - Fal AI API (for ElevenLabs dubbing)
   - [Postiz API](https://affiliate.postiz.com/n3witalia)  (for Instagram publishing)
   - [Upload-Post API](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app) (for TikTok uploading)

3. **Customize Platform Settings**
   - For TikTok: Update `YOUR_USERNAME` and title in the Upload to TikTok node
   - For Instagram: Configure channel ID and content in the Postiz nodes

4. **Adjust Wait Time if Needed**  
   Modify the 30-second wait period based on your typical video length and processing requirements.

5. **Test the Workflow**  
   Activate the workflow in n8n, click "Execute workflow," and monitor the execution to ensure all API connections and uploads work correctly.

---

### Ideal Use Cases
- Localizing promotional videos for different regional markets
- Creating multilingual versions of educational or tutorial content
- Repurposing successful video content for international audiences
- Maintaining consistent social media presence across language-specific accounts

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
