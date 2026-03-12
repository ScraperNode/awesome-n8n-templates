# 🎬 🎥 Analyze YouTube video for summaries, transcripts & content + Google Gemini AI

> ⚡ **8,387 views** · 🎬 [Content Creation & Video](../)

## Description

## 🎥 Analyze YouTube Video for Summaries, Transcripts & Content + Google Gemini

### Who is this for?
This workflow is ideal for **content creators**, **video marketers**, and **research professionals** who need to extract actionable insights, detailed transcripts, or metadata from YouTube videos efficiently. It is particularly useful for those leveraging AI tools to analyze video content and optimize audience engagement.

### What problem does this workflow solve? / Use case
Analyzing video content manually can be time-consuming and prone to errors. This workflow automates the process by extracting key metadata, generating summaries, and providing structured transcripts tailored to specific use cases. It helps users save time and ensures accurate data extraction for content optimization.

### What this workflow does
- Extracts **audience-specific metadata** (e.g., video type, tone, key topics, engagement drivers).
- Generates **customized outputs** based on six prompt types:
  - **Default**: Actionable insights and strategies.
  - **Transcribe**: Verbatim transcription.
  - **Timestamps**: Timestamped dialogue.
  - **Summary**: Concise bullet-point summary.
  - **Scene**: Visual descriptions of settings and techniques.
  - **Clips**: High-engagement video segments with timestamps.
- Saves extracted data as a text file in **Google Drive**.
- Sends analyzed outputs via **Gmail** or provides them in a completion form.

### Setup
1. Configure API keys:
   - Add your Google API key as an environment variable.
2. Input requirements:
   - Provide the YouTube video ID (e.g., `wBuULAoJxok`).
   - Select a prompt type from the dropdown menu.
3. Connect credentials:
   - Set up Google Drive and Gmail integrations in n8n.

### How to customize this workflow to your needs
- Modify the metadata prompt to extract additional fields relevant to your use case.
- Adjust the output format for summaries or transcripts based on your preferences (e.g., structured bullets or plain text).
- Add nodes to integrate with other platforms like Slack or Notion for further collaboration.

### Example Usage
1. Input: YouTube video ID (`wBuULAoJxok`) and prompt type (`summary`).
2. Output: A concise summary highlighting actionable insights, tools, and resources mentioned in the video.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Markdown, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
