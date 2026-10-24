# 📱 Repurpose blog posts into social content with Gemini, Google Sheets, and Slack

> ⚡ **17 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs daily, reads your blog RSS feed, uses Google Gemini to repurpose the latest posts into Twitter/X and LinkedIn drafts in your brand voice, then appends the drafts to Google Sheets and posts them to a Slack channel for review.

## How it works
1. Runs every day on a schedule and reads items from your blog’s RSS feed.
2. Keeps only the three most recent posts to process.
3. Builds a prompt that includes your brand voice, hashtags, and each post’s title, URL, and excerpt.
4. Sends the prompt to the Google Gemini API to generate Twitter/X and LinkedIn copy formatted as JSON.
5. Parses the Gemini response into separate twitter and linkedin draft fields.
6. Appends the drafts to a Google Sheets worksheet and posts the formatted drafts to a Slack channel for review.

## Setup
1. Add credentials for the Google Gemini (PaLM) API, Google Sheets OAuth2, and Slack OAuth2.
2. Paste your blog RSS feed URL in the RSS reader step.
3. Update the brand voice text and default hashtags to match your tone.
4. Select the target Google Sheets spreadsheet and worksheet (for example, a “Social Drafts” tab) where drafts are appended.
5. Choose the Slack channel where draft messages are posted.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
