# 🎬 Podcast to X (Twitter) pipeline with OpenAI Whisper, GPT-4o & Slack approval

> ⚡ **292 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

Turn your favorite podcast episodes into engaging social media content automatically. This workflow fetches new episodes from an RSS feed, transcribes the audio using OpenAI Whisper, generates a concise summary using GPT-4o, and drafts a tweet. It then sends the draft to Slack for your review before posting it to X (Twitter).

## Who is this for
Content creators, social media managers, and podcast enthusiasts who want to share insights without manually listening to and typing out every episode.

## Key Features
- **Large File Support:** Includes a custom logic to download audio in chunks, ensuring stability even with long episodes (preventing timeouts).
- **Human-in-the-Loop:** Nothing gets posted without your approval. You can review the AI-generated draft in Slack before it goes live.
- **High-Quality AI:** Uses OpenAI's Whisper for accurate transcription and GPT-4o for intelligent summarization.

## How it works
1. **Monitor:** Checks the Podcast RSS feed daily for new episodes.
2. **Process:** Downloads the audio (handling large files via chunking) and transcribes it.
3. **Draft:** AI summarizes the transcript into bullet points and formats it for X (Twitter).
4. **Approve:** Sends the draft to a Slack channel.
5. **Publish:** Once approved by you, it posts the tweet to your X account.

## Requirements
- OpenAI API Key
- Slack Account & App (Bot Token)
- X (Twitter) Developer Account (OAuth2)

## Setup instructions
1. **RSS Feed:** The template defaults to "TED Talks Daily" for demonstration. Open the `[Step 1] RSS` node and replace the URL with your target podcast.
2. **Connect Credentials:** Set up your credentials for OpenAI, Slack, and X (Twitter) in the respective nodes.
3. **Slack Channel:** In the `[Step 12] Slack` node, select the Channel ID where you want to receive the approval request.

## 🔗 Nodes Used

HTTP Request, RSS Read, Slack, X (Formerly Twitter), Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
