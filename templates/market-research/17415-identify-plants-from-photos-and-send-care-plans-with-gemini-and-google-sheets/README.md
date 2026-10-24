# 📊 Identify plants from photos and send care plans with Gemini and Google Sheets

> ⚡ **33 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow collects a plant photo via an n8n form, uses Google Gemini to identify the plant and assess its health, logs the result to Google Sheets, and emails a tailored care plan through Gmail based on the plant’s condition.

## How it works
1. Receives a submission from an n8n Form that includes the user’s email, plant nickname, location/light conditions, and a single plant photo.
2. Sends the photo and location context to Google Gemini to return a structured report with identification, confidence, health status, problems, watering guidance, light needs, care tips, watering interval, and pet toxicity.
3. If the image cannot be read or the AI step fails, sends a Gmail message asking the user to retry with a clearer photo.
4. Normalizes the AI report, calculates the next watering date from the returned watering interval, and prepares fields for logging and emailing.
5. Appends or updates the plant entry in a Google Sheets “Plants” tab to maintain a care log keyed by the plant nickname.
6. Routes by the assessed health (dying, sick, healthy, or other/unclear) and sends the matching Gmail email with either an urgent rescue plan, a treatment plan, a regular care schedule, or a low-confidence identification request.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Google Sheets OAuth2, and Gmail OAuth2.
2. Select your target Google Sheets spreadsheet and ensure it has a tab named “Plants” for the append/update operation.
3. Publish the n8n Form and share or open the form URL on the device you’ll use to upload plant photos.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
