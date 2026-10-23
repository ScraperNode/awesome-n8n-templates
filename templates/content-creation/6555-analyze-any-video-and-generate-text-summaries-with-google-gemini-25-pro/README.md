# 🎬 Analyze any video and generate text summaries with Google Gemini 2.5 Pro

> ⚡ **3,771 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow uses the NEW native Google Gemini node in n8n to analyze videos and generate detailed text summaries. Just upload a video, and Gemini will describe the scenes, objects, and actions frame by frame.

## How it works
1. The workflow is triggered via a form where the user uploads a video file directly as the input source.
2. The uploaded video is sent to Gemini 2.5 Pro, which performs a detailed visual analysis of the full video content.
3. Gemini returns a structured text summary describing everything it identifies and observes within the uploaded video.

## Setup
1. Connect your Google AI (Gemini) credentials in the n8n Credential Manager before activating the workflow.
2. Save and activate the workflow to make the Form Trigger URL accessible and ready to receive video uploads.
3. Open the Form Trigger URL, upload a video file, submit the form, and verify that Gemini returns a detailed description.

## Requirements
- An n8n instance (Cloud or Self-Hosted)
- A Google AI (Gemini) account

## Customization
- Translate the Summary : Add another LLM node to translate the analysis.
- Create Social Media Posts : Use the output to generate Twitter or LinkedIn content.
- Store the Output : Save the summary to Google Sheets or Airtable.
- Automate with Cloud Storage : Replace the Form Trigger with a Google Drive or Dropbox trigger to process videos automatically.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
