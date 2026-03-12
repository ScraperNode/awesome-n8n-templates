# ⚡ Android to n8n automation | Save links to with Readeck, Openrouter, SerpAPI

> ⚡ **3,714 views** · ⚡ [Personal Productivity](../)

## Description

This workflow is for automating and centralizing your bookmarking process using AI-powered tagging and seamless integration between your Android device and a self-hosted Read Deck platform (https://readeck.org/en/). This workflow eliminates manual entry, organizes links with smart AI-generated tags, and ensures your bookmarks are always accessible, searchable, and secure.

[![Video Thumbnail](https://img.youtube.com/vi/xveKt6dcWqc/maxresdefault.jpg)](https://youtu.be/xveKt6dcWqc?si=7KN9eZoKqS7bKrqL)

**How It Works**

📱 **Android Shortcut Integration**

Use the HTTP Shortcuts app to create a 1-tap trigger that sends URLs and titles from your Android phone directly to n8n.

🤖 **AI-Powered Tagging & Processing**
Leverage ChatGPT-4 to analyze content context and auto-generate relevant tags (e.g., “Tech Tutorials,” “Productivity Tools”).
Extract clean titles and URLs from messy shared data (even from apps like Twitter or Reddit).

🔗 **Readeck Integration**
Automatically save processed bookmarks to your self-hosted Readeck-like platform with structured metadata (title, URL, tags).

⚡ **Silent Automation**
It runs in the background—no pop-ups or interruptions.

🔒 **Pro Security**
Optional authentication (API tokens, headers) to protect your data.



### Use Case
Perfect for researchers, content creators, or anyone drowning in tabs who wants to:

1. Save articles, videos, or social posts in one click.
2. Organize bookmarks with AI-generated tags.
3. Build a personal knowledge base that’s always accessible.



### Tutorial

1️⃣ **Set Up Android Shortcut**
1. Install "HTTP Shortcuts" and configure it to send data to your n8n webhook.
2. Enable “Share Menu” to trigger bookmarks from any app.

2️⃣ **Configure n8n Workflow**
Import the template and add your Read Deck API token (or similar service).

3️⃣ **Test & Scale**
Share a link from your phone—watch it appear in Read Deck instantly!

**Add error handling or notifications for advanced use.**

**Note:** For self-hosted platforms, ensure your instance is publicly accessible (or use a VPN).


### Why Choose This Workflow?
**Zero Manual Entry:** Save hours of copying/pasting.
**AI Organization:** Say goodbye to chaotic bookmark folders.
**Privacy First:** Host your data on your terms.

Transform your bookmarking chaos into a streamlined system—try “Save: Bookmark” today! 🚀

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Simple Memory, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
