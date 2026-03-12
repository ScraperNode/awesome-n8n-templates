# 🎬 Generate and schedule themed social posts with Notion, OpenAI, Fal.ai and Postiz

> ⚡ **156 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow automates your daily social media content creation by generating unique, on-brand posts based on specific themes stored in Notion. It creates images using Fal.ai, writes captions with OpenAI, and schedules them to multiple platforms via Postiz.*

**📺 How It Works**

1. **Daily Trigger:** The workflow runs automatically every day at a set time.
2. **Context Fetching:** It pulls your "Brand Guidelines" and the specific "Post Theme" for the day (e.g., Expert Advice, System, or Activity) from **Notion**.
3. **Image Generation:** It uses **OpenAI** to craft a detailed image prompt based on the theme, then sends it to **Fal.ai** to generate a high-quality visual.
4. **Caption Writing:** It uses **OpenAI** again to write an engaging caption that adheres to your brand voice.
5. **Scheduling:** Finally, it uploads the media to **Postiz** and schedules it for publication on LinkedIn, X (Twitter), Facebook, and Instagram.

**🔧 How to set up**

1. **Notion:** Create a "Brand Guidelines" database and a "Post Themes" database.
2. **Configure Nodes:** Update the Notion nodes in the workflow to point to your specific Database IDs.
3. **Credentials:** Connect your accounts for OpenAI, Fal.ai, Google Drive, Notion, and Postiz.
4. **Postiz IDs:** In the final HTTP Request nodes, replace the `integration_id` fields with the specific IDs from your Postiz account for each social platform.

**📋 Requirements**

* n8n (Self-hosted or Cloud)
* Notion account
* OpenAI API Key
* Fal.ai API Key
* Postiz instance (or account)
* Google Drive account (for temporary image storage)

## 🔗 Nodes Used

HTTP Request, Google Drive, Notion, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
