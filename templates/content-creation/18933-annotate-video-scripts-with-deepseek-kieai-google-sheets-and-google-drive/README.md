# 🎬 Annotate video scripts with DeepSeek, Kie.ai, Google Sheets and Google Drive

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Give it a video script and it figures out exactly where visuals belong, generates them with AI, and hands back the finished script with images in place. It even remembers your placement style, so it needs less guidance every time you use it.

## How it works
1. Receives a video script (and optional placement instructions) through an n8n form trigger.
2. Uses your submitted instructions if you gave any — otherwise falls back to your last saved placement style, or a sensible default if this is your first run.
3. Sends the script and style rules to DeepSeek to split the script into sentence-level segments and flag which ones need a visual with an image description.
4. For each segment that needs a visual, submits an image generation task to Kie.ai and polls until it succeeds or the retry limit is reached.
5. Downloads each generated image and uploads it to Google Drive to get a permanent shareable link.
6. Reassembles the full script with inline visual annotations and image links, then appends the annotated output and the latest style text to Google Sheets.

## Setup
1. Add a DeepSeek API key and replace `YOUR_DEEPSEEK_API_KEY` in the DeepSeek HTTP request Authorization header.
2. Add a Kie.ai API key and replace `YOUR_KIEAI_API_KEY` in both Kie.ai HTTP request Authorization headers.
3. Connect Google Sheets OAuth credentials and set the target spreadsheet and sheet tab used to store style memory and run history.
4. Connect Google Drive OAuth credentials and choose the Drive and folder where generated overlay images should be uploaded.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
