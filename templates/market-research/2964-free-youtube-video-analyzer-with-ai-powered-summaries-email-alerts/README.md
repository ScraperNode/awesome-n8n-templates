# 📊 Free YouTube video analyzer with AI-powered summaries & email alerts

> ⚡ **5,324 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow is designed to analyze YouTube videos by extracting their transcripts, summarizing the content using AI models, and sending the analysis via email.

This workflow is ideal for content creators, marketers, or anyone who needs to quickly analyze and summarize YouTube videos for research, content planning, or educational purposes.

#### How It Works:
1. **Trigger**: The workflow starts with a manual trigger, allowing you to test it by clicking "Test workflow." You can also set a YouTube video URL manually or dynamically.

2. **YouTube Video ID Extraction**:
   - The workflow extracts the YouTube video ID from the provided URL using a custom JavaScript function. This ID is necessary for fetching the transcript.

3. **Transcript Generation**:
   - The video ID is sent via an HTTP request to generate the transcript. You need to replace `APIKEY` with a free API key from the service.

4. **Transcript Validation**:
   - The workflow checks if a transcript exists for the video. If a transcript is available, it proceeds; otherwise, it stops.

5. **Full Text Extraction**:
   - If a transcript exists, the workflow combines all transcript segments into a single text variable for further analysis.

6. **AI-Powered Analysis**:
   - The full transcript is passed to an AI model (DeepSeek, OpenAI, or OpenRouter) for analysis. The AI generates a structured summary, including a title and key points, formatted in markdown.

7. **Email Notification**:
   - The analysis results (title and summary) are sent via email using SMTP credentials. The email contains the structured summary of the video.

#### Set Up Steps:
1. **YouTube Transcript API**:
   - Obtain a free API key from **youtube-transcript.io** and replace `APIKEY` in the "Generate transcript" node with your key.

2. **AI Model Configuration**:
   - Configure the AI model nodes (DeepSeek, OpenAI, or OpenRouter) with the appropriate API credentials. You can choose one or multiple models depending on your preference.

3. **Email Setup**:
   - Configure the "Send Email" node with your SMTP credentials (e.g., Gmail, Outlook, or any SMTP service). Ensure the email settings are correct to send the analysis results.

#### Key Features:
- **Free Tools**: Uses **youtube-transcript.io** for free transcript generation.
- **AI Models**: Supports multiple AI models (DeepSeek, OpenAI, OpenRouter) for flexible analysis.
- **Email Notifications**: Sends the analysis results directly to your inbox.
- **Customizable**: Easily adapt the workflow to analyze different videos or use different AI models.

## 🔗 Nodes Used

Send Email, HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
