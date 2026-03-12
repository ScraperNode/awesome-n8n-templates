# 📁 Download Instagram videos to Google Drive with auto-email delivery

> ⚡ **1,633 views** · 📁 [File Management](../)

## Description

# 🚀 **Download Instagram Videos to Google Drive with Auto-Email Delivery**

Effortlessly convert Instagram videos to MP4 and automatically store them on Google Drive with a shareable download link sent to the user via email. This **n8n** workflow uses the **[Instagram Video Downloader](https://rapidapi.com/skdeveloper/api/instagram-video-downloader13)** API to automate the process of downloading Instagram videos, uploading them to Google Drive, and sending the download link directly to users.

With this workflow, you can automate Instagram video downloads without manual effort.

---

## 📝 **Node-by-Node Explanation**

1. **n8n Form Trigger**  
   Captures the Instagram video URL and the user's email address from a web form. This initiates the workflow process.
   
2. **API Request (Instagram Video Downloader)**  
   Sends the Instagram video URL to the **[Instagram Video Downloader API](https://rapidapi.com/skdeveloper/api/instagram-video-downloader13)** for processing and fetching the MP4 video data.

3. **Check API Response (If Node)**  
   Validates the API response to ensure no errors were returned. If the response is valid, the workflow continues; otherwise, it halts the process.

4. **Download Instagram Video (HTTP Request)**  
   Downloads the MP4 video from the API response to proceed with the next steps.

5. **Upload to Google Drive**  
   Saves the downloaded MP4 video file to **Google Drive** for secure storage.

6. **Set Permissions (Google Drive)**  
   Adjusts the file’s permissions to make it publicly accessible, allowing anyone with the link to view or download the MP4.

7. **Send Email with Download Link**  
   Sends an automated email to the user with a link to download their converted MP4 file, completing the process.

---

## ✅ **Use Cases**

- **Marketing Campaigns:** Save Instagram videos for use in marketing and promotional campaigns.
- **Social Media Teams:** Automate the process of downloading Instagram content for team collaboration.
- **Client Deliverables:** Automatically deliver Instagram MP4 links to clients without manual work.

---

## 🚀 **Benefits**

- **Fast & Reliable:** Integration with the [**Instagram Video Downloader API**](https://rapidapi.com/skdeveloper/api/instagram-video-downloader13) guarantees quick video downloads.
- **Fully Automated:** The entire process is automated from start to finish, eliminating manual steps.
- **Cloud Storage:** Securely store MP4 files on Google Drive with easy sharing options.
- **Instant Delivery:** Users receive their MP4 download link immediately via email.
- **No Manual Effort:** Automates the download and sharing process without any need for manual interaction.

---

🔑 **Resolved:** The process of downloading Instagram videos and sharing them is now fully automated using the [**Instagram Video Downloader API**](https://rapidapi.com/skdeveloper/api/instagram-video-downloader13), Google Drive storage, and instant email delivery.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
