# 🎬 Generate podcast topic ideas from RSS feeds with Gemini, SerpAPI and Notion

> ⚡ **66 views** · 🎬 [Content Creation & Video](../)

## Description

![3PODCAST TOPIC RESEARCH 1.jpg](fileId:4011)🤖 Automated AI content researcher: YouTube & RSS to Notion via Gemini


This workflow is basically my shortcut for researching popular topics to create podcast content on without spending all day on YouTube, scrolling X and reading websites. 

It grabs the latest videos and articles from the last 24 hours, runs them through Gemini Pro (with SerpAPI to double-check inputs), and then spits out actual content hooks and thumbnail ideas.

Everything gets cleaned up into a neat Notion database so I can just log in, see what's hot, and start working on the podcast.

What you need
To use this workflow, you need credentials for the following services:

Google Gemini API: (Free tier available via Google AI Studio) for the LLM.

SerpAPI: To allow the AI Agent to browse live Google search results.

Google Sheets: To maintain your list of target RSS feeds.

Notion: For storing the researched content.

Telegram: For mobile notifications.

Resources
Video Tutorial: https://youtu.be/IoHayi68Ckk 

Created by: Scalo Labs

## 🔗 Nodes Used

Google Sheets, RSS Read, Telegram, Notion, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
