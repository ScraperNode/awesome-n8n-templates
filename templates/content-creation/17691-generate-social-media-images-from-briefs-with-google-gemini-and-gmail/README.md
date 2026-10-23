# 🎬 Generate social media images from briefs with Google Gemini and Gmail

> ⚡ **21 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects an image brief via an n8n form, uses Google Gemini to turn it into an art-directed prompt and generate an image, logs the prompt to Google Sheets, and emails the finished image (or a failure notice) to the requester via Gmail.

## How it works
1. Receives an image request through an n8n Form that captures the requester’s email, intended use, description, and a selected visual style.
2. Uses the Google Gemini chat model to rewrite the rough brief into a single detailed 40–70 word image-generation prompt with composition, lighting, palette, mood, and the chosen style.
3. Sends the art-directed prompt to Google Gemini Image generation and outputs the generated image as binary data.
4. If image generation fails, sends a Gmail message to the requester explaining that the image could not be generated.
5. If image generation succeeds, appends a log entry to a Google Sheets spreadsheet.
6. Emails the generated image as a Gmail attachment to the requester, including the exact prompt used in the message body.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Google Sheets OAuth, and Gmail OAuth.
2. Select the target Google Sheets spreadsheet and sheet/tab in the logging step (for example, a tab named “Images”).
3. Open the form URL, submit a test request, and confirm emails send successfully and the generated image arrives as an attachment.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
