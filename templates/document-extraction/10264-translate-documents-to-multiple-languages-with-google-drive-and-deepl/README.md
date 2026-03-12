# 🔬 Translate documents to multiple languages with Google Drive and DeepL

> ⚡ **508 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who's it for

This workflow is perfect for content creators, international teams, and businesses that need to translate documents into multiple languages automatically. Whether you're localizing documentation, translating marketing materials, or creating multilingual content, this workflow saves hours of manual work.

## What it does

Automatically monitors a Google Drive folder for new documents (PDF, DOCX, TXT, or Markdown) and translates them into multiple languages using DeepL API. Each translated document is saved with a language-specific filename (e.g., `document_en.pdf`, `document_zh.pdf`) in a designated folder. You receive an email notification when all translations are complete.

## How it works

1. **Monitors** a Google Drive folder for new files
2. **Detects** file format (PDF/DOCX/TXT/Markdown) and extracts text
3. **Translates** the content into your chosen languages (default: English, Chinese, Korean, Spanish, French, German)
4. **Saves** translated files with language codes in the filename
5. **Sends** an email notification with translation summary
6. **Optional**: Records translation history in Notion database

## Set up instructions

### Requirements
- Google Drive account (for file storage)
- DeepL API key (free tier: 500,000 characters/month)
- Gmail account (for notifications)
- Notion account (optional, for tracking translation history)

### Setup steps

1. **Create Google Drive folders**:
   - Create a "Source" folder for original files
   - Create a "Translated" folder for output
   - Copy the folder IDs from the URLs

2. **Get DeepL API key**:
   - Sign up at [DeepL API](https://www.deepl.com/pro-api)
   - Copy your API key

3. **Configure the workflow**:
   - Open the "Configuration (Edit Here)" node (yellow node)
   - Replace folder IDs with your own
   - Set your notification email
   - Choose target languages

4. **Set up credentials**:
   - Add Google Drive OAuth2 credentials
   - Add DeepL API credentials
   - Add Gmail OAuth2 credentials

5. **Activate the workflow** and upload a test file!

## Customization options

- **Change target languages**: Edit the `targetLanguages` array in the Configuration node (supports 30+ languages)
- **Adjust polling frequency**: Change trigger from "every minute" to hourly or daily for batch processing
- **Enable Notion tracking**: Set `enableNotion` to `true` and provide your database ID
- **Add more file formats**: Extend the Switch node to handle additional file types
- **Filter by file size**: Add conditions to skip files larger than a certain size

## Supported languages

EN (English), ZH (Chinese), KO (Korean), JA (Japanese), ES (Spanish), FR (French), DE (German), IT (Italian), PT (Portuguese), RU (Russian), and 20+ more.

## Performance

- **Short files** (1 page): ~30 seconds for 6 languages
- **Medium files** (10 pages): ~2 minutes for 6 languages
- **Large files** (100 pages): ~15 minutes for 6 languages

## Technical Details

- **Trigger**: Google Drive folder monitoring (1-minute polling)
- **Translation**: DeepL API with automatic source language detection
- **Loop implementation**: Split Out + Aggregate pattern for parallel translation
- **Error handling**: Catches API failures and sends email alerts
- **Storage**: Original file format preserved in translated outputs

## Notes

- DeepL free tier provides 500,000 characters/month (approximately 250 pages)
- For high-volume translation, consider upgrading to DeepL Pro
- The workflow creates new files instead of overwriting, preserving translation history
- Google Docs are automatically converted to the appropriate format before translation

## What You'll Learn

This workflow demonstrates several n8n patterns:
- File format detection and routing (Switch node)
- Loop implementation with Split Out + Aggregate
- Binary data handling for file operations
- Conditional logic with IF nodes (optional features)
- Cross-node data references
- Error handling and user notifications

Perfect for learning automation best practices while solving a real business problem!

## 🔗 Nodes Used

Write Binary File, Google Drive, Gmail, DeepL, Notion, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
