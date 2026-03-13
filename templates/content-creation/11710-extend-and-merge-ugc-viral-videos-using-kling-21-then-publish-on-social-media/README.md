# 🎬 Extend and merge UGC viral videos using Kling 2.1, then publish on social media

> ⚡ **1,344 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the full pipeline for **extending short Viral UGC-style videos** using AI, merging them, and finally publishing the output to cloud storage or **social media platforms** (*TikTok, Instagram, Facebook, Linkedin, X, and YouTube*). It integrates multiple external APIs (Fal.ai, Runpod/Kling 2.1, Postiz, Upload-Post, Google Sheets, Google Drive) to create a smooth end-to-end video-generation system.

---

### **Key Advantages**

#### **1. ✅ Full End-to-End Automation**

The workflow covers the entire process:

1. Read inputs
2. Generate extended clips
3. Merge them
4. Save outputs
5. Publish on social platforms

No manual intervention required after starting the workflow.

#### **2. ✅ AI-Powered Video Extension (Kling 2.1 or other models like Veo 3.1 or Sora 2)**

The system uses Kling 2.1 (Kling 2.1 or other models like Veo 3.1 or Sora 2) to extend short videos realistically, enabling:

* Longer UGC clips
* Consistent cinematic style
* Smooth transitions based on extracted frames

Ideal for viral social media content.



#### **3. ✅ Smart Integration with Google Sheets**

The spreadsheet becomes a **control panel**:

* Add new videos to extend
* Control merging
* Automatically store URLs and results

This makes the system user-friendly even for non-technical operators.



#### **4. ✅ Robust Asynchronous Job Handling**

Every external API includes:

* Status checks
* Waiting loops
* Error prevention steps

This ensures reliability when working with long-running AI processes.



#### **5. ✅ Automatic Merging and Publishing**

Once videos are generated, the workflow:

* Merges them in the correct order
* Uploads them to Google Drive
* Posts them automatically to selected social platforms

This drastically reduces time required for content production and distribution.



#### **6. ✅ Highly Scalable and Customizable**

Because it is built in n8n:

* You can add more APIs
* You can add editing steps
* You can connect custom triggers (e.g., Airtable, webhooks, Shopify, etc.)
* You can fully automate your video-production pipeline


---

### **How It Works**
This workflow automates the process of extending and merging videos using AI-generated content, then publishing the final result to social media platforms. The process consists of five main stages:

- **Data Input & Frame Extraction**  
  The workflow starts by reading video and prompt data from a Google Sheet. It extracts the last frame from the input video using Fal.ai’s FFmpeg API.

- **AI Video Generation**  
  The extracted frame is sent to RunPod’s Kling 2.1 AI model to generate a new video clip based on the provided prompt and desired duration.

- **Video Merging**  
  Once the AI-generated clip is ready, it is merged with the original video using Fal.ai’s FFmpeg merge functionality to create a seamless extended video.

- **Storage & Publishing**  
  The final merged video is uploaded to Google Drive and simultaneously distributed to social media platforms via:
  - YouTube (via Upload-Post)
  - TikTok, Instagram, Facebook, X, and YouTube (via Postiz)

- **Progress Tracking**  
  Throughout the process, the Google Sheet is updated with the status, video URLs, and completion markers to keep track of each step.

---

### **Set Up Steps**
To configure this workflow, follow these steps:

1. **Prepare the Google Sheet**  
   - Use the provided template or clone [this sheet](https://docs.google.com/spreadsheets/d/14zlCDJFLrJIhcq7HwFGdKAHIwvjmkwP-FSTHmLTj0ow/edit).
   - Fill in the `START` (video URL), `PROMPT` (AI prompt), and `DURATION` (in seconds) columns.

2. **Configure Fal.ai API for Frame Extraction & Merging**  
   - Create an account at [fal.ai](https://fal.ai/).
   - Obtain your API key.
   - In the nodes **“Extract last frame”**, **“Merge Videos”**, and related status nodes, set up **HTTP Header Authentication** with:
     - Name: `Authorization`
     - Value: `Key YOUR_API_KEY`

3. **Set Up RunPod API for AI Video Generation**  
   - Sign up at [RunPod](https://get.runpod.io/n3witalia) and get your API key.
   - In the **“Generate clip”** node, configure **HTTP Bearer Authentication** with:
     - Value: `Bearer YOUR_RUNPOD_API_KEY`

4. **Configure Social Media Publishing**  
   - **For YouTube**:  
     Create a free account at [Upload-Post](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app) and set your `YOUR_USERNAME` and `TITLE` in the **“Upload to Youtube”** node.
   - **For Multi-Platform Posting**:  
     Sign up at [Postiz](https://postiz.com/?ref=n3witalia) and configure your `Channel_ID` and `TITLE` in the **“Upload to Social”** node.

5. **Connect Google Services**  
   - Set up Google Sheets and Google Drive OAuth2 credentials in their respective nodes to allow reading from and writing to the sheet and uploading videos to Drive.

6. **Execute the Workflow**  
   - Once all credentials are set, trigger the workflow manually via the **“When clicking ‘Execute workflow’”** node.
   - The process will run autonomously, updating the sheet and publishing the final video upon completion.
   - 
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
