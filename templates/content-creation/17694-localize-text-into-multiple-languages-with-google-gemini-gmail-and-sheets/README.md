# 🎬 Localize text into multiple languages with Google Gemini, Gmail, and Sheets

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects text and a target language list from an n8n form, uses Google Gemini to localize the content for each language, saves each translation to Google Sheets, and then emails all translations together via Gmail.

## How it works
1. Receives a form submission with the requester’s email, content type, target languages, and source text.
2. Splits the comma-separated language list into one item per language.
3. Processes languages in small batches and sends each item to Google Gemini with instructions to localize (preserve placeholders and brand names) for the specified content type.
4. Captures the model output as the translation and appends the language, source text, and translation to a Google Sheets “Translations” tab.
5. After all languages are processed, compiles every translation into a single plain-text email body.
6. Sends one email via Gmail to the requester containing all translations.

## Setup
1. Add credentials for the Google Gemini (PaLM) API, Google Sheets OAuth2, and Gmail OAuth2.
2. Select the target Google Sheets spreadsheet and ensure it has a “Translations” sheet/tab for appending rows.
3. Publish the n8n form and share its URL with users who will submit localization requests.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
