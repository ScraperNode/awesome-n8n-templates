# 🎬 Generate AI voiceovers from scripts with Gemini TTS and upload to Google Drive

> ⚡ **545 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate AI Voiceovers from Scripts and Upload to Google Drive

This is the final piece of the AI content factory. This workflow takes your text-based video scripts and automatically generates high-quality audio voiceovers for each one, turning your text into ready-to-use audio assets for your video ads.

Go from a spreadsheet of text to a folder of audio files, completely on autopilot.

## ⚠️ CRITICAL REQUIREMENTS (Read First!)
This is an advanced, self-hosted workflow that requires specific local setup:

*   **Self-Hosted n8n Only:** This workflow uses the `Execute Command` and `Read/Write Files` nodes, which requires you to run your own instance of n8n. It will not work on n8n Cloud.
*   **FFmpeg Installation:** You must have [FFmpeg](https://ffmpeg.org/download.html) installed on the same machine where your n8n instance is running. This is used to convert the audio files to a standard format.

## What it does
This is Part 3 of the AI marketing series. It connects to the Google Sheet where you generated your video scripts (in Part 2). For each script that hasn't been processed, it:

1.  Uses the Google Gemini Text-to-Speech (TTS) API to generate a voiceover.
2.  Saves the audio file to your local computer.
3.  Uses FFmpeg to convert the raw audio into a standard `.wav` file.
4.  Uploads the final `.wav` file to your Google Drive.
5.  Updates the original Google Sheet with a link to the audio file in Drive and marks the script as complete.

## How to set up
**IMPORTANT:** This workflow is Part 3 of a series and requires the output from Part 2 ("Generate AI Video Ad Scripts").

**If you need Part 1 or Part 2 of this workflow series, you can find them for free on [my n8n Creator Profile](https://n8n.io/creators/jj-tham/).**

1.  **Connect to Your Scripts Sheet:** In the "Getting Video Scripts" node, connect your Google Sheets account and provide the URL to the sheet containing your generated video scripts from Part 2.
2.  **Configure AI Voice Generation (HTTP Request):**
    *   In the "HTTP Request To Generate Voice" node, go to the **Query Parameters** and replace `INSERT YOUR API KEY HERE` with your Google Gemini API key.
    *   In the **JSON Body**, you can customize the voice prompt (e.g., change `&lt;INSERT YOUR DESIRED ACCENT HERE&gt;`).
3.  **Set Your Local File Path:** In the first "Read/Write Files from Disk" node, update the **File Name** field to a valid directory on your local machine where n8n has permission to write files. Replace `/Users/INSERT_YOUR_LOCAL_STORAGE_HERE/`.
4.  **Connect Google Drive:** In the "Uploading Wav File" node, connect your Google Drive account and choose the folder where your audio files will be saved.
5.  **Update Your Tracking Sheet:** In the final "Uploading Google Drive Link..." node, ensure it's connected to the same Google Sheet from Step 1. This node will update your sheet with the results.
Name and Description for Submission Form
Here are the name and description, updated with the new information, ready for you to copy and paste.
Name:
Generate AI Voiceovers from Scripts and Upload to Google Drive
Description:
Welcome to the final piece of the AI content factory! 🔊 This advanced workflow takes the video ad scripts you've generated and automatically creates high-quality audio voiceovers for each one, completing your journey from strategy to ready-to-use media assets.
⚠️ This is an advanced workflow for self-hosted n8n instances only and requires FFmpeg to be installed locally.
## ⚙️ How it works
This workflow is Part 3 of a series. It reads your video scripts from a Google Sheet, then for each script it:
- Generates a voiceover using the Google Gemini TTS API.
- Saves the audio file to your local machine.
- Converts the file to a standard .wav format using FFmpeg.
- Uploads the final audio file to Google Drive.
- Updates your Google Sheet with a link to the new audio file.
## 👥 Who’s it for?
- Video Creators & Marketers: Mass-produce voiceovers for video ads, tutorials, or social media content without hiring voice actors.
- Automation Power Users: A powerful example of how n8n can bridge cloud APIs with local machine commands.
- Agencies: Drastically speed up the production of audio assets for client campaigns.


## 🛠️ How to set up
This workflow requires specific local setup due to its advanced nature.

**IMPORTANT: This is Part 3 of a series. To find Part 1 ("Generate a Strategic Plan") and Part 2 ("Generate Video Scripts"), please visit my n8n Creator Profile where they are available for free.**

Setup involves connecting to your scripts sheet, configuring the AI voice API, setting a local file path for n8n to write to, and connecting your Google Drive.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
