# 🎬 Convert Pinterest videos to MP4 with Google Drive storage and email delivery

> ⚡ **221 views** · 🎬 [Content Creation & Video](../)

## Description

### 📥 Pinterest Video to MP4 Downloader with Email Delivery | [RapidAPI Integration](https://rapidapi.com/skdeveloper/api/pinterest-video-downloader6) 

This **n8n workflow** automates downloading Pinterest videos as MP4 files using the [**Pinterest Video Downloader API**](https://rapidapi.com/skdeveloper/api/pinterest-video-downloader6), uploads them to Google Drive, sets public access permissions, and emails the sharable download link to the user.  

---

## 📝 **Node-by-Node Explanation**  

1️⃣ **n8n Form Trigger** → Captures the Pinterest video URL and user email from a web form to start the workflow.  
2️⃣ **HTTP Request** → Sends the submitted URL to **[Pinterest Video Downloader API](https://rapidapi.com/skdeveloper/api/pinterest-video-downloader6)** to process and fetch downloadable MP4 links.  
3️⃣ **Wait** → Pauses the workflow, allowing the API enough time to complete the MP4 conversion.  
4️⃣ **HTTP Downloader** → Downloads the generated MP4 video from the API response.  
5️⃣ **Upload To Google Drive** → Uploads the downloaded MP4 file to Google Drive for cloud storage.  
6️⃣ **Set Permissions Google Drive** → Sets file permissions to allow public access via sharable link.  
7️⃣ **Send Email** → Sends an automated email with the Google Drive download link to the user’s provided email address.  

---

## 💡 **Use Case**  

- Ideal for **social media managers, digital marketers, educators, and content creators** who frequently need to repurpose Pinterest videos for campaigns, training materials, or social posts.  
- Saves time by automating the entire process—from URL submission to receiving a **ready-to-share MP4 link via email**, without any manual downloading, renaming, or cloud uploading.  
- Perfect for agencies handling multiple clients who want to [**streamline bulk Pinterest video downloads**](https://rapidapi.com/skdeveloper/api/pinterest-video-downloader6) and securely distribute them via email in seconds.  

---

## ✅ **Benefits**  

- **Time Efficiency:** Automates video conversion and delivery, eliminating manual steps.  
- **Cloud Storage:** Automatically uploads videos to Google Drive, ensuring secure backup and easy organization.  
- **Public Access Links:** Instantly creates shareable links without extra permission settings.  
- **Seamless Email Delivery:** Sends ready-to-use download links directly to the user’s inbox.  
- **Scalable for Teams:** Supports multiple submissions, making it suitable for agencies managing high download volumes.  
- **Powered by RapidAPI:** Utilizes **[Pinterest Video Downloader](https://rapidapi.com/skdeveloper/api/pinterest-video-downloader6)** for reliable, fast, and secure video extraction.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
