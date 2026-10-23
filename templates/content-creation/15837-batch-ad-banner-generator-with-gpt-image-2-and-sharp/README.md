# 🎬 Batch Ad Banner Generator with gpt-image-2 and Sharp

> ⚡ **53 views** · 🎬 [Content Creation & Video](../)

## Description

- This workflow automates batch ad banner production from existing source images.

- It is designed for teams that already store campaign source images in Google Drive and want to generate multiple ad formats such as 300x250, 728x90, 160x600, 320x100, 300x50, and 970x250.

- The workflow uses Google Sheets as the job queue. Each row contains the source Google Drive file ID, edit instruction, headline, CTA, target banner sizes, and output folder ID. n8n downloads the source image from Google Drive, passes it to the native OpenAI Edit Image node for optional refinement, then uses a Code node with sharp to crop and resize the image into exact pixel dimensions. The generated banners are uploaded back to Google Drive, and the workflow updates the original Google Sheets row with output links, file names, timestamp, and status.

- This approach avoids asking an image model to generate every ad size directly. The model handles the creative refinement, while sharp handles deterministic resizing and exact banner dimensions.

## 🔗 Nodes Used

Google Sheets, Google Drive, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
