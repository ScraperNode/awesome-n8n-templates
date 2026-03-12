# 🎬 Generate images with GPT-image-1 and store in Google Drive with cost tracking

> ⚡ **3,570 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

- Receive a chat input as an image prompt.
- Call OpenAI's `gpt-image-1` API to generate an image.
- Split the returned images and process them one by one.
- Upload each generated image to **Google Drive**.
- Save image links and thumbnails to a **Google Sheets** document.
- Record token usage and estimated cost into a separate sheet.

## Set up steps

1. Connect your **OpenAI API** credentials for image generation.
2. Connect your **Google Drive** and **Google Sheets** accounts.
3. Set the destination folder in Google Drive.
4. Set the target Google Sheet and specify the correct sheet tabs.
5. The setup usually takes around **5-10 minutes**.
6. Detailed field mappings are already pre-configured inside the workflow.
7. Additional tips and instructions are included as **sticky notes** inside the workflow.

![Screenshot_20250425_190410_NRnD1vZE2x 2.jpg](fileId:1166)

## Google Sheet copy url
[Copy Sheet Link](https://docs.google.com/spreadsheets/d/1zsWBgeA7I5Q_gsocz6hmkW884QT_vfz_mgGCT54VSN0/copy)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Convert to File, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
