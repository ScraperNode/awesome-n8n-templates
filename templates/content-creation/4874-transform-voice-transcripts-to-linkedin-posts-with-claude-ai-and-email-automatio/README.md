# 🎬 Transform voice transcripts to LinkedIn posts with Claude AI and email automation

> ⚡ **414 views** · 🎬 [Content Creation & Video](../)

## Description

Takes your raw, unpolished voice transcripts and transforms them into well-structured LinkedIn posts using AI. Perfect for when you have good ideas but they come out as rambling thoughts.

**The Problem:** You record voice memos with great ideas, but when you read the transcript, it's full of "ums," incomplete sentences, and scattered thoughts. Turning that into a professional LinkedIn post takes forever.

**The Solution:** Email your raw transcript to this workflow. It combines your unpolished content with examples from your inspiration document (posts you've saved that match your desired style), then uses AI to create a clean, engaging LinkedIn post.

**What actually happens:**
- You email a raw voice transcript to your workflow email
-The workflow pulls style examples from your Google Doc
- AI reformats your scattered thoughts into a coherent 150-300 word LinkedIn post
- You get an email back with the polished content + suggested image description
- Copy, paste, and post to LinkedIn

**You provide:** The raw transcript (from your phone's voice recorder or any transcription tool), a Google Doc with LinkedIn posts you admire for style reference.

**You get:** Professional LinkedIn content that sounds like you, but organized and polished.

**Technical requirements:** Anthropic API, email account, Google Doc with example posts.

This is basically having an AI writing assistant that knows your voice and preferred style, turning your brain dumps into professional content.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, Filter, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
