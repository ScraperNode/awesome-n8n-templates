# 📱 Create daily AI and blockchain social posts with SerpAPI, Groq and Pollinations

> ⚡ **25 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs daily (or manually) to pull the last 24 hours of AI and blockchain headlines from Google News via SerpAPI, uses Groq Llama 3.3 to draft Twitter/X and LinkedIn posts, generates a matching image with Pollinations, then saves everything to Google Sheets and notifies Slack.

## How it works
1. Runs on a daily 8 AM schedule (or via a manual trigger for testing).
2. Queries Google News through SerpAPI for the last day’s AI, artificial intelligence, blockchain, and crypto headlines.
3. Builds a numbered news digest and stops with an error if no results are returned.
4. Sends the digest to Groq (Llama 3.3 70B) to generate a Twitter/X post and a LinkedIn post in JSON format.
5. Generates a 1024×1024 social image with Pollinations based on the Twitter/X post, then uploads it to Google Drive and makes it publicly accessible.
6. Appends the generated posts and public image URL to Google Sheets, logs the successful run to a separate sheet, and posts a success notification to a Slack channel.

## Setup
1. Add a SerpAPI credential using HTTP Query Auth and provide your API key as the `api_key` query parameter.
2. Add a Groq API credential and ensure the Groq Llama 3.3 chat model is selected.
3. Add a Pollinations Bearer token credential (or adjust the request to use the anonymous tier if applicable).
4. Connect Google Drive OAuth and choose the destination folder (or leave it as My Drive) for image uploads.
5. Connect Google Sheets OAuth and select the target spreadsheet and sheet tabs for both the content append and the run log append steps.
6. Connect Slack OAuth and set the channel where the workflow posts the success notification.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
