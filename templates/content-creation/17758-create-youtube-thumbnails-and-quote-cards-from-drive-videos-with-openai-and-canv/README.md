# 🎬 Create YouTube thumbnails and quote cards from Drive videos with OpenAI and Canvora

> ⚡ **59 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow watches a Google Drive folder for new videos, transcribes the audio with OpenAI, generates a thumbnail headline and pull quotes, sends them to Canvora to design a YouTube thumbnail and quote cards, then creates a Gmail draft with the results for review.

## How it works
1. Triggers when a new file is created in a specific Google Drive folder.
2. Downloads the video from Google Drive and transcribes its audio using OpenAI.
3. Uses OpenAI to extract a short thumbnail headline and three pull-quotes from the transcript and formats them into a single concept payload.
4. Sends the concept to the Canvora API to generate a YouTube thumbnail and quote card visuals.
5. Polls Canvora for the generation status until it completes, fails, or times out.
6. If the generation succeeds, builds an HTML review message with the generated image URLs and creates a Gmail draft containing the visuals and an edit link.

## Setup
1. Connect your Google Drive account and select the folder to watch in the trigger.
2. Add an OpenAI credential for audio transcription and text extraction.
3. Create a Canvora account, generate an API key, and configure the Canvora HTTP Request nodes to send it via header authentication (X-API-Key).
4. Connect your Gmail account and set the draft settings (such as the target mailbox and any default options) as needed.

## Requirements
- A free **Canvora** account (API keys on all plans).
- **Google Drive** + **Gmail** connections, and an **OpenAI** API key (transcription + concept).

## Customization
- Add 'instagram_reel' or 'twitter_post' to outputFormats (100+ formats: GET /api/formats).
- Pass a 'brandId' (GET /api/brands).
- Change "Create Gmail Draft" to "send" to skip review, or upload the images to Drive.

## Additional info
- Core nodes – Cloud & self-hosted. Nodes: Google Drive Trigger, Google Drive, OpenAI (transcribe + chat), Code, HTTP Request, Wait, IF, Gmail.
- Works inside ChatGPT, Claude & any workflow → canvora.ai/for-agents.

**Example output** (thumbnail + quote card from a video transcript – real run):

![YouTube thumbnail generated from the transcript](https://cdn.canvora.ai/visualdocs/generations/876e463e-928a-406c-9fa9-329d91784a7d/youtube-thumbnail-1-1785171415063-73e3a49c.png)
![Quote card from a pulled line](https://cdn.canvora.ai/visualdocs/generations/876e463e-928a-406c-9fa9-329d91784a7d/quote-card-2-1785171428339-2d7815a8.png)

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
