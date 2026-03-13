# 🔬 Transcribe YouTube videos & create GEO summaries with Whisper and GPT-4o-mini in Notion

> ⚡ **1,657 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📊 Description
Automate your YouTube research workflow by extracting audio from any video, transcribing it with Whisper AI, and generating structured GEO (Goal–Execution–Outcome) summaries using GPT-4o-mini. 🎥🤖 This template transforms unstructured video content into actionable, searchable insights that are automatically stored in Notion with rich metadata. It’s ideal for creators, educators, analysts, and knowledge workers who want to convert long videos into concise, high-quality summaries without manual effort. Perfect for content indexing, research automation, and knowledge-base enrichment. 📚✨

## 🔁 What This Template Does
• Triggers on a schedule to continuously process new YouTube videos. ⏰
 • Fetches video metadata (title, description, thumbnails, published date) via the YouTube API. 🎥
 • Downloads audio using RapidAPI and prepares it for transcription. 🎧
 • Transcribes audio into text using OpenAI Whisper. 📝
 • Skips invalid entries when no transcript is generated. 🚫
 • Merges the transcript with metadata for richer AI context. 🔗
 • Uses GPT-4o-mini to generate Goal, Execution, Outcome, and Keywords via structured JSON. 🤖📊
 • Parses the AI-generated JSON into Notion-friendly formats. 🔍
 • Creates a Notion page with GEO sections, keywords, and video metadata. 📄🏷️
 • Produces a fully searchable knowledge record for every processed video. 📚✨

## ⭐ Key Benefits
✅ Converts long YouTube videos into concise, structured knowledge
 ✅ AI-powered GEO summaries improve comprehension and recall
 ✅ Zero manual transcription or note-taking — 100% automated
 ✅ Seamless Notion integration creates a powerful video knowledge base
 ✅ Works on autopilot with scheduled triggers
 ✅ Saves hours for educators, researchers, analysts, and content teams

## 🧩 Features
- YouTube API integration for metadata retrieval
- RapidAPI audio downloader
- OpenAI Whisper transcription
- GPT-4o-mini structured analysis through LangChain
- Memory buffer + structured JSON parser for consistent results
- Automatic Notion page creation
- Fail-safe transcript validation (IF node)
- Metadata + transcript merging for richer AI context
- GEO (Goal–Execution–Outcome) summarization workflow

## 🔐 Requirements
- YouTube OAuth2 credentials
- OpenAI API key (Whisper + GPT-4o-mini)
- Notion API integration token + database ID
- RapidAPI key for YouTube audio downloading
- n8n with LangChain nodes enabled

## 🎯 Target Audience
- YouTubers and content creators archiving their content
- Researchers and educators summarizing long videos
- Knowledge managers building searchable Notion databases
- Automation teams creating video intelligence workflows

## 🛠️ Step-by-Step Setup Instructions
- Add YouTube OAuth2, OpenAI, Notion, and RapidAPI credentials. 🔑
- Replace the placeholder RapidAPI key in the “Get YouTube Audio” node. ⚙️
- Update the Notion database ID where summaries should be stored. 📄
- Configure the Schedule Trigger interval based on your needs. ⏰
- Replace the hardcoded video ID (if present) with dynamic input or playlist logic. 🔗
- Test with a sample video to verify transcription + AI + Notion output. ▶️
- Enable the workflow to run automatically. 🚀

## 🔗 Nodes Used

HTTP Request, YouTube, Notion, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
