# 🎬 Translate YouTube video metadata into multiple languages with OpenAI

> ⚡ **167 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow fetches a YouTube video’s title and description, uses OpenAI to translate them into multiple target languages, and updates the video’s YouTube localizations via the YouTube Data API, returning a YouTube Studio link to review the translations.

## How it works
1. Runs manually when you execute the workflow.
2. Reads the configured YouTube video ID, default language, target languages, and OpenAI model.
3. Fetches the video’s current metadata (including existing localizations) from YouTube.
4. Removes the default language from the target language list and prepares the language-code keys required for the translation output.
5. Sends the title and description to OpenAI and parses the response as structured JSON with a translated title and description per language code.
6. Updates the video on YouTube by writing the translated metadata into the video’s localizations via a single YouTube API request.
7. Outputs a YouTube Studio translations URL so you can review the updated localizations.

## Setup
1. Add YouTube OAuth2 credentials with permission to edit videos on the target channel.
2. Add an OpenAI API key credential and choose a model name in the configuration.
3. Set the `video_id`, `default_language`, and `target_languages` (language name → language code) values in the Configuration step before running the workflow.
4. Ensure you understand that updating localizations overwrites any existing translations for the same language codes on the video.

## Additional info
## Translate YouTube video titles and descriptions to multiple languages with OpenAI

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Translate-YouTube-video-titles-and-descriptions-to-multiple-languages-with-OpenAI-Course-support-EN-3993d6550fd981c997cfc26dbe14d58a)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, YouTube, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
