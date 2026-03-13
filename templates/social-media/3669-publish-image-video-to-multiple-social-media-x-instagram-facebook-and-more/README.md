# 📱 Publish image & video to multiple social media (X, Instagram, Facebook and more)

> ⚡ **32,493 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

This Workflow streamlines the process of publishing posts (**image or video**) to multiple social media platforms using a unified form and a third-party API service called Upload-Post.

The automation starts with a form trigger, allowing users to submit content (text and media) through a simple frontend interface. Users select the platform (**Instagram, LinkedIn, Facebook, X, TikTok, Threads**), choose the profile name, write a caption, and upload a photo or video.

---

### **How It Works**  
Automates cross-platform social media posting via Upload-Post, handling both **images** (JPEG) and **videos** (MP4). Here’s the process:  

- **Trigger**:  
  - A **form submission** captures user inputs:  
    - **Platform** (Instagram, LinkedIn, Facebook, X, TikTok, Threads).  
    - **Account** (pre-configured profile name).  
    - **Caption** and **file** (image/video).  
    - Optional **Facebook Page ID** for targeted posting.  

- **Routing**:  
  - The **"Video or Photo?"** Switch node checks the file’s MIME type:  
    - **Image**: Routes to the **"Post photo"** HTTP node (uploads via `upload_photos` API).  
    - **Video**: Routes to the **"Post video"** HTTP node (uploads via `upload` API).  

- **API Integration**:  
  - Both nodes send data to Upload-Post.com’s API, including:  
    - Caption, account name, platform, and file binary.  
    - Facebook ID (if provided).  

- **Success/Failure Handling**:  
  - The **"Result Photo/Video"** nodes parse the API response.  

---

### **Setup Steps**  

##### **Prerequisites**:  
- **Upload-Post.com API Key**:  
  - Get it from the [API Keys dashboard](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app).  
  - Free tier allows **10 uploads/month**.  

##### **Configuration**:  
1. **API Authentication**:  
   - In the **HTTP Request nodes** (`Post photo`/`Post video`), set the `Authorization` header:  
     - `Name`: `Authorization`  
     - `Value`: `Apikey YOUR_API_KEY_HERE`.  

2. **Form Customization**:  
   - Adjust the **"On form submission"** node to:  
     - Add/remove platforms (e.g., YouTube when approved).  
     - Modify file type restrictions (default: `.jpg`, `.mp4`).  

3. **Account Mapping**:  
   - Ensure the **"Account"** field matches profiles configured in Upload-Post.com (e.g., `test1`, `test2`).  

4. **Facebook Page Integration**:  
   - Optional: Add a **Facebook Page ID** field for page-specific posts.  

5. **Testing**:  
   - Submit test forms with images/videos.  
   - Verify API responses and success/failure messages.  

##### **Optional Enhancements**:  
- Add **error logging** (e.g., save failed attempts to a database).  
- Extend to **YouTube** once API support is confirmed.  

---

### **Key Features**:  
- **Multi-Platform**: Post to 6+ social networks simultaneously.  
- **User-Friendly**: Simple form interface for non-technical users.  
- **Error Handling**: Clear feedback for success/failure cases.  

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
