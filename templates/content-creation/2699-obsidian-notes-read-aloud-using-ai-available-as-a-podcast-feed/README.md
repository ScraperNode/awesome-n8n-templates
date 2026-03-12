# 🎬 Obsidian notes read aloud using AI: available as a podcast feed

> ⚡ **3,020 views** · 🎬 [Content Creation & Video](../)

## Description

**How it works:**

- Send notes from Obsidian via Webhook to start the audio conversion
- OpenAI converts your text to natural-sounding audio and generates episode descriptions
- Audio files are stored in Cloudinary and automatically attached to your notes in Obsidian
- A professional podcast feed is generated, compatible with all major podcast platforms (Apple, Spotify, Google)

**Set up steps:**

- Install and configure the [Post Webhook Plugin](https://github.com/Masterb1234/obsidian-post-webhook/) in Obsidian
- Set up Custom Auth credentials in n8n for Cloudinary using the following JSON:

```json
{
  "name": "Cloudinary API",
  "type": "httpHeaderAuth",
  "authParameter": {
    "type": "header",
    "key": "Authorization",
    "value": "Basic {{Buffer.from('your_api_key:your_api_secret').toString('base64')}}"
  }
}
```

- Configure podcast feed metadata (title, author, cover image, etc.)

Note: The second flow is a generic Podcast Feed module that can be reused in any '[...]-to-Podcast' workflow. It generates a standard RSS feed from Google Sheets data and podcast metadata, making it compatible with all major podcast platforms.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
