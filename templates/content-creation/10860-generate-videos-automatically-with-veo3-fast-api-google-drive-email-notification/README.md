# 🎬 Generate videos automatically with Veo3 Fast API, Google Drive & email notifications

> ⚡ **277 views** · 🎬 [Content Creation & Video](../)

## Description

## Automated Video Generation, Google Drive Upload, and Email Notification with Veo 3 Fast API


This workflow automates the process of generating videos using the [Veo 3 Fast API](https://rapidapi.com/skdeveloper/api/veo-3-fast), uploading the video to Google Drive, and notifying the user via email. All tasks are executed seamlessly, ensuring a smooth user experience with automatic error handling.

## Node-by-Node Explanation
1. **On Form Submission**: Triggers the workflow when a user submits a form with a prompt.
2. **Veo 3 Fast API Processor**: Sends the user's prompt to the [Veo 3 Fast API](https://rapidapi.com/skdeveloper/api/veo-3-fast) to generate a video.
3. **Wait for API Response**: Pauses the workflow for 35 seconds to allow the API response.
4. **API Request: Check Task Status**: Sends a request to check the status of the video generation task.
5. **Condition: Task Output Status**: Evaluates whether the task was successful, still processing, or failed.
6. **Wait for Task to Complete**: Pauses the workflow for 30 seconds to recheck the task status if processing is ongoing.
7. **Send Email: API Error - Task Failed**: Sends an email if the task fails to generate the video.
8. **Send Email: API Error - Task ID Missing**: Sends an email if the task ID is missing in the response.
9. **Download Video**: Downloads the processed video from the provided output URL.
10. **Upload File to Google Drive**: Uploads the processed video to the user's Google Drive.
11. **Set Google Drive Permissions**: Sets the necessary sharing permissions for the uploaded video.
12. **Send an Email: Video Link**: Sends an email with the link to the uploaded video.

## How to Obtain a RapidAPI Key
1. Go to [Veo 3 Fast on RapidAPI](https://rapidapi.com/skdeveloper/api/veo-3-fast).
2. Create an account or log in.
3. Subscribe to the API plan that suits your needs.
4. After subscription, find your **API Key** in the "Keys & Access" section.

## How to Configure Google Drive API
1. Go to [Google Cloud Console](https://console.developers.google.com/).
2. Create a new project or select an existing one.
3. Enable the **Google Drive API** for the project.
4. Go to **Credentials** and create OAuth 2.0 credentials.
5. Add the credentials to your n8n Google Drive node for seamless access to your Google Drive.

## Use Case
- **Use Case**: A content creation team can automate the video production process, upload videos to Google Drive, and share them with stakeholders instantly after the task is complete.

## Benefits
- **Efficiency**: Reduces manual tasks, saving time and effort by automating video creation and file management.
- **Error Handling**: Sends notifications for task failures or missing data, ensuring quick resolutions.
- **Seamless Integration**: Automatically uploads files to Google Drive and shares the link with users, streamlining the workflow.

## Who Is This For
- **Content Creators**: Automates video creation and file management.
- **Marketing Teams**: Quick and easy video generation for campaigns.
- **Developers**: Can integrate with APIs and automate tasks.
- **Business Teams**: Save time by automating repetitive tasks like file uploads and email notifications.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
