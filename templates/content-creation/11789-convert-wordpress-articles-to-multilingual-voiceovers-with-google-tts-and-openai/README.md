# 🎬 Convert WordPress articles to multilingual voiceovers with Google TTS and OpenAI

> ⚡ **44 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Automatically transform WordPress articles into multilingual audio. The solution cleans and translates article content with OpenAI, generates long-form speech through Google Cloud Text-to-Speech, publishes audio back to WordPress, and tracks processing in Google Sheets.

## How it works
1. WordPress ingestion — The workflow retrieves WordPress articles selected for voiceover processing.
2. AI text preparation — OpenAI cleans and normalizes article content so markup and formatting do not degrade speech generation.
3. Translation — Content can be translated between configured languages before speech synthesis.
4. Long-form TTS — Google Cloud generates audio suitable for longer WordPress content through the included TTS architecture.
5. Publishing — Generated audio is associated with the WordPress content so visitors can listen to the article.
6. Tracking — Google Sheets records processing state and provides traceability across articles and generated voiceovers.

## Setup
1. Purchase the complete package — Obtain the workflow, TTS microservice, configuration files, and deployment documentation from Gumroad or the store.
2. Configure WordPress — Connect the target WordPress site and review the content-selection and publishing configuration.
3. Configure OpenAI — Add the required credentials and review cleaning, translation, and language settings.
4. Deploy Google Cloud TTS — Follow the included documentation to configure Google Cloud and the supplied FastAPI/Docker TTS component.
5. Connect Google Sheets — Configure the tracking spreadsheet and credentials used by the workflow.
6. Test the pipeline — Process a sample article end-to-end before enabling scheduled production runs.

## Requirements
- n8n instance
- WordPress site with suitable API access
- OpenAI API credentials
- Google Cloud project with Text-to-Speech services configured
- Google Sheets and credentials
- Environment capable of running the supplied TTS service
- Additional languages and voices (optional)
- Custom WordPress audio-player presentation (optional)
- Additional status notifications or monitoring (optional)
- Alternative scheduling and article-selection rules (optional)

## Customization
- Languages — Extend the default language flow with additional translation and TTS combinations.
- Voices — Change Google Cloud voices, language codes, and speech configuration.
- AI processing — Adapt the OpenAI prompts used for cleaning and translation.
- Publishing — Customize where and how generated audio is presented in WordPress.
- Tracking — Extend Google Sheets with additional metadata, status fields, or reporting.
- Workflow extensions — Add notifications, approval steps, storage targets, or downstream publishing channels.

## Additional info
The complete paid package includes the n8n workflow, Google Cloud TTS microservice, setup documentation, Google Sheets template, and troubleshooting material.
This public repository intentionally contains the product overview and media samples rather than the complete paid workflow package.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, Google Translate, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
