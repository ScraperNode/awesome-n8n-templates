# 🎬 Generate multilingual audio content with OpenAI, ElevenLabs, Google Drive and Slack

> ⚡ **56 views** · 🎬 [Content Creation & Video](../)

## Description

## How It Works
This workflow automates multilingual audio content creation for content creators, educators, and marketing teams distributing materials globally. It solves the challenge of producing high-quality, translated audio content at scale without manual intervention. Starting with source text, the system translates content into English, Spanish, French, and German using AI translation services, validates translation quality through automated scoring, generates natural-sounding audio using ElevenLabs text-to-speech technology, calculates audio metrics for quality assurance, combines all language versions into a single package, uploads to Google Drive for centralized storage, and sends Slack notifications for team collaboration. The workflow eliminates weeks of manual translation and voice recording work while maintaining consistent quality across all language variants.

## Setup Steps
1. Configure AI translation service credentials for multilingual processing 
2. Add ElevenLabs API key and select voice models for each target language 
3. Set quality threshold scores for translation validation gates 
4. Connect Google Drive with designated folder for audio storage 
5. Configure Slack webhook for team notifications with custom message

## Prerequisites
AI translation API access (OpenAI/DeepL), ElevenLabs account with sufficient character quota

## Use Cases
E-learning course localization, podcast multilingual distribution

## Customization
Add additional languages, modify quality score thresholds

## Benefits
Reduces content localization time by 95%, eliminates voice talent costs

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
