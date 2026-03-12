# 🎬 Translate Chinese text to multilingual audio with GPT-4o and ElevenLabs

> ⚡ **20 views** · 🎬 [Content Creation & Video](../)

## Description

## How It Works
This workflow provides automated Chinese text translation with high-quality audio synthesis for language learning platforms, content creators, and international communication teams. It addresses the challenge of converting Chinese text into accurate multilingual translations with natural-sounding voiceovers. The system receives Chinese text via webhook, validates input formatting, and processes it through an AI translation agent that generates multiple language versions. Each translation is converted to speech using ElevenLabs' neural voice models, then formatted into professional audio responses. A quality review agent evaluates translation accuracy, cultural appropriateness, and audio clarity against predefined criteria. High-scoring outputs are returned via webhook for immediate use, while low-quality results trigger review processes, ensuring consistent delivery of publication-ready multilingual audio content.

## Setup Steps
1. Obtain OpenAI API key and configure in "Translation Agent"
2. Set up ElevenLabs account, generate API key
3. Configure webhook URL and update in source applications to trigger workflow
4. Customize target languages and voice settings in translation and ElevenLabs nodes
5. Adjust quality thresholds in "Check Quality Score" 
6. Update output webhook endpoint in "Return Audio Files" node

## Prerequisites
Active accounts: OpenAI API access, ElevenLabs subscription.

## Use Cases
Chinese language learning apps, international marketing content localization

## Customization
Add additional target languages, modify voice characteristics and speaking rates

## Benefits
Automates 95% of translation workflow, delivers publication-ready audio in minutes

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
