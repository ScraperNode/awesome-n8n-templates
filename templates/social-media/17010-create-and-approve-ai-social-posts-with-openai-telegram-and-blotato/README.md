# 📱 Create and approve AI social posts with OpenAI, Telegram and Blotato

> ⚡ **2,278 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs daily to generate an AI-written social post and DALL·E image with OpenAI, sends it to Telegram for approval, and—if approved—publishes it to LinkedIn, X, Instagram, Facebook, and Threads via [Blotato](https://blotato.com/?ref=firas)  while logging outcomes to Google Sheets.

## How it works
1. Runs every 24 hours on a schedule trigger.
2. Uses OpenAI to generate a single content topic (title, angle, and hook) based on your niche, audience, and language settings.
3. Uses OpenAI to write one social post with a separate hashtag line and an image prompt in your specified tone and style.
4. Uses OpenAI Images (DALL·E) to generate a matching image and extracts a shareable image URL.
5. Sends the post text, hashtags, and image link to Telegram and waits for you to approve or skip within the configured time window.
6. If approved, publishes the post with the image to LinkedIn, X, Instagram, Facebook, and Threads using [Blotato](https://blotato.com/?ref=firas)  and appends a “Published” log row to Google Sheets.
7. If skipped or not approved, appends a “Skipped” log row to Google Sheets.

## Setup
1. Add OpenAI API credentials and ensure the selected chat model and image model in the configuration match models available to your account.
2. Add Telegram credentials, set the `telegram_chat_id` in the Configuration values, and make sure you can receive and respond to approval buttons.
3. Add [Blotato](https://blotato.com/?ref=firas)  API credentials and select the correct Blotato account IDs for LinkedIn, X, Instagram, Facebook (including the Facebook Page ID), and Threads.
4. Add Google Sheets OAuth credentials and set the target spreadsheet document ID and sheet/tab name used for logging in both Google Sheets steps.
5. Review and adjust the Configuration values (niche, tone, hashtag count, image size, and approval wait time) and the schedule interval as needed.

## Additional info
## Generate AI social posts and publish to multiple networks with Blotato

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-AI-social-posts-and-publish-to-multiple-networks-with-Blotato-39a3d6550fd981e29df3f2a5cd8cc5c6)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
