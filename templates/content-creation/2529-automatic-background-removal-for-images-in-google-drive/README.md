# 🎬 Automatic background removal for images in Google Drive

> ⚡ **14,839 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow simplifies the process of removing backgrounds from images stored in Google Drive. By leveraging the PhotoRoom API, this template enables automatic background removal, padding adjustments, and output formatting, all while storing the updated images back in a designated Google Drive folder.

This workflow is very useful for companies or individuals that are spending a lot of time into removing the background from product images.

## How it Works

    The workflow begins with a Google Drive Trigger node that monitors a specific folder for new image uploads.
    Upon detecting a new image, the workflow downloads the file and extracts essential metadata, such as the file size.
    Configurations are set for background color, padding, output size, and more, which are all customizable to match specific requirements.
    The PhotoRoom API is called to process the image by removing its background and adding padding based on the settings.
    The processed image is saved back to Google Drive in the specified output folder with an updated name indicating the background has been removed.

## Requirements

    PhotoRoom API Key
    Google Drive API Access

## Customizing the Workflow

    Easily adjust the background color, padding, and output size using the configuration node.
    Modify the output folder path in Google Drive or replace Google Drive with another storage service if needed.
    For advanced use cases, integrate further image processing steps, such as adding captions or analyzing content using AI.

## 🔗 Nodes Used

Edit Image, HTTP Request, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
