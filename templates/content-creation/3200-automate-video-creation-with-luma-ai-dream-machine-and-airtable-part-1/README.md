# 🎬 Automate video creation with Luma AI Dream Machine and Airtable (Part 1)

> ⚡ **3,453 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automate Video Creation with Luma AI Dream Machine and Airtable (Part 1)

## **Description**  
This workflow automates video creation using **Luma AI Dream Machine** and **n8n**. It generates dynamic videos based on custom prompts, random camera motion, and predefined settings, then stores the video and thumbnail URLs in Airtable for easy access and tracking. This automation makes it easy to create high-quality videos at scale with minimal effort.

👉 [Airtable Base Template](https://airtable.com/invite/l?inviteId=invOr5AApOnDOtkhi&inviteToken=72a165d2df1c9a1c82a6144effc626f88ad501e9eaab10a1c2f279c3d7a6faff)  
🎥 [Tutorial Video](https://youtu.be/yFCZYGHM9d8)  

---

## **Setup**  
### **1. Luma AI Setup**  
- Create an account with **Luma AI**.  
- Generate an **API key** from Luma AI for authentication.  
- Ensure the API key has permission to create and manage video requests.  

### **2. Airtable Setup**  
Create an Airtable base with the following fields:  
- **Generation ID** – To match incoming webhook data.  
- **Status** – Workflow status (e.g., "Done").  
- **Video URL** – Stores the generated video URL.  
- **Thumbnail URL** – Stores the thumbnail URL.  
- **Prompt** – The video prompt used in the request.  
- **Aspect Ratio** – Defines the video format (e.g., 9:16).  
- **Duration** – Length of the video.  

👉 Use the Airtable template linked above to simplify setup.  

### **3. n8n Setup**  
- Install n8n (local or cloud).  
- Set up Luma AI and Airtable credentials in n8n.  
- Import the workflow and customize the settings based on your needs.  

---

## **How It Works**  
### 1. **Global Settings Configuration**  
The **Set** node defines key settings such as:  
- **Prompt** – Example: "A crocheted parrot in a crocheted pirate outfit swinging on a crocheted perch."  
- **Aspect Ratio** – Example: "9:16"  
- **Loop** – Example: "true"  
- **Duration** – Example: "5 seconds"  
- **Cluster ID** – Used to group related videos for easy tracking.  
- **Callback URL** - Used for the Webhook workflow in Part 2

### 2. **Random Camera Motion**  
- The **Code** node randomly selects a camera motion (e.g., Zoom In, Pan Left, Crane Up) to create dynamic and visually engaging videos.  

### 3. **API Request to Luma AI**  
- The **HTTP Request** node sends a POST request to Luma AI’s API with the following parameters:  
   - **Prompt** – Uses the defined global settings.  
   - **Aspect Ratio** – Matches the target platform (e.g., TikTok or YouTube).  
   - **Duration** – Length of the video.  
   - **Loop** – Determines if the video should loop.  
   - **Callback URL** – Sends a POST response when the video is complete.  

### 4. **Capture API Response**  
- Luma AI sends a POST response to the callback URL once video generation is complete.  
- The response includes:  
   - **Video URL** – Direct link to the video.  
   - **Thumbnail URL** – Link to the video thumbnail.  
   - **Generation ID** – Used to match the record in Airtable.  

### 5. **Store in Airtable**  
- The **Airtable** node updates the record with the video and thumbnail URLs.  
- **Generation ID** is crucial for matching future webhook responses to the correct video record.  

---

## **Why This Workflow is Useful**  
✅ Automates high-quality video creation  
✅ Reduces manual effort by handling prompt generation and API calls  
✅ Random camera motion makes videos more dynamic  
✅ Ensures organized tracking with Airtable  
✅ Scalable – Ideal for automating large-scale content creation  

---

## **Next Steps**  
- **Part 2** – Handling webhook responses and updating Airtable automatically.  
- **Future Enhancements** – Adding more camera motions, multi-platform support, and automated video editing.

## 🔗 Nodes Used

Airtable, HTTP Request, Execution Data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
