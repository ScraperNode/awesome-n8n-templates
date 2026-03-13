# 🎬 Transform images into AI videos with MiniMax Hailuo 02. Upload to YouTube/TikTok

> ⚡ **3,601 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This automated workflow takes a static image and a textual prompt and transforms them into an animated video using the **MiniMax Hailuo 02** model. It then uploads the generated video to **YouTube and TikTok**, and updates a Google Sheet with relevant links and metadata.


---

### Benefits of This Workflow

* **Fully Automated Pipeline**: From prompt to video to social media publication — all without manual intervention.
* **Scalable Content Creation**: Generate and distribute dozens of videos per hour with minimal human input.
* **Cross-Platform Posting**: Automatically pushes content to **YouTube and TikTok** simultaneously.
* **SEO Optimization**: Uses AI to generate catchy, keyword-rich video titles that improve visibility.
* **Easy Integration**: Based on Google Sheets for input/output, making it accessible to non-technical users.
* **Time-Efficient**: Batch-processing enabled with scheduled runs every few minutes.
* **Customizable Duration**: Video duration can be adjusted (default is 6 seconds).

---

### **How It Works**  
1. **Trigger & Data Fetching**:  
   - The workflow starts either manually or via a scheduled trigger (e.g., every 5 minutes).  
   - It checks a Google Sheet for new entries where the "VIDEO" column is empty, indicating pending video generation tasks.  

2. **Video Creation**:  
   - For each entry, the workflow extracts the **image URL** and **prompt** from the Google Sheet.  
   - It sends these inputs to the **MiniMax Hailuo 02** to generate a video. The API processes the image and prompt, optimizes the prompt, and creates a short video (default: 6 seconds).  

3. **Status Monitoring**:  
   - The workflow polls the API every 60 seconds to check if the video is **COMPLETED**.  
   - Once ready, it retrieves the video URL and uploads the file to **Google Drive**.  

4. **YouTube & TikTok Upload**:  
   - The video is sent to **YouTube** and **TikTok** via the Upload-Post.com API (The free plan allows uploads to all platforms except TikTok. To enable, upgrade to a paid plan.).  
   - A GPT-generated SEO-optimized title is created for the video.  
   - The Google Sheet is updated with the video URL and YouTube link.  


---

### **Set Up Steps**  
1. **Google Sheet Setup**:  
   - Create a Google Sheet with columns: **IMAGE** (input image URL), **PROMPT** (video description), **VIDEO** (auto-filled), and **YOUTUBE_URL** (auto-filled).  
   - Link the sheet to the workflow using the **Google Sheets node**.  

2. **API Keys**:  
   - Obtain a **fal.run API key** (for MiniMax Hailuo) and configure the "Authorization" header in the "Create video" node.  
   - Get an **[Upload-Post.com API key](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app)** (10 free uploads/month) and set it in the "Upload on YouTube/TikTok" nodes.  

3. **Workflow Configuration**:  
   - Replace `YOUR_USERNAME` in the Upload-Post nodes with your profile name (e.g., "test1").  
   - Adjust the video **duration** (6 or 10 seconds) in the "Create video" node.  
   - Set the **Schedule Trigger** interval (e.g., 5 minutes) to automate checks for new tasks.  

4. **Execution**:  
   - Run the workflow manually or let the scheduler process new rows automatically.  
   - The system handles video generation, uploads, and Google Sheet updates end-to-end.  

---  


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
