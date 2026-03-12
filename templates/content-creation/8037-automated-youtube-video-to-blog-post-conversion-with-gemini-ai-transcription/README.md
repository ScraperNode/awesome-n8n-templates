# 🎬 Automated YouTube video to blog post conversion with Gemini AI transcription

> ⚡ **1,860 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automatically turns any YouTube video into a structured blog post with Gemini AI. By sending a simple POST request with a YouTube URL to a webhook, it downloads the video’s audio, transcribes the content, and generates a blog-ready article with a title, description, tags, and category. The final result, along with the full transcript and original video URL, is delivered to your chosen webhook or CMS.

## How it works:
The workflow handles the entire process of transforming YouTube videos into complete blog posts using Gemini AI transcription and structured text generation. Once triggered, it:
- Downloads the video’s audio
- Transcribes the spoken content into text
- Generates a blog post in the same language as the video’s original language
- Creates:
	- A clear and engaging title
	- A short description
	- Suggested category and tags
	- The full transcript of the video
	- The original YouTube video URL

This makes it easy to repurpose video content into publish-ready articles in minutes.

This template is ideal for content creators, marketers, educators, and bloggers who want to quickly turn video content into written posts without manual transcription or editing.

## Setup Instructions
1. Install **yt-dlp** on your local machine or server where n8n runs. This is required to download YouTube audio.
2. Get a Google Gemini API key and configure it in your AI nodes.
3. Webhook Input Configuration:
	- Endpoint: The workflow starts with a Webhook Trigger.
	- Method: POST
	- Example Request Body:
```
{
	"videoUrl": "https://www.youtube.com/watch?v=lW5xEm7iSXk"
}
```

4. Configure Output Webhook: Add your target endpoint in the last node where the blog post JSON is sent. This could be your CMS, a Notion database, or another integration.

## Customization Guidance
- **Writing Style:** Update the AI Agent’s prompt to adjust tone (e.g., casual, professional, SEO-optimized).
- **Metadata:** Modify how categories and tags are generated to fit your website’s taxonomy.
- **Integration:** Swap the final webhook with WordPress, Ghost, Notion, or Slack to fit your publishing workflow.
- **Transcript Handling:** Save the full transcript separately if you also want searchable video archives.

## 🔗 Nodes Used

Webhook, AI Agent, Structured Output Parser, Read/Write Files from Disk, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
