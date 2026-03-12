# 📁 Create PDF from images for free via Google Slides and Google Drive

> ⚡ **2,783 views** · 📁 [File Management](../)

## Description

This n8n template offers a free and automated way to convert images from a Google Drive folder into a single PDF document. It uses Google Slides as an intermediary, allowing you to control the final PDF's page size and orientation.

If you're looking for a no-cost solution to batch convert images to PDF and need flexibility over the output dimensions (like A4, landscape, or portrait), this template is for you! It's especially handy for creating photo albums, visual reports, or simple portfolios directly from your Google Drive.

### How it works

1. The workflow first copies a Google Slides template you specify. The page setup of this template (e.g., A4 Portrait) dictates your final PDF's dimensions.
2. It then retrieves all images from a designated Google Drive folder, sorts them by creation date.
3. Each image is added to a new slide in the copied presentation.
4. Finally, the entire Google Slides presentation is converted into a PDF and saved back to your Google Drive.

### How to use

1. Connect your Google Drive and Google Slides accounts in the relevant nodes.
2. In the "Set Pdf File Name" node, define the name for your output PDF.
3. In the "CopyPdfTemplate" node:
	1. Select your Google Slides template file (this sets the PDF page size/orientation).
	2. Choose the Google Drive folder containing your source images.
3. Ensure your images are in the specified folder. For best results, images should have an aspect ratio similar to your chosen Slides template.
4. Run the workflow to generate your PDF by clicking 'Test Workflow'

### Requirements

- Google Drive account.

- Google Slides account.

- Google Slides Template stored on your Google Drive


### Customising this workflow

Adjust the "Filter: Only Images" node if you use image formats other than PNG (e.g., image/jpeg for JPGs).

Modify the image sorting logic in the "Sort by Created Date" node if needed.

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Slides, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
