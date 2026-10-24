# 📁 Watermark images between Google Drive source and destination folders

> ⚡ **76 views** · 📁 [File Management](../)

## Description

Batch watermark every image in a Google Drive folder and save the results to a separate destination folder — fully automated, no code required, and no external tools or APIs needed.

## Who is this for

This workflow is ideal for photographers, designers, content creators, and agencies who need to protect or brand their images before sharing or publishing.

## How it works

1. The workflow is triggered manually. It lists all files inside your source folder (Folder A) using the Google Drive node.
2. A Filter node checks each file's name against common image extensions (jpg, jpeg, png, webp, gif, bmp, tiff) and discards anything that isn't an image.
3. A Loop node processes one image at a time to keep memory usage low and avoid timeouts on large folders.
4. Each image is downloaded from Google Drive as a binary file.
5. The "Edit Image node" stamps your custom text watermark onto the image. You can configure the watermark text, font, size, colour, opacity, and position directly inside this node.
6. The watermarked image is uploaded to your destination folder (Folder B) with `_watermarked` appended to the filename.
7. The loop continues until every image in Folder A has been processed.

## Setup

1. Connect your "Google Drive OAuth2"" credentials to all three Google Drive nodes.
2. In the "List Files" node, replace `YOUR_FOLDER_A_ID` with your source folder ID.
3. In the "Upload" node, replace `YOUR_FOLDER_B_ID` with your destination folder ID.
4. Open the "Edit Image" node and set your watermark text, font size, colour, and position.

## For Customisation

Open your google drive and create two folders. One for Raw images, and other for watermarked images, You will place your raw images in Raw images folder. Water marked images will appear automatically after processing in water marked folder. To get your folder IDs, open the folder in Google Drive and copy the last part of the URL, https://drive.google.com/drive/folders/YOUR_FOLDER_ID

## 🔗 Nodes Used

Edit Image, Google Drive, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
