# 🎬 AI video summarization with VLM run - automated content analysis for teams

> ⚡ **381 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

**Automatically transform your video uploads into AI-powered summaries with key topic extraction and instant team notifications.**

## What this workflow does

1. **Monitors Google Drive** for new video uploads
2. **Downloads and processes** videos using VLM Run AI
3. **Generates intelligent summaries** with key topics extracted
4. **Posts results to Slack** for immediate team access

## Setup

**Prerequisites:** Google Drive account, VLM Run API credentials, Slack workspace, self-hosted n8n.

You need to install [VLM Run community node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun)

**Quick Setup:**
1. Configure Google Drive OAuth2 and create video upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard)
3. Set up Slack integration for notifications
4. Update folder/channel IDs in workflow nodes
5. Test and activate

## Perfect for

- Meeting recordings and training videos
- Webinar summaries and educational content
- Content analysis and team collaboration
- Any video content requiring quick insights

## Key Benefits

- **Asynchronous processing** handles large files without timeouts
- **Multi-format support** for MP4, AVI, MOV, WebM, MKV
- **Instant team updates** via Slack notifications
- **Saves hours** of manual video review time

## How to customize

**Extend by adding:**
* Video categorization and tagging
* Integration with project management tools
* Email notifications alongside Slack
* Searchable video databases with summaries

This workflow transforms lengthy videos into actionable insights, making your content instantly accessible and shareable with your team.

## 🔗 Nodes Used

Slack, Webhook, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
