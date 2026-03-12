# 🎬 Auto-Translate YouTube Video Content with Google Gemini AI

> ⚡ **1,285 views** · 🎬 [Content Creation & Video](../)

## Description

If you want to reach a wider audience, having your video titles and descriptions in multiple languages can help you connect with more viewers. This template provides the configuration needed to generate translations and update them directly on YouTube.


### How it works

- **Defines Video ID and Languages** You can get the ID from the video URL. If you’re unsure, click the Share button, it will provide the ID at between the "/" and the "?si="
- **Fetches video information** As long as the workflow has the video ID, it can retrieve the video information, whether the video is published or not.
- **Check languages to translate** If no default language is set in the video details, the workflow will assume "en" (English) as the default. To overwrite the default language, replace 'en' in line 2 of the code.
- **AI Agent Translator**: You can improve results by refining the prompt. Feel free to experiment, just don’t change the formatting structure.
- **Updates Video Localization** The API requires to send current default version again along with the translations in the Body.
- **Output URL** returns the URL for the video’s localization. It may take a few seconds to appear—refresh and try again if needed.

⚠ The translation will overwrite any existing translations for the same language.


### How to Use

- (First time only) Set up credentials for your user.
- Edit the node "Defines Video ID and Languages".
- Click the Execute Workflow button.
- Enjoy your translated video titles and descriptions!


More details can be found in the sticky notes under each node.

### Requirements

To implement this workflow, you will need to configure credentials for the following nodes:

- **Fetch Video Information**: YouTube Auth
  - This of course, assumes that you have a YouTube account.
  - The account creation and setup takes time, but luckily it's the only slow part, once done, you are good to go.
- **AI Agent Translator**: Google Gemini (PaLM) API


Both credentials can be created directly inside the node by clicking it, then selecting “Create Credential to Connect With” and following the instructions provided by the n8n Assistant.

If you already have the credentials, simply select them!

No paid plan is required, free tiers are sufficient. Keep in mind the request limits if you extend or modify this workflow to do multiple videos at once.

## 🔗 Nodes Used

HTTP Request, YouTube, AI Agent, Simple Memory, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
