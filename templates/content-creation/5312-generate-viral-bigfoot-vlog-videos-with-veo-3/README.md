# 🎬 Generate viral Bigfoot vlog videos with Veo 3

> ⚡ **5,114 views** · 🎬 [Content Creation & Video](../)

## Description

Transform simple ideas into viral-ready Bigfoot vlogs! This automated workflow creates charming 8-scene video content featuring "Sam" the Bigfoot - a lovable, outdoorsy character inspired by popular YouTube adventure channels.

**How It Works**

The workflow transforms your creative concept into professional video content through three automated stages:
1. Story Generation - AI creates an 8-scene narrative arc featuring Sam the Bigfoot, complete with character-consistent dialogue and engaging plot development
2. Human Approval - Review and approve the generated storyline via Slack before proceeding to video production
3. Video Production - Each scene is automatically converted into 8-second video clips using Google's VEO 3 AI, then uploaded to Google Drive for easy access

**Required Credentials**

- Anthropic API - Add your Claude API key for story generation
- FAL API - Configure your FAL.ai key for VEO 3 video generation
- Slack OAuth - Set up Slack app with channel permissions for approvals
- Google Drive OAuth - Connect your Google Drive for video storage

**Configuration Steps**

1. Import the workflow into your n8n instance
2. Update Slack channel ID in the notification nodes to match your desired channel
3. Set Google Drive folder - Update the folder ID where videos should be stored
4. Test the form trigger - The workflow starts with a web form for video ideas
5. Customize character (optional) - Modify Sam's personality in the narrative prompts

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
