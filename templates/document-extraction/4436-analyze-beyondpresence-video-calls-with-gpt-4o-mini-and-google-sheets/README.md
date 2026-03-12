# 🔬 Analyze BeyondPresence video calls with GPT-4o-mini and Google Sheets

> ⚡ **393 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Transform your [BeyondPresence](https://app.bey.chat/settings) video agent conversations into comprehensive insights by automatically analyzing each call with AI and organizing 35+ data points in Google Sheets. This template helps customer success, support, and training teams save 30+ minutes per call on documentation while ensuring no critical action items or insights are missed.

## How it works
- **Webhook receives** completed call data from BeyondPresence including full transcript
- **Data validation** ensures quality and adds enriched metadata (duration, time calculations)  
- **AI analysis** (GPT-4) extracts action items, sentiment, decisions, and recommendations
- **Parse response** handles the AI output and structures it for sheets
- **Auto-append** to Google Sheets with 35+ insights per call organized beautifully

## Set up steps
1. **Copy our Google Sheets template** - One click! Get pre-formatted sheet: [BeyondPresence Call Analytics Template](https://docs.google.com/spreadsheets/d/1TO6-jkCtoSFNLJObtN0UyklgdUd3ZxEnUaNvUaBjpvo/copy)
2. **Connect accounts** - Add OpenAI API key and Google Sheets OAuth2
3. **Configure webhook** - Copy URL from n8n to [BeyondPresence Settings](https://app.bey.chat/settings) → Webhooks
4. **Customize AI prompt** (optional) - Adjust analysis focus for your use case
5. **Test with a call** - Make a test call and watch insights appear!

**Setup time**: 5-10 minutes
**Requirements**: BeyondPresence account, OpenAI API key, Google account

## 🔗 Nodes Used

Google Sheets, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
