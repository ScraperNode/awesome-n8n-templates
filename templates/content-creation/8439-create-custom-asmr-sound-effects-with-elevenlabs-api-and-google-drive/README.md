# 🎬 Create custom ASMR sound effects with ElevenLabs API and Google Drive

> ⚡ **193 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

Generate **royalty-free** sound effects for all your projects: **ASMR**, YouTube videos, podcasts, and more. This workflow generates unique AI-powered **sound effects** using the [ElevenLabs Sound Effects API](https://try.elevenlabs.io/sound-fx).

Enter a text description of the sound you envision, and the workflow will generate it, save the **MP3** file to your Google Drive, and instantly provide a link to listen to your creation. 

It is a powerful tool for quickly producing unique ASMR triggers, ambient sounds, or specific audio textures without any complex software.

## Who's it for

This template is ideal for:
- **Content Creators**: Generate royalty-free sound effects for videos, podcasts, and games on the fly.
- **Sound Designers & Foley Artists**: Quickly prototype and generate specific audio clips for projects from a simple text prompt.
- **Developers & Hobbyists**: Integrate AI sound effect generation into projects or simply experiment with the capabilities of the ElevenLabs API.


## How to set up

1.  **Configure API Key**:
    -   Sign up for an [ElevenLabs account](https://try.elevenlabs.io/sound-fx) and get your API key.
    -   In the "ElevenLabs API" node, create new credentials and add your ElevenLabs API key.
2.  **Connect Google Drive**:
    -   Select the "Upload mp3" node.
    -   Create new credentials to connect your Google Drive account.
3.  **Activate the Workflow**:
    -   Save and activate the workflow.
    -   Use the Form Trigger's production URL to access the AI ASMR Sound Generator web form.

## Requirements

-   An active n8n instance.
-   An [ElevenLabs account](https://try.elevenlabs.io/sound-fx) for the API key.
-   A Google Drive account.

## How to customize this workflow


- **Change Storage**: Replace the Google Drive node with another storage service node like Dropbox, AWS S3, or an FTP server to save your sound effects elsewhere.
- **Modify Sound Parameters**: In the "elevenlabs_api" node, you can adjust the JSON body to control the output. Key parameters include:
    - `loop` (boolean, optional, default: `false`): Creates a sound effect that loops smoothly. Note: Only available for the ‘eleven_text_to_sound_v2’ model.
    - `duration_seconds` (number, optional, default: auto): Sets the sound's duration in seconds (from 0.5 to 30). If not set, the AI guesses the optimal duration from the prompt.
    - `prompt_influence` (number, optional, default: `0.3`): A value between 0 and 1 that controls how strictly the generation follows the prompt. Higher values result in less variation.
- **Customize Confirmation Page**: Edit the "prepare reponse" node to change the design and text of the final page shown to the user.


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
