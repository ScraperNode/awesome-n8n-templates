# 📊 ⚡AI-powered YouTube video summarization & analysis

> ⚡ **110,688 views** · 📊 [Market Research & Insights](../)

## Description

-- Disclaimer: This workflow uses a community node and therefore only works for self-hosted n8n users --

![image.png](fileId:962)

Transform YouTube videos into comprehensive summaries and structured analysis instantly. This n8n workflow automatically extracts, processes, and analyzes video transcripts to deliver clear, organized insights without watching the entire video.

**Time-Saving Features**
🚀 Instant Processing
Simply provide a YouTube URL and receive a structured summary within seconds, eliminating the need to watch lengthy videos. Perfect for research, learning, or content analysis.

🤖 AI-Powered Analysis
Leverages GPT-4o-mini to analyze video transcripts, organizing key concepts and insights into a clear, hierarchical structure with main topics and essential points.

**Smart Processing Pipeline**
📝 Automated Transcript Extraction
- Supports public YouTube video
- Handles multiple URL formats
- Extracts complete video transcripts automatically

🧠 Intelligent Content Organization
- Breaks down content into main topics
- Highlights key concepts and terminology
- Maintains technical accuracy while improving clarity
- Structures information logically with markdown formatting

**Perfect For**
📚 Researchers & Students
Quick comprehension of educational content and lectures without watching entire videos.

💼 Business Professionals
Efficient analysis of industry talks, presentations, and training materials.

🎯 Content Creators
Rapid research and competitive analysis of video content in your niche.

**Technical Implementation**
🔄 Workflow Components
- Webhook endpoint for URL submission
- YouTube API integration for video details
- Transcript extraction system
- GPT-4 powered analysis engine
- Telegram notification system (optional)

Transform your video content consumption with an intelligent system that delivers structured, comprehensive summaries while saving hours of viewing time.

## 🔗 Nodes Used

Webhook, Telegram, YouTube, Basic LLM Chain, OpenAI Chat Model, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
