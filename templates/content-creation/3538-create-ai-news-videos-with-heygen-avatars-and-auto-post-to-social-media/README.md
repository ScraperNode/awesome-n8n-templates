# 🎬 Create AI news videos with HeyGen avatars and auto-post to social media

> ⚡ **1,554 views** · 🎬 [Content Creation & Video](../)

## Description

Automatically generate short AI avatar videos based on trending news, then post them across social media platforms—fully automated using n8n, HeyGen, ChatGPT, and Blotato.

### Tools & Services Used:

- n8n (Self-hosted required due to Community Nodes)
- HeyGen (for creating AI avatar videos)
- OpenAI (for script and caption generation)
- Blotato (for social media distribution)
- Hacker News (for sourcing trending articles)


### Workflow Overview:

This automation performs the following steps:

1. Fetches trending news from Hacker News
2. Generates a short script using ChatGPT
3. Creates an AI avatar video with HeyGen
4. Generates platform-specific captions
5. Posts the content across social media with Blotato

### Prerequisites:

Make sure you have active accounts and API keys for:

- HeyGen
- OpenAI
- Blotato



### How to Use This Template

Step 1: Import the Template

1. Open your self-hosted n8n instance  
2. Go to "Workflows" &gt; "Create Workflow"  
3. Click the three dots (…) &gt; "Import from File"  
4. Upload the downloaded JSON file  

Step 2: Configure API Keys

Only two nodes need customization:

- `Setup HeyGen`: Add your HeyGen API key, avatar ID, and voice ID
- `Prepare for Publish`: Add your Blotato API key, account IDs, and page IDs

Optional platforms like Pinterest and Bluesky are already disabled by default.

### Finding Your HeyGen Avatar & Voice IDs
To customize the AI avatar video:

Log into your HeyGen Dashboard

Navigate to "Avatars" → choose or create an avatar → copy the Avatar ID

Navigate to "Voices" → select a preferred voice → copy the Voice ID

You can upload a custom avatar or voice if you have access to those features in your plan

This allows you to align the video style with your brand’s tone and personality.

### Initial Test Run

For your first run:

1. Shorten the AI script in the prompt to 5 seconds
2. Enable only one social media platform
3. Adjust the wait time to 2 minutes to speed up testing
4. Verify that the video is created and successfully posted

Once successful, enable more platforms and scale your automation.

Workflow Diagram:
![Screen Shot 20250415 at 23.05.43.png](fileId:1115)



### Use Cases

- Business owners automating daily content
- Creators scaling short-form video production
- Freelancers offering automation as a service
- Anyone building an AI-driven media workflow


### Disclaimer
This workflow uses Community Nodes, which only function on self-hosted n8n instances.
This workflow may not work on n8n Cloud without some modifications.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
