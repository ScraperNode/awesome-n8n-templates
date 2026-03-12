# 🔬 Summarize PDFs with Groq AI and convert to audio using Qwen TTS

> ⚡ **1,817 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### How it works
- **User Uploads PDF** : The workflow accepts a PDF via webhook.
- **Extract Text** : n8n extracts the text content from the PDF.
- **Summarize with AI** : The extracted text is passed to an AI model (Groq) with OpenAI model for summarization.
- **Generate Audio** : The summary text is sent to a TTS (Text-to-Speech) API (Qwen-TTS-Demo), you can use other free alternatives.
- **Serve Result** : The workflow outputs both Summary and Audio File URL (WAV link) which you can attached to your audioPlayer.

This allows users to read or listen to the summary instantly.

### How to use / Requirements
- **Import Workflow** : Copy/paste the workflow JSON into your n8n instance.
- **Set Up Input Trigger** : If you want users to upload directly you can use webhook or any other trigger.
- **Configure AI Node** : Add your own API key for (Groq / Open AI).
- **Configure TTS Node** : Add credentials for your chosen TTS service.
- **Run Workflow** : Upload a PDF and get back the summary and audio file url.

[n8n-smart pdf summarizer & voice generator](https://github.com/laiba5/n8n-assests/blob/45a18ec5cdb634dc3de88102b68f3b8476eb82a9/Smart%20PDF%20Summary%20and%20Voice.PNG)


Please reach out to me at [Laiba Zubair](https://www.linkedin.com/in/laiba-zubair-717783239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app) if you need further assistance with you n8n workflows and automations!

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Simple Memory, Extract from File, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
