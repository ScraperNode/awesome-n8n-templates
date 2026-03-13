# 🎬 Create Viral 😎 AI celebrity selfies 📸 with Nano Banana Pro & upload to Instagram

> ⚡ **1,026 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This workflow automates the creation of **AI-generated viral selfie images with celebrities** using **Nano Banana Pro Edit** via [RunPod](https://get.runpod.io/n3witalia), generates engaging social media captions, and publishes the content to **Instagram** via [Postiz](https://affiliate.postiz.com/n3witalia). It starts with a form submission where the user provides an image URL, a custom prompt, and an aspect ratio. 

| START | RESULT |
|------|--------|
| ![image](https://n3wstorage.b-cdn.net/n3witalia/result3.png) | ![image](https://n3wstorage.b-cdn.net/n3witalia/result_lbj.jpeg) |


---

### Key Advantages

#### 1. ✅ Full Automation, Zero Manual Effort

From image generation to caption writing and publishing, the entire process is automated. This drastically reduces production time and eliminates repetitive manual tasks.

#### 2. ✅ Scalable Content Creation

The workflow can handle unlimited submissions, making it ideal for:

* Creators
* Agencies
* Growth teams
* SaaS products offering AI-generated content

#### 3. ✅ Consistent Viral Quality

By using a dedicated AI content agent with strict guidelines, every post is:

* Optimized for engagement
* Consistent in tone and quality
* Designed to maximize comments, shares, and saves

#### 4. ✅ No Technical Skills Required for End Users

The form-based entry point allows anyone to generate high-quality, celebrity-style content without understanding AI, APIs, or automation.

#### 5. ✅ Multi-Tool Integration in One Pipeline

The workflow seamlessly connects:

* AI image generation (RunPod)
* AI content intelligence (Google Gemini)
* Asset storage (Google Drive)
* Social media distribution (Postiz)

#### 6. ✅ Brand-Safe and Platform-Native Output

The captions are written to feel human and authentic, avoiding:

* Obvious AI language
* Overuse of emojis
* Mentions of AI generation
  This increases trust and platform compatibility.

#### 7. ✅ Perfect for Growth and Monetization

This workflow is ideal for:

* Viral growth experiments
* Personal brand scaling
* Automated influencer-style content
* AI-powered SaaS or lead magnets

---



### How it works
The workflow then:

1. Sends the image and prompt to RunPod’s Nano Banana Pro Edit API for AI image generation.
2. Periodically checks the generation status until it is completed.
3. Once the image is ready, it is downloaded and analyzed by Google Gemini to generate a viral-ready Instagram caption and hashtags.
4. The final image is uploaded to Google Drive and to Postiz for social media publishing.
5. The caption and image are combined and scheduled for posting on Instagram through the Postiz integration.

The process includes conditional logic, waiting intervals, and error handling to ensure reliable execution from input to publication.

---

### Set up steps
To use this workflow in n8n:

1. **Configure credentials**:
   - Add [RunPod API](https://get.runpod.io/n3witalia) credentials under `httpBearerAuth` named “Runpods”.
   - Set up Google Gemini (PaLM) API credentials for caption generation.
   - Add [Postiz API](https://affiliate.postiz.com/n3witalia) credentials for social media posting.
   - Configure Google Drive OAuth2 credentials for image backup.

2. **Prepare nodes**:
   - Ensure the Form Trigger node is properly set up with the required fields: `IMAGE_URL`, `PROMPT`, and `FORMAT`.
   - Update the RunPod API endpoints in the “Generate selfie” and “Get status clip” nodes if needed.
   - Verify the Google Drive folder ID in the “Upload file” node.
   - Replace `XXX` in the “Upload to Social” node with a valid Postiz integration ID.

3. **Test the flow**:
   - Use the pinned test data in the “On form submission” node to simulate a form entry.
   - Activate the workflow and submit the form to trigger the process.
   - Monitor execution in n8n’s workflow view to ensure all nodes run successfully.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
