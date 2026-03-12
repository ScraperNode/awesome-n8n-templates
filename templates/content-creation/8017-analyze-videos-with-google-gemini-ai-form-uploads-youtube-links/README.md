# 🎬 Analyze videos with Google Gemini AI - form uploads & YouTube links

> ⚡ **795 views** · 🎬 [Content Creation & Video](../)

## Description

### ⚙️ Analyze Video Workflow - Automates Video Analysis with Google Gemini



---

### 🚀 Steps to Connect:

1. **Google Gemini API Key**
   - Go to [Google AI](https://ai.google.dev/) and sign up to get your **free API key**.
   - Create your query authorization credential using that API key in the **HTTP Request** nodes (e.g., "Upload File", "Get Analysis") that require a Google Gemini credential.

2. **Form Trigger Setup**
   - Ensure the **On form submission** node is linked and ready to accept video uploads.
   - No additional configuration needed; the node is pre-set for video input.

3. **YouTube Video Analysis (Optional)**
   - Update the **YouTube Video** node’s `jsonBody` field with your desired YouTube URL (e.g., replace `https://youtu.be/gwCQF--cARA?si=uCbaUnoRlEjHO50a` with your video link).
   - Keep the prompt as "Please summarize the video in 3 sentences" or modify it as needed.



---

# Overview of the n8n Workflow

This n8n workflow automates the analysis of uploaded videos or YouTube links using Google Gemini, providing detailed descriptions or summaries of the content. It processes video uploads, extracts analysis, and stores the results, with options for real-time polling and YouTube integration. The workflow includes sticky notes with setup instructions and editable fields, formatted in Markdown for clarity, as seen in the "Example Output.txt".

---

## How it Works

- Uploads a video file or links a YouTube URL for analysis.
- Processes the video through Google Gemini to generate a detailed description or summary.
- Stores the analysis results and optionally polls for updates with a delay.

## Set up Steps

- Setup time: Approximately 10-15 minutes.
- Detailed instructions are available in the sticky notes within the workflow.

---

# Editable Fields

- **YouTube Video Node: jsonBody**
  - Update the `file_uri` field with your YouTube video URL (e.g., replace `https://youtu.be/gwCQF--cARA?si=uCbaUnoRlEjHO50a` with your link).
  - Modify the `text` prompt if you want a different analysis (e.g., "Describe the video in detail" instead of "Please summarize the video in 3 sentences").

- **On form submission Node: No edits needed**
  - Pre-configured for video uploads; ready to use as is.

---

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
