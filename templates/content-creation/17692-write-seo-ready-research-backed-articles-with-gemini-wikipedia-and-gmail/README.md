# 🎬 Write SEO-ready research-backed articles with Gemini, Wikipedia and Gmail

> ⚡ **29 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects a topic, audience, and keyword in an n8n form, researches the topic with Wikipedia, writes and SEO-edits a ~500-word article using Google Gemini, then logs the result to Google Sheets and emails the finished article via Gmail.

## How it works
1. Receives an article request through an n8n form that captures the recipient email, topic, audience, and SEO keyword.
2. Uses a Google Gemini agent with the Wikipedia tool to research the topic and return structured notes with key points, numbers, and misconceptions.
3. Uses Google Gemini to draft a ~500-word article based only on the research notes for the specified audience and topic.
4. Uses Google Gemini to edit and optimize the draft, naturally incorporating the provided keyword and generating an SEO title and meta description.
5. Extracts the article body, title, meta description, and requester email from the editor output into separate fields.
6. Appends the final article details to a Google Sheets spreadsheet and sends the completed article to the requester via Gmail.

## Setup
1. Add credentials for the Google Gemini (PaLM) API, Google Sheets OAuth2, and Gmail OAuth2.
2. Select the target Google Sheets spreadsheet and set the sheet/tab name (for example, an “Articles” tab) in the logging step.
3. Open the form URL for the trigger and use it as the entry point to submit article requests.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Basic LLM Chain, Wikipedia, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
