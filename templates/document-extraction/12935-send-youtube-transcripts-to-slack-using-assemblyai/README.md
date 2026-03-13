# 🔬 Send YouTube transcripts to Slack using AssemblyAI

> ⚡ **32 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

🧠 How it works
This workflow lets users extract full YouTube video transcripts directly from Slack using n8n and AssemblyAI.

When a user submits a YouTube link via a Slack slash command, the workflow validates the video duration and converts the video into an audio file. The audio is then sent to AssemblyAI for transcription. Once the transcription is complete, the workflow cleans and formats the transcript for readability and posts the full text back to Slack asynchronously.

⚙️ Features
	•	Triggers from a Slack slash command with a YouTube link
	•	Validates video length before processing (maximum 10 minutes)
	•	Converts YouTube videos to MP3 for transcription
	•	Polls transcription status until completion
	•	Cleans and reformats the transcript for easy reading
	•	Posts the full transcript back to Slack without blocking the command

💡 Use cases & expected outcomes
	•	YouTube lectures or tutorials → Get a full transcript in Slack for reference or note-taking
	•	Podcast or interview videos → Extract spoken content as text for quoting or analysis
	•	Product demos or walkthroughs → Review video content quickly without rewatching

💡 Perfect for
	•	Teams that need quick access to YouTube transcripts inside Slack
	•	Researchers, content creators, and note-takers
	•	Developers learning how to connect Slack, external APIs, and async workflows in n8n

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
