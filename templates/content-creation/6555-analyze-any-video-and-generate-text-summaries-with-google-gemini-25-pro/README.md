# 🎬 Analyze any video and generate text summaries with Google Gemini 2.5 Pro

> ⚡ **3,511 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Analyze Any Video and Get a Text Summary with Google Gemini
This workflow uses the NEW native Google Gemini node in n8n to analyze videos and generate detailed text summaries. Just upload a video, and Gemini will describe the scenes, objects, and actions frame by frame.

### Who Is This For?
* **Content Creators & Marketers**
  Quickly generate summaries, shot lists, or descriptions for video content.
* **Video Editors**
  Get a fast overview of footage without manual review.
* **Developers & n8n Beginners**
  Learn how to use multimodal AI in n8n with a simple setup.
* **AI Enthusiasts**
  Explore the new capabilities of the Gemini Pro model.

### How It Works
* **Upload**
  Triggered via a form where you upload a video file.
* **Analyze**
  The video is sent to the Gemini 2.5 Pro model for analysis.
* **Describe**
  Gemini returns a detailed text summary of what it sees in the video.

### Setup Instructions
**1. Add Credentials**
Connect your Google AI (Gemini) credentials in n8n.
**2. Activate Workflow**
Save and activate the workflow.
**3. Upload Video**
Open the Form Trigger URL, upload a video, and submit the form.

### Requirements
* An n8n instance (Cloud or Self-Hosted)
* A Google AI (Gemini) account

### Customization Ideas
* **Translate the Summary**
  Add another LLM node to translate the analysis.
* **Create Social Media Posts**
  Use the output to generate Twitter or LinkedIn content.
* **Store the Output**
  Save the summary to Google Sheets or Airtable.

* **Automate with Cloud Storage**
  Replace the Form Trigger with a Google Drive or Dropbox trigger to process videos automatically.

## 🔗 Nodes Used

n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
