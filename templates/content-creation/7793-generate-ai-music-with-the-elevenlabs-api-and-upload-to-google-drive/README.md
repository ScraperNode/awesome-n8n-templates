# 🎬 Generate AI music with the ElevenLabs API and upload to Google Drive

> ⚡ **859 views** · 🎬 [Content Creation & Video](../)

## Description

This generate unique AI-powered **music** tracks using the [ElevenLabs Music API](https://try.elevenlabs.io/api-music). 

Enter a text description of the music you envision, and the workflow will compose it, save the **MP3** file to your Google Drive, and instantly provide a link to listen to your creation. 

It is a powerful tool for quickly producing background music, soundscapes, or musical ideas without any complex software.

## Who's it for

This template is ideal for:
- Content Creators: Generate royalty-free background music for videos, podcasts, and streams on the fly.
- Musicians & Producers: Quickly brainstorm musical themes and ideas from a simple text prompt.
- Developers & Hobbyists: Integrate AI music generation into projects or simply experiment with the capabilities of the ElevenLabs API.

## How to set up

1. Configure API Key:
   - Sign up for an [ElevenLabs account](https://try.elevenlabs.io/api-music) and get your API key.
   - In the "API Key" node, replace the placeholder value with your actual ElevenLabs API key.
2. Connect Google Drive:
   - Select the "Upload mp3" node.
   - Create new credentials to connect your Google Drive account.
3. Activate the Workflow:
   - Save and activate the workflow.
   - Use the Form Trigger's production URL to access the AI Music Generator web form.

## Requirements

- An active n8n instance.
- An [ElevenLabs account](https://try.elevenlabs.io/api-music) for the API key.
- A Google Drive account.

## How to customize this workflow

- Change Storage: Replace the Google Drive node with another storage service node like Dropbox, AWS S3, or an FTP server to save your music elsewhere.
- Modify Music Quality: In the "elevenlabs_api" node, you can change the output_format in the body to adjust the MP3 quality. Refer to the ElevenLabs API documentation for available options.
- Customize Confirmation Page: Edit the "prepare reponse" node to change the design and text of the final page shown to the user.





.

---
[Phil | Inforeole](https://inforeole.fr) | [Linkedin](https://www.linkedin.com/in/philippe-eveilleau-inforeole/)

🇫🇷 Contactez nous pour automatiser vos processus

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
