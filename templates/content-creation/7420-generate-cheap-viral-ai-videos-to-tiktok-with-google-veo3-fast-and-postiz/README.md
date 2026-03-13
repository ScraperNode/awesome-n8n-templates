# 🎬 Generate cheap viral AI videos to TikTok with Google Veo3 fast and Postiz

> ⚡ **4,083 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automates the entire process of generating short AI videos using **Google Veo3 Fast**, enhancing them with **SEO-optimized titles**, and uploading them directly to **TikTok** via [Postiz](https://postiz.com/?ref=n3witalia), all triggered from a central **Google Sheet**.

This setup ensures a seamless pipeline from video creation to TikTok upload, with minimal manual intervention.

---

### **Benefits**

* **Full automation** from prompt input to social media publishing.
* **Cheaper video generation** using Veo3 Fast vs traditional AI video tools.
* **Centralized management** through Google Sheets – no coding required for end users.
* **SEO-enhanced titles** with GPT-4o to boost engagement.
* **Scheduled or manual triggering**, perfect for batch operations.
* **No manual uploads** – integration with Postiz means content is published hands-free.

---

### **How It Works**  
This workflow automates the process of generating AI videos using **Google Veo3 Fast**, saving them to **Google Drive**, and uploading them to **TikTok** via **Postiz**. Here’s how it functions:  

1. **Trigger**: The workflow can be started manually or scheduled (e.g., every 5 minutes) to check for new video requests in a **Google Sheet**.  
2. **Video Generation**:  
   - The workflow retrieves a video prompt and duration from the Google Sheet.  
   - It sends the prompt to **Google Veo3 Fast** via the Fal.ai API to generate the video.  
   - The system periodically checks the video generation status until it’s completed.  
3. **Post-Processing**:  
   - Once the video is ready, it is downloaded and uploaded to **Google Drive**.  
   - A YouTube-optimized title is generated using **GPT-4o Mini** based on the video prompt.  
4. **TikTok Upload**:  
   - The video is uploaded to **Postiz**, a social media scheduling tool.  
   - Postiz then publishes the video to the connected **TikTok account** with the generated title.  
5. **Tracking**: The Google Sheet is updated with the video URL for record-keeping.  

---

### **Set Up Steps**  
To configure this workflow, follow these steps:  

1. **Prepare the Google Sheet**:  
   - Create a [Google Sheet](https://docs.google.com/spreadsheets/d/1pcoY9N_vQp44NtSRR5eskkL5Qd0N0BGq7Jh_4m-7VEQ/edit?usp=sharing) with columns:  
     - **PROMPT**: Description of the video.  
     - **DURATION**: Length of the video.  
     - **VIDEO**: (Leave empty, auto-filled by the workflow).  

2. **Obtain API Keys**:  
   - Sign up at [Fal.ai](https://fal.ai/) to get an API key for **Google Veo3 Fast**.  
   - Replace `YOURAPIKEY` in the **"Create Video"** node’s HTTP header (`Authorization: Key YOURAPIKEY`).  

3. **Configure Postiz for TikTok**:  
   - Create a [Postiz](https://postiz.com/?ref=n3witalia) account (free trial available).  
   - Connect your **TikTok account** in Postiz and note the **Channel ID**.  
   - Replace `XXX` in the **"TikTok"** node with your TikTok Channel ID.  
   - Set the Postiz API key in the **"Upload Video to Postiz"** node.  

4. **Set Up Google Drive & Sheets Access**:  
   - Ensure the workflow has OAuth access to:  
     - **Google Sheets** (to read/write video data).  
     - **Google Drive** (to store generated videos).  

5. **Schedule or Run Manually**:  
   - The workflow can be triggered manually or scheduled (e.g., every 5 minutes) to process new video requests.  

**Note**: This workflow requires **self-hosted n8n** due to community node dependencies.  


---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
