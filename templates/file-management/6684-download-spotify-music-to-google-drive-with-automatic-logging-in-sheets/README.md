# 📁 Download Spotify music to Google Drive with automatic logging in sheets

> ⚡ **665 views** · 📁 [File Management](../)

## Description

### [**Spotify Music Downloader**](https://rapidapi.com/PrineshPatel/api/spotify-downloader11): Effortless Music Downloading from Spotify

**Description**:  
The **Spotify Music Downloader** is an automation flow that allows users to easily download music from Spotify tracks. By leveraging the powerful  [**Spotify Downloader API**](https://rapidapi.com/PrineshPatel/api/spotify-downloader11), the flow downloads Spotify tracks, uploads them to Google Drive, and logs the details to Google Sheets for better management. With this tool, you can save time and effort while enjoying the convenience of direct downloads and automatic organization.

---

## Use Case:
- **Music Enthusiasts**: Easily download your favorite Spotify tracks and store them in Google Drive.
- **Content Creators**: Automate the process of storing and tracking downloaded music files.
- **Organizational Automation**: Store download links and file sizes in Google Sheets to track downloads systematically.
- **Spotify Users**: Provides a hassle-free way to access and organize your Spotify music offline.

## Benefits:
- **Simple & Automated**: Easily download and organize music from Spotify with minimal effort.
- **Seamless Integration**: Directly integrates with Google Drive for storage and Google Sheets for tracking.
- **Fast**: Uses the [**Spotify Downloader API**](https://rapidapi.com/PrineshPatel/api/spotify-downloader11) to quickly fetch and download the tracks.
- **Track Downloads**: Keep a record of each download, including size, download link, and other details.
- **Google Drive Storage**: Automatic storage of downloaded tracks in your Google Drive, making it easy to access files anytime.

---

## Node-by-Node Explanation:

1. **On Form Submission**:  
   - The flow starts when the user submits a Spotify track URL through a form.

2. **HTTP Request (Spotify Downloader API)**:  
   - Sends a request to the [**Spotify Downloader API**](https://rapidapi.com/PrineshPatel/api/spotify-downloader11) to retrieve the music file associated with the given Spotify URL.

3. **If (Link Validation)**:  
   - Ensures that the provided Spotify URL is not empty.

4. **If1 (Success Validation)**:  
   - Checks if the API response was successful.

5. **Download Music**:  
   - Downloads the music file from the provided Spotify link using the fetched download URL.

6. **Google Drive**:  
   - Uploads the downloaded music file to Google Drive.

7. **Google Sheets**:  
   - Logs the successful download details (like URL, download link, size, and timestamp) to Google Sheets.

8. **Code (File Size Calculation)**:  
   - Calculates the file size of the downloaded music file in MB.

9. **Wait**:  
   - Introduces a delay to ensure that the upload process to Google Drive is complete before continuing.

10. **Wait1**:  
    - Another wait node to allow additional time between the various steps in the flow.

11. **Google Sheets1 (Success Logs)**:  
    - Adds a new record for a successful download to a Google Sheet.

12. **Google Sheets2 (Failed Logs)**:  
    - Records failed download attempts in a secondary Google Sheet.

---

By utilizing this flow, you can automate the process of downloading music from Spotify and storing it in Google Drive while keeping track of every download in Google Sheets. It's an ideal solution for music lovers, content creators, or anyone looking to automate their music download and storage process with ease.

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
