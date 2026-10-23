# 🎬 Create AI Instagram brand posts with Seedream 4.0, OpenAI and Postiz

> ⚡ **366 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow is designed to fully automate the **creation and publishing** of **Instagram marketing content** by combining AI-powered text generation with **Bytedance Seedream 4.0**, image creation, and social media scheduling into a single streamlined pipeline.

Starting from a simple prompt and reference images, the workflow generates both the visual asset and the caption, then automatically publishes the final content to Instagram. It eliminates the need for manual design, copywriting, and posting, enabling a faster and more scalable content production process.

| BEFORE | AFTER |
|--------|-------|
| ![image](https://file.aiquickdraw.com/custom-page/akr/section-images/1757930552966e7f2on7s.png) | ![image](https://file.aiquickdraw.com/custom-page/akr/section-images/1757930760810t07o2esg.png) |

---


### Key Advantages

#### 1. ✅ End-to-End Automation
   The workflow fully automates the process from initial input (prompt + reference images) to final delivery (Instagram post), eliminating manual content creation and publishing steps.

#### 2. ✅ AI-Powered Content Creation
   It leverages advanced AI models to:

* Generate engaging, platform-optimized Instagram captions
* Create branded visual assets from prompts and reference images
* Ensure content is creative, relevant, and ready for social media

#### 3. ✅ Automated Visual Generation
   Integrates AI image editing (Kie AI Seedream) to automatically produce high-quality, branded visuals without the need for design tools or manual editing.

#### 4. ✅ Social Media Optimization
   Captions are generated with built-in best practices, including:

* Platform-specific tone and structure
* Hashtag optimization for reach and discoverability
* Engagement-driven calls to action

#### 5. ✅ Scalability
   The workflow structure allows easy scaling to generate and publish large volumes of content across campaigns with minimal effort.

#### 6. ✅ Modular & Extensible Design
   Each step (input setup, caption generation, image creation, upload, publishing) is modular, making it easy to:

* Swap AI models
* Add new social platforms
* Extend functionality with additional services

#### 7. ✅ Automated Publishing & Scheduling
   Integration with Postiz enables seamless upload and scheduling of posts directly to Instagram, streamlining the entire publishing pipeline.

#### 8. ✅ Reliability with Asynchronous Processing
   The wait/resume mechanism ensures that image generation tasks are completed before proceeding, improving workflow stability and preventing failures.

#### 9. ✅ Consistency & Brand Alignment
   Using structured prompts and predefined logic ensures all generated content maintains a consistent brand voice, visual identity, and messaging across posts.

---

### **How it works**

This workflow automates the creation of a branded visual + Instagram caption, then posts the result to Instagram via Postiz.

1. **Manual trigger** starts the workflow.
2. **Set params** defines:
   - A creative prompt for generating an images
   - A reference logo URL
3. **Normalize** converts the image URL(s) into a JSON array.
4. The workflow **splits into two parallel branches**:
   - **Image generation branch**:
     - Calls **Kie AI Seedream 4.0 Edit** API with the prompt + image URL(s)
     - Waits for async completion via a webhook
     - Extracts the generated image URL
     - Downloads the image binary
   - **Caption generation branch**:
     - Sends the prompt to an **OpenAI Chat Model** 
     - Uses a **Social Media Manager** LLM chain to produce an Instagram caption with emojis and hashtags
     - Parses the JSON output into a clean caption
5. **Merge** combines the downloaded image and the caption.
6. **Upload IG Image** sends the image to Postiz’s upload endpoint.
7. **Instagram** node schedules/posts the image + caption to Instagram.

---

### **Set up steps**

1. **Add credentials**:
   - `OpenAi account I ` – OpenAI API key
   - `Kie AI` – Token from [Kie.ai API](https://kie.ai?ref=188b79f5cb949c9e875357ac098e1ff5) credentials
   - `Postiz account` – [Postiz API](https://postiz.pro/n3witalia) credentials

2. **Adjust the prompt** (optional):
   - Edit the `Set params` node → `PROMPT` value to change the image generation text

3. **Confirm webhook for async wait**:
   - The `Wait` node uses a resume webhook – ensure the webhook URL is reachable by Kie AI

4. **Validate Postiz integration**:
   - Check that the `Instagram` node has the correct Postiz integration ID 

5. **Activate the workflow** (if scheduling needed, replace `Manual Trigger` with a schedule trigger)

6. **Execute manually** to test the full flow from prompt → image → caption → Instagram post

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
