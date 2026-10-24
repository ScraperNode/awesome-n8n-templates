# 🎬 Generate and compare marketing content with GPT, Claude, Gemini, and Google Sheets

> ⚡ **84 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects a topic and content type from an n8n Form, generates three variations of the content in parallel using CometAPI-backed GPT, Claude, and Gemini models, then logs the outputs with a timestamp to Google Sheets.

## How it works
1. Triggers when a user submits the n8n Form with a Topic and Content Type.
2. Formats the submitted fields into prompt variables used for content generation.
3. Sends the same prompt to CometAPI three times in parallel to generate content with GPT, Anthropic Claude, and Google Gemini models.
4. Merges the three model responses into a single item and maps each result into dedicated output fields.
5. Appends a new row to Google Sheets containing the topic, content type, timestamp, and all three generated outputs.

## Setup
1. Publish the workflow and use the generated n8n Form URL to collect submissions.
2. Add and select your CometAPI credentials for each CometAPI model node.
3. Add your Google Sheets credentials and update the target spreadsheet and sheet where results are appended, ensuring the columns match the mapped fields (Timestamp, Topic, ContentType, and model result columns).

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
