# 📁 Form-triggered Instagram video downloads to Google Drive with Sheets logging

> ⚡ **329 views** · 📁 [File Management](../)

## Description

## 📥 Instagram to MP4 Converter with Google Drive Integration

This **n8n workflow** enables users to **convert Instagram video links into downloadable MP4 files**, store them in **Google Drive**, and log the results (success or failure) in **Google Sheets**.

---

## 🔧 Node-by-Node Overview

1. **On form submission** – Triggers when a user submits an Instagram video URL.
2. **Instagram Downloader API Request** – Calls the [**Instagram Downloader API**](https://rapidapi.com/PrineshPatel/api/instagram-downloader51) to retrieve a downloadable link for the video.
3. **If** – Checks if the API response indicates success.
4. **MP4 Downloader** – Downloads the video from the provided media URL.
5. **Upload To Google Drive** – Uploads the MP4 video to a specified folder in Google Drive.
6. **Google Drive Set Permission** – Sets the uploaded file to public with a sharable link.
7. **Google Sheets** – Logs successful conversions, including the original URL and Drive link.
8. **Wait** – Adds a pause before logging failure to avoid rapid writes to Google Sheets.
9. **Google Sheets Append Row** – Logs failed attempts with `Drive_URL` marked as `N/A`.

---

## 🚀 Key Features

- 🔗 Uses the [**Instagram Downloader API**](https://rapidapi.com/PrineshPatel/api/instagram-downloader51) to convert Instagram video URLs
- 🗂 Uploads MP4s directly to **Google Drive**
- 📊 Logs all actions in **Google Sheets**
- 🧠 Smart error handling using conditional and wait nodes

---

## 📌 Use Case & Benefits

- Convert Instagram videos to MP4 instantly from a simple form submission
- Automatically upload videos to **Google Drive**
- Log successful and failed conversions into **Google Sheets**
- Ideal for marketers, content managers, educators, and archivists
- No manual downloading, renaming, or organizing — it's fully automated

---

## 🌐 API Key Requirement

To use this workflow, you’ll need an API key from the [**Instagram Downloader API**](https://rapidapi.com/PrineshPatel/api/instagram-downloader51).  
Follow these steps to obtain your API key:

1. Go to the [**Instagram Downloader API**](https://rapidapi.com/PrineshPatel/api/instagram-downloader51)
2. Sign up or log in to RapidAPI
3. Subscribe to a plan (either free or paid)
4. Copy your `x-rapidapi-key` and paste it in the HTTP Request node where required

---

## 🛠 Full Setup Instructions

### 1. **API Setup**
   - Create an account with [RapidAPI](https://rapidapi.com/).
   - Subscribe to the **Instagram Downloader API** and copy your API key.
   - Use this key in the HTTP Request node in n8n to call the Instagram Downloader API.

### 2. **Google Services Setup**
   - **Google Drive Integration**:
     - Go to the [Google Developer Console](https://console.developers.google.com/).
     - Create a new project.
     - Enable the **Google Drive API**.
     - Create OAuth 2.0 credentials and download the JSON credentials file.
     - Upload this file to n8n under your Google Drive credentials setup.
   
   - **Google Sheets Integration**:
     - Enable the **Google Sheets API** in the Google Developer Console.
     - Create OAuth 2.0 credentials for Sheets access.
     - Download the credentials file and upload it to n8n for authentication.
     - Make sure the Google Sheet you're using has columns for `Original_URL`, `Drive_URL`, and `Status`.

### 3. **Customizing the Template**
   - **Custom Folder for Google Drive**:
     - In the "Upload To Google Drive" node, change the folder ID to match your desired folder in Google Drive where videos should be stored.
   - **Custom Google Sheets Columns**:
     - By default, the template logs the `Original_URL`, `Drive_URL`, and `Status` (success/failure).
     - To add more columns, simply update the "Google Sheets Append Row" node with new column headers and ensure the data from each step corresponds correctly.

### 4. **Column Mapping for Google Sheets**
   - The default columns in your Google Sheet are:
     - **Original_URL**: The original Instagram video URL submitted by the user.
     - **Drive_URL**: The sharable link to the uploaded MP4 in Google Drive.
     - **Status**: Whether the conversion was successful or failed.

   **Important Note**: Ensure your Google Sheet is properly formatted with these columns before running the workflow.

---

## 💡 Additional Tips

- **Monitoring API Usage**: The Instagram Downloader API has rate limits. Check your API usage in the [RapidAPI dashboard](https://rapidapi.com/).
- **Automating with Triggers**: You can trigger the workflow automatically when a user submits a form URL through tools like Google Forms or external services that integrate with n8n.
- **Error Handling**: If you encounter frequent failures, check the API's response format and ensure that all your credentials are correctly set up.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
