# 📁 Bilibili video downloader with Google Drive upload & email notification

> ⚡ **461 views** · 📁 [File Management](../)

## Description

## Bilibili Video Downloader with Google Drive Upload & Email Notification

Automate downloading of **Bilibili videos** via the [Bilibili Video Downloader API (RapidAPI)](https://rapidapi.com/skdeveloper/api/bilibili-video-downloader), upload them to **Google Drive**, and notify users by email — all using **n8n workflow automation**.

---

## 🧠 **Workflow Overview**

This **n8n automation** allows users to:

1. Submit a Bilibili video URL.
2. Fetch download info from the [Bilibili Video Downloader API (RapidAPI)](https://rapidapi.com/skdeveloper/api/bilibili-video-downloader).
3. Automatically download and upload the video to **Google Drive**.
4. Share the file and send an **email notification** to the user.

---

## ⚙️ **Node-by-Node Explanation**

| Node                                           | Function                                                                                                                                                         |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **On form submission**                         | Triggers when a user submits the Bilibili video URL through the form.                                                                                            |
| **Fetch Bilibili Video Info from API**         | Sends the video URL to the [Bilibili Video Downloader API (RapidAPI)](https://rapidapi.com/skdeveloper/api/bilibili-video-downloader) to retrieve download info. |
| **Check API Response Status**                  | Validates that the API returned a 200 success status before proceeding.                                                                                          |
| **Download Video File**                        | Downloads the actual video from the provided resource URL.                                                                                                       |
| **Upload Video to Google Drive**               | Uploads the downloaded video file to the user’s connected Google Drive.                                                                                          |
| **Google Drive Set Permission**                | Sets sharing permissions to make the uploaded video publicly accessible.                                                                                         |
| **Success Notification Email with Drive Link** | Sends the Google Drive link to the user via email upon successful upload.                                                                                        |
| **Processing Delay**                           | Adds a delay before executing error handling if something fails.                                                                                                 |
| **Failure Notification Email**                 | Sends an error notification to the user if download/upload fails.                                                                                                |

---

## 🧩 **How to Configure Google Drive in n8n**

1. In n8n, open **Credentials → New → Google Drive**.
2. Choose **OAuth2** authentication.
3. Follow the on-screen instructions to connect your Google account.
4. Use the newly created credential in both **Upload Video** and **Set Permission** nodes.
5. Test the connection to ensure access to your Drive.

---

## 🔑 **How to Obtain Your RapidAPI Key**

To use the [Bilibili Video Downloader API (RapidAPI)](https://rapidapi.com/skdeveloper/api/bilibili-video-downloader):

1. Visit [bilibili videodownloade](https://rapidapi.com/skdeveloper/api/bilibili-video-downloader).
2. Click **Subscribe to Test** (you can choose free or paid plans).
3. Copy your **x-rapidapi-key** from the “Endpoints” section.
4. Paste the key into your n8n **Fetch Bilibili Video Info from API** node header.

Example header:

```json
{
  "x-rapidapi-host": "bilibili-video-downloader.p.rapidapi.com",
  "x-rapidapi-key": "your-rapidapi-key-here"
}
```

---

## 💡 **Use Case**

This automation is ideal for:

* Content creators archiving Bilibili videos.
* Researchers collecting media resources.
* Teams that need centralized video storage in **Google Drive**.
* Automated content management workflows.

---

## 🚀 **Benefits**

✅ **No manual downloads** – fully automated.
✅ **Secure cloud storage** via Google Drive.
✅ **Instant user notification** on success or failure.
✅ **Scalable** for multiple users or URLs.
✅ **Powered by the reliable [Bilibili Video Downloader API (RapidAPI)](https://rapidapi.com/skdeveloper/api/bilibili-video-downloader).**

---

## 👥 **Who Is This For**

* **n8n developers** wanting to explore advanced workflow automations.
* **Content managers** handling large volumes of Bilibili content.
* **Digital archivists** storing video data in Google Drive.
* **Educators** sharing Bilibili educational videos securely.

---

## 🏁 **Summary**

With this **n8n workflow**, you can seamlessly integrate the [Bilibili Video Downloader API (RapidAPI)](https://rapidapi.com/skdeveloper/api/bilibili-video-downloader) into your automation stack — enabling effortless video downloading, Google Drive uploading, and user notifications in one unified system.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
