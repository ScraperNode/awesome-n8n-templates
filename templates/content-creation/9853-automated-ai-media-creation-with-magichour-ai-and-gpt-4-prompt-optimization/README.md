# 🎬 Automated AI media creation with MagicHour AI and GPT-4 prompt optimization

> ⚡ **139 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates AI-powered image and video generation using MagicHour.ai's API, enhanced by GPT-4.1 for intelligent prompt optimization. It processes webhook requests, refines prompts using AI, generates media content, and returns the final output.

## Who's it for

Content creators, marketers, social media managers, and developers who need automated AI media generation at scale. Perfect for teams building applications that require on-demand image or video creation without manual intervention.

## How it works

The workflow receives a webhook POST request containing generation parameters (type, orientation, style, duration). GPT-4.1 analyzes and optimizes the user's prompt based on the request type (image or video), then sends it to MagicHour.ai's API. The workflow monitors the generation status through polling loops, downloads the completed media, and returns it via webhook response. Error handling ensures failed requests are captured and reported.

## Requirements

- **n8n instance** (self-hosted or cloud)
- **MagicHour.ai account** with API access (Bearer token)
- **OpenAI API account** for GPT-4.1 access
- Basic understanding of webhooks and JSON

## How to set up

**Configure credentials:**
- Add MagicHour.ai Bearer token in HTTP Request nodes (ai-image-generator, text-to-video, Get Image Details, Get Video Details)
- Add OpenAI API credentials in both Generate Image Prompt and Generate video Prompt nodes

**Activate the workflow:**
- Enable the workflow to activate the webhook endpoint
- Copy the webhook URL from the Webhook trigger node

# Test the workflow:

**Download** the n8n-magichour HTML tester [Click here to download](https://github.com/inderjeetsingh21/n8n-repo/tree/main/n8n-webhook-AI-testers/n8n-magichour-ai-tester) 

For image generation, send a POST request with this structure:
```json
{
  "action": "generate",
  "type": "image",
  "parameters": {
    "name": "My Image",
    "image_count": 1,
    "orientation": "landscape",
    "style": {
      "prompt": "A serene mountain landscape at sunset",
      "tool": "realistic"
    }
  }
}
```

For video generation, use:
```json
{
  "action": "generate",
  "type": "video",
  "parameters": {
    "name": "My Video",
    "end_seconds": 5,
    "orientation": "landscape",
    "resolution": "1080p",
    "style": {
      "prompt": "A dog running through a field"
    }
  }
}
```

## How to customize the workflow

**Adjust AI prompt optimization:** Modify the system prompts in Generate Image Prompt or Generate video Prompt nodes to change how GPT-4.1 refines user inputs. Current prompts enforce strict character limits and avoid unauthorized content.

**Change polling intervals:** Modify the Wait nodes to adjust how frequently the workflow checks generation status (useful for longer video renders).

**Modify response format:** Update the Respond to Webhook node to customize the output structure sent back to the caller.

**Add multiple output formats:** Extend Download Image/Video nodes to save files to cloud storage (Google Drive, S3) instead of just returning via webhook.

**Implement queue management:** Add a database node before MagicHour.ai calls to queue requests and prevent API rate limiting.

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
