# 🎬 Generate AI videos from text prompts with Google Veo

> ⚡ **5,342 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

This n8n workflow uses the Google Gemini node to generate AI videos via the Veo model. It replaces complex manual API setups with a simple, plug-and-play experience.

### Important Prerequisite
To use the Veo model, your Google Cloud project **must have billing enabled**. The feature is not available on the free tier and may incur charges.


### Who Is This For?
* **Marketers & Content Creators**
  Quickly create B-roll, ad clips, or social content from text prompts.
* **Filmmakers & Artists**
  Prototype scenes and visualize ideas without filming.
* **Anyone exploring AI video generation**
  Use Google’s Veo model without any manual API work.

### What the Workflow Does
* **Define Prompt**
  Write a text prompt in the `1. Set Video Prompt` node.
* **Trigger**
  Manually run the workflow with one click.
* **Generate**
  The Gemini node sends the prompt to the Veo model and generates a video.
* **Output**
  Returns a binary video file ready to save or share.

### Setup Instructions
**1. Enable Google Cloud Billing**
Make sure your Google Cloud project has billing activated.
**2. Add Credentials**
Add your Google AI (Gemini) credentials in n8n.
**3. Set the Prompt**
Open the `1. Set Video Prompt` node and write your video idea.
**4. Activate Workflow**
Save and activate the workflow.
**5. Run It**
Click “Execute Workflow” to generate a video.

### Requirements
* n8n (Cloud or Self-Hosted)
* Google Cloud Project with billing enabled
* Google AI (Gemini) credentials linked to that project

### Customization Ideas
* **Save Output**
  Add a Google Drive, Dropbox, or S3 node to store the video.
* **Post Automatically**
  Connect social media nodes (YouTube Shorts, TikTok, etc.) to publish content.

* **Generate in Bulk**
  Replace the Set node with Google Sheets or Airtable to generate multiple videos from a list of prompts.

## 🔗 Nodes Used

Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
