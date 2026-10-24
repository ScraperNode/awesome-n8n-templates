# 🎬 Summarize Apple podcast episodes with ElevenLabs and GPT-5-MINI

> ⚡ **44 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works
- Submit one or more Apple Podcast episode URLs via the built-in n8n form
- The workflow queries the iTunes API to retrieve each podcast's public RSS feed, then parses the XML to locate the matching episode's MP3 file
- ElevenLabs Scribe transcribes the full audio by passing the MP3 URL directly - no file download needed
- GPT-5-MINI generates a structured summary for each episode: title, key points, useful info, and a bottom line
- All summaries are combined into a formatted HTML email and delivered to your inbox

## Set up steps
- Setup takes about 5 minutes
- Connect three credentials: ElevenLabs (HTTP Header Auth with your API key), OpenAI API, and Gmail OAuth2
- Update the recipient email address in the "Send Summary Email" node
- Detailed instructions are in the sticky notes inside the workflow

## 🔗 Nodes Used

HTTP Request, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
