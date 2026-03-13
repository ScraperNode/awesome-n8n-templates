# 🎬 Create YouTube shorts scripts from video links with Gemini AI and Telegram

> ⚡ **4,331 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![スクリーンショット 20250715 22.05.10.png](fileId:1751)
*disclaimer: This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Quick Summary

This template automates the creation of YouTube Shorts scripts. Simply send a YouTube video URL to a Telegram bot, and this workflow will use AI (Google Gemini) to generate a script optimized for Shorts and send it back to you. It streamlines your content creation process by eliminating the manual work of transcribing and scriptwriting.

## Target Audience & Problem Solved
This template is ideal for:
- YouTube Content Creators
- Social Media Marketers
- Anyone looking to efficiently repurpose - - video content

It solves the following problems:
- Quickly creating engaging short-form video content from existing long-form videos.
- Drastically reducing the time spent on video transcription, summarization, and scriptwriting.
- Enabling content idea generation on the go, even from a smartphone without access to a PC.

## **Workflow Overview**

This workflow automatically generates a script for YouTube Shorts using AI (Google Gemini) from a YouTube video URL received via Telegram, and then sends the result back to Telegram.

The process is as follows:

1.  **Receive URL**: A Telegram bot receives a YouTube video URL from a user.
2.  **Get Transcript**: It uses the community node **`n8n-nodes-supadata`** to retrieve the video's transcript via the Supadata service.
3.  **Generate Script**: Based on the retrieved transcript, Google Gemini creates a script (title and body) optimized for a YouTube Shorts video.
4.  **Send Result**: The generated script is sent back to the user who sent the original URL via Telegram.

## **How to Use**

1.  **Prerequisites**:
    *   Install the `n8n-nodes-supadata` community node as described below.
    *   Register your API keys for Telegram, Supadata, and Google Gemini as credentials in n8n.
    *   Set the appropriate credentials in each node within the workflow.
    *   For Telegram, create your bot with BotFarther.

2.  **Execution**:
    *   Activate the workflow.
    *   Send a YouTube video URL to your configured Telegram bot.
3.  **Confirmation**:
    *   After a short while, the workflow will run automatically, and you will receive the completed script from the Telegram bot.

## Customization Guide
You can tailor this template to your specific needs:
- Modify the Prompt: Edit the prompt in the Google Gemini node to change the style of the generated script (e.g., make it more casual, use a specific tone, include emojis).
- Change the AI Model: You can switch to other AI models like OpenAI. Simply add or replace the corresponding n8n node.
- Change the Notification Channel: Replace the Telegram node with a Discord or Slack node to send the results to a different platform.

## **Community Node Installation**

This workflow requires the **`n8n-nodes-supadata`** community node. Please install it using the following steps.

## **Installation from the n8n UI (Recommended)**

1.  Navigate to `Settings` &gt; `Community Nodes` in your n8n interface.
2.  Click on `Install`.
3.  Enter `n8n-nodes-supadata` in the input field and click the `Install` button.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
