# 🎬 Create Reddit-style story videos from text or Reddit with OpenRouter, ElevenLabs, and Zvid

> ⚡ **8 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn your own story text or an authorized Reddit post into a captioned vertical video with OpenRouter, ElevenLabs and Zvid. Manual input is the default; automatic Reddit fetching needs approved OAuth access. Review the finished MP4 in n8n before publishing.

## How it works
1. Runs every day at 9am (or via a manual trigger) and loads the workflow configuration, including whether to use manual text or Reddit.
2. Either validates your manual story text or fetches the day’s top posts from a configured subreddit via Reddit OAuth and selects an unused story within the character limits.
3. Sends the selected story to OpenRouter to rewrite it into a short narration with scene beats and stock-footage search keywords, then normalizes and splits it into shots.
4. Searches Zvid’s stock library for matching video clips or images for each shot and selects background music from Zvid’s audio library within duration and file-size limits.
5. Generates a voiceover with per-word timestamps using ElevenLabs, uploads the MP3 to Zvid, and builds a Zvid render project with branded scenes and word-timed animated captions.
6. Validates the Zvid project for schema and credit requirements, then either saves a draft to the Zvid editor for preview (dry run) or submits a render job.
7. Polls Zvid until rendering completes (or times out), then outputs the finished video URL and optionally downloads the rendered file for viewing in n8n.

## Setup
1. Install `@zvid/n8n-nodes-zvid` from Settings → Community nodes before configuring credentials. A workspace owner/admin may need to install it. On n8n Cloud, the owner can install verified Zvid from the Nodes panel.
2. Create a Zvid API credential with your key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io. Select it on every Zvid node and Upload voiceover.
3. Connect an OpenRouter API credential to Write script. Add an ElevenLabs Header Auth credential named xi-api-key with Text to Speech permission and select it on Generate voiceover. Choose a voice your plan supports.
4. Default sourceMode=manual requires manualStoryTitle and manualStoryText in Config (400–2200 characters, unless you change the limits). Optional sourceMode=reddit requires an approved Reddit OAuth2 app connected to Fetch top stories, plus subreddit and a descriptive redditUserAgent. Without approved access, use manual input.
5. Set channelHandle, ctaText, voice, colors and targetSeconds in Config. dryRun=false is the default and spends Zvid render credits. Set true for an editor draft and credit quote; OpenRouter and ElevenLabs may still charge. Test manually and review the output before activating the schedule.

## Requirements
- n8n with the verified Zvid community node, Zvid render credits, OpenRouter access, and an ElevenLabs key with Text to Speech permission. Supply your own story or approved Reddit OAuth access, and use material you have permission to repurpose.

## Customization
- Adjust branding, captions, voice and duration in Config. Manual mode reuses the text until you replace it. Automatic Reddit mode records successfully rendered post IDs in production to reduce repeats.

## Additional info
All supported Zvid operations use the Zvid node. Multipart voiceover upload uses HTTP Request because the published node lacks that operation. Reddit HTTP 429 stops before AI and rendering and reports Retry-After when supplied. Open Watch video → Binary → data → View to review the MP4. Social publishing is not included. The manual-story path was tested through rendering and Watch video; automatic Reddit OAuth fetching has not been live-verified.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
