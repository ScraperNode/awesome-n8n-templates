# 🎬 Send GitHub release audio newsletters with OpenAI, Google Drive, Gmail and Sheets

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow triggers on a published GitHub Release, uses OpenAI to turn the release notes into a short spoken script and MP3, stores the audio on Google Drive, pulls subscribers from Google Sheets, and sends an HTML “listen” newsletter to them via Gmail.

## How it works
1. Triggers when a GitHub Release is published for the configured repository.
2. Parses and cleans the release changelog, extracting key items into features, fixes, improvements, and other notes.
3. Uses an OpenAI chat model to rewrite the release details into a 60–90 second spoken script.
4. Calls the OpenAI text-to-speech API to generate an MP3 audio file from the script.
5. Uploads the MP3 to Google Drive and sets the file permissions to “anyone with the link can view.”
6. Loads subscriber email addresses from Google Sheets, builds an HTML newsletter with the public audio link and release highlights, and sends it via Gmail using BCC.

## Setup
1. Connect a GitHub credential with access to the target repo and replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` in the GitHub trigger.
2. Add an OpenAI API credential for both the chat model step and the OpenAI TTS HTTP request.
3. Connect Google Drive OAuth2 and replace `YOUR_AUDIO_FOLDER_ID` with the folder where the MP3 files should be saved.
4. Connect Google Sheets OAuth2, replace `YOUR_SUBSCRIBERS_SHEET_ID`, and ensure your sheet includes subscriber rows with an `Email` (or `email`) column.
5. Connect Gmail OAuth2 and replace `YOUR_SENDER_EMAIL` with the address that sends the newsletter.

## 🔗 Nodes Used

Github Trigger, Google Sheets, HTTP Request, Google Drive, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
