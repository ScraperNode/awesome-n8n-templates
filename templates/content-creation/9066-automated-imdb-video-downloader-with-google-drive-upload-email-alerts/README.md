# 🎬 Automated IMDB video downloader with Google Drive upload & email alerts

> ⚡ **167 views** · 🎬 [Content Creation & Video](../)

## Description

**Automated IMDB Video Downloader: Download, Upload to Google Drive & Notify via Email**

Easily download IMDB videos via a user-friendly form. Automatically fetch video links using the [**IMDB Downloader API**](https://rapidapi.com/skdeveloper/api/imdb-downloader), save videos to Google Drive, and notify users via email with shareable links or failure alerts. Perfect for content creators and marketers.

---

## Node-by-Node Explanation 

* **On form submission**: Triggers the workflow when a user submits an IMDB video URL via a form.
* **Fetch IMDB Video Info from API**: Sends the URL to the [**IMDB Downloader API**](https://rapidapi.com/skdeveloper/api/imdb-downloader) to get video metadata and download links.
* **Check API Response Status**: Verifies if the API responded successfully (status code 200).
* **Download Video File**: Downloads the video from the provided media URL.
* **Upload Video to Google Drive**: Uploads the downloaded video file to a specified Google Drive folder.
* **Google Drive Set Permission**: Sets sharing permissions on the uploaded video for easy access.
* **Success Notification Email with Drive Link**: Emails the user the Google Drive link to access the video.
* **Processing Delay**: Adds a wait time before sending failure notifications.
* **Failure Notification Email**: Emails the user if the video download or processing fails.

---

## How to Obtain Your RapidAPI Key

1. Go to [**RapidAPI's IMDB Downloader API page**](https://rapidapi.com/skdeveloper/api/imdb-downloader).
2. Sign up or log in to your RapidAPI account.
3. Subscribe to the IMDB Downloader API.
4. Find your unique `x-rapidapi-key` in the dashboard under the API keys section.
5. Replace `"your key"` in your workflow headers with this key to authenticate requests.

---

## Use Cases & Benefits 
### Use Cases

* Content creators downloading trailers or clips quickly.
* Marketing teams preparing video content for campaigns.
* Educators sharing film excerpts.
* Social media managers sourcing videos efficiently.

### Benefits

* Fully automates video download and upload workflow.
* Seamless Google Drive integration with sharing.
* Instant user notifications on success or failure.
* User-friendly with simple URL form submission.

---

## Who Is This For?

* **Content creators** looking for fast video downloads.
* **Marketers** needing instant access to IMDB clips.
* **Educators** requiring film excerpts for lessons.
* **Social media managers** preparing engaging content.
* Any user wanting hassle-free IMDB video downloads with cloud storage.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
