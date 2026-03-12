# 🎬 text-to-video generation using Google Veo3 API and Google Drive

> ⚡ **503 views** · 🎬 [Content Creation & Video](../)

## Description

## Automate Text To Video Generation with Google Veo3 API and Google Drive Integration


Create CGI ads effortlessly by integrating the [Google Veo3 API](https://rapidapi.com/skdeveloper/api/google-veo-3) for video generation and uploading to Google Drive with seamless email notifications.

---

## Node-by-Node Explanation:

1. **On form submission**: Triggers the workflow when a form is submitted with a prompt for the video.
2. **Wait for API Response**: Waits for 35 seconds for the API to respond.
3. **API Request: Check Task Status**: Sends an HTTP request to check the task status for success or failure.
4. **Condition: Task Output Status**: Checks the task's output status and triggers the appropriate action (success, processing, or failure).
5. **Wait for Task to Complete**: Waits for another 30 seconds to recheck the task's completion status.
6. **Send Email: API Error - Task ID Missing**: Sends an email if the task ID is missing from the API response.
7. **Upload File to Google Drive**: Uploads the generated video to Google Drive.
8. **Set Google Drive Permissions**: Configures the permissions for the uploaded video on Google Drive.
9. **Send an email: Video Link**: Sends a final email with the link to the completed video on Google Drive.
10. **Download Video**: Downloads the video from the generated URL.


---

## How to Obtain RapidAPI Key:

1. Visit [Google Veo3 API](https://rapidapi.com/skdeveloper/api/google-veo-3) on RapidAPI.
2. Sign up or log in to your account.
3. Subscribe to the Google Veo3 API plan.
4. Copy the API key provided in your RapidAPI dashboard.

---

## How to Configure Google Drive:

1. Go to [Google Cloud Console](https://console.developers.google.com/).
2. Enable the **Google Drive API**.
3. Create credentials for OAuth 2.0 and download the credentials file.
4. In your workflow, authenticate using these credentials to upload and manage files on Google Drive.

---

## Use Case:

This workflow is ideal for businesses looking to automate CGI video creation for advertisements using the Google Veo3 API, with seamless file management and sharing via Google Drive.

---

## Benefits:

* **Automation**: Completely automates the CGI video creation and sharing process.
* **Error Handling**: Sends error notifications for task failures or missing task IDs.
* **File Management**: Automatically uploads and manages videos on Google Drive.
* **Easy Sharing**: Generates shareable links to videos via email.

---

## Who Is This For?

* Digital marketers looking to create ads at scale.
* Creative agencies producing CGI content.
* Developers integrating API workflows for video generation.

---

## Link to Google Veo3 API:

[Google Veo3 API on RapidAPI](https://rapidapi.com/skdeveloper/api/google-veo-3)

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
