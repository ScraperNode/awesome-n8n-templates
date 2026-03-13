# 📊 Summarize YouTube videos in Slack using AssemblyAI transcription and OpenAI

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

🧠 How it works
This workflow lets users generate structured summaries from YouTube videos directly inside Slack using n8n, AssemblyAI, and OpenAI.

When a user submits a YouTube link via a Slack slash command, the workflow extracts the video ID and validates the video duration. Videos longer than the supported limit are stopped early with a clear message sent back to Slack.

For valid videos, the workflow downloads the video audio as an MP3 file and sends it to AssemblyAI for transcription. Once the transcription is complete, the transcript is passed to an AI model to generate a structured summary.

The final result includes a concise TL;DR, key takeaways, and notable quotes, which are formatted and posted back to Slack asynchronously using the original response URL.

⚙️ Features
	•	Triggers from a Slack slash command with a YouTube link
	•	Validates video length before processing (maximum 10 minutes)
	•	Downloads YouTube audio as MP3 using RapidAPI
	•	Transcribes audio using AssemblyAI
	•	Generates structured summaries (TL;DR, key takeaways, notable quotes)
	•	Posts the summarized result back to Slack asynchronously

💡 Use cases & expected outcomes
	•	Educational YouTube videos → Receive a clear summary instead of watching the full video
	•	Long-form talks or interviews → Quickly get key points and memorable quotes
	•	Research and learning → Extract insights from videos without manual note-taking
	•	Content discovery → Decide whether a video is worth watching based on its summary

In all cases, users receive a clear, structured summary of a YouTube video directly in Slack.

💡 Perfect for
	•	Teams sharing YouTube links and wanting quick context
	•	Researchers and learners reviewing long video content
	•	Content creators analyzing videos efficiently
	

🧩 Notes
	•	Please note that this workflow generates summaries, not full transcripts

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
