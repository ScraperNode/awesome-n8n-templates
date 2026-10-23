# 🎬 Create studio-quality car listing photos using Google Drive and Gemini 2.5

> ⚡ **38 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow manually processes car photos from Google Drive, sends each image plus a studio backdrop and logo to the Google Gemini Image API for background replacement and license-plate branding, and uploads the generated studio-style images back to an output Google Drive folder.

## How it works
1. Runs when you manually execute the workflow.
2. Lists all image files in a specified Google Drive input folder and processes them one at a time.
3. Downloads the current car photo and also lists and downloads the studio asset images (virtual backdrop and logo) from a separate Google Drive folder.
4. Builds a multimodal request that instructs Google Gemini to classify the shot (exterior vs interior/engine), replace the background accordingly, and swap any visible license plate with the provided logo.
5. Sends the request to the Google Gemini image generation endpoint and receives a generated image in the response.
6. Extracts the generated image, names it using the original filename with a “_studio.jpg” suffix, and uploads it to a specified Google Drive output folder.

## Setup
1. Add Google Drive OAuth2 credentials and set the input, studio assets, and output folder IDs in the Google Drive nodes’ queries/parent folder settings.
2. Add a Google Gemini API key as an n8n HTTP Header Auth credential (x-goog-api-key) and select it in the HTTP Request step.
3. Ensure the studio assets folder contains the reference images named exactly "virtual_studio.png" and "logo.png" so they are correctly picked up for compositing and plate replacement.

## Requirements
- Google Drive account (OAuth2) with an Input, Studio Assets, and Output folder created
- Google Gemini API key with access to the gemini-2.5-flash-image model
- A studio backdrop image and a logo image, saved exactly as virtual_studio.png and logo.png

## Customization
- Swap the Manual Trigger for a Schedule Trigger or a Drive "File Created" trigger to run fully automated as new photos land
- Add a separate backdrop for interior/engine shots instead of a single shared studio reference, for more tailored compositing
- Add a Slack or email notification node after the upload step to alert the team when a batch finishes
- Extend the Gemini prompt to auto-crop output to a fixed aspect ratio matching your listing platform's requirements

## Additional info
This workflow replicates the core function of commercial "virtual photo studio" tools entirely inside n8n using Google's Gemini 2.5 Flash Image model — at a fraction of the cost and with full control over the pipeline.

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
