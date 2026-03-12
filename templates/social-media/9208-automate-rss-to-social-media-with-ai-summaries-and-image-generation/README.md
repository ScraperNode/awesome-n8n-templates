# 📱 Automate RSS-to-social media with AI summaries and image generation

> ⚡ **960 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works

This workflow automates publishing content from any RSS feed directly to Facebook and Instagram.
It reads new RSS entries, extracts the article content, generates a short social-media-friendly summary using an AI model, and then creates an AI-generated image based on the topic.
The post is uploaded to Facebook and Instagram (via Graph API) and logged in Google Sheets for reference.
Finally, a Telegram bot sends you a notification with links to the published posts.

## Set up steps
	1.	Insert your RSS feed URL in the RSS Feed Trigger node.
	2.	Configure Google Sheets credentials and replace the example sheet with your own.
	3.	In Supabase Config, insert your Supabase URL and bucket name.
	4.	In Facebook/Instagram nodes, replace [INSERT_YOUR_SITE_ID] with your own page or account ID.
	5.	Connect your Facebook Graph API credentials (remove hardcoded tokens).
	6.	Connect your OpenAI / Anthropic / Gemini credentials for text and image generation.
	7.	Set up your Telegram Bot credentials if you want to receive notifications.

## Notes
	•	Sticky notes inside the workflow explain each section (RSS trigger, filtering, content generation, posting, logging, notifications).
	•	No credentials are saved in the template – you must connect your own before running.
	•	All generated content (text + images) is fully automated but can be customized (e.g. change AI prompts for your preferred style).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Basic LLM Chain, Anthropic Chat Model, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
