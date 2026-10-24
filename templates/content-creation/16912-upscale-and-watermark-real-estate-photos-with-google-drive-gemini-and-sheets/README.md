# 🎬 Upscale and watermark real estate photos with Google Drive, Gemini, and Sheets

> ⚡ **37 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Youtube Explanation: https://youtu.be/tDiR50VJslY

This workflow watches a Google Drive folder for new property photos, checks Google Sheets to avoid reprocessing, upscales the image using the Google Gemini API, applies a logo watermark, then uploads the final image to a processed folder and logs the result back to Google Sheets.

## How it works
1. Triggers every minute when a new file is created in a specific Google Drive folder.
2. Looks up the file name in Google Sheets to see whether the image is already marked as processed.
3. If no processed row exists, downloads the image from Google Drive and extracts its binary data.
4. Sends the image to the Google Gemini (Generative Language) API to enhance and upscale it, then converts the returned base64 image into a binary file.
5. Downloads a watermark logo from a public URL, calculates a bottom-right placement based on the image and logo dimensions, and composites the logo onto the upscaled image.
6. Uploads the watermarked image to a target Google Drive folder and appends or updates a matching row in Google Sheets to mark it as processed.

## Setup
1. Connect Google Drive OAuth2 credentials and set the source folder to watch and the destination “Processed” folder for uploads.
2. Connect Google Sheets using a Google service account credential and set the spreadsheet, sheet, and columns used for matching (image_name) and status tracking (processed?).
3. Add a Google PaLM/Gemini API credential for the HTTP request to the Generative Language API endpoint.
4. Replace the watermark logo URL with your own direct image link if needed and ensure it returns a compatible JPEG/PNG file.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
