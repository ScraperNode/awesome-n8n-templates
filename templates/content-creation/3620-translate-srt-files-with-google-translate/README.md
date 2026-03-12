# 🎬 Translate SRT files with Google Translate

> ⚡ **1,657 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow is designed to translate SRT subtitle files from one language to another using Google Translate.

### The workflow follows these main steps:

1. Accept an SRT file upload and target language selection
2. Extract and parse the SRT file content
3. Split the content into translatable segments
4. Translate each segment using Google Translate
5. Reassemble the translated content into a proper SRT format
6. Return the translated file to the user

You'll need a Google Console Cloud account to access the Translate API.


### Who is this for?

This workflow is designed for content creators, video editors, translators, and anyone who needs to translate subtitle files (.srt) from one language to another. It's particularly useful for those working with international content, educational materials, or preparing videos for global audiences.


### What problem does this workflow solve?

Translating subtitle files manually is time-consuming and error-prone. Professional translation services can be expensive, especially for multiple videos or long content. This workflow automates the translation process while maintaining the proper SRT format including timestamps and subtitle numbering.


## Setup

- Set up Google Translate credentials:
-- Create a Google Cloud project and enable the Google Translate API
-- Create OAuth credentials and configure them in the Google Translate node
- Customize language options:
-- The default workflow includes English (EN) and Japanese (JP) options
-- Add more language options by editing the dropdown field in the "Receive SRT File to Translate" node
-- Use standard language codes that Google Translate supports
- Add more languages:
-- Edit the form trigger node to include additional language options in the dropdown

## 🔗 Nodes Used

Google Translate, n8n Form Trigger, Convert to File, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
