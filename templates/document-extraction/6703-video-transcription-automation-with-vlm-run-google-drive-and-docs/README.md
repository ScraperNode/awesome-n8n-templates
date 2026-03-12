# 🔬 Video transcription automation with VLM Run, Google Drive and Docs

> ⚡ **945 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## What this workflow does
1. **Monitors Google Drive** for new video file uploads
2. **Downloads and processes** videos using VLM Run AI transcription
3. **Generates accurate transcripts** with timestamps, audio content, and video descriptions  
4. **Saves formatted reports** to Google Docs for instant access and sharing

## Setup
**Prerequisites:** Google Drive account, VLM Run API credentials, Google Docs access, self-hosted n8n.
You need to install [VLM Run community node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun)

**Quick Setup:**
1. Configure Google Drive OAuth2 and create video upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard)
3. Set up Google Docs integration for transcript storage
4. Update folder/document IDs in workflow nodes
5. Test with sample video files and activate

## Perfect for
- Meeting transcription and documentation
- Content creation and video accessibility
- Educational content processing and analysis
- Interview transcription and note-taking
- Podcast and webinar documentation
- Legal deposition and testimony recording
- Customer support call analysis

## Key Benefits
- **Asynchronous processing** handles large video files without timeouts
- **Multi-format support** for MP4, AVI, MOV, WebM, MKV formats
- **Dual content extraction** captures both audio transcripts and video descriptions
- **Eliminates manual transcription** saving hours of documentation time
- **High accuracy speech recognition** with multi-language support
- **Structured output** with timestamps and scene descriptions

## How to customize
**Extend by adding:**
* Speaker identification and voice separation
* Sentiment analysis and keyword extraction
* Integration with project management tools
* Email notifications for transcription completion
* Summary generation and key point extraction
* Multi-language translation capabilities
* Search indexing for transcript databases
* Integration with video editing software

This workflow transforms manual video transcription into an automated, accurate, and efficient process, making video content accessible and searchable for your business operations, educational needs, or content creation workflows.

## 🔗 Nodes Used

Webhook, Google Drive, Google Docs, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
